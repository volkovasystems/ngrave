!function webpackUniversalModuleDefinition(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ngrave=e():t.ngrave=e()}(this,function(){return function(t){function __webpack_require__(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,__webpack_require__),r.l=!0,r.exports}var e={};return __webpack_require__.m=t,__webpack_require__.c=e,__webpack_require__.d=function(t,e,n){__webpack_require__.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},__webpack_require__.n=function(t){var e=t&&t.__esModule?function getDefault(){return t.default}:function getModuleExports(){return t};return __webpack_require__.d(e,"a",e),e},__webpack_require__.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=52)}([function(t,e){var n=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(18)("wks"),o=n(15),i=n(2).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(10),o=n(34),i=n(17),u=Object.defineProperty;e.f=n(5)?Object.defineProperty:function defineProperty(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){t.exports=!n(8)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(3),o=n(12);t.exports=n(5)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(56),o=n(24);t.exports=function(t){return r(o(t))}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(2),o=n(0),i=n(33),u=n(6),f=function(t,e,n){var c,a,s,l=t&f.F,p=t&f.G,d=t&f.S,y=t&f.P,v=t&f.B,h=t&f.W,_=p?o:o[e]||(o[e]={}),b=_.prototype,g=p?r:d?r[e]:(r[e]||{}).prototype;p&&(n=e);for(c in n)(a=!l&&g&&void 0!==g[c])&&c in _||(s=a?g[c]:n[c],_[c]=p&&"function"!=typeof g[c]?n[c]:v&&a?i(s,r):h&&g[c]==s?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(s):y&&"function"==typeof s?i(Function.call,s):s,y&&((_.virtual||(_.virtual={}))[c]=s,t&f.R&&b&&!b[c]&&u(b,c,s)))};f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},function(t,e,n){var r=n(11);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var r=n(67),o=_interopRequireDefault(r),i=n(44),u=_interopRequireDefault(i),f="function"==typeof u.default&&"symbol"==typeof o.default?function(t){return typeof t}:function(t){return t&&"function"==typeof u.default&&t.constructor===u.default&&t!==u.default.prototype?"symbol":typeof t};e.default="function"==typeof u.default&&"symbol"===f(o.default)?function(t){return void 0===t?"undefined":f(t)}:function(t){return t&&"function"==typeof u.default&&t.constructor===u.default&&t!==u.default.prototype?"symbol":void 0===t?"undefined":f(t)}},function(t,e){t.exports={}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(38),o=n(27);t.exports=Object.keys||function keys(t){return r(t,o)}},function(t,e,n){var r=n(11);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(2),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e,n){var r=n(3).f,o=n(4),i=n(1)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){e.f=n(1)},function(t,e,n){var r=n(2),o=n(0),i=n(22),u=n(20),f=n(3).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||f(e,t,{value:u.f(t)})}},function(t,e){t.exports=!0},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(18)("keys"),o=n(15);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(24);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(9),o=n(0),i=n(8);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",u)}},function(t,e,n){t.exports={default:n(53),__esModule:!0}},function(t,e,n){"use strict";var r=n(2),o=n(4),i=n(5),u=n(9),f=n(36),c=n(37).KEY,a=n(8),s=n(18),l=n(19),p=n(15),d=n(1),y=n(20),v=n(21),h=n(55),_=n(59),b=n(10),g=n(7),m=n(17),x=n(12),O=n(41),w=n(42),S=n(62),E=n(3),N=n(16),j=S.f,M=E.f,P=w.f,R=r.Symbol,D=r.JSON,k=D&&D.stringify,T=d("_hidden"),L=d("toPrimitive"),q={}.propertyIsEnumerable,A=s("symbol-registry"),F=s("symbols"),I=s("op-symbols"),B=Object.prototype,C="function"==typeof R,U=r.QObject,G=!U||!U.prototype||!U.prototype.findChild,J=i&&a(function(){return 7!=O(M({},"a",{get:function(){return M(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=j(B,e);r&&delete B[e],M(t,e,n),r&&t!==B&&M(B,e,r)}:M,z=function(t){var e=F[t]=O(R.prototype);return e._k=t,e},Y=C&&"symbol"==typeof R.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof R},V=function defineProperty(t,e,n){return t===B&&V(I,e,n),b(t),e=m(e,!0),b(n),o(F,e)?(n.enumerable?(o(t,T)&&t[T][e]&&(t[T][e]=!1),n=O(n,{enumerable:x(0,!1)})):(o(t,T)||M(t,T,x(1,{})),t[T][e]=!0),J(t,e,n)):M(t,e,n)},W=function defineProperties(t,e){b(t);for(var n,r=h(e=g(e)),o=0,i=r.length;i>o;)V(t,n=r[o++],e[n]);return t},H=function create(t,e){return void 0===e?O(t):W(O(t),e)},K=function propertyIsEnumerable(t){var e=q.call(this,t=m(t,!0));return!(this===B&&o(F,t)&&!o(I,t))&&(!(e||!o(this,t)||!o(F,t)||o(this,T)&&this[T][t])||e)},$=function getOwnPropertyDescriptor(t,e){if(t=g(t),e=m(e,!0),t!==B||!o(F,e)||o(I,e)){var n=j(t,e);return!n||!o(F,e)||o(t,T)&&t[T][e]||(n.enumerable=!0),n}},Q=function getOwnPropertyNames(t){for(var e,n=P(g(t)),r=[],i=0;n.length>i;)o(F,e=n[i++])||e==T||e==c||r.push(e);return r},X=function getOwnPropertySymbols(t){for(var e,n=t===B,r=P(n?I:g(t)),i=[],u=0;r.length>u;)!o(F,e=r[u++])||n&&!o(B,e)||i.push(F[e]);return i};C||(R=function Symbol(){if(this instanceof R)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===B&&e.call(I,n),o(this,T)&&o(this[T],t)&&(this[T][t]=!1),J(this,t,x(1,n))};return i&&G&&J(B,t,{configurable:!0,set:e}),z(t)},f(R.prototype,"toString",function toString(){return this._k}),S.f=$,E.f=V,n(43).f=w.f=Q,n(28).f=K,n(40).f=X,i&&!n(22)&&f(B,"propertyIsEnumerable",K,!0),y.f=function(t){return z(d(t))}),u(u.G+u.W+u.F*!C,{Symbol:R});for(var Z="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;Z.length>tt;)d(Z[tt++]);for(var et=N(d.store),nt=0;et.length>nt;)v(et[nt++]);u(u.S+u.F*!C,"Symbol",{for:function(t){return o(A,t+="")?A[t]:A[t]=R(t)},keyFor:function keyFor(t){if(!Y(t))throw TypeError(t+" is not a symbol!");for(var e in A)if(A[e]===t)return e},useSetter:function(){G=!0},useSimple:function(){G=!1}}),u(u.S+u.F*!C,"Object",{create:H,defineProperty:V,defineProperties:W,getOwnPropertyDescriptor:$,getOwnPropertyNames:Q,getOwnPropertySymbols:X}),D&&u(u.S+u.F*(!C||a(function(){var t=R();return"[null]"!=k([t])||"{}"!=k({a:t})||"{}"!=k(Object(t))})),"JSON",{stringify:function stringify(t){if(void 0!==t&&!Y(t)){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return e=r[1],"function"==typeof e&&(n=e),!n&&_(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)),!Y(e))return e}),r[1]=e,k.apply(D,r)}}}),R.prototype[L]||n(6)(R.prototype,L,R.prototype.valueOf),l(R,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){var r=n(54);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){t.exports=!n(5)&&!n(8)(function(){return 7!=Object.defineProperty(n(35)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(11),o=n(2).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){t.exports=n(6)},function(t,e,n){var r=n(15)("meta"),o=n(11),i=n(4),u=n(3).f,f=0,c=Object.isExtensible||function(){return!0},a=!n(8)(function(){return c(Object.preventExtensions({}))}),s=function(t){u(t,r,{value:{i:"O"+ ++f,w:{}}})},l=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!c(t))return"F";if(!e)return"E";s(t)}return t[r].i},p=function(t,e){if(!i(t,r)){if(!c(t))return!0;if(!e)return!1;s(t)}return t[r].w},d=function(t){return a&&y.NEED&&c(t)&&!i(t,r)&&s(t),t},y=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:d}},function(t,e,n){var r=n(4),o=n(7),i=n(57)(!1),u=n(26)("IE_PROTO");t.exports=function(t,e){var n,f=o(t),c=0,a=[];for(n in f)n!=u&&r(f,n)&&a.push(n);for(;e.length>c;)r(f,n=e[c++])&&(~i(a,n)||a.push(n));return a}},function(t,e,n){var r=n(25),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(10),o=n(60),i=n(27),u=n(26)("IE_PROTO"),f=function(){},c=function(){var t,e=n(35)("iframe"),r=i.length;for(e.style.display="none",n(61).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[i[r]];return c()};t.exports=Object.create||function create(t,e){var n;return null!==t?(f.prototype=r(t),n=new f,f.prototype=null,n[u]=t):n=c(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(7),o=n(43).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],f=function(t){try{return o(t)}catch(t){return u.slice()}};t.exports.f=function getOwnPropertyNames(t){return u&&"[object Window]"==i.call(t)?f(t):o(r(t))}},function(t,e,n){var r=n(38),o=n(27).concat("length","prototype");e.f=Object.getOwnPropertyNames||function getOwnPropertyNames(t){return r(t,o)}},function(t,e,n){t.exports={default:n(63),__esModule:!0}},function(t,e,n){"use strict";var r=n(69)(!0);n(46)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){"use strict";var r=n(22),o=n(9),i=n(36),u=n(6),f=n(4),c=n(14),a=n(70),s=n(19),l=n(71),p=n(1)("iterator"),d=!([].keys&&"next"in[].keys()),y=function(){return this};t.exports=function(t,e,n,v,h,_,b){a(n,e,v);var g,m,x,O=function(t){if(!d&&t in N)return N[t];switch(t){case"keys":return function keys(){return new n(this,t)};case"values":return function values(){return new n(this,t)}}return function entries(){return new n(this,t)}},w=e+" Iterator",S="values"==h,E=!1,N=t.prototype,j=N[p]||N["@@iterator"]||h&&N[h],M=j||O(h),P=h?S?O("entries"):M:void 0,R="Array"==e?N.entries||j:j;if(R&&(x=l(R.call(new t)))!==Object.prototype&&x.next&&(s(x,w,!0),r||f(x,p)||u(x,p,y)),S&&j&&"values"!==j.name&&(E=!0,M=function values(){return j.call(this)}),r&&!b||!d&&!E&&N[p]||u(N,p,M),c[e]=M,c[w]=y,h)if(g={values:S?M:O("values"),keys:_?M:O("keys"),entries:P},b)for(m in g)m in N||i(N,m,g[m]);else o(o.P+o.F*(d||E),e,g);return g}},function(t,e,n){"use strict";var r=function falzy(t){return"number"==typeof t?isNaN(t):void 0===t||null===t||""===t};t.exports=r},function(t,e,n){t.exports={default:n(78),__esModule:!0}},function(t,e,n){t.exports={default:n(87),__esModule:!0}},function(t,e,n){t.exports={default:n(97),__esModule:!0}},function(t,e,n){"use strict";(function(e){function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}var r=n(100),o=_interopRequireDefault(r),i=n(31),u=_interopRequireDefault(i),f=n(49),c=_interopRequireDefault(f),a=n(13),s=_interopRequireDefault(a),l=function harden(t,n,r){if(""===t||"string"!=typeof t&&"symbol"!=(void 0===t?"undefined":(0,s.default)(t))&&"number"!=typeof t||"number"==typeof t&&isNaN(t))throw new Error("invalid property");if(void 0===r&&2==arguments.length)if(void 0!==this)r=this;else if(void 0!==e)r=e;else{if("undefined"==typeof window)throw new Error("cannot resolve entity as context");r=window}if(void 0!==r[t]||(0,c.default)(r).some(function(e){return e===t})||"symbol"==(void 0===t?"undefined":(0,s.default)(t))&&(0,u.default)(r).some(function(e){return e===t}))return r;try{(0,o.default)(r,t,{value:n,configurable:!1,enumerable:!1,writable:!1})}catch(e){throw new Error("cannot harden property, "+t+", "+e.stack)}return r};t.exports=l}).call(e,n(99))},function(t,e,n){"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}var r=n(31),o=_interopRequireDefault(r),i=n(44),u=_interopRequireDefault(i),f=n(13),c=_interopRequireDefault(f),a=n(47),s=n(76),l=n(92),p=/^Symbol\((.+?)\)$/,d=function ngrave(t,e,n){if(a(t)||!l(t,NUMBER+STRING+SYMBOL))throw new Error("invalid symbol");if(a(e)||!l(e,FUNCTION+OBJECT))throw new Error("invalid entity");(void 0===t?"undefined":(0,c.default)(t))!=SYMBOL&&(t=(0,u.default)(t));var r=s(t.toString(),p,1);t=(0,o.default)(e).reduce(function(t,e){return s(e.toString(),p,1)==r?e:t},t);try{e[t]=n}catch(t){}return e};t.exports=d},function(t,e,n){n(32),t.exports=n(0).Object.getOwnPropertySymbols},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(16),o=n(40),i=n(28);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,f=n(t),c=i.f,a=0;f.length>a;)c.call(t,u=f[a++])&&e.push(u);return e}},function(t,e,n){var r=n(23);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(7),o=n(39),i=n(58);t.exports=function(t){return function(e,n,u){var f,c=r(e),a=o(c.length),s=i(u,a);if(t&&n!=n){for(;a>s;)if((f=c[s++])!=f)return!0}else for(;a>s;s++)if((t||s in c)&&c[s]===n)return t||s||0;return!t&&-1}}},function(t,e,n){var r=n(25),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(23);t.exports=Array.isArray||function isArray(t){return"Array"==r(t)}},function(t,e,n){var r=n(3),o=n(10),i=n(16);t.exports=n(5)?Object.defineProperties:function defineProperties(t,e){o(t);for(var n,u=i(e),f=u.length,c=0;f>c;)r.f(t,n=u[c++],e[n]);return t}},function(t,e,n){var r=n(2).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(28),o=n(12),i=n(7),u=n(17),f=n(4),c=n(34),a=Object.getOwnPropertyDescriptor;e.f=n(5)?a:function getOwnPropertyDescriptor(t,e){if(t=i(t),e=u(e,!0),c)try{return a(t,e)}catch(t){}if(f(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e,n){n(32),n(64),n(65),n(66),t.exports=n(0).Symbol},function(t,e){},function(t,e,n){n(21)("asyncIterator")},function(t,e,n){n(21)("observable")},function(t,e,n){t.exports={default:n(68),__esModule:!0}},function(t,e,n){n(45),n(72),t.exports=n(20).f("iterator")},function(t,e,n){var r=n(25),o=n(24);t.exports=function(t){return function(e,n){var i,u,f=String(o(e)),c=r(n),a=f.length;return c<0||c>=a?t?"":void 0:(i=f.charCodeAt(c),i<55296||i>56319||c+1===a||(u=f.charCodeAt(c+1))<56320||u>57343?t?f.charAt(c):i:t?f.slice(c,c+2):u-56320+(i-55296<<10)+65536)}}},function(t,e,n){"use strict";var r=n(41),o=n(12),i=n(19),u={};n(6)(u,n(1)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(4),o=n(29),i=n(26)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){n(73);for(var r=n(2),o=n(6),i=n(14),u=n(1)("toStringTag"),f="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<f.length;c++){var a=f[c],s=r[a],l=s&&s.prototype;l&&!l[u]&&o(l,u,a),i[a]=i.Array}},function(t,e,n){"use strict";var r=n(74),o=n(75),i=n(14),u=n(7);t.exports=n(46)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){"use strict";var r=n(47),o=n(77),i=n(86),u=n(91),f=function mtch(t,e,n){if("string"==typeof e&&(e=new RegExp(e)),!(e instanceof RegExp))throw new Error("invalid pattern");if(u(n)&&"number"!=typeof n)throw new Error("invalid index");if(t=i(t),r(t))return r(n)?"":[];var f=o(t.match(e));return u(n)?f[n]||"":f};t.exports=f},function(t,e,n){"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}var r=n(48),o=_interopRequireDefault(r),i=n(13),u=_interopRequireDefault(i),f=/^\[object Arguments\]$/,c=function raze(t){if(void 0===t||"string"==typeof t&&0==t.length||"object"==(void 0===t?"undefined":(0,u.default)(t))&&null==t||"number"==typeof t&&isNaN(t))return[];if("object"!=(void 0===t?"undefined":(0,u.default)(t)))return[t];try{var e=(0,o.default)(t);return 0===e.length?f.test(""+t)?e:Array.isArray(t)?e:[t]:e}catch(t){return[]}};t.exports=c},function(t,e,n){n(45),n(79),t.exports=n(0).Array.from},function(t,e,n){"use strict";var r=n(33),o=n(9),i=n(29),u=n(80),f=n(81),c=n(39),a=n(82),s=n(83);o(o.S+o.F*!n(85)(function(t){Array.from(t)}),"Array",{from:function from(t){var e,n,o,l,p=i(t),d="function"==typeof this?this:Array,y=arguments.length,v=y>1?arguments[1]:void 0,h=void 0!==v,_=0,b=s(p);if(h&&(v=r(v,y>2?arguments[2]:void 0,2)),void 0==b||d==Array&&f(b))for(e=c(p.length),n=new d(e);e>_;_++)a(n,_,h?v(p[_],_):p[_]);else for(l=b.call(p),n=new d;!(o=l.next()).done;_++)a(n,_,h?u(l,v,[o.value,_],!0):o.value);return n.length=_,n}})},function(t,e,n){var r=n(10);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){var r=n(14),o=n(1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,e,n){"use strict";var r=n(3),o=n(12);t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},function(t,e,n){var r=n(84),o=n(1)("iterator"),i=n(14);t.exports=n(0).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){var r=n(23),o=n(1)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,f;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=Object(t),o))?n:i?r(e):"Object"==(f=r(e))&&"function"==typeof e.callee?"Arguments":f}},function(t,e,n){var r=n(1)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:n=!0}},i[r]=function(){return u},t(i)}catch(t){}return n}},function(t,e,n){"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}var r=n(49),o=_interopRequireDefault(r),i=n(89),u=_interopRequireDefault(i),f=function stringe(t){if("string"==typeof t)return t;var e=[];try{if(void 0===t||null===t||"function"!=typeof t.toString)return""+t}catch(t){e.push(t.stack)}try{if(t.toString&&"function"==typeof t.toString)return t.toString()}catch(t){e.push(t.stack)}try{return(0,u.default)((0,o.default)(t).reduce(function(e,n){return e[n]=stringe(t[n]),e},{}))}catch(t){e.push(t.stack)}try{return""+t}catch(t){throw e.push(t.stack),new Error("fatal, cannot transform to string, "+e.join(","))}};t.exports=f},function(t,e,n){n(88);var r=n(0).Object;t.exports=function getOwnPropertyNames(t){return r.getOwnPropertyNames(t)}},function(t,e,n){n(30)("getOwnPropertyNames",function(){return n(42).f})},function(t,e,n){t.exports={default:n(90),__esModule:!0}},function(t,e,n){var r=n(0),o=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function stringify(t){return o.stringify.apply(o,arguments)}},function(t,e,n){"use strict";var r=function truly(t){return"number"==typeof t?!isNaN(t):void 0!==t&&null!==t&&""!==t};t.exports=r},function(t,e,n){"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}var r=n(48),o=_interopRequireDefault(r),i=n(13),u=_interopRequireDefault(i),f=n(93),c=n(51);c("STRING","string"),c("NUMBER","number"),c("BOOLEAN","boolean"),c("FUNCTION","function"),c("OBJECT","object"),c("UNDEFINED","undefined"),c("SYMBOL","symbol");var a=[STRING,NUMBER,BOOLEAN,FUNCTION,OBJECT,UNDEFINED,SYMBOL],s=new RegExp("^("+a.join("|")+"){2,}$"),l=new RegExp("("+a.join("|")+")(?!.*\\1)","g"),p=function protype(t,e){return""!=e&&"string"==typeof e&&s.test(e)?(e=e.match(l)||[],e.length>1&&!e.every(function(e){return(void 0===t?"undefined":(0,u.default)(t))!=e})):!(arguments.length>1&&e!==STRING&&e!==NUMBER&&e!==BOOLEAN&&e!==FUNCTION&&e!==OBJECT&&e!==UNDEFINED&&e!==SYMBOL)&&(e?2==arguments.length?"string"==typeof e&&(void 0===t?"undefined":(0,u.default)(t))==e:((0,o.default)(arguments).splice(1).join("").replace(/\[|\]|\s+|\,/g,"").match(l)||[]).some(function(e){return(void 0===t?"undefined":(0,u.default)(t))==e}):f({STRING:(void 0===t?"undefined":(0,u.default)(t))==STRING,NUMBER:(void 0===t?"undefined":(0,u.default)(t))==NUMBER,BOOLEAN:(void 0===t?"undefined":(0,u.default)(t))==BOOLEAN,FUNCTION:(void 0===t?"undefined":(0,u.default)(t))==FUNCTION,OBJECT:(void 0===t?"undefined":(0,u.default)(t))==OBJECT,UNDEFINED:(void 0===t?"undefined":(0,u.default)(t))==UNDEFINED,SYMBOL:(void 0===t?"undefined":(0,u.default)(t))==SYMBOL,type:void 0===t?"undefined":(0,u.default)(t)}))};t.exports=p},function(t,e,n){"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}var r=n(94),o=_interopRequireDefault(r),i=n(50),u=_interopRequireDefault(i),f=n(13),c=_interopRequireDefault(f),a=n(51),s=n(103),l=function cemento(t,e){if("object"!=(void 0===t?"undefined":(0,c.default)(t))||!t||0==s(t))throw new Error("invalid entity");var n=t;e=e||t,t=a.bind(e),(0,u.default)(n).forEach(function(e){var r=n[e];try{delete n[e]}catch(t){}t(e,r)});try{return(0,o.default)(e)}catch(t){throw new Error("cannot freeze context, "+t.stack)}};t.exports=l},function(t,e,n){t.exports={default:n(95),__esModule:!0}},function(t,e,n){n(96),t.exports=n(0).Object.freeze},function(t,e,n){var r=n(11),o=n(37).onFreeze;n(30)("freeze",function(t){return function freeze(e){return t&&r(e)?t(o(e)):e}})},function(t,e,n){n(98),t.exports=n(0).Object.keys},function(t,e,n){var r=n(29),o=n(16);n(30)("keys",function(){return function keys(t){return o(r(t))}})},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){t.exports={default:n(101),__esModule:!0}},function(t,e,n){n(102);var r=n(0).Object;t.exports=function defineProperty(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){var r=n(9);r(r.S+r.F*!n(5),"Object",{defineProperty:n(3).f})},function(t,e,n){"use strict";var r=n(50),o=function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}(r),i=function kount(t){try{return(0,o.default)(t).length}catch(t){return 0}};t.exports=i}])});
//# sourceMappingURL=ngrave.deploy.js.map