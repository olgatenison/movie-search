"use strict";(self.webpackChunkmovie_search=self.webpackChunkmovie_search||[]).push([[489],{17:function(n,e,t){var r,o,c,i=t(168),a=t(87),u=t(689),s=t(924),p=t(184),f=s.ZP.ol(r||(r=(0,i.Z)(["\n  margin-bottom: 10px;\n"]))),l=s.ZP.li(o||(o=(0,i.Z)(["\n  padding-left: 20px;\n  font-size: 16px;\n  color: #fff;\n  font-weight: 300;\n  letter-spacing: 1.2;\n\n  &:not(:last-child) {\n    margin-bottom: 5px;\n  }\n\n  &:hover,\n  &:focus,\n  &.active {\n    color: #e38282;\n  }\n"]))),d=(0,s.ZP)(a.rU)(c||(c=(0,i.Z)(["\n  font-size: 16px;\n  color: #fff;\n  font-weight: 300;\n  letter-spacing: 1.2;\n\n  &:visited {\n    color: #707070;\n  }\n\n  &:hover,\n  &:focus,\n  &.active {\n    color: #e38282;\n  }\n"])));e.Z=function(n){var e=n.movies,t=(0,u.TH)();return(0,p.jsx)(f,{children:e.map((function(n){return(0,p.jsx)(l,{children:(0,p.jsx)(d,{to:"/movies/".concat(n.id),state:{from:t},children:n.title})},n.id)}))})}},489:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r,o,c,i,a=t(683),u=t(439),s=t(791),p=t(689),f=t(545),l=t(681),d=t(168),h=t(924),v=h.ZP.form(r||(r=(0,d.Z)(["\n  display: flex;\n\n  max-width: 700px;\n  background-color: white;\n  border-radius: 3px;\n  overflow: hidden;\n  border: 0.5px solid black;\n  &:hover {\n    border-color: #707070;\n  }\n"]))),x=h.ZP.button(o||(o=(0,d.Z)(["\n  display: inline-block;\n  width: 80px;\n  height: 50px;\n  border: 0;\n  cursor: pointer;\n  background-color: #e38282;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    background-color: #d66d6d;\n  }\n"]))),m=h.ZP.div(c||(c=(0,d.Z)(["\n  width: 2.3em;\n  height: 1.3em;\n  color: #fff;\n  display: inline-block;\n"]))),b=h.ZP.input(i||(i=(0,d.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 16px;\n  border: none;\n  outline: none;\n  padding-left: 24px;\n  padding-right: 24px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 16px;\n    color: #707070;\n  }\n"]))),g=t(71),y=t(184),Z=function(n){var e=n.onSubmit;return(0,y.jsx)("div",{children:(0,y.jsxs)(v,{onSubmit:function(n){n.preventDefault(),e(n.target.query.value),n.target.reset()},children:[(0,y.jsx)(b,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies...",name:"query"}),(0,y.jsx)(x,{type:"submit",children:(0,y.jsx)(m,{children:(0,y.jsx)(g.U41,{})})})]})})},w=t(17),k=function(){var n,e=(0,s.useState)([]),t=(0,u.Z)(e,2),r=t[0],o=t[1],c=(0,p.TH)(),i=(0,p.s0)(),d=(0,s.useState)(!1),h=(0,u.Z)(d,2),v=h[0],x=h[1],m=null!==(n=new URLSearchParams(c.search).get("query"))&&void 0!==n?n:"";return(0,s.useEffect)((function(){m&&(x(!0),(0,f.Wf)(m).then((function(n){o(n.results),x(!1)})))}),[m]),(0,y.jsxs)(l.Z,{children:[(0,y.jsx)(Z,{onSubmit:function(n){i((0,a.Z)((0,a.Z)({},c),{},{search:"query=".concat(n)}))}}),v?(0,y.jsx)("p",{children:"...Loading"}):(0,y.jsx)(w.Z,{movies:r})]})}},545:function(n,e,t){t.d(e,{Pg:function(){return l},Wf:function(){return h},b4:function(){return p},tx:function(){return b},zv:function(){return x}});var r=t(861),o=t(687),c=t.n(o),i="d37f6a23bd7ef44f9836a4799b5199b5",a="https://api.themoviedb.org/3";function u(n){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch(e);case 3:return t=n.sent,n.next=6,t.json();case 6:return n.abrupt("return",n.sent);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function p(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(a,"/trending/movie/day?api_key=").concat(i),n.abrupt("return",u(e));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(a,"/movie/").concat(e,"?api_key=").concat(i,"&language=en-US"),n.abrupt("return",u(t));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(a,"/search/movie?api_key=").concat(i,"&query=").concat(e,"&language=en-US&page=1"),n.abrupt("return",u(t));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(a,"/movie/").concat(e,"/credits?api_key=").concat(i,"&language=en-US"),n.abrupt("return",u(t));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function b(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(a,"/movie/").concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"),n.abrupt("return",u(t));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=489.b49cc116.chunk.js.map