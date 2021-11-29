(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{47:function(e,t,a){},48:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var c,r,n=a(1),i=a.n(n),s=a(19),l=a.n(s),o=a(2),d=a(4),u=a(17);!function(e){e.Root="/",e.NotFound="/not-found",e.Login="/login",e.MyList="/mylist",e.Film="/films/:id",e.AddReview="/films/:id/review",e.Player="/player/:id"}(r||(r={}));var j=(c={},Object(u.a)(c,r.Film,(function(e){return r.Film.replace(":id",String(e))})),Object(u.a)(c,r.AddReview,(function(e){return r.AddReview.replace(":id",String(e))})),Object(u.a)(c,r.Player,(function(e){return r.Player.replace(":id",String(e))})),c),m=a(6),b=a(0);function h(e){var t=e.isCenter;return Object(b.jsx)("div",{className:"logo",children:Object(b.jsxs)(m.a,{to:"/",className:"logo__link".concat(t?" logo__link--light":""),children:[Object(b.jsx)("span",{className:"logo__letter logo__letter--1",children:"W"}),Object(b.jsx)("span",{className:"logo__letter logo__letter--2",children:"T"}),Object(b.jsx)("span",{className:"logo__letter logo__letter--3",children:"W"})]})})}var f,O=Object(n.memo)(h);!function(e){e.Auth="AUTH",e.NoAuth="NO_AUTH",e.Unknown="UNKNOWN"}(f||(f={}));var v,x="All genres",p=a(5),_=a.n(p),g=a(16);!function(e){e.ChangeGenre="data/changeGenre",e.LoadFilms="data/loadFilms",e.LoadFavoriteFilms="data/loadFavoriteFilms",e.UpdateFilmFavoriteStatus="data/updateFilmFavoriteStatus",e.LoadReviews="data/loadReviews",e.LoadSimilarFilms="data/loadSimilarFilms",e.LoadFilm="data/loadFilm",e.LoadPromoFilm="data/loadPromoFilm",e.ChangeShowedFilms="data/changeShowedFilms",e.RequireAuthorization="user/requireAuthorization",e.RequireLogout="user/requireLogout",e.RedirectToRoute="main/redirectToRoute"}(v||(v={}));var N,w,y=a(7),k=Object(y.b)(v.ChangeGenre,(function(e){return{payload:e}})),F=Object(y.b)(v.LoadFilms,(function(e){return{payload:{films:e}}})),S=Object(y.b)(v.LoadFavoriteFilms,(function(e){return{payload:{favoriteFilms:e}}})),C=Object(y.b)(v.UpdateFilmFavoriteStatus,(function(e,t){return{payload:{id:e,isFavorite:t}}})),L=Object(y.b)(v.LoadReviews,(function(e){return{payload:{reviews:e}}})),A=Object(y.b)(v.LoadSimilarFilms,(function(e){return{payload:{similarFilms:e}}})),R=Object(y.b)(v.LoadPromoFilm,(function(e){return{payload:{promoFilm:e}}})),I=Object(y.b)(v.LoadFilm,(function(e){return{payload:{film:e}}})),P=Object(y.b)(v.ChangeShowedFilms,(function(e){return{payload:e}})),T=Object(y.b)(v.RequireAuthorization,(function(e,t){return{payload:{authorizationStatus:e,authInfo:t}}})),D=Object(y.b)(v.RequireLogout),M=Object(y.b)(v.RedirectToRoute,(function(e){return{payload:e}})),U="what-to-watch-token",E=function(e){return{id:e.id,name:e.name,posterImage:e.poster_image,previewImage:e.preview_image,backgroundImage:e.background_image,backgroundColor:e.background_color,videoLink:e.video_link,previewVideoLink:e.preview_video_link,description:e.description,rating:e.rating,scoresCount:e.scores_count,director:e.director,starring:e.starring,runTime:e.run_time,genre:e.genre,released:e.released,isFavorite:e.is_favorite}},q=function(e){return e&&{id:e.id,name:e.name,email:e.email,avatarUrl:e.avatar_url,token:e.token}},W=a(8),z="\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435.",G="\u041d\u0435 \u0437\u0430\u0431\u0443\u0434\u044c\u0442\u0435 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f",B=function(e){return function(){var t=Object(g.a)(_.a.mark((function t(a,c,r){var n,i;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r.get("/films/".concat(e));case 3:n=t.sent,i=n.data,a(I(E(i))),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),W.b.error(z);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,a,c){return t.apply(this,arguments)}}()},H=a(13),V={activeGenre:x,films:[],favoriteFilms:[],reviews:[],similarFilms:[],film:void 0,promoFilm:void 0,showedFilms:0,isDataLoaded:!1},J=Object(y.c)(V,(function(e){e.addCase(k,(function(e,t){e.activeGenre=t.payload})).addCase(F,(function(e,t){e.films=t.payload.films,e.isDataLoaded=!0})).addCase(S,(function(e,t){e.favoriteFilms=t.payload.favoriteFilms,e.isDataLoaded=!0})).addCase(I,(function(e,t){e.film=t.payload.film})).addCase(C,(function(e,t){var a,c;(null===(a=e.film)||void 0===a?void 0:a.id)===t.payload.id&&(e.film.isFavorite=t.payload.isFavorite),(null===(c=e.promoFilm)||void 0===c?void 0:c.id)===t.payload.id&&(e.promoFilm.isFavorite=t.payload.isFavorite)})).addCase(A,(function(e,t){e.similarFilms=t.payload.similarFilms})).addCase(L,(function(e,t){e.reviews=t.payload.reviews})).addCase(R,(function(e,t){e.promoFilm=t.payload.promoFilm})).addCase(P,(function(e,t){e.showedFilms=t.payload}))})),K={authorizationStatus:f.Unknown,authInfo:void 0},X=Object(y.c)(K,(function(e){e.addCase(T,(function(e,t){e.authorizationStatus=t.payload.authorizationStatus,e.authInfo=t.payload.authInfo})).addCase(D,(function(e){e.authorizationStatus=f.NoAuth,e.authInfo=void 0}))}));!function(e){e.Data="DATA",e.User="USER"}(w||(w={}));var Y=Object(H.c)((N={},Object(u.a)(N,w.Data,J),Object(u.a)(N,w.User,X),N)),Z=function(e){return e[w.User].authorizationStatus},$=function(e){return e[w.User].authInfo};var Q=function(){var e,t=Object(o.c)(Z),a=Object(o.c)($),c=Object(o.b)();return t===f.Auth?Object(b.jsxs)("ul",{className:"user-block",children:[Object(b.jsx)("li",{className:"user-block__item",children:Object(b.jsx)("div",{className:"user-block__avatar",children:Object(b.jsx)(m.a,{to:r.MyList,children:Object(b.jsx)("img",{src:null!==(e=null===a||void 0===a?void 0:a.avatarUrl)&&void 0!==e?e:"img/avatar.jpg",alt:"User avatar",width:"63",height:"63"})})})}),Object(b.jsx)("li",{className:"user-block__item",children:Object(b.jsx)("button",{className:"user-block__link",style:{border:"none",background:"none"},onClick:function(){return c(function(){var e=Object(g.a)(_.a.mark((function e(t,a,c){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.delete("/logout");case 3:localStorage.removeItem(U),t(D()),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),W.b.error("\u041f\u0440\u0438 \u0432\u044b\u0445\u043e\u0434\u0435 \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0432\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435.");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a,c){return e.apply(this,arguments)}}())},children:"Sign out"})})]}):Object(b.jsx)("ul",{className:"user-block",children:Object(b.jsx)(m.a,{className:"user-block__link",to:r.Login,children:"Sign in"})})},ee=function(e){return e[w.Data].film},te=function(e){return e[w.Data].promoFilm||{}},ae=function(e){return e[w.Data].films},ce=function(e){return e[w.Data].favoriteFilms},re=function(e){return e[w.Data].reviews},ne=function(e){return e[w.Data].showedFilms},ie=function(e){return e[w.Data].similarFilms.slice(0,4)},se=function(e){return e[w.Data].isDataLoaded},le=function(e){return[x].concat(Array.from(new Set(e[w.Data].films.map((function(e){return e.genre})))).sort().slice(0,9))},oe=function(e){return e[w.Data].activeGenre},de=a(12);var ue=function(e){var t=e.src,a=e.poster,c=e.autoPlay,r=e.muted,i=e.width,s=e.height,l=Object(n.useState)(!1),o=Object(de.a)(l,2),d=o[0],u=o[1],j=Object(n.useRef)(null);return Object(n.useEffect)((function(){if(c){var e=setTimeout((function(){return u(!0)}),1e3);return function(){clearTimeout(e)}}}),[c]),Object(n.useEffect)((function(){null!==j.current&&(d?j.current.play():j.current.pause())}),[d]),Object(b.jsx)("video",{muted:r,poster:a,width:i,height:s,ref:j,children:Object(b.jsx)("source",{src:t})})};function je(e){var t=e.film,a=Object(n.useState)(!1),c=Object(de.a)(a,2),i=c[0],s=c[1],l=Object(o.b)();return Object(b.jsxs)("article",{className:"small-film-card catalog__films-card",onMouseMove:function(){return s(!0)},onMouseLeave:function(){return s(!1)},children:[Object(b.jsx)("div",{className:"small-film-card__image",onClick:function(){return l(M(j[r.Film](t.id)))},children:i?Object(b.jsx)(ue,{src:t.previewVideoLink,poster:t.previewImage,muted:!0,autoPlay:!0,width:"100%",height:"auto"}):Object(b.jsx)("img",{src:t.previewImage,alt:t.name,width:"280",height:"175"})}),Object(b.jsx)("h3",{className:"small-film-card__title",children:Object(b.jsx)(m.a,{className:"small-film-card__link",to:j[r.Film](t.id),children:t.name})})]})}var me=Object(n.memo)(je);var be=function(){var e=Object(o.c)(le),t=Object(o.c)(oe),a=Object(o.b)();return Object(b.jsx)("ul",{className:"catalog__genres-list",children:e.map((function(e){return Object(b.jsx)("li",{className:"catalog__genres-item".concat(e===t?" catalog__genres-item--active":""),onClick:function(){t!==e&&(a(k(e)),a(P(8)))},children:Object(b.jsx)("span",{className:"catalog__genres-link",style:{cursor:"pointer"},children:e})},e)}))})};var he=function(e){var t=e.onClick;return Object(b.jsx)("div",{className:"catalog__more",children:Object(b.jsx)("button",{className:"catalog__button",type:"button",onClick:t,children:"Show more"})})};function fe(e){var t=e.className,a=e.films,c=e.title,r=e.showGenreFilter,i=Object(o.c)(ne),s=Object(o.b)(),l=Object(o.c)(oe),d=Object(n.useMemo)((function(){return l===x?a:a.filter((function(e){return e.genre===l}))}),[l,a]);return Object(b.jsxs)("section",{className:t?"catalog ".concat(t):"catalog",children:[c?Object(b.jsx)("h2",{className:"catalog__title",children:c}):Object(b.jsx)("h2",{className:"catalog__title visually-hidden",children:"Catalog"}),r&&Object(b.jsx)(be,{}),Object(b.jsx)("div",{className:"catalog__films-list",children:d.slice(0,i).map((function(e){return Object(b.jsx)(me,{film:e},e.id)}))}),i<d.length&&Object(b.jsx)(he,{onClick:function(){return s(P(i+8))}})]})}var Oe=Object(n.memo)(fe);var ve=function(e){var t=e.film,a=Object(o.b)();return Object(o.c)(Z)===f.Auth?Object(b.jsxs)("button",{className:"btn btn--list film-card__button",type:"button",onClick:function(){return a((e=t.id,c=!t.isFavorite,function(){var t=Object(g.a)(_.a.mark((function t(a,r,n){var i,s,l;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.post("/favorite/".concat(e,"/").concat(c?1:0));case 3:i=t.sent,s=i.data,l=E(s),a(C(l.id,l.isFavorite)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),W.b.error(z);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e,a,c){return t.apply(this,arguments)}}()));var e,c},children:[t.isFavorite?Object(b.jsx)("svg",{viewBox:"0 0 18 14",width:"18",height:"14",children:Object(b.jsx)("use",{xlinkHref:"#in-list"})}):Object(b.jsx)("svg",{viewBox:"0 0 19 20",width:"19",height:"20",children:Object(b.jsx)("use",{xlinkHref:"#add"})}),Object(b.jsx)("span",{children:"My list"})]}):null};var xe=function(e){var t=e.filmId,a=Object(o.b)(),c=Object(n.useCallback)((function(){a(M(j[r.Player](t)))}),[a,t]);return Object(b.jsxs)("button",{className:"btn btn--play film-card__button",type:"button",onClick:c,children:[Object(b.jsx)("svg",{viewBox:"0 0 19 19",width:"19",height:"19",children:Object(b.jsx)("use",{xlinkHref:"#play-s"})}),Object(b.jsx)("span",{children:"Play"})]})};a(47);var pe=function(){return Object(b.jsx)("div",{className:"loading-page",children:Object(b.jsx)("div",{className:"loading"})})};function _e(){var e=Object(o.c)(se),t=Object(o.c)(te),a=Object(o.c)(ae),c=Object(o.b)();return Object(n.useEffect)((function(){(null===t||void 0===t?void 0:t.id)||c(function(){var e=Object(g.a)(_.a.mark((function e(t,a,c){var r,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.get("/promo");case 3:r=e.sent,n=r.data,t(R(E(n))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),W.b.error(z);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a,c){return e.apply(this,arguments)}}()),e||c(function(){var e=Object(g.a)(_.a.mark((function e(t,a,c){var r,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.get("/films");case 3:r=e.sent,n=r.data,t(F(n.map((function(e){return E(e)})))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),W.b.error(z);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a,c){return e.apply(this,arguments)}}())}),[c,null===t||void 0===t?void 0:t.id,e]),Object(n.useEffect)((function(){c(P(8))}),[c]),e?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("section",{className:"film-card",children:[Object(b.jsx)("div",{className:"film-card__bg",children:Object(b.jsx)("img",{src:t.backgroundImage,alt:t.name})}),Object(b.jsx)("h1",{className:"visually-hidden",children:"WTW"}),Object(b.jsxs)("header",{className:"page-header film-card__head",children:[Object(b.jsx)(O,{}),Object(b.jsx)(Q,{})]}),Object(b.jsx)("div",{className:"film-card__wrap",children:Object(b.jsxs)("div",{className:"film-card__info",children:[Object(b.jsx)("div",{className:"film-card__poster",children:Object(b.jsx)("img",{src:t.posterImage,alt:"".concat(t.name," poster"),width:"218",height:"327"})}),Object(b.jsxs)("div",{className:"film-card__desc",children:[Object(b.jsx)("h2",{className:"film-card__title",children:t.name}),Object(b.jsxs)("p",{className:"film-card__meta",children:[Object(b.jsx)("span",{className:"film-card__genre",children:t.genre}),Object(b.jsx)("span",{className:"film-card__year",children:t.released})]}),Object(b.jsxs)("div",{className:"film-card__buttons",children:[Object(b.jsx)(xe,{filmId:t.id}),Object(b.jsx)(ve,{film:t})]})]})]})})]}),Object(b.jsxs)("div",{className:"page-content",children:[Object(b.jsx)(Oe,{films:a,showGenreFilter:!0}),Object(b.jsxs)("footer",{className:"page-footer",children:[Object(b.jsx)(O,{isCenter:!0}),Object(b.jsx)("div",{className:"copyright",children:Object(b.jsx)("p",{children:"\xa9 2019 What to watch Ltd."})})]})]})]}):Object(b.jsx)(pe,{})}var ge=Object(n.memo)(_e);var Ne=function(){var e=Object(o.b)(),t=Object(n.useState)(""),a=Object(de.a)(t,2),c=a[0],i=a[1],s=Object(n.useState)(""),l=Object(de.a)(s,2),d=l[0],u=l[1],j=Object(n.useState)(!1),m=Object(de.a)(j,2),h=m[0],v=m[1],x=Object(n.useMemo)((function(){return function(e){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2})+$/.test(e)}(c)}),[c]),p=Object(n.useMemo)((function(){return function(e){return/[a-zA-Z]+/.test(e)&&/[0-9]+/.test(e)}(d)}),[d]);return Object(b.jsxs)("div",{className:"user-page",children:[Object(b.jsxs)("header",{className:"page-header user-page__head",children:[Object(b.jsx)(O,{}),Object(b.jsx)("h1",{className:"page-title user-page__title",children:"Sign in"})]}),Object(b.jsx)("div",{className:"sign-in user-page__content",children:Object(b.jsxs)("form",{action:"#",className:"sign-in__form",onSubmit:function(t){t.preventDefault(),v(!0),x&&p&&e(function(e){var t=e.email,a=e.password;return function(){var e=Object(g.a)(_.a.mark((function e(c,n,i){var s,l,o;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.post("/login",{email:t,password:a});case 3:s=e.sent,l=s.data,(o=q(l))&&(n=o.token,localStorage.setItem(U,n),c(T(f.Auth,o))),c(M(r.Root)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),W.b.info("\u041f\u0440\u0438 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u0432\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435.");case 13:case"end":return e.stop()}var n}),e,null,[[0,10]])})));return function(t,a,c){return e.apply(this,arguments)}}()}({email:c,password:d}))},children:[h&&!x&&Object(b.jsx)("div",{className:"sign-in__message",children:Object(b.jsx)("p",{children:"Please enter a valid email address"})}),h&&!p&&Object(b.jsx)("div",{className:"sign-in__message",children:Object(b.jsx)("p",{children:"Please enter a valid password"})}),Object(b.jsxs)("div",{className:"sign-in__fields",children:[Object(b.jsxs)("div",{className:"sign-in__field ".concat(h&&!x&&"sign-in__field--error"),children:[Object(b.jsx)("input",{className:"sign-in__input",type:"email",placeholder:"Email address",name:"user-email",id:"user-email",defaultValue:c,onChange:function(e){return i(e.target.value)}}),Object(b.jsx)("label",{className:"sign-in__label visually-hidden",htmlFor:"user-email",children:"Email address"})]}),Object(b.jsxs)("div",{className:"sign-in__field ".concat(h&&!p&&"sign-in__field--error"),children:[Object(b.jsx)("input",{className:"sign-in__input",type:"password",placeholder:"Password",name:"user-password",id:"user-password",defaultValue:d,onChange:function(e){return u(e.target.value)}}),Object(b.jsx)("label",{className:"sign-in__label visually-hidden",htmlFor:"user-password",children:"Password"})]})]}),Object(b.jsx)("div",{className:"sign-in__submit",children:Object(b.jsx)("button",{className:"sign-in__btn",type:"submit",children:"Sign in"})})]})}),Object(b.jsxs)("footer",{className:"page-footer",children:[Object(b.jsx)(O,{isCenter:!0}),Object(b.jsx)("div",{className:"copyright",children:Object(b.jsx)("p",{children:"\xa9 2019 What to watch Ltd."})})]})]})};var we=function(){var e=Object(o.c)(se),t=Object(o.c)(ce),a=Object(o.b)();return Object(n.useEffect)((function(){e||a(function(){var e=Object(g.a)(_.a.mark((function e(t,a,c){var r,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.get("/favorite");case 3:r=e.sent,n=r.data,t(S(n.map((function(e){return E(e)})))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),W.b.error(z);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a,c){return e.apply(this,arguments)}}())}),[a,e]),Object(n.useEffect)((function(){a(P(8))}),[a]),Object(b.jsxs)("div",{className:"user-page",children:[Object(b.jsxs)("header",{className:"page-header user-page__head",children:[Object(b.jsx)(O,{}),Object(b.jsx)("h1",{className:"page-title user-page__title",children:"My list"}),Object(b.jsx)(Q,{})]}),Object(b.jsx)(Oe,{films:t}),Object(b.jsxs)("footer",{className:"page-footer",children:[Object(b.jsx)(O,{isCenter:!0}),Object(b.jsx)("div",{className:"copyright",children:Object(b.jsx)("p",{children:"\xa9 2019 What to watch Ltd."})})]})]})},ye=["January","February","March","April","May","June","July","August","September","October","November","December"],ke=function(e){return String(e).padStart(2,"0")},Fe=function(e){var t=Math.floor(e/3600),a=Math.floor(e%3600/60),c=Math.floor(e%60);return 0===t&&0===a&&0===c?"00:00":t>0?"-".concat(ke(t),":").concat(ke(a),":").concat(ke(c)):"-".concat(ke(a),":").concat(ke(c))},Se=function(e){var t=function(e){return{hours:Math.floor(e/60),minutes:e%60}}(e),a=t.hours,c=t.minutes;return a>0?"".concat(a,"h ").concat(c,"m"):"".concat(c,"m")},Ce=function(e){"string"===typeof e&&(e=new Date(e));var t=e.getMonth(),a=e.getDate(),c=e.getFullYear();return"".concat(ye[t]," ").concat(a,", ").concat(c)};var Le=function(e){var t=e.film;return Object(b.jsxs)("div",{className:"film-card__text film-card__row",children:[Object(b.jsxs)("div",{className:"film-card__text-col",children:[Object(b.jsxs)("p",{className:"film-card__details-item",children:[Object(b.jsx)("strong",{className:"film-card__details-name",children:"Director"}),Object(b.jsx)("span",{className:"film-card__details-value",children:t.director})]}),Object(b.jsxs)("p",{className:"film-card__details-item",children:[Object(b.jsx)("strong",{className:"film-card__details-name",children:"Starring"}),Object(b.jsx)("span",{className:"film-card__details-value",children:t.starring.join(",#").split("#").map((function(e){return Object(b.jsxs)("span",{children:[e," "]},e)}))})]})]}),Object(b.jsxs)("div",{className:"film-card__text-col",children:[Object(b.jsxs)("p",{className:"film-card__details-item",children:[Object(b.jsx)("strong",{className:"film-card__details-name",children:"Run Time"}),Object(b.jsx)("span",{className:"film-card__details-value",children:Se(t.runTime)})]}),Object(b.jsxs)("p",{className:"film-card__details-item",children:[Object(b.jsx)("strong",{className:"film-card__details-name",children:"Genre"}),Object(b.jsx)("span",{className:"film-card__details-value",children:t.genre})]}),Object(b.jsxs)("p",{className:"film-card__details-item",children:[Object(b.jsx)("strong",{className:"film-card__details-name",children:"Released"}),Object(b.jsx)("span",{className:"film-card__details-value",children:t.released})]})]})]})};var Ae=function(e){var t,a=e.film,c=Object(n.useMemo)((function(){return a.rating<3?"Bad":a.rating<5?"Normal":a.rating<8?"Good":a.rating<10?"Very good":"Awesome"}),[a.rating]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"film-rating",children:[Object(b.jsx)("div",{className:"film-rating__score",children:a.rating}),Object(b.jsxs)("p",{className:"film-rating__meta",children:[Object(b.jsx)("span",{className:"film-rating__level",children:c}),Object(b.jsxs)("span",{className:"film-rating__count",children:[a.scoresCount," ratings"]})]})]}),Object(b.jsxs)("div",{className:"film-card__text",children:[Object(b.jsx)("p",{children:a.description}),Object(b.jsx)("p",{className:"film-card__director",children:Object(b.jsxs)("strong",{children:["Director: ",a.director]})}),Object(b.jsx)("p",{className:"film-card__starring",children:Object(b.jsxs)("strong",{children:["Starring: ",(t=a.starring,t.length>4?"".concat(t.slice(0,4).join(", ")," and other"):t.join(", "))]})})]})]})};var Re=function(e){var t=e.reviews,a=Math.round(t.length/2),c=t.slice(0,a),r=t.slice(a);return Object(b.jsxs)("div",{className:"film-card__reviews film-card__row",children:[Object(b.jsx)("div",{className:"film-card__reviews-col",children:c.map((function(e){return Object(b.jsxs)("div",{className:"review",children:[Object(b.jsxs)("blockquote",{className:"review__quote",children:[Object(b.jsx)("p",{className:"review__text",children:e.comment}),Object(b.jsxs)("footer",{className:"review__details",children:[Object(b.jsx)("cite",{className:"review__author",children:e.user.name}),Object(b.jsx)("time",{className:"review__date",dateTime:e.date,children:Ce(e.date)})]})]}),Object(b.jsx)("div",{className:"review__rating",children:e.rating})]},e.id)}))}),Object(b.jsx)("div",{className:"film-card__reviews-col",children:r.map((function(e){return Object(b.jsxs)("div",{className:"review",children:[Object(b.jsxs)("blockquote",{className:"review__quote",children:[Object(b.jsx)("p",{className:"review__text",children:e.comment}),Object(b.jsxs)("footer",{className:"review__details",children:[Object(b.jsx)("cite",{className:"review__author",children:e.user.name}),Object(b.jsx)("time",{className:"review__date",dateTime:e.date,children:Ce(e.date)})]})]}),Object(b.jsx)("div",{className:"review__rating",children:e.rating})]},e.id)}))})]})};var Ie=function(e){var t=e.film,a=e.reviews,c=Object(d.g)(),r=c.hash||"#overview";return Object(b.jsxs)("div",{className:"film-card__desc",children:[Object(b.jsx)("nav",{className:"film-nav film-card__nav",children:Object(b.jsxs)("ul",{className:"film-nav__list",children:[Object(b.jsx)("li",{className:"film-nav__item".concat("#overview"===r?" film-nav__item--active":""),children:Object(b.jsx)(m.a,{to:"".concat(c.pathname,"#overview"),className:"film-nav__link",children:"Overview"})}),Object(b.jsx)("li",{className:"film-nav__item".concat("#details"===r?" film-nav__item--active":""),children:Object(b.jsx)(m.a,{to:"".concat(c.pathname,"#details"),className:"film-nav__link",children:"Details"})}),Object(b.jsx)("li",{className:"film-nav__item".concat("#reviews"===r?" film-nav__item--active":""),children:Object(b.jsx)(m.a,{to:"".concat(c.pathname,"#reviews"),className:"film-nav__link",children:"Reviews"})})]})}),function(){switch(r){case"#overview":return Object(b.jsx)(Ae,{film:t});case"#details":return Object(b.jsx)(Le,{film:t});case"#reviews":return Object(b.jsx)(Re,{reviews:a})}}()]})};var Pe=function(){var e=parseInt(Object(d.h)().id,10),t=Object(o.c)(Z),a=Object(o.c)(ee),c=Object(o.c)(re),r=Object(o.c)(ie),i=Object(o.b)();return Object(n.useEffect)((function(){e&&e!==(null===a||void 0===a?void 0:a.id)&&(i(B(e)),i(function(e){return function(){var t=Object(g.a)(_.a.mark((function t(a,c,r){var n,i;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r.get("/films/".concat(e,"/similar"));case 3:n=t.sent,i=n.data,a(A(i.map((function(e){return E(e)})).filter((function(t){return t.id!==e})))),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),W.b.error(z);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,a,c){return t.apply(this,arguments)}}()}(e)),i(function(e){return function(){var t=Object(g.a)(_.a.mark((function t(a,c,r){var n,i;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r.get("/comments/".concat(e));case 3:n=t.sent,i=n.data,a(L(i)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),W.b.error(z);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,a,c){return t.apply(this,arguments)}}()}(e)))}),[i,e,null===a||void 0===a?void 0:a.id]),Object(n.useEffect)((function(){i(P(8))}),[i,e]),a?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("section",{className:"film-card film-card--full",children:[Object(b.jsxs)("div",{className:"film-card__hero",children:[Object(b.jsx)("div",{className:"film-card__bg",children:Object(b.jsx)("img",{src:a.backgroundImage,alt:a.name})}),Object(b.jsx)("h1",{className:"visually-hidden",children:"WTW"}),Object(b.jsxs)("header",{className:"page-header film-card__head",children:[Object(b.jsx)(O,{}),Object(b.jsx)(Q,{})]}),Object(b.jsx)("div",{className:"film-card__wrap",children:Object(b.jsxs)("div",{className:"film-card__desc",children:[Object(b.jsx)("h2",{className:"film-card__title",children:a.name}),Object(b.jsxs)("p",{className:"film-card__meta",children:[Object(b.jsx)("span",{className:"film-card__genre",children:a.genre}),Object(b.jsx)("span",{className:"film-card__year",children:a.released})]}),Object(b.jsxs)("div",{className:"film-card__buttons",children:[Object(b.jsx)(xe,{filmId:a.id}),Object(b.jsx)(ve,{film:a}),t===f.Auth&&Object(b.jsx)(m.a,{to:"/films/".concat(e,"/review"),className:"btn film-card__button",children:"Add review"})]})]})})]}),Object(b.jsx)("div",{className:"film-card__wrap film-card__translate-top",children:Object(b.jsxs)("div",{className:"film-card__info",children:[Object(b.jsx)("div",{className:"film-card__poster film-card__poster--big",children:Object(b.jsx)("img",{src:a.posterImage,alt:a.name,width:"218",height:"327"})}),Object(b.jsx)(Ie,{film:a,reviews:c})]})})]}),Object(b.jsxs)("div",{className:"page-content",children:[Object(b.jsx)(Oe,{className:"catalog--like-this",title:"More like this",films:r}),Object(b.jsxs)("footer",{className:"page-footer",children:[Object(b.jsx)(O,{isCenter:!0}),Object(b.jsx)("div",{className:"copyright",children:Object(b.jsx)("p",{children:"\xa9 2019 What to watch Ltd."})})]})]})]}):Object(b.jsx)(pe,{})};function Te(e){var t=e.filmId,a=Object(n.useState)(5),c=Object(de.a)(a,2),r=c[0],i=c[1],s=Object(n.useState)(""),l=Object(de.a)(s,2),d=l[0],u=l[1],j=Object(n.useRef)(null),m=Object(o.b)(),h=Object(n.useMemo)((function(){return r>0&&d.length>=50&&d.length<=400}),[r,d]);return Object(b.jsx)("div",{className:"add-review",children:Object(b.jsxs)("form",{action:"#",className:"add-review__form",onSubmit:function(e){var a,c,n;e.preventDefault(),h&&(j.current&&(j.current.disabled=!0),m((a=t,c={rating:r,comment:d},n=function(e){e?(i(5),u("")):j.current&&(j.current.disabled=!1)},function(){var e=Object(g.a)(_.a.mark((function e(t,r,i){var s,l;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.post("/comments/".concat(a),c);case 3:s=e.sent,l=s.data,t(L(l)),W.b.info("\u041e\u0442\u0437\u044b\u0432 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d"),n(!0),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),W.b.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0435 \u043e\u0442\u0437\u044b\u0432\u0430."),n(!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,a,c){return e.apply(this,arguments)}}())))},children:[Object(b.jsx)("div",{className:"rating",children:Object(b.jsx)("div",{className:"rating__stars",children:Array.from({length:10},(function(e,t){return t+1})).reverse().map((function(e){return[Object(b.jsx)("input",{className:"rating__input",id:"star-".concat(e),type:"radio",name:"rating",value:e,checked:r===e,onChange:function(){return i(e)}},"input-".concat(e)),Object(b.jsxs)("label",{className:"rating__label",htmlFor:"star-".concat(e),children:["Rating ",e]},"label-".concat(e))]}))})}),Object(b.jsxs)("div",{className:"add-review__text",children:[Object(b.jsx)("textarea",{className:"add-review__textarea",placeholder:"Review text",maxLength:400,value:d,onChange:function(e){return u(e.target.value)}}),Object(b.jsx)("div",{className:"add-review__submit",children:Object(b.jsx)("button",{ref:j,className:"add-review__btn",type:"submit",disabled:!h,children:"Post"})})]})]})})}var De=function(){var e=parseInt(Object(d.h)().id,10),t=Object(o.c)(ee),a=Object(o.b)();return Object(n.useEffect)((function(){e&&e!==(null===t||void 0===t?void 0:t.id)&&a(B(e))}),[a,e,null===t||void 0===t?void 0:t.id]),t?Object(b.jsxs)("section",{className:"film-card film-card--full",children:[Object(b.jsxs)("div",{className:"film-card__header",children:[Object(b.jsx)("div",{className:"film-card__bg",children:Object(b.jsx)("img",{src:t.backgroundImage,alt:t.name})}),Object(b.jsx)("h1",{className:"visually-hidden",children:"WTW"}),Object(b.jsxs)("header",{className:"page-header",children:[Object(b.jsx)(O,{}),Object(b.jsx)("nav",{className:"breadcrumbs",children:Object(b.jsxs)("ul",{className:"breadcrumbs__list",children:[Object(b.jsx)("li",{className:"breadcrumbs__item",children:Object(b.jsx)(m.a,{className:"breadcrumbs__link",to:j[r.Film](e),children:t.name})}),Object(b.jsx)("li",{className:"breadcrumbs__item",children:Object(b.jsx)("span",{className:"breadcrumbs__link",children:"Add review"})})]})}),Object(b.jsx)(Q,{})]}),Object(b.jsx)("div",{className:"film-card__poster film-card__poster--small",children:Object(b.jsx)("img",{src:t.posterImage,alt:t.name,width:"218",height:"327"})})]}),Object(b.jsx)(Te,{filmId:t.id})]}):Object(b.jsx)(pe,{})},Me=a(18),Ue=function(e){var t=Object(n.useState)({isPlaying:!1,progress:0,timeElapsed:0}),a=Object(de.a)(t,2),c=a[0],r=a[1];Object(n.useEffect)((function(){var t,a;c.isPlaying?null===e||void 0===e||null===(t=e.current)||void 0===t||t.play():null===e||void 0===e||null===(a=e.current)||void 0===a||a.pause()}),[c.isPlaying,e]);return{playerState:c,togglePlay:function(){r(Object(Me.a)(Object(Me.a)({},c),{},{isPlaying:!c.isPlaying}))},handleOnTimeUpdate:function(){if(null===e||void 0===e?void 0:e.current){var t=e.current.currentTime/e.current.duration*100,a=e.current.duration-e.current.currentTime;r(Object(Me.a)(Object(Me.a)({},c),{},{progress:t,timeElapsed:a}))}},handleVideoProgress:function(t){if(null===e||void 0===e?void 0:e.current){e.current.currentTime=e.current.duration/100*t;var a=e.current.duration-e.current.currentTime;r(Object(Me.a)(Object(Me.a)({},c),{},{progress:t,timeElapsed:a}))}},requestFullscreen:function(){var t;null===(t=e.current)||void 0===t||t.requestFullscreen()}}};var Ee=function(){var e=parseInt(Object(d.h)().id,10),t=Object(o.c)(ee),a=Object(n.useRef)(null),c=Ue(a),i=c.playerState,s=c.togglePlay,l=c.requestFullscreen,u=c.handleOnTimeUpdate,m=c.handleVideoProgress,h=Object(o.b)();return Object(n.useEffect)((function(){e&&e!==(null===t||void 0===t?void 0:t.id)&&h(B(e))}),[h,e,null===t||void 0===t?void 0:t.id]),t?Object(b.jsxs)("div",{className:"player",children:[Object(b.jsx)("video",{className:"player__video",poster:t.previewImage,ref:a,onTimeUpdate:u,children:Object(b.jsx)("source",{src:t.videoLink})}),Object(b.jsx)("button",{type:"button",className:"player__exit",onClick:function(){h(M(j[r.Film](e)))},children:"Exit"}),Object(b.jsxs)("div",{className:"player__controls",children:[Object(b.jsxs)("div",{className:"player__controls-row",children:[Object(b.jsxs)("div",{className:"player__time",onClick:function(e){var t=e.clientX-e.currentTarget.offsetLeft,a=e.currentTarget.clientWidth,c=Math.floor(t/a*100);m(c)},children:[Object(b.jsx)("progress",{className:"player__progress",value:i.progress,max:"100"}),Object(b.jsx)("div",{className:"player__toggler",style:{left:"".concat(i.progress,"%")},children:"Toggler"})]}),Object(b.jsx)("div",{className:"player__time-value",children:Fe(i.timeElapsed)})]}),Object(b.jsxs)("div",{className:"player__controls-row",children:[Object(b.jsxs)("button",{type:"button",className:"player__play",onClick:function(){return s()},children:[Object(b.jsx)("svg",{viewBox:"0 0 19 19",width:"19",height:"19",children:Object(b.jsx)("use",{xlinkHref:i.isPlaying?"#pause":"#play-s"})}),Object(b.jsx)("span",{children:i.isPlaying?"Pause":"Play"})]}),Object(b.jsx)("div",{className:"player__name",children:t.name}),Object(b.jsxs)("button",{type:"button",className:"player__full-screen",onClick:function(){return l()},children:[Object(b.jsx)("svg",{viewBox:"0 0 27 27",width:"27",height:"27",children:Object(b.jsx)("use",{xlinkHref:"#full-screen"})}),Object(b.jsx)("span",{children:"Full screen"})]})]})]})]}):Object(b.jsx)(pe,{})};a(48);var qe=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m.a,{className:"link-return-url",to:"/",children:"Return to main"}),Object(b.jsxs)("div",{className:"flex-center position-r full-height",children:[Object(b.jsx)("div",{className:"code",children:"404"}),Object(b.jsx)("div",{className:"message",style:{padding:"10px"},children:"NOT FOUND"})]})]})};var We=function(e){var t=e.exact,a=e.path,c=e.render,n=Object(o.c)(Z);return Object(b.jsx)(d.b,{exact:t,path:a,render:function(e){return n===f.Auth?c(e):Object(b.jsx)(d.a,{to:r.Login})}})};var ze,Ge=function(){return function(e){return e===f.Unknown}(Object(o.c)(Z))?Object(b.jsx)(pe,{}):Object(b.jsxs)(d.d,{children:[Object(b.jsx)(d.b,{exact:!0,path:r.Root,children:Object(b.jsx)(ge,{})}),Object(b.jsx)(d.b,{exact:!0,path:r.Login,children:Object(b.jsx)(Ne,{})}),Object(b.jsx)(We,{exact:!0,path:r.MyList,render:function(){return Object(b.jsx)(we,{})}}),Object(b.jsx)(d.b,{exact:!0,path:r.Film,children:Object(b.jsx)(Pe,{})}),Object(b.jsx)(We,{exact:!0,path:r.AddReview,render:function(){return Object(b.jsx)(De,{})}}),Object(b.jsx)(d.b,{exact:!0,path:r.Player,children:Object(b.jsx)(Ee,{})}),Object(b.jsx)(d.b,{exact:!0,path:r.NotFound,children:Object(b.jsx)(qe,{})}),Object(b.jsx)(d.b,{children:Object(b.jsx)(qe,{})})]})},Be=a(35),He=a.n(Be);!function(e){e[e.Unauthorized=401]="Unauthorized",e[e.NotFound=404]="NotFound"}(ze||(ze={}));var Ve=a(10),Je=Object(Ve.a)(),Ke=function(e){return function(e){return function(t){return t.type===v.RedirectToRoute&&Je.push(t.payload),e(t)}}},Xe=(a(67),function(e,t){var a=He.a.create({baseURL:"https://8.react.pages.academy/wtw",timeout:5e3});return a.interceptors.response.use((function(e){return e}),(function(a){var c=a.response;return(null===c||void 0===c?void 0:c.status)===ze.Unauthorized?e():((null===c||void 0===c?void 0:c.status)===ze.NotFound&&t(),Promise.reject(a))})),a.interceptors.request.use((function(e){var t=function(){var e=localStorage.getItem(U);return null!==e&&void 0!==e?e:""}();return t&&(e.headers["x-token"]=t),e})),a}((function(){return Ye.dispatch(T(f.NoAuth))}),(function(){return Ye.dispatch(M(r.NotFound))}))),Ye=Object(y.a)({reducer:Y,middleware:function(e){return e({thunk:{extraArgument:Xe}}).concat(Ke)}});Ye.dispatch(function(){var e=Object(g.a)(_.a.mark((function e(t,a,c){var r,n,i,s;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.get("/login");case 3:r=e.sent,n=r.data,i=q(n),s=i?f.Auth:f.NoAuth,t(T(s,i)),s!==f.Auth&&W.b.info(G),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),W.b.info(G);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,a,c){return e.apply(this,arguments)}}()),l.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(o.a,{store:Ye,children:Object(b.jsxs)(d.c,{history:Je,children:[Object(b.jsx)(W.a,{}),Object(b.jsx)(Ge,{})]})})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.2bc11511.chunk.js.map