(this.webpackJsonpcbetar2=this.webpackJsonpcbetar2||[]).push([[42],{487:function(e,t,n){"use strict";n.r(t),n.d(t,"startInputShims",(function(){return p}));var o=n(8),r=n(34),i=new WeakMap,a=function(e,t,n,o){void 0===o&&(o=0),i.has(e)!==n&&(n?u(e,t,o):s(e,t))},c=function(e){return e===e.getRootNode().activeElement},u=function(e,t,n){var o=t.parentNode,r=t.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,o.appendChild(r),i.set(e,r);var a="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform="translate3d("+a+"px,"+n+"px,0) scale(0)"},s=function(e,t){var n=i.get(e);n&&(i.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},l="input, textarea, [no-blur]",d=function(e,t,n,o){var r=e.top,i=e.bottom,a=t.top,c=a+15,u=.75*Math.min(t.bottom,o-n)-i,s=c-r,l=Math.round(u<0?-u:s>0?-s:0),d=Math.min(l,r-a),f=Math.abs(d)/.3;return{scrollAmount:d,scrollDuration:Math.min(400,Math.max(150,f)),scrollPadding:n,inputSafeY:4-(r-c)}},f=function(e,t,n,r,i){return Object(o.a)(void 0,void 0,void 0,(function(){var c,u,s,l,f,v;return Object(o.c)(this,(function(m){switch(m.label){case 0:return n||r?(c=function(e,t,n){var o=e.closest("ion-item,[ion-item]")||e;return d(o.getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight)}(e,n||r,i),n&&Math.abs(c.scrollAmount)<4?(t.focus(),[2]):(a(e,t,!0,c.inputSafeY),t.focus(),"undefined"===typeof window?[3,3]:(s=function(){return Object(o.a)(void 0,void 0,void 0,(function(){return Object(o.c)(this,(function(o){switch(o.label){case 0:return void 0!==u&&clearTimeout(u),window.removeEventListener("ionKeyboardDidShow",l),window.removeEventListener("ionKeyboardDidShow",s),n?[4,n.scrollByPoint(0,c.scrollAmount,c.scrollDuration)]:[3,2];case 1:o.sent(),o.label=2;case 2:return a(e,t,!1,c.inputSafeY),t.focus(),[2]}}))}))},l=function(){window.removeEventListener("ionKeyboardDidShow",l),window.addEventListener("ionKeyboardDidShow",s)},n?[4,n.getScrollElement()]:[3,2]))):[2];case 1:if(f=m.sent(),v=f.scrollHeight-f.clientHeight,c.scrollAmount>v-f.scrollTop)return"password"===t.type?(c.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",l)):window.addEventListener("ionKeyboardDidShow",s),u=setTimeout(s,1e3),[2];m.label=2;case 2:s(),m.label=3;case 3:return[2]}}))}))},v=function(e,t,n){if(t&&n){var o=t.x-n.x,r=t.y-n.y;return o*o+r*r>e*e}return!1},m=function(e,t){if("INPUT"===e.tagName&&(!e.parentElement||"ION-INPUT"!==e.parentElement.tagName)&&(!e.parentElement||!e.parentElement.parentElement||"ION-SEARCHBAR"!==e.parentElement.parentElement.tagName)){var n=e.closest("ion-content");if(null!==n){var o=n.$ionPaddingTimer;o&&clearTimeout(o),t>0?n.style.setProperty("--keyboard-offset",t+"px"):n.$ionPaddingTimer=setTimeout((function(){n.style.setProperty("--keyboard-offset","0px")}),120)}}},p=function(e){var t=document,n=e.getNumber("keyboardHeight",290),i=e.getBoolean("scrollAssist",!0),u=e.getBoolean("hideCaretOnScroll",!0),s=e.getBoolean("inputBlurring",!0),d=e.getBoolean("scrollPadding",!0),p=Array.from(t.querySelectorAll("ion-input, ion-textarea")),b=new WeakMap,h=new WeakMap,w=function(e){return Object(o.a)(void 0,void 0,void 0,(function(){var t,s,l,d,m;return Object(o.c)(this,(function(o){switch(o.label){case 0:return e.componentOnReady?[4,e.componentOnReady()]:[3,2];case 1:o.sent(),o.label=2;case 2:return t=e.shadowRoot||e,s=t.querySelector("input")||t.querySelector("textarea"),l=e.closest("ion-content"),d=l?null:e.closest("ion-footer"),s?(l&&u&&!b.has(e)&&(m=function(e,t,n){if(!n||!t)return function(){};var o=function(n){c(t)&&a(e,t,n)},i=function(){return a(e,t,!1)},u=function(){return o(!0)},s=function(){return o(!1)};return Object(r.a)(n,"ionScrollStart",u),Object(r.a)(n,"ionScrollEnd",s),t.addEventListener("blur",i),function(){Object(r.b)(n,"ionScrollStart",u),Object(r.b)(n,"ionScrollEnd",s),t.addEventListener("ionBlur",i)}}(e,s,l),b.set(e,m)),(l||d)&&i&&!h.has(e)&&(m=function(e,t,n,o,i){var a,u=function(e){a=Object(r.o)(e)},s=function(u){if(a){var s=Object(r.o)(u);v(6,a,s)||c(t)||(u.preventDefault(),u.stopPropagation(),f(e,t,n,o,i))}};return e.addEventListener("touchstart",u,!0),e.addEventListener("touchend",s,!0),function(){e.removeEventListener("touchstart",u,!0),e.removeEventListener("touchend",s,!0)}}(e,s,l,d,n),h.set(e,m)),[2]):[2]}}))}))};s&&function(){var e=!0,t=!1,n=document,o=function(){t=!0},i=function(){e=!0},a=function(o){if(t)t=!1;else{var r=n.activeElement;if(r&&!r.matches(l)){var i=o.target;i!==r&&(i.matches(l)||i.closest(l)||(e=!1,setTimeout((function(){e||r.blur()}),50)))}}};Object(r.a)(n,"ionScrollStart",o),n.addEventListener("focusin",i,!0),n.addEventListener("touchend",a,!1)}(),d&&function(e){var t=document,n=function(t){m(t.target,e)},o=function(e){m(e.target,0)};t.addEventListener("focusin",n),t.addEventListener("focusout",o)}(n);for(var E=0,g=p;E<g.length;E++){var y=g[E];w(y)}t.addEventListener("ionInputDidLoad",(function(e){w(e.detail)})),t.addEventListener("ionInputDidUnload",(function(e){!function(e){var t;u&&((t=b.get(e))&&t(),b.delete(e));i&&((t=h.get(e))&&t(),h.delete(e))}(e.detail)}))}}}]);
//# sourceMappingURL=42.9179b687.chunk.js.map