(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={item:"ContactList_item__33MmE"}},14:function(e,t,n){e.exports={iconButton:"IconButton_iconButton__1is7l"}},15:function(e,t,n){e.exports={label:"Filter_label__-2myk"}},16:function(e,t,n){e.exports={container:"Container_container__1D7b6"}},24:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),c=n.n(a),o=n(2),l=n.n(o),i=(n(24),n(17)),u=n(3),s=n(6),b=(n(25),n(13)),f=n.n(b),j=n(5),h=n.n(j),d=n(11),O=n(18),m=n(14),v=n.n(m);function p(e){var t=e.children,n=e.onClick,a=Object(O.a)(e,["children","onClick"]);return Object(r.jsx)("button",Object(d.a)(Object(d.a)({type:"button",className:v.a.iconButton,onClick:n},a),{},{children:t}))}function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}p.defaultProps={onClick:function(){return null},children:null};var w=a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),y=a.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"});function C(e,t){var n=e.title,r=e.titleId,c=g(e,["title","titleId"]);return a.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,w,y)}var _=a.forwardRef(C);n.p;function k(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(u.a)(n,2),o=c[0],l=c[1],i=Object(a.useState)(""),s=Object(u.a)(i,2),b=s[0],f=s[1],j=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":l(r);break;case"number":f(r);break;default:return}};return Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(o,b),l(""),f("")},children:[Object(r.jsxs)("label",{className:h.a.label,children:["Name",Object(r.jsx)("input",{className:h.a.input,type:"text",name:"name",placeholder:"John Jonson",value:o,onChange:j}),Object(r.jsxs)("label",{className:h.a.label,children:["Number",Object(r.jsx)("input",{className:h.a.input,type:"tel",name:"number",placeholder:"123-45-67",value:b,onChange:j})]})]}),Object(r.jsx)(p,{type:"submit","aria-label":"Add contact",children:Object(r.jsx)(_,{width:"20",height:"20",fill:"#fff"})})]})}var S=n(10),E=n.n(S);function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var M=a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),P=a.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"});function B(e,t){var n=e.title,r=e.titleId,c=I(e,["title","titleId"]);return a.createElement("svg",N({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,M,P)}var D=a.forwardRef(B);n.p;function J(e){var t=e.name,n=e.number,a=e.onDeleteContact;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("p",{children:[t,":",n]}),Object(r.jsx)(p,{onClick:a,"aria-label":"Delete contact",children:Object(r.jsx)(D,{width:"20",height:"20",fill:"#fff"})})]})}function z(e){var t=e.contacts,n=e.onDeleteContact;return Object(r.jsx)("ul",{className:E.a.list,children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(r.jsx)("li",{className:E.a.item,children:Object(r.jsx)(J,{name:a,number:c,onDeleteContact:function(){return n(t)}})},t)}))})}var H=n(15),L=n.n(H);function F(e){var t=e.value,n=e.onChange;return Object(r.jsxs)("label",{className:L.a.label,children:["Find contacts by name",Object(r.jsx)("input",{type:"text",value:t,onChange:n})]})}function V(e){var t=e.title;return Object(r.jsx)("h2",{children:t})}var A=n(16),R=n.n(A);function G(e){var t=e.children;return Object(r.jsx)("div",{className:R.a.container,children:t})}function T(){var e=Object(a.useState)((function(){var e;return null!==(e=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==e?e:[]})),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),l=Object(u.a)(o,2),b=l[0],j=l[1];Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var h=function(){var e=b.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}();return Object(r.jsxs)(G,{children:[Object(r.jsx)(s.a,{autoClose:3e3}),Object(r.jsx)(V,{title:"Phonebook"}),Object(r.jsx)(k,{onSubmit:function(e,t){var r={id:f.a.generate(),name:e,number:t};""!==e&&""!==t?n.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}))?s.b.info("Name ".concat(e," is already exsist")):/\d{3}[-]\d{2}[-]\d{2}/g.test(t)?c((function(e){return[r].concat(Object(i.a)(e))})):s.b.error("Enter the correct  phone number"):s.b.info("Please fill all fields")}}),Object(r.jsx)(V,{title:"Contacts"}),n.length>1&&Object(r.jsx)(F,{value:b,onChange:function(e){j(e.currentTarget.value)}}),n.length>0?Object(r.jsx)(z,{contacts:h,onDeleteContact:function(e){c(n.filter((function(t){return t.id!==e})))}}):Object(r.jsx)("p",{children:"Add your first contact"})]})}l.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(T,{})}),document.getElementById("root"))},5:function(e,t,n){e.exports={label:"Form_label__fYMj9",button:"Form_button__uGu4M"}}},[[36,1,2]]]);
//# sourceMappingURL=main.1bcef49c.chunk.js.map