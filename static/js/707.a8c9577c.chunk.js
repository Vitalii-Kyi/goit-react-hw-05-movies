"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[707],{6713:function(n,t,e){e.d(t,{BG:function(){return s},Me:function(){return p},bI:function(){return o},np:function(){return f},wr:function(){return i}});var r=e(5861),a=e(7757),u=e.n(a),c=e(5294);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.headers.common.Authorization="Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjE5MjMzNTAxZGIzMzJkYzJmMzkyZTgzOGNkNGZmOSIsInN1YiI6IjY1NGEwMmFlNDM0OTRmMDEzYjdkODc0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._3qliPvEcKUAHnkE-rnoynj0SIG5oxbGc4FKfNPE-VU";var i=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/day");case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(t,e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie",{params:{include_adult:!1,query:e,page:t}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/credits"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/reviews"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},2707:function(n,t,e){e.r(t),e.d(t,{default:function(){return j}});var r,a,u,c,i=e(5861),s=e(9439),o=e(7757),p=e.n(o),f=e(2791),l=e(7689),d=e(5218),h=e(3430),v=e(6713),x=e(168),m=e(5867),Z=m.ZP.ul(r||(r=(0,x.Z)(["\n  margin-top: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 20px;\n"]))),w=m.ZP.p(a||(a=(0,x.Z)(["\n  margin-top: 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 10px;\n"]))),y=m.ZP.p(u||(u=(0,x.Z)(["\n  font-style: italic;\n"]))),g=m.ZP.p(c||(c=(0,x.Z)(["\n  margin-top: 15px;\n"]))),k=e(184),j=function(){var n=(0,l.UO)().movieId,t=(0,f.useState)(null),e=(0,s.Z)(t,2),r=e[0],a=e[1],u=(0,f.useState)(null),c=(0,s.Z)(u,2),o=c[0],x=c[1],m=(0,f.useState)(!1),j=(0,s.Z)(m,2),b=j[0],I=j[1];return(0,f.useEffect)((function(){function t(){return(t=(0,i.Z)(p().mark((function t(){var e,r,u;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,I(!0),t.next=4,(0,v.np)(n);case 4:e=t.sent,r=e.results,u=e.total_results,a(r),x(u),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),d.ZP.error("Oops, ".concat(t.t0,". Please try again."));case 14:return t.prev=14,I(!1),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[0,11,14,17]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n]),(0,k.jsxs)("div",{children:[b&&(0,k.jsx)(h.g4,{height:"80",width:"80",radius:"9",color:"orange",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0}),r&&(0!==o?(0,k.jsx)(Z,{children:r.map((function(n){return(0,k.jsxs)("li",{children:[(0,k.jsxs)(w,{children:["Author: ",n.author]}),(0,k.jsxs)(y,{children:["'",n.content,"'"]})]},n.id)}))}):(0,k.jsx)(g,{children:"We don't have any reviews for this movie"})),(0,k.jsx)(d.x7,{})]})}}}]);
//# sourceMappingURL=707.a8c9577c.chunk.js.map