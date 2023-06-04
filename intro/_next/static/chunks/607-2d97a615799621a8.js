"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[607],{22949:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useWebUrlBaseAdder",{enumerable:!0,get:function(){return a}});var n=t(83151),o=t(17047);function a(){var e=(0,n.useEnv)().webUrlBase;return function(r){var t=(0,o.parseUrl)(e),n=t.scheme,a=t.host;return"/"===r?e:(0,o.generateUrl)({scheme:n,host:a},r)}}},82475:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return o}});var n=t(40434);function o(){return function(e){var r=e.href,t=e.target,o=n.ANCHOR_TARGET_MAP[t];window.open(r,o,"_blank"===o?"noopener":void 0)}}},87572:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useDisabledLinkNotifierCreator",{enumerable:!0,get:function(){return l}});var n=t(91769),o=t(89797),a=t(83151),u=t(50904);function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.alert,t=void 0===r?i:r,l=(0,n.useTranslation)("common-web").t,c=(0,u.useTripleClientMetadata)(),s=(0,a.useSessionAvailability)(),f=(0,o.useTransitionModal)().show,p=(0,o.useLoginCtaModal)().show;return function(e){var r=e.allowSource,n=void 0===r?"all":r;return"none"===n?function(){t(l(["jeobgeunhal-su-eobsneun-ringkeuibnida.","접근할 수 없는 링크입니다."]))}:c||"app"!==n&&"app-with-session"!==n?!1===s&&"app-with-session"===n?p:void 0:function(){f(o.TransitionType.General)}}}function i(e){"undefined"!=typeof window&&window.alert(e)}},26025:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"RouterGuardedLink",{enumerable:!0,get:function(){return s}});var n,o=t(85893),a=(n=t(19521))&&n.__esModule?n:{default:n},u=t(87572),l=t(37144);function i(){var e,r,t=(e=["\n  line-height: normal;\n  color: -webkit-link;\n"],r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}})));return i=function(){return t},t}var c=a.default.a.withConfig({displayName:"router-guarded-link__A",componentId:"sc-0-0"})(i());function s(e){var r,t,n=e.relList,a=e.allowSource,i=e.children,s=e.className,f=function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,["relList","allowSource","children","className"]),p=(0,l.useRel)(void 0===n?[]:n),b=(0,u.useDisabledLinkNotifierCreator)()({allowSource:void 0===a?"all":a});return void 0!==b?(0,o.jsx)("button",{className:s,onClick:function(){return b()},children:i}):(0,o.jsx)(c,(r=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(r){var n,o;n=e,o=t[r],r in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o})}return e}({className:s,rel:p},f),t=t={children:i},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):(function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t.push.apply(t,n)}return t})(Object(t)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}),r))}},40434:function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ANCHOR_TARGET_MAP",{enumerable:!0,get:function(){return t}});var t={current:"_self",new:"_blank",browser:"_blank"}},37144:function(e,r){function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Array.from(new Set(["noopener","noreferer"].concat(function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()))).join(" ")}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useRel",{enumerable:!0,get:function(){return n}})},53952:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return l}});var n,o=(n=t(82475))&&n.__esModule?n:{default:n},a=t(87572),u=t(76324);function l(){var e=(0,u.useExternalHrefHandler)(),r=(0,a.useDisabledLinkNotifierCreator)(),t=(0,o.default)();return function(n){var o=n.allowSource,a=n.href,u=n.target,l=n.lnbTarget,i=n.noNavbar,c=n.shouldPresent,s=n.swipeToClose,f=n.title,p=r({allowSource:o});if(void 0!==p){p();return}var b=!1;e({href:a,target:u,lnbTarget:l,noNavbar:i,shouldPresent:c,swipeToClose:s,title:f,stopDefaultHandler:function(){b=!0}}),!1===b&&t({href:a,target:u})}}},76324:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useExternalHrefHandler",{enumerable:!0,get:function(){return u}});var n=t(50904),o=t(22949),a=t(18170);function u(){var e=(0,n.useTripleClientMetadata)(),r=(0,n.useTripleClientNavigate)(),t=r.openInlink,u=r.openOutlink,l=(0,o.useWebUrlBaseAdder)();return function(r){var n=r.href,o=r.target,i=r.lnbTarget,c=r.noNavbar,s=r.shouldPresent,f=r.swipeToClose,p=r.title,b=r.stopDefaultHandler,d=(0,a.checkHrefIsAbsoluteUrl)(n);if("current"===o&&e&&!0===d){b();return}if("new"===o&&e){b(),!0===d?u(n,{title:p}):t(n,{lnbTarget:i,noNavbar:c,shouldPresent:s,swipeToClose:f});return}"browser"===o&&e&&(b(),u(d?n:l(n),{target:"browser",title:p}))}}},64512:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),function(e,r){for(var t in r)Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}(r,{ExternalLink:function(){return o.ExternalLink},useExternalRouter:function(){return a.default}});var n,o=t(44812),a=(n=t(53952))&&n.__esModule?n:{default:n}},44812:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ExternalLink",{enumerable:!0,get:function(){return f}});var n=t(85893),o=t(67294),a=t(50904),u=t(40434),l=t(26025),i=t(76324),c=t(18170);function s(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}function f(e){var r=e.href,t=e.target,f=e.relList,p=void 0===f?[]:f,b=e.allowSource,d=e.title,y=e.lnbTarget,h=e.noNavbar,v=e.swipeToClose,w=e.shouldPresent,O=e.onClick,g=e.onError,P=e.className,j=e.children,m=(0,a.useTripleClientMetadata)(),k=(0,i.useExternalHrefHandler)(),_=(0,c.checkHrefIsAbsoluteUrl)(r),T=m&&_&&"current"===t;return(0,o.useEffect)(function(){T&&g&&g(Error("현재 창에서 절대 경로로 이동할 수 없습니다."))},[T]),(0,n.jsx)(l.RouterGuardedLink,{className:P,href:r,relList:_?["external"].concat(function(e){if(Array.isArray(e))return s(e)}(p)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(p)||function(e,r){if(e){if("string"==typeof e)return s(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return s(e,r)}}(p)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()):p,allowSource:T?"none":b,onClick:function(e){O&&O(),k({href:r,target:t,lnbTarget:y,noNavbar:h,shouldPresent:w,swipeToClose:v,title:d,stopDefaultHandler:function(){e.preventDefault()}})},target:u.ANCHOR_TARGET_MAP[t],children:j})}},18170:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"checkHrefIsAbsoluteUrl",{enumerable:!0,get:function(){return o}});var n=t(17047);function o(e){return!!(0,n.parseUrl)(e).host}},75877:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useHrefToProps",{enumerable:!0,get:function(){return n.useHrefToProps}});var n=t(72703)},72703:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useHrefToProps",{enumerable:!0,get:function(){return p}});var n,o=t(67294),a=(n=t(80129))&&n.__esModule?n:{default:n},u=t(83151),l=t(17047),i=t(50904);function c(e){if(Array.isArray(e))return c(e);if("object"==typeof e)throw Error("Query parameter is not string type. ".concat(e));return e}function s(e){var r=(0,l.parseUrl)(e),t=r.path,n=r.query;if("/inlink"===t){var o=c(a.default.parse(n||"").path);if(!o)throw Error("inlink has no path.");return o}if("/outlink"===t){var u=c(a.default.parse(n||"").url);if(!u)throw Error("outlink has no url.");return u}return e}function f(e){var r,t,n,o,a,u=e.href,i=e.webUrlBase;return t=(r={href:s(u),webUrlBase:i}).href,n=r.webUrlBase,o=(0,l.parseUrl)(t).host,a=(0,l.parseUrl)(n).host,o&&o===a?(0,l.generateUrl)({scheme:void 0,host:void 0},t):t}function p(e){var r=(0,u.useEnv)().webUrlBase,t=(0,i.useTripleClientMetadata)(),n=(e||{}).onError;return(0,o.useCallback)(function(e){try{var o,u,i,c,p,b,d,y,h,v,w,O;return{href:f({href:e,webUrlBase:r}),target:(u=(o={href:e,isPublic:!t}).href,i=o.isPublic,p=(c=(0,l.parseUrl)(u)).path,b=c.query,"/outlink"===p&&"browser"===a.default.parse(b||"").target?"browser":i?"current":"new"),allowSource:(y=(d={href:e,webUrlBase:r}).href,h=d.webUrlBase,w=(v=(0,l.parseUrl)(y)).path,O=v.query,"/inlink"===w?a.default.parse(O||"")._web_expand?"all":(0,l.checkIfRoutable)({href:s(y)})?"app":"app-with-session":(0,l.checkIfRoutable)({href:f({href:y,webUrlBase:h})})?"all":"app-with-session")}}catch(g){return n&&n(g),{href:e,target:"new",allowSource:"app-with-session"}}},[t,n,r])}},47607:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useHrefToProps",{enumerable:!0,get:function(){return n.useHrefToProps}}),o(t(60094),r),o(t(64512),r),o(t(99352),r);var n=t(75877);function o(e,r){return Object.keys(e).forEach(function(t){"default"===t||Object.prototype.hasOwnProperty.call(r,t)||Object.defineProperty(r,t,{enumerable:!0,get:function(){return e[t]}})}),e}},38893:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useBasePathAdder",{enumerable:!0,get:function(){return a}});var n=t(17047),o=t(11163);function a(){var e=(0,o.useRouter)().basePath;return function(r){var t,o,a,u;return o=(t=(0,n.parseUrl)(r)).path,a=function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(t,["path"]),u="/"===o?e:"".concat(e).concat(o),(0,n.generateUrl)(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(r){var n,o;n=e,o=t[r],r in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o})}return e}({path:u},a))}}},59533:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return s}});var n,o=t(87572),a=(n=t(82475))&&n.__esModule?n:{default:n},u=t(38893),l=t(25231);function i(e,r,t,n,o,a,u){try{var l=e[a](u),i=l.value}catch(c){t(c);return}l.done?r(i):Promise.resolve(i).then(n,o)}var c=function(e,r){var t,n,o,a,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(t)throw TypeError("Generator is already executing.");for(;u;)try{if(t=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return u.label++,{value:a[1],done:!1};case 5:u.label++,n=a[1],a=[0];continue;case 7:a=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){u=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){u.label=a[1];break}if(6===a[0]&&u.label<o[1]){u.label=o[1],o=a;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(a);break}o[2]&&u.ops.pop(),u.trys.pop();continue}a=r.call(e,u)}catch(l){a=[6,l],n=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}};function s(){var e,r,t=(0,l.useLocalHrefHandler)(),n=(0,u.useBasePathAdder)(),s=(0,o.useDisabledLinkNotifierCreator)(),f=(0,a.default)();return e=function(e){var r,o,a,u,l,i,p,b,d,y,h;return c(this,function(c){switch(c.label){case 0:if(r=e.allowSource,o=e.href,a=e.target,u=e.lnbTarget,l=e.noNavbar,i=e.shouldPresent,p=e.swipeToClose,b=e.replace,d=e.scroll,void 0!==(y=s({allowSource:r})))return y(),[2];return h=!1,[4,t({href:o,target:a,lnbTarget:u,noNavbar:l,shouldPresent:i,swipeToClose:p,replace:b,scroll:d,isKeyPressing:!1,stopDefaultHandler:function(){h=!0}})];case 1:return c.sent(),!1===h&&f({href:n(o),target:a}),[2]}})},r=function(){var r=this,t=arguments;return new Promise(function(n,o){var a=e.apply(r,t);function u(e){i(a,n,o,u,l,"next",e)}function l(e){i(a,n,o,u,l,"throw",e)}u(void 0)})},function(e){return r.apply(this,arguments)}}},25231:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useLocalHrefHandler",{enumerable:!0,get:function(){return s}});var n=t(11163),o=t(50904),a=t(22949),u=t(38893);function l(e,r,t,n,o,a,u){try{var l=e[a](u),i=l.value}catch(c){t(c);return}l.done?r(i):Promise.resolve(i).then(n,o)}function i(e){return function(){var r=this,t=arguments;return new Promise(function(n,o){var a=e.apply(r,t);function u(e){l(a,n,o,u,i,"next",e)}function i(e){l(a,n,o,u,i,"throw",e)}u(void 0)})}}var c=function(e,r){var t,n,o,a,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(t)throw TypeError("Generator is already executing.");for(;u;)try{if(t=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return u.label++,{value:a[1],done:!1};case 5:u.label++,n=a[1],a=[0];continue;case 7:a=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){u=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){u.label=a[1];break}if(6===a[0]&&u.label<o[1]){u.label=o[1],o=a;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(a);break}o[2]&&u.ops.pop(),u.trys.pop();continue}a=r.call(e,u)}catch(l){a=[6,l],n=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}};function s(){var e,r,t=(0,n.useRouter)(),l=(0,o.useTripleClientMetadata)(),s=(0,o.useTripleClientNavigate)(),f=s.openInlink,p=s.openOutlink,b=(0,a.useWebUrlBaseAdder)(),d=(0,u.useBasePathAdder)(),y=(e=i(function(e,r){var n,o,a;return c(this,function(u){switch(u.label){case 0:return n=r.replace,a=void 0===(o=r.scroll)||o,[4,t[n?"replace":"push"](e,void 0,{scroll:a})];case 1:return u.sent()&&a&&window.scrollTo(0,0),[2]}})}),function(r,t){return e.apply(this,arguments)});return r=i(function(e){var r,t,n,o,a,u,i,s,h,v,w;return c(this,function(c){switch(c.label){case 0:if(r=e.href,t=e.target,n=e.lnbTarget,o=e.noNavbar,a=e.shouldPresent,u=e.swipeToClose,i=e.replace,s=e.scroll,h=e.isKeyPressing,v=e.stopDefaultHandler,!("current"===t&&!1===h))return[3,2];return v(),[4,y(r,{replace:i,scroll:s})];case 1:return c.sent(),[2];case 2:if(w=d(r),"new"===t&&l)return v(),f(w,{lnbTarget:n,noNavbar:o,shouldPresent:a,swipeToClose:u}),[2];return"browser"===t&&l&&(v(),p(b(w),{target:"browser"})),[2]}})}),function(e){return r.apply(this,arguments)}}},60094:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),function(e,r){for(var t in r)Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}(r,{LocalLink:function(){return o.LocalLink},useLocalRouter:function(){return a.default}});var n,o=t(34139),a=(n=t(59533))&&n.__esModule?n:{default:n}},34139:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"LocalLink",{enumerable:!0,get:function(){return s}});var n=t(85893),o=t(40434),a=t(26025),u=t(38893),l=t(25231);function i(e,r,t,n,o,a,u){try{var l=e[a](u),i=l.value}catch(c){t(c);return}l.done?r(i):Promise.resolve(i).then(n,o)}var c=function(e,r){var t,n,o,a,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(t)throw TypeError("Generator is already executing.");for(;u;)try{if(t=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return u.label++,{value:a[1],done:!1};case 5:u.label++,n=a[1],a=[0];continue;case 7:a=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){u=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){u.label=a[1];break}if(6===a[0]&&u.label<o[1]){u.label=o[1],o=a;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(a);break}o[2]&&u.ops.pop(),u.trys.pop();continue}a=r.call(e,u)}catch(l){a=[6,l],n=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}};function s(e){var r,t,s=e.href,f=e.target,p=e.relList,b=e.allowSource,d=e.replace,y=e.scroll,h=void 0===y||y,v=e.lnbTarget,w=e.noNavbar,O=e.swipeToClose,g=e.shouldPresent,P=e.onClick,j=e.className,m=e.children,k=(0,l.useLocalHrefHandler)(),_=(0,u.useBasePathAdder)()(s),T=(r=function(e){return c(this,function(r){switch(r.label){case 0:return P&&P(),[4,k({href:s,target:f,lnbTarget:v,noNavbar:w,shouldPresent:g,swipeToClose:O,replace:d,scroll:h,isKeyPressing:e.metaKey||e.ctrlKey||e.shiftKey||e.altKey,stopDefaultHandler:function(){e.preventDefault()}})];case 1:return r.sent(),[2]}})},t=function(){var e=this,t=arguments;return new Promise(function(n,o){var a=r.apply(e,t);function u(e){i(a,n,o,u,l,"next",e)}function l(e){i(a,n,o,u,l,"throw",e)}u(void 0)})},function(e){return t.apply(this,arguments)});return(0,n.jsx)(a.RouterGuardedLink,{className:j,href:_,relList:p,allowSource:b,onClick:T,target:o.ANCHOR_TARGET_MAP[f],children:m})}},96960:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return function e(r){var t,a,u=r.href,l=r.webUrlBase,i=r.expandInlinkStrictly,c=r.allowRawOutlink,s=(0,o.parseUrl)(l).host,f=(0,o.parseUrl)(u),p=f.host,b=f.path,d=f.query,y=function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(f,["host","path","query"]);if(p&&s===p)return(0,o.generateUrl)((t=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(r){var n,o;n=e,o=t[r],r in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o})}return e}({path:b,query:d},y),a=a={scheme:void 0},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):(function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t.push.apply(t,n)}return t})(Object(a)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}),t));if(p);else if("/inlink"===b){var h=(0,n.parse)(d),v=h.path,w=h._web_expand;return i&&void 0===w?u:v}else if(!c&&"/outlink"===b)return e({href:(0,n.parse)(d).url,webUrlBase:l,expandInlinkStrictly:i});return u}}});var n=t(80129),o=t(17047)},99352:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useNavigate",{enumerable:!0,get:function(){return s}});var n,o=t(89797),a=t(17047),u=t(67294),l=t(83151),i=t(50904),c=(n=t(96960))&&n.__esModule?n:{default:n};function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.changeLocationHref,t=void 0===r?f:r,n=(0,l.useEnv)().webUrlBase,s=(0,l.useSessionAvailability)(),p=(0,o.useTransitionModal)().show,b=(0,o.useLoginCtaModal)().show,d=(0,i.useTripleClientMetadata)(),y=(0,i.useTripleClientNavigate)(),h=y.openOutlink,v=y.openNativeLink,w=(0,u.useCallback)(function(e){var r=(0,c.default)({href:e,webUrlBase:n,expandInlinkStrictly:!0});if((0,a.checkIfRoutable)({href:r})){t(r);return}p(o.TransitionType.General)},[t,p,n]),O=(0,u.useCallback)(function(e,r){var t=(0,c.default)({href:e,webUrlBase:n,expandInlinkStrictly:!1,allowRawOutlink:!1});if(!1===s&&!(0,a.checkIfRoutable)({href:t})){b();return}var o=(0,a.parseUrl)(e).scheme;"http"===o||"https"===o?h(e,r):v(e)},[v,h,s,b,n]);return d?O:w}function f(e){window.location.href=e}}}]);
