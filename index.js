// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).itermmeanabs=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function i(e){return"number"==typeof e}function t(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function n(e,r,i){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=i?e+t(a):t(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,t,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,s=parseInt(t,10),!isFinite(s)){if(!i(t))throw new Error("invalid integer. Value: "+t);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(t=(-s).toString(r),e.precision&&(t=n(t,e.precision,e.padRight)),t="-"+t):(t=s.toString(r),s||e.precision?e.precision&&(t=n(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===o.call(e.specifier)?o.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(e){return"string"==typeof e}var p=Math.abs,l=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=f.call(t,y,"$1e"),t=f.call(t,b,"e"),t=f.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=f.call(t,g,"e+0$1"),t=f.call(t,d,"e-0$1"),e.alternate&&(t=f.call(t,h,"$1."),t=f.call(t,w,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===u.call(e.specifier)?u.call(t):l.call(t)}function E(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function x(e,r,i){var t=r-e.length;return t<0?e:e=i?e+E(t):E(t)+e}var k=String.fromCharCode,S=isNaN,I=Array.isArray;function V(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function F(e){var r,i,t,a,o,p,l,u,f;if(!I(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(p="",l=1,u=0;u<e.length;u++)if(c(t=e[u]))p+=t;else{if(r=void 0!==t.precision,!(t=V(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),i=t.flags,f=0;f<i.length;f++)switch(a=i.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,S(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,S(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=s(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!S(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=S(o)?String(t.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=n(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=x(t.arg,t.width,t.padRight)),p+=t.arg||"",l+=1}return p}var $=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function T(e){var r,i,t,n;for(i=[],n=0,t=$.exec(e);t;)(r=e.slice(n,$.lastIndex-t[0].length)).length&&i.push(r),i.push(A(t)),n=$.lastIndex,t=$.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function j(e){return"string"==typeof e}function C(e){var r,i,t;if(!j(e))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=T(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return F.apply(null,i)}var R,_=Object.prototype,N=_.toString,Z=_.__defineGetter__,O=_.__defineSetter__,W=_.__lookupGetter__,L=_.__lookupSetter__;R=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,i){var t,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===N.call(e))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===N.call(i))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((n="value"in i)&&(W.call(e,r)||L.call(e,r)?(t=e.__proto__,e.__proto__=_,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),a="get"in i,o="set"in i,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Z&&Z.call(e,r,i.get),o&&O&&O.call(e,r,i.set),e};var P=R;function G(e,r,i){P(e,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}var U=/./;function M(e){return"boolean"==typeof e}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function B(){return X&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var K=Object.prototype.hasOwnProperty;var Y,q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"";Y=B()?function(e){var r,i,t,n,a;if(null==e)return z.call(e);i=e[D],a=D,r=null!=(n=e)&&K.call(n,a);try{e[D]=void 0}catch(r){return z.call(e)}return t=z.call(e),r?e[D]=i:delete e[D],t}:function(e){return z.call(e)};var H=Y,J=Boolean,Q=Boolean.prototype.toString;var ee=B();function re(e){return"object"==typeof e&&(e instanceof J||(ee?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===H(e)))}function ie(e){return M(e)||re(e)}function te(e){return"number"==typeof e}function ne(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function ae(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+ne(n):ne(n)+e,t&&(e="-"+e)),e}G(ie,"isPrimitive",M),G(ie,"isObject",re);var oe=String.prototype.toLowerCase,se=String.prototype.toUpperCase;function ce(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!te(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=ae(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=ae(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===se.call(e.specifier)?se.call(i):oe.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function pe(e){return"string"==typeof e}var le=Math.abs,ue=String.prototype.toLowerCase,fe=String.prototype.toUpperCase,ge=String.prototype.replace,de=/e\+(\d)$/,he=/e-(\d)$/,we=/^(\d+)$/,ve=/^(\d+)e/,be=/\.0$/,ye=/\.0*e/,me=/(\..*[^0])0*e/;function Ee(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!te(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":le(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=ge.call(i,me,"$1e"),i=ge.call(i,ye,"e"),i=ge.call(i,be,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=ge.call(i,de,"e+0$1"),i=ge.call(i,he,"e-0$1"),e.alternate&&(i=ge.call(i,we,"$1."),i=ge.call(i,ve,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===fe.call(e.specifier)?fe.call(i):ue.call(i)}function xe(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function ke(e,r,i){var t=r-e.length;return t<0?e:e=i?e+xe(t):xe(t)+e}var Se=String.fromCharCode,Ie=isNaN,Ve=Array.isArray;function Fe(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function $e(e){var r,i,t,n,a,o,s,c,p;if(!Ve(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(pe(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=Fe(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,Ie(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,Ie(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=ce(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!Ie(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Ie(a)?String(t.arg):Se(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=Ee(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=ae(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=ke(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var Ae=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Te(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function je(e){var r,i,t,n;for(i=[],n=0,t=Ae.exec(e);t;)(r=e.slice(n,Ae.lastIndex-t[0].length)).length&&i.push(r),i.push(Te(t)),n=Ae.lastIndex,t=Ae.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function Ce(e){return"string"==typeof e}function Re(e){var r,i,t;if(!Ce(e))throw new TypeError(Re("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=je(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return $e.apply(null,i)}function _e(){return new Function("return this;")()}var Ne="object"==typeof self?self:null,Ze="object"==typeof window?window:null,Oe="object"==typeof global?global:null,We="object"==typeof globalThis?globalThis:null;var Le=function(e){if(arguments.length){if(!M(e))throw new TypeError(Re("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return _e()}if(We)return We;if(Ne)return Ne;if(Ze)return Ze;if(Oe)return Oe;throw new Error("unexpected error. Unable to resolve global object.")}(),Pe=Le.document&&Le.document.childNodes,Ge=Int8Array;function Ue(){return/^\s*function\s*([^(]*)/i}var Me,Xe=/^\s*function\s*([^(]*)/i;G(Ue,"REGEXP",Xe),Me=Array.isArray?Array.isArray:function(e){return"[object Array]"===H(e)};var Be=Me;function ze(e){return"number"==typeof e}function Ke(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function Ye(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+Ke(n):Ke(n)+e,t&&(e="-"+e)),e}var qe=String.prototype.toLowerCase,De=String.prototype.toUpperCase;function He(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!ze(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=Ye(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=Ye(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===De.call(e.specifier)?De.call(i):qe.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function Je(e){return"string"==typeof e}var Qe=Math.abs,er=String.prototype.toLowerCase,rr=String.prototype.toUpperCase,ir=String.prototype.replace,tr=/e\+(\d)$/,nr=/e-(\d)$/,ar=/^(\d+)$/,or=/^(\d+)e/,sr=/\.0$/,cr=/\.0*e/,pr=/(\..*[^0])0*e/;function lr(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!ze(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":Qe(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=ir.call(i,pr,"$1e"),i=ir.call(i,cr,"e"),i=ir.call(i,sr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=ir.call(i,tr,"e+0$1"),i=ir.call(i,nr,"e-0$1"),e.alternate&&(i=ir.call(i,ar,"$1."),i=ir.call(i,or,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===rr.call(e.specifier)?rr.call(i):er.call(i)}function ur(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function fr(e,r,i){var t=r-e.length;return t<0?e:e=i?e+ur(t):ur(t)+e}var gr=String.fromCharCode,dr=isNaN,hr=Array.isArray;function wr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function vr(e){var r,i,t,n,a,o,s,c,p;if(!hr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(Je(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=wr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,dr(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,dr(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=He(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!dr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=dr(a)?String(t.arg):gr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=lr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Ye(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=fr(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var br=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function yr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function mr(e){var r,i,t,n;for(i=[],n=0,t=br.exec(e);t;)(r=e.slice(n,br.lastIndex-t[0].length)).length&&i.push(r),i.push(yr(t)),n=br.lastIndex,t=br.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function Er(e){return"string"==typeof e}function xr(e){var r,i,t;if(!Er(e))throw new TypeError(xr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=mr(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return vr.apply(null,i)}function kr(e){return null!==e&&"object"==typeof e}var Sr=function(e){if("function"!=typeof e)throw new TypeError(xr("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var i,t;if(!Be(r))return!1;if(0===(i=r.length))return!1;for(t=0;t<i;t++)if(!1===e(r[t]))return!1;return!0}}(kr);function Ir(e){var r,i,t,n;if(("Object"===(i=H(e).slice(8,-1))||"Error"===i)&&e.constructor){if("string"==typeof(t=e.constructor).name)return t.name;if(r=Xe.exec(t.toString()))return r[1]}return kr(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":i}G(kr,"isObjectLikeArray",Sr);var Vr="function"==typeof U||"object"==typeof Ge||"function"==typeof Pe?function(e){return Ir(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?Ir(e).toLowerCase():r};function Fr(e){return"function"===Vr(e)}function $r(e){return"number"==typeof e}var Ar=Number,Tr=Ar.prototype.toString;var jr=B();function Cr(e){return"object"==typeof e&&(e instanceof Ar||(jr?function(e){try{return Tr.call(e),!0}catch(e){return!1}}(e):"[object Number]"===H(e)))}function Rr(e){return $r(e)||Cr(e)}G(Rr,"isPrimitive",$r),G(Rr,"isObject",Cr);var _r=Number.POSITIVE_INFINITY,Nr=Ar.NEGATIVE_INFINITY,Zr=Math.floor;function Or(e){return e<_r&&e>Nr&&Zr(r=e)===r;var r}function Wr(e){return $r(e)&&Or(e)}function Lr(e){return Cr(e)&&Or(e.valueOf())}function Pr(e){return Wr(e)||Lr(e)}function Gr(e){return Wr(e)&&e>0}function Ur(e){return Lr(e)&&e.valueOf()>0}function Mr(e){return Gr(e)||Ur(e)}G(Pr,"isPrimitive",Wr),G(Pr,"isObject",Lr),G(Mr,"isPrimitive",Gr),G(Mr,"isObject",Ur);var Xr=Object.prototype.hasOwnProperty;var Br,zr,Kr="function"==typeof q&&"symbol"==typeof q("foo")&&(zr="iterator",null!=(Br=q)&&Xr.call(Br,zr))&&"symbol"==typeof q.iterator?Symbol.iterator:null;function Yr(e){return Math.abs(e)}function qr(e){return e!=e}var Dr="function"==typeof Float64Array;var Hr="function"==typeof Float64Array?Float64Array:null;var Jr,Qr="function"==typeof Float64Array?Float64Array:void 0;Jr=function(){var e,r;if("function"!=typeof Hr)return!1;try{e=function(e){return Dr&&e instanceof Float64Array||"[object Float64Array]"===H(e)}(r=new Hr([1,3.14,-3.14,NaN]))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?Qr:function(){throw new Error("not implemented")};var ei=Jr;function ri(e){return"number"==typeof e}function ii(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function ti(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+ii(n):ii(n)+e,t&&(e="-"+e)),e}var ni=String.prototype.toLowerCase,ai=String.prototype.toUpperCase;function oi(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!ri(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=ti(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=ti(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===ai.call(e.specifier)?ai.call(i):ni.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function si(e){return"string"==typeof e}var ci=Math.abs,pi=String.prototype.toLowerCase,li=String.prototype.toUpperCase,ui=String.prototype.replace,fi=/e\+(\d)$/,gi=/e-(\d)$/,di=/^(\d+)$/,hi=/^(\d+)e/,wi=/\.0$/,vi=/\.0*e/,bi=/(\..*[^0])0*e/;function yi(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!ri(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":ci(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=ui.call(i,bi,"$1e"),i=ui.call(i,vi,"e"),i=ui.call(i,wi,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=ui.call(i,fi,"e+0$1"),i=ui.call(i,gi,"e-0$1"),e.alternate&&(i=ui.call(i,di,"$1."),i=ui.call(i,hi,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===li.call(e.specifier)?li.call(i):pi.call(i)}function mi(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function Ei(e,r,i){var t=r-e.length;return t<0?e:e=i?e+mi(t):mi(t)+e}var xi=String.fromCharCode,ki=isNaN,Si=Array.isArray;function Ii(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Vi(e){var r,i,t,n,a,o,s,c,p;if(!Si(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(si(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=Ii(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,ki(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,ki(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=oi(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!ki(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=ki(a)?String(t.arg):xi(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=yi(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=ti(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Ei(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var Fi=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $i(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Ai(e){var r,i,t,n;for(i=[],n=0,t=Fi.exec(e);t;)(r=e.slice(n,Fi.lastIndex-t[0].length)).length&&i.push(r),i.push($i(t)),n=Fi.lastIndex,t=Fi.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function Ti(e){return"string"==typeof e}function ji(e){var r,i,t;if(!Ti(e))throw new TypeError(ji("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Ai(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return Vi.apply(null,i)}function Ci(e){var r,i,t,n,a;if(!Gr(e))throw new TypeError(ji("invalid argument. Must provide a positive integer. Value: `%s`.",e));return i=new ei(e),t=0,a=-1,n=0,function(o){var s;if(0===arguments.length)return 0===n?null:t;if(a=(a+1)%e,qr(o))n=e,t=NaN;else if(n<e)t+=(r=o-t)/(n+=1);else if(qr(i[a])){for(n=1,t=o,s=0;s<e;s++)if(s!==a){if(qr(i[s])){n=e,t=NaN;break}n+=1,r=i[s]-t,t+=r/n}}else!1===qr(t)&&(r=o-i[a],t+=r/e);return i[a]=o,t}}function Ri(e){return"number"==typeof e}function _i(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function Ni(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+_i(n):_i(n)+e,t&&(e="-"+e)),e}var Zi=String.prototype.toLowerCase,Oi=String.prototype.toUpperCase;function Wi(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!Ri(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=Ni(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=Ni(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===Oi.call(e.specifier)?Oi.call(i):Zi.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function Li(e){return"string"==typeof e}var Pi=Math.abs,Gi=String.prototype.toLowerCase,Ui=String.prototype.toUpperCase,Mi=String.prototype.replace,Xi=/e\+(\d)$/,Bi=/e-(\d)$/,zi=/^(\d+)$/,Ki=/^(\d+)e/,Yi=/\.0$/,qi=/\.0*e/,Di=/(\..*[^0])0*e/;function Hi(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!Ri(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":Pi(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=Mi.call(i,Di,"$1e"),i=Mi.call(i,qi,"e"),i=Mi.call(i,Yi,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=Mi.call(i,Xi,"e+0$1"),i=Mi.call(i,Bi,"e-0$1"),e.alternate&&(i=Mi.call(i,zi,"$1."),i=Mi.call(i,Ki,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===Ui.call(e.specifier)?Ui.call(i):Gi.call(i)}function Ji(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function Qi(e,r,i){var t=r-e.length;return t<0?e:e=i?e+Ji(t):Ji(t)+e}var et=String.fromCharCode,rt=isNaN,it=Array.isArray;function tt(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function nt(e){var r,i,t,n,a,o,s,c,p;if(!it(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(Li(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=tt(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,rt(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,rt(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=Wi(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!rt(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=rt(a)?String(t.arg):et(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=Hi(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Ni(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Qi(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var at=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ot(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function st(e){var r,i,t,n;for(i=[],n=0,t=at.exec(e);t;)(r=e.slice(n,at.lastIndex-t[0].length)).length&&i.push(r),i.push(ot(t)),n=at.lastIndex,t=at.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function ct(e){return"string"==typeof e}function pt(e){var r,i,t;if(!ct(e))throw new TypeError(pt("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=st(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return nt.apply(null,i)}function lt(e){var r;if(!Gr(e))throw new TypeError(pt("invalid argument. Must provide a positive integer. Value: `%s`.",e));return r=Ci(e),function(e){if(0===arguments.length)return r();return r(Yr(e))}}function ut(){var e,r=arguments,i=r[0],t="https://stdlib.io/e/"+i+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}return function e(r,i){var t,n,a;if(!function(e){var r=typeof e;return null!==e&&("object"===r||"function"===r)&&Fr(e.next)}(r))throw new TypeError(ut("1Kz3v,IA",r));if(!Gr(i))throw new TypeError(ut("1Kz45,IB",i));return a=lt(i),G(t={},"next",(function(){var e;if(n)return{done:!0};if((e=r.next()).done)return n=!0,{done:!0};e="number"==typeof e.value?a(e.value):a(NaN);return{value:e,done:!1}})),G(t,"return",(function(e){if(n=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),Kr&&Fr(r[Kr])&&G(t,Kr,(function(){return e(r[Kr](),i)})),t}}));
//# sourceMappingURL=index.js.map
