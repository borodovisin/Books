(function(){var m,n=this;function q(a){a=a.split(".");for(var b=n,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function aa(){}
function ba(a){a.D=function(){return a.aa?a.aa:a.aa=new a}}
function ca(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function da(a){var b=ca(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function r(a){return"string"==typeof a}
function ea(a){return"function"==ca(a)}
function fa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var ia="closure_uid_"+(1E9*Math.random()>>>0),ja=0;function ka(a,b,c){return a.call.apply(a.bind,arguments)}
function la(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function t(a,b,c){t=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ka:la;return t.apply(null,arguments)}
function ma(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var na=Date.now||function(){return+new Date};
function u(a,b){a=a.split(".");var c=n;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]?c=c[d]:c=c[d]={}:c[d]=b}
function v(a,b){function c(){}
c.prototype=b.prototype;a.T=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ka=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;var oa;var pa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function qa(a,b){return a<b?-1:a>b?1:0}
;var sa=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(r(a))return r(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},w=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ta=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=r(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];
b.call(c,k,h,a)&&(e[f++]=k)}return e},ua=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
function va(a,b){a:{for(var c=a.length,d=r(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:r(a)?a.charAt(b):a[b]}
function wa(a,b){return 0<=sa(a,b)}
function xa(a){return Array.prototype.concat.apply(Array.prototype,arguments)}
function ya(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function za(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(da(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function Aa(a,b,c,d){return Array.prototype.splice.apply(a,Ba(arguments,1))}
function Ba(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
;function Ca(a){if(a.classList)return a.classList;a=a.className;return r(a)&&a.match(/\S+/g)||[]}
function Da(a,b){return a.classList?a.classList.contains(b):wa(Ca(a),b)}
function Ea(a,b){a.classList?a.classList.add(b):Da(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function Fa(a,b){a.classList?a.classList.remove(b):Da(a,b)&&(a.className=ta(Ca(a),function(a){return a!=b}).join(" "))}
function Ga(a,b,c){c?Ea(a,b):Fa(a,b)}
;function Ha(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Ia(a){var b=Ja,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
var Ka="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function La(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ka.length;f++)c=Ka[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var Ma;a:{var Na=n.navigator;if(Na){var Oa=Na.userAgent;if(Oa){Ma=Oa;break a}}Ma=""}function x(a){return-1!=Ma.indexOf(a)}
;function Pa(){}
;function y(a,b){this.i=void 0!==a?a:0;this.j=void 0!==b?b:0}
y.prototype.equals=function(a){return a instanceof y&&(this==a?!0:this&&a?this.i==a.i&&this.j==a.j:!1)};
y.prototype.ceil=function(){this.i=Math.ceil(this.i);this.j=Math.ceil(this.j);return this};
y.prototype.floor=function(){this.i=Math.floor(this.i);this.j=Math.floor(this.j);return this};
y.prototype.round=function(){this.i=Math.round(this.i);this.j=Math.round(this.j);return this};function Qa(a,b){this.width=a;this.height=b}
m=Qa.prototype;m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ra(a,b){var c=Sa;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var Ta=x("Opera"),z=x("Trident")||x("MSIE"),Ua=x("Edge"),Va=x("Gecko")&&!(-1!=Ma.toLowerCase().indexOf("webkit")&&!x("Edge"))&&!(x("Trident")||x("MSIE"))&&!x("Edge"),Wa=-1!=Ma.toLowerCase().indexOf("webkit")&&!x("Edge"),Xa=x("Windows");function Ya(){var a=n.document;return a?a.documentMode:void 0}
var Za;a:{var $a="",ab=function(){var a=Ma;if(Va)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Ua)return/Edge\/([\d\.]+)/.exec(a);if(z)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Wa)return/WebKit\/(\S+)/.exec(a);if(Ta)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
ab&&($a=ab?ab[1]:"");if(z){var bb=Ya();if(null!=bb&&bb>parseFloat($a)){Za=String(bb);break a}}Za=$a}var cb=Za,Sa={};
function db(a){return Ra(a,function(){for(var b=0,c=pa(String(cb)).split("."),d=pa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=qa(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||qa(0==g[2].length,0==h[2].length)||qa(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}
var eb;var fb=n.document;eb=fb&&z?Ya()||("CSS1Compat"==fb.compatMode?parseInt(cb,10):5):void 0;!Va&&!z||z&&9<=Number(eb)||Va&&db("1.9.1");var gb=z&&!db("9");function ib(a){return a?new jb(kb(a)):oa||(oa=new jb)}
function A(a){var b=document;return r(a)?b.getElementById(a):a}
function lb(a){var b=document;return b.querySelectorAll&&b.querySelector?b.querySelectorAll("."+a):mb(a,void 0)}
function mb(a,b){var c,d,e;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector&&a)return b.querySelectorAll(""+(a?"."+a:""));if(a&&b.getElementsByClassName){var f=b.getElementsByClassName(a);return f}f=b.getElementsByTagName("*");if(a){e={};for(c=d=0;b=f[c];c++){var g=b.className;"function"==typeof g.split&&wa(g.split(/\s+/),a)&&(e[d++]=b)}e.length=d;return e}return f}
function nb(a){return"CSS1Compat"==a.compatMode}
function kb(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function ob(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else{for(var c;c=a.firstChild;)a.removeChild(c);a.appendChild(kb(a).createTextNode(String(b)))}}
var pb={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},qb={IMG:" ",BR:"\n"};function rb(a){if(gb&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];sb(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");gb||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function sb(a,b,c){if(!(a.nodeName in pb))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in qb)b.push(qb[a.nodeName]);else for(a=a.firstChild;a;)sb(a,b,c),a=a.nextSibling}
function tb(a){var b=ub.ma;return b?vb(a,function(a){return!b||r(a.className)&&wa(a.className.split(/\s+/),b)},!0,void 0):null}
function vb(a,b,c,d){c||(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function jb(a){this.b=a||n.document||document}
jb.prototype.getElementsByTagName=function(a,b){return(b||this.b).getElementsByTagName(String(a))};
jb.prototype.createElement=function(a){return this.b.createElement(String(a))};
jb.prototype.isElement=function(a){return fa(a)&&1==a.nodeType};function wb(a){n.setTimeout(function(){throw a;},0)}
var xb;
function yb(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!x("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=t(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!x("Trident")&&!x("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.Z;c.Z=null;a()}};
return function(a){d.next={Z:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){n.setTimeout(a,0)}}
;function zb(a,b,c){this.l=c;this.g=a;this.o=b;this.f=0;this.b=null}
zb.prototype.get=function(){var a;0<this.f?(this.f--,a=this.b,this.b=a.next,a.next=null):a=this.g();return a};function Ab(){this.f=this.b=null}
var Cb=new zb(function(){return new Bb},function(a){a.reset()},100);
Ab.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function Bb(){this.next=this.scope=this.b=null}
Bb.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
Bb.prototype.reset=function(){this.next=this.scope=this.b=null};function Db(a){Eb||Fb();Gb||(Eb(),Gb=!0);var b=Hb,c=Cb.get();c.set(a,void 0);b.f?b.f.next=c:b.b=c;b.f=c}
var Eb;function Fb(){var a=n.Promise;if(-1!=String(a).indexOf("[native code]")){var b=a.resolve(void 0);Eb=function(){b.then(Ib)}}else Eb=function(){var a=Ib;
!ea(n.setImmediate)||n.Window&&n.Window.prototype&&!x("Edge")&&n.Window.prototype.setImmediate==n.setImmediate?(xb||(xb=yb()),xb(a)):n.setImmediate(a)}}
var Gb=!1,Hb=new Ab;function Ib(){for(var a;a=Hb.remove();){try{a.b.call(a.scope)}catch(c){wb(c)}var b=Cb;b.o(a);b.f<b.l&&(b.f++,a.next=b.b,b.b=a)}Gb=!1}
;function Jb(){this.f=this.f;this.g=this.g}
Jb.prototype.f=!1;Jb.prototype.dispose=function(){this.f||(this.f=!0,this.R())};
Jb.prototype.R=function(){if(this.g)for(;this.g.length;)this.g.shift()()};function B(a){Jb.call(this);this.G=1;this.l=[];this.o=0;this.b=[];this.v={};this.wa=!!a}
v(B,Jb);m=B.prototype;m.subscribe=function(a,b,c){var d=this.v[a];d||(d=this.v[a]=[]);var e=this.G;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.G=e+3;d.push(e);return e};
m.unsubscribe=function(a,b,c){if(a=this.v[a]){var d=this.b;if(a=va(a,function(a){return d[a+1]==b&&d[a+2]==c}))return this.H(a)}return!1};
m.H=function(a){var b=this.b[a];if(b){var c=this.v[b];if(0!=this.o)this.l.push(a),this.b[a+1]=aa;else{if(c){var d=sa(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.b[a];delete this.b[a+1];delete this.b[a+2]}}return!!b};
m.L=function(a,b){var c=this.v[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.wa)for(e=0;e<c.length;e++){var g=c[e];Kb(this.b[g+1],this.b[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.o--,0<this.l.length&&0==this.o)for(;c=this.l.pop();)this.H(c)}}return 0!=e}return!1};
function Kb(a,b,c){Db(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.v[a];b&&(w(b,this.H,this),delete this.v[a])}else this.b.length=0,this.v={}};
function Lb(a,b){if(b)return(a=a.v[b])?a.length:0;b=0;for(var c in a.v)b+=Lb(a,c);return b}
m.R=function(){B.T.R.call(this);this.clear();this.l.length=0};var Mb=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};u("yt.config_",Mb);u("yt.tokens_",window.yt&&window.yt.tokens_||{});var Nb=window.yt&&window.yt.msgs_||q("window.ytcfg.msgs")||{};u("yt.msgs_",Nb);function Ob(a){var b=arguments;if(1<b.length){var c=b[0];Mb[c]=b[1]}else for(c in b=b[0],b)Mb[c]=b[c]}
function C(a,b){return a in Mb?Mb[a]:b}
function Pb(a,b){ea(a)&&(a=Qb(a));return window.setTimeout(a,b)}
function Qb(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){throw Rb(b),b;}}:a}
function Rb(a){var b=q("yt.logging.errors.log");b?b(a,void 0,void 0,void 0,void 0):(b=C("ERRORS",[]),b.push([a,void 0,void 0,void 0,void 0]),Ob("ERRORS",b))}
;function Sb(a){var b=void 0;isNaN(b)&&(b=void 0);var c=q("yt.scheduler.instance.addJob");c?c(a,1,b):void 0===b?a():Pb(a,b||0)}
;function D(a,b){this.version=a;this.args=b}
function Tb(a){if(!a.ia){var b={};a.call(b);a.ia=b.version}return a.ia}
function Ub(a,b){function c(){a.apply(this,b.args)}
if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");var d;try{d=Tb(a)}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");c.prototype=a.prototype;try{return new c}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
function E(a,b){this.topic=a;this.J=b}
E.prototype.toString=function(){return this.topic};var Wb=q("yt.pubsub2.instance_")||new B;B.prototype.subscribe=B.prototype.subscribe;B.prototype.unsubscribeByKey=B.prototype.H;B.prototype.publish=B.prototype.L;B.prototype.clear=B.prototype.clear;u("yt.pubsub2.instance_",Wb);var Xb=q("yt.pubsub2.subscribedKeys_")||{};u("yt.pubsub2.subscribedKeys_",Xb);var Yb=q("yt.pubsub2.topicToKeys_")||{};u("yt.pubsub2.topicToKeys_",Yb);var Zb=q("yt.pubsub2.isAsync_")||{};u("yt.pubsub2.isAsync_",Zb);u("yt.pubsub2.skipSubKey_",null);
function F(a,b){var c=$b();return c?c.publish.call(c,a.toString(),a,b):!1}
function bc(a,b,c){window.yt.pubsub2.skipSubKey_=a;F.call(null,b,c);window.yt.pubsub2.skipSubKey_=null}
function G(a,b,c){var d=$b();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,g){if(!window.yt.pubsub2.skipSubKey_||window.yt.pubsub2.skipSubKey_!=e){var f=function(){if(Xb[e])try{if(g&&a instanceof E&&a!=d)try{g=Ub(a.J,g)}catch(k){throw k.message="yt.pubsub2 cross-binary conversion error for "+a.toString()+": "+k.message,k;}b.call(c||window,g)}catch(k){Rb(k)}};
Zb[a.toString()]?q("yt.scheduler.instance")?Sb(f):Pb(f,0):f()}});
Xb[e]=!0;Yb[a.toString()]||(Yb[a.toString()]=[]);Yb[a.toString()].push(e);return e}
function cc(a){var b=$b();b&&("number"==typeof a&&(a=[a]),w(a,function(a){b.unsubscribeByKey(a);delete Xb[a]}))}
function $b(){return q("yt.pubsub2.instance_")}
;var H=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function dc(a){return a?decodeURI(a):a}
function ec(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function fc(a,b,c){if("array"==ca(b))for(var d=0;d<b.length;d++)fc(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function gc(a,b,c){for(c=c||0;c<b.length;c+=2)fc(b[c],b[c+1],a);return a}
function hc(a,b){for(var c in b)fc(c,b[c],a);return a}
function ic(a){a=hc([],a);a[0]="";return a.join("")}
function jc(a,b){return ec(2==arguments.length?gc([a],arguments[1],0):gc([a],arguments,1))}
;var kc={},lc=0;function mc(a){var b=new Image,c=""+lc++;kc[c]=b;b.onload=b.onerror=function(){delete kc[c]};
b.src=a}
;function nc(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?"array"==ca(b[f])?za(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function oc(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=nc(d[1]||""),e;for(e in b)d[e]=b[e];return ec(hc([a],d))+c}
;function pc(a){D.call(this,1,arguments);this.b=a}
v(pc,D);function I(a){D.call(this,1,arguments);this.b=a}
v(I,D);function qc(a,b,c,d){D.call(this,2,arguments);this.g=a;this.b=null===b?null:!!b;this.receivePostUpdates=null===c?null:!!c;this.f=null===d?null:!!d}
v(qc,D);function rc(a,b,c,d,e){D.call(this,2,arguments);this.f=a;this.b=b;this.l=c||null;this.g=d||null;this.source=e||null}
v(rc,D);function sc(a,b,c){D.call(this,1,arguments);this.b=a;this.f=b}
v(sc,D);function tc(a,b,c,d,e,f,g){D.call(this,1,arguments);this.f=a;this.o=b;this.b=c;this.G=d||null;this.l=e||null;this.g=f||null;this.source=g||null}
v(tc,D);
var uc=new E("subscription-batch-subscribe",pc),vc=new E("subscription-batch-unsubscribe",pc),wc=new E("subscription-pref-email",qc),xc=new E("subscription-subscribe",rc),yc=new E("subscription-subscribe-loading",I),zc=new E("subscription-subscribe-loaded",I),J=new E("subscription-subscribe-success",sc),Ac=new E("subscription-subscribe-external",rc),Bc=new E("subscription-unsubscribe",tc),Cc=new E("subscription-unsubscirbe-loading",I),Dc=new E("subscription-unsubscribe-loaded",I),K=new E("subscription-unsubscribe-success",I),
Ec=new E("subscription-external-unsubscribe",tc),Fc=new E("subscription-enable-ypc",I),Gc=new E("subscription-disable-ypc",I);var Hc=q("yt.pubsub.instance_")||new B;B.prototype.subscribe=B.prototype.subscribe;B.prototype.unsubscribeByKey=B.prototype.H;B.prototype.publish=B.prototype.L;B.prototype.clear=B.prototype.clear;u("yt.pubsub.instance_",Hc);var Ic=q("yt.pubsub.subscribedKeys_")||{};u("yt.pubsub.subscribedKeys_",Ic);var Jc=q("yt.pubsub.topicToKeys_")||{};u("yt.pubsub.topicToKeys_",Jc);var Kc=q("yt.pubsub.isSynchronous_")||{};u("yt.pubsub.isSynchronous_",Kc);var Lc=q("yt.pubsub.skipSubId_")||null;
u("yt.pubsub.skipSubId_",Lc);function Mc(a,b,c){var d=Nc();if(d){var e=d.subscribe(a,function(){if(!Lc||Lc!=e){var d=arguments,g;g=function(){Ic[e]&&b.apply(c||window,d)};
try{Kc[a]?g():Pb(g,0)}catch(h){Rb(h)}}},c);
Ic[e]=!0;Jc[a]||(Jc[a]=[]);Jc[a].push(e);return e}return 0}
function Oc(a){var b=Nc();b&&("number"==typeof a?a=[a]:"string"==typeof a&&(a=[parseInt(a,10)]),w(a,function(a){b.unsubscribeByKey(a);delete Ic[a]}))}
function Pc(a,b){var c=Nc();return c?c.publish.apply(c,arguments):!1}
function Nc(){return q("yt.pubsub.instance_")}
;function Qc(a){var b=document.location.protocol+"//"+document.domain+"/post_login",b=jc(b,"mode","subscribe"),b=jc("/signin?context=popup","next",b),b=jc(b,"feature","sub_button");if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=Mc("LOGGED_IN",function(b){Oc(C("LOGGED_IN_PUBSUB_KEY",void 0));Ob("LOGGED_IN",!0);a(b)});
Ob("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
u("yt.pubsub.publish",Pc);function Rc(a){return eval("("+a+")")}
;var Sc=null;"undefined"!=typeof XMLHttpRequest?Sc=function(){return new XMLHttpRequest}:"undefined"!=typeof ActiveXObject&&(Sc=function(){return new ActiveXObject("Microsoft.XMLHTTP")});function Tc(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Qb(b)(k)}
var k=Sc&&Sc();if(!("open"in k))return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;c=(c||"GET").toUpperCase();d=d||"";k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);f="POST"==c;if(e=Uc(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(f=!1);f&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);return k}
function Uc(a,b){b=b||{};var c;c||(c=window.location.href);var d=a.match(H)[1]||null,e=dc(a.match(H)[3]||null);d&&e?(d=c,c=a.match(H),d=d.match(H),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?dc(c.match(H)[3]||null)==e&&(Number(c.match(H)[4]||null)||null)==(Number(a.match(H)[4]||null)||null):!0;for(var f in Vc){if((e=d=C(Vc[f]))&&!(e=c)){var e=f,g=C("CORS_HEADER_WHITELIST")||{},h=dc(a.match(H)[3]||null);e=h?(g=g[h])?wa(g,e):!1:!0}e&&(b[f]=d)}return b}
function Wc(a,b){var c=C("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.Ma&&(!dc(a.match(H)[3]||null)||b.withCredentials||dc(a.match(H)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.B&&b.B[c])}
function Xc(a,b){var c=b.format||"JSON";b.Na&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=C("XSRF_FIELD_NAME",void 0),e=C("XSRF_TOKEN",void 0),f=b.ha;f&&(f[d]&&delete f[d],a=oc(a,f||{}));var g=b.postBody||"",f=b.B;Wc(a,b)&&(f||(f={}),f[d]=e);f&&r(g)&&(d=nc(g),La(d,f),g=b.Ba&&"JSON"==b.Ba?JSON.stringify(d):ic(d));var h=!1,k,l=Tc(a,function(a){if(!h){h=!0;k&&window.clearTimeout(k);var d;a:switch(a&&"status"in a?a.status:
-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:d=!0;break a;default:d=!1}var e=null;if(d||400<=a.status&&500>a.status)e=Yc(c,a,b.La);if(d)a:if(C("EXPERIMENT_FLAGS",{}).ajax_204_success&&204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||n;d?b.F&&b.F.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.S&&b.S.call(f,a,e)}},b.method,g,b.headers,b.responseType,b.withCredentials);
b.za&&0<b.timeout&&(k=Pb(function(){h||(h=!0,l.abort(),window.clearTimeout(k),b.za.call(b.context||n,l))},b.timeout))}
function Yc(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=Rc(a));break;case "XML":if(b=(b=b.responseXML)?Zc(b):null)d={},w(b.getElementsByTagName("*"),function(a){d[a.tagName]=$c(a)})}c&&ad(d);
return d}
function ad(a){if(fa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);c?a[b]=new Pa:ad(a[b])}}
function Zc(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function $c(a){var b="";w(a.childNodes,function(a){b+=a.nodeValue});
return b}
var Vc={"X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};function bd(){var a=C("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!C("SESSION_INDEX")&&!C("LOGGED_IN"))}
;function cd(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
cd.prototype.getHeight=function(){return this.bottom-this.top};
cd.prototype.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
cd.prototype.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
cd.prototype.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function dd(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
dd.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
dd.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
dd.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function L(a,b){var c=kb(a);return c.defaultView&&c.defaultView.getComputedStyle&&(a=c.defaultView.getComputedStyle(a,null))?a[b]||a.getPropertyValue(b)||"":""}
function ed(a,b){return L(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function fd(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}z&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function gd(a){"number"==typeof a&&(a+="px");return a}
function hd(a){var b=id;if("none"!=ed(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function id(a){var b=a.offsetWidth,c=a.offsetHeight,d=Wa&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=fd(a),new Qa(a.right-a.left,a.bottom-a.top)):new Qa(b,c)}
function jd(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;b=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return b}
function kd(a,b){return(b=a.currentStyle?a.currentStyle[b]:null)?jd(a,b):0}
var ld={thin:2,medium:4,thick:6};function md(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;b=a.currentStyle?a.currentStyle[b+"Width"]:null;return b in ld?ld[b]:jd(a,b)}
;var nd=q("yt.dom.getNextId_");if(!nd){nd=function(){return++od};
u("yt.dom.getNextId_",nd);var od=0}function pd(){var a=document,b;ua(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
;function qd(){var a=pd();return a?a:null}
;function rd(a,b){(a=A(a))&&a.style&&(a.style.display=b?"":"none",Ga(a,"hid",!b))}
function sd(a){w(arguments,function(a){!da(a)||a instanceof Element?rd(a,!0):w(a,function(a){sd(a)})})}
function td(a){w(arguments,function(a){!da(a)||a instanceof Element?rd(a,!1):w(a,function(a){td(a)})})}
;function ud(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=null;if(a=a||window.event){this.event=a;for(var b in a)b in vd||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==
this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
ud.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
ud.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
ud.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};
var vd={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};var Ja=q("yt.events.listeners_")||{};u("yt.events.listeners_",Ja);var wd=q("yt.events.counter_")||{count:0};u("yt.events.counter_",wd);function xd(a,b,c,d){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Ia(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function M(a,b,c,d){if(a&&(a.addEventListener||a.attachEvent)){d=!!d;var e=xd(a,b,c,d);if(!e){var e=++wd.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),g;g=f?function(d){d=new ud(d);if(!vb(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new ud(b);
b.currentTarget=a;return c.call(a,b)};
g=Qb(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);Ja[e]=[a,b,c,g,d]}}}
;var N={},yd="ontouchstart"in document;function zd(a,b,c){var d;switch(a){case "mouseover":case "mouseout":d=3;break;case "mouseenter":case "mouseleave":d=9}return vb(c,function(a){return Da(a,b)},!0,d)}
function O(a){var b="mouseover"==a.type&&"mouseenter"in N||"mouseout"==a.type&&"mouseleave"in N,c=a.type in N||b;if("HTML"!=a.target.tagName&&c){if(b){var b="mouseover"==a.type?"mouseenter":"mouseleave",c=N[b],d;for(d in c.v){var e=zd(b,d,a.target);e&&!vb(a.relatedTarget,function(a){return a==e},!0)&&c.L(d,e,b,a)}}if(b=N[a.type])for(d in b.v)(e=zd(a.type,d,a.target))&&b.L(d,e,a.type,a)}}
M(document,"blur",O,!0);M(document,"change",O,!0);M(document,"click",O);M(document,"focus",O,!0);M(document,"mouseover",O);M(document,"mouseout",O);M(document,"mousedown",O);M(document,"keydown",O);M(document,"keyup",O);M(document,"keypress",O);M(document,"cut",O);M(document,"paste",O);yd&&(M(document,"touchstart",O),M(document,"touchend",O),M(document,"touchcancel",O));function Ad(a,b,c){a&&(a.dataset?a.dataset[Bd(b)]=c:a.setAttribute("data-"+b,c))}
function P(a,b){return a?a.dataset?a.dataset[Bd(b)]:a.getAttribute("data-"+b):null}
function Cd(a,b){a&&(a.dataset?delete a.dataset[Bd(b)]:a.removeAttribute("data-"+b))}
var Dd={};function Bd(a){return Dd[a]||(Dd[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function Ed(a){this.o=a;this.g={};this.M=[];this.l=[]}
function Q(a,b){return"yt-uix"+(a.o?"-"+a.o:"")+(b?"-"+b:"")}
Ed.prototype.register=function(){throw Error("unimplemented abstract method");};
Ed.prototype.unregister=function(){Oc(this.M);this.M.length=0;cc(this.l);this.l.length=0};
Ed.prototype.init=aa;Ed.prototype.dispose=aa;function Fd(a,b,c){a.l.push(G(b,c,a))}
function R(a,b,c){var d=Q(a,void 0),e=t(c,a);b in N||(N[b]=new B);N[b].subscribe(d,e);a.g[c]=e}
function T(a,b,c){if(b in N){var d=N[b];d.unsubscribe(Q(a,void 0),a.g[c]);0>=Lb(d)&&(d.dispose(),delete N[b])}delete a.g[c]}
function Gd(a,b){Ad(a,"tooltip-text",b)}
;function Hd(){Ed.call(this,"tooltip");this.b=0;this.f={}}
v(Hd,Ed);ba(Hd);m=Hd.prototype;m.register=function(){R(this,"mouseover",this.K);R(this,"mouseout",this.A);R(this,"focus",this.$);R(this,"blur",this.Y);R(this,"click",this.A);R(this,"touchstart",this.ga);R(this,"touchend",this.N);R(this,"touchcancel",this.N)};
m.unregister=function(){T(this,"mouseover",this.K);T(this,"mouseout",this.A);T(this,"focus",this.$);T(this,"blur",this.Y);T(this,"click",this.A);T(this,"touchstart",this.ga);T(this,"touchend",this.N);T(this,"touchcancel",this.N);this.dispose();Hd.T.unregister.call(this)};
m.dispose=function(){for(var a in this.f)this.A(this.f[a]);this.f={}};
m.K=function(a){if(!(this.b&&1E3>na()-this.b)){var b=parseInt(P(a,"tooltip-hide-timer"),10);b&&(Cd(a,"tooltip-hide-timer"),window.clearTimeout(b));var b=t(function(){Id(this,a);Cd(a,"tooltip-show-timer")},this),c=parseInt(P(a,"tooltip-show-delay"),10)||0,b=Pb(b,c);
Ad(a,"tooltip-show-timer",b.toString());a.title&&(Gd(a,Jd(a)),a.title="");b=(a[ia]||(a[ia]=++ja)).toString();this.f[b]=a}};
m.A=function(a){var b=parseInt(P(a,"tooltip-show-timer"),10);b&&(window.clearTimeout(b),Cd(a,"tooltip-show-timer"));b=t(function(){if(a){var b=A(Kd(this,a));b&&(Ld(b),b&&b.parentNode&&b.parentNode.removeChild(b),Cd(a,"content-id"));(b=A(Kd(this,a,"arialabel")))&&b.parentNode&&b.parentNode.removeChild(b)}Cd(a,"tooltip-hide-timer")},this);
b=Pb(b,50);Ad(a,"tooltip-hide-timer",b.toString());if(b=P(a,"tooltip-text"))a.title=b;b=(a[ia]||(a[ia]=++ja)).toString();delete this.f[b]};
m.$=function(a){this.b=0;this.K(a)};
m.Y=function(a){this.b=0;this.A(a)};
m.ga=function(a,b,c){c.changedTouches&&(this.b=0,a=zd(b,Q(this),c.changedTouches[0].target),this.K(a))};
m.N=function(a,b,c){c.changedTouches&&(this.b=na(),a=zd(b,Q(this),c.changedTouches[0].target),this.A(a))};
function Md(a,b){Gd(a,b);a=P(a,"content-id");(a=A(a))&&ob(a,b)}
function Jd(a){return P(a,"tooltip-text")||a.title}
function Id(a,b){if(b){var c=Jd(b);if(c){var d=A(Kd(a,b));if(!d){d=document.createElement("div");d.id=Kd(a,b);d.className=Q(a,"tip");var e=document.createElement("div");e.className=Q(a,"tip-body");var f=document.createElement("div");f.className=Q(a,"tip-arrow");var g=document.createElement("div");g.setAttribute("aria-hidden","true");g.className=Q(a,"tip-content");var h=Nd(a,b),k=Kd(a,b,"content");g.id=k;Ad(b,"content-id",k);e.appendChild(g);h&&d.appendChild(h);d.appendChild(e);d.appendChild(f);var l=
rb(b),k=Kd(a,b,"arialabel"),f=document.createElement("div");Ea(f,Q(a,"arialabel"));f.id=k;l=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+l:l+" "+c;ob(f,l);b.setAttribute("aria-labelledby",k);k=qd()||document.body;k.appendChild(f);k.appendChild(d);Md(b,c);(c=parseInt(P(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",Ea(g,Q(a,"normal-wrap")));g=Da(b,Q(a,"reverse"));Od(a,b,d,e,h,g)||Od(a,b,d,e,h,!g);var p=Q(a,"tip-visible");
Pb(function(){Ea(d,p)},0)}}}}
function Od(a,b,c,d,e,f){Ga(c,Q(a,"tip-reverse"),f);var g=0;f&&(g=1);a=hd(b);f=new y((a.width-10)/2,f?a.height:0);var h=kb(b),k=new y(0,0),l;l=h?kb(h):document;l=!z||9<=Number(eb)||nb(ib(l).b)?l.documentElement:l.body;if(b!=l){l=fd(b);var p=ib(h).b,h=p.scrollingElement?p.scrollingElement:!Wa&&nb(p)?p.documentElement:p.body||p.documentElement,p=p.parentWindow||p.defaultView,h=z&&db("10")&&p.pageYOffset!=h.scrollTop?new y(h.scrollLeft,h.scrollTop):new y(p.pageXOffset||h.scrollLeft,p.pageYOffset||h.scrollTop);
k.i=l.left+h.i;k.j=l.top+h.j}f=new y(k.i+f.i,k.j+f.j);f=new y(f.i,f.j);k=(g&8&&"rtl"==ed(c,"direction")?g^4:g)&-9;g=hd(c);h=new Qa(g.width,g.height);l=f;l=new y(l.i,l.j);h=new Qa(h.width,h.height);0!=k&&(k&4?l.i-=h.width+0:k&2&&(l.i-=h.width/2),k&1&&(l.j-=h.height+0));f=new dd(0,0,0,0);f.left=l.i;f.top=l.j;f.width=h.width;f.height=h.height;l=new y(f.left,f.top);l instanceof y?(k=l.i,l=l.j):(k=l,l=void 0);c.style.left=gd(k);c.style.top=gd(l);h=new Qa(f.width,f.height);if(!(g==h||g&&h&&g.width==h.width&&
g.height==h.height))if(g=h,k=nb(ib(kb(c)).b),!z||db("10")||k&&db("8"))f=c.style,Va?f.MozBoxSizing="border-box":Wa?f.WebkitBoxSizing="border-box":f.boxSizing="border-box",f.width=Math.max(g.width,0)+"px",f.height=Math.max(g.height,0)+"px";else if(f=c.style,k){z?(k=kd(c,"paddingLeft"),l=kd(c,"paddingRight"),h=kd(c,"paddingTop"),p=kd(c,"paddingBottom"),k=new cd(h,l,p,k)):(k=L(c,"paddingLeft"),l=L(c,"paddingRight"),h=L(c,"paddingTop"),p=L(c,"paddingBottom"),k=new cd(parseFloat(h),parseFloat(l),parseFloat(p),
parseFloat(k)));if(!z||9<=Number(eb))l=L(c,"borderLeftWidth"),h=L(c,"borderRightWidth"),p=L(c,"borderTopWidth"),ra=L(c,"borderBottomWidth"),l=new cd(parseFloat(p),parseFloat(h),parseFloat(ra),parseFloat(l));else{l=md(c,"borderLeft");var h=md(c,"borderRight"),p=md(c,"borderTop"),ra=md(c,"borderBottom");l=new cd(p,h,ra,l)}f.pixelWidth=g.width-l.left-k.left-k.right-l.right;f.pixelHeight=g.height-l.top-k.top-k.bottom-l.bottom}else f.pixelWidth=g.width,f.pixelHeight=g.height;g=window.document;g=nb(g)?
g.documentElement:g.body;f=new Qa(g.clientWidth,g.clientHeight);1==c.nodeType?(c=fd(c),l=new y(c.left,c.top)):(c=c.changedTouches?c.changedTouches[0]:c,l=new y(c.clientX,c.clientY));c=hd(d);h=Math.floor(c.width/2);g=!!(f.height<l.j+a.height);a=!!(l.j<a.height);k=!!(l.i<h);f=!!(f.width<l.i+h);l=(c.width+3)/-2- -5;b=P(b,"force-tooltip-direction");if("left"==b||k)l=-5;else if("right"==b||f)l=20-c.width-3;b=Math.floor(l)+"px";d.style.left=b;e&&(e.style.left=b,e.style.height=c.height+"px",e.style.width=
c.width+"px");return!(g||a)}
function Kd(a,b,c){a=Q(a);var d=b.__yt_uid_key;d||(d=nd(),b.__yt_uid_key=d);b=a+d;c&&(b+="-"+c);return b}
function Nd(a,b){var c=null;Xa&&Da(b,Q(a,"masked"))&&((c=A("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),sd(c)):(c=document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=Q(a,"tip-mask")));return c}
function Ld(a){var b=A("yt-uix-tooltip-shared-mask"),c=b&&vb(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),td(b),document.body.appendChild(b))}
;function U(){Ed.call(this,"subscription-button");this.b=!1}
v(U,Ed);ba(U);U.prototype.register=function(){R(this,"click",this.O);Fd(this,yc,this.ca);Fd(this,zc,this.ba);Fd(this,J,this.Ca);Fd(this,Cc,this.ca);Fd(this,Dc,this.ba);Fd(this,K,this.Da);Fd(this,Fc,this.ya);Fd(this,Gc,this.xa)};
U.prototype.unregister=function(){T(this,"click",this.O);U.T.unregister.call(this)};
U.prototype.f=function(a){return!!P(a,"is-subscribed")};
var ub={U:"hover-enabled",ka:"yt-uix-button-subscribe",la:"yt-uix-button-subscribed",Ea:"ypc-enabled",ma:"yt-uix-button-subscription-container",na:"yt-subscription-button-disabled-mask-container"},V={Fa:"channel-external-id",oa:"subscriber-count-show-when-subscribed",pa:"subscriber-count-tooltip",qa:"subscriber-count-title",Ga:"href",V:"is-subscribed",Ha:"parent-url",Ia:"clicktracking",ra:"style-type",W:"subscription-id",Ja:"target",sa:"ypc-enabled"};m=U.prototype;
m.O=function(a){var b=P(a,"href"),c=bd();if(!b||this.b&&c)if(c){var b=P(a,"channel-external-id"),c=P(a,"clicktracking"),d;if(P(a,"ypc-enabled")){d=P(a,"ypc-item-type");var e=P(a,"ypc-item-id");d={itemType:d,itemId:e,subscriptionElement:a}}else d=null;e=P(a,"parent-url");if(P(a,"is-subscribed")){var f=P(a,"subscription-id");F(Bc,new tc(b,f,d,a,c,e))}else F(xc,new rc(b,d,c,e))}else Pd(this,a);else a=P(a,"target")||"_self",window.open(b,a)};
m.ca=function(a){this.C(a.b,this.ea,!0)};
m.ba=function(a){this.C(a.b,this.ea,!1)};
m.Ca=function(a){this.C(a.b,this.fa,!0,a.f)};
m.Da=function(a){this.C(a.b,this.fa,!1)};
m.ya=function(a){this.C(a.b,this.va)};
m.xa=function(a){this.C(a.b,this.ua)};
m.fa=function(a,b,c){b?(Ad(a,V.V,"true"),c&&Ad(a,V.W,c)):(Cd(a,V.V),Cd(a,V.W));Qd(a)};
m.ea=function(a,b){var c;c=tb(a);Ga(c,ub.na,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function Qd(a){var b=P(a,V.ra),c=!!P(a,"is-subscribed"),b="-"+b,d=ub.la+b;Ga(a,ub.ka+b,!c);Ga(a,d,c);P(a,V.pa)&&!P(a,V.oa)&&(b=Q(Hd.D()),Ga(a,b,!c),a.title=c?"":P(a,V.qa));c?Pb(function(){Ea(a,ub.U)},1E3):Fa(a,ub.U)}
m.va=function(a){var b=!!P(a,"ypc-item-type"),c=!!P(a,"ypc-item-id");!P(a,"ypc-enabled")&&b&&c&&(Ea(a,"ypc-enabled"),Ad(a,V.sa,"true"))};
m.ua=function(a){P(a,"ypc-enabled")&&(Fa(a,"ypc-enabled"),Cd(a,"ypc-enabled"))};
function Rd(a,b){return ta(lb(Q(a)),function(a){return b==P(a,"channel-external-id")},a)}
m.ta=function(a,b,c){var d=Ba(arguments,2);w(a,function(a){b.apply(this,xa(a,d))},this)};
m.C=function(a,b,c){var d=Rd(this,a);this.ta.apply(this,xa([d],Ba(arguments,1)))};
function Pd(a,b){a=t(function(a){a.discoverable_subscriptions&&Ob("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.O(b)},a);
Qc(a)}
;var Sd=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};u("yt.uix.widgets_",Sd);var Td=window,Ud=document,Vd=Td.location;function Wd(){}
var Xd=/\[native code\]/;function W(a,b,c){return a[b]=a[b]||c}
function Yd(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}
function Zd(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function X(){var a;if((a=Object.create)&&Xd.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var $d=W(Td,"gapi",{});var Y;Y=W(Td,"___jsl",X());W(Y,"I",0);W(Y,"hel",10);function ae(){var a=Vd.href,b;if(Y.dpo)b=Y.h;else{b=Y.h;var c=/([#].*&|[#])jsh=([^&#]*)/g,d=/([?#].*&|[?#])jsh=([^&#]*)/g;if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function be(a){var b=W(Y,"PQ",[]);Y.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function ce(a){return W(W(Y,"H",X()),a,X())}
;var de=W(Y,"perf",X());W(de,"g",X());var ee=W(de,"i",X());W(de,"r",[]);X();X();function fe(a,b,c){b&&0<b.length&&(b=ge(b),c&&0<c.length&&(b+="___"+ge(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=W(ee,"_p",X()),W(b,c,X())[a]=(new Date).getTime(),b=de.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function ge(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")}
;var he=X(),ie=[];function Z(a){throw Error("Bad hint"+(a?": "+a:""));}
;ie.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?Y[b]=W(Y,b,[]).concat(c):W(Y,b,c)}if(b=a.u)a=W(Y,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);var je=/^(\/[a-zA-Z0-9_\-]+)+$/,ke=/^[a-zA-Z0-9\-_\.,!]+$/,le=/^gapi\.loaded_[0-9]+$/,me=/^[a-zA-Z0-9,._-]+$/;function ne(a,b,c,d){var e=a.split(";"),f=e.shift(),g=he[f],h=null;g?h=g(e,b,c,d):Z("no hint processor for: "+f);h||Z("failed to generate load url");b=h;c=b.match(oe);(d=b.match(pe))&&1===d.length&&qe.test(b)&&c&&1===c.length||Z("failed sanity: "+a);return h}
function re(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=se(a);le.test(c)||Z("invalid_callback");b=te(b);d=d&&d.length?te(d):null;return[encodeURIComponent(a.Aa).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.X?"/am="+e(a.X):"",a.da?"/rs="+e(a.da):"",a.ja?"/t="+e(a.ja):"","/cb=",e(c)].join("")}
function se(a){"/"!==a.charAt(0)&&Z("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))Z("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");je.test(b)||Z("invalid_prefix");c=ue(a,"k",!0);d=ue(a,"am");e=ue(a,"rs");a=ue(a,"t");return{Aa:b,version:c,
X:d,da:e,ja:a}}
function te(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");me.test(e)&&b.push(e)}return b.join(",")}
function ue(a,b,c){a=a[b];!a&&c&&Z("missing: "+b);if(a){if(ke.test(a))return a;Z("invalid: "+b)}return null}
var qe=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,pe=/\/cb=/g,oe=/\/\//g;function ve(){var a=ae();if(!a)throw Error("Bad hint");return a}
he.m=function(a,b,c,d){(a=a[0])||Z("missing_hint");return"https://apis.google.com"+re(a,b,c,d)};var we=decodeURI("%73cript");function xe(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&0>Yd.call(b,e)&&c.push(e)}return c}
function ye(a){"loading"!=Ud.readyState?ze(a):Ud.write("<"+we+' src="'+encodeURI(a)+'"></'+we+">")}
function ze(a){var b=Ud.createElement(we);b.setAttribute("src",a);b.async="true";(a=Ud.getElementsByTagName(we)[0])?a.parentNode.insertBefore(b,a):(Ud.head||Ud.body||Ud.documentElement).appendChild(b)}
function Ae(a,b){var c=b&&b._c;if(c)for(var d=0;d<ie.length;d++){var e=ie[d][0],f=ie[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function Be(a,b,c){Ce(function(){var c;c=b===ae()?W($d,"_",X()):X();c=W(ce(b),"_",c);a(c)},c)}
function De(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Ae(a,c);b=a?a.split(":"):[];var d=c.h||ve(),e=W(Y,"ah",X());if(e["::"]&&b.length){a=[];for(var f=null;f=b.shift();){var g=f.split("."),g=e[f]||e[g[1]&&"ns:"+g[0]||""]||d,h=a.length&&a[a.length-1]||null,k=h;h&&h.hint==g||(k={hint:g,features:[]},a.push(k));k.features.push(f)}var l=a.length;if(1<l){var p=c.callback;p&&(c.callback=function(){0==--l&&p()})}for(;b=a.shift();)Ee(b.features,c,b.hint)}else Ee(b||[],c,d)}
function Ee(a,b,c){function d(a,b){if(ra)return 0;Td.clearTimeout(p);Vb.push.apply(Vb,S);var d=(($d||{}).config||{}).update;d?d(f):f&&W(Y,"cu",[]).push(f);if(b){fe("me0",a,hb);try{Be(b,c,l)}finally{fe("me1",a,hb)}}return 1}
a=Zd(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,k=b.onerror,l=void 0;"function"==typeof k&&(l=k);var p=null,ra=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var k=W(ce(c),"r",[]).sort(),Vb=W(ce(c),"L",[]).sort(),hb=[].concat(k);0<g&&(p=Td.setTimeout(function(){ra=!0;h()},g));
var S=xe(a,Vb);if(S.length){var S=xe(a,k),ga=W(Y,"CP",[]),ha=ga.length;ga[ha]=function(a){function b(){var a=ga[ha+1];a&&a()}
function c(b){ga[ha]=null;d(S,a)&&be(function(){e&&e();b()})}
if(!a)return 0;fe("ml1",S,hb);0<ha&&ga[ha-1]?ga[ha]=function(){c(b)}:c(b)};
if(S.length){var ac="loaded_"+Y.I++;$d[ac]=function(a){ga[ha](a);$d[ac]=null};
a=ne(c,S,"gapi."+ac,k);k.push.apply(k,S);fe("ml0",S,hb);b.sync||Td.___gapisync?ye(a):ze(a)}else ga[ha](Wd)}else d(S)&&e&&e()}
;function Ce(a,b){if(Y.hee&&0<Y.hel)try{return a()}catch(c){b&&b(c),Y.hel--,De("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
;$d.load=function(a,b){return Ce(function(){return De(a,b)})};function Fe(a){a=ea(a)?{callback:a}:a||{};if(a.gapiHintOverride||C("GAPI_HINT_OVERRIDE")){var b;b=document.location.href;-1!=b.indexOf("?")?(b=(b||"").split("#")[0],b=b.split("?",2),b=nc(1<b.length?b[1]:b[0])):b={};(b=b.gapi_jsh)&&La(a,{_c:{jsl:{h:b}}})}De("gapi.iframes:gapi.iframes.style.common",a)}
;function Ge(){return q("gapi.iframes.getContext")()}
function He(a){(Ge()||Ge()).connectIframes(a)}
function Ie(a,b){Ge().addOnConnectHandler("yt",a,void 0,b)}
function Je(){return Ge().getParentIframe()}
;var Ke="http://www.youtube.com https://www.youtube.com https://plus.google.com https://plus.googleapis.com https://plus.sandbox.google.com https://plusone.google.com https://plusone.sandbox.google.com https://apis.google.com https://apis.sandbox.google.com".split(" "),Le=[yc,zc,J,Cc,Dc,K,Ac,Ec],Me=[yc,zc,J,Cc,Dc,K,Fc,Gc];function Ne(a){this.b=a;this.w=null;C("SUBSCRIBE_EMBED_HOVERCARD_URL")&&(Oe(this),M(this.b,"mouseover",t(this.l,this)),M(this.b,"mouseout",t(this.P,this)),M(this.b,"click",t(this.P,this)),G(J,ma(this.f,!0),this),G(K,ma(this.f,!1),this),Pe(this))}
function Oe(a){var b={url:C("SUBSCRIBE_EMBED_HOVERCARD_URL"),style:"bubble",hideClickDetection:!0,show:!1,anchor:a.b,relayOpen:"-1"};a=t(a.g,a);Ge().open(b,a)}
function Pe(a){bd()||Mc("LOGGED_IN",function(){this.w&&(this.P(),this.w.close(),this.w=null,Oe(this))},a)}
Ne.prototype.g=function(a){this.w=a;a=U.D().f(this.b);this.f(a)};
Ne.prototype.l=function(){this.w&&this.w.restyle({show:!0})};
Ne.prototype.P=function(){this.w&&this.w.restyle({show:!1})};
Ne.prototype.f=function(a){if(this.w){a={isSubscribed:a};try{var b=q("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER");this.w.send("msg-hovercard-subscription",a,void 0,b)}catch(c){}}};na();function Qe(a){if(da(a))return Re(a);if(fa(a)&&!ea(a)&&!(fa(a)&&0<a.nodeType))return Se(a);try{return n.JSON.stringify(a),a}catch(b){}}
function Se(a){var b={};Ha(a,function(a,d){b[d]=Qe(a)});
return b}
function Re(a){var b=[];w(a,function(a,d){b[d]=Qe(a)});
return b}
;function Te(a){this.f=null;this.b=a;a=Je();var b=Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^na()).toString(36);a&&(He({role:"ytsubscribe",iframe:a,data:{id:b}}),Ie(t(function(a){this.f=a},this),this.b))}
Te.prototype.register=function(a,b){this.f?this.f.register(a,b,this.b):(a=t(this.register,this,a,b,this.b),Ie(a,this.b))};
Te.prototype.send=function(a,b){this.f?this.f.send(a,b,void 0,this.b):(a=t(this.send,this,a,b),Ie(a,this.b))};function Ue(){this.b=this.f=null}
function Ve(a,b){var c=q("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER");try{var d=c||We(a),e=Je();e&&e.send("onytevent",b,void 0,d)}catch(f){}}
Ue.prototype.g=function(a,b){if("pubsub2"==b.eventType){var c=b.topicString;c&&a(c,b.serializedData||null)}};
function We(a){if(!a.f){var b;b=q("gapi.iframes.makeWhiteListIframesFilter")(Ke);a.f=b}return a.f}
;function Xe(){this.b=new Ue;this.g=!1;this.f={}}
function Ye(a){w(Le,function(a){if(!this.f[a.toString()]){var b=G(a,function(b){var c=this.b;b=b?{version:b.version,args:b.args}:null;c.b&&(b={eventType:"pubsub2",topicString:a.toString(),serializedData:Qe(b)},c.b.send("msg-youtube-pubsub",b))},this);
b&&(this.f[a.toString()]=b)}},a)}
Xe.prototype.l=function(a,b){var c=va(Me,function(b){return b.toString()==a});
if(c&&(!c.J||b)){var d;if(c.J)try{d=Ub(c.J,b)}catch(e){return}(b=this.f[c.toString()])?bc(b,c,d):F(c,d)}};
Xe.prototype.o=function(a){Ze(this)&&Ve(this.b,{eventType:"subscribe",channelExternalId:a.b})};
Xe.prototype.G=function(a){Ze(this)&&Ve(this.b,{eventType:"unsubscribe",channelExternalId:a.b})};
function Ze(a){return a.g||!!C("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS")}
;function $e(){Fe(function(){var a;a=hd(A("yt-subscribe"));a={width:a.width,height:a.height};var b=af;Ge().ready(a,null,b)})}
function af(a){if(a.length&&a[a.length-1]){var b=a[a.length-1];a=b.eurl;var b=b.notificationsPipeSupported,c=A("yt-subscribe"),d=U.D(),d=Q(d),e=c||document,f=null;e.getElementsByClassName?f=e.getElementsByClassName(d)[0]:e.querySelectorAll&&e.querySelector?f=e.querySelector("."+d):f=mb(d,c)[0];c=f||null;a&&c&&(U.D(),Ad(c,"parent-url",a));a=bf();b&&a&&(U.D().b=!0);c&&!a&&new Ne(c);a=new Xe;G(J,a.o,a);G(K,a.G,a);if(bf()){b=a.b;b.b=new Te(We(b));Ye(a);b=a.b;c=t(a.l,a);if(b.b)try{b.b.register("cmd-youtube-pubsub",
ma(b.g,c))}catch(g){}a.g=!0}}}
function bf(){var a=Je().getOrigin();return wa(Ke,a)}
;function cf(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&(c=c.data.follow_on_url)&&mc(c)}}
;function df(a){D.call(this,1,arguments);this.b=a}
v(df,D);function ef(a,b){D.call(this,2,arguments);this.f=a;this.b=b}
v(ef,D);function ff(a,b,c,d){D.call(this,1,arguments);this.b=b;this.f=c||null;this.itemId=d||null}
v(ff,D);function gf(a,b){D.call(this,1,arguments);this.f=a;this.b=b||null}
v(gf,D);function hf(a){D.call(this,1,arguments)}
v(hf,D);var jf=new E("ypc-core-load",df),kf=new E("ypc-guide-sync-success",ef),lf=new E("ypc-purchase-success",ff),mf=new E("ypc-subscription-cancel",hf),nf=new E("ypc-subscription-cancel-success",gf),of=new E("ypc-init-subscription",hf);var pf=!1,qf=[],rf=[];function sf(a){a.b?pf?F(Ac,a):F(jf,new df(function(){F(of,new hf(a.b))})):tf(a.f,a.l,a.g,a.source)}
function uf(a){a.b?pf?F(Ec,a):F(jf,new df(function(){F(mf,new hf(a.b))})):vf(a.f,a.o,a.l,a.g,a.source)}
function wf(a){xf(ya(a.b))}
function yf(a){zf(ya(a.b))}
function Af(a){Bf(a.g,a,null)}
function Cf(a,b,c,d){Bf(a,b,c,d)}
function Df(a){var b=a.itemId,c=a.b.subscriptionId;b&&c&&F(J,new sc(b,c,a.b.channelInfo))}
function Ef(a){var b=a.b;Ha(a.f,function(a,d){F(J,new sc(d,a,b[d]))})}
function Ff(a){F(K,new I(a.f.itemId));a.b&&a.b.length&&(Gf(a.b,K),Gf(a.b,Fc))}
function tf(a,b,c,d){var e=new I(a);F(yc,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=C("PLAYBACK_ID"))&&(c.plid=d);(d=C("EVENT_ID"))&&(c.ei=d);b&&Hf(b,c);Xc("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",ha:f,B:c,F:function(b,c){b=c.response;F(J,new sc(a,b.id,b.channel_info));b.show_feed_privacy_dialog&&Pc("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);b.actions&&cf(b.actions)},
S:function(){F(zc,e)}})}
function vf(a,b,c,d,e){var f=new I(a);F(Cc,f);var g={};d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=C("PLAYBACK_ID"))&&(d.plid=a);(a=C("EVENT_ID"))&&(d.ei=a);c&&Hf(c,d);Xc("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",ha:g,B:d,F:function(a,b){a=b.response;F(K,f);a.actions&&cf(a.actions)},
S:function(){F(Dc,f)}})}
function Bf(a,b,c,d){if(null!==b&&(null!==b.b||null!==b.receivePostUpdates||null!==b.f)){var e={};a&&(e.channel_id=a);null!==b.b&&(e.receive_all_updates=b.b);null!==b.receivePostUpdates&&(e.receive_post_updates=b.receivePostUpdates);null!==b.f&&(e.receive_no_updates=b.f);Xc("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",B:e,onError:function(){c&&c()},
F:function(){d&&d()}})}}
function xf(a){if(a.length){var b=Aa(a,0,40);F("subscription-batch-subscribe-loading");Gf(b,yc);var c={};c.a=b.join(",");var d=function(){F("subscription-batch-subscribe-loaded");Gf(b,zc)};
Xc("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",B:c,F:function(c,f){d();c=f.response;f=c.id;if("array"==ca(f)&&f.length==b.length){var e=c.channel_info_map;w(f,function(a,c){c=b[c];F(J,new sc(c,a,e[c]))});
a.length?xf(a):F("subscription-batch-subscribe-finished")}},
onError:function(){d();F("subscription-batch-subscribe-failure")}})}}
function zf(a){if(a.length){var b=Aa(a,0,40);F("subscription-batch-unsubscribe-loading");Gf(b,Cc);var c={};c.c=b.join(",");var d=function(){F("subscription-batch-unsubscribe-loaded");Gf(b,Dc)};
Xc("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",B:c,F:function(){d();Gf(b,K);a.length&&zf(a)},
onError:function(){d()}})}}
function Gf(a,b){w(a,function(a){F(b,new I(a))})}
function Hf(a,b){a=nc(a);for(var c in a)b[c]=a[c]}
;u("yt.setConfig",Ob);u("ytbin.www.subscribeembed.init",function(){pf=!0;rf.push(G(xc,sf),G(Bc,uf));pf||(rf.push(G(Ac,sf),G(Ec,uf),G(uc,wf),G(vc,yf),G(wc,Af)),qf.push(Mc("subscription-prefs",Cf)),rf.push(G(lf,Df),G(nf,Ff),G(kf,Ef)));var a=U.D(),b=Q(a);b in Sd||(a.register(),a.M.push(Mc("yt-uix-init-"+b,a.init,a)),a.M.push(Mc("yt-uix-dispose-"+b,a.dispose,a)),Sd[b]=a);$e()});})();
