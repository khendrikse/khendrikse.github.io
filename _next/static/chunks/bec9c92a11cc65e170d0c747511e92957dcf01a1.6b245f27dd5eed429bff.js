(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},"/mE1":function(e,t,n){e.exports={footer:"footer_footer__qYcpy",footer__links:"footer_footer__links__5CZ7M",footer__link:"footer_footer__link__mPbqN"}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),u=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var u=a.key.slice(a.key.indexOf("$")+1);e.has(u)?o=!1:e.add(u)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,s=d.length;c<s;c++){var l=d[c];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var f=a.props[l],p=r[l]||new Set;"name"===l&&i||!p.has(f)?(p.add(f),r[l]=p):o=!1}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function v(e){var t=e.children,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(u.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}v.rewind=function(){};var _=v;t.default=_},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},G9T2:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n("q1tI"),a=n.n(r),o=n("g4pe"),i=n.n(o),u=n("YFqc"),c=n.n(u),s=n("Y0FH"),l=n.n(s),f=a.a.createElement;function d(){return f(a.a.Fragment,null,f("header",null,f("nav",{className:l.a.navbar},f("div",{className:l.a.navbar__inner},f("h1",{className:l.a.navbar__title},f(c.a,{href:"/"},f("a",null,"Karin Hendrikse"))),f("ul",{className:l.a.navbar__menu},f("li",null,f(c.a,{href:"/about"},f("a",{className:l.a.navbar__menu__item},"About"))),f("li",null,f(c.a,{href:"/blog"},f("a",{className:l.a.navbar__menu__item},"Blog"))),f("li",null,f(c.a,{href:"/projects"},f("a",{className:l.a.navbar__menu__item},"Projects"))),f("li",null,f(c.a,{href:"/"},f("a",{className:l.a.navbar__menu__item},"Home"))))))))}var p=n("/mE1"),v=n.n(p),_=a.a.createElement;function m(){return _("div",{className:v.a.footer},_("div",{className:v.a.footer__links},_("a",{className:v.a.footer__link,href:"https://dev.to/khenhey"},_("img",{width:"24px",height:"24px",src:"/assets/images/devto.svg?",alt:"DEV.to icon"}),"dev.to"),_("a",{className:v.a.footer__link,href:"https://github.com/khendrikse"},_("img",{width:"24px",height:"24px",src:"/assets/images/github.svg?",alt:"GitHub icon"}),"GitHub")),"\xa9 2021 Karin Hendrikse")}var h=a.a.createElement;function b(e){var t=e.children,n=e.pageTitle;return h(a.a.Fragment,null,h(i.a,null,h("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),h("meta",{name:"description",content:"Online space, blog and portfolio"}),h("title",null,n)),h("div",{className:"wrapper"},h("section",{className:"layout"},h(d,null),h("div",{className:"content"},t))),h(m,null))}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),u=n("a1gu"),c=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){i(n,e);var t=s(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},Y0FH:function(e,t,n){e.exports={navbar:"navbar_navbar__1QDXy",navbar__inner:"navbar_navbar__inner__1dVAh",navbar__title:"navbar_navbar__title__1XHtO",navbar__menu:"navbar_navbar__menu__2og52",navbar__menu__item:"navbar_navbar__menu__item__3A2Fp","navbar__menu__item--current":"navbar_navbar__menu__item--current__22LBE"}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o=a(n("q1tI")),i=n("elyg"),u=n("nOHt"),c=n("vNVm"),s={};function l(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,u.useRouter)(),a=n&&n.pathname||"/",f=o.default.useMemo((function(){var t=(0,i.resolveHref)(a,e.href,!0),n=r(t,2),o=n[0],u=n[1];return{href:o,as:e.as?(0,i.resolveHref)(a,e.as):u||o}}),[a,e.href,e.as]),d=f.href,p=f.as,v=e.children,_=e.replace,m=e.shallow,h=e.scroll,b=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var y=o.Children.only(v),g=y&&"object"===typeof y&&y.ref,M=(0,c.useIntersection)({rootMargin:"200px"}),w=r(M,2),k=w[0],E=w[1],x=o.default.useCallback((function(e){k(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,k]);(0,o.useEffect)((function(){var e=E&&t&&(0,i.isLocalURL)(d),r="undefined"!==typeof b?b:n&&n.locale,a=s[d+"%"+p+(r?"%"+r:"")];e&&!a&&l(n,d,p,{locale:r})}),[p,d,E,b,t,n]);var I={ref:x,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,u,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o,locale:c,scroll:u}).then((function(e){e&&u&&document.body.focus()})))}(e,n,d,p,_,m,h,b)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),l(n,d,p,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var C="undefined"!==typeof b?b:n&&n.locale,N=(0,i.getDomainLocale)(p,C,n&&n.locales,n&&n.domainLocales);I.href=N||(0,i.addBasePath)((0,i.addLocale)(p,C,n&&n.defaultLocale))}return o.default.cloneElement(y,I)};t.default=f},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),a=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!u,a=(0,o.useRef)(),s=(0,o.useState)(!1),l=r(s,2),f=l[0],d=l[1],p=(0,o.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),n||f||e&&e.tagName&&(a.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,i=r.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),c.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){u||f||(0,i.default)((function(){return d(!0)}))}),[f]),[p,f]};var o=n("q1tI"),i=a(n("0G5g")),u="undefined"!==typeof IntersectionObserver;var c=new Map}}]);