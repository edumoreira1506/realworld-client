(this["webpackJsonprealworld-client"]=this["webpackJsonprealworld-client"]||[]).push([[0],{41:function(e,t,a){e.exports=a(95)},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(33),o=a.n(c),u=a(12),s=a(11),i=a(16),l=a(1),m=a.n(l),p=a(4);a(47).config();var d="https://edumoreira1506.github.io/realworld-client/#",f={TIME_LINE:"".concat(d,"/time_line"),LOGIN:"".concat(d,"/login"),REGISTER:"".concat(d,"/register"),EDIT:"".concat(d,"/edit_profile"),EDIT_PASSWORD:"".concat(d,"/edit_password"),LOGOUT:"".concat(d,"/logout"),MY_PROFILE:"".concat(d,"/user/").concat(window.localStorage.getItem("username"))},E=[{content:"Edit",to:f.EDIT},{content:"Profile",to:f.MY_PROFILE},{content:"Logout",to:f.LOGOUT}],v=[{content:"Register",to:f.REGISTER},{content:"Login",to:f.LOGIN}],h=a(34),g=a.n(h).a.create({baseURL:"https://realworld-api-edumoreira1506.herokuapp.com/",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS"}}),b=function(){var e=Object(p.a)(m.a.mark((function e(t,a){var n,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={email:t,password:a},e.next=3,g.post("auth",n);case 3:return r=e.sent,c=r.data,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),_=function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.post("user",t);case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("user/".concat(t));case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(p.a)(m.a.mark((function e(t,a){var n,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:a}},e.next=3,g.post("user/".concat(t,"/follow"),{},n);case 3:return r=e.sent,c=r.data,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),N=function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("user/".concat(t,"/time_line"));case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(p.a)(m.a.mark((function e(t,a,n){var r,c,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{Authorization:n}},e.next=3,g.patch("user/".concat(a),t,r);case 3:return c=e.sent,o=c.data,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),j=function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("user/".concat(t,"/posts"));case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=a(13),k=a(35),y=a.n(k),S=function(e){return e.map((function(e){return Object(P.a)({},e,{createdAt:C(e.createdAt),updatedAt:C(e.updatedAt)})}))},C=function(e){return y()(e).calendar()},A=function(){return Boolean(T())},T=function(){return window.localStorage.getItem("token")},F=function(){return window.localStorage.getItem("id")},I=function(e){var t,a,n;t=e.token,window.localStorage.setItem("token",t),a=e._id,window.localStorage.setItem("id",a),n=e.username,window.localStorage.setItem("username",n),window.location.reload()},q=function(){var e=Object(p.a)(m.a.mark((function e(t,a,n){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t,a);case 2:if(!(r=e.sent).ok){e.next=5;break}return e.abrupt("return",n.onAuthenticated(r.user));case 5:return e.abrupt("return",n.onError(r.message));case 6:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),L=function(){var e=Object(p.a)(m.a.mark((function e(t,a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(t);case 2:if(!(n=e.sent).ok){e.next=5;break}return e.abrupt("return",a.onRegistered());case 5:return e.abrupt("return",a.onError(n.message));case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),R=function(){var e=Object(p.a)(m.a.mark((function e(t,a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t);case 2:if(!(n=e.sent).ok){e.next=5;break}return e.abrupt("return",a.onFound(n.user));case 5:return e.abrupt("return",a.onError(n.message));case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),U=function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=F(),e.next=3,N(a);case 3:if(!(n=e.sent).ok){e.next=6;break}return e.abrupt("return",t.onFound(n.posts));case 6:return e.abrupt("return",t.onError(n.message));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(p.a)(m.a.mark((function e(t,a){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t);case 2:if(!(n=e.sent).ok){e.next=6;break}return r=S(n.posts),e.abrupt("return",a.onFound(r));case 6:return e.abrupt("return",a.onError(n.message));case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),G=function(){var e=Object(p.a)(m.a.mark((function e(t,a){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=T()||"",e.next=3,O(t,n);case 3:if(!(r=e.sent).ok){e.next=6;break}return e.abrupt("return",a.onFollowed(r.message));case 6:return e.abrupt("return",a.onError(r.message));case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),H=function(){var e=Object(p.a)(m.a.mark((function e(t,a){var n,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=T(),r=F(),e.next=4,x(t,r,n);case 4:if(!(c=e.sent).ok){e.next=7;break}return e.abrupt("return",a.onEdited());case 7:return e.abrupt("return",a.onError(c.message));case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),B=(a(67),function(e){var t=e.children,a=e.to,n=e.target,c=void 0===n?"_blank":n;return r.a.createElement("a",{href:a,target:c,className:"Link"},t)}),M=(a(68),function(e){var t=e.children;return r.a.createElement("div",{className:"Container"},t)}),z=(a(69),A()?E:v),W=function(){return r.a.createElement("header",{className:"Header"},r.a.createElement(M,null,r.a.createElement("div",{className:"Header__areas"},r.a.createElement(B,{to:d,target:"_self"},r.a.createElement("div",{className:"Header__logo"},r.a.createElement("h1",{className:"Header__title"},"RealWorld"))),r.a.createElement("nav",{className:"Header__links"},z.map((function(e){return r.a.createElement("span",{className:"Header__link",key:e.to},r.a.createElement(B,{to:e.to,target:"_self"},e.content))}))))))},J=(a(70),function(e){var t=e.children;return r.a.createElement("div",{className:"PublicTemplate"},r.a.createElement("section",{className:"PublicTemplate__header"},r.a.createElement(W,null)),t)}),Y=(a(71),function(e){var t=e.children;return r.a.createElement("div",{className:"PrivateTemplate"},r.a.createElement("section",{className:"PrivateTemplate__header"},r.a.createElement(W,null)),t)}),K=function(e){var t=e.component,a=Object(i.a)(e,["component"]),n=A();return r.a.createElement(s.a,Object.assign({},a,{render:function(e){return n?(a=r.a.createElement(t,e),r.a.createElement(Y,null,a)):window.location=f.LOGIN;var a}}))},Q=function(e){var t=e.component,a=Object(i.a)(e,["component"]),n=A();return r.a.createElement(s.a,Object.assign({},a,{render:function(e){return n?window.location=f.TIME_LINE:(a=r.a.createElement(t,e),r.a.createElement(J,null,a));var a}}))},V=a(3),X=(a(76),function(e){var t=e.children;return r.a.createElement("div",{className:"Box"},t)}),Z=(a(77),function(e){var t=e.name,a=e.type,n=e.onChange,c=e.required,o=e.placeholder,u=e.value;return r.a.createElement("input",{name:t,onChange:n,type:a,required:c,placeholder:o,value:u,className:"Input","data-testid":"input"})}),$=(a(78),function(e){var t=e.name,a=e.onChange,n=e.required,c=e.placeholder,o=e.value;return r.a.createElement("textarea",{name:t,onChange:a,required:n,placeholder:c,value:o,className:"TextArea"})}),ee=(a(79),function(e){var t=e.type,a=void 0===t?"button":t,n=e.onClick,c=e.children;return r.a.createElement("button",{type:a,"data-testid":"button",onClick:n,className:"Button"},c)}),te=(a(80),function(e){var t=e.inputs,a=void 0===t?[]:t,n=e.buttonText,c=e.onSubmit,o=e.textAreas,u=void 0===o?[]:o;return r.a.createElement("form",{className:"Form",onSubmit:c,"data-testid":"form"},a.map((function(e){return r.a.createElement("div",{className:"Form__field",key:e.placeholder},r.a.createElement(Z,{value:e.value,placeholder:e.placeholder,type:e.type,onChange:e.onChange,required:e.required,name:e.name}))})),u.map((function(e){return r.a.createElement("div",{className:"Form__field",key:e.placeholder},r.a.createElement($,{value:e.value,placeholder:e.placeholder,onChange:e.onChange,required:e.required,name:e.name}))})),r.a.createElement("div",{className:"Form__submit-button"},r.a.createElement(ee,{type:"submit",onClick:c},n)))}),ae=a(18),ne=a.n(ae),re=function(e){return ne.a.fire({title:"Error!",text:e,icon:"error"})},ce=function(e){return ne.a.fire({title:"Nice!",text:e,icon:"success"})},oe=(a(81),function(){var e=Object(n.useState)(""),t=Object(V.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),u=Object(V.a)(o,2),s=u[0],i=u[1],l=[{name:"email",type:"email",onChange:function(e){return c(e.target.value)},required:!0,placeholder:"E-mail",value:a},{name:"password",type:"password",onChange:function(e){return i(e.target.value)},required:!0,placeholder:"Password",value:s}];return r.a.createElement(X,null,r.a.createElement("div",{className:"Login"},r.a.createElement("h2",{className:"Login__title"},"Login"),r.a.createElement("h3",{className:"Login__register-link"},r.a.createElement(B,{to:f.REGISTER,target:"_self"},"Need an account?")),r.a.createElement("div",{className:"Login__form"},r.a.createElement(te,{onSubmit:function(e){e.preventDefault(),q(a,s,{onAuthenticated:I,onError:re})},buttonText:"Sign in",inputs:l}))))}),ue=function(){var e=Object(p.a)(m.a.mark((function e(t,a){var n,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:a}},e.next=3,g.post("post",t,n);case 3:return r=e.sent,c=r.data,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),se=function(){var e=Object(p.a)(m.a.mark((function e(t,a){var n,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:a}},e.next=3,g.post("post/".concat(t,"/favorite"),{},n);case 3:return r=e.sent,c=r.data,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),ie=function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("post/".concat(t));case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),le=function(){var e=Object(p.a)(m.a.mark((function e(t,a){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=T(),e.next=3,ue(t,n);case 3:if(!(r=e.sent).ok){e.next=6;break}return e.abrupt("return",a.onRegistered());case 6:return e.abrupt("return",a.onError(r.message));case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),me=function(){var e=Object(p.a)(m.a.mark((function e(t,a){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=T(),e.next=3,se(t,n);case 3:if(!(r=e.sent).ok){e.next=6;break}return e.abrupt("return",a.onFavorited());case 6:return e.abrupt("return",a.onError(r.message));case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),pe=function(){var e=Object(p.a)(m.a.mark((function e(t,a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie(t);case 2:if(!(n=e.sent).ok){e.next=5;break}return e.abrupt("return",a.onFound(Object(P.a)({},n.post,{createdAt:C(n.post.createdAt),updatedAt:C(n.post.updatedAt)})));case 5:return e.abrupt("return",a.onError(n.message));case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),de=a(17),fe=a(39),Ee=(a(84),function(e){var t=e.icon;return r.a.createElement(fe.a,{icon:t,className:"Icon"})}),ve=a(40),he=function(e){var t=e.onClick,a=e.favoritesAmount;return r.a.createElement(ee,{onClick:t},r.a.createElement(Ee,{icon:ve.a}),a)},ge=(a(85),function(e){var t=e.title,a=e.createdAt,n=e.content,c=e.favoritesAmount,o=e.onFavorite,u=e.user,s=e.id;return r.a.createElement("article",{className:"Post"},r.a.createElement("div",{className:"Post__header"},r.a.createElement("figure",{className:"Post__image-container"},r.a.createElement("img",{src:u.image,alt:t,className:"Post__image"})),r.a.createElement("div",{className:"Post__title-container"},r.a.createElement(B,{target:"_self",to:"".concat(d,"/user/").concat(u.username)},r.a.createElement("h3",{className:"Post__username"},u.username," |")),r.a.createElement("h3",{className:"Post__title"},t),r.a.createElement("h4",{className:"Post__created-at"},a))),r.a.createElement(B,{target:"_self",to:"".concat(d,"/post/").concat(s)},r.a.createElement("div",{className:"Post__content"},r.a.createElement(de.a,null,n))),r.a.createElement("div",{className:"Post__favorites"},r.a.createElement(he,{onClick:o,favoritesAmount:c})))}),be=(a(86),function(e){var t=e.posts,a=e.onFavorite;return r.a.createElement("div",{className:"Posts"},t.map((function(e){return r.a.createElement(ge,{key:e._id,title:e.title,content:e.content,favoritesAmount:e.favorites.length,createdAt:e.createdAt,user:e.user,id:e._id,onFavorite:function(){return a(e._id)}})})))}),_e=(a(87),function(){var e=Object(n.useState)(""),t=Object(V.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),u=Object(V.a)(o,2),s=u[0],i=u[1],l=Object(n.useState)([]),m=Object(V.a)(l,2),p=m[0],d=m[1];Object(n.useEffect)((function(){U({onFound:function(e){var t=S(e);d(t)},onError:re})}),[]);var f=[{onChange:function(e){return c(e.target.value)},required:!0,placeholder:"Type what you want...",value:a}],E=[{type:"text",onChange:function(e){return i(e.target.value)},required:!0,placeholder:"Title",value:s}];return r.a.createElement("section",{className:"TimeLine"},r.a.createElement(M,null,r.a.createElement("div",{className:"TimeLine__post-area"},r.a.createElement(te,{onSubmit:function(e){e.preventDefault(),le({content:a,title:s},{onRegistered:function(){c(""),i(""),ce("Posted")},onError:re})},buttonText:"Post!",textAreas:f,inputs:E})),r.a.createElement("div",{className:"TimeLine__posts"},r.a.createElement(be,{posts:p,onFavorite:function(e){me(e,{onError:re,onFavorited:function(){return ce("Favorited!")}})}}))))}),we=(a(88),function(){var e=Object(n.useState)(""),t=Object(V.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),u=Object(V.a)(o,2),s=u[0],i=u[1],l=Object(n.useState)(""),m=Object(V.a)(l,2),p=m[0],d=m[1],f=Object(n.useState)(""),E=Object(V.a)(f,2),v=E[0],h=E[1],g=Object(n.useState)(""),b=Object(V.a)(g,2),_=b[0],w=b[1],O=[{type:"email",onChange:function(e){return i(e.target.value)},required:!0,placeholder:"E-mail",value:s},{type:"password",onChange:function(e){return d(e.target.value)},required:!0,placeholder:"Password",value:p},{type:"password",onChange:function(e){return h(e.target.value)},required:!0,placeholder:"Confirm Password",value:v},{type:"text",onChange:function(e){return c(e.target.value)},required:!0,placeholder:"Username",value:a},{type:"text",onChange:function(e){return w(e.target.value)},required:!1,placeholder:"Url image",value:_}];return r.a.createElement(X,null,r.a.createElement("div",{className:"Register"},r.a.createElement("h2",{className:"Register__title"},"Register"),r.a.createElement("div",{className:"Register__form"},r.a.createElement(te,{onSubmit:function(e){e.preventDefault(),L({username:a,email:s,password:p,confirmPassword:v,urlImage:_},{onError:re,onRegistered:function(){c(""),i(""),d(""),h(""),w(""),ce("Registered!")}})},buttonText:"Register",inputs:O}))))}),Oe=(a(89),function(){var e=Object(n.useState)(""),t=Object(V.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),u=Object(V.a)(o,2),s=u[0],i=u[1],l=Object(n.useState)(""),m=Object(V.a)(l,2),p=m[0],d=m[1],E=Object(n.useState)(""),v=Object(V.a)(E,2),h=v[0],g=v[1];Object(n.useEffect)((function(){var e=F();R(e,{onError:re,onFound:function(e){c(e.username),i(e.email),d(e.image),g(e.bio)}})}),[]);var b=[{type:"email",onChange:function(e){return i(e.target.value)},required:!0,placeholder:"E-mail",value:s},{type:"text",onChange:function(e){return c(e.target.value)},required:!0,placeholder:"Username",value:a},{type:"text",onChange:function(e){return d(e.target.value)},required:!1,placeholder:"Url image",value:p}],_=[{onChange:function(e){return g(e.target.value)},required:!0,placeholder:"Bio",value:h}];return r.a.createElement(X,null,r.a.createElement("div",{className:"EditProfile"},r.a.createElement("h2",{className:"EditProfile__title"},"Edit Profile"),r.a.createElement("h3",{className:"EditProfile__edit-password"},r.a.createElement(B,{to:f.EDIT_PASSWORD,target:"_self"},"Edit password")),r.a.createElement("div",{className:"EditProfile__areas"},r.a.createElement(te,{onSubmit:function(e){e.preventDefault(),H({username:a,email:s,image:p,bio:h},{onError:re,onEdited:function(){return ce("Edited!")}})},buttonText:"EditP rofile",inputs:b,textAreas:_}),r.a.createElement("figure",{className:"EditProfile__image-container"},r.a.createElement("img",{src:p,className:"EditProfile__image",alt:a})))))}),Ne=(a(90),function(){var e=Object(n.useState)(""),t=Object(V.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),u=Object(V.a)(o,2),s=u[0],i=u[1],l=[{type:"password",onChange:function(e){return c(e.target.value)},required:!0,placeholder:"Password",value:a},{type:"password",onChange:function(e){return i(e.target.value)},required:!0,placeholder:"Confirm password",value:s}];return r.a.createElement(X,null,r.a.createElement("div",{className:"EditPassword"},r.a.createElement("h2",{className:"EditPassword__title"},"Password"),r.a.createElement("div",{className:"EditPassword__form"},r.a.createElement(te,{onSubmit:function(e){e.preventDefault(),H({password:a,confirmPassword:s},{onError:re,onEdited:function(){c(""),i(""),ce("Edited!")}})},buttonText:"Edit",inputs:l}))))}),xe=function(){return Object(n.useEffect)((function(){window.localStorage.clear(),window.location.reload()})),r.a.createElement("h1",null,"Logout")},je=(a(91),function(e){var t=e.children;return r.a.createElement("section",{className:"Banner"},t)}),Pe=(a(92),function(){var e=Object(n.useState)({}),t=Object(V.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),u=Object(V.a)(o,2),i=u[0],l=u[1],m=Object(s.e)().username;Object(n.useEffect)((function(){R(m,{onError:re,onFound:c}),D(m,{onError:re,onFound:function(e){var t=e.map((function(e){return function(e,t){return Object(P.a)({},e,{user:t})}(e,{image:a.image,username:a.username})}));l(t)}})}),[m,a.image,a.username]);return r.a.createElement("div",{className:"User"},r.a.createElement("section",{className:"User__header"},r.a.createElement(W,null)),r.a.createElement(je,null,r.a.createElement(M,null,r.a.createElement("div",{className:"User__banner"},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"User__left-area"},r.a.createElement("figure",{className:"User__image-container"},r.a.createElement("img",{className:"User__image",src:a.image,alt:a.username})),r.a.createElement("h2",{className:"User__name"},a.username))),r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"User__bio"},a.bio||"Nothing here...")),r.a.createElement("span",{className:"User__follow-button"},r.a.createElement(ee,{onClick:function(){G(a.id,{onFollowed:ce,onError:re})},type:"button"},"Follow +"))))),r.a.createElement("div",{className:"User__posts"},r.a.createElement(be,{posts:i,onFavorite:function(e){me(e,{onError:re,onFavorited:function(){return ce("Favorited!")}})}})))}),ke=(a(93),function(){var e=Object(n.useState)({user:{},content:""}),t=Object(V.a)(e,2),a=t[0],c=t[1],o=Object(s.e)().postId;return Object(n.useEffect)((function(){pe(o,{onFound:c,onError:re})}),[o]),r.a.createElement("div",{className:"PostPage"},r.a.createElement("section",{className:"PostPage__header"},r.a.createElement(W,null)),r.a.createElement(je,null,r.a.createElement(M,null,r.a.createElement("div",{className:"PostPage__banner"},r.a.createElement("h2",{className:"PostPage__title"},a.title),r.a.createElement("div",{className:"PostPage__details"},r.a.createElement("figure",{className:"PostPage__image-container"},r.a.createElement("img",{src:a.user.image,alt:a.user.username,className:"PostPage__image"})),r.a.createElement(B,{target:"_self",to:"".concat(d,"/user/").concat(a.user.username)},r.a.createElement("div",{className:"PostPage__user-link"},r.a.createElement("h2",{className:"PostPage__username"},a.user.username),r.a.createElement("h3",{className:"PostPage__created-at"},a.createdAt))))))),r.a.createElement(M,null,r.a.createElement("article",{className:"PostPage__content"},r.a.createElement(de.a,null,a.content))))}),ye=function(){return r.a.createElement(u.a,null,r.a.createElement(K,{exact:!0,path:"/time_line",component:_e}),r.a.createElement(K,{exact:!0,path:"/edit_profile",component:Oe}),r.a.createElement(K,{exact:!0,path:"/edit_password",component:Ne}),r.a.createElement(K,{exact:!0,path:"/logout",component:xe}),r.a.createElement(Q,{exact:!0,path:"/login",component:oe}),r.a.createElement(Q,{exact:!0,path:"/",component:oe}),r.a.createElement(Q,{exact:!0,path:"/register",component:we}),r.a.createElement(s.a,{exact:!0,path:"/user/:username",component:Pe}),r.a.createElement(s.a,{exact:!0,path:"/post/:postId",component:ke}))};a(94);o.a.render(r.a.createElement(ye,null),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.115beb46.chunk.js.map