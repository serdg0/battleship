!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=7)}([function(t,e,n){(function(e){var n="[object Map]",r="[object Set]",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,c=/^\[object .+?Constructor\]$/,a=/^0o[0-7]+$/i,l=/^(?:0|[1-9]\d*)$/,s="[\\ud800-\\udfff]",f="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",d="\\ud83c[\\udffb-\\udfff]",p="[^\\ud800-\\udfff]",h="(?:\\ud83c[\\udde6-\\uddff]){2}",b="[\\ud800-\\udbff][\\udc00-\\udfff]",m="(?:"+f+"|"+d+")"+"?",y="[\\ufe0e\\ufe0f]?"+m+("(?:\\u200d(?:"+[p,h,b].join("|")+")[\\ufe0e\\ufe0f]?"+m+")*"),v="(?:"+[p+f+"?",f,h,b,s].join("|")+")",g=RegExp(d+"(?="+d+")|"+v+y,"g"),j=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),E=parseInt,k="object"==typeof e&&e&&e.Object===Object&&e,$="object"==typeof self&&self&&self.Object===Object&&self,S=k||$||Function("return this")();function M(t,e){return function(t,e){for(var n=-1,r=t?t.length:0,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}(e,(function(e){return t[e]}))}function w(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function A(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}function O(t){return function(t){return j.test(t)}(t)?function(t){return t.match(g)||[]}(t):function(t){return t.split("")}(t)}var C,x,T,L=Function.prototype,H=Object.prototype,I=S["__core-js_shared__"],_=(C=/[^.]+$/.exec(I&&I.keys&&I.keys.IE_PROTO||""))?"Symbol(src)_1."+C:"",P=L.toString,B=H.hasOwnProperty,N=H.toString,R=RegExp("^"+P.call(B).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),F=S.Symbol,D=F?F.iterator:void 0,V=H.propertyIsEnumerable,W=Math.floor,z=(x=Object.keys,T=Object,function(t){return x(T(t))}),U=Math.random,G=it(S,"DataView"),J=it(S,"Map"),q=it(S,"Promise"),K=it(S,"Set"),Q=it(S,"WeakMap"),X=lt(G),Y=lt(J),Z=lt(q),tt=lt(K),et=lt(Q);function nt(t,e){var n=st(t)||function(t){return function(t){return ht(t)&&ft(t)}(t)&&B.call(t,"callee")&&(!V.call(t,"callee")||"[object Arguments]"==N.call(t))}(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],r=n.length,o=!!r;for(var u in t)!e&&!B.call(t,u)||o&&("length"==u||at(u,r))||n.push(u);return n}function rt(t){return!(!pt(t)||function(t){return!!_&&_ in t}(t))&&(dt(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?R:c).test(lt(t))}function ot(t){if(n=(e=t)&&e.constructor,r="function"==typeof n&&n.prototype||H,e!==r)return z(t);var e,n,r,o=[];for(var u in Object(t))B.call(t,u)&&"constructor"!=u&&o.push(u);return o}function ut(t,e){return t+W(U()*(e-t+1))}function it(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return rt(n)?n:void 0}var ct=function(t){return N.call(t)};function at(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||l.test(t))&&t>-1&&t%1==0&&t<e}function lt(t){if(null!=t){try{return P.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(G&&"[object DataView]"!=ct(new G(new ArrayBuffer(1)))||J&&ct(new J)!=n||q&&"[object Promise]"!=ct(q.resolve())||K&&ct(new K)!=r||Q&&"[object WeakMap]"!=ct(new Q))&&(ct=function(t){var e=N.call(t),o="[object Object]"==e?t.constructor:void 0,u=o?lt(o):void 0;if(u)switch(u){case X:return"[object DataView]";case Y:return n;case Z:return"[object Promise]";case tt:return r;case et:return"[object WeakMap]"}return e});var st=Array.isArray;function ft(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!dt(t)}function dt(t){var e=pt(t)?N.call(t):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}function pt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function ht(t){return!!t&&"object"==typeof t}function bt(t){return t?M(t,function(t){return ft(t)?nt(t):ot(t)}(t)):[]}t.exports=function(t,e,c){var l,s,f,d=-1,p=function(t){if(!t)return[];if(ft(t))return function(t){return"string"==typeof t||!st(t)&&ht(t)&&"[object String]"==N.call(t)}(t)?O(t):function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}(t);if(D&&t[D])return function(t){for(var e,n=[];!(e=t.next()).done;)n.push(e.value);return n}(t[D]());var e=ct(t);return(e==n?w:e==r?A:bt)(t)}(t),h=p.length,b=h-1;for((c?function(t,e,n){if(!pt(n))return!1;var r=typeof e;return!!("number"==r?ft(n)&&at(e,n.length):"string"==r&&e in n)&&function(t,e){return t===e||t!=t&&e!=e}(n[e],t)}(t,e,c):void 0===e)?e=1:(l=function(t){var e=function(t){return t?(t=function(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||ht(t)&&"[object Symbol]"==N.call(t)}(t))return NaN;if(pt(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=pt(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=i.test(t);return n||a.test(t)?E(t.slice(2),n?2:8):u.test(t)?NaN:+t}(t))===1/0||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}(t),n=e%1;return e==e?n?e-n:e:0}(e),s=0,f=h,l==l&&(void 0!==f&&(l=l<=f?l:f),void 0!==s&&(l=l>=s?l:s)),e=l);++d<e;){var m=ut(d,b),y=p[m];p[m]=p[d],p[d]=y}return p.length=e,p}}).call(this,n(1))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){(function(e){var n="[object Map]",r="[object Set]",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,c=/^\[object .+?Constructor\]$/,a=/^0o[0-7]+$/i,l=/^(?:0|[1-9]\d*)$/,s="[\\ud800-\\udfff]",f="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",d="\\ud83c[\\udffb-\\udfff]",p="[^\\ud800-\\udfff]",h="(?:\\ud83c[\\udde6-\\uddff]){2}",b="[\\ud800-\\udbff][\\udc00-\\udfff]",m="(?:"+f+"|"+d+")"+"?",y="[\\ufe0e\\ufe0f]?"+m+("(?:\\u200d(?:"+[p,h,b].join("|")+")[\\ufe0e\\ufe0f]?"+m+")*"),v="(?:"+[p+f+"?",f,h,b,s].join("|")+")",g=RegExp(d+"(?="+d+")|"+v+y,"g"),j=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),E=parseInt,k="object"==typeof e&&e&&e.Object===Object&&e,$="object"==typeof self&&self&&self.Object===Object&&self,S=k||$||Function("return this")();function M(t,e){return function(t,e){for(var n=-1,r=t?t.length:0,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}(e,(function(e){return t[e]}))}function w(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function A(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}function O(t){return function(t){return j.test(t)}(t)?function(t){return t.match(g)||[]}(t):function(t){return t.split("")}(t)}var C,x,T,L=Function.prototype,H=Object.prototype,I=S["__core-js_shared__"],_=(C=/[^.]+$/.exec(I&&I.keys&&I.keys.IE_PROTO||""))?"Symbol(src)_1."+C:"",P=L.toString,B=H.hasOwnProperty,N=H.toString,R=RegExp("^"+P.call(B).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),F=S.Symbol,D=F?F.iterator:void 0,V=H.propertyIsEnumerable,W=Math.floor,z=(x=Object.keys,T=Object,function(t){return x(T(t))}),U=Math.random,G=it(S,"DataView"),J=it(S,"Map"),q=it(S,"Promise"),K=it(S,"Set"),Q=it(S,"WeakMap"),X=lt(G),Y=lt(J),Z=lt(q),tt=lt(K),et=lt(Q);function nt(t,e){var n=ft(t)||function(t){return function(t){return bt(t)&&dt(t)}(t)&&B.call(t,"callee")&&(!V.call(t,"callee")||"[object Arguments]"==N.call(t))}(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],r=n.length,o=!!r;for(var u in t)!e&&!B.call(t,u)||o&&("length"==u||at(u,r))||n.push(u);return n}function rt(t){return!(!ht(t)||function(t){return!!_&&_ in t}(t))&&(pt(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?R:c).test(lt(t))}function ot(t){if(n=(e=t)&&e.constructor,r="function"==typeof n&&n.prototype||H,e!==r)return z(t);var e,n,r,o=[];for(var u in Object(t))B.call(t,u)&&"constructor"!=u&&o.push(u);return o}function ut(t,e){return t+W(U()*(e-t+1))}function it(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return rt(n)?n:void 0}var ct=function(t){return N.call(t)};function at(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||l.test(t))&&t>-1&&t%1==0&&t<e}function lt(t){if(null!=t){try{return P.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function st(t,e,c){var l,s,f,d=-1,p=function(t){if(!t)return[];if(dt(t))return function(t){return"string"==typeof t||!ft(t)&&bt(t)&&"[object String]"==N.call(t)}(t)?O(t):function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}(t);if(D&&t[D])return function(t){for(var e,n=[];!(e=t.next()).done;)n.push(e.value);return n}(t[D]());var e=ct(t);return(e==n?w:e==r?A:mt)(t)}(t),h=p.length,b=h-1;for((c?function(t,e,n){if(!ht(n))return!1;var r=typeof e;return!!("number"==r?dt(n)&&at(e,n.length):"string"==r&&e in n)&&function(t,e){return t===e||t!=t&&e!=e}(n[e],t)}(t,e,c):void 0===e)?e=1:(l=function(t){var e=function(t){return t?(t=function(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||bt(t)&&"[object Symbol]"==N.call(t)}(t))return NaN;if(ht(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=ht(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=i.test(t);return n||a.test(t)?E(t.slice(2),n?2:8):u.test(t)?NaN:+t}(t))===1/0||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}(t),n=e%1;return e==e?n?e-n:e:0}(e),s=0,f=h,l==l&&(void 0!==f&&(l=l<=f?l:f),void 0!==s&&(l=l>=s?l:s)),e=l);++d<e;){var m=ut(d,b),y=p[m];p[m]=p[d],p[d]=y}return p.length=e,p}(G&&"[object DataView]"!=ct(new G(new ArrayBuffer(1)))||J&&ct(new J)!=n||q&&"[object Promise]"!=ct(q.resolve())||K&&ct(new K)!=r||Q&&"[object WeakMap]"!=ct(new Q))&&(ct=function(t){var e=N.call(t),o="[object Object]"==e?t.constructor:void 0,u=o?lt(o):void 0;if(u)switch(u){case X:return"[object DataView]";case Y:return n;case Z:return"[object Promise]";case tt:return r;case et:return"[object WeakMap]"}return e});var ft=Array.isArray;function dt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!pt(t)}function pt(t){var e=ht(t)?N.call(t):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}function ht(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function bt(t){return!!t&&"object"==typeof t}function mt(t){return t?M(t,function(t){return dt(t)?nt(t):ot(t)}(t)):[]}t.exports=function(t){return st(t,4294967295)}}).call(this,n(1))},function(t,e,n){var r=n(4),o=n(5);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var u={insert:"head",singleton:!1},i=(r(o,u),o.locals?o.locals:{});t.exports=i},function(t,e,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},u=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function c(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function a(t,e){for(var n={},r=[],o=0;o<t.length;o++){var u=t[o],a=e.base?u[0]+e.base:u[0],l=n[a]||0,s="".concat(a," ").concat(l);n[a]=l+1;var f=c(s),d={css:u[1],media:u[2],sourceMap:u[3]};-1!==f?(i[f].references++,i[f].updater(d)):i.push({identifier:s,updater:m(d,e),references:1}),r.push(s)}return r}function l(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var i=u(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var s,f=(s=[],function(t,e){return s[t]=e,s.filter(Boolean).join("\n")});function d(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=f(e,o);else{var u=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(u,i[e]):t.appendChild(u)}}function p(t,e,n){var r=n.css,o=n.media,u=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),u&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(u))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var h=null,b=0;function m(t,e){var n,r,o;if(e.singleton){var u=b++;n=h||(h=l(e)),r=d.bind(null,n,u,!1),o=d.bind(null,n,u,!0)}else n=l(e),r=p.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=a(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=c(n[r]);i[o].references--}for(var u=a(t,e),l=0;l<n.length;l++){var s=c(n[l]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=u}}}},function(t,e,n){(e=n(6)(!1)).push([t.i,"html body table {\n  max-width: 400px;\n  margin: 20px auto;\n  table-layout: fixed;\n  border-collapse: collapse;\n}\n\nhtml body table th,\nhtml body table td {\n  border-collapse: collapse;\n}\n\nhtml body table button {\n  height: 45px;\n  width: 45px;\n}\n\nhtml body table .pressed {\n  color: #ffffff;\n  background-color: #636363;\n}\n\nhtml body table .ship {\n  background-color: red;\n}\n\nhtml body table .bounded {\n  background-color: seagreen;\n}\n\nhtml body .board {\n  width: 500px;\n  border: 4px grey solid;\n}",""]),t.exports=e},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(a," */")),u=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[n].concat(u).concat([o]).join("\n")}var i,c,a;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var u=0;u<this.length;u++){var i=this[u][0];null!=i&&(o[i]=!0)}for(var c=0;c<t.length;c++){var a=[].concat(t[c]);r&&o[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),e.push(a))}},e}},function(t,e,n){"use strict";n.r(e);const r=()=>{let t=0;return{sum:()=>t+=1,val:()=>t}},o=(t,e,n,r)=>(t-1>=0&&null==n[t-1][e].ship&&r.push(n[t-1][e]),t+1<10&&null==n[t+1][e].ship&&r.push(n[t+1][e]),e-1>=0&&null==n[t][e-1].ship&&r.push(n[t][e-1]),e+1<10&&null==n[t][e+1].ship&&r.push(n[t][e+1]),t-1>=0&&e+1<10&&null==n[t-1][e+1].ship&&r.push(n[t-1][e+1]),t-1>=0&&e-1>=0&&null==n[t-1][e-1].ship&&r.push(n[t-1][e-1]),t+1<10&&e+1<10&&null==n[t+1][e+1].ship&&r.push(n[t+1][e+1]),t+1<10&&e-1>=0&&null==n[t+1][e-1].ship&&r.push(n[t+1][e-1]),r);var u=({ships:t})=>({hits:r(),missedHits:r(),sunkShips:r(),ships:t,grid:Array.from(Array(10),t=>Array.from(Array(10),t=>(({ship:t=null,hit:e=!1,bounded:n=!1}={})=>({ship:t,hit:e,bounded:n}))())),putShip(t,e,n,r=!0){let u=t.length,i=u,c=u,a=e,l=e,s=n,f=n,d=[],p=!0;if(r){for(;c>0;)(f>9||this.grid[e][f].bounded||null!=this.grid[e][f].ship)&&(p=!1),f+=1,c-=1;if(!p)return!1;for(console.log(`Ship place at ${e},${n} align: horizontal`);i>0;)this.grid[a][s].ship=t,i-=1,s+=1;for(;u>0;)d=o(e,n,this.grid,d),d.map(t=>t.bounded=!0),n+=1,u-=1}else{for(;c>0;)(l>9||this.grid[l][n].bounded||null!=this.grid[l][n].ship)&&(p=!1),l+=1,c-=1;if(!p)return!1;for(console.log(`Ship place at ${e},${n} align: vertical`);i>0;)this.grid[a][s].ship=t,i-=1,a+=1;for(;u>0;)d=o(e,n,this.grid,d),d.map(t=>t.bounded=!0),e+=1,u-=1}return!0},receiveAttack(t,e){const n=this.grid[t][e];!1===n.hit&&(n.hit=!0),null!=n.ship?(n.ship.hit(),this.hits.sum(),n.ship.isSunk()&&this.sunkShips.sum(),console.log(`${t},${e} Hit Total hits: ${this.hits.val()}`),this.lastHit=!0):(this.missedHits.sum(),console.log(`${t},${e} Miss Hit. Total missed: ${this.missedHits.val()}`),this.lastHit=!1)},AllShipsDown(){return console.log(`Length: ${this.ships.length} sunk : ${this.sunkShips.val()}`),this.ships.length===this.sunkShips.val()},lastHit:!1});var i=({length:t,name:e})=>({length:t,name:e,hit(){return this.length-=1,this},isSunk(){return 0===this.length}});var c=({name:t="Player",ships:e,id:n=0}={})=>({name:t,id:n,attackLog:[],board:u({ships:e}),attack(t,e,n){this.attackLog.push([e,n]),t.board.receiveAttack(e,n)}});const a=(t,e,n,r)=>{e.attack(t,n,r),e.board.AllShipsDown()&&console.log("GAME OVER"),null==t.board.grid[n][r].ship&&(0===e.id?(console.log("Computers Turn"),document.getElementById("board-2").style.display="none",document.getElementById("board-3").style.display="block"):(console.log("Players Turn"),document.getElementById("board-3").style.display="none",document.getElementById("board-2").style.display="block"))};var l=(t,e)=>{},s=n(2),f=n.n(s),d=n(0),p=n.n(d);function h(t,e,n,r=!1){document.getElementById("setup-board").innerHTML=" ";let o=!1;const u=t.board,i=document.createElement("table"),c=[0,1,2,3,4,5,6,7,8,9];c.forEach((function(a){const l=document.createElement("tr");c.forEach((function(i){const c=document.createElement("td"),s=document.createElement("button");s.innerHTML=`${a}${i}`,s.setAttribute("id",`s${a}${i}`),r&&(s.onclick=()=>{o=t.board.putShip(e,a,i,n),h(t,e,n,!o),s.onclick=null}),null!=u.grid[a][i].ship&&(s.setAttribute("class","ship"),s.onclick=null),1==u.grid[a][i].bounded&&(s.setAttribute("class","bounded"),s.onclick=null),c.appendChild(s),l.appendChild(c)})),i.appendChild(l)})),document.getElementById("setup-board").appendChild(i)}const b=t=>{const e=f()(t.ships),n=[0,1,2,3,4,5,6,7,8,9],r=()=>p()(n,1);return[0,1,2,3,4].forEach(n=>{!function o(){t.putShip(e[n],r()[0],r()[0],p()([!0,!1],1)[0])||o()}()}),t};function m(t,e){const n=document.getElementById("selector"),r=document.createElement("input");r.type="checkbox";let o=0;const u=document.createElement("button");u.innerHTML="Carrier L5",u.onclick=()=>{0==r.checked?h(t,t.board.ships[0],!1,!0):h(t,t.board.ships[0],!0,!0),o+=1,u.disabled=!0};const i=document.createElement("button");i.innerHTML="BattleShip L4",i.onclick=()=>{0==r.checked?h(t,t.board.ships[1],!1,!0):h(t,t.board.ships[1],!0,!0),o+=1,i.disabled=!0};const c=document.createElement("button");c.innerHTML="Submarine L3",c.onclick=()=>{0==r.checked?h(t,t.board.ships[2],!1,!0):h(t,t.board.ships[2],!0,!0),o+=1,c.disabled=!0};const l=document.createElement("button");l.innerHTML="Destroyer L3",l.onclick=()=>{0==r.checked?h(t,t.board.ships[3],!1,!0):h(t,t.board.ships[3],!0,!0),o+=1,l.disabled=!0};const s=document.createElement("button");s.innerHTML="PatrolBoat L2",s.onclick=()=>{0==r.checked?h(t,t.board.ships[4],!1,!0):h(t,t.board.ships[4],!0,!0),o+=1,s.disabled=!0};const f=document.createElement("button");f.innerHTML="Start Game",f.onclick=()=>{5===o&&(document.getElementById("game-setup").innerHTML=" ",b(e.board),document.getElementById("board-1").appendChild(function(t){const e=document.createElement("table"),n=[0,1,2,3,4,5,6,7,8,9];return n.forEach((function(r){const o=document.createElement("tr");n.forEach((function(e){const n=document.createElement("td"),u=document.createElement("button");u.innerHTML=`${r}${e}`,null!=t.grid[r][e].ship&&u.setAttribute("class","ship"),1==t.grid[r][e].bounded&&u.setAttribute("class","bounded"),u.setAttribute("id",`Com${r}${e}`),n.appendChild(u),o.appendChild(n)})),e.appendChild(o)})),e}(t.board)),document.getElementById("board-2").appendChild(function(t,e){const n=t.board,r=document.createElement("table"),o=[0,1,2,3,4,5,6,7,8,9];return o.forEach((function(u){const i=document.createElement("tr");o.forEach((function(r){const o=document.createElement("td"),c=document.createElement("button");c.innerHTML=`${u}${r}`,c.setAttribute("id",`p${u}${r}`),c.onclick=()=>{a(t,e,u,r),null!=n.grid[u][r].ship?c.setAttribute("class","ship"):(c.innerHTML="*",c.setAttribute("class","pressed")),c.onclick=null},o.appendChild(c),i.appendChild(o)})),r.appendChild(i)})),r}(e,t)),document.getElementById("board-3").appendChild(function(t,e){const n=t.board,r=document.createElement("table"),o=[0,1,2,3,4,5,6,7,8,9];return o.forEach((function(u){const i=document.createElement("tr");o.forEach((function(r){const o=document.createElement("td"),c=document.createElement("button");c.innerHTML=`${u}${r}`,c.setAttribute("id",`s${u}${r}`),c.onclick=()=>{a(t,e,u,r),document.getElementById(`Com${u}${r}`).innerHTML="*",null!=n.grid[u][r].ship?c.setAttribute("class","ship"):(c.innerHTML="*",c.setAttribute("class","pressed")),c.onclick=null},o.appendChild(c),i.appendChild(o)})),r.appendChild(i)})),r}(t,e)))},n.appendChild(u),n.appendChild(i),n.appendChild(c),n.appendChild(l),n.appendChild(s),n.appendChild(r),n.appendChild(f)}var y=function(t,e){m(t,e),console.log("called")};n(3);const v=[i({name:"carrier",length:5}),i({name:"battleship",length:4}),i({name:"submarine",length:3}),i({name:"destroyer",length:3}),i({name:"patrolBoat",length:2})],g=c({id:0,name:"Player",ships:v}),j=c({id:1,name:"Evil machine",ships:v});l(g,j),y(g,j)}]);