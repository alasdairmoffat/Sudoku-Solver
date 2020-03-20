(this["webpackJsonpsudoku-solver"]=this["webpackJsonpsudoku-solver"]||[]).push([[0],[,,,,,,function(e,n,t){e.exports=t(13)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(3),o=t.n(c),i=(t(11),t(12),t(5)),u=t(1),l=t(4);var s,f=[].concat(["1","2","3","4","5","6","7","8","9"]),b=(s=f,["A","B","C","D","E","F","G","H","I"].reduce((function(e,n){return e.concat(s.map((function(e){return n+e})))}),[])),d=function(){return"".concat('"use strict";function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(b,!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(b).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function _arrayWithoutHoles(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}}function sudoku(a){function b(a,b){return a.reduce(function(c,d){return c.concat(b.map(function(a){return d+a}))},[])}function c(a,b,c){var e=a[b].filter(function(a){return a!==c});return!!e.every(function(c){return d(a,b,c)})&&a}function d(a,b,e){if(!a[b].includes(e))return a;if(a[b]=a[b].filter(function(a){return a!==e}),0===a[b].length)return!1;if(1===a[b].length){var f=a[b][0];if(!r[b].every(function(b){return d(a,b,f)}))return!1}return!!q[b].every(function(b){var d=b.filter(function(b){return a[b].includes(e)});return 0!==d.length&&!!(1!==d.length||c(a,d[0],e))})&&a}function e(a){var b=Object.fromEntries(j.map(function(a){return[a,g]}));return!!Object.keys(a).every(function(d){return""===a[d]||c(b,d,a[d])})&&b}function f(d){if(!d)return!1;if(j.every(function(a){return 1===d[a].length}))return d;var e=j.filter(function(a){return 1<d[a].length}).sort(function(c,a){return d[c].length-d[a].length})[0];return d[e].map(function(a){return f(c(_objectSpread({},d),e,a))}).find(function(a){return!!a})||!1}var g=["1","2","3","4","5","6","7","8","9"],h=["A","B","C","D","E","F","G","H","I"],i=[].concat(g),j=b(h,i),k=i.map(function(a){return b(h,[a])}),l=h.map(function(a){return b([a],i)}),m=[h.slice(0,3),h.slice(3,6),h.slice(6)],n=[i.slice(0,3),i.slice(3,6),i.slice(6)],o=m.reduce(function(a,c){return a.concat(n.map(function(a){return b(c,a)}))},[]),p=[].concat(_toConsumableArray(k),_toConsumableArray(l),_toConsumableArray(o)),q=Object.fromEntries(j.map(function(a){return[a,p.filter(function(b){return b.includes(a)})]})),r=Object.fromEntries(j.map(function(a){var b=new Set(q[a].flat());return b.delete(a),[a,_toConsumableArray(b)]}));return function(a){return f(e(a))}(a)}',";\n  ").concat("var onmessage = (e) => {\n      postMessage(sudoku(e.data));\n    };")},m=function(e){var n=e.cancel;return a.a.createElement("div",{className:"overlay"},a.a.createElement("div",{className:"lds-grid"},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null)),a.a.createElement("button",{type:"button",className:"btn-cancel",onClick:n},"Cancel"))},v=function(e){var n=e.errorMessage,t=e.dismissError;return a.a.createElement("div",{className:"error-message"},n,a.a.createElement("button",{type:"button",className:"btn-close",onClick:t},a.a.createElement("div",{className:"cross"},a.a.createElement("div",null),a.a.createElement("div",null))))},p=function(){var e=Object.fromEntries(b.map((function(e){return[e,""]}))),n=Object(r.useState)(e),t=Object(u.a)(n,2),c=t[0],o=t[1],s=Object(r.useState)(!1),f=Object(u.a)(s,2),p=f[0],g=f[1],y=Object(r.useState)(null),h=Object(u.a)(y,2),E=h[0],j=h[1],w=Object(r.useState)(""),O=Object(u.a)(w,2),k=O[0],A=O[1],S=Object(l.useWebWorkerFromScript)(d()),C=Object(u.a)(S,2),_=C[0],N=C[1];Object(r.useEffect)((function(){j(_),g(!1)}),[_]);var P=function(){A("")};Object(r.useEffect)((function(){!1===E&&(A("No possible solution"),setTimeout(P,5e3))}),[E]);var W=function(e){var n=e.target,t=n.name,r=n.value;if(!(r.length>1)&&!(r.charCodeAt(0)<49||r.charCodeAt(0)>57)){var a=Object(i.a)({},c);a[t]=r,o(a)}},D=b.map((function(e){return a.a.createElement("td",{id:e,key:"cell".concat(e)},E?a.a.createElement("input",{readOnly:!0,value:E[e],className:c[e]?"bold":null}):a.a.createElement("input",{type:"number",name:e,value:c[e],onChange:W,autoComplete:"off"}))})),I=Array.from(new Array(9),(function(e,n){var t=D[9*n].props.id.slice(0,1);return a.a.createElement("tr",{id:t,key:"row-".concat(t)},D.slice(9*n,9*(n+1)))}));return a.a.createElement(a.a.Fragment,null,p?a.a.createElement(m,{cancel:function(){window.location.reload()}}):null,a.a.createElement("form",null,a.a.createElement("table",null,a.a.createElement("tbody",null,I)),E?a.a.createElement("button",{type:"button",className:"btn-reset",onClick:function(n){n.preventDefault(),o(e),j(null)}},"Reset"):a.a.createElement("button",{type:"submit",className:"btn-submit",onClick:function(e){e.preventDefault(),g(!0),N(c)}},"Solve"),k?a.a.createElement(v,{errorMessage:k,dismissError:P}):null))};var g=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(p,null))},y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(a.a.createElement(g,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Sudoku-Solver",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/Sudoku-Solver","/service-worker.js");y?(!function(e,n){fetch(e).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):h(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):h(n,e)}))}}()}],[[6,1,2]]]);
//# sourceMappingURL=main.c3799a65.chunk.js.map