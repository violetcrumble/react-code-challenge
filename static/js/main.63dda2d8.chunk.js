(this["webpackJsonplanddox-react-code-challenge"]=this["webpackJsonplanddox-react-code-challenge"]||[]).push([[0],{33:function(e,t,a){e.exports=a.p+"static/media/primary_logo.13cf3168.svg"},38:function(e,t,a){e.exports=a(54)},43:function(e,t,a){},47:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),c=a.n(l),i=(a(43),a(8)),o=a.n(i),u=(a(46),a(9)),m=a(6),s=a(36),d=a(22),E=a(18),p=(a(47),a(33)),v=a.n(p),f=a(37),w=a(10),g=a(11),h=a(17),b=a(34),I=a(20),k=a(21);I.b.add(k.a,k.b,k.c,k.d);var C=function(e){var t=function(e){switch(e){case"add":return{icon:"plus"};case"indent":return{icon:"level-up-alt",rotation:90};case"remove":return{icon:"minus-circle"};case"smile":return{icon:"smile"};default:return{}}}(e.icon);return r.a.createElement(b.a,t)},N=a(12),O=a(15),j=function(e){var t=e.addNPRI,a=e.removeNPRI,l=e.npri,c=e.tract,i=e.status,s=e.onCancelClick,d=Object(n.useState)(""),E=Object(w.a)(d,2),p=E[0],v=E[1],f=Object(n.useState)(""),h=Object(w.a)(f,2),b=h[0],I=h[1];return r.a.createElement(n.Fragment,null,r.a.createElement(u.a,{"data-testid":l?"npri-".concat(l.id):"npriRowAdd"},r.a.createElement(m.a,null,r.a.createElement(u.a,null,r.a.createElement(m.a,{xs:3},r.a.createElement(C,{icon:"indent"})),r.a.createElement(m.a,{xs:9},r.a.createElement(N.a.Control,{placeholder:l&&l.owner?l.owner:"npri owner",name:"npri-owner",value:b,onChange:function(e){return I(e.target.value)},className:"npri-owner","data-testid":l&&l.owner?"npri-".concat(l.id,".owner"):""})))),r.a.createElement(m.a,null,"\xa0"),r.a.createElement(m.a,null,r.a.createElement(O.a,null,r.a.createElement(N.a.Control,{placeholder:l&&l.interest?l.interest:"npri interest",name:"npri-interest",value:p,onChange:function(e){return v(e.target.value)},className:"npri-interest","data-testid":l&&l.interest?"npri-".concat(l.id,".interest"):""}),r.a.createElement(O.a.Append,null,r.a.createElement(O.a.Text,null,"%")))),r.a.createElement(m.a,null,"\xa0"),r.a.createElement(m.a,null,"new"===i?" ":r.a.createElement(g.a,{"data-testid":"npri-".concat(l.id,".remove"),onClick:function(){a(c.id,l.id)}},r.a.createElement(C,{icon:"remove"})))),"new"===i?r.a.createElement(u.a,{key:"npri".concat(c.id)},r.a.createElement(m.a,{md:{span:1,offset:9}},r.a.createElement(g.a,{variant:"success",onClick:function(){t(c.id,{id:o()(),owner:b,interest:p}),I(""),v("")}},"Add")),r.a.createElement(m.a,null,r.a.createElement(g.a,{variant:"danger",onClick:s},"Cancel"))):null)},R=function(e){var t=e.tract,a=e.status,l=e.addMI,c=e.removeMI,i=e.addNPRI,s=e.removeNPRI,d=e.onCancelClick,E=Object(n.useState)(""),p=Object(w.a)(E,2),v=p[0],f=p[1],b=Object(n.useState)(""),I=Object(w.a)(b,2),k=I[0],R=I[1],P=Object(n.useState)(""),y=Object(w.a)(P,2),S=y[0],A=y[1],x=Object(n.useState)(!1),L=Object(w.a)(x,2),M=L[0],B=L[1];return r.a.createElement("div",{className:"mineral-interests-wrapper"},r.a.createElement(u.a,{className:"mineral-interest-item","data-testid":t?"mineralInterest-".concat(t.id):"mineralInterestRowAdd"},r.a.createElement(m.a,null,r.a.createElement(N.a.Group,null,r.a.createElement(N.a.Control,{placeholder:t&&t.owner?t.owner:"owner",name:"owner",value:t&&t.owner?t.owner:v,onChange:function(e){return f(e.target.value)},className:"mineral-interest-owner","data-testid":t&&t.id?"mineralInterest-".concat(t.id,".owner"):null}))),r.a.createElement(m.a,null,r.a.createElement(N.a.Group,null,r.a.createElement(O.a,null,r.a.createElement(N.a.Control,{placeholder:t&&t.interest?t.interest:"interest",name:"interest",value:k,onChange:function(e){return R(e.target.value)},className:"mineral-interest-interest","data-testid":t&&t.id?"mineralInterest-".concat(t.id,".interest"):null}),r.a.createElement(O.a.Append,null,r.a.createElement(O.a.Text,null,"%"))))),r.a.createElement(m.a,null,"\xa0"),r.a.createElement(m.a,null,r.a.createElement(N.a.Group,null,r.a.createElement(N.a.Control,{placeholder:t&&t.lease?t.lease:"lease",name:"lease",value:S,onChange:function(e){return A(e.target.value)},className:"mineral-interest-lease","data-testid":t&&t.id?"mineralInterest-".concat(t.id,".lease"):null}))),r.a.createElement(m.a,null,r.a.createElement(m.a,null,"new"===a?" ":r.a.createElement(g.a,{"data-testid":"mineralInterest-".concat(t.id,".remove"),onClick:function(){c(t.id)}},r.a.createElement(C,{icon:"remove"}))))),t&&t.npris&&t.npris.length>0?t.npris.map((function(e){return r.a.createElement(j,{addNPRI:i,removeNPRI:s,npri:e,tract:t,key:e.id})})):null,"new"===a?r.a.createElement(u.a,null,r.a.createElement(m.a,{md:{span:1,offset:9}},r.a.createElement(g.a,{variant:"success",onClick:function(){l(o()(),v,k,S,[]),f(""),R(""),A("")}},"Add")),r.a.createElement(m.a,null,r.a.createElement(g.a,{variant:"danger",onClick:function(){return d()}},"Cancel"))):r.a.createElement(n.Fragment,null,M?r.a.createElement(h.a,null,r.a.createElement(h.a.Header,null,"Add New NPRI"),r.a.createElement(h.a.Body,null,r.a.createElement(j,{status:"new",onCancelClick:function(){return B(!1)},tract:t,addNPRI:i,removeNPRI:s}))):r.a.createElement(g.a,{className:"add-npri-button",onClick:function(){return B(!0)}},"Add NPRI to ",t.owner)))},P=function(e){var t=e.value,a=void 0===t?[]:t,l=e.onChange,c=void 0===l?function(){}:l,i=Object(n.useState)(!1),s=Object(w.a)(i,2),d=s[0],E=s[1],p=Object(n.useState)(o()()),v=Object(w.a)(p,2),b=(v[0],v[1]),I=Object(n.useState)(a),k=Object(w.a)(I,2),C=k[0],N=k[1];Object(n.useEffect)((function(){c(C)}));var O=function(e,t,a,n,r){N([].concat(Object(f.a)(C),[{id:e,owner:t,interest:a,lease:n,npris:r}]))},j=function(e){N(C.filter((function(t){return t.id!==e})))},P=function(e,t){b(o()());var a=C;a.filter((function(t){return t.id===e}))[0].npris.push(t),N.apply(void 0,[a])},y=function(e){b(o()());var t=Object.assign({},C);t=Object.values(t).filter((function(t){return t.id===e}))[0].npris.pop(),N(C)};return r.a.createElement(n.Fragment,null,r.a.createElement(u.a,null,r.a.createElement(m.a,null,"Owner"),r.a.createElement(m.a,null,"Mineral Interest"),r.a.createElement(m.a,null,"NPRI"),r.a.createElement(m.a,null,"Lease"),r.a.createElement(m.a,null,"\xa0")),C.length>0?C.map((function(e){return r.a.createElement(n.Fragment,{key:e.id},r.a.createElement(R,{tract:e,onChange:c,addMI:O,removeMI:j,addNPRI:P,removeNPRI:y}))})):r.a.createElement(u.a,null,r.a.createElement("p",null,"No listings.")),d?r.a.createElement(h.a,null,r.a.createElement(h.a.Header,null,"Add New Mineral Interest"),r.a.createElement(h.a.Body,null,r.a.createElement(R,{status:"new",onChange:c,addMI:O,removeMI:j,addNPRI:P,removeNPRI:y,onCancelClick:function(){return E(!1)}}))):r.a.createElement(g.a,{size:"lg",block:!0,className:"add-mi-button",onClick:function(){return E(!0)}},"Add Mineral Interest"))},y=[{id:o()(),owner:"Luke Skywalker",interest:.5,lease:"Tatooine Lease",npris:[{id:o()(),owner:"Leia Organa",interest:.45},{id:o()(),owner:"Han Solo",interest:.15}]}];var S=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(d.a,{bg:"light",variant:"light"},r.a.createElement(d.a.Brand,null,r.a.createElement("img",{width:"150",src:v.a,alt:"Landdox"})),r.a.createElement(d.a.Toggle,null),r.a.createElement(d.a.Collapse,{className:"justify-content-end"},r.a.createElement(E.a,null,r.a.createElement(E.a.Item,null,r.a.createElement(E.a.Link,{href:"https://stackoverflow.com/users/story/4483968",target:"_blank"},"StackOverflow")),r.a.createElement(E.a.Item,null,r.a.createElement(E.a.Link,{href:"https://github.com/violetcrumble",target:"_blank"},"GitHub")),r.a.createElement(E.a.Item,null,r.a.createElement(E.a.Link,{href:"https://www.linkedin.com/in/bonniemellott/",target:"_blank"},"LinkedIn"))))),r.a.createElement(s.a,null,r.a.createElement(u.a,null,r.a.createElement(m.a,null,r.a.createElement(P,{value:y})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.63dda2d8.chunk.js.map