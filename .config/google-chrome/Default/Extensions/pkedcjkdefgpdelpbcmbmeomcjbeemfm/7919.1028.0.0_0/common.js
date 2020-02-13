'use strict';var h,aa=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ca="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,da=function(){da=function(){};ca.Symbol||(ca.Symbol=ea)},fa=function(a,b){this.g=a;ba(this,"description",{configurable:!0,writable:!0,value:b})};
fa.prototype.toString=function(){return this.g};
var ea=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new fa("jscomp_symbol_"+(c||"")+"_"+b++,c)}var b=0;return a}(),ia=function(){da();var a=ca.Symbol.iterator;a||(a=ca.Symbol.iterator=ca.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&ba(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}});ia=function(){}},ha=function(a){ia();a={next:a};a[ca.Symbol.iterator]=function(){return this};return a},
l=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}},n=function(a){if(!(a instanceof Array)){a=l(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a},ja="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ka;
if("function"==typeof Object.setPrototypeOf)ka=Object.setPrototypeOf;else{var la;a:{var ma={a:!0},na={};try{na.__proto__=ma;la=na.a;break a}catch(a){}la=!1}ka=la?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var oa=ka,q=function(a,b){a.prototype=ja(b.prototype);a.prototype.constructor=a;if(oa)oa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Lb=b.prototype},pa=function(){this.o=!1;this.l=null;this.h=void 0;this.g=1;this.m=this.D=0;this.F=this.j=null},qa=function(a){if(a.o)throw new TypeError("Generator is already running");a.o=!0};pa.prototype.u=function(a){this.h=a};
var ra=function(a,b){a.j={Qc:b,Tm:!0};a.g=a.D||a.m};pa.prototype.return=function(a){this.j={return:a};this.g=this.m};var sa=function(a,b,c){a.g=c;return{value:b}};pa.prototype.Cb=function(a){this.g=a};
var ta=function(a,b,c){a.D=b;void 0!=c&&(a.m=c)},ua=function(a,b){a.g=b;a.D=0},wa=function(a){a.D=0;var b=a.j.Qc;a.j=null;return b},xa=function(a){this.g=new pa;this.h=a},Aa=function(a,b){qa(a.g);var c=a.g.l;if(c)return ya(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);a.g.return(b);return za(a)},ya=function(a,b,c,d){try{var e=b.call(a.g.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.o=!1,e;var f=e.value}catch(g){return a.g.l=
null,ra(a.g,g),za(a)}a.g.l=null;d.call(a.g,f);return za(a)},za=function(a){for(;a.g.g;)try{var b=a.h(a.g);if(b)return a.g.o=!1,{value:b.value,done:!1}}catch(c){a.g.h=void 0,ra(a.g,c)}a.g.o=!1;if(a.g.j){b=a.g.j;a.g.j=null;if(b.Tm)throw b.Qc;return{value:b.return,done:!0}}return{value:void 0,done:!0}},Ca=function(a){this.next=function(b){qa(a.g);a.g.l?b=ya(a,a.g.l.next,b,a.g.u):(a.g.u(b),b=za(a));return b};this.throw=function(b){qa(a.g);a.g.l?b=ya(a,a.g.l["throw"],b,a.g.u):(ra(a.g,b),b=za(a));return b};
this.return=function(b){return Aa(a,b)};ia();this[Symbol.iterator]=function(){return this}},Da=function(a,b){if(b){var c=ca;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}};
Da("Promise",function(a){function b(){this.g=null}function c(g){return g instanceof e?g:new e(function(k){k(g)})}if(a)return a;b.prototype.h=function(g){if(null==this.g){this.g=[];var k=this;this.j(function(){k.m()})}this.g.push(g)};var d=ca.setTimeout;b.prototype.j=function(g){d(g,0)};b.prototype.m=function(){for(;this.g&&this.g.length;){var g=this.g;this.g=[];for(var k=0;k<g.length;++k){var m=g[k];g[k]=null;try{m()}catch(p){this.l(p)}}}this.g=null};b.prototype.l=function(g){this.j(function(){throw g;
})};var e=function(g){this.h=0;this.j=void 0;this.g=[];var k=this.m();try{g(k.resolve,k.reject)}catch(m){k.reject(m)}};e.prototype.m=function(){function g(p){return function(u){m||(m=!0,p.call(k,u))}}var k=this,m=!1;return{resolve:g(this.C),reject:g(this.l)}};e.prototype.C=function(g){if(g===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof e)this.G(g);else{a:switch(typeof g){case "object":var k=null!=g;break a;case "function":k=!0;break a;default:k=!1}k?this.F(g):
this.D(g)}};e.prototype.F=function(g){var k=void 0;try{k=g.then}catch(m){this.l(m);return}"function"==typeof k?this.H(k,g):this.D(g)};e.prototype.l=function(g){this.o(2,g)};e.prototype.D=function(g){this.o(1,g)};e.prototype.o=function(g,k){if(0!=this.h)throw Error("Cannot settle("+g+", "+k+"): Promise already settled in state"+this.h);this.h=g;this.j=k;this.u()};e.prototype.u=function(){if(null!=this.g){for(var g=0;g<this.g.length;++g)f.h(this.g[g]);this.g=null}};var f=new b;e.prototype.G=function(g){var k=
this.m();g.Mh(k.resolve,k.reject)};e.prototype.H=function(g,k){var m=this.m();try{g.call(k,m.resolve,m.reject)}catch(p){m.reject(p)}};e.prototype.then=function(g,k){function m(E,F){return"function"==typeof E?function(J){try{p(E(J))}catch(U){u(U)}}:F}var p,u,A=new e(function(E,F){p=E;u=F});this.Mh(m(g,p),m(k,u));return A};e.prototype.catch=function(g){return this.then(void 0,g)};e.prototype.Mh=function(g,k){function m(){switch(p.h){case 1:g(p.j);break;case 2:k(p.j);break;default:throw Error("Unexpected state: "+
p.h);}}var p=this;null==this.g?f.h(m):this.g.push(m)};e.resolve=c;e.reject=function(g){return new e(function(k,m){m(g)})};e.race=function(g){return new e(function(k,m){for(var p=l(g),u=p.next();!u.done;u=p.next())c(u.value).Mh(k,m)})};e.all=function(g){var k=l(g),m=k.next();return m.done?c([]):new e(function(p,u){function A(J){return function(U){E[J]=U;F--;0==F&&p(E)}}var E=[],F=0;do E.push(void 0),F++,c(m.value).Mh(A(E.length-1),u),m=k.next();while(!m.done)})};return e});
var Ea=function(a){function b(d){return a.next(d)}function c(d){return a.throw(d)}return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}f(a.next())})},Fa=function(a){return Ea(new Ca(new xa(a)))},Ga=Ga||{},Ha=this||self,Ia=function(a){return void 0!==a},r=function(a){return"number"==typeof a},La=function(a){if(a&&a!=Ha)return Ja(a.document);null===Ka&&(Ka=Ja(Ha.document));return Ka},Ma=/^[\w+/_-]+[=]{0,2}$/,Ka=null,Ja=function(a){return(a=a.querySelector&&
a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Ma.test(a)?a:""},Na=function(a,b){a=a.split(".");b=b||Ha;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b},Oa=function(){},Pa=function(a){a.uj=void 0;a.ib=function(){return a.uj?a.uj:a.uj=new a}},Qa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==
c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},Ra=function(a){return null===a},Sa=function(a){return"array"==Qa(a)},Ta=function(a){var b=Qa(a);return"array"==
b||"object"==b&&"number"==typeof a.length},Ua=function(a){return"function"==Qa(a)},Va=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},Ya=function(a){null!==a&&"removeAttribute"in a&&a.removeAttribute(Wa);try{delete a[Wa]}catch(b){}},Wa="closure_uid_"+(1E9*Math.random()>>>0),Za=0,$a=function(a,b,c){return a.call.apply(a.bind,arguments)},ab=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);
Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}},t=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?t=$a:t=ab;return t.apply(null,arguments)},bb=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}},cb=Date.now||function(){return+new Date},v=function(a,b){a=a.split(".");var c=Ha;a[0]in c||"undefined"==
typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b},w=function(a,b){function c(){}c.prototype=b.prototype;a.Lb=b.prototype;a.prototype=new c;a.prototype.constructor=a};var chrome=chrome||window.chrome||{};chrome.cast=chrome.cast||{};chrome.cast.media=chrome.cast.media||{};var mojo={};var db=function(){return Promise.reject(Error("Not implemented"))};var eb=function(a){this.g=a},gb=function(a){var b=fb.get(a);b||(b=new eb(a),fb.set(a,b));return b},jb=function(a){a.level>=hb&&ib.forEach(function(b){return b(a)})};eb.prototype.log=function(a,b,c){if(!(a<hb)){"function"==typeof b&&(b=b());b=b.replace(kb,"[Redacted URL]");b=b.replace(lb,"[Redacted domain/email]");b=b.replace(mb,function(e,f,g){return f+":<"+g.substr(-4)+">"});var d={V:this.g,level:a,time:Date.now(),message:b,Qc:c};ib.forEach(function(e){return e(d)})}};
eb.prototype.error=function(a,b){this.log(3,a,b)};eb.prototype.K=function(a,b){this.log(2,a,b)};eb.prototype.info=function(a,b){this.log(1,a,b)};var nb=function(a,b,c){a.log(0,b,c)},pb=function(a){a=ob.indexOf(a);return-1==a?0:a},qb=function(a){return 600>=a?0:850>=a?1:950>=a?2:3},ib=[],fb=new Map,ob=["FINE","INFO","WARNING","SEVERE"],lb=/(([\w.+-]+@)|((www|m|mail|ftp)[.]))[\w.-]+[.][\w-]{2,4}/gi,kb=/(data:|https?:\/\/)\S+/gi,mb=/(dial|cast):<([a-zA-Z0-9]+)>/gi,hb=1;var rb=function(a){this.g=a;this.h=Date.now()},sb=function(a,b){null!=b&&(a+="_"+b);return a};rb.prototype.end=function(a){tb(sb(this.g,a),Date.now()-this.h)};var tb=function(a,b){0>b&&(ub.K("Timing analytics event with negative time"),b=0);1E4<b&&(b=1E4);try{chrome.metricsPrivate.recordTime(a,b)}catch(c){ub.K("Failed to record time "+b+" in "+a)}},ub=gb("mr.Timing"),vb=function(a){rb.call(this,a)};q(vb,rb);
vb.prototype.end=function(a){a=sb(this.g,a);var b=Date.now()-this.h;if(0>b)wb.K("Timing analytics event with negative time");else{1E4>b&&(b=1E4);18E4<b&&(b=18E4);try{chrome.metricsPrivate.recordMediumTime(a,b)}catch(c){wb.K("Failed to record time "+b+" in "+a)}}};var wb=gb("mr.MediumTiming"),xb=function(a){rb.call(this,a)};q(xb,rb);
xb.prototype.end=function(a){a=sb(this.g,a);var b=Date.now()-this.h;if(0>b)yb.K("Timing analytics event with negative time");else{18E4>b&&(b=18E4);36E5<b&&(b=36E5);try{chrome.metricsPrivate.recordLongTime(a,b)}catch(c){yb.K("Failed to record time "+b+" in "+a)}}};
var yb=gb("mr.LongTiming"),zb=gb("mr.Analytics"),Ab=function(a){try{chrome.metricsPrivate.recordUserAction(a)}catch(b){zb.K("Failed to record event "+a)}},Bb=function(a,b,c){var d,e=0,f;for(f in c)e++,c[f]==b&&(d=f);if(d){c={metricName:a,type:"histogram-linear",min:1,max:e,buckets:e+1};try{chrome.metricsPrivate.recordValue(c,b)}catch(g){zb.K("Failed to record enum value "+d+" ("+b+") in "+a,g)}}else zb.error("Unknown analytics value, "+b+" for histogram, "+a,Error())};var Cb=function(){var a=this;this.g=new Promise(function(b,c){a.j=b;a.h=c})};Cb.prototype.resolve=function(a){this.j(a)};Cb.prototype.reject=function(a){this.h(a)};var Db=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Db);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};w(Db,Error);Db.prototype.name="CustomError";var Eb;var Fb=function(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");Db.call(this,c+a[d])};w(Fb,Db);Fb.prototype.name="AssertionError";var Gb=function(a,b){throw new Fb("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var Hb=function(a){return a[a.length-1]},Ib=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Jb=Array.prototype.lastIndexOf?function(a,b){return Array.prototype.lastIndexOf.call(a,b,a.length-1)}:function(a,b){var c=a.length-1;0>c&&(c=Math.max(0,a.length+c));if("string"===typeof a)return"string"!==typeof b||
1!=b.length?-1:a.lastIndexOf(b,c);for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1},Kb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Lb=function(a,b){for(var c="string"===typeof a?a.split(""):a,d=a.length-1;0<=d;--d)d in c&&b.call(void 0,c[d],d,a)},Mb=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=
a.length,e=[],f=0,g="string"===typeof a?a.split(""):a,k=0;k<d;k++)if(k in g){var m=g[k];b.call(c,m,k,a)&&(e[f++]=m)}return e},Nb=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f="string"===typeof a?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},Ob=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;Kb(a,function(e,f){d=b.call(void 0,d,e,f,a)});return d},
Pb=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1},Qb=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0},Sb=function(a,b){b=Rb(a,b,void 0);return 0>b?null:"string"===typeof a?
a.charAt(b):a[b]},Rb=function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1},Ub=function(a,b){a:{for(var c="string"===typeof a?a.split(""):a,d=a.length-1;0<=d;d--)if(d in c&&b.call(void 0,c[d],d,a)){b=d;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]},Vb=function(a,b){return 0<=Ib(a,b)},Wb=function(a){return 0==a.length},Xb=function(a){if(!Sa(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0},Yb=function(a,
b){Vb(a,b)||a.push(b)},$b=function(a,b,c){var d;2==arguments.length||0>(d=Ib(a,c))?a.push(b):Zb(a,d,0,b)},bc=function(a,b){b=Ib(a,b);var c;(c=0<=b)&&ac(a,b);return c},ac=function(a,b){return 1==Array.prototype.splice.call(a,b,1).length},cc=function(a,b){b=Rb(a,b,void 0);return 0<=b?(ac(a,b),!0):!1},dc=function(a,b){var c=0;Lb(a,function(d,e){b.call(void 0,d,e,a)&&ac(a,e)&&c++})},ec=function(a){return Array.prototype.concat.apply([],arguments)},fc=function(a){return Array.prototype.concat.apply([],
arguments)},x=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]},gc=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ta(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}},Zb=function(a,b,c,d){Array.prototype.splice.apply(a,hc(arguments,1))},hc=function(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)},ic=function(a,b){b=b||a;for(var c=
{},d=0,e=0;e<a.length;){var f=a[e++];var g=f;g=Va(g)?"o"+(g[Wa]||(g[Wa]=++Za)):(typeof g).charAt(0)+g;Object.prototype.hasOwnProperty.call(c,g)||(c[g]=!0,b[d++]=f)}b.length=d},lc=function(a,b,c){return jc(a,c||kc,!1,b)},mc=function(a,b){return jc(a,b,!0,void 0,void 0)},jc=function(a,b,c,d,e){for(var f=0,g=a.length,k;f<g;){var m=f+(g-f>>>1),p;c?p=b.call(e,a[m],m,a):p=b(d,a[m]);0<p?f=m+1:(g=m,k=!p)}return k?f:-f-1},nc=function(a,b){a.sort(b||kc)},oc=function(a,b){var c=kc;nc(a,function(d,e){return c(b(d),
b(e))})},pc=function(a){oc(a,function(b){return b.t})},rc=function(a,b,c){if(!Ta(a)||!Ta(b)||a.length!=b.length)return!1;var d=a.length;c=c||qc;for(var e=0;e<d;e++)if(!c(a[e],b[e]))return!1;return!0},kc=function(a,b){return a>b?1:a<b?-1:0},qc=function(a,b){return a===b},sc=function(a,b){var c={};Kb(a,function(d,e){c[b.call(void 0,d,e,a)]=d});return c},tc=function(a,b){return ec.apply([],Nb(a,b,void 0))};var uc=function(a,b){a:{try{var c=a&&a.ownerDocument,d=c&&(c.defaultView||c.parentWindow);d=d||Ha;if(d.Element&&d.Location){var e=d;break a}}catch(g){}e=null}if(e&&"undefined"!=typeof e[b]&&(!a||!(a instanceof e[b])&&(a instanceof e.Location||a instanceof e.Element))){if(Va(a))try{var f=a.constructor.displayName||a.constructor.name||Object.prototype.toString.call(a)}catch(g){f="<object could not be stringified>"}else f=void 0===a?"undefined":null===a?"null":typeof a;Gb("Argument is not a %s (or a non-Element, non-Location mock); got: %s",
b,f)}};var vc=function(a){return function(){return a}},wc=function(){return!0},xc=function(){return null},yc=function(a){return a},zc=function(a){return function(){throw Error(a);}},Ac=function(a){var b=b||0;return function(){return a.apply(this,Array.prototype.slice.call(arguments,0,b))}};var Bc=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)},Cc=function(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c},Dc=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1},Ec=function(a){var b=0,c;for(c in a)b++;return b},Fc=function(a){for(var b in a)return b},Gc=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},Hc=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},Ic=function(a,b){return null!==a&&b in a},Jc=function(a,b){for(var c in a)if(a[c]==
b)return!0;return!1},Kc=function(a){for(var b in a)return!1;return!0},Lc=function(a){for(var b in a)delete a[b]},Mc=function(a){var b={},c;for(c in a)b[c]=a[c];return b},Nc=function(a){var b=Qa(a);if("object"==b||"array"==b){if(Ua(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=Nc(a[c]);return b}return a},Oc=function(a){var b={},c;for(c in a)b[a[c]]=c;return b},Pc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),Qc=function(a,
b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Pc.length;f++)c=Pc[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}},Rc=function(a){var b=arguments.length;if(1==b&&Sa(arguments[0]))return Rc.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};var Uc=function(a,b){this.g=a===Sc&&b||"";this.h=Tc};Uc.prototype.sd=!0;Uc.prototype.dd=function(){return this.g};Uc.prototype.toString=function(){return"Const{"+this.g+"}"};var Vc=function(a){if(a instanceof Uc&&a.constructor===Uc&&a.h===Tc)return a.g;Gb("expected object of type Const, got '"+a+"'");return"type_error:Const"},Tc={},Sc={},Wc=new Uc(Sc,"");var Yc=function(){this.g=Xc};Yc.prototype.sd=!0;var Xc={};Yc.prototype.dd=function(){return"".toString()};Yc.prototype.toString=function(){return"SafeScript{}"};var Zc=function(a){if(a instanceof Yc&&a.constructor===Yc&&a.g===Xc)return"";Gb("expected object of type SafeScript, got '"+a+"' of type "+Qa(a));return"type_error:SafeScript"};var $c=/[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/,ad=/^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]/,cd=/^http:\/\/.*/,dd=/\s+/,ed=/[\d\u06f0-\u06f9]/;var hd=function(a,b){this.g=a===fd&&b||"";this.h=gd};h=hd.prototype;h.sd=!0;h.dd=function(){return this.g.toString()};h.tj=!0;h.nj=function(){return 1};h.toString=function(){return"TrustedResourceUrl{"+this.g+"}"};var id=function(a){if(a instanceof hd&&a.constructor===hd&&a.h===gd)return a.g;Gb("expected object of type TrustedResourceUrl, got '"+a+"' of type "+Qa(a));return"type_error:TrustedResourceUrl"},gd={},fd={};var jd=function(a,b){return 0==a.lastIndexOf(b,0)},kd=function(a,b){return a.toLowerCase()==b.toLowerCase()},ld=function(a){return/^[\s\xa0]*$/.test(a)},nd=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},od=function(a,b){a=String(a).toLowerCase();b=String(b).toLowerCase();return a<b?-1:a==b?0:1},wd=function(a,b){if(b)a=a.replace(pd,"&amp;").replace(qd,"&lt;").replace(rd,"&gt;").replace(sd,"&quot;").replace(td,"&#39;").replace(ud,"&#0;");
else{if(!vd.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(pd,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(qd,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(rd,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(sd,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(td,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(ud,"&#0;"))}return a},pd=/&/g,qd=/</g,rd=/>/g,sd=/"/g,td=/'/g,ud=/\x00/g,vd=/[\x00&<>"']/,yd=function(a,b){var c=0;a=nd(String(a)).split(".");b=nd(String(b)).split(".");for(var d=Math.max(a.length,b.length),
e=0;0==c&&e<d;e++){var f=a[e]||"",g=b[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;c=xd(0==f[1].length?0:parseInt(f[1],10),0==g[1].length?0:parseInt(g[1],10))||xd(0==f[2].length,0==g[2].length)||xd(f[2],g[2]);f=f[3];g=g[3]}while(0==c)}return c},xd=function(a,b){return a<b?-1:a>b?1:0};var Bd=function(a,b){this.g=a===zd&&b||"";this.h=Ad};h=Bd.prototype;h.sd=!0;h.dd=function(){return this.g.toString()};h.tj=!0;h.nj=function(){return 1};h.toString=function(){return"SafeUrl{"+this.g+"}"};
var Cd=function(a){if(a instanceof Bd&&a.constructor===Bd&&a.h===Ad)return a.g;Gb("expected object of type SafeUrl, got '"+a+"' of type "+Qa(a));return"type_error:SafeUrl"},Dd=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Ed=function(a){if(a instanceof Bd)return a;a="object"==typeof a&&a.sd?a.dd():String(a);Dd.test(a)||(a="about:invalid#zClosurez");return new Bd(zd,a)},Ad={},zd={};var Gd=function(){this.g="";this.h=Fd};Gd.prototype.sd=!0;var Fd={};Gd.prototype.dd=function(){return this.g};Gd.prototype.toString=function(){return"SafeStyle{"+this.g+"}"};
var Hd=function(a){if(a instanceof Gd&&a.constructor===Gd&&a.h===Fd)return a.g;Gb("expected object of type SafeStyle, got '"+a+"' of type "+Qa(a));return"type_error:SafeStyle"},Id=function(a){var b=new Gd;b.g=a;return b},Jd=Id(""),Ld=function(a){if(a instanceof Bd)return'url("'+Cd(a).replace(/</g,"%3c").replace(/[\\"]/g,"\\$&")+'")';a=a instanceof Uc?Vc(a):Kd(String(a));if(/[{;}]/.test(a))throw new Fb("Value does not allow [{;}], got: %s.",[a]);return a},Kd=function(a){var b=a.replace(Md,"$1").replace(Md,
"$1").replace(Nd,"url");if(Od.test(b)){if(Pd.test(a))return Gb("String value disallows comments, got: "+a),"zClosurez";for(var c=b=!0,d=0;d<a.length;d++){var e=a.charAt(d);"'"==e&&c?b=!b:'"'==e&&b&&(c=!c)}if(!b||!c)return Gb("String value requires balanced quotes, got: "+a),"zClosurez";if(!Qd(a))return Gb("String value requires balanced square brackets and one identifier per pair of brackets, got: "+a),"zClosurez"}else return Gb("String value allows only [-,.\"'%_!# a-zA-Z0-9\\[\\]] and simple functions, got: "+
a),"zClosurez";return Rd(a)},Qd=function(a){for(var b=!0,c=/^[-_a-zA-Z0-9]$/,d=0;d<a.length;d++){var e=a.charAt(d);if("]"==e){if(b)return!1;b=!0}else if("["==e){if(!b)return!1;b=!1}else if(!b&&!c.test(e))return!1}return b},Od=/^[-,."'%_!# a-zA-Z0-9\[\]]+$/,Nd=/\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,Md=/\b(calc|cubic-bezier|fit-content|hsl|hsla|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g,Pd=/\/\*/,Rd=function(a){return a.replace(Nd,
function(b,c,d,e){var f="";d=d.replace(/^(['"])(.*)\1$/,function(g,k,m){f=k;return m});b=Ed(d).dd();return c+f+b+f+e})};var Td=function(){this.g="";this.h=Sd};Td.prototype.sd=!0;
var Sd={},Vd=function(a,b){if(-1!=a.indexOf("<"))throw Error("Selector does not allow '<', got: "+a);var c=a.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g,"");if(!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(c))throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: "+a);a:{for(var d={"(":")","[":"]"},e=[],f=0;f<c.length;f++){var g=c[f];if(d[g])e.push(d[g]);else if(Jc(d,g)&&e.pop()!=g){c=!1;break a}}c=0==e.length}if(!c)throw Error("() and [] in selector must be balanced, got: "+a);
if(!(b instanceof Gd)){c="";for(var k in b){if(!/^[-_a-zA-Z0-9]+$/.test(k))throw Error("Name allows only [-_a-zA-Z0-9], got: "+k);d=b[k];null!=d&&(d=Sa(d)?Nb(d,Ld).join(" "):Ld(d),c+=k+":"+d+";")}b=c?Id(c):Jd}a=a+"{"+Hd(b).replace(/</g,"\\3C ")+"}";return Ud(a)},Xd=function(a){var b="",c=function(d){Sa(d)?Kb(d,c):b+=Wd(d)};Kb(arguments,c);return Ud(b)};Td.prototype.dd=function(){return this.g};Td.prototype.toString=function(){return"SafeStyleSheet{"+this.g+"}"};
var Wd=function(a){if(a instanceof Td&&a.constructor===Td&&a.h===Sd)return a.g;Gb("expected object of type SafeStyleSheet, got '"+a+"' of type "+Qa(a));return"type_error:SafeStyleSheet"},Ud=function(a){var b=new Td;b.g=a;return b},Yd=Ud("");var Zd;a:{var $d=Ha.navigator;if($d){var ae=$d.userAgent;if(ae){Zd=ae;break a}}Zd=""}var be=function(a){return-1!=Zd.indexOf(a)};var ce=function(){return be("Firefox")||be("FxiOS")},de=function(){return(be("Chrome")||be("CriOS"))&&!be("Edge")};var fe=function(){this.g="";this.h=ee;this.Vf=null};h=fe.prototype;h.tj=!0;h.nj=function(){return this.Vf};h.sd=!0;h.dd=function(){return this.g.toString()};h.toString=function(){return"SafeHtml{"+this.g+"}"};
var ge=function(a){if(a instanceof fe&&a.constructor===fe&&a.h===ee)return a.g;Gb("expected object of type SafeHtml, got '"+a+"' of type "+Qa(a));return"type_error:SafeHtml"},ie=function(a){if(a instanceof fe)return a;var b="object"==typeof a,c=null;b&&a.tj&&(c=a.nj());a=wd(b&&a.sd?a.dd():String(a));return he(a,c)},ee={},he=function(a,b){var c=new fe;c.g=a;c.Vf=b;return c};he("<!DOCTYPE html>",0);var je=he("",0);he("<br>",0);var ke={MATH:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},le=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){if("undefined"===typeof document)return!1;var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);if(!a.firstChild)return!1;b=a.firstChild.firstChild;a.innerHTML=ge(je);return!b.parentElement}),me=function(a,b){if(le())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=ge(b)},ne=function(a,
b){if(ke[a.tagName.toUpperCase()])throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of "+a.tagName+".");me(a,b)},oe=function(a){var b=new hd(fd,Vc(Wc));uc(a,"HTMLIFrameElement");a.src=id(b).toString()},pe=function(a,b){uc(a,"HTMLScriptElement");a.src=id(b);(b=La())&&a.setAttribute("nonce",b)};var qe=function(a){return a=wd(a,void 0)},re=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)},se=function(a,b){a=String(a);var c=a.indexOf(".");-1==c&&(c=a.length);return re("0",Math.max(0,b-c))+a},te=function(a){return null==a?"":String(a)},ue=function(a){return Array.prototype.join.call(arguments,"")},ve=function(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^cb()).toString(36)},we=function(a,
b,c){a=a.split(b);for(var d=[];0<c&&a.length;)d.push(a.shift()),c--;a.length&&d.push(a.join(b));return d};var xe=function(){return be("iPhone")&&!be("iPod")&&!be("iPad")};var ye=function(a){ye[" "](a);return a};ye[" "]=Oa;var ze=function(a,b){try{return ye(a[b]),!0}catch(c){}return!1},Be=function(a,b){var c=Ae;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var Ce=function(){return Ha.navigator||null},De=be("Opera"),Ee=be("Trident")||be("MSIE"),Fe=be("Edge"),He=be("Gecko")&&!(-1!=Zd.toLowerCase().indexOf("webkit")&&!be("Edge"))&&!(be("Trident")||be("MSIE"))&&!be("Edge"),Ie=-1!=Zd.toLowerCase().indexOf("webkit")&&!be("Edge"),Je=Ie&&be("Mobile"),Ke,Le=Ce();Ke=Le&&Le.platform||"";
var Me=be("Macintosh"),Ne=be("Windows"),Oe=be("Linux")||be("CrOS"),Pe=be("Android"),Qe=xe(),Re=be("iPad"),Se=be("iPod"),Te=function(){var a=Ha.document;return a?a.documentMode:void 0},Ue;
a:{var Ve="",We=function(){var a=Zd;if(He)return/rv:([^\);]+)(\)|;)/.exec(a);if(Fe)return/Edge\/([\d\.]+)/.exec(a);if(Ee)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ie)return/WebKit\/(\S+)/.exec(a);if(De)return/(?:Version)[ \/]?(\S+)/.exec(a)}();We&&(Ve=We?We[1]:"");if(Ee){var Xe=Te();if(null!=Xe&&Xe>parseFloat(Ve)){Ue=String(Xe);break a}}Ue=Ve}var Ye=Ue,Ae={},Ze=function(a){return Be(a,function(){return 0<=yd(Ye,a)})},$e;$e=Ha.document&&Ee?Te():void 0;var af=ce(),bf=xe()||be("iPod"),cf=be("iPad"),df=be("Android")&&!(de()||ce()||be("Opera")||be("Silk")),ef=de(),ff=be("Safari")&&!(de()||be("Coast")||be("Opera")||be("Edge")||be("Edg/")||be("OPR")||ce()||be("Silk")||be("Android"))&&!(xe()||be("iPad")||be("iPod"));var gf=function(a,b){return a+Math.random()*(b-a)};var hf=function(a,b,c){this.u=a;this.j=b;this.o=c;this.m=0;this.l=!1;this.g=this.h=null};hf.prototype.start=function(){if(null!=this.g)throw Error("Cannot call Retry.start more than once.");this.g=new Cb;this.D();return this.g.g};hf.prototype.D=function(){var a=this;this.h=null;this.l||(this.m++,this.u().then(function(b){jf(a);a.g.resolve(b)},function(b){a.m>=a.o?(jf(a),a.g.reject(b)):(a.h=setTimeout(a.D.bind(a),a.j),a.j*=2)}))};
hf.prototype.abort=function(a){jf(this);this.g.reject(void 0===a?Error("abort"):a)};var jf=function(a){null!=a.h&&(clearTimeout(a.h),a.h=null);a.l=!0};var kf=function(a,b){this.j=a;this.l=b;this.g=0;this.h=[]};kf.prototype.send=function(a,b,c,d){var e=void 0===d?{}:d;d=void 0===e.timeoutMillis?this.l:e.timeoutMillis;var f=void 0===e.yn?1:e.yn,g=void 0===e.headers?null:e.headers;e=void 0===e.responseType?"":e.responseType;a={Kb:new Cb,url:a,method:b,headers:g,responseType:e,body:c,timeoutMillis:d,zn:f};this.g<this.j?lf(this,a):this.h.push(a);return a.Kb.g};
var mf=function(a){if(0<a.h.length&&a.g<a.j){var b=a.h.shift();lf(a,b)}},lf=function(a,b){a.g++;b.zn--;nf(b).then(function(c){b.Kb.resolve(c);a.g--;mf(a)},function(c){0==b.zn?b.Kb.reject(c):a.h.push(b);a.g--;mf(a)})},nf=function(a){return new Promise(function(b,c){var d=new XMLHttpRequest;d.onreadystatechange=function(){d.readyState==XMLHttpRequest.DONE&&b(d)};d.timeout=a.timeoutMillis;d.ontimeout=function(){c(Error("Timed out"))};d.open(a.method,a.url,!0);null==a.headers?d.setRequestHeader("Content-Type",
"application/x-www-form-urlencoded;charset=utf-8"):a.headers.forEach(function(e){return d.setRequestHeader(e[0],e[1])});d.responseType=a.responseType;d.send(a.body)})};var pf=function(a,b,c){null==of&&(of=new kf(1,3E5));var d="https://crash.corp.google.com/samples?reportid=&q="+encodeURIComponent("UserComments='"+b+"'"),e="http://"+a+":8008/setup/send_log_report";of.send(e,"POST",JSON.stringify({uuid:b}),{headers:[["Content-Type","application/json"]]}).then(function(f){200==f.status?c("ok",d):c("error","Unable to POST to "+e+", error = "+f.status)},function(f){c("error",String(f))});return d},sf=function(a){var b=new qf;if("string"!==typeof a)return Promise.resolve(b);
null==rf&&(rf=new kf(1,3E3));return rf.send("http://"+a+":8008/setup/eureka_info","GET",void 0,{responseType:"text"}).then(function(c){c=JSON.parse(c.responseText);"cast_build_revision"in c?b.g=String(c.cast_build_revision):"build_version"in c&&(b.g=String(c.build_version));"connected"in c&&(b.l="true"==String(c.connected));"ethernet_connected"in c&&(b.h="true"==String(c.ethernet_connected));"has_update"in c&&(b.j="true"==String(c.has_update));"uptime"in c&&(c=Number(c.uptime),Number.isFinite(c)&&
(b.m=c))}).catch(function(c){gb("mr.DongleUtils").K("Unable to fetch/parse setup info.",c)}).then(function(){return b})},qf=function(){this.m=this.j=this.h=this.l=this.g=null},of=null,rf=null;var tf=function(a,b,c){this.source=a;this.type=b;this.message=c};var uf=function(a){var b=[],c=[],d={},e=function(f,g){var k=g+"  ";try{if(void 0===f)b.push("undefined");else if(null===f)b.push("NULL");else if("string"===typeof f)b.push('"'+f.replace(/\n/g,"\n"+g)+'"');else if(Ua(f))b.push(String(f).replace(/\n/g,"\n"+g));else if(Va(f)){f[Wa]||c.push(f);var m=f[Wa]||(f[Wa]=++Za);if(d[m])b.push("*** reference loop detected (id="+m+") ***");else{d[m]=!0;b.push("{");for(var p in f)Ua(f[p])||(b.push("\n"),b.push(k),b.push(p+" = "),e(f[p],k));b.push("\n"+g+"}");delete d[m]}}else b.push(f)}catch(u){b.push("*** "+
u+" ***")}};e(a,"");for(a=0;a<c.length;a++)Ya(c[a]);return b.join("")},vf=function(a){var b=vf;var c=Error();if(Error.captureStackTrace)Error.captureStackTrace(c,b),b=String(c.stack);else{try{throw c;}catch(e){c=e}b=(b=c.stack)?String(b):null}if(b)return b;b=[];c=arguments.callee.caller;for(var d=0;c&&(!a||d<a);){b.push(wf(c));b.push("()\n");try{c=c.caller}catch(e){b.push("[exception trying to get caller]\n");break}d++;if(50<=d){b.push("[...long stack...]");break}}a&&d>=a?b.push("[...reached max depth limit...]"):
b.push("[end]");return b.join("")},wf=function(a){if(xf[a])return xf[a];a=String(a);if(!xf[a]){var b=/function\s+([^\(]+)/m.exec(a);xf[a]=b?b[1]:"[Anonymous]"}return xf[a]},xf={},yf=Object.freeze||function(a){return a};var zf=function(a,b,c){this.reset(a,b,c,void 0,void 0)};zf.prototype.g=null;var Af=0;zf.prototype.reset=function(a,b,c,d,e){"number"==typeof e||Af++;this.m=d||cb();this.h=a;this.l=b;this.j=c;delete this.g};zf.prototype.getMessage=function(){return this.l};var Bf=function(a){this.m=a;this.g=this.l=this.h=this.j=null},Cf=function(a,b){this.name=a;this.value=b};Cf.prototype.toString=function(){return this.name};var Df=new Cf("SEVERE",1E3),Ef=new Cf("WARNING",900),Ff=new Cf("INFO",800),Gf=new Cf("CONFIG",700),Hf=new Cf("FINE",500),If=new Cf("FINER",400),Jf=new Cf("ALL",0);Bf.prototype.getName=function(){return this.m};Bf.prototype.getChildren=function(){this.l||(this.l={});return this.l};
var Kf=function(a){if(a.h)return a.h;if(a.j)return Kf(a.j);Gb("Root logger has no level set.");return null};h=Bf.prototype;h.log=function(a,b,c){a.value>=Kf(this).value&&(Ua(b)&&(b=b()),a=new zf(a,String(b),this.m),c&&(a.g=c),Lf(this,a))};h.Hb=function(a,b){this.log(Df,a,b)};h.K=function(a,b){this.log(Ef,a,b)};h.info=function(a,b){this.log(Ff,a,b)};h.config=function(a,b){this.log(Gf,a,b)};h.logRecord=function(a){a.h.value>=Kf(this).value&&Lf(this,a)};
var Lf=function(a,b){for(;a;){var c,d=a,e=b;if(d.g)for(var f=0;c=d.g[f];f++)c(e);a=a.j}},Mf={},Nf=null,Of=function(){Nf||(Nf=new Bf(""),Mf[""]=Nf,Nf.h=Gf)},Pf=function(a){Of();var b;if(!(b=Mf[a])){b=new Bf(a);var c=a.lastIndexOf("."),d=a.substr(c+1);c=Pf(a.substr(0,c));c.getChildren()[d]=b;b.j=c;Mf[a]=b}return b};var Qf=function(a,b,c,d){a&&a.log(b,c,d)},Rf=function(a,b,c){a&&a.Hb(b,c)},Sf=function(a,b,c){a&&a.K(b,c)},y=function(a,b){a&&a.info(b,void 0)},Tf=function(a,b){a&&a.log(Hf,b,void 0)};try{(new self.OffscreenCanvas(0,0)).getContext("2d")}catch(a){}var Uf=!He&&!Ee||Ee&&9<=Number($e)||He&&Ze("1.9.1");var Vf=function(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0};Vf.prototype.clone=function(){return new Vf(this.x,this.y)};Vf.prototype.toString=function(){return"("+this.x+", "+this.y+")"};Vf.prototype.equals=function(a){return a instanceof Vf&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};var Wf=function(a,b){return new Vf(a.x-b.x,a.y-b.y)};Vf.prototype.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
Vf.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};Vf.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};var Xf=function(a,b){this.width=a;this.height=b};h=Xf.prototype;h.clone=function(){return new Xf(this.width,this.height)};h.toString=function(){return"("+this.width+" x "+this.height+")"};h.aspectRatio=function(){return this.width/this.height};h.bc=function(){return!(this.width*this.height)};h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var Yf=function(a,b){a.width*=b;a.height*=b};var $f=function(a){return a?new Zf(9==a.nodeType?a:a.ownerDocument||a.document):Eb||(Eb=new Zf)},ag={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"},bg=function(a){a=a.document;a="CSS1Compat"==a.compatMode?a.documentElement:a.body;return new Xf(a.clientWidth,a.clientHeight)},dg=function(a){return a?cg(a):window},
cg=function(a){return a.parentWindow||a.defaultView},eg=function(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)},fg=function(a){for(var b;b=a.firstChild;)a.removeChild(b)},gg=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null},hg=function(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);
a.firstChild.data=String(b)}else fg(a),a.appendChild((9==a.nodeType?a:a.ownerDocument||a.document).createTextNode(String(b)))},Zf=function(a){this.g=a||Ha.document||document};h=Zf.prototype;h.setProperties=function(a,b){Bc(b,function(c,d){c&&"object"==typeof c&&c.sd&&(c=c.dd());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:ag.hasOwnProperty(d)?a.setAttribute(ag[d],c):jd(d,"aria-")||jd(d,"data-")?a.setAttribute(d,c):a[d]=c})};h.appendChild=function(a,b){a.appendChild(b)};
h.Ur=gg;h.getChildren=function(a){return Uf&&void 0!=a.children?a.children:Mb(a.childNodes,function(b){return 1==b.nodeType})};h.isElement=function(a){return Va(a)&&1==a.nodeType};h.contains=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};var ig=function(a){this.g="number"==typeof a?0<a?1:0>a?-1:null:null==a?null:a?-1:1};
