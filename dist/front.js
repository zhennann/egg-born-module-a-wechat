window["a-wechat"]=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r;n(1);t.default={install:function(e,t){return r?console.error("already installed."):(r=e,t({routes:n(4).default,store:n(6).default(r),config:n(7).default,locales:n(8).default,components:n(10).default}))}}},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(11).default)("f0c68f58",r,!0,{})},function(e,t,n){(e.exports=n(3)(!0)).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"module.less"}])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[n].concat(i).concat([o]).join("\n")}var s;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){"use strict";n.r(t),t.default=[]},function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=5},function(e,t,n){"use strict";n.r(t),t.default=function(e){return{state:{},getters:{},mutations:{},actions:{}}}},function(e,t,n){"use strict";n.r(t),t.default={jssdk:{url:{jweixin:"https://res.wx.qq.com/open/js/jweixin-1.4.0.js"}}}},function(e,t,n){"use strict";n.r(t),t.default={"zh-cn":n(9).default}},function(e,t,n){"use strict";n.r(t),t.default={}},function(e,t,n){"use strict";n.r(t);var r=function(e,t,n,r,o,i,s,a){var u,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),s?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=u):o&&(u=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(c.functional){c._injectStyles=u;var f=c.render;c.render=function(e,t){return u.call(t),f(e,t)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,u):[u]}return{exports:e,options:c}}({meta:{global:!1,disable:function(e){var t=e.ctx;e.provider;return new Promise((function(e,n){return t.$device.wechat?(t.$meta.vueApp.toLogin({url:"/api/a/wechat/passport/a-wechat/wechat"}),n()):e(!0)}))}},data:function(){return{}},methods:{}},(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,"25765a58",null).exports,o=null,i={meta:{global:!1},methods:{onAction:function(e){var t=e.ctx,n=e.action,r=e.item;if("config"===n.name)return this._createConfig({ctx:t,item:r})},_createConfig:function(){var e=this;return this.$device.wechat?o?{wx:o}:new Promise((function(t,n){e.$meta.util.loadScript(e.$config.jssdk.url.jweixin,(function(){e.$api.post("jssdk/jsconfig",{url:location.href.split("#")[0]}).then((function(e){window.wx.config(e),window.wx.error((function(e){n(e)})),window.wx.ready((function(){o=window.wx,t({wx:window.wx})}))}))}))})):null}}};t.default={button:r,jssdk:i}},function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=i[0],a={id:e+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}n.r(t),n.d(t,"default",(function(){return p}));var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},s=o&&(document.head||document.getElementsByTagName("head")[0]),a=null,u=0,c=!1,f=function(){},l=null,d="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e,t,n,o){c=n,l=o||{};var s=r(e,t);return h(s),function(t){for(var n=[],o=0;o<s.length;o++){var a=s[o];(u=i[a.id]).refs--,n.push(u)}t?h(s=r(e,t)):s=[];for(o=0;o<n.length;o++){var u;if(0===(u=n[o]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete i[u.id]}}}}function h(e){for(var t=0;t<e.length;t++){var n=e[t],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(m(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var s=[];for(o=0;o<n.parts.length;o++)s.push(m(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:s}}}}function v(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function m(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(c)return f;r.parentNode.removeChild(r)}if(d){var o=u++;r=a||(a=v()),t=y.bind(null,r,o,!1),n=y.bind(null,r,o,!0)}else r=v(),t=b.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var g,w=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function y(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function b(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),l.ssrId&&e.setAttribute("data-vue-ssr-id",t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}]);