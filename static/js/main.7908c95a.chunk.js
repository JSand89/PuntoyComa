(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"category_id":0,"id":1,"image":" https://i.ibb.co/WfnTV02/Camisapiratacafe.png","itemName":"Blusa Pirata Cafe","Price":35000},{"category_id":3,"id":2,"image":" https://i.ibb.co/0C0ChFV/Falda-Lila.png","itemName":"Falda Lila","Price":60000},{"category_id":1,"id":3,"image":"https://i.ibb.co/bHXH2qQ/Pantalon-Abertura.png","itemName":"Pantalon azul ","Price":55000},{"category_id":1,"id":4,"image":"https://i.ibb.co/vzcMr37/Pantalon-Flores.png","itemName":"Pantalon de Flores","Price":55000},{"category_id":3,"id":5,"image":"https://i.ibb.co/N2jBcP0/vestido-Largo-Flores.png","itemName":"Vestido de Flore","Price":75000},{"category_id":3,"id":6,"image":"https://i.ibb.co/QcYmdWk/Vestido-Lila.png","itemName":"Vestido de Flore","Price":75000},{"category_id":0,"id":7,"image":"https://i.ibb.co/Z17pSD2/Blusa-Blanca.png","itemName":"Blusa Blanca","Price":35000},{"category_id":0,"id":8,"image":"https://i.ibb.co/vkbjyvt/Blusa-Japonesa-Lila.png","itemName":"Blusa Lila Estilo Kimono","Price":35000},{"category_id":0,"id":9,"image":"https://i.ibb.co/HGn4Y96/blusa-Pirata-Rosa.png","itemName":"Blusa Rosa Estilo Pirata","Price":35000},{"category_id":0,"id":10,"image":"https://i.ibb.co/tcXQkcc/Chaqueta-Azul.png","itemName":"Chaqueta Larga Azul","Price":75000}]')},11:function(e,t,c){e.exports={iconsWrap:"Menu_iconsWrap__1jIs9",icons:"Menu_icons__ceXd_",menu:"Menu_menu__vC7Ch",boxExterior:"Menu_boxExterior__3vRBO",menuComponent:"Menu_menuComponent__1_B41",menuComponentLogo:"Menu_menuComponentLogo__3rPww",top:"Menu_top__2hY8U"}},13:function(e,t,c){e.exports={topBox:"Footer_topBox__1E5z9",bootBox:"Footer_bootBox__5Gmi2",textItalic:"Footer_textItalic__3wzP9",text:"Footer_text__jr_xe",textCR:"Footer_textCR__2fFcr"}},14:function(e,t,c){},22:function(e,t,c){e.exports={BtnsAmount:"CardBag_BtnsAmount__35Y9p"}},23:function(e,t,c){e.exports={wraper:"Cards_wraper__2aj0_"}},30:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(21),r=c.n(s),i=(c(30),c(16)),o=c(2),l=c(10),u=c(4),j=c(5),d=c.n(j),b=c(0);var m=function(e){var t=e.props,c=l.map((function(e){return localStorage.getItem(e.id.toString())})).filter((function(e){return null!=JSON.parse(e)})).map((function(e){return JSON.parse(e)})).filter((function(e){return e.id===t[0].id})),s=n.a.useState(c[0].numberItems),r=Object(u.a)(s,2),i=r[0],o=r[1],j=n.a.useState(c[0].size),m=Object(u.a)(j,2),x=m[0],O=m[1],h=l.filter((function(e){return e.id===t[0].id})),_=h[0].itemName,p=h[0].image,C=h[0].Price,g={color:"#264B66",BackColor:"#D8CFC3"},B={color:"#D8CFC3",BackColor:"#264B66"},f=n.a.useState(g),N=Object(u.a)(f,2),S=N[0],k=N[1],v=n.a.useState(g),P=Object(u.a)(v,2),z=P[0],A=P[1],y=n.a.useState(g),w=Object(u.a)(y,2),L=w[0],E=w[1],T=n.a.useState(g),F=Object(u.a)(T,2),I=F[0],M=F[1];return Object(a.useEffect)((function(){switch(x){case"s":k(B),A(g),E(g),M(g);break;case"m":k(g),A(B),E(g),M(g);break;case"l":k(g),A(g),E(B),M(g);break;case"xl":k(g),A(g),E(g),M(B);break;default:k(g),A(g),E(g),M(g)}}),[x]),Object(a.useEffect)((function(){var e=h[0].id.toString(),t=i*C,c={numberItems:i,size:x,id:h[0].id,Name:_,price:C,subtotal:t};localStorage.setItem(e,JSON.stringify(c))}),[x],[i]),Object(b.jsxs)("div",{className:d.a.wrap,children:[Object(b.jsx)("div",{className:d.a.wrapImg,children:Object(b.jsx)("li",{className:d.a.imageClothing,children:Object(b.jsx)("img",{src:p,alt:"img"})})}),Object(b.jsxs)("div",{className:d.a.wrapBtn,children:[Object(b.jsxs)("ul",{className:d.a.list,children:[Object(b.jsx)("li",{className:d.a.cardTextCursiv,children:_}),Object(b.jsxs)("li",{className:d.a.cardText,children:["$",C]})]}),Object(b.jsxs)("ul",{className:d.a.BtnsSizes,children:[Object(b.jsx)("li",{children:Object(b.jsx)("button",{className:d.a.BtnSize,style:{color:S.color,backgroundColor:S.BackColor},onClick:function(){return O("s")},children:"S"})}),Object(b.jsx)("li",{children:Object(b.jsx)("button",{className:d.a.BtnSize,style:{color:z.color,backgroundColor:z.BackColor},onClick:function(){return O("m")},children:"M"})}),Object(b.jsx)("li",{children:Object(b.jsx)("button",{className:d.a.BtnSize,style:{color:L.color,backgroundColor:L.BackColor},onClick:function(){return O("l")},children:"L"})}),Object(b.jsx)("li",{children:Object(b.jsx)("button",{className:d.a.BtnSize,style:{color:I.color,backgroundColor:I.BackColor},onClick:function(){return O("xl")},children:"XL"})})]}),Object(b.jsxs)("ul",{className:d.a.BtnsAmount,children:[Object(b.jsx)("li",{children:Object(b.jsx)("button",{className:d.a.BtnPlus,onClick:function(){return o(0===i?i:i-1)},children:"-"})}),Object(b.jsx)("li",{className:d.a.Amount,children:i}),Object(b.jsx)("li",{children:Object(b.jsx)("button",{className:d.a.BtnPlus,onClick:function(){return o(i+1)},children:"+"})})]})]})]})},x=c(22),O=c.n(x);var h=function(){var e=l.map((function(e){return localStorage.getItem(e.id.toString())})).filter((function(e){return null!=JSON.parse(e)})).map((function(e){return JSON.parse(e)}));console.log(e,"memory");var t=e.map((function(e){return l.filter((function(t){return t.id==e.id}))}));console.log(t,"result");var c=e.map((function(e){return e.subtotal})).reduce((function(e,t){return e+t})),a=JSON.stringify(e)+"Su total es:"+c.toString();return console.log(c,"total"),Object(b.jsxs)("div",{children:[t.map((function(e){return Object(b.jsx)(m,{props:e},e.id)})),Object(b.jsx)("button",{className:O.a.BtnsAmount,onClick:function(){console.log("WsMessege")},children:Object(b.jsx)("a",{href:"https://wa.me/573115681660?text=".concat(a),children:"Pedir ahora"})})]})},_=c(13),p=c.n(_);var C=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:Object(b.jsxs)("ul",{className:p.a.topBox,children:[Object(b.jsx)("li",{className:p.a.textItalic,children:"CARACTER ARTESANAL"}),Object(b.jsx)("li",{className:p.a.text,children:"EL BUEN DISE\xd1O MEJORA CON EL TIEMPO"})]})}),Object(b.jsx)("div",{children:Object(b.jsxs)("ul",{className:p.a.bootBox,children:[Object(b.jsx)("li",{className:p.a.textCR,children:"Copyright 2021 Punto y Coma.Todos los derechos reservados"}),Object(b.jsx)("li",{className:p.a.textCR,children:"Desarrollado por Javier Sanchez"})]})})]})},g=c(11),B=c.n(g),f=c(23),N=c.n(f),S=c(6),k=c.n(S);var v=function(e){var t=e.props,c={color:"#264B66",BackColor:"#D8CFC3"},s={color:"#D8CFC3",BackColor:"#264B66"},r=n.a.useState(0),i=Object(u.a)(r,2),o=i[0],l=i[1],j=n.a.useState("default"),d=Object(u.a)(j,2),m=d[0],x=d[1],O=n.a.useState("default"),h=Object(u.a)(O,2),_=h[0],p=h[1],C=n.a.useState(c),g=Object(u.a)(C,2),B=g[0],f=g[1],N=n.a.useState(c),S=Object(u.a)(N,2),v=S[0],P=S[1],z=n.a.useState(c),A=Object(u.a)(z,2),y=A[0],w=A[1],L=n.a.useState(c),E=Object(u.a)(L,2),T=E[0],F=E[1];return Object(a.useEffect)((function(){switch(_){case"s":f(s),P(c),w(c),F(c);break;case"m":f(c),P(s),w(c),F(c);break;case"l":f(c),P(c),w(s),F(c);break;case"xl":f(c),P(c),w(c),F(s);break;default:f(c),P(c),w(c),F(c)}}),[_]),Object(b.jsx)("div",{className:k.a.wrap,children:Object(b.jsxs)("ul",{className:k.a.list,children:[Object(b.jsx)("li",{className:k.a.imageClothing,children:Object(b.jsx)("img",{src:t.image,alt:"imagen"})}),Object(b.jsx)("li",{className:k.a.cardTextCursiv,children:t.itemName}),Object(b.jsxs)("li",{className:k.a.cardText,children:["$",t.Price]}),Object(b.jsx)("li",{children:Object(b.jsxs)("ul",{className:k.a.BtnsSizes,children:[Object(b.jsx)("li",{children:Object(b.jsx)("button",{className:k.a.BtnSize,style:{color:B.color,backgroundColor:B.BackColor},onClick:function(){return p("s")},children:"S"})}),Object(b.jsx)("li",{children:Object(b.jsx)("button",{className:k.a.BtnSize,style:{color:v.color,backgroundColor:v.BackColor},onClick:function(){return p("m")},children:"M"})}),Object(b.jsx)("li",{children:Object(b.jsx)("button",{className:k.a.BtnSize,style:{color:y.color,backgroundColor:y.BackColor},onClick:function(){return p("l")},children:"L"})}),Object(b.jsx)("li",{children:Object(b.jsx)("button",{className:k.a.BtnSize,style:{color:T.color,backgroundColor:T.BackColor},onClick:function(){return p("xl")},children:"XL"})})]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("ul",{className:k.a.BtnsAmount,children:[Object(b.jsx)("li",{children:Object(b.jsx)("button",{className:k.a.BtnPlus,onClick:function(){return l(0===o?o:o-1)},children:"-"})}),Object(b.jsx)("li",{className:k.a.Amount,children:o}),Object(b.jsx)("li",{children:Object(b.jsx)("button",{className:k.a.BtnPlus,onClick:function(){return l(o+1)},children:"+"})})]})}),Object(b.jsx)("li",{children:Object(b.jsx)("button",{className:k.a.BtnsAmount,onClick:function(){return function(e){x(e);var t=e.toString(),c={numberItems:o,size:_,id:e,status:m};localStorage.setItem(t,JSON.stringify(c)),console.log("siSirvo",e)}(t.id)},children:"Agregar al carro"})})]})})};var P=function(e,t,c){var a="default"===e.props?l:l.filter((function(t){return t.category_id==e.props}));return Object(b.jsx)("div",{className:N.a.wraper,children:a.map((function(e,t){return Object(b.jsx)(v,{props:e},t)}))})};var z=function(e){var t=n.a.useState("default"),c=Object(u.a)(t,2),a=c[0],s=c[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:B.a.top,children:Object(b.jsx)("ul",{children:Object(b.jsx)("li",{children:Object(b.jsx)("button",{className:B.a.menuComponentLogo,onClick:function(){return s("default")},children:"Logo"})})})}),Object(b.jsx)("div",{className:B.a.boxExterior,children:Object(b.jsxs)("ul",{className:B.a.menu,children:[Object(b.jsxs)("li",{children:[Object(b.jsx)("button",{className:B.a.menuComponent,onClick:function(){return s("0")},children:"Blusa"})," "]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("button",{className:B.a.menuComponent,onClick:function(){return s("1")},children:"Pantalones"})," "]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("button",{className:B.a.menuComponent,onClick:function(){return s("2")},children:"Chaquetas"})," "]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("button",{className:B.a.menuComponent,onClick:function(){return s("3")},children:"Vestidos"})," "]})]})}),Object(b.jsx)(P,{props:a})]})},A=c(14),y=c.n(A);var w=function(){function e(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(z,{}),Object(b.jsx)(C,{})]})}function t(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(h,{}),Object(b.jsx)(C,{})]})}function c(){return Object(b.jsx)("h2",{children:"Users"})}return Object(b.jsx)(i.a,{basename:"/PuntoyComa",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("nav",{class:y.a.menu,children:Object(b.jsxs)("ul",{className:y.a.menu,children:[Object(b.jsx)("li",{className:y.a.menuComponent,children:Object(b.jsx)(i.b,{to:"/",children:"Tienda"})}),Object(b.jsx)("li",{className:y.a.menuComponent,children:Object(b.jsx)(i.b,{to:"/about",children:"Carrito"})}),Object(b.jsx)("li",{className:y.a.menuComponent,children:Object(b.jsx)(i.b,{to:"/users",children:"Users"})})]})}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/about",children:Object(b.jsx)(t,{})}),Object(b.jsx)(o.a,{path:"/users",children:Object(b.jsx)(c,{})}),Object(b.jsx)(o.a,{path:"/",children:Object(b.jsx)(e,{})})]})]})})};r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root"))},5:function(e,t,c){e.exports={wrap:"Bag_wrap__234Uq",wrapImg:"Bag_wrapImg__27C6V",wrapBtn:"Bag_wrapBtn__1BEYj",BtnsSizes:"Bag_BtnsSizes__3PxIX",BtnsAmount:"Bag_BtnsAmount__1g-u1",Amount:"Bag_Amount__1MkkG",BtnSize:"Bag_BtnSize__2jwYO",BtnSizeActive:"Bag_BtnSizeActive__3Bexz",list:"Bag_list__3Z0kA",imageClothing:"Bag_imageClothing__o5alC",cardText:"Bag_cardText__2ZUtr",cardTextCursiv:"Bag_cardTextCursiv__2w2Pm",BtnPlus:"Bag_BtnPlus__wzjNh"}},6:function(e,t,c){e.exports={wrap:"Card_wrap__1-fn8",BtnsSizes:"Card_BtnsSizes__1T9oK",BtnsAmount:"Card_BtnsAmount__3kv6J",Amount:"Card_Amount__lxLCq",BtnSize:"Card_BtnSize__unYep",BtnSizeActive:"Card_BtnSizeActive__35A-p",list:"Card_list__26vcQ",imageClothing:"Card_imageClothing__Bg2Pv",cardText:"Card_cardText__rEpHL",cardTextCursiv:"Card_cardTextCursiv__-LPO4",BtnPlus:"Card_BtnPlus__2DMCt"}}},[[37,1,2]]]);
//# sourceMappingURL=main.7908c95a.chunk.js.map