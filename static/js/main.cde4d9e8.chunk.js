(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"category_id":0,"id":1,"image":" https://i.ibb.co/WfnTV02/Camisapiratacafe.png","itemName":"Blusa Pirata Cafe","Price":35000},{"category_id":3,"id":2,"image":" https://i.ibb.co/0C0ChFV/Falda-Lila.png","itemName":"Falda Lila","Price":60000},{"category_id":1,"id":3,"image":"https://i.ibb.co/bHXH2qQ/Pantalon-Abertura.png","itemName":"Pantalon azul ","Price":55000},{"category_id":1,"id":4,"image":"https://i.ibb.co/vzcMr37/Pantalon-Flores.png","itemName":"Pantalon de Flores","Price":55000},{"category_id":3,"id":5,"image":"https://i.ibb.co/N2jBcP0/vestido-Largo-Flores.png","itemName":"Vestido de Flore","Price":75000},{"category_id":3,"id":6,"image":"https://i.ibb.co/QcYmdWk/Vestido-Lila.png","itemName":"Vestido de Flore","Price":75000},{"category_id":0,"id":7,"image":"https://i.ibb.co/Z17pSD2/Blusa-Blanca.png","itemName":"Blusa Blanca","Price":35000},{"category_id":0,"id":8,"image":"https://i.ibb.co/vkbjyvt/Blusa-Japonesa-Lila.png","itemName":"Blusa Lila Estilo Kimono","Price":35000},{"category_id":0,"id":9,"image":"https://i.ibb.co/HGn4Y96/blusa-Pirata-Rosa.png","itemName":"Blusa Rosa Estilo Pirata","Price":35000},{"category_id":0,"id":10,"image":"https://i.ibb.co/tcXQkcc/Chaqueta-Azul.png","itemName":"Chaqueta Larga Azul","Price":75000}]')},11:function(e,t,c){e.exports={iconsWrap:"Menu_iconsWrap__1jIs9",icons:"Menu_icons__ceXd_",menu:"Menu_menu__vC7Ch",boxExterior:"Menu_boxExterior__3vRBO",menuComponent:"Menu_menuComponent__1_B41",menuComponentLogo:"Menu_menuComponentLogo__3rPww",top:"Menu_top__2hY8U"}},13:function(e,t,c){e.exports={topBox:"Footer_topBox__1E5z9",bootBox:"Footer_bootBox__5Gmi2",textItalic:"Footer_textItalic__3wzP9",text:"Footer_text__jr_xe",textCR:"Footer_textCR__2fFcr"}},14:function(e,t,c){},22:function(e,t,c){e.exports={BtnsAmount:"CardBag_BtnsAmount__35Y9p"}},23:function(e,t,c){e.exports={wraper:"Cards_wraper__2aj0_"}},30:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(21),s=c.n(r),i=(c(30),c(16)),o=c(2),l=c(10),u=c(4),j=c(5),d=c.n(j),b=c(0);var m=function(e){var t=e.props,c=l.map((function(e){return localStorage.getItem(e.id.toString())})).filter((function(e){return null!=JSON.parse(e)})).map((function(e){return JSON.parse(e)}));console.log(c,"memory");var r=c.filter((function(e){return e.id===t[0].id}));console.log(r[0],"memoryActive");var s=n.a.useState(r[0].numberItems),i=Object(u.a)(s,2),o=i[0],j=i[1],m=n.a.useState(r[0].size),x=Object(u.a)(m,2),O=x[0],h=x[1],_=l.filter((function(e){return e.id===t[0].id}));console.log(_[0],"itemBag");var p=_[0].itemName,g=_[0].image,C=_[0].Price,B={color:"#264B66",BackColor:"#D8CFC3"},f={color:"#D8CFC3",BackColor:"#264B66"},N=n.a.useState(B),S=Object(u.a)(N,2),v=S[0],k=S[1],P=n.a.useState(B),A=Object(u.a)(P,2),z=A[0],y=A[1],w=n.a.useState(B),L=Object(u.a)(w,2),E=L[0],T=L[1],F=n.a.useState(B),I=Object(u.a)(F,2),M=I[0],J=I[1];return Object(a.useEffect)((function(){switch(O){case"s":k(f),y(B),T(B),J(B);break;case"m":k(B),y(f),T(B),J(B);break;case"l":k(B),y(B),T(f),J(B);break;case"xl":k(B),y(B),T(B),J(f);break;default:k(B),y(B),T(B),J(B)}}),[O]),Object(a.useEffect)((function(){var e=_[0].id.toString(),t=o*C,c={numberItems:o,size:O,id:_[0].id,Name:p,price:C,subtotal:t};localStorage.setItem(e,JSON.stringify(c))}),[O],[o]),Object(b.jsxs)("div",{className:d.a.wrap,children:[Object(b.jsx)("div",{className:d.a.wrapImg,children:Object(b.jsx)("li",{className:d.a.imageClothing,children:Object(b.jsx)("img",{src:g,alt:"img"})})}),Object(b.jsxs)("div",{className:d.a.wrapBtn,children:[Object(b.jsxs)("ul",{className:d.a.list,children:[Object(b.jsx)("li",{className:d.a.cardTextCursiv,children:p}),Object(b.jsxs)("li",{className:d.a.cardText,children:["$",C]})]}),Object(b.jsxs)("ul",{className:d.a.BtnsSizes,children:[Object(b.jsx)("li",{children:Object(b.jsx)("button",{className:d.a.BtnSize,style:{color:v.color,backgroundColor:v.BackColor},onClick:function(){return h("s")},children:"S"})}),Object(b.jsx)("li",{children:Object(b.jsx)("button",{className:d.a.BtnSize,style:{color:z.color,backgroundColor:z.BackColor},onClick:function(){return h("m")},children:"M"})}),Object(b.jsx)("li",{children:Object(b.jsx)("button",{className:d.a.BtnSize,style:{color:E.color,backgroundColor:E.BackColor},onClick:function(){return h("l")},children:"L"})}),Object(b.jsx)("li",{children:Object(b.jsx)("button",{className:d.a.BtnSize,style:{color:M.color,backgroundColor:M.BackColor},onClick:function(){return h("xl")},children:"XL"})})]}),Object(b.jsxs)("ul",{className:d.a.BtnsAmount,children:[Object(b.jsx)("li",{children:Object(b.jsx)("button",{className:d.a.BtnPlus,onClick:function(){return j(0===o?o:o-1)},children:"-"})}),Object(b.jsx)("li",{className:d.a.Amount,children:o}),Object(b.jsx)("li",{children:Object(b.jsx)("button",{className:d.a.BtnPlus,onClick:function(){return j(o+1)},children:"+"})})]})]})]})},x=c(22),O=c.n(x);var h=function(){var e=l.map((function(e){return localStorage.getItem(e.id.toString())})).filter((function(e){return null!=JSON.parse(e)})).map((function(e){return JSON.parse(e)}));console.log(e,"memory");var t=e.map((function(e){return l.filter((function(t){return t.id==e.id}))}));console.log(t,"result");var c=e.map((function(e){return e.subtotal}));console.log(c,"subt");var a=0==c?0:c.reduce((function(e,t){return e+t})),n=JSON.stringify(e)+"Su total es:"+a.toString();return console.log(a,"total"),Object(b.jsxs)("div",{children:[t.map((function(e){return Object(b.jsx)(m,{props:e},e.id)})),Object(b.jsx)("button",{className:O.a.BtnsAmount,onClick:function(){return console.log("WsMessege"),void localStorage.clear()},children:Object(b.jsx)("a",{href:"https://wa.me/573115681660?text=".concat(n),children:"Pedir ahora"})})]})},_=c(13),p=c.n(_);var g=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:Object(b.jsxs)("ul",{className:p.a.topBox,children:[Object(b.jsx)("li",{className:p.a.textItalic,children:"CARACTER ARTESANAL"}),Object(b.jsx)("li",{className:p.a.text,children:"EL BUEN DISE\xd1O MEJORA CON EL TIEMPO"})]})}),Object(b.jsx)("div",{children:Object(b.jsxs)("ul",{className:p.a.bootBox,children:[Object(b.jsx)("li",{className:p.a.textCR,children:"Copyright 2021 Punto y Coma.Todos los derechos reservados"}),Object(b.jsx)("li",{className:p.a.textCR,children:"Desarrollado por Javier Sanchez"})]})})]})},C=c(11),B=c.n(C),f=c(23),N=c.n(f),S=c(6),v=c.n(S);var k=function(e){var t=e.props,c={color:"#264B66",BackColor:"#D8CFC3"},r={color:"#D8CFC3",BackColor:"#264B66"},s=n.a.useState(0),i=Object(u.a)(s,2),o=i[0],l=i[1],j=n.a.useState("default"),d=Object(u.a)(j,2),m=d[0],x=d[1],O=n.a.useState("default"),h=Object(u.a)(O,2),_=h[0],p=h[1],g=n.a.useState(c),C=Object(u.a)(g,2),B=C[0],f=C[1],N=n.a.useState(c),S=Object(u.a)(N,2),k=S[0],P=S[1],A=n.a.useState(c),z=Object(u.a)(A,2),y=z[0],w=z[1],L=n.a.useState(c),E=Object(u.a)(L,2),T=E[0],F=E[1];return Object(a.useEffect)((function(){switch(_){case"s":f(r),P(c),w(c),F(c);break;case"m":f(c),P(r),w(c),F(c);break;case"l":f(c),P(c),w(r),F(c);break;case"xl":f(c),P(c),w(c),F(r);break;default:f(c),P(c),w(c),F(c)}}),[_]),Object(b.jsx)("div",{className:v.a.wrap,children:Object(b.jsxs)("ul",{className:v.a.list,children:[Object(b.jsx)("li",{className:v.a.imageClothing,children:Object(b.jsx)("img",{src:t.image,alt:"imagen"})}),Object(b.jsx)("li",{className:v.a.cardTextCursiv,children:t.itemName}),Object(b.jsxs)("li",{className:v.a.cardText,children:["$",t.Price]}),Object(b.jsx)("li",{children:Object(b.jsxs)("ul",{className:v.a.BtnsSizes,children:[Object(b.jsx)("li",{children:Object(b.jsx)("button",{className:v.a.BtnSize,style:{color:B.color,backgroundColor:B.BackColor},onClick:function(){return p("s")},children:"S"})}),Object(b.jsx)("li",{children:Object(b.jsx)("button",{className:v.a.BtnSize,style:{color:k.color,backgroundColor:k.BackColor},onClick:function(){return p("m")},children:"M"})}),Object(b.jsx)("li",{children:Object(b.jsx)("button",{className:v.a.BtnSize,style:{color:y.color,backgroundColor:y.BackColor},onClick:function(){return p("l")},children:"L"})}),Object(b.jsx)("li",{children:Object(b.jsx)("button",{className:v.a.BtnSize,style:{color:T.color,backgroundColor:T.BackColor},onClick:function(){return p("xl")},children:"XL"})})]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("ul",{className:v.a.BtnsAmount,children:[Object(b.jsx)("li",{children:Object(b.jsx)("button",{className:v.a.BtnPlus,onClick:function(){return l(0===o?o:o-1)},children:"-"})}),Object(b.jsx)("li",{className:v.a.Amount,children:o}),Object(b.jsx)("li",{children:Object(b.jsx)("button",{className:v.a.BtnPlus,onClick:function(){return l(o+1)},children:"+"})})]})}),Object(b.jsx)("li",{children:Object(b.jsx)("button",{className:v.a.BtnsAmount,onClick:function(){return function(e){x(e);var t=e.toString(),c={numberItems:o,size:_,id:e,status:m};localStorage.setItem(t,JSON.stringify(c)),console.log("siSirvo",e)}(t.id)},children:"Agregar al carro"})})]})})};var P=function(e,t,c){var a="default"===e.props?l:l.filter((function(t){return t.category_id==e.props}));return Object(b.jsx)("div",{className:N.a.wraper,children:a.map((function(e,t){return Object(b.jsx)(k,{props:e},t)}))})};var A=function(e){var t=n.a.useState("default"),c=Object(u.a)(t,2),a=c[0],r=c[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:B.a.top,children:Object(b.jsx)("ul",{children:Object(b.jsx)("li",{children:Object(b.jsx)("button",{className:B.a.menuComponentLogo,onClick:function(){return r("default")},children:"Logo"})})})}),Object(b.jsx)("div",{className:B.a.boxExterior,children:Object(b.jsxs)("ul",{className:B.a.menu,children:[Object(b.jsxs)("li",{children:[Object(b.jsx)("button",{className:B.a.menuComponent,onClick:function(){return r("0")},children:"Blusa"})," "]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("button",{className:B.a.menuComponent,onClick:function(){return r("1")},children:"Pantalones"})," "]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("button",{className:B.a.menuComponent,onClick:function(){return r("2")},children:"Chaquetas"})," "]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("button",{className:B.a.menuComponent,onClick:function(){return r("3")},children:"Vestidos"})," "]})]})}),Object(b.jsx)(P,{props:a})]})},z=c(14),y=c.n(z);var w=function(){function e(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(A,{}),Object(b.jsx)(g,{})]})}function t(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(h,{}),Object(b.jsx)(g,{})]})}function c(){return Object(b.jsx)("h2",{children:"Users"})}return Object(b.jsx)(i.a,{basename:"/PuntoyComa",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("nav",{class:y.a.menu,children:Object(b.jsxs)("ul",{className:y.a.menu,children:[Object(b.jsx)("li",{className:y.a.menuComponent,children:Object(b.jsx)(i.b,{to:"/",children:"Tienda"})}),Object(b.jsx)("li",{className:y.a.menuComponent,children:Object(b.jsx)(i.b,{to:"/about",children:"Carrito"})}),Object(b.jsx)("li",{className:y.a.menuComponent,children:Object(b.jsx)(i.b,{to:"/users",children:"Users"})})]})}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/about",children:Object(b.jsx)(t,{})}),Object(b.jsx)(o.a,{path:"/users",children:Object(b.jsx)(c,{})}),Object(b.jsx)(o.a,{path:"/",children:Object(b.jsx)(e,{})})]})]})})};s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root"))},5:function(e,t,c){e.exports={wrap:"Bag_wrap__234Uq",wrapImg:"Bag_wrapImg__27C6V",wrapBtn:"Bag_wrapBtn__1BEYj",BtnsSizes:"Bag_BtnsSizes__3PxIX",BtnsAmount:"Bag_BtnsAmount__1g-u1",Amount:"Bag_Amount__1MkkG",BtnSize:"Bag_BtnSize__2jwYO",BtnSizeActive:"Bag_BtnSizeActive__3Bexz",list:"Bag_list__3Z0kA",imageClothing:"Bag_imageClothing__o5alC",cardText:"Bag_cardText__2ZUtr",cardTextCursiv:"Bag_cardTextCursiv__2w2Pm",BtnPlus:"Bag_BtnPlus__wzjNh"}},6:function(e,t,c){e.exports={wrap:"Card_wrap__1-fn8",BtnsSizes:"Card_BtnsSizes__1T9oK",BtnsAmount:"Card_BtnsAmount__3kv6J",Amount:"Card_Amount__lxLCq",BtnSize:"Card_BtnSize__unYep",BtnSizeActive:"Card_BtnSizeActive__35A-p",list:"Card_list__26vcQ",imageClothing:"Card_imageClothing__Bg2Pv",cardText:"Card_cardText__rEpHL",cardTextCursiv:"Card_cardTextCursiv__-LPO4",BtnPlus:"Card_BtnPlus__2DMCt"}}},[[37,1,2]]]);
//# sourceMappingURL=main.cde4d9e8.chunk.js.map