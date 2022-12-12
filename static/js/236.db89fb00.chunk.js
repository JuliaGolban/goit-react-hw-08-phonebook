"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[236],{4574:function(n,e,r){r.d(e,{A:function(){return s},h:function(){return l}});var t,o,i=r(168),a=r(6444),s=a.ZP.button(t||(t=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  min-width: 100px;\n  min-height: 30px;\n  margin: ",";\n  padding: 8px 10px;\n\n  font-size: ",";\n  font-weight: 700;\n  text-transform: uppercase;\n  color: rgb(42 42 42);\n\n  background-color: ",";\n  border-radius: 5px;\n  border: none;\n  box-shadow: 5px 5px 5px -2px rgba(75, 92, 165, 0.3);\n  cursor: pointer;\n\n  &:hover,\n  &:focus,\n  &:active {\n    color: rgb(255 255 255);\n    background-color: rgba(9, 9, 121, 0.7);\n    border: none;\n    box-shadow: 1px -1px 10px -2px rgba(75, 92, 165, 0.3) inset;\n  }\n"])),(function(n){return n.margin||"0"}),(function(n){return n.size||"10px"}),(function(n){return n.bgc||"rgba(160, 141, 196, 0.5)"})),l=a.ZP.button(o||(o=(0,i.Z)(["\n  display: inline-flex;\n  align-content: center;\n  justify-content: center;\n  align-items: center;\n\n  margin: ",";\n  padding: 0;\n\n  color: ",";\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus,\n  &:active {\n    color: rgb(255 0 0);\n  }\n\n  & > svg {\n    fill: currentColor;\n  }\n"])),(function(n){return n.margin||"0"}),(function(n){return n.color||"rgb(42 42 42)"}))},7830:function(n,e,r){r.d(e,{II:function(){return m},__:function(){return x},gN:function(){return p},k4:function(){return f},l0:function(){return d}});var t,o,i,a,s,l=r(168),c=r(6444),u=r(4574),d=c.ZP.form(t||(t=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n\n  background-color: transparent;\n"]))),p=c.ZP.label(o||(o=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-bottom: 20px;\n"]))),x=c.ZP.span(i||(i=(0,l.Z)(["\n  margin-bottom: 4px;\n\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 1.17;\n  letter-spacing: 0.01em;\n  color: rgb(42 42 42);\n"]))),m=c.ZP.input(a||(a=(0,l.Z)(["\n  width: calc(100vw - 40px);\n  padding: 10px 15px;\n\n  font-size: 12px;\n  font-weight: 500;\n  color: rgb(42 42 42);\n\n  background-color: rgb(255 255 255 / 70%);\n  border-radius: 5px;\n  border: 2px solid rgba(128, 128, 128, 0.7);\n  box-shadow: 3px 5px 10px -2px rgba(75, 92, 165, 0.5);\n\n  @media screen and (min-width: 320px) {\n    max-width: 300px;\n  }\n\n  &:hover,\n  &:focus,\n  &:active {\n    outline: 0;\n    border: 2px solid rgb(128, 128, 128);\n    box-shadow: 1px -1px 10px -2px rgba(75, 92, 165, 0.5) inset;\n  }\n"]))),f=(0,c.ZP)(u.A)(s||(s=(0,l.Z)([""])))},8813:function(n,e,r){r.d(e,{W:function(){return x}});var t,o=r(885),i=r(168),a=r(6444),s=r(2791),l=r(7692),c=r(7830),u=r(4574),d=r(3329),p=a.ZP.span(t||(t=(0,i.Z)(["\n  position: relative;\n  display: block;\n\n  & svg {\n    position: absolute;\n    top: 50%;\n    right: 8px;\n    transform: translateY(-50%);\n    fill: rgba(128, 128, 128, 0.7);\n\n    &:hover {\n      fill: rgba(128, 128, 128, 1);\n    }\n  }\n"]))),x=function(n){var e=n.value,r=n.onChange,t=(0,s.useState)(!0),i=(0,o.Z)(t,2),a=i[0],x=i[1];return(0,d.jsxs)(p,{children:[(0,d.jsx)(c.II,{type:a?"password":"text",name:"password",value:e,onChange:r,placeholder:"Enter your password...",title:"Password must consist of numbers and letters",required:!0}),(0,d.jsx)(u.h,{onClick:function(){return x(!a)},children:a?(0,d.jsx)(l.nJ9,{size:20}):(0,d.jsx)(l.A7v,{size:20})})]})}},8236:function(n,e,r){r.r(e),r.d(e,{default:function(){return d}});var t=r(8097),o=r(5048),i=r(9273),a=r(7830),s=r(8813),l=r(3329),c=function(){var n=(0,o.I0)();return(0,l.jsxs)(a.l0,{onSubmit:function(e){e.preventDefault();var r=e.target,t=r.elements.name,o=r.elements.email,a=r.elements.password,s={name:t.value,email:o.value,password:a.value};n((0,i.z2)(s)),r.reset()},autoComplete:"off",children:[(0,l.jsxs)(a.gN,{"aria-label":"Username",children:[(0,l.jsx)(a.__,{children:"Username"}),(0,l.jsx)(a.II,{type:"text",name:"name",placeholder:"Enter your name...",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,l.jsxs)(a.gN,{"aria-label":"Email",children:[(0,l.jsx)(a.__,{children:"Email"}),(0,l.jsx)(a.II,{type:"email",name:"email",placeholder:"Enter your email...",title:"Email must consist of your personal info,@ symbol and domain. Example, personal_info@domain",required:!0})]}),(0,l.jsxs)(a.gN,{"aria-label":"Password",children:[(0,l.jsx)(a.__,{children:"Password"}),(0,l.jsx)(s.W,{})]}),(0,l.jsx)(a.k4,{type:"submit",children:"Sing up"})]})},u=r(9742),d=function(){return(0,l.jsxs)("main",{children:[(0,l.jsx)(u.H,{title:"Registration",description:"You can register using your email"}),(0,l.jsx)(t.W2,{children:(0,l.jsxs)(t.$0,{children:[(0,l.jsx)(t.Dx,{children:"Sign up with Email"}),(0,l.jsx)(c,{})]})})]})}},9742:function(n,e,r){r.d(e,{H:function(){return i}});r(2791);var t=r(6907),o=r(3329);function i(n){var e=n.title,r=n.description;return(0,o.jsxs)(t.ql,{children:[(0,o.jsx)("title",{children:e}),(0,o.jsx)("meta",{name:"description",content:r})]})}}}]);
//# sourceMappingURL=236.db89fb00.chunk.js.map