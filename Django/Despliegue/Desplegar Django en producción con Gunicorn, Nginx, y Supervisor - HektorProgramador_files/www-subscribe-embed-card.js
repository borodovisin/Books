(function(){var k=this;function l(a,b){a=a.split(".");var c=k;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]?c=c[d]:c=c[d]={}:c[d]=b}
function n(a){a=a.split(".");for(var b=k,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function p(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function q(a){return"string"==typeof a}
;var aa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function v(a,b){return a<b?-1:a>b?1:0}
;var ba=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(q(a))return q(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ca=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=q(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var m=g[h];
b.call(c,m,h,a)&&(e[f++]=m)}return e};
function fa(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c],e=p(d);if("array"==e||"object"==e&&"number"==typeof d.length){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function ga(a){if(a.classList)return a.classList;a=a.className;return q(a)&&a.match(/\S+/g)||[]}
function ha(a,b){a.classList?b=a.classList.contains(b):(a=ga(a),b=0<=ba(a,b));return b}
function ia(a,b){a.classList?a.classList.add(b):ha(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function ja(a,b){a.classList?a.classList.remove(b):ha(a,b)&&(a.className=ca(ga(a),function(a){return a!=b}).join(" "))}
;var ka="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function la(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ka.length;f++)c=ka[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var w;a:{var ma=k.navigator;if(ma){var na=ma.userAgent;if(na){w=na;break a}}w=""};function x(a,b){this.b=a;this.a=b}
x.prototype.ceil=function(){this.b=Math.ceil(this.b);this.a=Math.ceil(this.a);return this};
x.prototype.floor=function(){this.b=Math.floor(this.b);this.a=Math.floor(this.a);return this};
x.prototype.round=function(){this.b=Math.round(this.b);this.a=Math.round(this.a);return this};function oa(a,b){var c=pa;Object.prototype.hasOwnProperty.call(c,a)||(c[a]=b(a))}
;var qa=-1!=w.indexOf("Opera"),y=-1!=w.indexOf("Trident")||-1!=w.indexOf("MSIE"),ra=-1!=w.indexOf("Edge"),z=-1!=w.indexOf("Gecko")&&!(-1!=w.toLowerCase().indexOf("webkit")&&-1==w.indexOf("Edge"))&&!(-1!=w.indexOf("Trident")||-1!=w.indexOf("MSIE"))&&-1==w.indexOf("Edge"),sa=-1!=w.toLowerCase().indexOf("webkit")&&-1==w.indexOf("Edge");function ta(){var a=k.document;return a?a.documentMode:void 0}
var A;a:{var B="",C=function(){var a=w;if(z)return/rv\:([^\);]+)(\)|;)/.exec(a);if(ra)return/Edge\/([\d\.]+)/.exec(a);if(y)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(sa)return/WebKit\/(\S+)/.exec(a);if(qa)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
C&&(B=C?C[1]:"");if(y){var D=ta();if(null!=D&&D>parseFloat(B)){A=String(D);break a}}A=B}var ua=A,pa={};
function va(a){oa(a,function(){for(var b=0,c=aa(String(ua)).split("."),d=aa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=v(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||v(0==g[2].length,0==h[2].length)||v(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}
var wa;var xa=k.document;wa=xa&&y?ta()||("CSS1Compat"==xa.compatMode?parseInt(ua,10):5):void 0;var G;if(!(G=!z&&!y)){var ya;if(ya=y)ya=9<=Number(wa);G=ya}G||z&&va("1.9.1");y&&va("9");function za(){var a=document;return q("yt-subscribe-card")?a.getElementById("yt-subscribe-card"):"yt-subscribe-card"}
;function Aa(a){var b=a.offsetWidth,c=a.offsetHeight,d=sa&&!b&&!c;if((void 0===b||d)&&a.getBoundingClientRect){var e;a:{try{e=a.getBoundingClientRect()}catch(f){e={left:0,top:0,right:0,bottom:0};break a}y&&a.ownerDocument.body&&(a=a.ownerDocument,e.left-=a.documentElement.clientLeft+a.body.clientLeft,e.top-=a.documentElement.clientTop+a.body.clientTop)}return new x(e.right-e.left,e.bottom-e.top)}return new x(b,c)}
;var H=window,I=document,Ba=H.location;function Ca(){}
var Da=/\[native code\]/;function J(a,b,c){return a[b]=a[b]||c}
function Ea(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}
function Fa(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function K(){var a;if((a=Object.create)&&Da.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var L=J(H,"gapi",{});var N;N=J(H,"___jsl",K());J(N,"I",0);J(N,"hel",10);function Ga(){var a=Ba.href,b;if(N.dpo)b=N.h;else{b=N.h;var c=/([#].*&|[#])jsh=([^&#]*)/g,d=/([?#].*&|[?#])jsh=([^&#]*)/g;if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function Ha(a){var b=J(N,"PQ",[]);N.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function Ia(a){return J(J(N,"H",K()),a,K())}
;var O=J(N,"perf",K());J(O,"g",K());var Ka=J(O,"i",K());J(O,"r",[]);K();K();function P(a,b,c){b&&0<b.length&&(b=La(b),c&&0<c.length&&(b+="___"+La(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=J(Ka,"_p",K()),J(b,c,K())[a]=(new Date).getTime(),b=O.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function La(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")}
;var Ma=K(),Q=[];function R(a){throw Error("Bad hint"+(a?": "+a:""));}
;Q.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?N[b]=J(N,b,[]).concat(c):J(N,b,c)}if(b=a.u)a=J(N,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);var Na=/^(\/[a-zA-Z0-9_\-]+)+$/,Oa=/^[a-zA-Z0-9\-_\.,!]+$/,Pa=/^gapi\.loaded_[0-9]+$/,Qa=/^[a-zA-Z0-9,._-]+$/;function Ra(a,b,c,d){var e=a.split(";"),f=e.shift(),g=Ma[f],h=null;g?h=g(e,b,c,d):R("no hint processor for: "+f);h||R("failed to generate load url");b=h;c=b.match(Sa);(d=b.match(Ta))&&1===d.length&&Ua.test(b)&&c&&1===c.length||R("failed sanity: "+a);return h}
function Va(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=Wa(a);Pa.test(c)||R("invalid_callback");b=Xa(b);d=d&&d.length?Xa(d):null;return[encodeURIComponent(a.j).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.c?"/am="+e(a.c):"",a.g?"/rs="+e(a.g):"",a.i?"/t="+e(a.i):"","/cb=",e(c)].join("")}
function Wa(a){"/"!==a.charAt(0)&&R("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))R("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");Na.test(b)||R("invalid_prefix");c=S(a,"k",!0);d=S(a,"am");e=S(a,"rs");a=S(a,"t");return{j:b,version:c,
c:d,g:e,i:a}}
function Xa(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");Qa.test(e)&&b.push(e)}return b.join(",")}
function S(a,b,c){a=a[b];!a&&c&&R("missing: "+b);if(a){if(Oa.test(a))return a;R("invalid: "+b)}return null}
var Ua=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Ta=/\/cb=/g,Sa=/\/\//g;function Ya(){var a=Ga();if(!a)throw Error("Bad hint");return a}
Ma.m=function(a,b,c,d){(a=a[0])||R("missing_hint");return"https://apis.google.com"+Va(a,b,c,d)};var T=decodeURI("%73cript");function Za(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&0>Ea.call(b,e)&&c.push(e)}return c}
function $a(a){"loading"!=I.readyState?ab(a):I.write("<"+T+' src="'+encodeURI(a)+'"></'+T+">")}
function ab(a){var b=I.createElement(T);b.setAttribute("src",a);b.async="true";(a=I.getElementsByTagName(T)[0])?a.parentNode.insertBefore(b,a):(I.head||I.body||I.documentElement).appendChild(b)}
function bb(a,b){var c=b&&b._c;if(c)for(var d=0;d<Q.length;d++){var e=Q[d][0],f=Q[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function cb(a,b,c){db(function(){var c;c=b===Ga()?J(L,"_",K()):K();c=J(Ia(b),"_",c);a(c)},c)}
function eb(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);bb(a,c);b=a?a.split(":"):[];var d=c.h||Ya(),e=J(N,"ah",K());if(e["::"]&&b.length){a=[];for(var f=null;f=b.shift();){var g=f.split("."),g=e[f]||e[g[1]&&"ns:"+g[0]||""]||d,h=a.length&&a[a.length-1]||null,m=h;h&&h.hint==g||(m={hint:g,f:[]},a.push(m));m.f.push(f)}var E=a.length;if(1<E){var F=c.callback;F&&(c.callback=function(){0==--E&&F()})}for(;b=a.shift();)fb(b.f,c,b.hint)}else fb(b||[],c,d)}
function fb(a,b,c){function d(a,b){if(Ja)return 0;H.clearTimeout(F);da.push.apply(da,r);var d=((L||{}).config||{}).update;d?d(f):f&&J(N,"cu",[]).push(f);if(b){P("me0",a,M);try{cb(b,c,E)}finally{P("me1",a,M)}}return 1}
a=Fa(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,m=b.onerror,E=void 0;"function"==typeof m&&(E=m);var F=null,Ja=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var m=J(Ia(c),"r",[]).sort(),da=J(Ia(c),"L",[]).sort(),M=[].concat(m);0<g&&(F=H.setTimeout(function(){Ja=!0;h()},g));
var r=Za(a,da);if(r.length){var r=Za(a,m),t=J(N,"CP",[]),u=t.length;t[u]=function(a){function b(){var a=t[u+1];a&&a()}
function c(b){t[u]=null;d(r,a)&&Ha(function(){e&&e();b()})}
if(!a)return 0;P("ml1",r,M);0<u&&t[u-1]?t[u]=function(){c(b)}:c(b)};
if(r.length){var ea="loaded_"+N.I++;L[ea]=function(a){t[u](a);L[ea]=null};
a=Ra(c,r,"gapi."+ea,m);m.push.apply(m,r);P("ml0",r,M);b.sync||H.___gapisync?$a(a):ab(a)}else t[u](Ca)}else d(r)&&e&&e()}
;function db(a,b){if(N.hee&&0<N.hel)try{return a()}catch(c){b&&b(c),N.hel--,eb("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
;L.load=function(a,b){return db(function(){return eb(a,b)})};var gb=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};l("yt.config_",gb);l("yt.tokens_",window.yt&&window.yt.tokens_||{});var hb=window.yt&&window.yt.msgs_||n("window.ytcfg.msgs")||{};l("yt.msgs_",hb);function ib(){return n("gapi.iframes.getContext")()}
function jb(){return n("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER")}
;function kb(a){try{var b=lb,c=jb();a.register("msg-hovercard-subscription",b,c)}catch(d){}}
function lb(a){if(a){a=!!a.isSubscribed;var b=za();a?ja(b,"subscribe"):ia(b,"subscribe");a?ia(b,"subscribed"):ja(b,"subscribed")}}
;var U;
function mb(){var a;a=za();var b;b:{b=9==a.nodeType?a:a.ownerDocument||a.document;if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,null))){b=b.display||b.getPropertyValue("display")||"";break b}b=""}if("none"!=(b||(a.currentStyle?a.currentStyle.display:null)||a.style&&a.style.display))a=Aa(a);else{b=a.style;var c=b.display,d=b.visibility,e=b.position;b.visibility="hidden";b.position="absolute";b.display="inline";a=Aa(a);b.display=c;b.position=e;b.visibility=d}a=
{width:a.b,height:a.a};ib().ready(a,null,void 0);a=jb();ib().addOnOpenerHandler(kb,null,a)}
U="function"==p(mb)?{callback:mb}:mb||{};
if(U.gapiHintOverride||"GAPI_HINT_OVERRIDE"in gb&&gb.GAPI_HINT_OVERRIDE){var nb;var V=document.location.href;if(-1!=V.indexOf("?")){var V=(V||"").split("#")[0],ob=V.split("?",2),W=1<ob.length?ob[1]:ob[0];"?"==W.charAt(0)&&(W=W.substr(1));for(var pb=W.split("&"),X={},qb=0,rb=pb.length;qb<rb;qb++){var Y=pb[qb].split("=");if(1==Y.length&&Y[0]||2==Y.length){var Z=decodeURIComponent((Y[0]||"").replace(/\+/g," ")),sb=decodeURIComponent((Y[1]||"").replace(/\+/g," "));Z in X?"array"==p(X[Z])?fa(X[Z],sb):
X[Z]=[X[Z],sb]:X[Z]=sb}}nb=X}else nb={};var tb=nb.gapi_jsh;tb&&la(U,{_c:{jsl:{h:tb}}})}eb("gapi.iframes:gapi.iframes.style.common",U);})();
