(this["webpackJsonpgwarmstrong.github.io"]=this["webpackJsonpgwarmstrong.github.io"]||[]).push([[0],{34:function(e,t,a){e.exports=a.p+"static/media/colgate-logo-1.86500e69.png"},35:function(e,t,a){e.exports=a.p+"static/media/ucsd-logo.b619b951.png"},42:function(e,t,a){e.exports=a.p+"static/media/me-photo.69b5065d.jpg"},47:function(e,t,a){e.exports=a(67)},52:function(e,t,a){},53:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),i=(a(52),a(8)),o=a(9),u=a(11),m=a(10),s=a(45),p=a(6),b=a(72),d=a(69),h=a(70),E=(a(53),a(20)),g=a(71),f=a(34),y=a.n(f),v=a(35),j=a.n(v),k={imageBlock:{height:"100px"},cardImage:{display:"block",margin:"auto",maxWidth:"100%",maxHeight:"100%"},cardText:{alignItems:"center",display:"block"},blurb:{paddingTop:"30px"}},O=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:k.blurb},r.a.createElement("h3",null,"About Me"),r.a.createElement("p",null,"I am a PhD student at UC San Diego. My interests include:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Machine Learning"),r.a.createElement("li",null,"Data Visualization"),r.a.createElement("li",null,"Phylogenetic Algorithms")))}}]),a}(r.a.Component),x=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Bio"},r.a.createElement("h3",null,"Education"),r.a.createElement(E.a,{className:"shadow p-3 mt-3"},r.a.createElement(d.a,null,r.a.createElement(h.a,{xs:2,style:k.imageBlock},r.a.createElement(g.a,{src:j.a,style:k.cardImage})),r.a.createElement(h.a,{xs:10},r.a.createElement("div",{style:k.cardText},r.a.createElement("p",null,"PhD in Bioinformatics & Systems Biology"),r.a.createElement("p",null,"Advisor: ",r.a.createElement("a",{href:"https://knightlab.ucsd.edu"},"Rob Knight")),r.a.createElement("p",null,"University of California, San Diego, CA"),r.a.createElement("p",null,"2018 - Present "))))),r.a.createElement(E.a,{className:"shadow p-3 mt-3"},r.a.createElement(d.a,null,r.a.createElement(h.a,{xs:2,style:k.imageBlock},r.a.createElement(g.a,{src:y.a,style:k.cardImage})),r.a.createElement(h.a,{xs:10},r.a.createElement("div",{style:k.cardText},r.a.createElement("p",null,"BA in Mathematics"),r.a.createElement("p",null,"Colgate University, Hamilton, NY"),r.a.createElement("p",null,"2014 - 2018 "))))))}}]),a}(r.a.Component),C=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement(x,null))}}]),a}(r.a.Component),w=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(C,null)}}]),a}(r.a.Component),B=[{authors:r.a.createElement(r.a.Fragment,null,"Cameron Martino, Liat Shenhav, Clarisse A Marotz, ",r.a.createElement("b",null,"George Armstrong"),", Daniel McDonald, Yoshiki V\xe1zquez-Baeza, James T Morton, Lingjing Jiang, Maria Gloria Dominguez-Bello, Austin D Swafford, Eran Halperin, Rob Knight"),title:"Context-aware dimensionality reduction deconvolutes gut microbial community dynamics",link:"https://doi.org/10.1038/s41587-020-0660-7",journal:"Nature Biotechnology",date:2020}],A=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.citation,t=e.authors,a=e.title,n=e.link,l=e.journal,c=e.date;return r.a.createElement(E.a,{className:"shadow p-3 mt-3"},r.a.createElement("div",null,r.a.createElement("b",null,a),r.a.createElement("p",null,t,". ",r.a.createElement("em",null,l)," (",c,") | ",r.a.createElement("a",{href:n},"Link"))))}}]),a}(r.a.Component),M={publicationsList:{paddingTop:"30px"}},D=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:M.publicationsList},r.a.createElement("h3",null,"Publications"),B.map((function(e,t){return r.a.createElement(A,{citation:e,key:t})})))}}]),a}(r.a.Component),N=a(73),L=a(74),T=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(N.a,{bg:"dark",variant:"dark"},r.a.createElement(N.a.Brand,{href:"/"},"George Armstrong"),r.a.createElement(N.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(N.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(L.a,{className:"mr-auto"},r.a.createElement(L.a.Link,{href:"/"},"Home"),r.a.createElement(L.a.Link,{href:"/publications"},"Publications"))))}}]),a}(r.a.Component),z=a(41),I=a(42),P=a.n(I),S=a(43),H=a.n(S),G=a(44),J=a.n(G),W=[{link:"https://github.com/gwarmstrong",icon:H.a},{link:"https://linkedin.com/in/gwarmstrong",icon:J.a}],U=(a(62),{headBubble:{display:"block",margin:"auto",maxWidth:"100%",maxHeight:"100%"},bubbleBlock:{padding:"10px",paddingTop:"30px",height:"250px"}}),K=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{id:"sidebar"},r.a.createElement("section",{id:"head-bubble",style:U.bubbleBlock},r.a.createElement(g.a,{src:P.a,style:U.headBubble,roundedCircle:!0})),r.a.createElement("section",{id:"intro",className:"intro"},r.a.createElement("header",null,r.a.createElement("h4",null,"George Armstrong"))),r.a.createElement("section",{id:"footer",className:"icons"},W.map((function(e,t){return r.a.createElement("a",{href:e.link,key:t},r.a.createElement(z.a,{icon:e.icon,size:"lg"}))}))))}}]),a}(r.a.Component),R=(a(63),a(64),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(s.a,{basename:""},r.a.createElement("div",null,r.a.createElement(T,null),r.a.createElement(b.a,{fluid:!0},r.a.createElement(d.a,null,r.a.createElement(h.a,{sm:3},r.a.createElement(K,null)),r.a.createElement(h.a,{sm:8},r.a.createElement(p.c,null,r.a.createElement(p.a,{component:w,exact:!0,path:"/"}),r.a.createElement(p.a,{component:D,exact:!0,path:"/publications"})))))))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.b31b22b1.chunk.js.map