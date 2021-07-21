var serviceWorkerOption = {
  "assets": [
    "/defaultVendors~main~2a42e354.bundle.js",
    "/defaultVendors~main~690b702c.bundle.js",
    "/main~29d6ecf2.bundle.js",
    "/favicon.ico",
    "/manifest.json",
    "/icons/icon-192x192.png",
    "/icons/icon-256x256.png",
    "/icons/icon-384x384.png",
    "/icons/icon-512x512.png",
    "/images/heros/hero-image_2.jpg",
    "/index.html"
  ]
};
        
        !function(r){var n={};function o(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=r,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=1)}([function(t,e,r){"use strict";var n={KEY:"12345",BASE_URL:"https://restaurant-api.dicoding.dev/",IMAGE_BASE_URL:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"small";return"".concat(n.BASE_URL,"images/").concat(e,"/").concat(t)},CACHE_NAME:"Gores-V3",DATABASE_NAME:"movie-catalogue-database",DATABASE_VERSION:1,OBJECT_STORE_NAME:"movies"},o=n;function u(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function i(c){return function(){var t=this,a=arguments;return new Promise(function(e,r){var n=c.apply(t,a);function o(t){u(n,e,r,o,i,"next",t)}function i(t){u(n,e,r,o,i,"throw",t)}o(void 0)})}}var a={cachingAppShell:function(e){var r=this;return i(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._openCache();case 2:t.sent.addAll(e);case 4:case"end":return t.stop()}},t)}))()},deleteOldCache:function(){return i(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,caches.keys();case 2:t.sent.filter(function(t){return t!==o.CACHE_NAME}).map(function(t){return caches.delete(t)});case 4:case"end":return t.stop()}},t)}))()},revalidateCache:function(r){var n=this;return i(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,caches.match(r);case 2:if(e=t.sent)return n._fetchRequest(r),t.abrupt("return",e);t.next=6;break;case 6:return t.abrupt("return",n._fetchRequest(r));case 7:case"end":return t.stop()}},t)}))()},_openCache:function(){return i(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",caches.open(o.CACHE_NAME));case 1:case"end":return t.stop()}},t)}))()},_fetchRequest:function(r){var n=this;return i(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(r);case 2:if((e=t.sent)&&200===e.status){t.next=5;break}return t.abrupt("return",e);case 5:return t.next=7,n._addCache(r);case 7:return t.abrupt("return",e);case 8:case"end":return t.stop()}},t)}))()},_addCache:function(e){var r=this;return i(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._openCache();case 2:t.sent.add(e);case 4:case"end":return t.stop()}},t)}))()}};e.a=a},function(t,e,i){"use strict";i.r(e),function(t){i(3);var e=i(0);function r(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(r="Object"===r&&t.constructor?t.constructor.name:r)||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var o=t.serviceWorkerOption.assets;self.addEventListener("install",function(t){t.waitUntil(e.a.cachingAppShell([].concat(r(o),["./"])))}),self.addEventListener("activate",function(t){t.waitUntil(e.a.deleteOldCache())}),self.addEventListener("fetch",function(t){t.respondWith(e.a.revalidateCache(t.request))})}.call(this,i(2))},function(t,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"===("undefined"==typeof window?"undefined":r(window))&&(n=window)}t.exports=n},function(t,e,r){!function(e){function j(t){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e=function(a){"use strict";var u,t=Object.prototype,f=t.hasOwnProperty,e="function"==typeof Symbol?Symbol:{},n=e.iterator||"@@iterator",r=e.asyncIterator||"@@asyncIterator",o=e.toStringTag||"@@toStringTag";function i(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(t){i=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o,i,a,c,e=e&&e.prototype instanceof v?e:v,e=Object.create(e.prototype),n=new L(n||[]);return e._invoke=(o=t,i=r,a=n,c=l,function(t,e){if(c===p)throw new Error("Generator is already running");if(c===y){if("throw"===t)throw e;return O()}for(a.method=t,a.arg=e;;){var r=a.delegate;if(r){var n=function t(e,r){var n=e.iterator[r.method];if(n===u){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=u,t(e,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=s(n,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,d;n=n.arg;if(!n)return r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d;{if(!n.done)return n;r[e.resultName]=n.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=u)}r.delegate=null;return d}(r,a);if(n){if(n===d)continue;return n}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(c===l)throw c=y,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c=p;n=s(o,i,a);if("normal"===n.type){if(c=a.done?y:h,n.arg!==d)return{value:n.arg,done:a.done}}else"throw"===n.type&&(c=y,a.method="throw",a.arg=n.arg)}}),e}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}a.wrap=c;var l="suspendedStart",h="suspendedYield",p="executing",y="completed",d={};function v(){}function m(){}function g(){}var b={};b[n]=function(){return this};e=Object.getPrototypeOf,e=e&&e(e(A([])));e&&e!==t&&f.call(e,n)&&(b=e);var w=g.prototype=v.prototype=Object.create(b);function x(t){["next","throw","return"].forEach(function(e){i(t,e,function(t){return this._invoke(e,t)})})}function E(a,c){var e;this._invoke=function(r,n){function t(){return new c(function(t,e){!function e(t,r,n,o){t=s(a[t],a,r);if("throw"!==t.type){var i=t.arg;return(r=i.value)&&"object"===j(r)&&f.call(r,"__await")?c.resolve(r.__await).then(function(t){e("next",t,n,o)},function(t){e("throw",t,n,o)}):c.resolve(r).then(function(t){i.value=t,n(i)},function(t){return e("throw",t,n,o)})}o(t.arg)}(r,n,t,e)})}return e=e?e.then(t,t):t()}}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function A(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,t=function t(){for(;++r<e.length;)if(f.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=u,t.done=!0,t};return t.next=t}}return{next:O}}function O(){return{value:u,done:!0}}return((m.prototype=w.constructor=g).constructor=m).displayName=i(g,o,"GeneratorFunction"),a.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,i(t,o,"GeneratorFunction")),t.prototype=Object.create(w),t},a.awrap=function(t){return{__await:t}},x(E.prototype),E.prototype[r]=function(){return this},a.AsyncIterator=E,a.async=function(t,e,r,n,o){void 0===o&&(o=Promise);var i=new E(c(t,e,r,n),o);return a.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},x(w),i(w,o,"Generator"),w[n]=function(){return this},w.toString=function(){return"[object Generator]"},a.keys=function(r){var t,n=[];for(t in r)n.push(t);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},a.values=A,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=u,this.done=!1,this.delegate=null,this.method="next",this.arg=u,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&f.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=u)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return i.type="throw",i.arg=r,n.next=t,e&&(n.method="next",n.arg=u),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=f.call(o,"catchLoc"),c=f.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&f.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}var i=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc?null:o)?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n,o=r.completion;return"throw"===o.type&&(n=o.arg,S(r)),n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:A(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=u),d}},a}("object"===j(e)?e.exports:{});try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}.call(this,r(4)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}}]);