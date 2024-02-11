"use strict";(self.blocksyJsonP=self.blocksyJsonP||[]).push([[68],{68:function(e,t,n){n.r(t),n.d(t,{getCacheFor:function(){return m},mount:function(){return h}});var r=n(601),i=n.n(r);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const u=function(e){return[...e.querySelectorAll("[data-items] > [data-id]")].filter((function(e){return-1===e.dataset.id.indexOf("menu")})).reduce((function(e,t){let n=window.getComputedStyle(t);return e+t.getBoundingClientRect().width+parseInt(n.getPropertyValue("margin-left"))+parseInt(n.getPropertyValue("margin-right"))}),0)},l=function(e){let t=window.getComputedStyle(e);return m(e.__id).itemsWidth.reduce((function(e,t){return e+t}),0)+(parseInt(t.getPropertyValue("margin-left"))+parseInt(t.getPropertyValue("margin-right")))},c=function(e){let t=function(e){let t=e.closest('[class*="ct-container"]'),n=t.getBoundingClientRect().width,r=e.closest("[data-column]").dataset.column,i="start"===r||"end"===r?"side":"middle"===r?"middle":"secondary",o=t.querySelector('[data-column="middle"]');if("side"===i&&!o){let r=t.querySelectorAll('[data-id*="menu"]');const i=[...r].reduce((function(e,t){return e+l(t)}),0),o=l(e);let a=n-u(t);return r.length>1&&(a*=100*o/i/100),a}return"middle"===i?n-2*Math.max(t.querySelector('[data-column="start"]')?u(t.querySelector('[data-column="start"]')):0,t.querySelector('[data-column="end"]')?u(t.querySelector('[data-column="end"]')):0):(n-(t.querySelector('[data-column="middle"]')?u(t.querySelector('[data-column="middle"]')):0))/2-u(e.closest("[data-column]"))}(e),n=e.closest('[class*="ct-container"]'),r=window.getComputedStyle(e);if(!(l(e)>t))return{fit:m(e.__id).children,notFit:[]};let i=n.querySelectorAll('[data-id*="menu"]');return m(e.__id).children.reduce((function(n,u,l){let{fit:c,notFit:s}=n;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},m(e.__id).itemsWidth.slice(0,l+1).reduce((function(e,t){return e+t}),0)<t-100/i.length-(parseInt(r.getPropertyValue("margin-left"))+parseInt(r.getPropertyValue("margin-right")))?{fit:[...c,u],notFit:s}:{notFit:[...s,u],fit:c})}),{fit:[],notFit:[]})};var s=n(130);let d={};const m=function(e){return d[e]},f=function(e){return Array.from(e.children).filter((function(e){return!e.matches("link")}))[0]},p=function(e){return Array.from(f(e).children).filter((function(e){return!e.classList.contains(".more-items-container")&&e.firstElementChild})).map((function(e,t){if(e.firstElementChild.matches("a")&&!e.querySelector("svg")){const t=e.firstElementChild;t.innerHTML=`<span>${t.innerHTML}</span>`;const n=window.getComputedStyle(t,null);let r=0,i=window.getComputedStyle(e.parentNode,null);"normal"!==i.gap&&(r=parseFloat(i.gap),e.parentNode.firstElementChild!==e&&e!==e.parentNode.lastElementChild||(r/=2));let o=t.firstElementChild.getBoundingClientRect().width+parseInt(n.getPropertyValue("padding-left"),10)+parseInt(n.getPropertyValue("padding-right"),10)+(t.querySelector(".ct-toggle-dropdown-desktop")?13:0)+r;return t.innerHTML=t.firstElementChild.innerHTML,o}return e.firstElementChild.getBoundingClientRect().width}))};new ResizeObserver((function(){[...document.querySelectorAll('header [data-device="desktop"] [data-id^="menu"][data-responsive]')].map((function(e){return h(e)}))})).observe(document.body);const h=function(e){if(!f(e))return;if(function(e){[...e.closest('[class*="ct-container"]').querySelectorAll('[data-id*="menu"]')].map((function(e){e.__id||(e.__id=Math.random()),d[e.__id]||f(e)&&(d[e.__id]={el:e,previousRenderedWidth:null,children:[...Array.from(f(e).children).filter((function(e){return!e.classList.contains("more-items-container")})),...f(e).querySelector(".more-items-container")?[...f(e).querySelector(".more-items-container .sub-menu").children]:[]],itemsWidth:p(e)},e.dataset.responsive="yes")}))}(e),d[e.__id].previousRenderedWidth&&d[e.__id].previousRenderedWidth===window.innerWidth)return;if(d[e.__id].previousRenderedWidth=window.innerWidth,"desktop"!==(0,s.C)())return;let{fit:t,notFit:n}=c(e);if(0===n.length)return e.querySelector(".more-items-container")&&(t.map((function(t){f(e).insertBefore(t,e.querySelector(".more-items-container")),Array.from(t.querySelectorAll(".menu-item-has-children, .page_item_has_children")).map((function(e){return e.classList.remove("animated-submenu-inline"),e.classList.add("animated-submenu-block"),e})).filter((function(e){return!!e.closest('[class*="ct-mega-menu"]')})).map((function(e){e.classList.remove("animated-submenu-block","animated-submenu-inline")}))})),e.querySelector(".more-items-container").remove()),g(),void i().trigger("ct:header:init-popper");document.querySelector('header [data-device="desktop"]')&&function(e,t){if(e.querySelector(".more-items-container"))return void t();const n=document.createElement("li");n.classList.add("menu-item-has-children"),n.classList.add("more-items-container"),n.classList.add("animated-submenu-block"),n.classList.add("menu-item"),n.role="none",n.insertAdjacentHTML("afterbegin",`<a href="#" class="ct-menu-link" role="menuitem">\n      ${ct_localizations.more_text}\n      <span class="ct-toggle-dropdown-desktop">\n        <svg class="ct-icon" width="8" height="8" viewBox="0 0 15 15">\n            <path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"></path>\n        </svg>\n      </span>\n    </a>\n    <button class="ct-toggle-dropdown-desktop-ghost" aria-expanded="false" aria-label="${ct_localizations.expand_submenu}" role="menuitem"></button>\n    <ul class="sub-menu" role="menu"></ul>`),f(e).appendChild(n),t&&t()}(e,(function(){n.map((function(t){e.querySelector(".more-items-container .sub-menu").appendChild(t),Array.from(t.querySelectorAll(".menu-item-has-children, .page_item_has_children")).map((function(e){e.classList.add("animated-submenu-inline"),e.classList.remove("animated-submenu-block")}))})),t.map((function(t){f(e).insertBefore(t,e.querySelector(".more-items-container")),Array.from(t.querySelectorAll(".menu-item-has-children, .page_item_has_children")).map((function(e){return e.classList.remove("animated-submenu-inline"),e.classList.add("animated-submenu-block"),e})).filter((function(e){return!!e.closest('[class*="ct-mega-menu"]')})).map((function(e){e.classList.remove("animated-submenu-block","animated-submenu-inline")}))})),g(),i().trigger("ct:header:init-popper")}))},g=function(){[...document.querySelectorAll('header [data-device="desktop"] [data-id*="menu"] > .menu')].map((function(e){[...e.children].filter((function(e){return e.querySelector(".sub-menu")})).filter((function(e){return function(e){return e.className.includes("animated-submenu")&&(!e.parentNode.classList.contains("menu")||-1===e.className.indexOf("ct-mega-menu")&&e.parentNode.classList.contains("menu"))}(e)})).map((function(e){return e.querySelector(".sub-menu")})).map((function(e){[...e.querySelectorAll("[data-submenu]")].map((function(e){e.removeAttribute("data-submenu")})),e._popper&&(e._popper.destroy(),e._popper=null)}))}))}}}]);