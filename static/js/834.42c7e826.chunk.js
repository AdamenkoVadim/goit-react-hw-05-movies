"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[834],{834:function(t,n,e){e.r(n),e.d(n,{default:function(){return Lt}});var r,o,a,i=e(861),s=e(439),c=e(757),u=e.n(c),l=e(791),d=e(87),f=e(689),p=e(787),m=e(168),v=e(444),g=v.ZP.input(r||(r=(0,m.Z)(["\n  margin-left: 20px;\n  margin-right: 10px;\n  outline: none;\n  border-radius: 4px;\n  border: 1px solid grey;\n  height: 20px;\n\n  &:focus,\n  &:hover {\n    border: 1px solid tomato;\n    transition: border 250ms linear;\n  }\n"]))),h=v.ZP.ul(o||(o=(0,m.Z)(["\n  list-style: none;\n  text-decoration: none;\n"]))),b=(0,v.ZP)(d.rU)(a||(a=(0,m.Z)(["\n  text-decoration: none;\n  color: black;\n\n  &:hover {\n    color: tomato;\n  }\n"]))),y=e(433);function x(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function w(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function j(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?w(Object(e),!0).forEach((function(n){x(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):w(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var O={data:""},Z=function(t){return"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||O},E=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,k=/\/\*[^]*?\*\/|  +/g,P=/\n+/g,C=function t(n,e){var r="",o="",a="",i=function(i){var c=n[i];"@"==i[0]?"i"==i[1]?r=i+" "+c+";":o+="f"==i[1]?t(c,i):i+"{"+t(c,"k"==i[1]?"":e)+"}":"object"==typeof c?o+=t(c,e?e.replace(/([^,])+/g,(function(t){return i.replace(/(^:.*)|([^,])+/g,(function(n){return/&/.test(n)?n.replace(/&/g,t):t?t+" "+n:n}))})):i):null!=c&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=t.p?t.p(i,c):i+":"+c+";"),s=i};for(var s in n)i(s);return r+(e&&a?e+"{"+a+"}":a)+o},D={},N=function t(n){if("object"==typeof n){var e="";for(var r in n)e+=r+t(n[r]);return e}return n},_=function(t,n,e,r,o){var a=N(t),i=D[a]||(D[a]=function(t){for(var n=0,e=11;n<t.length;)e=101*e+t.charCodeAt(n++)>>>0;return"go"+e}(a));if(!D[i]){var s=a!==t?t:function(t){for(var n,e,r=[{}];n=E.exec(t.replace(k,""));)n[4]?r.shift():n[3]?(e=n[3].replace(P," ").trim(),r.unshift(r[0][e]=r[0][e]||{})):r[0][n[1]]=n[2].replace(P," ").trim();return r[0]}(t);D[i]=C(o?x({},"@keyframes "+i,s):s,e?"":"."+i)}var c=e&&D.g?D.g:null;return e&&(D.g=D[i]),function(t,n,e,r){r?n.data=n.data.replace(r,t):-1===n.data.indexOf(t)&&(n.data=e?t+n.data:n.data+t)}(D[i],n,r,c),i},z=function(t,n,e){return t.reduce((function(t,r,o){var a=n[o];if(a&&a.call){var i=a(e),s=i&&i.props&&i.props.className||/^go/.test(i)&&i;a=s?"."+s:i&&"object"==typeof i?i.props?"":C(i,""):!1===i?"":i}return t+r+(null==a?"":a)}),"")};function S(t){var n=this||{},e=t.call?t(n.p):t;return _(e.unshift?e.raw?z(e,[].slice.call(arguments,1),n.p):e.reduce((function(t,e){return Object.assign(t,e&&e.call?e(n.p):e)}),{}):e,Z(n.target),n.g,n.o,n.k)}S.bind({g:1});var A,I,M,T,H,F,L,U,q,B,R,Y,$,G,J,K,Q,V,W,X=S.bind({k:1});function tt(t,n){var e=this||{};return function(){var r=arguments;function o(a,i){var s=Object.assign({},a),c=s.className||o.className;e.p=Object.assign({theme:I&&I()},s),e.o=/ *go\d+/.test(c),s.className=S.apply(e,r)+(c?" "+c:""),n&&(s.ref=i);var u=t;return t[0]&&(u=s.as||t,delete s.as),M&&u[0]&&M(s),A(u,s)}return n?n(o):o}}var nt=function(t,n){return function(t){return"function"==typeof t}(t)?t(n):t},et=function(){var t=0;return function(){return(++t).toString()}}(),rt=function(){var t;return function(){if(void 0===t&&typeof window<"u"){var n=matchMedia("(prefers-reduced-motion: reduce)");t=!n||n.matches}return t}}(),ot=new Map,at=function(t){if(!ot.has(t)){var n=setTimeout((function(){ot.delete(t),ut({type:4,toastId:t})}),1e3);ot.set(t,n)}},it=function t(n,e){switch(e.type){case 0:return j(j({},n),{},{toasts:[e.toast].concat((0,y.Z)(n.toasts)).slice(0,20)});case 1:return e.toast.id&&function(t){var n=ot.get(t);n&&clearTimeout(n)}(e.toast.id),j(j({},n),{},{toasts:n.toasts.map((function(t){return t.id===e.toast.id?j(j({},t),e.toast):t}))});case 2:var r=e.toast;return n.toasts.find((function(t){return t.id===r.id}))?t(n,{type:1,toast:r}):t(n,{type:0,toast:r});case 3:var o=e.toastId;return o?at(o):n.toasts.forEach((function(t){at(t.id)})),j(j({},n),{},{toasts:n.toasts.map((function(t){return t.id===o||void 0===o?j(j({},t),{},{visible:!1}):t}))});case 4:return void 0===e.toastId?j(j({},n),{},{toasts:[]}):j(j({},n),{},{toasts:n.toasts.filter((function(t){return t.id!==e.toastId}))});case 5:return j(j({},n),{},{pausedAt:e.time});case 6:var a=e.time-(n.pausedAt||0);return j(j({},n),{},{pausedAt:void 0,toasts:n.toasts.map((function(t){return j(j({},t),{},{pauseDuration:t.pauseDuration+a})}))})}},st=[],ct={toasts:[],pausedAt:void 0},ut=function(t){ct=it(ct,t),st.forEach((function(t){t(ct)}))},lt={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},dt=function(t){return function(n,e){var r=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",e=arguments.length>2?arguments[2]:void 0;return j(j({createdAt:Date.now(),visible:!0,type:n,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0},e),{},{id:(null==e?void 0:e.id)||et()})}(n,t,e);return ut({type:2,toast:r}),r.id}},ft=function(t,n){return dt("blank")(t,n)};ft.error=dt("error"),ft.success=dt("success"),ft.loading=dt("loading"),ft.custom=dt("custom"),ft.dismiss=function(t){ut({type:3,toastId:t})},ft.remove=function(t){return ut({type:4,toastId:t})},ft.promise=function(t,n,e){var r=ft.loading(n.loading,j(j({},e),null==e?void 0:e.loading));return t.then((function(t){return ft.success(nt(n.success,t),j(j({id:r},e),null==e?void 0:e.success)),t})).catch((function(t){ft.error(nt(n.error,t),j(j({id:r},e),null==e?void 0:e.error))})),t};var pt=function(t,n){ut({type:1,toast:{id:t,height:n}})},mt=function(){ut({type:5,time:Date.now()})},vt=function(t){var n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,l.useState)(ct),e=(0,s.Z)(n,2),r=e[0],o=e[1];(0,l.useEffect)((function(){return st.push(o),function(){var t=st.indexOf(o);t>-1&&st.splice(t,1)}}),[r]);var a=r.toasts.map((function(n){var e,r;return j(j(j(j({},t),t[n.type]),n),{},{duration:n.duration||(null==(e=t[n.type])?void 0:e.duration)||(null==t?void 0:t.duration)||lt[n.type],style:j(j(j({},t.style),null==(r=t[n.type])?void 0:r.style),n.style)})}));return j(j({},r),{},{toasts:a})}(t),e=n.toasts,r=n.pausedAt;(0,l.useEffect)((function(){if(!r){var t=Date.now(),n=e.map((function(n){if(n.duration!==1/0){var e=(n.duration||0)+n.pauseDuration-(t-n.createdAt);if(!(e<0))return setTimeout((function(){return ft.dismiss(n.id)}),e);n.visible&&ft.dismiss(n.id)}}));return function(){n.forEach((function(t){return t&&clearTimeout(t)}))}}}),[e,r]);var o=(0,l.useCallback)((function(){r&&ut({type:6,time:Date.now()})}),[r]),a=(0,l.useCallback)((function(t,n){var r,o=n||{},a=o.reverseOrder,i=void 0!==a&&a,s=o.gutter,c=void 0===s?8:s,u=o.defaultPosition,l=e.filter((function(n){return(n.position||u)===(t.position||u)&&n.height})),d=l.findIndex((function(n){return n.id===t.id})),f=l.filter((function(t,n){return n<d&&t.visible})).length;return(r=l.filter((function(t){return t.visible}))).slice.apply(r,(0,y.Z)(i?[f+1]:[0,f])).reduce((function(t,n){return t+(n.height||0)+c}),0)}),[e]);return{toasts:e,handlers:{updateHeight:pt,startPause:mt,endPause:o,calculateOffset:a}}},gt=X(T||(T=(0,m.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]))),ht=X(H||(H=(0,m.Z)(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),bt=X(F||(F=(0,m.Z)(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]))),yt=tt("div")(L||(L=(0,m.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"])),(function(t){return t.primary||"#ff4b4b"}),gt,ht,(function(t){return t.secondary||"#fff"}),bt),xt=X(U||(U=(0,m.Z)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),wt=tt("div")(q||(q=(0,m.Z)(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"])),(function(t){return t.secondary||"#e0e0e0"}),(function(t){return t.primary||"#616161"}),xt),jt=X(B||(B=(0,m.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]))),Ot=X(R||(R=(0,m.Z)(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]))),Zt=tt("div")(Y||(Y=(0,m.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"])),(function(t){return t.primary||"#61d345"}),jt,Ot,(function(t){return t.secondary||"#fff"})),Et=tt("div")($||($=(0,m.Z)(["\n  position: absolute;\n"]))),kt=tt("div")(G||(G=(0,m.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]))),Pt=X(J||(J=(0,m.Z)(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),Ct=tt("div")(K||(K=(0,m.Z)(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),Pt),Dt=function(t){var n=t.toast,e=n.icon,r=n.type,o=n.iconTheme;return void 0!==e?"string"==typeof e?l.createElement(Ct,null,e):e:"blank"===r?null:l.createElement(kt,null,l.createElement(wt,j({},o)),"loading"!==r&&l.createElement(Et,null,"error"===r?l.createElement(yt,j({},o)):l.createElement(Zt,j({},o))))},Nt=function(t){return"\n0% {transform: translate3d(0,".concat(-200*t,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n")},_t=function(t){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*t,"%,-1px) scale(.6); opacity:0;}\n")},zt=tt("div")(Q||(Q=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]))),St=tt("div")(V||(V=(0,m.Z)(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]))),At=l.memo((function(t){var n=t.toast,e=t.position,r=t.style,o=t.children,a=n.height?function(t,n){var e=t.includes("top")?1:-1,r=rt()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Nt(e),_t(e)],o=(0,s.Z)(r,2),a=o[0],i=o[1];return{animation:n?"".concat(X(a)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(X(i)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}}(n.position||e||"top-center",n.visible):{opacity:0},i=l.createElement(Dt,{toast:n}),c=l.createElement(St,j({},n.ariaProps),nt(n.message,n));return l.createElement(zt,{className:n.className,style:j(j(j({},a),r),n.style)},"function"==typeof o?o({icon:i,message:c}):l.createElement(l.Fragment,null,i,c))}));!function(t,n,e,r){C.p=n,A=t,I=e,M=r}(l.createElement);var It=function(t){var n=t.id,e=t.className,r=t.style,o=t.onHeightUpdate,a=t.children,i=l.useCallback((function(t){if(t){var e=function(){var e=t.getBoundingClientRect().height;o(n,e)};e(),new MutationObserver(e).observe(t,{subtree:!0,childList:!0,characterData:!0})}}),[n,o]);return l.createElement("div",{ref:i,className:e,style:r},a)},Mt=S(W||(W=(0,m.Z)(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]))),Tt=function(t){var n=t.reverseOrder,e=t.position,r=void 0===e?"top-center":e,o=t.toastOptions,a=t.gutter,i=t.children,s=t.containerStyle,c=t.containerClassName,u=vt(o),d=u.toasts,f=u.handlers;return l.createElement("div",{style:j({position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none"},s),className:c,onMouseEnter:f.startPause,onMouseLeave:f.endPause},d.map((function(t){var e=t.position||r,o=function(t,n){var e=t.includes("top"),r=e?{top:0}:{bottom:0},o=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return j(j({left:0,right:0,display:"flex",position:"absolute",transition:rt()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY(".concat(n*(e?1:-1),"px)")},r),o)}(e,f.calculateOffset(t,{reverseOrder:n,gutter:a,defaultPosition:r}));return l.createElement(It,{id:t.id,key:t.id,onHeightUpdate:f.updateHeight,className:t.visible?Mt:"",style:o},"custom"===t.type?nt(t.message,t):i?i(t):l.createElement(At,{toast:t,position:e}))})))},Ht=ft,Ft=e(184);function Lt(){var t=(0,l.useState)([]),n=(0,s.Z)(t,2),e=n[0],r=n[1],o=(0,d.lr)(),a=(0,s.Z)(o,2),c=a[0],m=a[1],v=(0,l.useState)(""),y=(0,s.Z)(v,2),x=y[0],w=y[1],j=(0,f.TH)(),O=c.get("name");(0,l.useEffect)((function(){O&&(0,p.PM)(O).then(r)}),[O]);var Z=function(){var t=(0,i.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,(0,p.PM)(x);case 3:if(e=t.sent,x){t.next=7;break}return Ht("Enter something",{icon:"\u270d"}),t.abrupt("return");case 7:r(e),m(""!==O?{name:x}:{}),n.target.reset();case 10:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return(0,Ft.jsxs)("div",{children:[(0,Ft.jsxs)("form",{onSubmit:Z,children:[(0,Ft.jsx)(g,{type:"text",placeholder:"Enter your search query",onChange:function(t){w(t.target.value.toLowerCase())}}),(0,Ft.jsx)("button",{type:"submit",children:"Search"})]}),e.length>0&&(0,Ft.jsx)(h,{children:e.map((function(t){var n=t.id,e=t.title;return(0,Ft.jsx)("li",{children:(0,Ft.jsx)(b,{to:"/movies/".concat(n),state:{from:j},children:(0,Ft.jsx)("p",{children:e})})},n)}))}),(0,Ft.jsx)(Tt,{autoClose:2e3})]})}}}]);
//# sourceMappingURL=834.42c7e826.chunk.js.map