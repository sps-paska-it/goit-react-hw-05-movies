"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{523:function(n,t,e){e.d(t,{Bt:function(){return l},vw:function(){return s},wR:function(){return f},y:function(){return d},zU:function(){return p}});var r=e(5861),a=e(4687),c=e.n(a),u=e(1243),i="https://api.themoviedb.org/3",o="5a1775956ea4e1cf9e88872469faee97",s=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/trending/movie/day?api_key=").concat(o));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/search/movie?api_key=").concat(o,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/movie/").concat(t,"?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},3387:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,a,c,u,i=e(9439),o=e(2791),s=e(7689),f=e(523),p=e(168),d=e(4934),l=d.Z.ul(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  padding-top: 20px;\n  background-color: #ffffff;\n"]))),v=d.Z.img(a||(a=(0,p.Z)(["\n  width: 150px;\n  margin: 0 auto;\n"]))),h=d.Z.ul(c||(c=(0,p.Z)(["\n  flex-basis: calc((100% - 60px) / 4);\n"]))),x=d.Z.p(u||(u=(0,p.Z)(["\n  font-size: 12px;\n  padding-top: 10px;\n  text-align: center;\n"]))),g=e(854),m=e(5259),Z=e(184),w=function(){var n=(0,o.useState)([]),t=(0,i.Z)(n,2),e=t[0],r=t[1],a=(0,o.useState)(!1),c=(0,i.Z)(a,2),u=c[0],p=c[1],d=(0,o.useState)(null),w=(0,i.Z)(d,2),y=w[0],k=w[1],_=(0,s.UO)().movieId;return(0,o.useEffect)((function(){p(!0),(0,f.y)(_).then((function(n){var t=n.cast;r(t)})).catch((function(n){return k(n.message)})).finally((function(){p(!1)}))}),[_]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(l,{children:e.map((function(n){var t=n.id,e=n.profile_path,r=n.name,a=n.character;return(0,Z.jsxs)(h,{children:[(0,Z.jsx)(v,{src:e?"https://image.tmdb.org/t/p/w500".concat(e):"https://via.placeholder.com/148x222",alt:r}),(0,Z.jsx)(x,{children:r}),(0,Z.jsxs)(x,{children:["Character: ",a]})]},t)}))}),(0,Z.jsx)(g.a,{loading:u}),y&&(0,Z.jsx)(m.x,{textAlign:"center",children:y})]})}},854:function(n,t,e){e.d(t,{a:function(){return u}});var r=e(2299),a=e.n(r),c=e(184),u=function(n){var t=n.loading;return(0,c.jsx)(a(),{color:"orange",loading:t,size:100,"aria-label":"Loading Spinner","data-testid":"loader"})}},5259:function(n,t,e){e.d(t,{x:function(){return c}});var r,a=e(168),c=e(4934).Z.p(r||(r=(0,a.Z)(["\n  font-size: 30px;\n  font-weight: 700;\n"])))}}]);
//# sourceMappingURL=387.8185b3b6.chunk.js.map