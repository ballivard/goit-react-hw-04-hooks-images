(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{28:function(e,t,a){},29:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(8),o=a.n(r),s=(a(28),a(12)),i=a(4),l=(a(29),a(11)),u=a.n(l),j=a(21),m=a(22),b=a.n(m),g={currentPage:1,searchQuery:"",method:"get",per_page:12,baseURL:"https://pixabay.com/api/",params:"&image_type=photo",API_KEY:"23250998-48dbeb0708fc3f5b568666898"},h=function(){var e=Object(j.a)(u.a.mark((function e(t){var a,c,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.currentPage,c=t.searchQuery,n=g.API_KEY,r=g.params,e.next=4,b.a.get("?key=".concat(n,"&q=").concat(c,"&").concat(r,"&page=").concat(a,"&image_type=photo&orientation=horizontal&per_page=12"),g).then((function(e){return e.data.hits}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d={fetchImages:h},f=a(1),O=function(e){var t=e.children;return Object(f.jsx)("div",{children:t})},p=function(e){var t=e.onSubmit,a=Object(c.useState)(""),n=Object(i.a)(a,2),r=n[0],o=n[1];return Object(f.jsx)("header",{className:"Searchbar",children:Object(f.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),t(r),o("")},children:[Object(f.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(f.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(f.jsx)("input",{onChange:function(e){o(e.currentTarget.value)},className:"SearchForm-input",value:r,type:"text",autoComplete:"off",placeholder:"Search images and photos"})]})})},x=function(e){e.id;var t=e.webformatURL,a=e.largeImageURL,c=e.tags,n=e.handleLargeURLImage,r=function(e){"IMG"===e.target.nodeName&&n(e.target.dataset.large)};return Object(f.jsx)("li",{className:"GalleryItem",onClick:r,children:Object(f.jsx)("img",{src:t,alt:c,className:"GalleryItem-image",onClick:r,"data-large":a})},t)};x.defaultProps={id:"",webformatURL:"",largeImageURL:"",tags:"",handleLargeURLImage:""};var v=x,L=function(e){var t=e.images,a=e.handleLargeURLImage,c=function(e){console.log("gallery click")},n=function(e){a(e)};return Object(f.jsx)("ul",{className:"ImageGallery",id:"imagesList",children:t.map((function(e){var t=e.id,a=e.webformatURL,r=e.largeImageURL,o=e.tags,s=e.user;return Object(f.jsx)(v,{onClick:c,webformatURL:a,largeImageURL:r,tag:o,handleLargeURLImage:n},"".concat(t).concat(s))}))})},I=function(e){var t=e.onClick;return Object(f.jsx)("button",{className:"ButtonWrapper",onClick:t,children:"Load more"})},S=document.querySelector("#modal"),y=function(e){var t=e.largeImageURL,a=e.onClose,c=e.children;return Object(r.createPortal)(Object(f.jsx)("div",{className:"Overlay",onClick:function(e){e.currentTarget===e.target&&a()},children:Object(f.jsxs)("div",{className:"Modal",children:[c,Object(f.jsx)("img",{src:t,alt:"No available",width:"640"})]})}),S)},R=a(23),U=a.n(R),w=function(){return Object(f.jsx)("div",{className:"LoaderWrapper",children:Object(f.jsx)(U.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80})})};var N=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),o=Object(i.a)(r,2),l=o[0],u=o[1],j=Object(c.useState)(""),m=Object(i.a)(j,2),b=m[0],g=m[1],h=Object(c.useState)(!1),x=Object(i.a)(h,2),v=x[0],S=x[1],R=Object(c.useState)(null),U=Object(i.a)(R,2),N=U[0],k=U[1],C=Object(c.useState)(!1),P=Object(i.a)(C,2),F=P[0],E=P[1],_=Object(c.useState)(1),G=Object(i.a)(_,2),T=G[0],A=G[1];Object(c.useEffect)((function(){k(N)}),[N]),Object(c.useEffect)((function(){""!==l&&B()}),[l]);var B=function(){S(!0);var e={searchQuery:l,currentPage:T};d.fetchImages(e).then((function(e){n([].concat(Object(s.a)(a),Object(s.a)(e))),A((function(e){return e+1})),k("")})).catch((function(e){return console.log(e)})).finally((function(){S(!1),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))};return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)(O,{children:[F&&Object(f.jsx)(y,{onClose:function(){return E(!F)},largeImageURL:b}),Object(f.jsx)(p,{onSubmit:function(e){""!==e.trim()?(u(e),A(1),n([])):alert("Please write something")}}),a.length>0&&Object(f.jsx)(L,{images:a,handleLargeURLImage:function(e){g(e),E(!0)}}),v?Object(f.jsx)(w,{error:N}):a.length>0&&Object(f.jsx)(I,{onClick:B})]})})};o.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(N,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.119b5002.chunk.js.map