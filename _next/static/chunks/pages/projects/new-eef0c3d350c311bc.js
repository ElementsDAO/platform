(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[689],{42926:function(r,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/new",function(){return n(94755)}])},94755:function(r,e,n){"use strict";n.r(e),n.d(e,{default:function(){return N}});var t=n(34051),o=n.n(t),a=n(85893),i=n(67294),u=n(3283),c=n.n(u),l=n(77044),s=n(27948),f=n(15861),p=n(14400),d=n(11163),h=n(15568),v=n(99226),m=n(49576),y=n(98456),b=n(37543);function g(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=r[n];return t}function x(r,e,n,t,o,a,i){try{var u=r[a](i),c=u.value}catch(l){return void n(l)}u.done?e(c):Promise.resolve(c).then(t,o)}function w(r){return function(){var e=this,n=arguments;return new Promise((function(t,o){var a=r.apply(e,n);function i(r){x(a,t,o,i,u,"next",r)}function u(r){x(a,t,o,i,u,"throw",r)}i(void 0)}))}}function j(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function S(r){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})))),t.forEach((function(e){j(r,e,n[e])}))}return r}function k(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var t,o,a=[],i=!0,u=!1;try{for(n=n.call(r);!(i=(t=n.next()).done)&&(a.push(t.value),!e||a.length!==e);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}}(r,e)||function(r,e){if(!r)return;if("string"===typeof r)return g(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(r,e)}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var A=function(r){var e=r.contract,n=(0,l.Ge)().account,t=(0,d.useRouter)(),u=(0,p.Ue)({url:"https://ipfs.infura.io:5001/api/v0"}),c=k(i.useState(!1),2),g=c[0],x=c[1],j=k(i.useState(""),2),A=j[0],O=j[1],Z=k(i.useState(null),2),C=Z[0],P=Z[1],E=k(i.useState(!1),2),_=E[0],N=E[1],I=k(i.useState(""),2),W=I[0],D=I[1],T=k(i.useState({price:"",name:"",description:""}),2),U=T[0],G=T[1],M=function(){var r=w(o().mark((function r(e){var n,t,a;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.target.files[0],r.prev=1,r.next=4,u.add(n,{progress:function(r){return console.log("received: ".concat(r))}});case 4:t=r.sent,a="https://ipfs.infura.io/ipfs/".concat(t.path),P(a),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),console.log("Error uploading file: ",r.t0);case 12:case"end":return r.stop()}}),r,null,[[1,9]])})));return function(e){return r.apply(this,arguments)}}(),X=function(){var r=!0;return""===U.price&&(r=!1),""===U.name&&(r=!1),""===U.description&&(r=!1),r},$=function(){var r=w(o().mark((function r(){var a,i,c,l,s,f;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(O("Creating Project..."),x(!0),a=U.name,i=U.description,c=U.price,X()){r.next=7;break}throw console.error("the form is not valid"),x(!1),new Error("Please check your input");case 7:return l=JSON.stringify({name:a,description:i,image:C}),r.prev=8,r.next=11,u.add(l);case 11:return s=r.sent,f="https://ipfs.infura.io/ipfs/".concat(s.path),r.next=15,e.methods.createApplication(c,f).send({from:n});case 15:r.sent,t.push("/"),x(!1),r.next=26;break;case 20:r.prev=20,r.t0=r.catch(8),x(!1),N(!0),D(r.t0.message),console.log("Error uploading file: ",_);case 26:case"end":return r.stop()}}),r,null,[[8,20]])})));return function(){return r.apply(this,arguments)}}();return(0,a.jsxs)(s.Z,{maxWidth:"sm",children:[_&&(0,a.jsx)(h.Z,{severity:"error",children:W}),(0,a.jsxs)(v.Z,{component:"form",children:[(0,a.jsx)(m.Z,{disabled:g,placeholder:"Name",fullWidth:!0,variant:"outlined",sx:{mb:2,bgcolor:"background.paper"},value:U.name,onChange:function(r){return G(S({},U,{name:r.target.value}))}}),(0,a.jsx)(m.Z,{disabled:g,placeholder:"Description",fullWidth:!0,variant:"outlined",sx:{mb:2,bgcolor:"background.paper"},value:U.description,onChange:function(r){return G(S({},U,{description:r.target.value}))}}),(0,a.jsx)(m.Z,{disabled:g,type:"number",placeholder:"Price in USD",fullWidth:!0,variant:"outlined",value:U.price,sx:{mb:2,bgcolor:"background.paper"},onChange:function(r){return G(S({},U,{price:r.target.value}))}}),(0,a.jsx)(m.Z,{disabled:g,type:"file",name:"Asset",fullWidth:!0,sx:{mb:2,bgcolor:"background.paper"},onChange:M}),C&&(0,a.jsx)("img",{className:"rounded mt-4",alt:"upload",width:"350",src:C}),(0,a.jsxs)(v.Z,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",children:[g&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(y.Z,{color:"primary",size:"5em"}),(0,a.jsx)(f.Z,{variant:"body1",align:"center",children:g?A:""})]}),(0,a.jsx)(b.Z,{disabled:g,variant:"contained",onClick:$,children:"Create Application"})]})]})]})},O=n(5806),Z=n(22729);function C(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=r[n];return t}function P(r,e,n,t,o,a,i){try{var u=r[a](i),c=u.value}catch(l){return void n(l)}u.done?e(c):Promise.resolve(c).then(t,o)}function E(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var t,o,a=[],i=!0,u=!1;try{for(n=n.call(r);!(i=(t=n.next()).done)&&(a.push(t.value),!e||a.length!==e);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}}(r,e)||function(r,e){if(!r)return;if("string"===typeof r)return C(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return C(r,e)}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var _=n(18111),N=function(){var r=(0,l.Ge)(),e=r.account,n=r.library,t=E(i.useState(void 0),2),u=t[0],p=t[1],d=function(){var r,e=(r=o().mark((function r(e,n){var t,a;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t=new(c())(n.provider),a=new t.eth.Contract(_,Z.Z.contracts.elements),p(a);case 3:case"end":return r.stop()}}),r)})),function(){var e=this,n=arguments;return new Promise((function(t,o){var a=r.apply(e,n);function i(r){P(a,t,o,i,u,"next",r)}function u(r){P(a,t,o,i,u,"throw",r)}i(void 0)}))});return function(r,n){return e.apply(this,arguments)}}();return i.useEffect((function(){return e&&n&&d(e,n),null}),[e,n]),(0,a.jsxs)(O.Z,{children:[(0,a.jsx)(s.Z,{maxWidth:"sm",children:(0,a.jsx)(f.Z,{gutterBottom:!0,fontWeight:"bold",variant:"h2",children:"New"})}),(0,a.jsx)(A,{contract:u})]})}},42611:function(){},88795:function(){}},function(r){r.O(0,[364,589,990,806,774,888,179],(function(){return e=42926,r(r.s=e);var e}));var e=r.O();_N_E=e}]);