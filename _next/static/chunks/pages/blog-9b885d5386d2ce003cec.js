(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{30959:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(85893),a=n(9008),s=n(41664),i=n(54308),o=n.n(i);function l(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("header",{children:(0,r.jsx)("nav",{className:o().navbar,children:(0,r.jsxs)("div",{className:o().navbar__inner,children:[(0,r.jsx)("h1",{className:o().navbar__title,children:(0,r.jsx)(s.default,{href:"/",children:(0,r.jsx)("a",{children:"Karin Hendrikse"})})}),(0,r.jsxs)("ul",{className:o().navbar__menu,children:[(0,r.jsx)("li",{children:(0,r.jsx)(s.default,{href:"/about",children:(0,r.jsx)("a",{className:o().navbar__menu__item,children:"About"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(s.default,{href:"/blog",children:(0,r.jsx)("a",{className:o().navbar__menu__item,children:"Blog"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(s.default,{href:"/projects",children:(0,r.jsx)("a",{className:o().navbar__menu__item,children:"Projects"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(s.default,{href:"/",children:(0,r.jsx)("a",{className:o().navbar__menu__item,children:"Home"})})})]})]})})})})}var c=n(2129),_=n.n(c);function u(){return(0,r.jsxs)("div",{className:_().footer,children:[(0,r.jsxs)("div",{className:_().footer__links,children:[(0,r.jsxs)("a",{className:_().footer__link,href:"https://dev.to/khenhey",children:[(0,r.jsx)("img",{width:"24px",height:"24px",src:"/assets/images/devto.svg?",alt:"DEV.to icon"}),"dev.to"]}),(0,r.jsxs)("a",{className:_().footer__link,href:"https://github.com/khendrikse",children:[(0,r.jsx)("img",{width:"24px",height:"24px",src:"/assets/images/github.svg?",alt:"GitHub icon"}),"GitHub"]})]}),"\xa9 2021 Karin Hendrikse"]})}function f(e){var t=e.children,n=e.pageTitle;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("meta",{name:"description",content:"Online space, blog and portfolio"}),(0,r.jsx)("title",{children:n})]}),(0,r.jsx)("div",{className:"wrapper",children:(0,r.jsxs)("section",{className:"layout",children:[(0,r.jsx)(l,{}),(0,r.jsx)("div",{className:"content",children:t})]})}),(0,r.jsx)(u,{})]})}},61689:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var r=n(85893),a=n(41664),s=n(1901),i=n.n(s);function o(e){var t=e.item;return(0,r.jsxs)("li",{className:i().post_item,children:[(0,r.jsxs)("div",{className:i().post_item__label_wrapper,children:[(0,r.jsx)("div",{className:i().post_item__label,children:new Date(t.date).toDateString()}),(0,r.jsx)("h2",{className:i().post_item__title,children:(0,r.jsx)(a.default,{href:"/post/".concat(t.slug),children:(0,r.jsx)("a",{className:i().post_item__title__link,children:t.frontmatter.title})})})]}),(0,r.jsx)("div",{className:i().post_item__content,children:t.frontmatter.intro})]})}var l=n(4606),c=n.n(l);function _(e){var t=e.posts,n=e.max;return"undefined"===t?null:(0,r.jsxs)("div",{children:[!t&&(0,r.jsx)("div",{children:"No posts!"}),(0,r.jsx)("ul",{className:c().post_list,children:t&&t.map((function(e,t){return t>n-1?null:(0,r.jsx)(o,{item:e},e.slug)}))})]})}},92167:function(e,t,n){"use strict";var r=n(63038);t.default=void 0;var a,s=(a=n(67294))&&a.__esModule?a:{default:a},i=n(21063),o=n(34651),l=n(7426);var c={};function _(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[t+"%"+n+(a?"%"+a:"")]=!0}}var u=function(e){var t,n=!1!==e.prefetch,a=o.useRouter(),u=s.default.useMemo((function(){var t=i.resolveHref(a,e.href,!0),n=r(t,2),s=n[0],o=n[1];return{href:s,as:e.as?i.resolveHref(a,e.as):o||s}}),[a,e.href,e.as]),f=u.href,d=u.as,p=e.children,m=e.replace,h=e.shallow,v=e.scroll,x=e.locale;"string"===typeof p&&(p=s.default.createElement("a",null,p));var b=(t=s.default.Children.only(p))&&"object"===typeof t&&t.ref,j=l.useIntersection({rootMargin:"200px"}),g=r(j,2),N=g[0],k=g[1],y=s.default.useCallback((function(e){N(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,N]);s.default.useEffect((function(){var e=k&&n&&i.isLocalURL(f),t="undefined"!==typeof x?x:a&&a.locale,r=c[f+"%"+d+(t?"%"+t:"")];e&&!r&&_(a,f,d,{locale:t})}),[d,f,k,x,n,a]);var w={ref:y,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,s,o,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==o&&r.indexOf("#")>=0&&(o=!1),t[a?"replace":"push"](n,r,{shallow:s,locale:l,scroll:o}))}(e,a,f,d,m,h,v,x)},onMouseEnter:function(e){i.isLocalURL(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),_(a,f,d,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof x?x:a&&a.locale,L=a&&a.isLocaleDomain&&i.getDomainLocale(d,E,a&&a.locales,a&&a.domainLocales);w.href=L||i.addBasePath(i.addLocale(d,E,a&&a.defaultLocale))}return s.default.cloneElement(t,w)};t.default=u},7426:function(e,t,n){"use strict";var r=n(63038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,l=a.useRef(),c=a.useState(!1),_=r(c,2),u=_[0],f=_[1],d=a.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||u||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=o.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return o.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,s=r.observer,i=r.elements;return i.set(e,t),s.observe(e),function(){i.delete(e),s.unobserve(e),0===i.size&&(s.disconnect(),o.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,u]);return a.useEffect((function(){if(!i&&!u){var e=s.requestIdleCallback((function(){return f(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[u]),[d,u]};var a=n(67294),s=n(73447),i="undefined"!==typeof IntersectionObserver;var o=new Map},92695:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return i}});var r=n(85893),a=n(30959),s=n(61689),i=!0;t.default=function(e){var t=e.posts,n=e.title;return(0,r.jsx)(a.Z,{pageTitle:n,children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("h2",{className:"section__title",children:"Blog"}),(0,r.jsx)(s.Z,{posts:t})]})})}},55809:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(92695)}])},2129:function(e){e.exports={footer:"footer_footer__qYcpy",footer__links:"footer_footer__links__5CZ7M",footer__link:"footer_footer__link__mPbqN"}},54308:function(e){e.exports={navbar:"navbar_navbar__1QDXy",navbar__inner:"navbar_navbar__inner__1dVAh",navbar__title:"navbar_navbar__title__1XHtO",navbar__menu:"navbar_navbar__menu__2og52",navbar__menu__item:"navbar_navbar__menu__item__3A2Fp","navbar__menu__item--current":"navbar_navbar__menu__item--current__22LBE"}},1901:function(e){e.exports={post_item:"post-item_post_item__2nZkI",post_item__label:"post-item_post_item__label__1hDyX",post_item__title:"post-item_post_item__title__1r9Gq",post_item__title__link:"post-item_post_item__title__link__2RdrT",post_item__content:"post-item_post_item__content__1zs13",post_item__label_wrapper:"post-item_post_item__label_wrapper__30beT"}},4606:function(e){e.exports={post_list:"post-list_post_list__1Lzbk"}},9008:function(e,t,n){e.exports=n(70639)},41664:function(e,t,n){e.exports=n(92167)}},function(e){e.O(0,[774,888,179],(function(){return t=55809,e(e.s=t);var t}));var t=e.O();_N_E=t}]);