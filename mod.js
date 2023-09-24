// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function i(e){return"number"==typeof e}function t(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function n(e,r,i){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=i?e+t(a):t(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,t,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,s=parseInt(t,10),!isFinite(s)){if(!i(t))throw new Error("invalid integer. Value: "+t);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(t=(-s).toString(r),e.precision&&(t=n(t,e.precision,e.padRight)),t="-"+t):(t=s.toString(r),s||e.precision?e.precision&&(t=n(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===o.call(e.specifier)?o.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(e){return"string"==typeof e}var p=Math.abs,l=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=f.call(t,y,"$1e"),t=f.call(t,b,"e"),t=f.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=f.call(t,g,"e+0$1"),t=f.call(t,d,"e-0$1"),e.alternate&&(t=f.call(t,h,"$1."),t=f.call(t,w,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===u.call(e.specifier)?u.call(t):l.call(t)}function E(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function x(e,r,i){var t=r-e.length;return t<0?e:e=i?e+E(t):E(t)+e}var k=String.fromCharCode,S=isNaN,I=Array.isArray;function V(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function F(e){var r,i,t,a,o,p,l,u,f;if(!I(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(p="",l=1,u=0;u<e.length;u++)if(c(t=e[u]))p+=t;else{if(r=void 0!==t.precision,!(t=V(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),i=t.flags,f=0;f<i.length;f++)switch(a=i.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,S(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,S(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=s(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!S(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=S(o)?String(t.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=n(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=x(t.arg,t.width,t.padRight)),p+=t.arg||"",l+=1}return p}var $=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function T(e){var r,i,t,n;for(i=[],n=0,t=$.exec(e);t;)(r=e.slice(n,$.lastIndex-t[0].length)).length&&i.push(r),i.push(A(t)),n=$.lastIndex,t=$.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function j(e){return"string"==typeof e}function C(e){var r,i,t;if(!j(e))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=T(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return F.apply(null,i)}var R,_=Object.prototype,N=_.toString,Z=_.__defineGetter__,O=_.__defineSetter__,W=_.__lookupGetter__,L=_.__lookupSetter__;R=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,i){var t,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===N.call(e))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===N.call(i))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((n="value"in i)&&(W.call(e,r)||L.call(e,r)?(t=e.__proto__,e.__proto__=_,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),a="get"in i,o="set"in i,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Z&&Z.call(e,r,i.get),o&&O&&O.call(e,r,i.set),e};var P=R;function G(e,r,i){P(e,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}var U=/./;function M(e){return"boolean"==typeof e}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function B(){return X&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var K=Object.prototype.hasOwnProperty;var Y,q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"";Y=B()?function(e){var r,i,t,n,a;if(null==e)return z.call(e);i=e[D],a=D,r=null!=(n=e)&&K.call(n,a);try{e[D]=void 0}catch(r){return z.call(e)}return t=z.call(e),r?e[D]=i:delete e[D],t}:function(e){return z.call(e)};var H=Y,J=Boolean,Q=Boolean.prototype.toString;var ee=B();function re(e){return"object"==typeof e&&(e instanceof J||(ee?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===H(e)))}function ie(e){return M(e)||re(e)}function te(e){return"number"==typeof e}function ne(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function ae(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+ne(n):ne(n)+e,t&&(e="-"+e)),e}G(ie,"isPrimitive",M),G(ie,"isObject",re);var oe=String.prototype.toLowerCase,se=String.prototype.toUpperCase;function ce(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!te(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=ae(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=ae(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===se.call(e.specifier)?se.call(i):oe.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function pe(e){return"string"==typeof e}var le=Math.abs,ue=String.prototype.toLowerCase,fe=String.prototype.toUpperCase,ge=String.prototype.replace,de=/e\+(\d)$/,he=/e-(\d)$/,we=/^(\d+)$/,ve=/^(\d+)e/,be=/\.0$/,ye=/\.0*e/,me=/(\..*[^0])0*e/;function Ee(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!te(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":le(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=ge.call(i,me,"$1e"),i=ge.call(i,ye,"e"),i=ge.call(i,be,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=ge.call(i,de,"e+0$1"),i=ge.call(i,he,"e-0$1"),e.alternate&&(i=ge.call(i,we,"$1."),i=ge.call(i,ve,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===fe.call(e.specifier)?fe.call(i):ue.call(i)}function xe(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function ke(e,r,i){var t=r-e.length;return t<0?e:e=i?e+xe(t):xe(t)+e}var Se=String.fromCharCode,Ie=isNaN,Ve=Array.isArray;function Fe(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function $e(e){var r,i,t,n,a,o,s,c,p;if(!Ve(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(pe(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=Fe(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,Ie(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,Ie(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=ce(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!Ie(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Ie(a)?String(t.arg):Se(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=Ee(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=ae(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=ke(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var Ae=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Te(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function je(e){var r,i,t,n;for(i=[],n=0,t=Ae.exec(e);t;)(r=e.slice(n,Ae.lastIndex-t[0].length)).length&&i.push(r),i.push(Te(t)),n=Ae.lastIndex,t=Ae.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function Ce(e){return"string"==typeof e}function Re(e){var r,i,t;if(!Ce(e))throw new TypeError(Re("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=je(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return $e.apply(null,i)}function _e(){return new Function("return this;")()}var Ne="object"==typeof self?self:null,Ze="object"==typeof window?window:null,Oe="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},We="object"==typeof Oe?Oe:null,Le="object"==typeof globalThis?globalThis:null;var Pe=function(e){if(arguments.length){if(!M(e))throw new TypeError(Re("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return _e()}if(Le)return Le;if(Ne)return Ne;if(Ze)return Ze;if(We)return We;throw new Error("unexpected error. Unable to resolve global object.")}(),Ge=Pe.document&&Pe.document.childNodes,Ue=Int8Array;function Me(){return/^\s*function\s*([^(]*)/i}var Xe,Be=/^\s*function\s*([^(]*)/i;G(Me,"REGEXP",Be),Xe=Array.isArray?Array.isArray:function(e){return"[object Array]"===H(e)};var ze=Xe;function Ke(e){return"number"==typeof e}function Ye(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function qe(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+Ye(n):Ye(n)+e,t&&(e="-"+e)),e}var De=String.prototype.toLowerCase,He=String.prototype.toUpperCase;function Je(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!Ke(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=qe(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=qe(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===He.call(e.specifier)?He.call(i):De.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function Qe(e){return"string"==typeof e}var er=Math.abs,rr=String.prototype.toLowerCase,ir=String.prototype.toUpperCase,tr=String.prototype.replace,nr=/e\+(\d)$/,ar=/e-(\d)$/,or=/^(\d+)$/,sr=/^(\d+)e/,cr=/\.0$/,pr=/\.0*e/,lr=/(\..*[^0])0*e/;function ur(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!Ke(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":er(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=tr.call(i,lr,"$1e"),i=tr.call(i,pr,"e"),i=tr.call(i,cr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=tr.call(i,nr,"e+0$1"),i=tr.call(i,ar,"e-0$1"),e.alternate&&(i=tr.call(i,or,"$1."),i=tr.call(i,sr,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===ir.call(e.specifier)?ir.call(i):rr.call(i)}function fr(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function gr(e,r,i){var t=r-e.length;return t<0?e:e=i?e+fr(t):fr(t)+e}var dr=String.fromCharCode,hr=isNaN,wr=Array.isArray;function vr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function br(e){var r,i,t,n,a,o,s,c,p;if(!wr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(Qe(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=vr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,hr(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,hr(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=Je(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!hr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=hr(a)?String(t.arg):dr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=ur(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=qe(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=gr(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var yr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function mr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Er(e){var r,i,t,n;for(i=[],n=0,t=yr.exec(e);t;)(r=e.slice(n,yr.lastIndex-t[0].length)).length&&i.push(r),i.push(mr(t)),n=yr.lastIndex,t=yr.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function xr(e){return"string"==typeof e}function kr(e){var r,i,t;if(!xr(e))throw new TypeError(kr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Er(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return br.apply(null,i)}function Sr(e){return null!==e&&"object"==typeof e}var Ir=function(e){if("function"!=typeof e)throw new TypeError(kr("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var i,t;if(!ze(r))return!1;if(0===(i=r.length))return!1;for(t=0;t<i;t++)if(!1===e(r[t]))return!1;return!0}}(Sr);function Vr(e){var r,i,t,n;if(("Object"===(i=H(e).slice(8,-1))||"Error"===i)&&e.constructor){if("string"==typeof(t=e.constructor).name)return t.name;if(r=Be.exec(t.toString()))return r[1]}return Sr(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":i}G(Sr,"isObjectLikeArray",Ir);var Fr="function"==typeof U||"object"==typeof Ue||"function"==typeof Ge?function(e){return Vr(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?Vr(e).toLowerCase():r};function $r(e){return"function"===Fr(e)}function Ar(e){return"number"==typeof e}var Tr=Number,jr=Tr.prototype.toString;var Cr=B();function Rr(e){return"object"==typeof e&&(e instanceof Tr||(Cr?function(e){try{return jr.call(e),!0}catch(e){return!1}}(e):"[object Number]"===H(e)))}function _r(e){return Ar(e)||Rr(e)}G(_r,"isPrimitive",Ar),G(_r,"isObject",Rr);var Nr=Number.POSITIVE_INFINITY,Zr=Tr.NEGATIVE_INFINITY,Or=Math.floor;function Wr(e){return e<Nr&&e>Zr&&Or(r=e)===r;var r}function Lr(e){return Ar(e)&&Wr(e)}function Pr(e){return Rr(e)&&Wr(e.valueOf())}function Gr(e){return Lr(e)||Pr(e)}function Ur(e){return Lr(e)&&e>0}function Mr(e){return Pr(e)&&e.valueOf()>0}function Xr(e){return Ur(e)||Mr(e)}G(Gr,"isPrimitive",Lr),G(Gr,"isObject",Pr),G(Xr,"isPrimitive",Ur),G(Xr,"isObject",Mr);var Br=Object.prototype.hasOwnProperty;var zr,Kr,Yr="function"==typeof q&&"symbol"==typeof q("foo")&&(Kr="iterator",null!=(zr=q)&&Br.call(zr,Kr))&&"symbol"==typeof q.iterator?Symbol.iterator:null;function qr(e){return Math.abs(e)}function Dr(e){return e!=e}var Hr="function"==typeof Float64Array;var Jr="function"==typeof Float64Array?Float64Array:null;var Qr,ei="function"==typeof Float64Array?Float64Array:void 0;Qr=function(){var e,r;if("function"!=typeof Jr)return!1;try{e=function(e){return Hr&&e instanceof Float64Array||"[object Float64Array]"===H(e)}(r=new Jr([1,3.14,-3.14,NaN]))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?ei:function(){throw new Error("not implemented")};var ri=Qr;function ii(e){return"number"==typeof e}function ti(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function ni(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+ti(n):ti(n)+e,t&&(e="-"+e)),e}var ai=String.prototype.toLowerCase,oi=String.prototype.toUpperCase;function si(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!ii(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=ni(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=ni(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===oi.call(e.specifier)?oi.call(i):ai.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function ci(e){return"string"==typeof e}var pi=Math.abs,li=String.prototype.toLowerCase,ui=String.prototype.toUpperCase,fi=String.prototype.replace,gi=/e\+(\d)$/,di=/e-(\d)$/,hi=/^(\d+)$/,wi=/^(\d+)e/,vi=/\.0$/,bi=/\.0*e/,yi=/(\..*[^0])0*e/;function mi(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!ii(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":pi(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=fi.call(i,yi,"$1e"),i=fi.call(i,bi,"e"),i=fi.call(i,vi,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=fi.call(i,gi,"e+0$1"),i=fi.call(i,di,"e-0$1"),e.alternate&&(i=fi.call(i,hi,"$1."),i=fi.call(i,wi,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===ui.call(e.specifier)?ui.call(i):li.call(i)}function Ei(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function xi(e,r,i){var t=r-e.length;return t<0?e:e=i?e+Ei(t):Ei(t)+e}var ki=String.fromCharCode,Si=isNaN,Ii=Array.isArray;function Vi(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Fi(e){var r,i,t,n,a,o,s,c,p;if(!Ii(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(ci(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=Vi(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,Si(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,Si(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=si(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!Si(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Si(a)?String(t.arg):ki(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=mi(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=ni(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=xi(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var $i=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ai(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Ti(e){var r,i,t,n;for(i=[],n=0,t=$i.exec(e);t;)(r=e.slice(n,$i.lastIndex-t[0].length)).length&&i.push(r),i.push(Ai(t)),n=$i.lastIndex,t=$i.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function ji(e){return"string"==typeof e}function Ci(e){var r,i,t;if(!ji(e))throw new TypeError(Ci("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Ti(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return Fi.apply(null,i)}function Ri(e){var r,i,t,n,a;if(!Ur(e))throw new TypeError(Ci("invalid argument. Must provide a positive integer. Value: `%s`.",e));return i=new ri(e),t=0,a=-1,n=0,function(o){var s;if(0===arguments.length)return 0===n?null:t;if(a=(a+1)%e,Dr(o))n=e,t=NaN;else if(n<e)t+=(r=o-t)/(n+=1);else if(Dr(i[a])){for(n=1,t=o,s=0;s<e;s++)if(s!==a){if(Dr(i[s])){n=e,t=NaN;break}n+=1,r=i[s]-t,t+=r/n}}else!1===Dr(t)&&(r=o-i[a],t+=r/e);return i[a]=o,t}}function _i(e){return"number"==typeof e}function Ni(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function Zi(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+Ni(n):Ni(n)+e,t&&(e="-"+e)),e}var Oi=String.prototype.toLowerCase,Wi=String.prototype.toUpperCase;function Li(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!_i(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=Zi(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=Zi(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===Wi.call(e.specifier)?Wi.call(i):Oi.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function Pi(e){return"string"==typeof e}var Gi=Math.abs,Ui=String.prototype.toLowerCase,Mi=String.prototype.toUpperCase,Xi=String.prototype.replace,Bi=/e\+(\d)$/,zi=/e-(\d)$/,Ki=/^(\d+)$/,Yi=/^(\d+)e/,qi=/\.0$/,Di=/\.0*e/,Hi=/(\..*[^0])0*e/;function Ji(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!_i(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":Gi(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=Xi.call(i,Hi,"$1e"),i=Xi.call(i,Di,"e"),i=Xi.call(i,qi,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=Xi.call(i,Bi,"e+0$1"),i=Xi.call(i,zi,"e-0$1"),e.alternate&&(i=Xi.call(i,Ki,"$1."),i=Xi.call(i,Yi,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===Mi.call(e.specifier)?Mi.call(i):Ui.call(i)}function Qi(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function et(e,r,i){var t=r-e.length;return t<0?e:e=i?e+Qi(t):Qi(t)+e}var rt=String.fromCharCode,it=isNaN,tt=Array.isArray;function nt(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function at(e){var r,i,t,n,a,o,s,c,p;if(!tt(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(Pi(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=nt(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,it(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,it(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=Li(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!it(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=it(a)?String(t.arg):rt(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=Ji(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Zi(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=et(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var ot=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function st(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function ct(e){var r,i,t,n;for(i=[],n=0,t=ot.exec(e);t;)(r=e.slice(n,ot.lastIndex-t[0].length)).length&&i.push(r),i.push(st(t)),n=ot.lastIndex,t=ot.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function pt(e){return"string"==typeof e}function lt(e){var r,i,t;if(!pt(e))throw new TypeError(lt("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=ct(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return at.apply(null,i)}function ut(e){var r;if(!Ur(e))throw new TypeError(lt("invalid argument. Must provide a positive integer. Value: `%s`.",e));return r=Ri(e),function(e){if(0===arguments.length)return r();return r(qr(e))}}function ft(){var e,r=arguments,i=r[0],t="https://stdlib.io/e/"+i+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}function gt(e,r){var i,t,n;if(!function(e){var r=typeof e;return null!==e&&("object"===r||"function"===r)&&$r(e.next)}(e))throw new TypeError(ft("1Kz3v,IA",e));if(!Ur(r))throw new TypeError(ft("1Kz45,IB",r));return n=ut(r),G(i={},"next",(function(){var r;if(t)return{done:!0};if((r=e.next()).done)return t=!0,{done:!0};r="number"==typeof r.value?n(r.value):n(NaN);return{value:r,done:!1}})),G(i,"return",(function(e){if(t=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),Yr&&$r(e[Yr])&&G(i,Yr,(function(){return gt(e[Yr](),r)})),i}export{gt as default};
//# sourceMappingURL=mod.js.map
