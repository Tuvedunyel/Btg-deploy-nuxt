(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{257:function(t,e,r){t.exports=r.p+"img/wave-yellow.dfc86dc.gif"},274:function(t,e,r){"use strict";var o=r(3),n=r(63),l=r(21),c=r(16),v=r(8),d=r(4),_=r(275),h=r(119),f=r(276),C=r(277),w=r(65),m=r(278),x=[],y=x.sort,L=d((function(){x.sort(void 0)})),k=d((function(){x.sort(null)})),P=h("sort"),A=!d((function(){if(w)return w<70;if(!(f&&f>3)){if(C)return!0;if(m)return m<603;var code,t,e,r,o="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(r=0;r<47;r++)x.push({k:t+r,v:e})}for(x.sort((function(a,b){return b.v-a.v})),r=0;r<x.length;r++)t=x[r].k.charAt(0),o.charAt(o.length-1)!==t&&(o+=t);return"DGBEFHACIJK"!==o}}));o({target:"Array",proto:!0,forced:L||!k||!P||!A},{sort:function(t){void 0!==t&&n(t);var e=l(this);if(A)return void 0===t?y.call(e):y.call(e,t);var r,o,d=[],h=c(e.length);for(o=0;o<h;o++)o in e&&d.push(e[o]);for(r=(d=_(d,function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:v(e)>v(r)?1:-1}}(t))).length,o=0;o<r;)e[o]=d[o++];for(;o<h;)delete e[o++];return e}})},275:function(t,e){var r=Math.floor,o=function(t,e){var c=t.length,v=r(c/2);return c<8?n(t,e):l(o(t.slice(0,v),e),o(t.slice(v),e),e)},n=function(t,e){for(var element,r,o=t.length,i=1;i<o;){for(r=i,element=t[i];r&&e(t[r-1],element)>0;)t[r]=t[--r];r!==i++&&(t[r]=element)}return t},l=function(t,e,r){for(var o=t.length,n=e.length,l=0,c=0,v=[];l<o||c<n;)l<o&&c<n?v.push(r(t[l],e[c])<=0?t[l++]:e[c++]):v.push(l<o?t[l++]:e[c++]);return v};t.exports=o},276:function(t,e,r){var o=r(64).match(/firefox\/(\d+)/i);t.exports=!!o&&+o[1]},277:function(t,e,r){var o=r(64);t.exports=/MSIE|Trident/.test(o)},278:function(t,e,r){var o=r(64).match(/AppleWebKit\/(\d+)\./);t.exports=!!o&&+o[1]},289:function(t,e,r){"use strict";r.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flipped vague no-transition"},[e("img",{attrs:{src:r(257),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flipped vague no-transition"},[e("img",{attrs:{src:r(257),alt:""}})])}],n=(r(274),r(40),r(49)),l=r.n(n),c={name:"FrontPage",data:function(){return{loading:!0,loadingClient:!0,data:null,slider:null,textPhoto:null,poleCompetences:null,clientData:null}},computed:{clientShow:function(){return this.clientData?this.clientData.slice(0,12).sort((function(a,b){return Date.parse(b.date_gmt)-Date.parse(a.date_gmt)})):this.clientData}},mounted:function(){var t=this;l.a.get("https://btg-communication.local/wp-json/wp/v2/pages/7").then((function(e){t.data=e.data,t.slider=e.data.acf.slide,t.textPhoto=e.data.acf.texte_photo,t.poleCompetences=e.data.acf.poles_de_competences,t.loading=!1})),l.a.get("https://btg-communication.local/wp-json/better-rest-endpoints/v1/client?per_page=50").then((function(e){t.clientData=e.data,t.loadingClient=!1}));var e=document.body;if(e.classList.contains("noscroll"))return e.classList.remove("noscroll")}},v=r(38),component=Object(v.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.loading?t._e():r("section",{attrs:{id:"acc-projet"}},[r("div",{staticClass:"container"},[r("h2",{staticClass:"reversed flipped no-transition"},[t._v("Projets")]),t._v(" "),r("div",{staticClass:"glide no-transition"},[r("div",{staticClass:"glide__track",attrs:{"data-glide-el":"track"}},[t.slider?r("ul",{staticClass:"glide__slides"},[r("li",{staticClass:"glide__slide"},[r("img",{attrs:{src:t.slider[0].image.url,alt:t.slider[0].image.alt}})])]):t._e()]),t._v(" "),r("div",{staticClass:"controls",attrs:{"data-glide-el":"controls"}},[r("button",{staticClass:"prev",attrs:{"data-glide-dir":"<"}},[r("svg",{staticClass:"arrow",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",x:"0px",y:"0px"}},[r("title",[t._v("Arrows")]),t._v(" "),r("g",{attrs:{"data-name":"Layer 2"}},[r("polygon",{attrs:{points:"44.13 72.13 58 86 94.25 50 57.87 13.13 44 27 57.51 41 6 41 6 59 57.51 59 44.13 72.13"}})])])]),t._v(" "),t.slider?r("div",{staticClass:"glide__bullets",attrs:{"data-glide-el":"controls[nav]"}},[r("button",{staticClass:"glide__bullet",attrs:{"data-glide-dir":"="}})]):t._e(),t._v(" "),r("button",{staticClass:"next",attrs:{"data-glide-dir":">"}},[r("svg",{staticClass:"arrow",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",x:"0px",y:"0px"}},[r("title",[t._v("Arrows")]),t._v(" "),r("g",{attrs:{"data-name":"Layer 2"}},[r("polygon",{attrs:{points:"44.13 72.13 58 86 94.25 50 57.87 13.13 44 27 57.51 41 6 41 6 59 57.51 59 44.13 72.13"}})])])])])]),t._v(" "),r("div",{staticClass:"desc"},[t.textPhoto?r("p",{staticClass:"exo-light-21",domProps:{innerHTML:t._s(t.textPhoto)}}):t._e(),t._v(" "),r("a",{staticClass:"classic-button",attrs:{href:"#"}},[r("p",[t._v("Les réalisations de l'agence")]),t._v(" "),r("svg",{staticClass:"arrow",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",x:"0px",y:"0px"}},[r("title",[t._v("Arrows")]),t._v(" "),r("g",{attrs:{"data-name":"Layer 2"}},[r("polygon",{attrs:{points:"44.13 72.13 58 86 94.25 50 57.87 13.13 44 27 57.51 41 6 41 6 59 57.51 59 44.13 72.13"}})])])])]),t._v(" "),r("div",{staticClass:"button"},[r("a",{staticClass:"resp classic-button",attrs:{href:"#"}},[r("p",[t._v("Les réalisations de l'agence")]),t._v(" "),r("svg",{staticClass:"arrow",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",x:"0px",y:"0px"}},[r("title",[t._v("Arrows")]),t._v(" "),r("g",{attrs:{"data-name":"Layer 2"}},[r("polygon",{attrs:{points:"44.13 72.13 58 86 94.25 50 57.87 13.13 44 27 57.51 41 6 41 6 59 57.51 59 44.13 72.13"}})])])])])])]),t._v(" "),t.loading?t._e():r("section",{attrs:{id:"acc-activite"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"desc"},[r("h2",[t._v("Ce que l'on fait")]),t._v(" "),r("p",{staticClass:"exo-light-21",domProps:{innerHTML:t._s(t.data.acf.texte_competences)}}),t._v(" "),r("a",{staticClass:"classic-button",attrs:{href:"<?php echo get_permalink(102); ?>"}},[r("p",[t._v("L'agence et savoir-faire")]),t._v(" "),r("svg",{staticClass:"arrow",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",x:"0px",y:"0px"}},[r("title",[t._v("Arrows")]),t._v(" "),r("g",{attrs:{"data-name":"Layer 2"}},[r("polygon",{attrs:{points:"44.13 72.13 58 86 94.25 50 57.87 13.13 44 27 57.51 41 6 41 6 59 57.51 59 44.13 72.13"}})])])])])]),t._v(" "),r("div",{staticClass:"cards-container"},[t._m(0),t._v(" "),t._l(t.poleCompetences,(function(e,o){return r("div",{key:o,staticClass:"card"},[r("img",{attrs:{src:e.icone.url,alt:e.icone.alt}}),t._v(" "),r("h3",[t._v(t._s(e.titre))]),t._v(" "),r("p",{staticClass:"exo-light-16",domProps:{innerHTML:t._s(e.descriptif)}})])}))],2)]),t._v(" "),t.loading||t.loadingClient?t._e():r("section",{attrs:{id:"acc-clients"}},[r("div",{staticClass:"container fixed"},[r("h2",{staticClass:"reversed flipped no-transition"},[t._v("Clients")]),t._v(" "),r("div",{staticClass:"pourquoi-pas"},[r("div",{staticClass:"vague"},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 188 32"}},[r("path",{attrs:{d:"M156.7 32c-9.5 0-14.2-7.7-18.2-14.5-4.4-7.1-7.4-11.5-13.2-11.5-5.7 0-8.8 4.4-13.1 11.5C108.1 24.3 103.5 32 94 32s-14.2-7.7-18.2-14.5C71.4 10.4 68.4 6 62.7 6c-5.7 0-8.8 4.4-13.1 11.5C45.5 24.3 40.9 32 31.3 32s-14.2-7.7-18.2-14.5C8.8 10.4 5.7 6 0 6V0c9.5 0 14.2 7.7 18.2 14.5C22.6 21.6 25.6 26 31.3 26c5.7 0 8.8-4.4 13.1-11.5C48.5 7.7 53.1 0 62.7 0c9.5 0 14.2 7.7 18.2 14.5C85.2 21.6 88.3 26 94 26s8.8-4.4 13.1-11.5C111.2 7.7 115.8 0 125.3 0s14.2 7.7 18.2 14.5c4.3 7.2 7.4 11.5 13.1 11.5s8.8-4.4 13.1-11.5C173.8 7.7 178.5 0 188 0v6c-5.7 0-8.8 4.4-13.1 11.5-4.1 6.8-8.7 14.5-18.2 14.5z"}})])]),t._v(" "),r("p",[t._v("Pourquoi pas vous ?")])]),t._v(" "),r("div",{staticClass:"clients-list"},[r("div",{staticClass:"grille"}),t._v(" "),t._l(t.clientShow,(function(e,o){return r("a",{key:o,staticClass:"client",attrs:{href:e.acf.url,title:e.title}},[r("span",{staticClass:"screen-reader-text"},[t._v(t._s(e.title))]),t._v(" "),r("img",{attrs:{src:e.media.thumbnail,alt:e.title}})])}))],2),t._v(" "),r("a",{staticClass:"classic-button",attrs:{href:"#"}},[r("p",[t._v("Références")]),t._v(" "),r("svg",{staticClass:"arrow",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",x:"0px",y:"0px"}},[r("title",[t._v("Arrows")]),t._v(" "),r("g",{attrs:{"data-name":"Layer 2"}},[r("polygon",{attrs:{points:"44.13 72.13 58 86 94.25 50 57.87 13.13 44 27 57.51 41 6 41 6 59 57.51 59 44.13 72.13"}})])])])])]),t._v(" "),t.loading?t._e():r("section",{attrs:{id:"acc-philosophie"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"desc"},[r("h2",[t._v("Philosophie")]),t._v(" "),r("div",{staticClass:"exo-light-21",domProps:{innerHTML:t._s(t.data.acf.texte_philosophie)}}),t._v(" "),t._m(1)])]),t._v(" "),r("div",{staticClass:"cards-container"},[r("img",{attrs:{src:t.data.acf.image_philosophie.url,alt:t.data.acf.image_philosophie.alt}})])]),t._v(" "),t.loading?t._e():r("section",{attrs:{id:"acc-methodologie"}},[r("div",{staticClass:"blue-background"}),t._v(" "),r("div",{staticClass:"container"},[r("h2",[t._v("methodologie")]),t._v(" "),r("div",{staticClass:"desc"},[r("div",{staticClass:"exo-light-21",domProps:{innerHTML:t._s(t.data.acf.texte_methodologie)}})]),t._v(" "),r("a",{staticClass:"classic-button menu-related",attrs:{onclick:"toggleContact()"}},[r("p",[t._v("Contactez-nous")]),t._v(" "),r("svg",{staticClass:"arrow",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",x:"0px",y:"0px"}},[r("title",[t._v("Arrows")]),t._v(" "),r("g",{attrs:{"data-name":"Layer 2"}},[r("polygon",{attrs:{points:"44.13 72.13 58 86 94.25 50 57.87 13.13 44 27 57.51 41 6 41 6 59 57.51 59 44.13 72.13"}})])])])])]),t._v(" "),t.loading?r("section",[r("h1",[t._v("Nous cherchons nos créations, un peu de patience ;)")])]):t._e()])}),o,!1,null,null,null);e.default=component.exports}}]);