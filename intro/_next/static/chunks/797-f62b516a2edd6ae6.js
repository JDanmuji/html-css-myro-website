"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[797],{85703:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"Alert",{enumerable:!0,get:function(){return i}});var r=t(85893),o=t(93012),i=function(e){var n=e.children,t=e.title,i=e.open,c=e.confirmText,l=e.onClose,a=e.onConfirm;return(0,r.jsxs)(o.Modal,{open:i,onClose:l,children:[(0,r.jsxs)(o.Modal.Body,{children:[t&&(0,r.jsx)(o.Modal.Title,{children:t}),n&&(0,r.jsx)(o.Modal.Description,{children:n})]}),(0,r.jsx)(o.Modal.Actions,{children:(0,r.jsx)(o.Modal.Action,{color:"blue",onClick:function(){a&&a()||null==l||l()},children:void 0===c?"확인":c})})]})}},32863:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),function(e,n){Object.keys(e).forEach(function(t){"default"===t||Object.prototype.hasOwnProperty.call(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:function(){return e[t]}})})}(t(85703),n)},31746:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"Confirm",{enumerable:!0,get:function(){return i}});var r=t(85893),o=t(93012),i=function(e){var n=e.children,t=e.title,i=e.open,c=e.cancelText,l=e.confirmText,a=e.onClose,u=e.onCancel,f=e.onConfirm;return(0,r.jsxs)(o.Modal,{open:i,onClose:a,children:[(0,r.jsxs)(o.Modal.Body,{children:[t&&(0,r.jsx)(o.Modal.Title,{children:t}),n&&(0,r.jsx)(o.Modal.Description,{children:n})]}),(0,r.jsxs)(o.Modal.Actions,{children:[(0,r.jsx)(o.Modal.Action,{color:"gray",onClick:function(){u&&u()||null==a||a()},children:void 0===c?"취소":c}),(0,r.jsx)(o.Modal.Action,{color:"blue",onClick:function(){f&&f()||null==a||a()},children:void 0===l?"확인":l})]})]})}},33160:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),function(e,n){Object.keys(e).forEach(function(t){"default"===t||Object.prototype.hasOwnProperty.call(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:function(){return e[t]}})})}(t(31746),n)},89797:function(e,n,t){function r(e,n){return Object.keys(e).forEach(function(t){"default"===t||Object.prototype.hasOwnProperty.call(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:function(){return e[t]}})}),e}Object.defineProperty(n,"__esModule",{value:!0}),r(t(32863),n),r(t(33160),n),r(t(93012),n),r(t(77558),n),r(t(20433),n)},77558:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{LOGIN_CTA_MODAL_HASH:function(){return u},LoginCtaModalProvider:function(){return s},withLoginCtaModal:function(){return d},useLoginCtaModal:function(){return p}});var r=t(85893),o=t(67294),i=t(91769),c=t(83151),l=t(33160);function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}var u="login-cta-modal",f=(0,o.createContext)(void 0);function s(e){var n,t=e.children,s=(0,i.useTranslation)("common-web").t,d=(0,c.useUriHash)(),p=(0,c.useEventTrackingContext)().trackEvent,b=(0,c.useHistoryFunctions)(),y=b.back,v=b.navigate,j=(0,o.useContext)(f),O=function(e){if(Array.isArray(e))return e}(n=(0,o.useState)())||function(e,n){var t,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],c=!0,l=!1;try{for(o=o.call(e);!(c=(t=o.next()).done)&&(i.push(t.value),!n||i.length!==n);c=!0);}catch(a){l=!0,r=a}finally{try{c||null==o.return||o.return()}finally{if(l)throw r}}return i}}(n,2)||function(e,n){if(e){if("string"==typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(e,n)}}(n,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),g=O[0],h=O[1];return j?(0,r.jsx)(r.Fragment,{children:t}):(0,r.jsxs)(f.Provider,{value:{setReturnUrl:h},children:[t,(0,r.jsx)(l.Confirm,{open:d===u,title:s(["rogeuini-pilyohabnida.","로그인이 필요합니다."]),onClose:y,onCancel:y,onConfirm:function(){return p({ga:["로그인유도팝업_로그인선택"],fa:{action:"로그인유도팝업_로그인선택"}}),v("/login?returnUrl=".concat(encodeURIComponent(g||document.location.href))),!0},children:s(["rogeuinhago-teuripeuleul-deo-pyeonhage-iyonghaseyo","로그인하고 트리플을\n더 편하게 이용하세요\uD83D\uDE42"])})]})}function d(e){return function(n){return(0,r.jsx)(s,{children:(0,r.jsx)(e,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){var r,o;r=e,o=t[n],n in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o})}return e}({},n))})}}function p(){var e=(0,c.useHistoryFunctions)().push,n=(0,c.useEventTrackingContext)().trackEvent,t=(0,o.useContext)(f);return(0,o.useMemo)(function(){return{show:function(r){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";(null==t?void 0:t.setReturnUrl)&&r&&t.setReturnUrl(r),n({ga:["로그인유도팝업_노출",o],fa:{action:"로그인유도팝업_노출",referrer_event:o}}),e(u)}}},[e,n,t])}},93012:function(e,n,t){function r(e,n){return Object.keys(e).forEach(function(t){"default"===t||Object.prototype.hasOwnProperty.call(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:function(){return e[t]}})}),e}Object.defineProperty(n,"__esModule",{value:!0}),r(t(70806),n),r(t(68975),n),r(t(20330),n),r(t(97878),n),r(t(24182),n)},70806:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"ModalAction",{enumerable:!0,get:function(){return l}});var r,o=(r=t(19521))&&r.__esModule?r:{default:r};function i(){var e,n,t=(e=["\n  display: inline-block;\n  white-space: nowrap;\n  height: 50px;\n  line-height: 50px;\n  font-size: 14px;\n  font-weight: bold;\n  text-align: center;\n  color: ",";\n  cursor: pointer;\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return i=function(){return t},t}var c={gray:"rgba(58, 58, 58, 0.5)",blue:"#368fff"},l=o.default.a.withConfig({displayName:"modal-action__ModalAction",componentId:"sc-0-0"})(i(),function(e){return c[e.color||"gray"]})},68975:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"ModalActions",{enumerable:!0,get:function(){return u}});var r=t(67294),o=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i(n);if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var l=o?Object.getOwnPropertyDescriptor(e,c):null;l&&(l.get||l.set)?Object.defineProperty(r,c,l):r[c]=e[c]}return r.default=e,t&&t.set(e,r),r}(t(19521));function i(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(i=function(e){return e?t:n})(e)}function c(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function l(){var e=c(["\n        width: calc((100% - ","px) / ",");\n      "]);return l=function(){return e},e}function a(){var e=c(["\n  display: block;\n  width: 100%;\n  height: 50px;\n  border-top-style: solid;\n  border-width: 1px;\n  border-color: #f5f5f5;\n\n  a {\n    ",";\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  a:not(:first-child) {\n    border-width: 1px;\n    border-left-style: solid;\n    border-color: #f5f5f5;\n  }\n"]);return a=function(){return e},e}var u=o.default.div.withConfig({displayName:"modal-actions__ModalActions",componentId:"sc-0-0"})(a(),function(e){var n=e.children,t=r.Children.count(n);return(0,o.css)(l(),t-1,t)})},20330:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"ModalBody",{enumerable:!0,get:function(){return a}});var r=t(85893),o=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=c(n);if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(r,i,l):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}(t(19521)),i=t(49432);function c(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(c=function(e){return e?t:n})(e)}function l(){var e,n,t=(e=["\n        padding: 40px 30px;\n      "],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return l=function(){return t},t}var a=function(e){var n,t,o=e.children,i=function(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,["children"]);return(0,r.jsx)(u,(n=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){var r,o;r=e,o=t[n],n in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o})}return e}({},i),t=t={children:o},Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t.push.apply(t,r)}return t})(Object(t)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}),n))},u=(0,o.default)(i.Container).withConfig({displayName:"modal-body___StyledContainer",componentId:"sc-0-0"})(l())},40318:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{ModalContext:function(){return o},useModal:function(){return i}});var r=t(67294),o=(0,r.createContext)(void 0);function i(){var e=(0,r.useContext)(o);if(!e)throw Error();return e}},42045:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"ModalDescription",{enumerable:!0,get:function(){return c}});var r=t(85893),o=t(49432),i=t(35594),c=function(e){var n=e.children;return(0,r.jsx)(i.Dialog.Description,{as:o.Text,center:!0,size:"large",lineHeight:1.38,color:"gray",children:n})}},97878:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"ModalTitle",{enumerable:!0,get:function(){return u}});var r,o=t(85893),i=t(49432),c=t(35594);function l(){var e,n,t=(e=["\n  margin-bottom: 10px;\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return l=function(){return t},t}var a=(0,((r=t(19521))&&r.__esModule?r:{default:r}).default)(i.Text).withConfig({displayName:"modal-title__StyledText",componentId:"sc-0-0"})(l()),u=function(e){var n=e.children;return(0,o.jsx)(c.Dialog.Title,{as:a,bold:!0,center:!0,size:"big",color:"gray",children:n})}},24182:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"Modal",{enumerable:!0,get:function(){return h}});var r=t(85893),o=t(67294),i=t(49432),c=t(35594),l=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=b(n);if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var c=o?Object.getOwnPropertyDescriptor(e,i):null;c&&(c.get||c.set)?Object.defineProperty(r,i,c):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}(t(19521)),a=t(70806),u=t(68975),f=t(20330),s=t(40318),d=t(42045),p=t(97878);function b(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(b=function(e){return e?t:n})(e)}function y(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function v(){var e=y(["\n  width: 295px;\n  background-color: #fff;\n  outline: none;\n  border-radius: 6px;\n"]);return v=function(){return e},e}function j(){var e=y(["\n            position: fixed;\n            top: 0;\n            bottom: 0;\n            left: 0;\n            right: 0;\n            background-color: rgba(58, 58, 58, 0.5);\n            z-index: 9999;\n          "]);return j=function(){return e},e}function O(){var e=y(["\n            position: fixed;\n            top: 0;\n            bottom: 0;\n            left: 0;\n            right: 0;\n            z-index: 9999;\n          "]);return O=function(){return e},e}var g=(0,l.default)(i.Container).withConfig({displayName:"modal__ModalPanel",componentId:"sc-0-0"})(v()),h=function(e){var n=e.children,t=e.open,i=void 0!==t&&t,l=e.onClose,a=(0,o.useRef)(null);return i?(0,r.jsx)(s.ModalContext.Provider,{value:{open:i,onClose:l},children:(0,r.jsxs)(c.Dialog,{open:i,initialFocus:a,onClose:function(){return null==l?void 0:l()},children:[(0,r.jsx)(m,{}),(0,r.jsx)(w,{flex:!0,alignItems:"center",justifyContent:"center",children:(0,r.jsx)(c.Dialog.Panel,{as:g,ref:a,tabIndex:-1,children:n})})]})}):null};h.Action=a.ModalAction,h.Actions=u.ModalActions,h.Body=f.ModalBody,h.Title=p.ModalTitle,h.Description=d.ModalDescription;var m=(0,l.default)(i.Container).withConfig({displayName:"modal___StyledContainer",componentId:"sc-0-1"})(j()),w=(0,l.default)(i.FlexBox).withConfig({displayName:"modal___StyledFlexBox",componentId:"sc-0-2"})(O())},20433:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{TransitionType:function(){return i},TransitionModal:function(){return g},useTransitionModal:function(){return h},withTransitionModal:function(){return m}});var r,o,i,c,l=t(85893),a=t(67294),u=t(91769),f=(r=t(19521))&&r.__esModule?r:{default:r},s=t(49432),d=t(83151),p=t(93012);function b(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){b(e,n,t[n])})}return e}function v(){var e,n,t=(e=["\n  display: block;\n  width: 66px;\n  height: 66px;\n  margin: 0 auto 10px;\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return v=function(){return t},t}var j=f.default.img.withConfig({displayName:"transition-modal__IconImage",componentId:"sc-0-0"})(v());(o=i||(i={})).General="general",o.Gallery="gallery",o.Scrap="scrap",o.Review="review",o.ReviewWrite="reviewWrite",o.ReviewThumbnail="reviewThumbnail",o.ReviewSelect="reviewSelect",o.ReviewCommentSelect="reviewCommentSelect",o.OpenReviewList="openReviewList",o.Article="article",o.Tna="tna",o.Hotel="hotel",o.View="view",o.AddPoisToTripSelect="addPoisToTripSelect",o.Link="link",o.LoungeHome="loungeHome";var O=(b(c={},i.General,{}),b(c,i.Gallery,{eventLabel:"대표사진_선택"}),b(c,i.Scrap,{eventLabel:"POI저장"}),b(c,i.Review,{eventLabel:"리뷰_리뷰글더보기_선택"}),b(c,i.ReviewWrite,{eventLabel:"리뷰_리뷰쓰기"}),b(c,i.ReviewThumbnail,{eventLabel:"리뷰_리뷰썸네일_클릭"}),b(c,i.ReviewSelect,{eventLabel:"리뷰_리뷰내용_선택"}),b(c,i.ReviewCommentSelect,{eventLabel:"리뷰_댓글_선택"}),b(c,i.OpenReviewList,{eventLabel:"리뷰_리스트더보기_선택"}),b(c,i.Article,{eventLabel:"추천가이드_더보기"}),b(c,i.Tna,{eventLabel:"투어티켓_상품선택"}),b(c,i.Hotel,{eventLabel:"호텔_선택"}),b(c,i.View,{description:["iljeong-jjagibuteo-hotel-tueotikes-yeyagggaji-teuripeulro-han-beone-yeohaeng-junbihaseyo.","일정 짜기부터 호텔, 투어・티켓 예약까지!\n트리플로 한 번에 여행 준비하세요."],eventLabel:"컨텐츠_연속보기"}),b(c,i.AddPoisToTripSelect,{eventLabel:"내일정으로담기_선택"}),b(c,i.Link,{eventLabel:"링크선택"}),b(c,i.LoungeHome,{eventLabel:"라운지홈"}),c);function g(e){var n=e.deepLink,t=e.onActionClick,r=(0,u.useTranslation)("common-web").t,o=(0,d.useUriHash)(),i=(0,d.useHistoryFunctions)().back,c=(0,d.useEventTrackingContext)().trackEvent,a=(o||"").match(/^transition\.(.+)$/);if(a&&Object.keys(O).includes(a[1])){var f=O[a[1]]||{},b=f.description,y=void 0===b?["soljighan-ribyu-110mangaewa-coesin-yeohaeng-sosigdeulggaji-aebeseo-pyeonhage-hwaginhaseyo","솔직한 리뷰 110만개와 최신 여행 소식까지 앱에서 편하게 확인하세요!"]:b,v=f.eventLabel,g=void 0===v?"":v;return(0,l.jsxs)(p.Modal,{open:!0,onClose:i,children:[(0,l.jsxs)(p.Modal.Body,{children:[(0,l.jsx)(j,{src:"https://assets.triple.guide/images/ico-popup-app@4x.png"}),(0,l.jsx)(p.Modal.Title,{children:r(["yeogineun-teuripeul-aebi-pilyohaeyo","여기는 트리플 앱이 필요해요"])}),y?(0,l.jsx)(s.Text,{center:!0,alpha:.7,size:"small",children:r(y)}):null]}),(0,l.jsxs)(p.Modal.Actions,{children:[(0,l.jsx)(p.Modal.Action,{color:"gray",onClick:i,children:r(["cwiso","취소"])}),(0,l.jsx)(p.Modal.Action,{color:"blue",onClick:function(){null==t||t(),c({ga:["설치유도팝업_선택",["선택_트리플가기",g].filter(function(e){return e}).join("_")],fa:{action:"설치유도팝업_선택",referrer_event:g}}),window.location.href=n},children:r(["teuripeul-gagi","트리플 가기"])})]})]})}return null}function h(){var e=(0,d.useEventTrackingContext)().trackEvent,n=(0,d.useHistoryFunctions)().push;return(0,a.useMemo)(function(){return{show:function(t){var r,o=null!==(r=O[t].eventLabel)&&void 0!==r?r:"";e({ga:["설치유도팝업_노출",o],fa:{action:"설치유도팝업_노출",referrer_event:o}}),n("transition.".concat(t))}}},[n,e])}function m(e){return function(n){var t,r,o=(0,d.useHistoryFunctions)().push;return(0,l.jsx)(e,y({},(t=y({},n),r=r={showTransitionModal:function(e){return o("transition.".concat(e))}},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t.push.apply(t,r)}return t})(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}),t)))}}}}]);
