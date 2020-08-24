(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(5),c=a.n(r),i=(a(15),a(9)),l=a(1),u=a(6),p=a.n(u);var s=function(){return o.a.createElement("header",{className:"header"},o.a.createElement("img",{src:p.a,alt:"\u043b\u043e\u0433\u043e",className:"logo"}))},m=o.a.createContext();var d=function(e){var t=e.card,a=t.name,n=t.link,r=t.likes,c=t.owner,i=o.a.useContext(m),l=c._id===i._id,u="".concat(l?"card__delete":"card__delete_type_hidden"),p=r.some((function(e){return e._id===i._id})),s="".concat(p?"card__like card__like_active":"card__like");return o.a.createElement("li",{className:"card"},o.a.createElement("img",{"data-link":"",className:"card__image",alt:"",src:n,onClick:function(){e.onCardClick(e.card)}}),o.a.createElement("button",{type:"button",className:u,"aria-label":"\u0443\u0434\u0430\u043b\u0438\u0442\u044c",onClick:function(){e.onCardDelete(e.card)}}),o.a.createElement("div",{className:"card__description"},o.a.createElement("h2",{"data-place":"",className:"card__title"},a),o.a.createElement("div",{className:"card__like-information"},o.a.createElement("button",{type:"button",className:s,"aria-label":"\u043b\u0430\u0439\u043a",onClick:function(){e.onCardLike(e.card)}}),o.a.createElement("p",{className:"card__likes-number"},r.length))))};var _=function(e){var t=o.a.useContext(m),a=t.name,n=t.about,r=t.avatar,c=e.cards,i=e.onCardLike,l=e.onCardDelete;return o.a.createElement("main",null,o.a.createElement("section",{className:"profile"},o.a.createElement("div",{className:"profile__avatarblock",onClick:e.onEditAvatar},o.a.createElement("div",{className:"profile__editava"}),o.a.createElement("img",{src:r,alt:"\u0430\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar"})),o.a.createElement("div",{className:"profile__information"},o.a.createElement("div",{className:"profile__user"},o.a.createElement("h1",{className:"profile__name"},a),o.a.createElement("button",{className:"profile__edit-button",type:"button","aria-label":"\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",onClick:e.onEditProfile})),o.a.createElement("p",{className:"profile__description"},n)),o.a.createElement("button",{className:"profile__add-button",type:"button","aria-label":"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e",onClick:e.onAddPlace})),o.a.createElement("ul",{className:"cards"},c.map((function(t){return o.a.createElement(d,{key:t._id,card:t,onCardClick:e.onCardClick,onCardLike:i,onCardDelete:l})}))))};var f=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa9 2020. \u041a\u0430\u0442\u044e\u0436\u0430\u043d\u0441\u043a\u0438\u0439 \u0420\u043e\u0441\u0442\u0438\u0441\u043b\u0430\u0432"))};var h=function(e){return o.a.createElement("div",{id:e.name,className:e.isOpen?"popup popup_opened":"popup"},o.a.createElement("form",{className:"popup__container",id:"author-container",method:"post",action:"#",name:e.name,noValidate:!0,onSubmit:e.onSubmit},o.a.createElement("button",{className:"popup__close",type:"button","aria-label":"\u0437\u0430\u043a\u0440\u044b\u0442\u044c",onClick:e.onClose}),o.a.createElement("h3",{className:"popup__title ".concat(e.titleModifier)},e.title),e.children,o.a.createElement("button",{className:"popup__save",type:"submit"},e.buttonText)))};var v=function(e){return o.a.createElement("div",{id:"popup_photo",className:e.isOpen?"popup popup_opened popup_opacity_dark":"popup popup_opacity_dark"},o.a.createElement("div",{className:"popup__photo-position"},o.a.createElement("button",{className:"popup__close",type:"button","aria-label":"\u0437\u0430\u043a\u0440\u044b\u0442\u044c",onClick:e.onClose}),o.a.createElement("img",{alt:e.name,className:"popup__image",src:e.link}),o.a.createElement("p",{className:"popup__place"},e.name)))};var E=function(e){var t=e.isOpen,a=e.onClose,n=o.a.useState(""),r=Object(l.a)(n,2),c=r[0],i=r[1],u=o.a.useState(""),p=Object(l.a)(u,2),s=p[0],d=p[1],_=o.a.useContext(m);return o.a.useEffect((function(){_&&(i(_.name),d(_.about))}),[_]),o.a.createElement(h,{name:"popup_author",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:a,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:c,about:s})}},o.a.createElement("div",{className:"popup__input-field"},o.a.createElement("input",{id:"name-input",className:"popup__input popup__input_name",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",name:"name",required:!0,minLength:"2",maxLength:"40",pattern:"[A-Za-z\u0410-\u042f\u0401\u0430-\u044f\u0451 -]{1,}",onChange:function(e){i(e.target.value)},value:c||""}),o.a.createElement("span",{id:"name-input-error",className:"popup__input-error"})),o.a.createElement("div",{className:"popup__input-field"},o.a.createElement("input",{id:"job-input",className:"popup__input popup__input_job",type:"text",placeholder:"\u0420\u043e\u0434 \u0437\u0430\u043d\u044f\u0442\u0438\u0439",name:"about",required:!0,minLength:"2",maxLength:"200",onChange:function(e){d(e.target.value)},value:s||""}),o.a.createElement("span",{id:"job-input-error",className:"popup__input-error"})))};var k=function(e){var t=e.isOpen,a=e.onClose,n=o.a.useRef();return o.a.createElement(h,{name:"popup_avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:a,onSubmit:function(t){t.preventDefault(),e.onUpdateAvatar({avatar:n.current.value})}},o.a.createElement("div",{className:"popup__input-field"},o.a.createElement("input",{id:"avatar-input",className:"popup__input popup__input_avatar",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar",ref:n,required:!0}),o.a.createElement("span",{id:"avatar-input-error",className:"popup__input-error"})))},b=a(7),N=a(8),C=new(function(){function e(t){Object(b.a)(this,e),this._url=t.url,this._token=t.token}return Object(N.a)(e,[{key:"getProfileInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status))}))}},{key:"changeProfileInfo",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status))}))}},{key:"changeProfileAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.avatar})}).then((function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status))}))}},{key:"getCardsFromServer",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status))}))}},{key:"addNewCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status))}))}},{key:"addLike",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status))}))}},{key:"deleteLike",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status))}))}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-12",token:"c7046677-4ab5-42c0-bca8-fcae81104075"});var g=function(e){var t=e.isOpen,a=e.onClose,n=o.a.useState(),r=Object(l.a)(n,2),c=r[0],i=r[1],u=o.a.useState(),p=Object(l.a)(u,2),s=p[0],m=p[1];return o.a.createElement(h,{name:"popup_card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:a,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:c,link:s})}},o.a.createElement("div",{className:"popup__input-field"},o.a.createElement("input",{id:"place-input",className:"popup__input popup__input_place",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"name",minLength:"2",maxLength:"30",required:!0,onChange:function(e){i(e.target.value)},value:c||""}),o.a.createElement("span",{id:"place-input-error",className:"popup__input-error"})),o.a.createElement("div",{className:"popup__input-field"},o.a.createElement("input",{id:"link-input",className:"popup__input popup__input_link",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link",required:!0,onChange:function(e){m(e.target.value)},value:s||""}),o.a.createElement("span",{id:"link-input-error",className:"popup__input-error"})))};var y=function(){var e=o.a.useState(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],r=o.a.useState(!1),c=Object(l.a)(r,2),u=c[0],p=c[1],d=o.a.useState(!1),b=Object(l.a)(d,2),N=b[0],y=b[1],j=o.a.useState(null),O=Object(l.a)(j,2),P=O[0],S=O[1],x=o.a.useState({}),L=Object(l.a)(x,2),T=L[0],A=L[1],w=o.a.useState(""),z=Object(l.a)(w,2),D=z[0],q=z[1];function U(){N&&y(!1),a&&n(!1),u&&p(!1),P&&S(!1)}o.a.useEffect((function(){Promise.all([C.getProfileInfo(),C.getCardsFromServer()]).then((function(e){var t=Object(l.a)(e,2),a=t[0],n=t[1];q({name:a.name,about:a.about,avatar:a.avatar,_id:a._id}),B(n)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e,"."))}))}),[]);var I=o.a.useState([]),J=Object(l.a)(I,2),M=J[0],B=J[1];return o.a.createElement(m.Provider,{value:D},o.a.createElement("div",{className:"page"},o.a.createElement(s,null),o.a.createElement(_,{onEditAvatar:function(){y(!0)},onEditProfile:function(){n(!0)},onAddPlace:function(){p(!0)},onCardClick:function(e){A({}),A(e),S(!0)},cards:M,onCardLike:function(e){var t=function(t){var a=M.map((function(a){return a._id===e._id?t:a}));B(a)};e.likes.some((function(e){return e._id===D._id}))?C.deleteLike(e._id).then(t).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e,"."))})):C.addLike(e._id).then(t).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e,"."))}))},onCardDelete:function(e){C.deleteCard(e._id).then((function(){var t=M.filter((function(t){return t._id!==e._id}));B(t)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e,"."))}))}}),o.a.createElement(f,null),o.a.createElement(k,{isOpen:N,onClose:U,onUpdateAvatar:function(e){C.changeProfileAvatar(e).then((function(e){q({name:e.name,about:e.about,avatar:e.avatar,_id:e._id}),U()})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e,"."))}))}}),o.a.createElement(E,{isOpen:a,onClose:U,onUpdateUser:function(e){C.changeProfileInfo(e).then((function(e){q({name:e.name,about:e.about,avatar:e.avatar,_id:e._id}),U()})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e,"."))}))}}),o.a.createElement(g,{isOpen:u,onClose:U,onAddPlace:function(e){C.addNewCard(e).then((function(e){B([e].concat(Object(i.a)(M))),U()})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e,"."))}))}}),o.a.createElement(h,{name:"popup_delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonText:"\u0414\u0430",titleModifier:"popup__title_delete"},o.a.createElement("div",{className:"popup__input-field"},o.a.createElement("input",{id:"place-input",className:"popup__input popup__input_place",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"name",minLength:"2",maxLength:"30",required:!0}),o.a.createElement("span",{id:"place-input-error",className:"popup__input-error"})),o.a.createElement("div",{className:"popup__input-field"},o.a.createElement("input",{id:"link-input",className:"popup__input popup__input_link",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link",required:!0}),o.a.createElement("span",{id:"link-input-error",className:"popup__input-error"}))),o.a.createElement(v,{isOpen:P,onClose:U,name:T.name,link:T.link})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports=a.p+"static/media/logo1.94cbab21.svg"}},[[10,1,2]]]);
//# sourceMappingURL=main.ad3d9a1d.chunk.js.map