"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[454],{4574:function(n,e,t){t.d(e,{A:function(){return s},h:function(){return c}});var r,a,i=t(168),o=t(6444),s=o.ZP.button(r||(r=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  min-width: 100px;\n  min-height: 30px;\n  margin: ",";\n  padding: 8px 10px;\n\n  font-size: ",";\n  font-weight: 700;\n  text-transform: uppercase;\n  color: rgb(42 42 42);\n\n  background-color: ",";\n  border-radius: 5px;\n  border: none;\n  box-shadow: 5px 5px 5px -2px rgba(75, 92, 165, 0.3);\n  cursor: pointer;\n\n  &:hover,\n  &:focus,\n  &:active {\n    color: rgb(255 255 255);\n    background-color: rgba(9, 9, 121, 0.7);\n    border: none;\n    box-shadow: 1px -1px 10px -2px rgba(75, 92, 165, 0.3) inset;\n  }\n"])),(function(n){return n.margin||"0"}),(function(n){return n.size||"10px"}),(function(n){return n.bgc||"rgba(160, 141, 196, 0.5)"})),c=o.ZP.button(a||(a=(0,i.Z)(["\n  display: inline-flex;\n  align-content: center;\n  justify-content: center;\n  align-items: center;\n\n  margin: ",";\n  padding: 0;\n\n  color: ",";\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus,\n  &:active {\n    color: rgb(255 0 0);\n  }\n\n  & > svg {\n    fill: currentColor;\n  }\n"])),(function(n){return n.margin||"0"}),(function(n){return n.color||"rgb(42 42 42)"}))},7830:function(n,e,t){t.d(e,{II:function(){return h},__:function(){return p},gN:function(){return x},k4:function(){return m},l0:function(){return u}});var r,a,i,o,s,c=t(168),d=t(6444),l=t(4574),u=d.ZP.form(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n\n  background-color: transparent;\n"]))),x=d.ZP.label(a||(a=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-bottom: 20px;\n"]))),p=d.ZP.span(i||(i=(0,c.Z)(["\n  margin-bottom: 4px;\n\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 1.17;\n  letter-spacing: 0.01em;\n  color: rgb(42 42 42);\n"]))),h=d.ZP.input(o||(o=(0,c.Z)(["\n  width: calc(100vw - 40px);\n  padding: 10px 15px;\n\n  font-size: 12px;\n  font-weight: 500;\n  color: rgb(42 42 42);\n\n  background-color: rgb(255 255 255 / 70%);\n  border-radius: 5px;\n  border: 2px solid rgba(128, 128, 128, 0.7);\n  box-shadow: 3px 5px 10px -2px rgba(75, 92, 165, 0.5);\n\n  @media screen and (min-width: 320px) {\n    max-width: 300px;\n  }\n\n  &:hover,\n  &:focus,\n  &:active {\n    outline: 0;\n    border: 2px solid rgb(128, 128, 128);\n    box-shadow: 1px -1px 10px -2px rgba(75, 92, 165, 0.5) inset;\n  }\n"]))),m=(0,d.ZP)(l.A)(s||(s=(0,c.Z)([""])))},454:function(n,e,t){t.r(e),t.d(e,{default:function(){return K}});var r,a,i,o,s,c,d,l,u,x,p,h=t(5861),m=t(885),b=t(7757),f=t.n(b),g=t(5218),v=t(631),j=t(7830),w=t(3329),Z=function(){var n=(0,v.wY)().data,e=void 0===n?[]:n,t=(0,v.Tn)(),r=(0,m.Z)(t,2),a=r[0],i=r[1].isLoading,o=function(){var n=(0,h.Z)(f().mark((function n(t){var r,i,o,s,c;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),n.prev=1,r=t.target,i=r.elements.name,o=r.elements.number,s={name:i.value,number:o.value},c=i.value.toLowerCase(),!e.some((function(n){return n.name.toLowerCase()===c}))){n.next=10;break}return n.abrupt("return",(0,g.ZP)((function(n){return(0,w.jsxs)("span",{children:[(0,w.jsx)("b",{children:i.value})," is already in contacts \xa0",(0,w.jsx)("button",{onClick:function(){r.reset(),g.ZP.dismiss(n.id)},children:"Reset"})]})})));case 10:return n.next=12,a(s).unwrap();case 12:r.reset(),n.next=18;break;case 15:n.prev=15,n.t0=n.catch(1),g.ZP.error("Error adding the contact");case 18:case"end":return n.stop()}}),n,null,[[1,15]])})));return function(e){return n.apply(this,arguments)}}();return(0,w.jsxs)(j.l0,{onSubmit:o,children:[(0,w.jsxs)(j.gN,{"aria-label":"Name",children:[(0,w.jsx)(j.__,{children:"Name"}),(0,w.jsx)(j.II,{type:"text",name:"name",placeholder:"Enter name...",pattern:"^[a-zA-Za-\u044f\u0410-\u042f]+(([' -][a-zA-Za-\u044f\u0410-\u042f ])?[a-zA-Za-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,w.jsxs)(j.gN,{"aria-label":"Number",children:[(0,w.jsx)(j.__,{children:"Number"}),(0,w.jsx)(j.II,{type:"tel",name:"number",placeholder:"Enter phone number...",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,w.jsx)(j.k4,{type:"submit",disabled:i,children:"Add contact"})]})},y=t(5048),k=function(n){return n.filter},P=t(2791),C=t(6856),z=t(168),_=t(6444),N=t(4574),A=_.ZP.li(r||(r=(0,z.Z)(["\n  display: flex;\n  gap: 10px;\n  align-items: flex-end;\n  align-content: center;\n\n  color: rgb(42 42 42);\n\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n\n  &:hover,\n  &:focus {\n    scale: 1.1;\n    padding: 5px;\n    border-radius: 5px;\n    border: 1px solid rgba(128, 128, 128, 0.7);\n    box-shadow: 3px 5px 10px -2px rgba(75, 92, 165, 0.5);\n  }\n"]))),E=_.ZP.span(a||(a=(0,z.Z)(["\n  margin-right: auto;\n  font-size: 14px;\n  font-weight: 500;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n  }\n"]))),I=_.ZP.span(i||(i=(0,z.Z)(["\n  font-size: 12px;\n  font-weight: 400;\n\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n  }\n"]))),L=(0,_.ZP)(N.h)(o||(o=(0,z.Z)([""]))),F=t(4164),S=_.ZP.div(s||(s=(0,z.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n\n  width: 100vw;\n  height: 100vh;\n\n  background-color: rgba(0, 0, 0, 0.3);\n"]))),q=_.ZP.div(c||(c=(0,z.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n\n  max-width: 350px;\n  width: 100%;\n  padding: 24px;\n\n  background-color: rgb(255 255 255);\n  border-radius: 3px;\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n"]))),D=function(n){var e=n.contact,t=n.onEdit,r=e.id,a=e.name,i=e.number,o=(0,P.useState)(a),s=(0,m.Z)(o,2),c=s[0],d=s[1],l=(0,P.useState)(i),u=(0,m.Z)(l,2),x=u[0],p=u[1],b=(0,v.wv)(),Z=(0,m.Z)(b,2),y=Z[0],k=Z[1].isLoading,z=function(n){var e=n.currentTarget,t=e.name,r=e.value;switch(t){case"name":d(r);break;case"number":p(r);break;default:return}},_=function(){var n=(0,h.Z)(f().mark((function n(e){var a,i,o,s;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),n.prev=1,a=e.target,i=a.elements.name,o=a.elements.number,s={id:r,name:i.value,number:o.value},n.next=8,y(s).unwrap();case 8:t(),A(),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),g.Am.error("Error editing the contact");case 15:case"end":return n.stop()}}),n,null,[[1,12]])})));return function(e){return n.apply(this,arguments)}}(),A=function(){d(""),p("")};return(0,w.jsxs)(j.l0,{onSubmit:_,children:[(0,w.jsxs)(j.gN,{children:[(0,w.jsx)(j.__,{children:"Name"}),(0,w.jsx)(j.II,{type:"text",name:"name",placeholder:a,value:c,onChange:z,pattern:"^[a-zA-Za-\u044f\u0410-\u042f]+(([' -][a-zA-Za-\u044f\u0410-\u042f ])?[a-zA-Za-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,w.jsxs)(j.gN,{children:[(0,w.jsx)(j.__,{children:"Number"}),(0,w.jsx)(j.II,{type:"tel",name:"number",placeholder:i,value:x,onChange:z,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,w.jsx)(N.h,{margin:"0 0 0 auto",type:"submit",disabled:k,"aria-label":"Edit contact",children:(0,w.jsx)(C.tfk,{size:15})})]})},$=document.querySelector("#modal-root"),T=function(n){var e=n.onClose,t=n.onSave,r=n.contact;(0,P.useEffect)((function(){var n=function(n){"Escape"===n.code&&e()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[e]);return(0,F.createPortal)((0,w.jsx)(S,{onClick:function(n){n.currentTarget===n.target&&e()},children:(0,w.jsxs)(q,{children:[(0,w.jsx)(N.h,{type:"button",onClick:function(){return e()},"aria-label":"Close modal",children:(0,w.jsx)(C.FU5,{size:15})}),(0,w.jsx)(D,{contact:r,onEdit:t})]})}),$)},Y=function(n){var e=n.id,t=n.name,r=n.number,a=(0,v.Nt)(),i=(0,m.Z)(a,2),o=i[0],s=i[1].isLoading,c=(0,P.useState)(!1),d=(0,m.Z)(c,2),l=d[0],u=d[1],x=function(){return u((function(n){return!n}))};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(A,{children:[(0,w.jsx)(C.Vyx,{size:15}),(0,w.jsx)(E,{children:t}),(0,w.jsx)(I,{children:r}),(0,w.jsx)(L,{"aria-label":"Edit contact",onClick:x,children:(0,w.jsx)(C.zmo,{size:15})}),(0,w.jsx)(L,{"aria-label":"Delete contact",onClick:function(){return o(e).unwrap()},disabled:s,children:(0,w.jsx)(C.FU5,{size:15})})]},e),l&&(0,w.jsx)(T,{onClose:x,onSave:x,contact:n})]})},B=_.ZP.ul(d||(d=(0,z.Z)(["\n  width: calc(100vw - 40px);\n\n  @media screen and (min-width: 320px) {\n    max-width: 300px;\n  }\n\n  @media screen and (min-width: 768px) {\n    max-width: 400px;\n  }\n"]))),H=_.ZP.p(l||(l=(0,z.Z)(["\n  margin-bottom: 15px;\n  font-weight: 500;\n"]))),J=function(){var n=(0,v.wY)(),e=n.data,t=void 0===e?[]:e,r=n.isFetching,a=n.isError,i=(0,y.v9)(k),o=t.filter((function(n){return n.name.toLowerCase().includes(i)}));return(0,w.jsxs)(B,{children:[o.length>0&&o.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,w.jsx)(Y,{id:e,name:t,number:r},e)})),r&&!a&&(0,w.jsx)(H,{children:"Loading..."}),a&&(0,w.jsx)(H,{children:a}),0===o.length&&!a&&!r&&(0,w.jsx)(H,{children:"No contacts"})]})},M=t(367),U=(0,_.ZP)(j.gN)(u||(u=(0,z.Z)([""]))),O=(0,_.ZP)(j.__)(x||(x=(0,z.Z)([""]))),R=(0,_.ZP)(j.II)(p||(p=(0,z.Z)([""]))),V=function(){var n=(0,y.I0)(),e=(0,y.v9)(k);return(0,w.jsxs)(U,{"aria-label":"Filter",children:[(0,w.jsx)(O,{children:"Find contacts by name"}),(0,w.jsx)(R,{type:"text",name:"filter",title:"Name may contain only letters",value:e,onChange:function(e){return n((0,M.xO)(e.target.value))}})]})},W=t(8097),G=t(9742),K=function(){return(0,w.jsxs)("main",{children:[(0,w.jsx)(G.H,{title:"Contacts",description:"You can create your contacts list"}),(0,w.jsxs)(W.W2,{children:[(0,w.jsxs)(W.$0,{children:[(0,w.jsx)(W.Dx,{as:"h1",hidden:!0,children:"Phonebook"}),(0,w.jsx)(W.Dx,{as:"h2",children:"Create New contact"}),(0,w.jsx)(Z,{})]}),(0,w.jsxs)(W.$0,{children:[(0,w.jsx)(W.Dx,{as:"h2",children:"Contacts"}),(0,w.jsx)(V,{}),(0,w.jsx)(J,{})]})]})]})}},9742:function(n,e,t){t.d(e,{H:function(){return i}});t(2791);var r=t(6907),a=t(3329);function i(n){var e=n.title,t=n.description;return(0,a.jsxs)(r.ql,{children:[(0,a.jsx)("title",{children:e}),(0,a.jsx)("meta",{name:"description",content:t})]})}}}]);
//# sourceMappingURL=454.4267fe05.chunk.js.map