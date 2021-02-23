!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).Sweetalert2=e()}(this,function(){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n,o=arguments[e];for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}).apply(this,arguments)}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function i(t,e,n){return(i=d()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);o=new(Function.bind.apply(t,o));return n&&l(o,n.prototype),o}).apply(null,arguments)}function p(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t,e,n){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){t=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=u(t)););return t}(t,e);if(t){e=Object.getOwnPropertyDescriptor(t,e);return e.get?e.get.call(n):e.value}})(t,e,n||t)}function m(e){return Object.keys(e).map(function(t){return e[t]})}function h(t){return Array.prototype.slice.call(t)}function g(t,e){e='"'.concat(t,'" is deprecated and will be removed in the next major release. Please use "').concat(e,'" instead.'),-1===K.indexOf(e)&&(K.push(e),z(e))}function v(t){return t&&"function"==typeof t.toPromise}function y(t){return v(t)?t.toPromise():Promise.resolve(t)}function b(t){return t&&Promise.resolve(t)===t}function w(t){return t instanceof Element||"object"===r(t=t)&&t.jquery}function C(){return document.body.querySelector(".".concat($.container))}function k(t){var e=C();return e?e.querySelector(t):null}function t(t){return k(".".concat(t))}function x(){return t($.popup)}function n(){var t=x();return h(t.querySelectorAll(".".concat($.icon)))}function B(){var t=n().filter(function(t){return bt(t)});return t.length?t[0]:null}function P(){return t($.title)}function A(){return t($.content)}function E(){return t($.image)}function O(){return t($["progress-steps"])}function S(){return t($["validation-message"])}function T(){return k(".".concat($.actions," .").concat($.confirm))}function L(){return k(".".concat($.actions," .").concat($.deny))}function D(){return k(".".concat($.loader))}function I(){return k(".".concat($.actions," .").concat($.cancel))}function q(){return t($.actions)}function j(){return t($.header)}function M(){return t($.footer)}function V(){return t($["timer-progress-bar"])}function H(){return t($.close)}function R(){var t=h(x().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(t,e){return t=parseInt(t.getAttribute("tabindex")),(e=parseInt(e.getAttribute("tabindex")))<t?1:t<e?-1:0}),e=h(x().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter(function(t){return"-1"!==t.getAttribute("tabindex")});return function(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}(t.concat(e)).filter(function(t){return bt(t)})}function N(){return!X()&&!document.body.classList.contains($["no-backdrop"])}function U(e,t){e.textContent="",t&&(t=(new DOMParser).parseFromString(t,"text/html"),h(t.querySelector("head").childNodes).forEach(function(t){e.appendChild(t)}),h(t.querySelector("body").childNodes).forEach(function(t){e.appendChild(t)}))}function _(t,e){if(e){for(var n=e.split(/\s+/),o=0;o<n.length;o++)if(!t.classList.contains(n[o]))return;return 1}}function F(t,e,n){var o,i;if(i=e,h((o=t).classList).forEach(function(t){-1===m($).indexOf(t)&&-1===m(J).indexOf(t)&&-1===m(i.showClass).indexOf(t)&&o.classList.remove(t)}),e.customClass&&e.customClass[n]){if("string"!=typeof e.customClass[n]&&!e.customClass[n].forEach)return z("Invalid type of customClass.".concat(n,'! Expected string or iterable object, got "').concat(r(e.customClass[n]),'"'));gt(t,e.customClass[n])}}var e="SweetAlert2:",z=function(t){console.warn("".concat(e," ").concat(t))},W=function(t){console.error("".concat(e," ").concat(t))},K=[],Y=function(t){return"function"==typeof t?t():t},Z=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Q=function(t){var e,n={};for(e in t)n[t[e]]="swal2-"+t[e];return n},$=Q(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","toast-column","show","hide","close","title","header","content","html-container","actions","confirm","deny","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),J=Q(["success","warning","info","question","error"]),X=function(){return document.body.classList.contains($["toast-shown"])},G={previousBodyPadding:null};function tt(t,e){if(!e)return null;switch(e){case"select":case"textarea":case"file":return yt(t,$[e]);case"checkbox":return t.querySelector(".".concat($.checkbox," input"));case"radio":return t.querySelector(".".concat($.radio," input:checked"))||t.querySelector(".".concat($.radio," input:first-child"));case"range":return t.querySelector(".".concat($.range," input"));default:return yt(t,$.input)}}function et(t){var e;t.focus(),"file"!==t.type&&(e=t.value,t.value="",t.value=e)}function nt(t,e,n){t&&e&&("string"==typeof e&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(function(e){t.forEach?t.forEach(function(t){n?t.classList.add(e):t.classList.remove(e)}):n?t.classList.add(e):t.classList.remove(e)}))}function ot(t,e,n){n||0===parseInt(n)?t.style[e]="number"==typeof n?"".concat(n,"px"):n:t.style.removeProperty(e)}function it(t,e){e=1<arguments.length&&void 0!==e?e:"flex",t.style.display=e}function rt(t){t.style.display="none"}function at(t,e,n,o){(e=t.querySelector(e))&&(e.style[n]=o)}function st(t,e,n){e?it(t,n):rt(t)}function ct(t){return!!(t.scrollHeight>t.clientHeight)}function ut(t){var e=window.getComputedStyle(t),t=parseFloat(e.getPropertyValue("animation-duration")||"0"),e=parseFloat(e.getPropertyValue("transition-duration")||"0");return 0<t||0<e}function lt(t,e){var e=1<arguments.length&&void 0!==e&&e,n=V();bt(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(function(){n.style.transition="width ".concat(t/1e3,"s linear"),n.style.width="0%"},10))}function dt(){return"undefined"==typeof window||"undefined"==typeof document}function pt(t){wn.isVisible()&&ht!==t.target.value&&wn.resetValidationMessage(),ht=t.target.value}function ft(t,e){t instanceof HTMLElement?e.appendChild(t):"object"===r(t)?kt(t,e):t&&U(e,t)}function mt(t,e){var n=q(),o=D(),i=T(),r=L(),a=I();e.showConfirmButton||e.showDenyButton||e.showCancelButton||rt(n),F(n,e,"actions"),Pt(i,"confirm",e),Pt(r,"deny",e),Pt(a,"cancel",e),function(t,e,n,o){if(!o.buttonsStyling)return vt([t,e,n],$.styled);gt([t,e,n],$.styled),o.confirmButtonColor&&(t.style.backgroundColor=o.confirmButtonColor);o.denyButtonColor&&(e.style.backgroundColor=o.denyButtonColor);o.cancelButtonColor&&(n.style.backgroundColor=o.cancelButtonColor)}(i,r,a,e),e.reverseButtons&&(n.insertBefore(a,o),n.insertBefore(r,o),n.insertBefore(i,o)),o.innerHTML=e.loaderHtml,F(o,e,"loader")}var ht,gt=function(t,e){nt(t,e,!0)},vt=function(t,e){nt(t,e,!1)},yt=function(t,e){for(var n=0;n<t.childNodes.length;n++)if(_(t.childNodes[n],e))return t.childNodes[n]},bt=function(t){return!(!t||!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))},wt='\n <div aria-labelledby="'.concat($.title,'" aria-describedby="').concat($.content,'" class="').concat($.popup,'" tabindex="-1">\n   <div class="').concat($.header,'">\n     <ul class="').concat($["progress-steps"],'"></ul>\n     <div class="').concat($.icon," ").concat(J.error,'"></div>\n     <div class="').concat($.icon," ").concat(J.question,'"></div>\n     <div class="').concat($.icon," ").concat(J.warning,'"></div>\n     <div class="').concat($.icon," ").concat(J.info,'"></div>\n     <div class="').concat($.icon," ").concat(J.success,'"></div>\n     <img class="').concat($.image,'" />\n     <h2 class="').concat($.title,'" id="').concat($.title,'"></h2>\n     <button type="button" class="').concat($.close,'"></button>\n   </div>\n   <div class="').concat($.content,'">\n     <div id="').concat($.content,'" class="').concat($["html-container"],'"></div>\n     <input class="').concat($.input,'" />\n     <input type="file" class="').concat($.file,'" />\n     <div class="').concat($.range,'">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat($.select,'"></select>\n     <div class="').concat($.radio,'"></div>\n     <label for="').concat($.checkbox,'" class="').concat($.checkbox,'">\n       <input type="checkbox" />\n       <span class="').concat($.label,'"></span>\n     </label>\n     <textarea class="').concat($.textarea,'"></textarea>\n     <div class="').concat($["validation-message"],'" id="').concat($["validation-message"],'"></div>\n   </div>\n   <div class="').concat($.actions,'">\n     <div class="').concat($.loader,'"></div>\n     <button type="button" class="').concat($.confirm,'"></button>\n     <button type="button" class="').concat($.deny,'"></button>\n     <button type="button" class="').concat($.cancel,'"></button>\n   </div>\n   <div class="').concat($.footer,'"></div>\n   <div class="').concat($["timer-progress-bar-container"],'">\n     <div class="').concat($["timer-progress-bar"],'"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,""),Ct=function(t){var e,n,o,i,r,a=!!(i=C())&&(i.parentNode.removeChild(i),vt([document.documentElement,document.body],[$["no-backdrop"],$["toast-shown"],$["has-column"]]),!0);dt()?W("SweetAlert2 requires document to initialize"):((r=document.createElement("div")).className=$.container,a&&gt(r,$["no-transition"]),U(r,wt),(i="string"==typeof(e=t.target)?document.querySelector(e):e).appendChild(r),a=t,(e=x()).setAttribute("role",a.toast?"alert":"dialog"),e.setAttribute("aria-live",a.toast?"polite":"assertive"),a.toast||e.setAttribute("aria-modal","true"),r=i,"rtl"===window.getComputedStyle(r).direction&&gt(C(),$.rtl),t=A(),a=yt(t,$.input),e=yt(t,$.file),n=t.querySelector(".".concat($.range," input")),o=t.querySelector(".".concat($.range," output")),i=yt(t,$.select),r=t.querySelector(".".concat($.checkbox," input")),t=yt(t,$.textarea),a.oninput=pt,e.onchange=pt,i.onchange=pt,r.onchange=pt,t.oninput=pt,n.oninput=function(t){pt(t),o.value=n.value},n.onchange=function(t){pt(t),n.nextSibling.value=n.value})},kt=function(t,e){t.jquery?xt(e,t):U(e,t.toString())},xt=function(t,e){if(t.textContent="",0 in e)for(var n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},Bt=function(){if(dt())return!1;var t,e=document.createElement("div"),n={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(t in n)if(Object.prototype.hasOwnProperty.call(n,t)&&void 0!==e.style[t])return n[t];return!1}();function Pt(t,e,n){var o;st(t,n["show".concat((o=e).charAt(0).toUpperCase()+o.slice(1),"Button")],"inline-block"),U(t,n["".concat(e,"ButtonText")]),t.setAttribute("aria-label",n["".concat(e,"ButtonAriaLabel")]),t.className=$[e],F(t,n,"".concat(e,"Button")),gt(t,n["".concat(e,"ButtonClass")])}function At(t,e){var n,o,i=C();i&&(o=i,"string"==typeof(n=e.backdrop)?o.style.background=n:n||gt([document.documentElement,document.body],$["no-backdrop"]),!e.backdrop&&e.allowOutsideClick&&z('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),o=i,(n=e.position)in $?gt(o,$[n]):(z('The "position" parameter is not valid, defaulting to "center"'),gt(o,$.center)),n=i,!(o=e.grow)||"string"!=typeof o||(o="grow-".concat(o))in $&&gt(n,$[o]),F(i,e,"container"),(e=document.body.getAttribute("data-swal2-queue-step"))&&(i.setAttribute("data-queue-step",e),document.body.removeAttribute("data-swal2-queue-step")))}function Et(t,e){t.placeholder&&!e.inputPlaceholder||(t.placeholder=e.inputPlaceholder)}function Ot(t,e,n){var o,i;n.inputLabel&&(t.id=$.input,o=document.createElement("label"),i=$["input-label"],o.setAttribute("for",t.id),o.className=i,o.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",o))}var St={promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap},Tt=["input","file","range","select","radio","checkbox","textarea"],Lt=function(t){if(!jt[t.input])return W('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(t.input,'"'));var e=qt(t.input),n=jt[t.input](e,t);it(n),setTimeout(function(){et(n)})},Dt=function(t,e){var n=tt(A(),t);if(n)for(var o in!function(t){for(var e=0;e<t.attributes.length;e++){var n=t.attributes[e].name;-1===["type","value","style"].indexOf(n)&&t.removeAttribute(n)}}(n),e)"range"===t&&"placeholder"===o||n.setAttribute(o,e[o])},It=function(t){var e=qt(t.input);t.customClass&&gt(e,t.customClass.input)},qt=function(t){t=$[t]||$.input;return yt(A(),t)},jt={};jt.text=jt.email=jt.password=jt.number=jt.tel=jt.url=function(t,e){return"string"==typeof e.inputValue||"number"==typeof e.inputValue?t.value=e.inputValue:b(e.inputValue)||z('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(r(e.inputValue),'"')),Ot(t,t,e),Et(t,e),t.type=e.input,t},jt.file=function(t,e){return Ot(t,t,e),Et(t,e),t},jt.range=function(t,e){var n=t.querySelector("input"),o=t.querySelector("output");return n.value=e.inputValue,n.type=e.input,o.value=e.inputValue,Ot(n,t,e),t},jt.select=function(t,e){var n;return t.textContent="",e.inputPlaceholder&&(n=document.createElement("option"),U(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)),Ot(t,t,e),t},jt.radio=function(t){return t.textContent="",t},jt.checkbox=function(t,e){var n=tt(A(),"checkbox");n.value=1,n.id=$.checkbox,n.checked=Boolean(e.inputValue);n=t.querySelector("span");return U(n,e.inputPlaceholder),t},jt.textarea=function(e,t){var n,o;return e.value=t.inputValue,Et(e,t),Ot(e,e,t),"MutationObserver"in window&&(n=parseInt(window.getComputedStyle(x()).width),o=parseInt(window.getComputedStyle(x()).paddingLeft)+parseInt(window.getComputedStyle(x()).paddingRight),new MutationObserver(function(){var t=e.offsetWidth+o;x().style.width=n<t?"".concat(t,"px"):null}).observe(e,{attributes:!0,attributeFilter:["style"]})),e};function Mt(t,e){var o,i,r,n=A().querySelector("#".concat($.content));e.html?(ft(e.html,n),it(n,"block")):e.text?(n.textContent=e.text,it(n,"block")):rt(n),t=t,o=e,i=A(),t=St.innerParams.get(t),r=!t||o.input!==t.input,Tt.forEach(function(t){var e=$[t],n=yt(i,e);Dt(t,o.inputAttributes),n.className=e,r&&rt(n)}),o.input&&(r&&Lt(o),It(o)),F(A(),e,"content")}function Vt(){return C()&&C().getAttribute("data-queue-step")}function Ht(t,o){var i=O();if(!o.progressSteps||0===o.progressSteps.length)return rt(i),0;it(i),i.textContent="";var r=parseInt(void 0===o.currentProgressStep?Vt():o.currentProgressStep);r>=o.progressSteps.length&&z("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),o.progressSteps.forEach(function(t,e){var n,t=(n=t,t=document.createElement("li"),gt(t,$["progress-step"]),U(t,n),t);i.appendChild(t),e===r&&gt(t,$["active-progress-step"]),e!==o.progressSteps.length-1&&(t=o,e=document.createElement("li"),gt(e,$["progress-step-line"]),t.progressStepsDistance&&(e.style.width=t.progressStepsDistance),e=e,i.appendChild(e))})}function Rt(t,e){var n=j();F(n,e,"header"),Ht(0,e),function(t,e){t=St.innerParams.get(t);t&&e.icon===t.icon&&B()?Ft(B(),e):(_t(),e.icon&&(-1!==Object.keys(J).indexOf(e.icon)?(t=k(".".concat($.icon,".").concat(J[e.icon])),it(t),Wt(t,e),Ft(t,e),gt(t,e.showClass.icon)):W('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(e.icon,'"'))))}(t,e),function(t){var e=E();if(!t.imageUrl)return rt(e);it(e,""),e.setAttribute("src",t.imageUrl),e.setAttribute("alt",t.imageAlt),ot(e,"width",t.imageWidth),ot(e,"height",t.imageHeight),e.className=$.image,F(e,t,"image")}(e),n=e,t=P(),st(t,n.title||n.titleText),n.title&&ft(n.title,t),n.titleText&&(t.innerText=n.titleText),F(t,n,"title"),n=e,e=H(),U(e,n.closeButtonHtml),F(e,n,"closeButton"),st(e,n.showCloseButton),e.setAttribute("aria-label",n.closeButtonAriaLabel)}function Nt(t,e){var n,o;o=e,n=x(),ot(n,"width",o.width),ot(n,"padding",o.padding),o.background&&(n.style.background=o.background),Qt(n,o),At(0,e),Rt(t,e),Mt(t,e),mt(0,e),o=e,t=M(),st(t,o.footer),o.footer&&ft(o.footer,t),F(t,o,"footer"),"function"==typeof e.didRender?e.didRender(x()):"function"==typeof e.onRender&&e.onRender(x())}function Ut(){return T()&&T().click()}var _t=function(){for(var t=n(),e=0;e<t.length;e++)rt(t[e])},Ft=function(t,e){Kt(t,e),zt(),F(t,e,"icon")},zt=function(){for(var t=x(),e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),o=0;o<n.length;o++)n[o].style.backgroundColor=e},Wt=function(t,e){t.textContent="",e.iconHtml?U(t,Yt(e.iconHtml)):"success"===e.icon?U(t,'\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    '):"error"===e.icon?U(t,'\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    '):U(t,Yt({question:"?",warning:"!",info:"i"}[e.icon]))},Kt=function(t,e){if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(var n=0,o=[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"];n<o.length;n++)at(t,o[n],"backgroundColor",e.iconColor);at(t,".swal2-success-ring","borderColor",e.iconColor)}},Yt=function(t){return'<div class="'.concat($["icon-content"],'">').concat(t,"</div>")},Zt=[],Qt=function(t,e){t.className="".concat($.popup," ").concat(bt(t)?e.showClass.popup:""),e.toast?(gt([document.documentElement,document.body],$["toast-shown"]),gt(t,$.toast)):gt(t,$.modal),F(t,e,"popup"),"string"==typeof e.customClass&&gt(t,e.customClass),e.icon&&gt(t,$["icon-".concat(e.icon)])};function $t(){var t=x();t||wn.fire(),t=x();var e=q(),n=T(),o=D();it(e),rt(n),gt([t,e],$.loading),it(o),t.setAttribute("data-loading",!0),t.setAttribute("aria-busy",!0),t.focus()}function Jt(){return new Promise(function(t){var e=window.scrollX,n=window.scrollY;oe.restoreFocusTimeout=setTimeout(function(){oe.previousActiveElement&&oe.previousActiveElement.focus?(oe.previousActiveElement.focus(),oe.previousActiveElement=null):document.body&&document.body.focus(),t()},100),void 0!==e&&void 0!==n&&window.scrollTo(e,n)})}function Xt(){if(oe.timeout)return function(){var t=V(),e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";var n=parseInt(window.getComputedStyle(t).width),n=parseInt(e/n*100);t.style.removeProperty("transition"),t.style.width="".concat(n,"%")}(),oe.timeout.stop()}function Gt(){if(oe.timeout){var t=oe.timeout.start();return lt(t),t}}function te(t){return Object.prototype.hasOwnProperty.call(ie,t)}function ee(t){return ae[t]}function ne(t){for(var e in t)te(o=e)||z('Unknown parameter "'.concat(o,'"')),t.toast&&(n=e,-1!==se.indexOf(n)&&z('The parameter "'.concat(n,'" is incompatible with toasts'))),ee(n=e)&&g(n,ee(n));var n,o}var oe={},ie={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,toast:!1,animation:!0,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:void 0,target:"body",backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,onBeforeOpen:void 0,onOpen:void 0,willOpen:void 0,didOpen:void 0,onRender:void 0,didRender:void 0,onClose:void 0,onAfterClose:void 0,willClose:void 0,didClose:void 0,onDestroy:void 0,didDestroy:void 0,scrollbarPadding:!0},re=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","imageAlt","imageHeight","imageUrl","imageWidth","onAfterClose","onClose","onDestroy","progressSteps","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],ae={animation:'showClass" and "hideClass',onBeforeOpen:"willOpen",onOpen:"didOpen",onRender:"didRender",onClose:"willClose",onAfterClose:"didClose",onDestroy:"didDestroy"},se=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","heightAuto","keydownListenerCapture"],ce=Object.freeze({isValidParameter:te,isUpdatableParameter:function(t){return-1!==re.indexOf(t)},isDeprecatedParameter:ee,argsToParams:function(n){var o={};return"object"!==r(n[0])||w(n[0])?["title","html","icon"].forEach(function(t,e){e=n[e];"string"==typeof e||w(e)?o[t]=e:void 0!==e&&W("Unexpected type of ".concat(t,'! Expected "string" or "Element", got ').concat(r(e)))}):c(o,n[0]),o},isVisible:function(){return bt(x())},clickConfirm:Ut,clickDeny:function(){return L()&&L().click()},clickCancel:function(){return I()&&I().click()},getContainer:C,getPopup:x,getTitle:P,getContent:A,getHtmlContainer:function(){return t($["html-container"])},getImage:E,getIcon:B,getIcons:n,getInputLabel:function(){return t($["input-label"])},getCloseButton:H,getActions:q,getConfirmButton:T,getDenyButton:L,getCancelButton:I,getLoader:D,getHeader:j,getFooter:M,getTimerProgressBar:V,getFocusableElements:R,getValidationMessage:S,isLoading:function(){return x().hasAttribute("data-loading")},fire:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return i(this,e)},mixin:function(r){return function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(i,t);var n,o,e=(n=i,o=d(),function(){var t,e=u(n);return p(this,o?(t=u(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))});function i(){return a(this,i),e.apply(this,arguments)}return s(i,[{key:"_main",value:function(t){return f(u(i.prototype),"_main",this).call(this,c({},r,t))}}]),i}(this)},queue:function(t){var r=this;Zt=t;function a(t,e){Zt=[],t(e)}var s=[];return new Promise(function(i){!function e(n,o){n<Zt.length?(document.body.setAttribute("data-swal2-queue-step",n),r.fire(Zt[n]).then(function(t){void 0!==t.value?(s.push(t.value),e(n+1,o)):a(i,{dismiss:t.dismiss})})):a(i,{value:s})}(0)})},getQueueStep:Vt,insertQueueStep:function(t,e){return e&&e<Zt.length?Zt.splice(e,0,t):Zt.push(t)},deleteQueueStep:function(t){void 0!==Zt[t]&&Zt.splice(t,1)},showLoading:$t,enableLoading:$t,getTimerLeft:function(){return oe.timeout&&oe.timeout.getTimerLeft()},stopTimer:Xt,resumeTimer:Gt,toggleTimer:function(){var t=oe.timeout;return t&&(t.running?Xt:Gt)()},increaseTimer:function(t){if(oe.timeout){t=oe.timeout.increase(t);return lt(t,!0),t}},isTimerRunning:function(){return oe.timeout&&oe.timeout.isRunning()}});function ue(){var t,e=St.innerParams.get(this);e&&(t=St.domCache.get(this),rt(t.loader),e.showConfirmButton?it(t.confirmButton,"inline-block"):e.showConfirmButton||e.showCancelButton||rt(t.actions),vt([t.popup,t.actions],$.loading),t.popup.removeAttribute("aria-busy"),t.popup.removeAttribute("data-loading"),t.confirmButton.disabled=!1,t.denyButton.disabled=!1,t.cancelButton.disabled=!1)}function le(){null===G.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(G.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(G.previousBodyPadding+function(){var t=document.createElement("div");t.className=$["scrollbar-measure"],document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e}(),"px"))}function de(){return!!window.MSInputMethodContext&&!!document.documentMode}function pe(){var t=C(),e=x();t.style.removeProperty("align-items"),e.offsetTop<0&&(t.style.alignItems="flex-start")}var fe=function(){navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i)||x().scrollHeight>window.innerHeight-44&&(C().style.paddingBottom="".concat(44,"px"))},me=function(){var e,t=C();t.ontouchstart=function(t){e=he(t)},t.ontouchmove=function(t){e&&(t.preventDefault(),t.stopPropagation())}},he=function(t){var e=t.target,n=C();return(!t.touches||!t.touches.length||"stylus"!==t.touches[0].touchType)&&(e===n||!(ct(n)||"INPUT"===e.tagName||ct(A())&&A().contains(e)))},ge={swalPromiseResolve:new WeakMap};function ve(t,e,n,o){n?xe(t,o):(Jt().then(function(){return xe(t,o)}),oe.keydownTarget.removeEventListener("keydown",oe.keydownHandler,{capture:oe.keydownListenerCapture}),oe.keydownHandlerAdded=!1),e.parentNode&&!document.body.getAttribute("data-swal2-queue-step")&&e.parentNode.removeChild(e),N()&&(null!==G.previousBodyPadding&&(document.body.style.paddingRight="".concat(G.previousBodyPadding,"px"),G.previousBodyPadding=null),_(document.body,$.iosfix)&&(e=parseInt(document.body.style.top,10),vt(document.body,$.iosfix),document.body.style.top="",document.body.scrollTop=-1*e),"undefined"!=typeof window&&de()&&window.removeEventListener("resize",pe),h(document.body.children).forEach(function(t){t.hasAttribute("data-previous-aria-hidden")?(t.setAttribute("aria-hidden",t.getAttribute("data-previous-aria-hidden")),t.removeAttribute("data-previous-aria-hidden")):t.removeAttribute("aria-hidden")})),vt([document.documentElement,document.body],[$.shown,$["height-auto"],$["no-backdrop"],$["toast-shown"],$["toast-column"]])}function ye(t){var e,n,o,i=x();i&&(t=be(t),(e=St.innerParams.get(this))&&!_(i,e.hideClass.popup)&&(n=ge.swalPromiseResolve.get(this),vt(i,e.showClass.popup),gt(i,e.hideClass.popup),o=C(),vt(o,e.showClass.backdrop),gt(o,e.hideClass.backdrop),we(this,i,e),n(t)))}function be(t){return void 0===t?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:c({isConfirmed:!1,isDenied:!1,isDismissed:!1},t)}function we(t,e,n){var o=C(),i=Bt&&ut(e),r=n.onClose,a=n.onAfterClose,s=n.willClose,n=n.didClose;Ce(e,s,r),i?ke(t,e,o,n||a):ve(t,o,X(),n||a)}var Ce=function(t,e,n){null!==e&&"function"==typeof e?e(t):null!==n&&"function"==typeof n&&n(t)},ke=function(t,e,n,o){oe.swalCloseEventFinishedCallback=ve.bind(null,t,n,X(),o),e.addEventListener(Bt,function(t){t.target===e&&(oe.swalCloseEventFinishedCallback(),delete oe.swalCloseEventFinishedCallback)})},xe=function(t,e){setTimeout(function(){"function"==typeof e&&e(),t._destroy()})};function Be(t,e,n){var o=St.domCache.get(t);e.forEach(function(t){o[t].disabled=n})}function Pe(t,e){if(!t)return!1;if("radio"===t.type)for(var n=t.parentNode.parentNode.querySelectorAll("input"),o=0;o<n.length;o++)n[o].disabled=e;else t.disabled=e}var Ae=function(){function n(t,e){a(this,n),this.callback=t,this.remaining=e,this.running=!1,this.start()}return s(n,[{key:"start",value:function(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}},{key:"stop",value:function(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date-this.started),this.remaining}},{key:"increase",value:function(t){var e=this.running;return e&&this.stop(),this.remaining+=t,e&&this.start(),this.remaining}},{key:"getTimerLeft",value:function(){return this.running&&(this.stop(),this.start()),this.remaining}},{key:"isRunning",value:function(){return this.running}}]),n}(),Ee={email:function(t,e){return/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address")},url:function(t,e){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")}};function Oe(t){var e,n;(e=t).inputValidator||Object.keys(Ee).forEach(function(t){e.input===t&&(e.inputValidator=Ee[t])}),t.showLoaderOnConfirm&&!t.preConfirm&&z("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),t.animation=Y(t.animation),(n=t).target&&("string"!=typeof n.target||document.querySelector(n.target))&&("string"==typeof n.target||n.target.appendChild)||(z('Target parameter is not valid, defaulting to "body"'),n.target="body"),"string"==typeof t.title&&(t.title=t.title.split("\n").join("<br />")),Ct(t)}function Se(t){var e=C(),n=x();"function"==typeof t.willOpen?t.willOpen(n):"function"==typeof t.onBeforeOpen&&t.onBeforeOpen(n);var o=window.getComputedStyle(document.body).overflowY;Me(e,n,t),setTimeout(function(){qe(e,n)},10),N()&&(je(e,t.scrollbarPadding,o),h(document.body.children).forEach(function(t){t===C()||function(t,e){if("function"==typeof t.contains)return t.contains(e)}(t,C())||(t.hasAttribute("aria-hidden")&&t.setAttribute("data-previous-aria-hidden",t.getAttribute("aria-hidden")),t.setAttribute("aria-hidden","true"))})),X()||oe.previousActiveElement||(oe.previousActiveElement=document.activeElement),Ie(n,t),vt(e,$["no-transition"])}function Te(t){var e=x();t.target===e&&(t=C(),e.removeEventListener(Bt,Te),t.style.overflowY="auto")}function Le(t,e){t.closePopup({isConfirmed:!0,value:e})}function De(t,e,n){var o=R(),i=0;if(i<o.length)return(e+=n)===o.length?e=0:-1===e&&(e=o.length-1),o[e].focus();x().focus()}var Ie=function(t,e){"function"==typeof e.didOpen?setTimeout(function(){return e.didOpen(t)}):"function"==typeof e.onOpen&&setTimeout(function(){return e.onOpen(t)})},qe=function(t,e){Bt&&ut(e)?(t.style.overflowY="hidden",e.addEventListener(Bt,Te)):t.style.overflowY="auto"},je=function(t,e,n){var o;(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&1<navigator.maxTouchPoints)&&!_(document.body,$.iosfix)&&(o=document.body.scrollTop,document.body.style.top="".concat(-1*o,"px"),gt(document.body,$.iosfix),me(),fe()),"undefined"!=typeof window&&de()&&(pe(),window.addEventListener("resize",pe)),e&&"hidden"!==n&&le(),setTimeout(function(){t.scrollTop=0})},Me=function(t,e,n){gt(t,n.showClass.backdrop),e.style.setProperty("opacity","0","important"),it(e),setTimeout(function(){gt(e,n.showClass.popup),e.style.removeProperty("opacity")},10),gt([document.documentElement,document.body],$.shown),n.heightAuto&&n.backdrop&&!n.toast&&gt([document.documentElement,document.body],$["height-auto"])},Ve=function(t){return t.checked?1:0},He=function(t){return t.checked?t.value:null},Re=function(t){return t.files.length?null!==t.getAttribute("multiple")?t.files:t.files[0]:null},Ne=function(e,n){function o(t){return _e[n.input](i,Fe(t),n)}var i=A();v(n.inputOptions)||b(n.inputOptions)?($t(),y(n.inputOptions).then(function(t){e.hideLoading(),o(t)})):"object"===r(n.inputOptions)?o(n.inputOptions):W("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(r(n.inputOptions)))},Ue=function(e,n){var o=e.getInput();rt(o),y(n.inputValue).then(function(t){o.value="number"===n.input?parseFloat(t)||0:"".concat(t),it(o),o.focus(),e.hideLoading()}).catch(function(t){W("Error in inputValue promise: ".concat(t)),o.value="",it(o),o.focus(),e.hideLoading()})},_e={select:function(t,e,i){function o(t,e,n){var o=document.createElement("option");o.value=n,U(o,e),i.inputValue.toString()===n.toString()&&(o.selected=!0),t.appendChild(o)}var r=yt(t,$.select);e.forEach(function(t){var e,n=t[0],t=t[1];Array.isArray(t)?((e=document.createElement("optgroup")).label=n,e.disabled=!1,r.appendChild(e),t.forEach(function(t){return o(e,t[1],t[0])})):o(r,t,n)}),r.focus()},radio:function(t,e,i){var r=yt(t,$.radio);e.forEach(function(t){var e=t[0],n=t[1],o=document.createElement("input"),t=document.createElement("label");o.type="radio",o.name=$.radio,o.value=e,i.inputValue.toString()===e.toString()&&(o.checked=!0);e=document.createElement("span");U(e,n),e.className=$.label,t.appendChild(o),t.appendChild(e),r.appendChild(t)});e=r.querySelectorAll("input");e.length&&e[0].focus()}},Fe=function n(o){var i=[];return"undefined"!=typeof Map&&o instanceof Map?o.forEach(function(t,e){"object"===r(t)&&(t=n(t)),i.push([e,t])}):Object.keys(o).forEach(function(t){var e=o[t];"object"===r(e)&&(e=n(e)),i.push([t,e])}),i},ze=function(t,e,n){var o=function(t,e){t=t.getInput();if(!t)return null;switch(e.input){case"checkbox":return Ve(t);case"radio":return He(t);case"file":return Re(t);default:return e.inputAutoTrim?t.value.trim():t.value}}(t,e);e.inputValidator?We(t,e,o):t.getInput().checkValidity()?("deny"===n?Ke:Ye)(t,e,o):(t.enableButtons(),t.showValidationMessage(e.validationMessage))},We=function(e,n,o){e.disableInput(),Promise.resolve().then(function(){return y(n.inputValidator(o,n.validationMessage))}).then(function(t){e.enableButtons(),e.enableInput(),t?e.showValidationMessage(t):Ye(e,n,o)})},Ke=function(e,t,n){t.preDeny?Promise.resolve().then(function(){return y(t.preDeny(n,t.validationMessage))}).then(function(t){!1===t?e.hideLoading():e.closePopup({isDenied:!0,value:void 0===t?n:t})}):e.closePopup({isDenied:!0,value:n})},Ye=function(e,t,n){t.showLoaderOnConfirm&&$t(),t.preConfirm?(e.resetValidationMessage(),Promise.resolve().then(function(){return y(t.preConfirm(n,t.validationMessage))}).then(function(t){bt(S())||!1===t?e.hideLoading():Le(e,void 0===t?n:t)})):Le(e,n)},Ze=["ArrowRight","ArrowDown","Right","Down"],Qe=["ArrowLeft","ArrowUp","Left","Up"],$e=["Escape","Esc"],Je=function(t,e,n){var o=St.innerParams.get(t);o.stopKeydownPropagation&&e.stopPropagation(),"Enter"===e.key?Xe(t,e,o):"Tab"===e.key?Ge(e,o):-1!==[].concat(Ze,Qe).indexOf(e.key)?tn(e.key):-1!==$e.indexOf(e.key)&&en(e,o,n)},Xe=function(t,e,n){e.isComposing||e.target&&t.getInput()&&e.target.outerHTML===t.getInput().outerHTML&&-1===["textarea","file"].indexOf(n.input)&&(Ut(),e.preventDefault())},Ge=function(t){for(var e=t.target,n=R(),o=-1,i=0;i<n.length;i++)if(e===n[i]){o=i;break}t.shiftKey?De(0,o,-1):De(0,o,1),t.stopPropagation(),t.preventDefault()},tn=function(t){-1!==[T(),L(),I()].indexOf(document.activeElement)&&(t=-1!==Ze.indexOf(t)?"nextElementSibling":"previousElementSibling",(t=document.activeElement[t])&&t.focus())},en=function(t,e,n){Y(e.allowEscapeKey)&&(t.preventDefault(),n(Z.esc))},nn=function(e,t,n){t.popup.onclick=function(){var t=St.innerParams.get(e);t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton||t.input||n(Z.close)}},on=!1,rn=function(e){e.popup.onmousedown=function(){e.container.onmouseup=function(t){e.container.onmouseup=void 0,t.target===e.container&&(on=!0)}}},an=function(e){e.container.onmousedown=function(){e.popup.onmouseup=function(t){e.popup.onmouseup=void 0,t.target!==e.popup&&!e.popup.contains(t.target)||(on=!0)}}},sn=function(n,o,i){o.container.onclick=function(t){var e=St.innerParams.get(n);on?on=!1:t.target===o.container&&Y(e.allowOutsideClick)&&i(Z.backdrop)}};function cn(t){var e=c({},ie.showClass,t.showClass),n=c({},ie.hideClass,t.hideClass),o=c({},ie,t);return o.showClass=e,o.hideClass=n,!1===t.animation&&(o.showClass={popup:"swal2-noanimation",backdrop:"swal2-noanimation"},o.hideClass={}),o}function un(a,s,c){return new Promise(function(t){function e(t){a.closePopup({isDismissed:!0,dismiss:t})}var n,o,i,r;ge.swalPromiseResolve.set(a,t),s.confirmButton.onclick=function(){return e=c,(t=a).disableButtons(),void(e.input?ze(t,e,"confirm"):Ye(t,e,!0));var t,e},s.denyButton.onclick=function(){return e=c,(t=a).disableButtons(),void(e.returnInputValueOnDeny?ze(t,e,"deny"):Ke(t,e,!1));var t,e},s.cancelButton.onclick=function(){return t=e,a.disableButtons(),void t(Z.cancel);var t},s.closeButton.onclick=function(){return e(Z.close)},n=a,r=s,t=e,St.innerParams.get(n).toast?nn(n,r,t):(rn(r),an(r),sn(n,r,t)),o=a,r=c,i=e,(t=oe).keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1),r.toast||(t.keydownHandler=function(t){return Je(o,t,i)},t.keydownTarget=r.keydownListenerCapture?window:x(),t.keydownListenerCapture=r.keydownListenerCapture,t.keydownTarget.addEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0),(c.toast&&(c.input||c.footer||c.showCloseButton)?gt:vt)(document.body,$["toast-column"]),r=a,"select"===(t=c).input||"radio"===t.input?Ne(r,t):-1!==["text","email","number","tel","textarea"].indexOf(t.input)&&(v(t.inputValue)||b(t.inputValue))&&Ue(r,t),Se(c),dn(oe,c,e),pn(s,c),setTimeout(function(){s.container.scrollTop=0})})}function ln(t){var e={popup:x(),container:C(),content:A(),actions:q(),confirmButton:T(),denyButton:L(),cancelButton:I(),loader:D(),closeButton:H(),validationMessage:S(),progressSteps:O()};return St.domCache.set(t,e),e}var dn=function(t,e,n){var o=V();rt(o),e.timer&&(t.timeout=new Ae(function(){n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(it(o),setTimeout(function(){t.timeout.running&&lt(e.timer)})))},pn=function(t,e){if(!e.toast)return Y(e.allowEnterKey)?void(fn(t,e)||De(0,-1,1)):mn()},fn=function(t,e){return e.focusDeny&&bt(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&bt(t.cancelButton)?(t.cancelButton.focus(),!0):!(!e.focusConfirm||!bt(t.confirmButton))&&(t.confirmButton.focus(),!0)},mn=function(){document.activeElement&&"function"==typeof document.activeElement.blur&&document.activeElement.blur()};function hn(t){"function"==typeof t.didDestroy?t.didDestroy():"function"==typeof t.onDestroy&&t.onDestroy()}function gn(t){delete t.params,delete oe.keydownHandler,delete oe.keydownTarget,yn(St),yn(ge)}var vn,yn=function(t){for(var e in t)t[e]=new WeakMap},Q=Object.freeze({hideLoading:ue,disableLoading:ue,getInput:function(t){var e=St.innerParams.get(t||this);return(t=St.domCache.get(t||this))?tt(t.content,e.input):null},close:ye,closePopup:ye,closeModal:ye,closeToast:ye,enableButtons:function(){Be(this,["confirmButton","denyButton","cancelButton"],!1)},disableButtons:function(){Be(this,["confirmButton","denyButton","cancelButton"],!0)},enableInput:function(){return Pe(this.getInput(),!1)},disableInput:function(){return Pe(this.getInput(),!0)},showValidationMessage:function(t){var e=St.domCache.get(this),n=St.innerParams.get(this);U(e.validationMessage,t),e.validationMessage.className=$["validation-message"],n.customClass&&n.customClass.validationMessage&&gt(e.validationMessage,n.customClass.validationMessage),it(e.validationMessage),(e=this.getInput())&&(e.setAttribute("aria-invalid",!0),e.setAttribute("aria-describedBy",$["validation-message"]),et(e),gt(e,$.inputerror))},resetValidationMessage:function(){var t=St.domCache.get(this);t.validationMessage&&rt(t.validationMessage),(t=this.getInput())&&(t.removeAttribute("aria-invalid"),t.removeAttribute("aria-describedBy"),vt(t,$.inputerror))},getProgressSteps:function(){return St.domCache.get(this).progressSteps},_main:function(t){ne(t),oe.currentInstance&&oe.currentInstance._destroy(),oe.currentInstance=this;var e=cn(t);return Oe(e),Object.freeze(e),oe.timeout&&(oe.timeout.stop(),delete oe.timeout),clearTimeout(oe.restoreFocusTimeout),t=ln(this),Nt(this,e),St.innerParams.set(this,e),un(this,t,e)},update:function(e){var t=x(),n=St.innerParams.get(this);if(!t||_(t,n.hideClass.popup))return z("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");var o={};Object.keys(e).forEach(function(t){wn.isUpdatableParameter(t)?o[t]=e[t]:z('Invalid parameter to update: "'.concat(t,'". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md'))}),n=c({},n,o),Nt(this,n),St.innerParams.set(this,n),Object.defineProperties(this,{params:{value:c({},this.params,e),writable:!1,enumerable:!0}})},_destroy:function(){var t=St.domCache.get(this),e=St.innerParams.get(this);e&&(t.popup&&oe.swalCloseEventFinishedCallback&&(oe.swalCloseEventFinishedCallback(),delete oe.swalCloseEventFinishedCallback),oe.deferDisposalTimer&&(clearTimeout(oe.deferDisposalTimer),delete oe.deferDisposalTimer),hn(e),gn(this))}}),bn=function(){function i(){if(a(this,i),"undefined"!=typeof window){"undefined"==typeof Promise&&W("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"),vn=this;for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var o=Object.freeze(this.constructor.argsToParams(e));Object.defineProperties(this,{params:{value:o,writable:!1,enumerable:!0,configurable:!0}});o=this._main(this.params);St.promise.set(this,o)}}return s(i,[{key:"then",value:function(t){return St.promise.get(this).then(t)}},{key:"finally",value:function(t){return St.promise.get(this).finally(t)}}]),i}();c(bn.prototype,Q),c(bn,ce),Object.keys(Q).forEach(function(t){bn[t]=function(){if(vn)return vn[t].apply(vn,arguments)}}),bn.DismissReason=Z,bn.version="10.9.0";var wn=bn;return wn.default=wn}),void 0!==this&&this.Sweetalert2&&(this.swal=this.sweetAlert=this.Swal=this.SweetAlert=this.Sweetalert2);
"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,".swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row;padding:0}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;padding:0;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em;padding:0}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(100,150,200,.5)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-no-transition{transition:none!important}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:5px;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center;padding:0 1.8em}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0;padding:0 1.6em}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#2778c4;color:#fff;font-size:1.0625em}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#d14529;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#757575;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;height:.25em;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;align-items:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0 1.6em;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto}.swal2-validation-message{display:none;align-items:center;justify-content:center;margin:0 -2.7em;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}")
///*!
//* sweetalert2 v10.0.2
//* Released under the MIT License.
//*/
//(function (global, factory) {
//  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
//  typeof define === 'function' && define.amd ? define(factory) :
//  (global = global || self, global.Sweetalert2 = factory());
//}(this, function () { 'use strict';
//
//  function _typeof(obj) {
//    "@babel/helpers - typeof";
//
//    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
//      _typeof = function (obj) {
//        return typeof obj;
//      };
//    } else {
//      _typeof = function (obj) {
//        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
//      };
//    }
//
//    return _typeof(obj);
//  }
//
//  function _classCallCheck(instance, Constructor) {
//    if (!(instance instanceof Constructor)) {
//      throw new TypeError("Cannot call a class as a function");
//    }
//  }
//
//  function _defineProperties(target, props) {
//    for (var i = 0; i < props.length; i++) {
//      var descriptor = props[i];
//      descriptor.enumerable = descriptor.enumerable || false;
//      descriptor.configurable = true;
//      if ("value" in descriptor) descriptor.writable = true;
//      Object.defineProperty(target, descriptor.key, descriptor);
//    }
//  }
//
//  function _createClass(Constructor, protoProps, staticProps) {
//    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
//    if (staticProps) _defineProperties(Constructor, staticProps);
//    return Constructor;
//  }
//
//  function _extends() {
//    _extends = Object.assign || function (target) {
//      for (var i = 1; i < arguments.length; i++) {
//        var source = arguments[i];
//
//        for (var key in source) {
//          if (Object.prototype.hasOwnProperty.call(source, key)) {
//            target[key] = source[key];
//          }
//        }
//      }
//
//      return target;
//    };
//
//    return _extends.apply(this, arguments);
//  }
//
//  function _inherits(subClass, superClass) {
//    if (typeof superClass !== "function" && superClass !== null) {
//      throw new TypeError("Super expression must either be null or a function");
//    }
//
//    subClass.prototype = Object.create(superClass && superClass.prototype, {
//      constructor: {
//        value: subClass,
//        writable: true,
//        configurable: true
//      }
//    });
//    if (superClass) _setPrototypeOf(subClass, superClass);
//  }
//
//  function _getPrototypeOf(o) {
//    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
//      return o.__proto__ || Object.getPrototypeOf(o);
//    };
//    return _getPrototypeOf(o);
//  }
//
//  function _setPrototypeOf(o, p) {
//    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
//      o.__proto__ = p;
//      return o;
//    };
//
//    return _setPrototypeOf(o, p);
//  }
//
//  function _isNativeReflectConstruct() {
//    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
//    if (Reflect.construct.sham) return false;
//    if (typeof Proxy === "function") return true;
//
//    try {
//      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
//      return true;
//    } catch (e) {
//      return false;
//    }
//  }
//
//  function _construct(Parent, args, Class) {
//    if (_isNativeReflectConstruct()) {
//      _construct = Reflect.construct;
//    } else {
//      _construct = function _construct(Parent, args, Class) {
//        var a = [null];
//        a.push.apply(a, args);
//        var Constructor = Function.bind.apply(Parent, a);
//        var instance = new Constructor();
//        if (Class) _setPrototypeOf(instance, Class.prototype);
//        return instance;
//      };
//    }
//
//    return _construct.apply(null, arguments);
//  }
//
//  function _assertThisInitialized(self) {
//    if (self === void 0) {
//      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
//    }
//
//    return self;
//  }
//
//  function _possibleConstructorReturn(self, call) {
//    if (call && (typeof call === "object" || typeof call === "function")) {
//      return call;
//    }
//
//    return _assertThisInitialized(self);
//  }
//
//  function _createSuper(Derived) {
//    var hasNativeReflectConstruct = _isNativeReflectConstruct();
//
//    return function _createSuperInternal() {
//      var Super = _getPrototypeOf(Derived),
//          result;
//
//      if (hasNativeReflectConstruct) {
//        var NewTarget = _getPrototypeOf(this).constructor;
//
//        result = Reflect.construct(Super, arguments, NewTarget);
//      } else {
//        result = Super.apply(this, arguments);
//      }
//
//      return _possibleConstructorReturn(this, result);
//    };
//  }
//
//  function _superPropBase(object, property) {
//    while (!Object.prototype.hasOwnProperty.call(object, property)) {
//      object = _getPrototypeOf(object);
//      if (object === null) break;
//    }
//
//    return object;
//  }
//
//  function _get(target, property, receiver) {
//    if (typeof Reflect !== "undefined" && Reflect.get) {
//      _get = Reflect.get;
//    } else {
//      _get = function _get(target, property, receiver) {
//        var base = _superPropBase(target, property);
//
//        if (!base) return;
//        var desc = Object.getOwnPropertyDescriptor(base, property);
//
//        if (desc.get) {
//          return desc.get.call(receiver);
//        }
//
//        return desc.value;
//      };
//    }
//
//    return _get(target, property, receiver || target);
//  }
//
//  var consolePrefix = 'SweetAlert2:';
//  /**
//   * Filter the unique values into a new array
//   * @param arr
//   */
//
//  var uniqueArray = function uniqueArray(arr) {
//    var result = [];
//
//    for (var i = 0; i < arr.length; i++) {
//      if (result.indexOf(arr[i]) === -1) {
//        result.push(arr[i]);
//      }
//    }
//
//    return result;
//  };
//  /**
//   * Capitalize the first letter of a string
//   * @param str
//   */
//
//  var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
//    return str.charAt(0).toUpperCase() + str.slice(1);
//  };
//  /**
//   * Returns the array of object values (Object.values isn't supported in IE11)
//   * @param obj
//   */
//
//  var objectValues = function objectValues(obj) {
//    return Object.keys(obj).map(function (key) {
//      return obj[key];
//    });
//  };
//  /**
//   * Convert NodeList to Array
//   * @param nodeList
//   */
//
//  var toArray = function toArray(nodeList) {
//    return Array.prototype.slice.call(nodeList);
//  };
//  /**
//   * Standardise console warnings
//   * @param message
//   */
//
//  var warn = function warn(message) {
//    console.warn("".concat(consolePrefix, " ").concat(message));
//  };
//  /**
//   * Standardise console errors
//   * @param message
//   */
//
//  var error = function error(message) {
//    console.error("".concat(consolePrefix, " ").concat(message));
//  };
//  /**
//   * Private global state for `warnOnce`
//   * @type {Array}
//   * @private
//   */
//
//  var previousWarnOnceMessages = [];
//  /**
//   * Show a console warning, but only if it hasn't already been shown
//   * @param message
//   */
//
//  var warnOnce = function warnOnce(message) {
//    if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
//      previousWarnOnceMessages.push(message);
//      warn(message);
//    }
//  };
//  /**
//   * Show a one-time console warning about deprecated params/methods
//   */
//
//  var warnAboutDepreation = function warnAboutDepreation(deprecatedParam, useInstead) {
//    warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
//  };
//  /**
//   * If `arg` is a function, call it (with no arguments or context) and return the result.
//   * Otherwise, just pass the value through
//   * @param arg
//   */
//
//  var callIfFunction = function callIfFunction(arg) {
//    return typeof arg === 'function' ? arg() : arg;
//  };
//  var hasToPromiseFn = function hasToPromiseFn(arg) {
//    return arg && typeof arg.toPromise === 'function';
//  };
//  var asPromise = function asPromise(arg) {
//    return hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
//  };
//  var isPromise = function isPromise(arg) {
//    return arg && Promise.resolve(arg) === arg;
//  };
//
//  var DismissReason = Object.freeze({
//    cancel: 'cancel',
//    backdrop: 'backdrop',
//    close: 'close',
//    esc: 'esc',
//    timer: 'timer'
//  });
//
//  var isJqueryElement = function isJqueryElement(elem) {
//    return _typeof(elem) === 'object' && elem.jquery;
//  };
//
//  var isElement = function isElement(elem) {
//    return elem instanceof Element || isJqueryElement(elem);
//  };
//
//  var argsToParams = function argsToParams(args) {
//    var params = {};
//
//    if (_typeof(args[0]) === 'object' && !isElement(args[0])) {
//      _extends(params, args[0]);
//    } else {
//      ['title', 'html', 'icon'].forEach(function (name, index) {
//        var arg = args[index];
//
//        if (typeof arg === 'string' || isElement(arg)) {
//          params[name] = arg;
//        } else if (arg !== undefined) {
//          error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(_typeof(arg)));
//        }
//      });
//    }
//
//    return params;
//  };
//
//  var swalPrefix = 'swal2-';
//  var prefix = function prefix(items) {
//    var result = {};
//
//    for (var i in items) {
//      result[items[i]] = swalPrefix + items[i];
//    }
//
//    return result;
//  };
//  var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'toast-column', 'show', 'hide', 'close', 'title', 'header', 'content', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error']);
//  var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);
//
//  var getContainer = function getContainer() {
//    return document.body.querySelector(".".concat(swalClasses.container));
//  };
//  var elementBySelector = function elementBySelector(selectorString) {
//    var container = getContainer();
//    return container ? container.querySelector(selectorString) : null;
//  };
//
//  var elementByClass = function elementByClass(className) {
//    return elementBySelector(".".concat(className));
//  };
//
//  var getPopup = function getPopup() {
//    return elementByClass(swalClasses.popup);
//  };
//  var getIcons = function getIcons() {
//    var popup = getPopup();
//    return toArray(popup.querySelectorAll(".".concat(swalClasses.icon)));
//  };
//  var getIcon = function getIcon() {
//    var visibleIcon = getIcons().filter(function (icon) {
//      return isVisible(icon);
//    });
//    return visibleIcon.length ? visibleIcon[0] : null;
//  };
//  var getTitle = function getTitle() {
//    return elementByClass(swalClasses.title);
//  };
//  var getContent = function getContent() {
//    return elementByClass(swalClasses.content);
//  };
//  var getHtmlContainer = function getHtmlContainer() {
//    return elementByClass(swalClasses['html-container']);
//  };
//  var getImage = function getImage() {
//    return elementByClass(swalClasses.image);
//  };
//  var getProgressSteps = function getProgressSteps() {
//    return elementByClass(swalClasses['progress-steps']);
//  };
//  var getValidationMessage = function getValidationMessage() {
//    return elementByClass(swalClasses['validation-message']);
//  };
//  var getConfirmButton = function getConfirmButton() {
//    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
//  };
//  var getDenyButton = function getDenyButton() {
//    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.deny));
//  };
//  var getLoader = function getLoader() {
//    return elementBySelector(".".concat(swalClasses.loader));
//  };
//  var getCancelButton = function getCancelButton() {
//    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
//  };
//  var getActions = function getActions() {
//    return elementByClass(swalClasses.actions);
//  };
//  var getHeader = function getHeader() {
//    return elementByClass(swalClasses.header);
//  };
//  var getFooter = function getFooter() {
//    return elementByClass(swalClasses.footer);
//  };
//  var getTimerProgressBar = function getTimerProgressBar() {
//    return elementByClass(swalClasses['timer-progress-bar']);
//  };
//  var getCloseButton = function getCloseButton() {
//    return elementByClass(swalClasses.close);
//  }; // https://github.com/jkup/focusable/blob/master/index.js
//
//  var focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
//  var getFocusableElements = function getFocusableElements() {
//    var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
//    .sort(function (a, b) {
//      a = parseInt(a.getAttribute('tabindex'));
//      b = parseInt(b.getAttribute('tabindex'));
//
//      if (a > b) {
//        return 1;
//      } else if (a < b) {
//        return -1;
//      }
//
//      return 0;
//    });
//    var otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(function (el) {
//      return el.getAttribute('tabindex') !== '-1';
//    });
//    return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
//      return isVisible(el);
//    });
//  };
//  var isModal = function isModal() {
//    return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
//  };
//  var isToast = function isToast() {
//    return document.body.classList.contains(swalClasses['toast-shown']);
//  };
//  var isLoading = function isLoading() {
//    return getPopup().hasAttribute('data-loading');
//  };
//
//  var states = {
//    previousBodyPadding: null
//  };
//  var setInnerHtml = function setInnerHtml(elem, html) {
//    // #1926
//    elem.textContent = '';
//
//    if (html) {
//      var parser = new DOMParser();
//      var parsed = parser.parseFromString(html, "text/html");
//      toArray(parsed.querySelector('head').childNodes).forEach(function (child) {
//        elem.appendChild(child);
//      });
//      toArray(parsed.querySelector('body').childNodes).forEach(function (child) {
//        elem.appendChild(child);
//      });
//    }
//  };
//  var hasClass = function hasClass(elem, className) {
//    if (!className) {
//      return false;
//    }
//
//    var classList = className.split(/\s+/);
//
//    for (var i = 0; i < classList.length; i++) {
//      if (!elem.classList.contains(classList[i])) {
//        return false;
//      }
//    }
//
//    return true;
//  };
//
//  var removeCustomClasses = function removeCustomClasses(elem, params) {
//    toArray(elem.classList).forEach(function (className) {
//      if (!(objectValues(swalClasses).indexOf(className) !== -1) && !(objectValues(iconTypes).indexOf(className) !== -1) && !(objectValues(params.showClass).indexOf(className) !== -1)) {
//        elem.classList.remove(className);
//      }
//    });
//  };
//
//  var applyCustomClass = function applyCustomClass(elem, params, className) {
//    removeCustomClasses(elem, params);
//
//    if (params.customClass && params.customClass[className]) {
//      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
//        return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(_typeof(params.customClass[className]), "\""));
//      }
//
//      addClass(elem, params.customClass[className]);
//    }
//  };
//  function getInput(content, inputType) {
//    if (!inputType) {
//      return null;
//    }
//
//    switch (inputType) {
//      case 'select':
//      case 'textarea':
//      case 'file':
//        return getChildByClass(content, swalClasses[inputType]);
//
//      case 'checkbox':
//        return content.querySelector(".".concat(swalClasses.checkbox, " input"));
//
//      case 'radio':
//        return content.querySelector(".".concat(swalClasses.radio, " input:checked")) || content.querySelector(".".concat(swalClasses.radio, " input:first-child"));
//
//      case 'range':
//        return content.querySelector(".".concat(swalClasses.range, " input"));
//
//      default:
//        return getChildByClass(content, swalClasses.input);
//    }
//  }
//  var focusInput = function focusInput(input) {
//    input.focus(); // place cursor at end of text in text input
//
//    if (input.type !== 'file') {
//      // http://stackoverflow.com/a/2345915
//      var val = input.value;
//      input.value = '';
//      input.value = val;
//    }
//  };
//  var toggleClass = function toggleClass(target, classList, condition) {
//    if (!target || !classList) {
//      return;
//    }
//
//    if (typeof classList === 'string') {
//      classList = classList.split(/\s+/).filter(Boolean);
//    }
//
//    classList.forEach(function (className) {
//      if (target.forEach) {
//        target.forEach(function (elem) {
//          condition ? elem.classList.add(className) : elem.classList.remove(className);
//        });
//      } else {
//        condition ? target.classList.add(className) : target.classList.remove(className);
//      }
//    });
//  };
//  var addClass = function addClass(target, classList) {
//    toggleClass(target, classList, true);
//  };
//  var removeClass = function removeClass(target, classList) {
//    toggleClass(target, classList, false);
//  };
//  var getChildByClass = function getChildByClass(elem, className) {
//    for (var i = 0; i < elem.childNodes.length; i++) {
//      if (hasClass(elem.childNodes[i], className)) {
//        return elem.childNodes[i];
//      }
//    }
//  };
//  var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
//    if (value || parseInt(value) === 0) {
//      elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
//    } else {
//      elem.style.removeProperty(property);
//    }
//  };
//  var show = function show(elem) {
//    var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
//    elem.style.opacity = '';
//    elem.style.display = display;
//  };
//  var hide = function hide(elem) {
//    elem.style.opacity = '';
//    elem.style.display = 'none';
//  };
//  var toggle = function toggle(elem, condition, display) {
//    condition ? show(elem, display) : hide(elem);
//  }; // borrowed from jquery $(elem).is(':visible') implementation
//
//  var isVisible = function isVisible(elem) {
//    return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
//  };
//  /* istanbul ignore next */
//
//  var isScrollable = function isScrollable(elem) {
//    return !!(elem.scrollHeight > elem.clientHeight);
//  }; // borrowed from https://stackoverflow.com/a/46352119
//
//  var hasCssAnimation = function hasCssAnimation(elem) {
//    var style = window.getComputedStyle(elem);
//    var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
//    var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
//    return animDuration > 0 || transDuration > 0;
//  };
//  var contains = function contains(haystack, needle) {
//    if (typeof haystack.contains === 'function') {
//      return haystack.contains(needle);
//    }
//  };
//  var animateTimerProgressBar = function animateTimerProgressBar(timer) {
//    var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
//    var timerProgressBar = getTimerProgressBar();
//
//    if (isVisible(timerProgressBar)) {
//      if (reset) {
//        timerProgressBar.style.transition = 'none';
//        timerProgressBar.style.width = '100%';
//      }
//
//      setTimeout(function () {
//        timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
//        timerProgressBar.style.width = '0%';
//      }, 10);
//    }
//  };
//  var stopTimerProgressBar = function stopTimerProgressBar() {
//    var timerProgressBar = getTimerProgressBar();
//    var timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
//    timerProgressBar.style.removeProperty('transition');
//    timerProgressBar.style.width = '100%';
//    var timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
//    var timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100);
//    timerProgressBar.style.removeProperty('transition');
//    timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
//  };
//
//  // Detect Node env
//  var isNodeEnv = function isNodeEnv() {
//    return typeof window === 'undefined' || typeof document === 'undefined';
//  };
//
//  var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.error, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.question, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.warning, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.info, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.success, "\"></div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses['html-container'], "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <div class=\"").concat(swalClasses.loader, "\"></div>\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.deny, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');
//
//  var resetOldContainer = function resetOldContainer() {
//    var oldContainer = getContainer();
//
//    if (!oldContainer) {
//      return false;
//    }
//
//    oldContainer.parentNode.removeChild(oldContainer);
//    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
//    return true;
//  };
//
//  var oldInputVal; // IE11 workaround, see #1109 for details
//
//  var resetValidationMessage = function resetValidationMessage(e) {
//    if (Swal.isVisible() && oldInputVal !== e.target.value) {
//      Swal.resetValidationMessage();
//    }
//
//    oldInputVal = e.target.value;
//  };
//
//  var addInputChangeListeners = function addInputChangeListeners() {
//    var content = getContent();
//    var input = getChildByClass(content, swalClasses.input);
//    var file = getChildByClass(content, swalClasses.file);
//    var range = content.querySelector(".".concat(swalClasses.range, " input"));
//    var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
//    var select = getChildByClass(content, swalClasses.select);
//    var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
//    var textarea = getChildByClass(content, swalClasses.textarea);
//    input.oninput = resetValidationMessage;
//    file.onchange = resetValidationMessage;
//    select.onchange = resetValidationMessage;
//    checkbox.onchange = resetValidationMessage;
//    textarea.oninput = resetValidationMessage;
//
//    range.oninput = function (e) {
//      resetValidationMessage(e);
//      rangeOutput.value = range.value;
//    };
//
//    range.onchange = function (e) {
//      resetValidationMessage(e);
//      range.nextSibling.value = range.value;
//    };
//  };
//
//  var getTarget = function getTarget(target) {
//    return typeof target === 'string' ? document.querySelector(target) : target;
//  };
//
//  var setupAccessibility = function setupAccessibility(params) {
//    var popup = getPopup();
//    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
//    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');
//
//    if (!params.toast) {
//      popup.setAttribute('aria-modal', 'true');
//    }
//  };
//
//  var setupRTL = function setupRTL(targetElement) {
//    if (window.getComputedStyle(targetElement).direction === 'rtl') {
//      addClass(getContainer(), swalClasses.rtl);
//    }
//  };
//  /*
//   * Add modal + backdrop to DOM
//   */
//
//
//  var init = function init(params) {
//    // Clean up the old popup container if it exists
//    var oldContainerExisted = resetOldContainer();
//    /* istanbul ignore if */
//
//    if (isNodeEnv()) {
//      error('SweetAlert2 requires document to initialize');
//      return;
//    }
//
//    var container = document.createElement('div');
//    container.className = swalClasses.container;
//
//    if (oldContainerExisted) {
//      addClass(container, swalClasses['no-transition']);
//    }
//
//    setInnerHtml(container, sweetHTML);
//    var targetElement = getTarget(params.target);
//    targetElement.appendChild(container);
//    setupAccessibility(params);
//    setupRTL(targetElement);
//    addInputChangeListeners();
//  };
//
//  var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
//    // DOM element
//    if (param instanceof HTMLElement) {
//      target.appendChild(param); // Object
//    } else if (_typeof(param) === 'object') {
//      handleObject(param, target); // Plain string
//    } else if (param) {
//      setInnerHtml(target, param);
//    }
//  };
//
//  var handleObject = function handleObject(param, target) {
//    // JQuery element(s)
//    if (param.jquery) {
//      handleJqueryElem(target, param); // For other objects use their string representation
//    } else {
//      setInnerHtml(target, param.toString());
//    }
//  };
//
//  var handleJqueryElem = function handleJqueryElem(target, elem) {
//    target.textContent = '';
//
//    if (0 in elem) {
//      for (var i = 0; (i in elem); i++) {
//        target.appendChild(elem[i].cloneNode(true));
//      }
//    } else {
//      target.appendChild(elem.cloneNode(true));
//    }
//  };
//
//  var animationEndEvent = function () {
//    // Prevent run in Node env
//
//    /* istanbul ignore if */
//    if (isNodeEnv()) {
//      return false;
//    }
//
//    var testEl = document.createElement('div');
//    var transEndEventNames = {
//      WebkitAnimation: 'webkitAnimationEnd',
//      OAnimation: 'oAnimationEnd oanimationend',
//      animation: 'animationend'
//    };
//
//    for (var i in transEndEventNames) {
//      if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
//        return transEndEventNames[i];
//      }
//    }
//
//    return false;
//  }();
//
//  // https://github.com/twbs/bootstrap/blob/master/js/src/modal.js
//
//  var measureScrollbar = function measureScrollbar() {
//    var scrollDiv = document.createElement('div');
//    scrollDiv.className = swalClasses['scrollbar-measure'];
//    document.body.appendChild(scrollDiv);
//    var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
//    document.body.removeChild(scrollDiv);
//    return scrollbarWidth;
//  };
//
//  var renderActions = function renderActions(instance, params) {
//    var actions = getActions();
//    var loader = getLoader();
//    var confirmButton = getConfirmButton();
//    var denyButton = getDenyButton();
//    var cancelButton = getCancelButton(); // Actions (buttons) wrapper
//
//    if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
//      hide(actions);
//    } // Custom class
//
//
//    applyCustomClass(actions, params, 'actions'); // Render buttons
//
//    renderButton(confirmButton, 'confirm', params);
//    renderButton(denyButton, 'deny', params);
//    renderButton(cancelButton, 'cancel', params); // Loader
//
//    loader.innerHTML = params.loaderHtml;
//
//    if (params.buttonsStyling) {
//      handleButtonsStyling(confirmButton, denyButton, cancelButton, params);
//    } else {
//      removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
//    }
//
//    if (params.reverseButtons) {
//      actions.insertBefore(cancelButton, loader);
//      actions.insertBefore(denyButton, loader);
//      actions.insertBefore(confirmButton, loader);
//    }
//  };
//
//  function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
//    addClass([confirmButton, denyButton, cancelButton], swalClasses.styled); // Buttons background colors
//
//    if (params.confirmButtonColor) {
//      confirmButton.style.backgroundColor = params.confirmButtonColor;
//    }
//
//    if (params.denyButtonColor) {
//      denyButton.style.backgroundColor = params.denyButtonColor;
//    }
//
//    if (params.cancelButtonColor) {
//      cancelButton.style.backgroundColor = params.cancelButtonColor;
//    } // Loading state
//
//
//    if (!isLoading()) {
//      var confirmButtonBackgroundColor = window.getComputedStyle(confirmButton).getPropertyValue('background-color');
//      confirmButton.style.borderLeftColor = confirmButtonBackgroundColor;
//      confirmButton.style.borderRightColor = confirmButtonBackgroundColor;
//    }
//  }
//
//  function renderButton(button, buttonType, params) {
//    toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
//    setInnerHtml(button, params["".concat(buttonType, "ButtonText")]); // Set caption text
//
//    button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
//    // Add buttons custom classes
//
//    button.className = swalClasses[buttonType];
//    applyCustomClass(button, params, "".concat(buttonType, "Button"));
//    addClass(button, params["".concat(buttonType, "ButtonClass")]);
//  }
//
//  function handleBackdropParam(container, backdrop) {
//    if (typeof backdrop === 'string') {
//      container.style.background = backdrop;
//    } else if (!backdrop) {
//      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
//    }
//  }
//
//  function handlePositionParam(container, position) {
//    if (position in swalClasses) {
//      addClass(container, swalClasses[position]);
//    } else {
//      warn('The "position" parameter is not valid, defaulting to "center"');
//      addClass(container, swalClasses.center);
//    }
//  }
//
//  function handleGrowParam(container, grow) {
//    if (grow && typeof grow === 'string') {
//      var growClass = "grow-".concat(grow);
//
//      if (growClass in swalClasses) {
//        addClass(container, swalClasses[growClass]);
//      }
//    }
//  }
//
//  var renderContainer = function renderContainer(instance, params) {
//    var container = getContainer();
//
//    if (!container) {
//      return;
//    }
//
//    handleBackdropParam(container, params.backdrop);
//
//    if (!params.backdrop && params.allowOutsideClick) {
//      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
//    }
//
//    handlePositionParam(container, params.position);
//    handleGrowParam(container, params.grow); // Custom class
//
//    applyCustomClass(container, params, 'container'); // Set queue step attribute for getQueueStep() method
//
//    var queueStep = document.body.getAttribute('data-swal2-queue-step');
//
//    if (queueStep) {
//      container.setAttribute('data-queue-step', queueStep);
//      document.body.removeAttribute('data-swal2-queue-step');
//    }
//  };
//
//  /**
//   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
//   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
//   * This is the approach that Babel will probably take to implement private methods/fields
//   *   https://github.com/tc39/proposal-private-methods
//   *   https://github.com/babel/babel/pull/7555
//   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
//   *   then we can use that language feature.
//   */
//  var privateProps = {
//    promise: new WeakMap(),
//    innerParams: new WeakMap(),
//    domCache: new WeakMap()
//  };
//
//  var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
//  var renderInput = function renderInput(instance, params) {
//    var content = getContent();
//    var innerParams = privateProps.innerParams.get(instance);
//    var rerender = !innerParams || params.input !== innerParams.input;
//    inputTypes.forEach(function (inputType) {
//      var inputClass = swalClasses[inputType];
//      var inputContainer = getChildByClass(content, inputClass); // set attributes
//
//      setAttributes(inputType, params.inputAttributes); // set class
//
//      inputContainer.className = inputClass;
//
//      if (rerender) {
//        hide(inputContainer);
//      }
//    });
//
//    if (params.input) {
//      if (rerender) {
//        showInput(params);
//      } // set custom class
//
//
//      setCustomClass(params);
//    }
//  };
//
//  var showInput = function showInput(params) {
//    if (!renderInputType[params.input]) {
//      return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
//    }
//
//    var inputContainer = getInputContainer(params.input);
//    var input = renderInputType[params.input](inputContainer, params);
//    show(input); // input autofocus
//
//    setTimeout(function () {
//      focusInput(input);
//    });
//  };
//
//  var removeAttributes = function removeAttributes(input) {
//    for (var i = 0; i < input.attributes.length; i++) {
//      var attrName = input.attributes[i].name;
//
//      if (!(['type', 'value', 'style'].indexOf(attrName) !== -1)) {
//        input.removeAttribute(attrName);
//      }
//    }
//  };
//
//  var setAttributes = function setAttributes(inputType, inputAttributes) {
//    var input = getInput(getContent(), inputType);
//
//    if (!input) {
//      return;
//    }
//
//    removeAttributes(input);
//
//    for (var attr in inputAttributes) {
//      // Do not set a placeholder for <input type="range">
//      // it'll crash Edge, #1298
//      if (inputType === 'range' && attr === 'placeholder') {
//        continue;
//      }
//
//      input.setAttribute(attr, inputAttributes[attr]);
//    }
//  };
//
//  var setCustomClass = function setCustomClass(params) {
//    var inputContainer = getInputContainer(params.input);
//
//    if (params.customClass) {
//      addClass(inputContainer, params.customClass.input);
//    }
//  };
//
//  var setInputPlaceholder = function setInputPlaceholder(input, params) {
//    if (!input.placeholder || params.inputPlaceholder) {
//      input.placeholder = params.inputPlaceholder;
//    }
//  };
//
//  var getInputContainer = function getInputContainer(inputType) {
//    var inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
//    return getChildByClass(getContent(), inputClass);
//  };
//
//  var renderInputType = {};
//
//  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = function (input, params) {
//    if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
//      input.value = params.inputValue;
//    } else if (!isPromise(params.inputValue)) {
//      warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(params.inputValue), "\""));
//    }
//
//    setInputPlaceholder(input, params);
//    input.type = params.input;
//    return input;
//  };
//
//  renderInputType.file = function (input, params) {
//    setInputPlaceholder(input, params);
//    return input;
//  };
//
//  renderInputType.range = function (range, params) {
//    var rangeInput = range.querySelector('input');
//    var rangeOutput = range.querySelector('output');
//    rangeInput.value = params.inputValue;
//    rangeInput.type = params.input;
//    rangeOutput.value = params.inputValue;
//    return range;
//  };
//
//  renderInputType.select = function (select, params) {
//    select.textContent = '';
//
//    if (params.inputPlaceholder) {
//      var placeholder = document.createElement('option');
//      setInnerHtml(placeholder, params.inputPlaceholder);
//      placeholder.value = '';
//      placeholder.disabled = true;
//      placeholder.selected = true;
//      select.appendChild(placeholder);
//    }
//
//    return select;
//  };
//
//  renderInputType.radio = function (radio) {
//    radio.textContent = '';
//    return radio;
//  };
//
//  renderInputType.checkbox = function (checkboxContainer, params) {
//    var checkbox = getInput(getContent(), 'checkbox');
//    checkbox.value = 1;
//    checkbox.id = swalClasses.checkbox;
//    checkbox.checked = Boolean(params.inputValue);
//    var label = checkboxContainer.querySelector('span');
//    setInnerHtml(label, params.inputPlaceholder);
//    return checkboxContainer;
//  };
//
//  renderInputType.textarea = function (textarea, params) {
//    textarea.value = params.inputValue;
//    setInputPlaceholder(textarea, params);
//
//    if ('MutationObserver' in window) {
//      // #1699
//      var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
//      var popupPadding = parseInt(window.getComputedStyle(getPopup()).paddingLeft) + parseInt(window.getComputedStyle(getPopup()).paddingRight);
//
//      var outputsize = function outputsize() {
//        var contentWidth = textarea.offsetWidth + popupPadding;
//
//        if (contentWidth > initialPopupWidth) {
//          getPopup().style.width = "".concat(contentWidth, "px");
//        } else {
//          getPopup().style.width = null;
//        }
//      };
//
//      new MutationObserver(outputsize).observe(textarea, {
//        attributes: true,
//        attributeFilter: ['style']
//      });
//    }
//
//    return textarea;
//  };
//
//  var renderContent = function renderContent(instance, params) {
//    var content = getContent().querySelector("#".concat(swalClasses.content)); // Content as HTML
//
//    if (params.html) {
//      parseHtmlToContainer(params.html, content);
//      show(content, 'block'); // Content as plain text
//    } else if (params.text) {
//      content.textContent = params.text;
//      show(content, 'block'); // No content
//    } else {
//      hide(content);
//    }
//
//    renderInput(instance, params); // Custom class
//
//    applyCustomClass(getContent(), params, 'content');
//  };
//
//  var renderFooter = function renderFooter(instance, params) {
//    var footer = getFooter();
//    toggle(footer, params.footer);
//
//    if (params.footer) {
//      parseHtmlToContainer(params.footer, footer);
//    } // Custom class
//
//
//    applyCustomClass(footer, params, 'footer');
//  };
//
//  var renderCloseButton = function renderCloseButton(instance, params) {
//    var closeButton = getCloseButton();
//    setInnerHtml(closeButton, params.closeButtonHtml); // Custom class
//
//    applyCustomClass(closeButton, params, 'closeButton');
//    toggle(closeButton, params.showCloseButton);
//    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
//  };
//
//  var renderIcon = function renderIcon(instance, params) {
//    var innerParams = privateProps.innerParams.get(instance); // if the give icon already rendered, apply the custom class without re-rendering the icon
//
//    if (innerParams && params.icon === innerParams.icon && getIcon()) {
//      applyCustomClass(getIcon(), params, 'icon');
//      return;
//    }
//
//    hideAllIcons();
//
//    if (!params.icon) {
//      return;
//    }
//
//    if (Object.keys(iconTypes).indexOf(params.icon) !== -1) {
//      var icon = elementBySelector(".".concat(swalClasses.icon, ".").concat(iconTypes[params.icon]));
//      show(icon); // Custom or default content
//
//      setContent(icon, params);
//      adjustSuccessIconBackgoundColor(); // Custom class
//
//      applyCustomClass(icon, params, 'icon'); // Animate icon
//
//      addClass(icon, params.showClass.icon);
//    } else {
//      error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
//    }
//  };
//
//  var hideAllIcons = function hideAllIcons() {
//    var icons = getIcons();
//
//    for (var i = 0; i < icons.length; i++) {
//      hide(icons[i]);
//    }
//  }; // Adjust success icon background color to match the popup background color
//
//
//  var adjustSuccessIconBackgoundColor = function adjustSuccessIconBackgoundColor() {
//    var popup = getPopup();
//    var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
//    var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
//
//    for (var i = 0; i < successIconParts.length; i++) {
//      successIconParts[i].style.backgroundColor = popupBackgroundColor;
//    }
//  };
//
//  var setContent = function setContent(icon, params) {
//    icon.textContent = '';
//
//    if (params.iconHtml) {
//      setInnerHtml(icon, iconContent(params.iconHtml));
//    } else if (params.icon === 'success') {
//      setInnerHtml(icon, "\n      <div class=\"swal2-success-circular-line-left\"></div>\n      <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n      <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n      <div class=\"swal2-success-circular-line-right\"></div>\n    ");
//    } else if (params.icon === 'error') {
//      setInnerHtml(icon, "\n      <span class=\"swal2-x-mark\">\n        <span class=\"swal2-x-mark-line-left\"></span>\n        <span class=\"swal2-x-mark-line-right\"></span>\n      </span>\n    ");
//    } else {
//      var defaultIconHtml = {
//        question: '?',
//        warning: '!',
//        info: 'i'
//      };
//      setInnerHtml(icon, iconContent(defaultIconHtml[params.icon]));
//    }
//  };
//
//  var iconContent = function iconContent(content) {
//    return "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");
//  };
//
//  var renderImage = function renderImage(instance, params) {
//    var image = getImage();
//
//    if (!params.imageUrl) {
//      return hide(image);
//    }
//
//    show(image, ''); // Src, alt
//
//    image.setAttribute('src', params.imageUrl);
//    image.setAttribute('alt', params.imageAlt); // Width, height
//
//    applyNumericalStyle(image, 'width', params.imageWidth);
//    applyNumericalStyle(image, 'height', params.imageHeight); // Class
//
//    image.className = swalClasses.image;
//    applyCustomClass(image, params, 'image');
//  };
//
//  var currentSteps = [];
//  /*
//   * Global function for chaining sweetAlert popups
//   */
//
//  var queue = function queue(steps) {
//    var Swal = this;
//    currentSteps = steps;
//
//    var resetAndResolve = function resetAndResolve(resolve, value) {
//      currentSteps = [];
//      resolve(value);
//    };
//
//    var queueResult = [];
//    return new Promise(function (resolve) {
//      (function step(i, callback) {
//        if (i < currentSteps.length) {
//          document.body.setAttribute('data-swal2-queue-step', i);
//          Swal.fire(currentSteps[i]).then(function (result) {
//            if (typeof result.value !== 'undefined') {
//              queueResult.push(result.value);
//              step(i + 1, callback);
//            } else {
//              resetAndResolve(resolve, {
//                dismiss: result.dismiss
//              });
//            }
//          });
//        } else {
//          resetAndResolve(resolve, {
//            value: queueResult
//          });
//        }
//      })(0);
//    });
//  };
//  /*
//   * Global function for getting the index of current popup in queue
//   */
//
//  var getQueueStep = function getQueueStep() {
//    return getContainer() && getContainer().getAttribute('data-queue-step');
//  };
//  /*
//   * Global function for inserting a popup to the queue
//   */
//
//  var insertQueueStep = function insertQueueStep(step, index) {
//    if (index && index < currentSteps.length) {
//      return currentSteps.splice(index, 0, step);
//    }
//
//    return currentSteps.push(step);
//  };
//  /*
//   * Global function for deleting a popup from the queue
//   */
//
//  var deleteQueueStep = function deleteQueueStep(index) {
//    if (typeof currentSteps[index] !== 'undefined') {
//      currentSteps.splice(index, 1);
//    }
//  };
//
//  var createStepElement = function createStepElement(step) {
//    var stepEl = document.createElement('li');
//    addClass(stepEl, swalClasses['progress-step']);
//    setInnerHtml(stepEl, step);
//    return stepEl;
//  };
//
//  var createLineElement = function createLineElement(params) {
//    var lineEl = document.createElement('li');
//    addClass(lineEl, swalClasses['progress-step-line']);
//
//    if (params.progressStepsDistance) {
//      lineEl.style.width = params.progressStepsDistance;
//    }
//
//    return lineEl;
//  };
//
//  var renderProgressSteps = function renderProgressSteps(instance, params) {
//    var progressStepsContainer = getProgressSteps();
//
//    if (!params.progressSteps || params.progressSteps.length === 0) {
//      return hide(progressStepsContainer);
//    }
//
//    show(progressStepsContainer);
//    progressStepsContainer.textContent = '';
//    var currentProgressStep = parseInt(params.currentProgressStep === undefined ? getQueueStep() : params.currentProgressStep);
//
//    if (currentProgressStep >= params.progressSteps.length) {
//      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
//    }
//
//    params.progressSteps.forEach(function (step, index) {
//      var stepEl = createStepElement(step);
//      progressStepsContainer.appendChild(stepEl);
//
//      if (index === currentProgressStep) {
//        addClass(stepEl, swalClasses['active-progress-step']);
//      }
//
//      if (index !== params.progressSteps.length - 1) {
//        var lineEl = createLineElement(params);
//        progressStepsContainer.appendChild(lineEl);
//      }
//    });
//  };
//
//  var renderTitle = function renderTitle(instance, params) {
//    var title = getTitle();
//    toggle(title, params.title || params.titleText);
//
//    if (params.title) {
//      parseHtmlToContainer(params.title, title);
//    }
//
//    if (params.titleText) {
//      title.innerText = params.titleText;
//    } // Custom class
//
//
//    applyCustomClass(title, params, 'title');
//  };
//
//  var renderHeader = function renderHeader(instance, params) {
//    var header = getHeader(); // Custom class
//
//    applyCustomClass(header, params, 'header'); // Progress steps
//
//    renderProgressSteps(instance, params); // Icon
//
//    renderIcon(instance, params); // Image
//
//    renderImage(instance, params); // Title
//
//    renderTitle(instance, params); // Close button
//
//    renderCloseButton(instance, params);
//  };
//
//  var renderPopup = function renderPopup(instance, params) {
//    var popup = getPopup(); // Width
//
//    applyNumericalStyle(popup, 'width', params.width); // Padding
//
//    applyNumericalStyle(popup, 'padding', params.padding); // Background
//
//    if (params.background) {
//      popup.style.background = params.background;
//    } // Classes
//
//
//    addClasses(popup, params);
//  };
//
//  var addClasses = function addClasses(popup, params) {
//    // Default Class + showClass when updating Swal.update({})
//    popup.className = "".concat(swalClasses.popup, " ").concat(isVisible(popup) ? params.showClass.popup : '');
//
//    if (params.toast) {
//      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
//      addClass(popup, swalClasses.toast);
//    } else {
//      addClass(popup, swalClasses.modal);
//    } // Custom class
//
//
//    applyCustomClass(popup, params, 'popup');
//
//    if (typeof params.customClass === 'string') {
//      addClass(popup, params.customClass);
//    } // Icon class (#1842)
//
//
//    if (params.icon) {
//      addClass(popup, swalClasses["icon-".concat(params.icon)]);
//    }
//  };
//
//  var render = function render(instance, params) {
//    renderPopup(instance, params);
//    renderContainer(instance, params);
//    renderHeader(instance, params);
//    renderContent(instance, params);
//    renderActions(instance, params);
//    renderFooter(instance, params);
//
//    if (typeof params.onRender === 'function') {
//      params.onRender(getPopup());
//    }
//  };
//
//  /*
//   * Global function to determine if SweetAlert2 popup is shown
//   */
//
//  var isVisible$1 = function isVisible$$1() {
//    return isVisible(getPopup());
//  };
//  /*
//   * Global function to click 'Confirm' button
//   */
//
//  var clickConfirm = function clickConfirm() {
//    return getConfirmButton() && getConfirmButton().click();
//  };
//  /*
//   * Global function to click 'Deny' button
//   */
//
//  var clickDeny = function clickDeny() {
//    return getDenyButton() && getDenyButton().click();
//  };
//  /*
//   * Global function to click 'Cancel' button
//   */
//
//  var clickCancel = function clickCancel() {
//    return getCancelButton() && getCancelButton().click();
//  };
//
//  function fire() {
//    var Swal = this;
//
//    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
//      args[_key] = arguments[_key];
//    }
//
//    return _construct(Swal, args);
//  }
//
//  /**
//   * Returns an extended version of `Swal` containing `params` as defaults.
//   * Useful for reusing Swal configuration.
//   *
//   * For example:
//   *
//   * Before:
//   * const textPromptOptions = { input: 'text', showCancelButton: true }
//   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
//   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
//   *
//   * After:
//   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
//   * const {value: firstName} = await TextPrompt('What is your first name?')
//   * const {value: lastName} = await TextPrompt('What is your last name?')
//   *
//   * @param mixinParams
//   */
//  function mixin(mixinParams) {
//    var MixinSwal = /*#__PURE__*/function (_this) {
//      _inherits(MixinSwal, _this);
//
//      var _super = _createSuper(MixinSwal);
//
//      function MixinSwal() {
//        _classCallCheck(this, MixinSwal);
//
//        return _super.apply(this, arguments);
//      }
//
//      _createClass(MixinSwal, [{
//        key: "_main",
//        value: function _main(params) {
//          return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, _extends({}, mixinParams, params));
//        }
//      }]);
//
//      return MixinSwal;
//    }(this);
//
//    return MixinSwal;
//  }
//
//  /**
//   * Show spinner instead of Confirm button
//   */
//
//  var showLoading = function showLoading() {
//    var popup = getPopup();
//
//    if (!popup) {
//      Swal.fire();
//    }
//
//    popup = getPopup();
//    var actions = getActions();
//    var confirmButton = getConfirmButton();
//    var loader = getLoader();
//    show(actions);
//    hide(confirmButton);
//    addClass([popup, actions], swalClasses.loading);
//    show(loader);
//    popup.setAttribute('data-loading', true);
//    popup.setAttribute('aria-busy', true);
//    popup.focus();
//  };
//
//  var RESTORE_FOCUS_TIMEOUT = 100;
//
//  var globalState = {};
//
//  var focusPreviousActiveElement = function focusPreviousActiveElement() {
//    if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
//      globalState.previousActiveElement.focus();
//      globalState.previousActiveElement = null;
//    } else if (document.body) {
//      document.body.focus();
//    }
//  }; // Restore previous active (focused) element
//
//
//  var restoreActiveElement = function restoreActiveElement() {
//    return new Promise(function (resolve) {
//      var x = window.scrollX;
//      var y = window.scrollY;
//      globalState.restoreFocusTimeout = setTimeout(function () {
//        focusPreviousActiveElement();
//        resolve();
//      }, RESTORE_FOCUS_TIMEOUT); // issues/900
//
//      /* istanbul ignore if */
//
//      if (typeof x !== 'undefined' && typeof y !== 'undefined') {
//        // IE doesn't have scrollX/scrollY support
//        window.scrollTo(x, y);
//      }
//    });
//  };
//
//  /**
//   * If `timer` parameter is set, returns number of milliseconds of timer remained.
//   * Otherwise, returns undefined.
//   */
//
//  var getTimerLeft = function getTimerLeft() {
//    return globalState.timeout && globalState.timeout.getTimerLeft();
//  };
//  /**
//   * Stop timer. Returns number of milliseconds of timer remained.
//   * If `timer` parameter isn't set, returns undefined.
//   */
//
//  var stopTimer = function stopTimer() {
//    if (globalState.timeout) {
//      stopTimerProgressBar();
//      return globalState.timeout.stop();
//    }
//  };
//  /**
//   * Resume timer. Returns number of milliseconds of timer remained.
//   * If `timer` parameter isn't set, returns undefined.
//   */
//
//  var resumeTimer = function resumeTimer() {
//    if (globalState.timeout) {
//      var remaining = globalState.timeout.start();
//      animateTimerProgressBar(remaining);
//      return remaining;
//    }
//  };
//  /**
//   * Resume timer. Returns number of milliseconds of timer remained.
//   * If `timer` parameter isn't set, returns undefined.
//   */
//
//  var toggleTimer = function toggleTimer() {
//    var timer = globalState.timeout;
//    return timer && (timer.running ? stopTimer() : resumeTimer());
//  };
//  /**
//   * Increase timer. Returns number of milliseconds of an updated timer.
//   * If `timer` parameter isn't set, returns undefined.
//   */
//
//  var increaseTimer = function increaseTimer(n) {
//    if (globalState.timeout) {
//      var remaining = globalState.timeout.increase(n);
//      animateTimerProgressBar(remaining, true);
//      return remaining;
//    }
//  };
//  /**
//   * Check if timer is running. Returns true if timer is running
//   * or false if timer is paused or stopped.
//   * If `timer` parameter isn't set, returns undefined
//   */
//
//  var isTimerRunning = function isTimerRunning() {
//    return globalState.timeout && globalState.timeout.isRunning();
//  };
//
//  var defaultParams = {
//    title: '',
//    titleText: '',
//    text: '',
//    html: '',
//    footer: '',
//    icon: undefined,
//    iconHtml: undefined,
//    toast: false,
//    animation: true,
//    showClass: {
//      popup: 'swal2-show',
//      backdrop: 'swal2-backdrop-show',
//      icon: 'swal2-icon-show'
//    },
//    hideClass: {
//      popup: 'swal2-hide',
//      backdrop: 'swal2-backdrop-hide',
//      icon: 'swal2-icon-hide'
//    },
//    customClass: undefined,
//    target: 'body',
//    backdrop: true,
//    heightAuto: true,
//    allowOutsideClick: true,
//    allowEscapeKey: true,
//    allowEnterKey: true,
//    stopKeydownPropagation: true,
//    keydownListenerCapture: false,
//    showConfirmButton: true,
//    showDenyButton: false,
//    showCancelButton: false,
//    preConfirm: undefined,
//    confirmButtonText: 'OK',
//    confirmButtonAriaLabel: '',
//    confirmButtonColor: undefined,
//    denyButtonText: 'No',
//    denyButtonAriaLabel: '',
//    denyButtonColor: undefined,
//    cancelButtonText: 'Cancel',
//    cancelButtonAriaLabel: '',
//    cancelButtonColor: undefined,
//    buttonsStyling: true,
//    reverseButtons: false,
//    focusConfirm: true,
//    focusDeny: false,
//    focusCancel: false,
//    showCloseButton: false,
//    closeButtonHtml: '&times;',
//    closeButtonAriaLabel: 'Close this dialog',
//    loaderHtml: '',
//    showLoaderOnConfirm: false,
//    imageUrl: undefined,
//    imageWidth: undefined,
//    imageHeight: undefined,
//    imageAlt: '',
//    timer: undefined,
//    timerProgressBar: false,
//    width: undefined,
//    padding: undefined,
//    background: undefined,
//    input: undefined,
//    inputPlaceholder: '',
//    inputValue: '',
//    inputOptions: {},
//    inputAutoTrim: true,
//    inputAttributes: {},
//    inputValidator: undefined,
//    validationMessage: undefined,
//    grow: false,
//    position: 'center',
//    progressSteps: [],
//    currentProgressStep: undefined,
//    progressStepsDistance: undefined,
//    onBeforeOpen: undefined,
//    onOpen: undefined,
//    onRender: undefined,
//    onClose: undefined,
//    onAfterClose: undefined,
//    onDestroy: undefined,
//    scrollbarPadding: true
//  };
//  var updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'footer', 'hideClass', 'html', 'icon', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'onAfterClose', 'onClose', 'onDestroy', 'progressSteps', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText'];
//  var deprecatedParams = {
//    animation: 'showClass" and "hideClass'
//  };
//  var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusDeny', 'focusCancel', 'heightAuto', 'keydownListenerCapture'];
//  /**
//   * Is valid parameter
//   * @param {String} paramName
//   */
//
//  var isValidParameter = function isValidParameter(paramName) {
//    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
//  };
//  /**
//   * Is valid parameter for Swal.update() method
//   * @param {String} paramName
//   */
//
//  var isUpdatableParameter = function isUpdatableParameter(paramName) {
//    return updatableParams.indexOf(paramName) !== -1;
//  };
//  /**
//   * Is deprecated parameter
//   * @param {String} paramName
//   */
//
//  var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
//    return deprecatedParams[paramName];
//  };
//
//  var checkIfParamIsValid = function checkIfParamIsValid(param) {
//    if (!isValidParameter(param)) {
//      warn("Unknown parameter \"".concat(param, "\""));
//    }
//  };
//
//  var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
//    if (toastIncompatibleParams.indexOf(param) !== -1) {
//      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
//    }
//  };
//
//  var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
//    if (isDeprecatedParameter(param)) {
//      warnAboutDepreation(param, isDeprecatedParameter(param));
//    }
//  };
//  /**
//   * Show relevant warnings for given params
//   *
//   * @param params
//   */
//
//
//  var showWarningsForParams = function showWarningsForParams(params) {
//    for (var param in params) {
//      checkIfParamIsValid(param);
//
//      if (params.toast) {
//        checkIfToastParamIsValid(param);
//      }
//
//      checkIfParamIsDeprecated(param);
//    }
//  };
//
//
//
//  var staticMethods = /*#__PURE__*/Object.freeze({
//    isValidParameter: isValidParameter,
//    isUpdatableParameter: isUpdatableParameter,
//    isDeprecatedParameter: isDeprecatedParameter,
//    argsToParams: argsToParams,
//    isVisible: isVisible$1,
//    clickConfirm: clickConfirm,
//    clickDeny: clickDeny,
//    clickCancel: clickCancel,
//    getContainer: getContainer,
//    getPopup: getPopup,
//    getTitle: getTitle,
//    getContent: getContent,
//    getHtmlContainer: getHtmlContainer,
//    getImage: getImage,
//    getIcon: getIcon,
//    getIcons: getIcons,
//    getCloseButton: getCloseButton,
//    getActions: getActions,
//    getConfirmButton: getConfirmButton,
//    getDenyButton: getDenyButton,
//    getCancelButton: getCancelButton,
//    getHeader: getHeader,
//    getFooter: getFooter,
//    getTimerProgressBar: getTimerProgressBar,
//    getFocusableElements: getFocusableElements,
//    getValidationMessage: getValidationMessage,
//    isLoading: isLoading,
//    fire: fire,
//    mixin: mixin,
//    queue: queue,
//    getQueueStep: getQueueStep,
//    insertQueueStep: insertQueueStep,
//    deleteQueueStep: deleteQueueStep,
//    showLoading: showLoading,
//    enableLoading: showLoading,
//    getTimerLeft: getTimerLeft,
//    stopTimer: stopTimer,
//    resumeTimer: resumeTimer,
//    toggleTimer: toggleTimer,
//    increaseTimer: increaseTimer,
//    isTimerRunning: isTimerRunning
//  });
//
//  /**
//   * Enables buttons and hide loader.
//   */
//
//  function hideLoading() {
//    // do nothing if popup is closed
//    var innerParams = privateProps.innerParams.get(this);
//
//    if (!innerParams) {
//      return;
//    }
//
//    var domCache = privateProps.domCache.get(this);
//    hide(domCache.loader);
//
//    if (innerParams.showConfirmButton) {
//      show(domCache.confirmButton);
//    } else if (!innerParams.showConfirmButton && !innerParams.showCancelButton) {
//      hide(domCache.actions);
//    }
//
//    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
//    domCache.popup.removeAttribute('aria-busy');
//    domCache.popup.removeAttribute('data-loading');
//    domCache.confirmButton.disabled = false;
//    domCache.denyButton.disabled = false;
//    domCache.cancelButton.disabled = false;
//  }
//
//  function getInput$1(instance) {
//    var innerParams = privateProps.innerParams.get(instance || this);
//    var domCache = privateProps.domCache.get(instance || this);
//
//    if (!domCache) {
//      return null;
//    }
//
//    return getInput(domCache.content, innerParams.input);
//  }
//
//  var fixScrollbar = function fixScrollbar() {
//    // for queues, do not do this more than once
//    if (states.previousBodyPadding !== null) {
//      return;
//    } // if the body has overflow
//
//
//    if (document.body.scrollHeight > window.innerHeight) {
//      // add padding so the content doesn't shift after removal of scrollbar
//      states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
//      document.body.style.paddingRight = "".concat(states.previousBodyPadding + measureScrollbar(), "px");
//    }
//  };
//  var undoScrollbar = function undoScrollbar() {
//    if (states.previousBodyPadding !== null) {
//      document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px");
//      states.previousBodyPadding = null;
//    }
//  };
//
//  /* istanbul ignore file */
//
//  var iOSfix = function iOSfix() {
//    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
//
//    if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
//      var offset = document.body.scrollTop;
//      document.body.style.top = "".concat(offset * -1, "px");
//      addClass(document.body, swalClasses.iosfix);
//      lockBodyScroll();
//      addBottomPaddingForTallPopups(); // #1948
//    }
//  };
//
//  var addBottomPaddingForTallPopups = function addBottomPaddingForTallPopups() {
//    var safari = !navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i);
//
//    if (safari) {
//      var bottomPanelHeight = 44;
//
//      if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
//        getContainer().style.paddingBottom = "".concat(bottomPanelHeight, "px");
//      }
//    }
//  };
//
//  var lockBodyScroll = function lockBodyScroll() {
//    // #1246
//    var container = getContainer();
//    var preventTouchMove;
//
//    container.ontouchstart = function (e) {
//      preventTouchMove = shouldPreventTouchMove(e.target);
//    };
//
//    container.ontouchmove = function (e) {
//      if (preventTouchMove) {
//        e.preventDefault();
//        e.stopPropagation();
//      }
//    };
//  };
//
//  var shouldPreventTouchMove = function shouldPreventTouchMove(target) {
//    var container = getContainer();
//
//    if (target === container) {
//      return true;
//    }
//
//    if (!isScrollable(container) && target.tagName !== 'INPUT' && // #1603
//    !(isScrollable(getContent()) && // #1944
//    getContent().contains(target))) {
//      return true;
//    }
//
//    return false;
//  };
//
//  var undoIOSfix = function undoIOSfix() {
//    if (hasClass(document.body, swalClasses.iosfix)) {
//      var offset = parseInt(document.body.style.top, 10);
//      removeClass(document.body, swalClasses.iosfix);
//      document.body.style.top = '';
//      document.body.scrollTop = offset * -1;
//    }
//  };
//
//  /* istanbul ignore file */
//
//  var isIE11 = function isIE11() {
//    return !!window.MSInputMethodContext && !!document.documentMode;
//  }; // Fix IE11 centering sweetalert2/issues/933
//
//
//  var fixVerticalPositionIE = function fixVerticalPositionIE() {
//    var container = getContainer();
//    var popup = getPopup();
//    container.style.removeProperty('align-items');
//
//    if (popup.offsetTop < 0) {
//      container.style.alignItems = 'flex-start';
//    }
//  };
//
//  var IEfix = function IEfix() {
//    if (typeof window !== 'undefined' && isIE11()) {
//      fixVerticalPositionIE();
//      window.addEventListener('resize', fixVerticalPositionIE);
//    }
//  };
//  var undoIEfix = function undoIEfix() {
//    if (typeof window !== 'undefined' && isIE11()) {
//      window.removeEventListener('resize', fixVerticalPositionIE);
//    }
//  };
//
//  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
//  // elements not within the active modal dialog will not be surfaced if a user opens a screen
//  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.
//
//  var setAriaHidden = function setAriaHidden() {
//    var bodyChildren = toArray(document.body.children);
//    bodyChildren.forEach(function (el) {
//      if (el === getContainer() || contains(el, getContainer())) {
//        return;
//      }
//
//      if (el.hasAttribute('aria-hidden')) {
//        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
//      }
//
//      el.setAttribute('aria-hidden', 'true');
//    });
//  };
//  var unsetAriaHidden = function unsetAriaHidden() {
//    var bodyChildren = toArray(document.body.children);
//    bodyChildren.forEach(function (el) {
//      if (el.hasAttribute('data-previous-aria-hidden')) {
//        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
//        el.removeAttribute('data-previous-aria-hidden');
//      } else {
//        el.removeAttribute('aria-hidden');
//      }
//    });
//  };
//
//  /**
//   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
//   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
//   * This is the approach that Babel will probably take to implement private methods/fields
//   *   https://github.com/tc39/proposal-private-methods
//   *   https://github.com/babel/babel/pull/7555
//   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
//   *   then we can use that language feature.
//   */
//  var privateMethods = {
//    swalPromiseResolve: new WeakMap()
//  };
//
//  /*
//   * Instance method to close sweetAlert
//   */
//
//  function removePopupAndResetState(instance, container, isToast$$1, onAfterClose) {
//    if (isToast$$1) {
//      triggerOnAfterCloseAndDispose(instance, onAfterClose);
//    } else {
//      restoreActiveElement().then(function () {
//        return triggerOnAfterCloseAndDispose(instance, onAfterClose);
//      });
//      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
//        capture: globalState.keydownListenerCapture
//      });
//      globalState.keydownHandlerAdded = false;
//    }
//
//    if (container.parentNode && !document.body.getAttribute('data-swal2-queue-step')) {
//      container.parentNode.removeChild(container);
//    }
//
//    if (isModal()) {
//      undoScrollbar();
//      undoIOSfix();
//      undoIEfix();
//      unsetAriaHidden();
//    }
//
//    removeBodyClasses();
//  }
//
//  function removeBodyClasses() {
//    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['toast-column']]);
//  }
//
//  function close(resolveValue) {
//    var popup = getPopup();
//
//    if (!popup) {
//      return;
//    }
//
//    resolveValue = prepareResolveValue(resolveValue);
//    var innerParams = privateProps.innerParams.get(this);
//
//    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
//      return;
//    }
//
//    var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
//    removeClass(popup, innerParams.showClass.popup);
//    addClass(popup, innerParams.hideClass.popup);
//    var backdrop = getContainer();
//    removeClass(backdrop, innerParams.showClass.backdrop);
//    addClass(backdrop, innerParams.hideClass.backdrop);
//    handlePopupAnimation(this, popup, innerParams); // Resolve Swal promise
//
//    swalPromiseResolve(resolveValue);
//  }
//
//  var prepareResolveValue = function prepareResolveValue(resolveValue) {
//    // When user calls Swal.close()
//    if (typeof resolveValue === 'undefined') {
//      return {
//        isConfirmed: false,
//        isDenied: false,
//        isDismissed: true
//      };
//    }
//
//    return _extends({
//      isConfirmed: false,
//      isDenied: false,
//      isDismissed: false
//    }, resolveValue);
//  };
//
//  var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
//    var container = getContainer(); // If animation is supported, animate
//
//    var animationIsSupported = animationEndEvent && hasCssAnimation(popup);
//    var onClose = innerParams.onClose,
//        onAfterClose = innerParams.onAfterClose;
//
//    if (onClose !== null && typeof onClose === 'function') {
//      onClose(popup);
//    }
//
//    if (animationIsSupported) {
//      animatePopup(instance, popup, container, onAfterClose);
//    } else {
//      // Otherwise, remove immediately
//      removePopupAndResetState(instance, container, isToast(), onAfterClose);
//    }
//  };
//
//  var animatePopup = function animatePopup(instance, popup, container, onAfterClose) {
//    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, isToast(), onAfterClose);
//    popup.addEventListener(animationEndEvent, function (e) {
//      if (e.target === popup) {
//        globalState.swalCloseEventFinishedCallback();
//        delete globalState.swalCloseEventFinishedCallback;
//      }
//    });
//  };
//
//  var triggerOnAfterCloseAndDispose = function triggerOnAfterCloseAndDispose(instance, onAfterClose) {
//    setTimeout(function () {
//      if (typeof onAfterClose === 'function') {
//        onAfterClose();
//      }
//
//      instance._destroy();
//    });
//  };
//
//  function setButtonsDisabled(instance, buttons, disabled) {
//    var domCache = privateProps.domCache.get(instance);
//    buttons.forEach(function (button) {
//      domCache[button].disabled = disabled;
//    });
//  }
//
//  function setInputDisabled(input, disabled) {
//    if (!input) {
//      return false;
//    }
//
//    if (input.type === 'radio') {
//      var radiosContainer = input.parentNode.parentNode;
//      var radios = radiosContainer.querySelectorAll('input');
//
//      for (var i = 0; i < radios.length; i++) {
//        radios[i].disabled = disabled;
//      }
//    } else {
//      input.disabled = disabled;
//    }
//  }
//
//  function enableButtons() {
//    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
//  }
//  function disableButtons() {
//    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
//  }
//  function enableInput() {
//    return setInputDisabled(this.getInput(), false);
//  }
//  function disableInput() {
//    return setInputDisabled(this.getInput(), true);
//  }
//
//  function showValidationMessage(error) {
//    var domCache = privateProps.domCache.get(this);
//    setInnerHtml(domCache.validationMessage, error);
//    var popupComputedStyle = window.getComputedStyle(domCache.popup);
//    domCache.validationMessage.style.marginLeft = "-".concat(popupComputedStyle.getPropertyValue('padding-left'));
//    domCache.validationMessage.style.marginRight = "-".concat(popupComputedStyle.getPropertyValue('padding-right'));
//    show(domCache.validationMessage);
//    var input = this.getInput();
//
//    if (input) {
//      input.setAttribute('aria-invalid', true);
//      input.setAttribute('aria-describedBy', swalClasses['validation-message']);
//      focusInput(input);
//      addClass(input, swalClasses.inputerror);
//    }
//  } // Hide block with validation message
//
//  function resetValidationMessage$1() {
//    var domCache = privateProps.domCache.get(this);
//
//    if (domCache.validationMessage) {
//      hide(domCache.validationMessage);
//    }
//
//    var input = this.getInput();
//
//    if (input) {
//      input.removeAttribute('aria-invalid');
//      input.removeAttribute('aria-describedBy');
//      removeClass(input, swalClasses.inputerror);
//    }
//  }
//
//  function getProgressSteps$1() {
//    var domCache = privateProps.domCache.get(this);
//    return domCache.progressSteps;
//  }
//
//  var Timer = /*#__PURE__*/function () {
//    function Timer(callback, delay) {
//      _classCallCheck(this, Timer);
//
//      this.callback = callback;
//      this.remaining = delay;
//      this.running = false;
//      this.start();
//    }
//
//    _createClass(Timer, [{
//      key: "start",
//      value: function start() {
//        if (!this.running) {
//          this.running = true;
//          this.started = new Date();
//          this.id = setTimeout(this.callback, this.remaining);
//        }
//
//        return this.remaining;
//      }
//    }, {
//      key: "stop",
//      value: function stop() {
//        if (this.running) {
//          this.running = false;
//          clearTimeout(this.id);
//          this.remaining -= new Date() - this.started;
//        }
//
//        return this.remaining;
//      }
//    }, {
//      key: "increase",
//      value: function increase(n) {
//        var running = this.running;
//
//        if (running) {
//          this.stop();
//        }
//
//        this.remaining += n;
//
//        if (running) {
//          this.start();
//        }
//
//        return this.remaining;
//      }
//    }, {
//      key: "getTimerLeft",
//      value: function getTimerLeft() {
//        if (this.running) {
//          this.stop();
//          this.start();
//        }
//
//        return this.remaining;
//      }
//    }, {
//      key: "isRunning",
//      value: function isRunning() {
//        return this.running;
//      }
//    }]);
//
//    return Timer;
//  }();
//
//  var defaultInputValidators = {
//    email: function email(string, validationMessage) {
//      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
//    },
//    url: function url(string, validationMessage) {
//      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
//      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
//    }
//  };
//
//  function setDefaultInputValidators(params) {
//    // Use default `inputValidator` for supported input types if not provided
//    if (!params.inputValidator) {
//      Object.keys(defaultInputValidators).forEach(function (key) {
//        if (params.input === key) {
//          params.inputValidator = defaultInputValidators[key];
//        }
//      });
//    }
//  }
//
//  function validateCustomTargetElement(params) {
//    // Determine if the custom target element is valid
//    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
//      warn('Target parameter is not valid, defaulting to "body"');
//      params.target = 'body';
//    }
//  }
//  /**
//   * Set type, text and actions on popup
//   *
//   * @param params
//   * @returns {boolean}
//   */
//
//
//  function setParameters(params) {
//    setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm
//
//    if (params.showLoaderOnConfirm && !params.preConfirm) {
//      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
//    } // params.animation will be actually used in renderPopup.js
//    // but in case when params.animation is a function, we need to call that function
//    // before popup (re)initialization, so it'll be possible to check Swal.isVisible()
//    // inside the params.animation function
//
//
//    params.animation = callIfFunction(params.animation);
//    validateCustomTargetElement(params); // Replace newlines with <br> in title
//
//    if (typeof params.title === 'string') {
//      params.title = params.title.split('\n').join('<br />');
//    }
//
//    init(params);
//  }
//
//  /**
//   * Open popup, add necessary classes and styles, fix scrollbar
//   *
//   * @param {Array} params
//   */
//
//  var openPopup = function openPopup(params) {
//    var container = getContainer();
//    var popup = getPopup();
//
//    if (typeof params.onBeforeOpen === 'function') {
//      params.onBeforeOpen(popup);
//    }
//
//    var bodyStyles = window.getComputedStyle(document.body);
//    var initialBodyOverflow = bodyStyles.overflowY;
//    addClasses$1(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'
//
//    setScrollingVisibility(container, popup);
//
//    if (isModal()) {
//      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
//      setAriaHidden();
//    }
//
//    if (!isToast() && !globalState.previousActiveElement) {
//      globalState.previousActiveElement = document.activeElement;
//    }
//
//    if (typeof params.onOpen === 'function') {
//      setTimeout(function () {
//        return params.onOpen(popup);
//      });
//    }
//
//    removeClass(container, swalClasses['no-transition']);
//  };
//
//  function swalOpenAnimationFinished(event) {
//    var popup = getPopup();
//
//    if (event.target !== popup) {
//      return;
//    }
//
//    var container = getContainer();
//    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
//    container.style.overflowY = 'auto';
//  }
//
//  var setScrollingVisibility = function setScrollingVisibility(container, popup) {
//    if (animationEndEvent && hasCssAnimation(popup)) {
//      container.style.overflowY = 'hidden';
//      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
//    } else {
//      container.style.overflowY = 'auto';
//    }
//  };
//
//  var fixScrollContainer = function fixScrollContainer(container, scrollbarPadding, initialBodyOverflow) {
//    iOSfix();
//    IEfix();
//
//    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
//      fixScrollbar();
//    } // sweetalert2/issues/1247
//
//
//    setTimeout(function () {
//      container.scrollTop = 0;
//    });
//  };
//
//  var addClasses$1 = function addClasses(container, popup, params) {
//    addClass(container, params.showClass.backdrop);
//    show(popup); // Animate popup right after showing it
//
//    addClass(popup, params.showClass.popup);
//    addClass([document.documentElement, document.body], swalClasses.shown);
//
//    if (params.heightAuto && params.backdrop && !params.toast) {
//      addClass([document.documentElement, document.body], swalClasses['height-auto']);
//    }
//  };
//
//  var handleInputOptionsAndValue = function handleInputOptionsAndValue(instance, params) {
//    if (params.input === 'select' || params.input === 'radio') {
//      handleInputOptions(instance, params);
//    } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(params.input) !== -1 && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
//      handleInputValue(instance, params);
//    }
//  };
//  var getInputValue = function getInputValue(instance, innerParams) {
//    var input = instance.getInput();
//
//    if (!input) {
//      return null;
//    }
//
//    switch (innerParams.input) {
//      case 'checkbox':
//        return getCheckboxValue(input);
//
//      case 'radio':
//        return getRadioValue(input);
//
//      case 'file':
//        return getFileValue(input);
//
//      default:
//        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
//    }
//  };
//
//  var getCheckboxValue = function getCheckboxValue(input) {
//    return input.checked ? 1 : 0;
//  };
//
//  var getRadioValue = function getRadioValue(input) {
//    return input.checked ? input.value : null;
//  };
//
//  var getFileValue = function getFileValue(input) {
//    return input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
//  };
//
//  var handleInputOptions = function handleInputOptions(instance, params) {
//    var content = getContent();
//
//    var processInputOptions = function processInputOptions(inputOptions) {
//      return populateInputOptions[params.input](content, formatInputOptions(inputOptions), params);
//    };
//
//    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
//      showLoading();
//      asPromise(params.inputOptions).then(function (inputOptions) {
//        instance.hideLoading();
//        processInputOptions(inputOptions);
//      });
//    } else if (_typeof(params.inputOptions) === 'object') {
//      processInputOptions(params.inputOptions);
//    } else {
//      error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
//    }
//  };
//
//  var handleInputValue = function handleInputValue(instance, params) {
//    var input = instance.getInput();
//    hide(input);
//    asPromise(params.inputValue).then(function (inputValue) {
//      input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : "".concat(inputValue);
//      show(input);
//      input.focus();
//      instance.hideLoading();
//    })["catch"](function (err) {
//      error("Error in inputValue promise: ".concat(err));
//      input.value = '';
//      show(input);
//      input.focus();
//      instance.hideLoading();
//    });
//  };
//
//  var populateInputOptions = {
//    select: function select(content, inputOptions, params) {
//      var select = getChildByClass(content, swalClasses.select);
//
//      var renderOption = function renderOption(parent, optionLabel, optionValue) {
//        var option = document.createElement('option');
//        option.value = optionValue;
//        setInnerHtml(option, optionLabel);
//
//        if (params.inputValue.toString() === optionValue.toString()) {
//          option.selected = true;
//        }
//
//        parent.appendChild(option);
//      };
//
//      inputOptions.forEach(function (inputOption) {
//        var optionValue = inputOption[0];
//        var optionLabel = inputOption[1]; // <optgroup> spec:
//        // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
//        // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
//        // check whether this is a <optgroup>
//
//        if (Array.isArray(optionLabel)) {
//          // if it is an array, then it is an <optgroup>
//          var optgroup = document.createElement('optgroup');
//          optgroup.label = optionValue;
//          optgroup.disabled = false; // not configurable for now
//
//          select.appendChild(optgroup);
//          optionLabel.forEach(function (o) {
//            return renderOption(optgroup, o[1], o[0]);
//          });
//        } else {
//          // case of <option>
//          renderOption(select, optionLabel, optionValue);
//        }
//      });
//      select.focus();
//    },
//    radio: function radio(content, inputOptions, params) {
//      var radio = getChildByClass(content, swalClasses.radio);
//      inputOptions.forEach(function (inputOption) {
//        var radioValue = inputOption[0];
//        var radioLabel = inputOption[1];
//        var radioInput = document.createElement('input');
//        var radioLabelElement = document.createElement('label');
//        radioInput.type = 'radio';
//        radioInput.name = swalClasses.radio;
//        radioInput.value = radioValue;
//
//        if (params.inputValue.toString() === radioValue.toString()) {
//          radioInput.checked = true;
//        }
//
//        var label = document.createElement('span');
//        setInnerHtml(label, radioLabel);
//        label.className = swalClasses.label;
//        radioLabelElement.appendChild(radioInput);
//        radioLabelElement.appendChild(label);
//        radio.appendChild(radioLabelElement);
//      });
//      var radios = radio.querySelectorAll('input');
//
//      if (radios.length) {
//        radios[0].focus();
//      }
//    }
//  };
//  /**
//   * Converts `inputOptions` into an array of `[value, label]`s
//   * @param inputOptions
//   */
//
//  var formatInputOptions = function formatInputOptions(inputOptions) {
//    var result = [];
//
//    if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
//      inputOptions.forEach(function (value, key) {
//        var valueFormatted = value;
//
//        if (_typeof(valueFormatted) === 'object') {
//          // case of <optgroup>
//          valueFormatted = formatInputOptions(valueFormatted);
//        }
//
//        result.push([key, valueFormatted]);
//      });
//    } else {
//      Object.keys(inputOptions).forEach(function (key) {
//        var valueFormatted = inputOptions[key];
//
//        if (_typeof(valueFormatted) === 'object') {
//          // case of <optgroup>
//          valueFormatted = formatInputOptions(valueFormatted);
//        }
//
//        result.push([key, valueFormatted]);
//      });
//    }
//
//    return result;
//  };
//
//  var handleConfirmButtonClick = function handleConfirmButtonClick(instance, innerParams) {
//    instance.disableButtons();
//
//    if (innerParams.input) {
//      handleConfirmWithInput(instance, innerParams);
//    } else {
//      confirm(instance, innerParams, true);
//    }
//  };
//  var handleDenyButtonClick = function handleDenyButtonClick(instance) {
//    instance.disableButtons(); // here we could add preDeny in future, if needed
//
//    deny(instance);
//  };
//  var handleCancelButtonClick = function handleCancelButtonClick(instance, dismissWith) {
//    instance.disableButtons();
//    dismissWith(DismissReason.cancel);
//  };
//
//  var handleConfirmWithInput = function handleConfirmWithInput(instance, innerParams) {
//    var inputValue = getInputValue(instance, innerParams);
//
//    if (innerParams.inputValidator) {
//      instance.disableInput();
//      var validationPromise = Promise.resolve().then(function () {
//        return asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage));
//      });
//      validationPromise.then(function (validationMessage) {
//        instance.enableButtons();
//        instance.enableInput();
//
//        if (validationMessage) {
//          instance.showValidationMessage(validationMessage);
//        } else {
//          confirm(instance, innerParams, inputValue);
//        }
//      });
//    } else if (!instance.getInput().checkValidity()) {
//      instance.enableButtons();
//      instance.showValidationMessage(innerParams.validationMessage);
//    } else {
//      confirm(instance, innerParams, inputValue);
//    }
//  };
//
//  var deny = function deny(instance) {
//    instance.closePopup({
//      isDenied: true,
//      value: false
//    });
//  };
//
//  var succeedWith = function succeedWith(instance, value) {
//    instance.closePopup({
//      isConfirmed: true,
//      value: value
//    });
//  };
//
//  var confirm = function confirm(instance, innerParams, value) {
//    if (innerParams.showLoaderOnConfirm) {
//      showLoading(); // TODO: make showLoading an *instance* method
//    }
//
//    if (innerParams.preConfirm) {
//      instance.resetValidationMessage();
//      var preConfirmPromise = Promise.resolve().then(function () {
//        return asPromise(innerParams.preConfirm(value, innerParams.validationMessage));
//      });
//      preConfirmPromise.then(function (preConfirmValue) {
//        if (isVisible(getValidationMessage()) || preConfirmValue === false) {
//          instance.hideLoading();
//        } else {
//          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
//        }
//      });
//    } else {
//      succeedWith(instance, value);
//    }
//  };
//
//  var addKeydownHandler = function addKeydownHandler(instance, globalState, innerParams, dismissWith) {
//    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
//      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
//        capture: globalState.keydownListenerCapture
//      });
//      globalState.keydownHandlerAdded = false;
//    }
//
//    if (!innerParams.toast) {
//      globalState.keydownHandler = function (e) {
//        return keydownHandler(instance, e, dismissWith);
//      };
//
//      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
//      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
//      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
//        capture: globalState.keydownListenerCapture
//      });
//      globalState.keydownHandlerAdded = true;
//    }
//  }; // Focus handling
//
//  var setFocus = function setFocus(innerParams, index, increment) {
//    var focusableElements = getFocusableElements(); // search for visible elements and select the next possible match
//
//    for (var i = 0; i < focusableElements.length; i++) {
//      index = index + increment; // rollover to first item
//
//      if (index === focusableElements.length) {
//        index = 0; // go to last item
//      } else if (index === -1) {
//        index = focusableElements.length - 1;
//      }
//
//      return focusableElements[index].focus();
//    } // no visible focusable elements, focus the popup
//
//
//    getPopup().focus();
//  };
//  var arrowKeysNextButton = ['ArrowRight', 'ArrowDown', 'Right', 'Down' // IE11
//  ];
//  var arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp', 'Left', 'Up' // IE11
//  ];
//  var escKeys = ['Escape', 'Esc' // IE11
//  ];
//
//  var keydownHandler = function keydownHandler(instance, e, dismissWith) {
//    var innerParams = privateProps.innerParams.get(instance);
//
//    if (innerParams.stopKeydownPropagation) {
//      e.stopPropagation();
//    } // ENTER
//
//
//    if (e.key === 'Enter') {
//      handleEnter(instance, e, innerParams); // TAB
//    } else if (e.key === 'Tab') {
//      handleTab(e, innerParams); // ARROWS - switch focus between buttons
//    } else if ([].concat(arrowKeysNextButton, arrowKeysPreviousButton).indexOf(e.key) !== -1) {
//      handleArrows(e.key); // ESC
//    } else if (escKeys.indexOf(e.key) !== -1) {
//      handleEsc(e, innerParams, dismissWith);
//    }
//  };
//
//  var handleEnter = function handleEnter(instance, e, innerParams) {
//    // #720 #721
//    if (e.isComposing) {
//      return;
//    }
//
//    if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
//      if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
//        return; // do not submit
//      }
//
//      clickConfirm();
//      e.preventDefault();
//    }
//  };
//
//  var handleTab = function handleTab(e, innerParams) {
//    var targetElement = e.target;
//    var focusableElements = getFocusableElements();
//    var btnIndex = -1;
//
//    for (var i = 0; i < focusableElements.length; i++) {
//      if (targetElement === focusableElements[i]) {
//        btnIndex = i;
//        break;
//      }
//    }
//
//    if (!e.shiftKey) {
//      // Cycle to the next button
//      setFocus(innerParams, btnIndex, 1);
//    } else {
//      // Cycle to the prev button
//      setFocus(innerParams, btnIndex, -1);
//    }
//
//    e.stopPropagation();
//    e.preventDefault();
//  };
//
//  var handleArrows = function handleArrows(key) {
//    var confirmButton = getConfirmButton();
//    var denyButton = getDenyButton();
//    var cancelButton = getCancelButton();
//
//    if (!([confirmButton, denyButton, cancelButton].indexOf(document.activeElement) !== -1)) {
//      return;
//    }
//
//    var sibling = arrowKeysNextButton.indexOf(key) !== -1 ? 'nextElementSibling' : 'previousElementSibling';
//    var buttonToFocus = document.activeElement[sibling];
//
//    if (buttonToFocus) {
//      buttonToFocus.focus();
//    }
//  };
//
//  var handleEsc = function handleEsc(e, innerParams, dismissWith) {
//    if (callIfFunction(innerParams.allowEscapeKey)) {
//      e.preventDefault();
//      dismissWith(DismissReason.esc);
//    }
//  };
//
//  var handlePopupClick = function handlePopupClick(instance, domCache, dismissWith) {
//    var innerParams = privateProps.innerParams.get(instance);
//
//    if (innerParams.toast) {
//      handleToastClick(instance, domCache, dismissWith);
//    } else {
//      // Ignore click events that had mousedown on the popup but mouseup on the container
//      // This can happen when the user drags a slider
//      handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup
//
//      handleContainerMousedown(domCache);
//      handleModalClick(instance, domCache, dismissWith);
//    }
//  };
//
//  var handleToastClick = function handleToastClick(instance, domCache, dismissWith) {
//    // Closing toast by internal click
//    domCache.popup.onclick = function () {
//      var innerParams = privateProps.innerParams.get(instance);
//
//      if (innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.input) {
//        return;
//      }
//
//      dismissWith(DismissReason.close);
//    };
//  };
//
//  var ignoreOutsideClick = false;
//
//  var handleModalMousedown = function handleModalMousedown(domCache) {
//    domCache.popup.onmousedown = function () {
//      domCache.container.onmouseup = function (e) {
//        domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
//        // have any other direct children aside of the popup
//
//        if (e.target === domCache.container) {
//          ignoreOutsideClick = true;
//        }
//      };
//    };
//  };
//
//  var handleContainerMousedown = function handleContainerMousedown(domCache) {
//    domCache.container.onmousedown = function () {
//      domCache.popup.onmouseup = function (e) {
//        domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup
//
//        if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
//          ignoreOutsideClick = true;
//        }
//      };
//    };
//  };
//
//  var handleModalClick = function handleModalClick(instance, domCache, dismissWith) {
//    domCache.container.onclick = function (e) {
//      var innerParams = privateProps.innerParams.get(instance);
//
//      if (ignoreOutsideClick) {
//        ignoreOutsideClick = false;
//        return;
//      }
//
//      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
//        dismissWith(DismissReason.backdrop);
//      }
//    };
//  };
//
//  function _main(userParams) {
//    showWarningsForParams(userParams);
//
//    if (globalState.currentInstance) {
//      globalState.currentInstance._destroy();
//    }
//
//    globalState.currentInstance = this;
//    var innerParams = prepareParams(userParams);
//    setParameters(innerParams);
//    Object.freeze(innerParams); // clear the previous timer
//
//    if (globalState.timeout) {
//      globalState.timeout.stop();
//      delete globalState.timeout;
//    } // clear the restore focus timeout
//
//
//    clearTimeout(globalState.restoreFocusTimeout);
//    var domCache = populateDomCache(this);
//    render(this, innerParams);
//    privateProps.innerParams.set(this, innerParams);
//    return swalPromise(this, domCache, innerParams);
//  }
//
//  var prepareParams = function prepareParams(userParams) {
//    var showClass = _extends({}, defaultParams.showClass, userParams.showClass);
//
//    var hideClass = _extends({}, defaultParams.hideClass, userParams.hideClass);
//
//    var params = _extends({}, defaultParams, userParams);
//
//    params.showClass = showClass;
//    params.hideClass = hideClass; // @deprecated
//
//    if (userParams.animation === false) {
//      params.showClass = {
//        popup: 'swal2-noanimation',
//        backdrop: 'swal2-noanimation'
//      };
//      params.hideClass = {};
//    }
//
//    return params;
//  };
//
//  var swalPromise = function swalPromise(instance, domCache, innerParams) {
//    return new Promise(function (resolve) {
//      // functions to handle all closings/dismissals
//      var dismissWith = function dismissWith(dismiss) {
//        instance.closePopup({
//          isDismissed: true,
//          dismiss: dismiss
//        });
//      };
//
//      privateMethods.swalPromiseResolve.set(instance, resolve);
//
//      domCache.confirmButton.onclick = function () {
//        return handleConfirmButtonClick(instance, innerParams);
//      };
//
//      domCache.denyButton.onclick = function () {
//        return handleDenyButtonClick(instance);
//      };
//
//      domCache.cancelButton.onclick = function () {
//        return handleCancelButtonClick(instance, dismissWith);
//      };
//
//      domCache.closeButton.onclick = function () {
//        return dismissWith(DismissReason.close);
//      };
//
//      handlePopupClick(instance, domCache, dismissWith);
//      addKeydownHandler(instance, globalState, innerParams, dismissWith);
//
//      if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
//        addClass(document.body, swalClasses['toast-column']);
//      } else {
//        removeClass(document.body, swalClasses['toast-column']);
//      }
//
//      handleInputOptionsAndValue(instance, innerParams);
//      openPopup(innerParams);
//      setupTimer(globalState, innerParams, dismissWith);
//      initFocus(domCache, innerParams); // Scroll container to top on open (#1247, #1946)
//
//      setTimeout(function () {
//        domCache.container.scrollTop = 0;
//      });
//    });
//  };
//
//  var populateDomCache = function populateDomCache(instance) {
//    var domCache = {
//      popup: getPopup(),
//      container: getContainer(),
//      content: getContent(),
//      actions: getActions(),
//      confirmButton: getConfirmButton(),
//      denyButton: getDenyButton(),
//      cancelButton: getCancelButton(),
//      loader: getLoader(),
//      closeButton: getCloseButton(),
//      validationMessage: getValidationMessage(),
//      progressSteps: getProgressSteps()
//    };
//    privateProps.domCache.set(instance, domCache);
//    return domCache;
//  };
//
//  var setupTimer = function setupTimer(globalState$$1, innerParams, dismissWith) {
//    var timerProgressBar = getTimerProgressBar();
//    hide(timerProgressBar);
//
//    if (innerParams.timer) {
//      globalState$$1.timeout = new Timer(function () {
//        dismissWith('timer');
//        delete globalState$$1.timeout;
//      }, innerParams.timer);
//
//      if (innerParams.timerProgressBar) {
//        show(timerProgressBar);
//        setTimeout(function () {
//          if (globalState$$1.timeout.running) {
//            // timer can be already stopped at this point
//            animateTimerProgressBar(innerParams.timer);
//          }
//        });
//      }
//    }
//  };
//
//  var initFocus = function initFocus(domCache, innerParams) {
//    if (innerParams.toast) {
//      return;
//    }
//
//    if (!callIfFunction(innerParams.allowEnterKey)) {
//      return blurActiveElement();
//    }
//
//    if (!focusButton(domCache, innerParams)) {
//      setFocus(innerParams, -1, 1);
//    }
//  };
//
//  var focusButton = function focusButton(domCache, innerParams) {
//    if (innerParams.focusDeny && isVisible(domCache.denyButton)) {
//      domCache.denyButton.focus();
//      return true;
//    }
//
//    if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
//      domCache.cancelButton.focus();
//      return true;
//    }
//
//    if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
//      domCache.confirmButton.focus();
//      return true;
//    }
//
//    return false;
//  };
//
//  var blurActiveElement = function blurActiveElement() {
//    if (document.activeElement && typeof document.activeElement.blur === 'function') {
//      document.activeElement.blur();
//    }
//  };
//
//  /**
//   * Updates popup parameters.
//   */
//
//  function update(params) {
//    var popup = getPopup();
//    var innerParams = privateProps.innerParams.get(this);
//
//    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
//      return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
//    }
//
//    var validUpdatableParams = {}; // assign valid params from `params` to `defaults`
//
//    Object.keys(params).forEach(function (param) {
//      if (Swal.isUpdatableParameter(param)) {
//        validUpdatableParams[param] = params[param];
//      } else {
//        warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js"));
//      }
//    });
//
//    var updatedParams = _extends({}, innerParams, validUpdatableParams);
//
//    render(this, updatedParams);
//    privateProps.innerParams.set(this, updatedParams);
//    Object.defineProperties(this, {
//      params: {
//        value: _extends({}, this.params, params),
//        writable: false,
//        enumerable: true
//      }
//    });
//  }
//
//  function _destroy() {
//    var domCache = privateProps.domCache.get(this);
//    var innerParams = privateProps.innerParams.get(this);
//
//    if (!innerParams) {
//      return; // This instance has already been destroyed
//    } // Check if there is another Swal closing
//
//
//    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
//      globalState.swalCloseEventFinishedCallback();
//      delete globalState.swalCloseEventFinishedCallback;
//    } // Check if there is a swal disposal defer timer
//
//
//    if (globalState.deferDisposalTimer) {
//      clearTimeout(globalState.deferDisposalTimer);
//      delete globalState.deferDisposalTimer;
//    }
//
//    if (typeof innerParams.onDestroy === 'function') {
//      innerParams.onDestroy();
//    }
//
//    disposeSwal(this);
//  }
//
//  var disposeSwal = function disposeSwal(instance) {
//    // Unset this.params so GC will dispose it (#1569)
//    delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)
//
//    delete globalState.keydownHandler;
//    delete globalState.keydownTarget; // Unset WeakMaps so GC will be able to dispose them (#1569)
//
//    unsetWeakMaps(privateProps);
//    unsetWeakMaps(privateMethods);
//  };
//
//  var unsetWeakMaps = function unsetWeakMaps(obj) {
//    for (var i in obj) {
//      obj[i] = new WeakMap();
//    }
//  };
//
//
//
//  var instanceMethods = /*#__PURE__*/Object.freeze({
//    hideLoading: hideLoading,
//    disableLoading: hideLoading,
//    getInput: getInput$1,
//    close: close,
//    closePopup: close,
//    closeModal: close,
//    closeToast: close,
//    enableButtons: enableButtons,
//    disableButtons: disableButtons,
//    enableInput: enableInput,
//    disableInput: disableInput,
//    showValidationMessage: showValidationMessage,
//    resetValidationMessage: resetValidationMessage$1,
//    getProgressSteps: getProgressSteps$1,
//    _main: _main,
//    update: update,
//    _destroy: _destroy
//  });
//
//  var currentInstance;
//
//  var SweetAlert = /*#__PURE__*/function () {
//    function SweetAlert() {
//      _classCallCheck(this, SweetAlert);
//
//      // Prevent run in Node env
//      if (typeof window === 'undefined') {
//        return;
//      } // Check for the existence of Promise
//
//
//      if (typeof Promise === 'undefined') {
//        error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
//      }
//
//      currentInstance = this;
//
//      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
//        args[_key] = arguments[_key];
//      }
//
//      var outerParams = Object.freeze(this.constructor.argsToParams(args));
//      Object.defineProperties(this, {
//        params: {
//          value: outerParams,
//          writable: false,
//          enumerable: true,
//          configurable: true
//        }
//      });
//
//      var promise = this._main(this.params);
//
//      privateProps.promise.set(this, promise);
//    } // `catch` cannot be the name of a module export, so we define our thenable methods here instead
//
//
//    _createClass(SweetAlert, [{
//      key: "then",
//      value: function then(onFulfilled) {
//        var promise = privateProps.promise.get(this);
//        return promise.then(onFulfilled);
//      }
//    }, {
//      key: "finally",
//      value: function _finally(onFinally) {
//        var promise = privateProps.promise.get(this);
//        return promise["finally"](onFinally);
//      }
//    }]);
//
//    return SweetAlert;
//  }(); // Assign instance methods from src/instanceMethods/*.js to prototype
//
//
//  _extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor
//
//
//  _extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility
//
//
//  Object.keys(instanceMethods).forEach(function (key) {
//    SweetAlert[key] = function () {
//      if (currentInstance) {
//        var _currentInstance;
//
//        return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
//      }
//    };
//  });
//  SweetAlert.DismissReason = DismissReason;
//  SweetAlert.version = '10.0.2';
//
//  var Swal = SweetAlert;
//  Swal["default"] = Swal;
//
//  return Swal;
//
//}));
//if (typeof this !== 'undefined' && this.Sweetalert2){  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}
//
//"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,".swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row;padding:0}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;padding:0;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em;padding:0}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-no-transition{transition:none!important}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center;padding:0 1.8em}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0;padding:0 1.6em}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#3085d6 transparent #3085d6 transparent}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dd6b55;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;height:.25em;overflow:hidden;border-bottom-right-radius:.3125em;border-bottom-left-radius:.3125em}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;align-items:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:0;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0 1.6em;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}");