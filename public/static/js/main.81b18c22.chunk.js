(this["webpackJsonpcsapat.space"]=this["webpackJsonpcsapat.space"]||[]).push([[0],{155:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(44),c=t.n(o),r=(t(53),t(16)),s=(t(54),t(25)),m=t.n(s),d=t(15),i=t.n(d),u=t(2),p=t(9),E=t(45),b=t.n(E),g=function(){var e=Object(n.useState)([]),a=Object(r.a)(e,2),t=a[0],o=a[1],c=Object(p.f)(),s=Object(n.useState)(""),d=Object(r.a)(s,2),E=d[0],g=d[1];return Object(n.useEffect)((function(){m.a.get("http://localhost:1337/posts?_sort=date:DESC").then((function(e){o(e.data),window.AOS.init({once:!0,disable:!1})}))}),[]),Object(n.useEffect)((function(){window.scrollTo(0,0),"/project"===c.pathname&&fetch(b.a).then((function(e){return e.text()})).then((function(e){return g(e)})),window.AOS.refreshHard()}),[c]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"/"===c.pathname?"bg":"bg small"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"logo-area"},l.a.createElement(u.b,{to:"/"},l.a.createElement("img",{alt:"CSapat","data-aos":"fade-up","data-aos-offset":"-200","data-aos-anchor-placement":"top-center",className:"logo",src:"/img/csapat-glider-horizontal-white.svg"})),l.a.createElement("h2",{"data-aos":"fade-up","data-aos-delay":"100"},"ESA CanSat 2020")))),l.a.createElement(p.c,null,l.a.createElement(p.a,{path:"/blog",exact:!0},l.a.createElement(f,{posts:t})),l.a.createElement(p.a,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"content"},l.a.createElement(p.a,{path:"/blog"},l.a.createElement(h,null)),l.a.createElement(p.a,{path:"/",exact:!0},l.a.createElement("h2",{"data-aos":"fade-up","data-aos-delay":"300"},"The Project"),l.a.createElement("p",{"data-aos":"fade-up","data-aos-delay":"400",className:"center"},"Our team wants to demonstrate a proof-of-concept CanSat by measuring planetary weather conditions, magnetic field and other planetary phenomena. The CanSat will then conduct a directed landing using GPS data and an integrated paraglider.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(u.b,{to:"/project"},l.a.createElement("div",{"data-aos":"fade-up","data-aos-delay":"500",className:"btn btn-outline-primary button"},"Learn more about the project"))),l.a.createElement("hr",{"data-aos":"fade-up"}),l.a.createElement(u.b,{to:"/blog"},l.a.createElement("h2",{"data-aos":"fade-up"},"Blog")),l.a.createElement("p",{"data-aos":"fade-up","data-aos-delay":"100"}),l.a.createElement("div",{className:"blog row"},t.map((function(e,a){return l.a.createElement("div",{className:"col-md-4 col-12 order-md-1 order-"+a,"data-aos":"fade-up","data-aos-delay":200+100*a},l.a.createElement(u.b,{to:"/blog/"+e.slug,style:{color:"#212529",textDecoration:"none"}},l.a.createElement("div",{className:"blog-post"},l.a.createElement("div",{className:"title"},e.title))))})),t.map((function(e,a){return l.a.createElement("div",{className:"col-md-4 col-12 order-md-2 order-"+a,"data-aos":"fade-up","data-aos-delay":200+100*a},l.a.createElement(u.b,{to:"/blog/"+e.slug,style:{color:"#212529",textDecoration:"none"}},l.a.createElement("div",{className:"blog-post"},l.a.createElement("div",{className:"text"},l.a.createElement(i.a,{source:e.description})))))})),t.map((function(e,a){return l.a.createElement("div",{className:"col-md-4 col-12 order-md-3 order-"+a,"data-aos":"fade-up","data-aos-delay":200+100*a},l.a.createElement(u.b,{to:"/blog/"+e.slug,style:{color:"#212529",textDecoration:"none"}},l.a.createElement("div",{className:"blog-post"},l.a.createElement("small",null,new Date(e.date).toLocaleDateString()))),l.a.createElement("hr",null))}))),l.a.createElement(u.b,{to:"/blog"},l.a.createElement("div",{"data-aos":"fade-up","data-aos-delay":"500",className:"btn btn-outline-primary button"},"Browse ",t.length-3," more posts")),l.a.createElement("hr",{"data-aos":"fade-up"}),l.a.createElement("h2",{"data-aos":"fade-up"},"The Team"),l.a.createElement("p",{"data-aos":"fade-up","data-aos-delay":"100"},"Our team consists of four enthusiastic physics class students of Berzsenyi D\xe1niel Secondary School (located in Budapest, Hungary)."),l.a.createElement("div",{className:"team row"},l.a.createElement("div",{className:"person col-md-3 col-6","data-aos":"fade-up","data-aos-delay":"200"},l.a.createElement("img",{src:"img/balazs_artur.jpg",alt:"Bal\xe1zs Art\xfar"}),l.a.createElement("span",null,"Bal\xe1zs Art\xfar")),l.a.createElement("div",{className:"person col-md-3 col-6","data-aos":"fade-up","data-aos-delay":"250"},l.a.createElement("img",{src:"img/farkas_akos.jpg",alt:"Bal\xe1zs Art\xfar"}),l.a.createElement("span",null,"Farkas \xc1kos")),l.a.createElement("div",{className:"person col-md-3 col-6","data-aos":"fade-up","data-aos-delay":"300"},l.a.createElement("img",{src:"img/sisak_botond.jpg",alt:"Bal\xe1zs Art\xfar"}),l.a.createElement("span",null,"Sis\xe1k Botond")),l.a.createElement("div",{className:"person col-md-3 col-6","data-aos":"fade-up","data-aos-delay":"350"},l.a.createElement("img",{src:"img/turi_zoltan.jpeg",alt:"Bal\xe1zs Art\xfar"}),l.a.createElement("span",null,"T\xfari Zolt\xe1n")))),l.a.createElement(p.a,{path:"/project"},l.a.createElement("h2",{className:"title"},"The Project"),l.a.createElement(i.a,{source:E}),l.a.createElement(u.b,{to:"/",style:{marginTop:"50px"}},l.a.createElement("div",{className:"btn btn-outline-primary button"},"Home"))))))))},f=function(e){return l.a.createElement("div",{className:"container"},e.posts.map((function(e){return l.a.createElement("div",{className:"content blog-content"},l.a.createElement(u.b,{to:"/blog/"+e.slug},l.a.createElement("h2",{className:"title"},e.title)),l.a.createElement("p",null,new Date(e.date).toLocaleDateString()),l.a.createElement("p",null,e.description),l.a.createElement(u.b,{to:"/blog/"+e.slug},l.a.createElement("div",{className:"btn btn-outline-primary button"},"Read post")))})),l.a.createElement("div",{className:"center",style:{marginBottom:"70px"}},l.a.createElement(u.b,{to:"/"},l.a.createElement("div",{className:"btn btn-outline-primary button"},"Home"))))},h=function(e){var a=Object(p.f)(),t=Object(n.useState)({}),o=Object(r.a)(t,2),c=o[0],s=o[1];return Object(n.useEffect)((function(){m.a.get("http://localhost:1337/posts?slug="+a.pathname.replace("/blog/","")).then((function(e){s(e.data[0])}))}),[a]),l.a.createElement("div",{className:"blog-post-container"},l.a.createElement("h2",{className:"title"},c.title),l.a.createElement("p",null,new Date(c.date).toLocaleDateString()),l.a.createElement("p",null,c.description),l.a.createElement(i.a,{source:c.text}),l.a.createElement("br",null),l.a.createElement(u.b,{to:"/blog"},l.a.createElement("div",{className:"btn btn-outline-primary button"},"Browse all posts")))},v=function(){return l.a.createElement(u.a,null,l.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},45:function(e,a,t){e.exports=t.p+"static/media/Project.c28bf32a.md"},48:function(e,a,t){e.exports=t(155)},53:function(e,a,t){},54:function(e,a,t){}},[[48,1,2]]]);
//# sourceMappingURL=main.81b18c22.chunk.js.map