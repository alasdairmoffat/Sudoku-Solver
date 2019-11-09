const setUpWorker = () => {
  /*
  sudokuString is the output of transpiling sudoku-solver.js through babel
  using npm run transpile-solver
  */
  const sudokuString =    '"use strict";function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(b,!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(b).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function _arrayWithoutHoles(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}}function sudoku(a){function b(a,b){return a.reduce(function(c,d){return c.concat(b.map(function(a){return d+a}))},[])}function c(a,b,c){var e=a[b].filter(function(a){return a!==c});return!!e.every(function(c){return d(a,b,c)})&&a}function d(a,b,e){if(!a[b].includes(e))return a;if(a[b]=a[b].filter(function(a){return a!==e}),0===a[b].length)return!1;if(1===a[b].length){var f=a[b][0];if(!r[b].every(function(b){return d(a,b,f)}))return!1}return!!q[b].every(function(b){var d=b.filter(function(b){return a[b].includes(e)});return 0!==d.length&&!!(1!==d.length||c(a,d[0],e))})&&a}function e(a){var b=Object.fromEntries(j.map(function(a){return[a,g]}));return!!Object.keys(a).every(function(d){return""===a[d]||c(b,d,a[d])})&&b}function f(d){if(!d)return!1;if(j.every(function(a){return 1===d[a].length}))return d;var e=j.filter(function(a){return 1<d[a].length}).sort(function(c,a){return d[c].length-d[a].length})[0];return d[e].map(function(a){return f(c(_objectSpread({},d),e,a))}).find(function(a){return!!a})||!1}var g=["1","2","3","4","5","6","7","8","9"],h=["A","B","C","D","E","F","G","H","I"],i=[].concat(g),j=b(h,i),k=i.map(function(a){return b(h,[a])}),l=h.map(function(a){return b([a],i)}),m=[h.slice(0,3),h.slice(3,6),h.slice(6)],n=[i.slice(0,3),i.slice(3,6),i.slice(6)],o=m.reduce(function(a,c){return a.concat(n.map(function(a){return b(c,a)}))},[]),p=[].concat(_toConsumableArray(k),_toConsumableArray(l),_toConsumableArray(o)),q=Object.fromEntries(j.map(function(a){return[a,p.filter(function(b){return b.includes(a)})]})),r=Object.fromEntries(j.map(function(a){var b=new Set(q[a].flat());return b.delete(a),[a,_toConsumableArray(b)]}));return function(a){return f(e(a))}(a)}';

  const onmessage = `var onmessage = (e) => {
      postMessage(sudoku(e.data));
    };`;

  return `${sudokuString};
  ${onmessage}`;
};

export default setUpWorker;
