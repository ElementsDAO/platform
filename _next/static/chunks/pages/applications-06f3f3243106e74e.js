(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38],{15190:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/applications",function(){return n(73542)}])},17376:function(e,t,n){"use strict";n.d(t,{y:function(){return p}});var a=n(85893),r=(n(67294),n(9008)),i=n(41664),s=n(18721),o=n.n(s),u=n(15794),l=n.n(u),p="Next.js Sample Website";t.Z=function(e){var t=e.children,n=e.home;return(0,a.jsxs)("div",{className:o().container,children:[(0,a.jsxs)(r.default,{children:[(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,a.jsx)("meta",{name:"description",content:"Learn how to build a personal website using Next.js"}),(0,a.jsx)("meta",{property:"og:image",content:"https://og-image.vercel.app/".concat(encodeURI(p),".png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg")}),(0,a.jsx)("meta",{name:"og:title",content:p}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]}),(0,a.jsx)("header",{className:o().header,children:n?(0,a.jsx)("div",{}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.default,{href:"/"}),(0,a.jsx)("h2",{className:l().headingLg,children:(0,a.jsx)(i.default,{href:"/",children:(0,a.jsx)("div",{className:l().colorInherit,children:"Elements"})})})]})}),(0,a.jsx)("main",{children:t}),!n&&(0,a.jsx)("div",{className:o().backToHome,children:(0,a.jsx)(i.default,{href:"/",children:(0,a.jsx)("div",{children:"\u2190 Back to home"})})})]})}},68288:function(e,t,n){"use strict";n.d(t,{iC:function(){return a},iu:function(){return r},yV:function(){return i},Qi:function(){return s}});var a="0x2DEff324fCA92255E186A7C952D7716E125FEE3B",r="0x8cFd06133F694685b84EA7785484091F71FC94e0",i="0x05ddb552509dB9E15B83d515269811d826bDc4b3",s="0x1A7ADA54E2372bE433D97F99391F5F7Fcb5D1322"},73542:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return Y},default:function(){return Z}});var a=n(34051),r=n.n(a),i=n(85893),s=n(67294),o=n(9008),u=n(77044),l=n(3283),p=n.n(l),c=n(27680),y=n(11163),d=n(17376),m=n(15794),f=n.n(m),h=n(68288),b=n(14400),v=n(66489);function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function g(e,t,n,a,r,i,s){try{var o=e[i](s),u=o.value}catch(l){return void n(l)}o.done?t(u):Promise.resolve(u).then(a,r)}function w(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function s(e){g(i,a,r,s,o,"next",e)}function o(e){g(i,a,r,s,o,"throw",e)}s(void 0)}))}}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){T(e,t,n[t])}))}return e}function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,i=[],s=!0,o=!1;try{for(n=n.call(e);!(s=(a=n.next()).done)&&(i.push(a.value),!t||i.length!==t);s=!0);}catch(u){o=!0,r=u}finally{try{s||null==n.return||n.return()}finally{if(o)throw r}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var M=function(e){var t=e.contract,n=(0,u.useWeb3React)(),a=n.account,o=(n.library,n.chainId,(0,y.useRouter)()),l=(0,b.Ue)({url:"https://ipfs.infura.io:5001/api/v0"}),p=_(s.useState(!1),2),d=p[0],m=p[1],f=_(s.useState(""),2),h=f[0],x=f[1],g=_(s.useState(null),2),T=g[0],M=g[1],S=_(s.useState({price:"",name:"",description:""}),2),A=S[0],k=S[1],I=function(){var e=w(r().mark((function e(t){var n,a,i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.files[0],e.prev=1,e.next=4,l.add(n,{progress:function(e){return console.log("received: ".concat(e))}});case 4:a=e.sent,i="https://ipfs.infura.io/ipfs/".concat(a.path),M(i),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("Error uploading file: ",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=w(r().mark((function e(){var n,i,s,u,p,c,y;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("\xf6p"),x("create Application..."),m(!0),n=A.name,i=A.description,s=A.price,console.log("first, upload to IPFS"),u=JSON.stringify({name:n,description:i,image:T}),e.prev=6,e.next=9,l.add(u);case 9:return p=e.sent,c="https://ipfs.infura.io/ipfs/".concat(p.path),console.log("url",c),e.next=14,t.methods.createApplication(s,c).send({from:a});case 14:y=e.sent,console.log("createApplication",y),o.push("/"),m(!1),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),console.log("Error uploading file: ",e.t0);case 23:case"end":return e.stop()}}),e,null,[[6,20]])})));return function(){return e.apply(this,arguments)}}();return(0,i.jsxs)(c.Box,{children:[(0,i.jsx)(c.Container,{sx:{py:8},maxWidth:"md",children:(0,i.jsx)(c.Typography,{variant:"h2",align:"center",color:"#fff",gutterBottom:!0,children:"New Application"})}),(0,i.jsx)(c.Container,{sx:{py:8},maxWidth:"md",children:(0,i.jsx)(c.Grid,{container:!0,spacing:0,direction:"row",alignItems:"center",justifyContent:"center",children:(0,i.jsxs)(c.Grid,{item:!0,xs:8,children:[(0,i.jsx)(c.Typography,{variant:"body1",align:"center",color:"#fff",gutterBottom:!0,children:"Create a appliction for your new energy system."}),(0,i.jsxs)(c.Box,{component:"form",sx:{"& > :not(style)":{m:1,margin:"20px"}},children:[(0,i.jsx)(c.Input,{disabled:d,placeholder:"Name",className:"",onChange:function(e){return k(j({},A,{name:e.target.value}))}}),(0,i.jsx)(c.Input,{disabled:d,placeholder:"Description",className:"",onChange:function(e){return k(j({},A,{description:e.target.value}))}}),(0,i.jsx)(c.Input,{disabled:d,type:"number",placeholder:"Price in USD",className:"",onChange:function(e){return k(j({},A,{price:e.target.value}))}}),(0,i.jsx)(c.Input,{disabled:d,type:"file",name:"Asset",className:"my-4",onChange:I}),T&&(0,i.jsx)("img",{className:"rounded mt-4",alt:"upload",width:"350",src:T}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsxs)(c.Box,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",children:[d?(0,i.jsx)(v.Z,{color:"primary",size:"5em"}):null,(0,i.jsx)(c.Typography,{variant:"body1",align:"center",color:"#fff",gutterBottom:!0,children:d?h:""}),(0,i.jsx)("br",{}),(0,i.jsx)(c.Button,{disabled:d,variant:"contained",onClick:O,className:"font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg",children:"Create Application"})]})]})]})})})]})},S=n(41664);function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function k(e,t,n,a,r,i,s){try{var o=e[i](s),u=o.value}catch(l){return void n(l)}o.done?t(u):Promise.resolve(u).then(a,r)}function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,i=[],s=!0,o=!1;try{for(n=n.call(e);!(s=(a=n.next()).done)&&(i.push(a.value),!t||i.length!==t);s=!0);}catch(u){o=!0,r=u}finally{try{s||null==n.return||n.return()}finally{if(o)throw r}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var O=n(16017),C=function(e){var t=e.address;console.log("ApplicationListItem::address",t);var n=(0,u.useWeb3React)(),a=n.account,o=n.library,l=n.chainId,y=I(s.useState({name:"Demo",description:"Demo"}),2),d=y[0],m=y[1],f=function(){var e,n=(e=r().mark((function e(n,a){var i,s,o;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=2,s=new(p())(a.provider),o=new s.eth.Contract(O,t),e.prev=5,e.next=8,o.methods.baseURI().call();case 8:i=e.sent,console.log("uri",i);try{fetch(i).then((function(e){return e.json()})).then((function(e){return m(e)}))}catch(n){console.log("error uri",n)}e.next=16;break;case 13:e.prev=13,e.t0=e.catch(5),console.log("error balance",e.t0);case 16:e.next=21;break;case 18:e.prev=18,e.t1=e.catch(2),console.log("error",e.t1);case 21:case"end":return e.stop()}}),e,null,[[2,18],[5,13]])})),function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function s(e){k(i,a,r,s,o,"next",e)}function o(e){k(i,a,r,s,o,"throw",e)}s(void 0)}))});return function(e,t){return n.apply(this,arguments)}}();return s.useEffect((function(){return a&&o&&f(a,o),null}),[a,o,l]),(0,i.jsx)(S.default,{href:{pathname:"/applications",query:{addr:t}},children:(0,i.jsxs)(c.ListItem,{alignItems:"flex-start",children:[(0,i.jsx)(c.ListItemAvatar,{children:(0,i.jsx)(c.Avatar,{alt:"Remy Sharp",src:"/static/images/avatar/1.jpg"})}),(0,i.jsx)(c.ListItemText,{primary:d.name,secondary:(0,i.jsx)(c.Typography,{sx:{display:"inline"},variant:"body2",color:"text.primary",children:d.description})})]})})};function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function F(e,t,n,a,r,i,s){try{var o=e[i](s),u=o.value}catch(l){return void n(l)}o.done?t(u):Promise.resolve(u).then(a,r)}function N(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function s(e){F(i,a,r,s,o,"next",e)}function o(e){F(i,a,r,s,o,"throw",e)}s(void 0)}))}}function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,i=[],s=!0,o=!1;try{for(n=n.call(e);!(s=(a=n.next()).done)&&(i.push(a.value),!t||i.length!==t);s=!0);}catch(u){o=!0,r=u}finally{try{s||null==n.return||n.return()}finally{if(o)throw r}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var P=n(16017),R=function(e){var t=e.contract,n=e.count,a=(0,u.useWeb3React)(),o=a.account,l=a.library,y=a.chainId,d=D(s.useState([]),2),m=d[0],f=d[1],h=function(){var e=N(r().mark((function e(a,i){var s,o,u,l,c;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=[],e.prev=2,u=0;case 4:if(!(u<n)){e.next=13;break}return e.next=7,t.methods.applications(u).call();case 7:s=e.sent,console.log("applications",s),o.push(s);case 10:u+=1,e.next=4;break;case 13:return console.log("applications",s),f(o),l=new(p())(i.provider),c=new l.eth.Contract(P,s),e.prev=17,e.next=20,c.methods.balance().call();case 20:s=e.sent,console.log("balance",s),e.next=27;break;case 24:e.prev=24,e.t0=e.catch(17),console.log("error balance",e.t0);case 27:e.next=32;break;case 29:e.prev=29,e.t1=e.catch(2),console.log("error",e.t1);case 32:case"end":return e.stop()}}),e,null,[[2,29],[17,24]])})));return function(t,n){return e.apply(this,arguments)}}();s.useEffect((function(){return o&&l&&h(o,l),null}),[o,l,y]);!function(){var e=N(r().mark((function e(){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("\xf6p"),e.next=3,t.methods.createApplication(1337).send({from:o});case 3:n=e.sent,console.log("\xf6p",n);case 5:case"end":return e.stop()}}),e)})))}();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Typography,{children:"Application List"}),(0,i.jsxs)(c.Box,{children:[(0,i.jsxs)("p",{children:["Entries: ",n]}),(0,i.jsx)(c.List,{sx:{width:"100%",bgcolor:"background.paper"},children:m.map((function(e,t){return(0,i.jsx)(C,{address:e})}))})]})]})};function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function U(e,t,n,a,r,i,s){try{var o=e[i](s),u=o.value}catch(l){return void n(l)}o.done?t(u):Promise.resolve(u).then(a,r)}function L(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function s(e){U(i,a,r,s,o,"next",e)}function o(e){U(i,a,r,s,o,"throw",e)}s(void 0)}))}}function W(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,i=[],s=!0,o=!1;try{for(n=n.call(e);!(s=(a=n.next()).done)&&(i.push(a.value),!t||i.length!==t);s=!0);}catch(u){o=!0,r=u}finally{try{s||null==n.return||n.return()}finally{if(o)throw r}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return B(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return B(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var X=n(16017),H=n(66816),V=function(e){var t=e.address,n=(0,u.useWeb3React)(),a=n.account,o=n.library,l=n.chainId,y=W(s.useState(void 0),2),d=y[0],m=y[1],f=W(s.useState(void 0),2),b=f[0],v=f[1],x=W(s.useState(void 0),2),g=x[0],w=x[1],T=W(s.useState(100),2),j=T[0],_=T[1],M=W(s.useState(void 0),2),A=M[0],k=M[1],I=W(s.useState({name:"Demo",description:"Demo"}),2),O=I[0],C=I[1],E=function(){var e=L(r().mark((function e(n,a){var i,s,o,u,l,c;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,console.log("applications",i),s=new(p())(a.provider),o=new s.eth.Contract(X,t),u=new s.eth.Contract(H,h.iu),w(u),v(o),e.prev=8,e.next=11,o.methods.balance().call();case 11:i=e.sent,console.log("balance",i),m(i),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(8),console.log("error balance",e.t0);case 19:return e.prev=19,e.next=22,o.methods.baseURI().call();case 22:i=e.sent,console.log("uri",i);try{fetch(i).then((function(e){return e.json()})).then((function(e){console.log("res",e),C(e)}))}catch(n){console.log("error uri",n)}e.next=30;break;case 27:e.prev=27,e.t1=e.catch(19),console.log("error balance",e.t1);case 30:return e.prev=30,e.next=33,o.methods.totalInvestors().call();case 33:i=e.sent,console.log("totalInvestors",i),l=[],c=0;case 37:if(!(c<=i)){e.next=48;break}return e.next=40,o.methods.investors(c).call();case 40:if(i=e.sent,console.log("investors",i),"0x0000000000000000000000000000000000000000"!==i){e.next=44;break}return e.abrupt("break",48);case 44:l.push(i);case 45:c+=1,e.next=37;break;case 48:console.log("investors",l),k(l),console.log("investors",i),e.next=56;break;case 53:e.prev=53,e.t2=e.catch(30),console.log("error balance",e.t2);case 56:e.next=61;break;case 58:e.prev=58,e.t3=e.catch(1),console.log("error",e.t3);case 61:case"end":return e.stop()}}),e,null,[[1,58],[8,16],[19,27],[30,53]])})));return function(t,n){return e.apply(this,arguments)}}(),F=function(){var e=L(r().mark((function e(){var n,i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("\xf6p"),e.next=3,g.methods.approve(t,j).send({from:a});case 3:return n=e.sent,console.log("approval",n),e.next=7,b.methods.invest(j).send({from:a});case 7:i=e.sent,console.log("\xf6p",i);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return s.useEffect((function(){return a&&o&&E(a,o),null}),[a,o,l]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Typography,{variant:"h2",align:"center",color:"#fff",gutterBottom:!0,children:"Application Detail"}),(0,i.jsx)(S.default,{href:"/applications",children:"go to application list"}),(0,i.jsx)(c.Typography,{variant:"h3",color:"text.primary",children:O.name}),(0,i.jsx)(c.Typography,{variant:"body2",color:"text.primary",children:O.description}),(0,i.jsxs)(c.Box,{children:[(0,i.jsxs)("p",{children:["Balance: ",d," USD"]}),(0,i.jsxs)(c.FormControl,{children:[(0,i.jsx)(c.InputLabel,{htmlFor:"my-input",children:"Invest amount (USD)"}),(0,i.jsx)(c.Input,{onChange:function(e){return t=parseInt(e.target.value,10),console.log("\xf6p",t),void _(t);var t},id:"my-input",type:"number",placeholder:"100","aria-describedby":"USD",value:j})]}),(0,i.jsx)(c.Button,{onClick:F,children:"Invest"}),(0,i.jsxs)(c.Typography,{children:["Note: You can get some USD Test Tokens"," ",(0,i.jsx)(S.default,{href:"/faucet",children:"here"})]}),(0,i.jsx)(c.Typography,{children:"Investors List"}),A&&A.length?(0,i.jsx)("ul",{children:A.map((function(e,t){return(0,i.jsx)("li",{children:e},"investor-".concat(e))}))}):(0,i.jsx)(c.Typography,{children:"No Investors yes"})]})]})};function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function q(e,t,n,a,r,i,s){try{var o=e[i](s),u=o.value}catch(l){return void n(l)}o.done?t(u):Promise.resolve(u).then(a,r)}function z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,i=[],s=!0,o=!1;try{for(n=n.call(e);!(s=(a=n.next()).done)&&(i.push(a.value),!t||i.length!==t);s=!0);}catch(u){o=!0,r=u}finally{try{s||null==n.return||n.return()}finally{if(o)throw r}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return $(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var G=n(78098),J=n(16017),Y=!0,Z=function(e){e.allPostsData;var t=(0,y.useRouter)().query,n=(0,u.useWeb3React)(),a=n.account,l=n.library,m=n.chainId,b=z(s.useState(void 0),2),v=b[0],x=b[1],g=z(s.useState(void 0),2),w=g[0],T=g[1],j=z(s.useState(!1),2),_=(j[0],j[1]),S=z(s.useState("list"),2),A=S[0],k=S[1],I=function(){var e,n=(e=r().mark((function e(n,a){var i,s,o,u,l,c;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=new(p())(a.provider),s=new i.eth.Contract(G,h.iC),x(s),u=t.addr||void 0,l=t.new||void 0,"string"!==typeof u){e.next=22;break}return c=new i.eth.Contract(J,u),e.prev=8,e.next=11,c.methods.balance().call();case 11:o=e.sent,console.log("balance",o),_(!0),k("detail"),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(8),console.log("error",e.t0);case 20:e.next=37;break;case 22:if("string"!==typeof l){e.next=26;break}console.log("newApplication",l),k("new"),e.next=37;break;case 26:return e.prev=26,e.next=29,s.methods.applications_count().call();case 29:o=e.sent,console.log("applications_count",o),T(o),e.next=37;break;case 34:e.prev=34,e.t1=e.catch(26),console.log("error",e.t1);case 37:case"end":return e.stop()}}),e,null,[[8,17],[26,34]])})),function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function s(e){q(i,a,r,s,o,"next",e)}function o(e){q(i,a,r,s,o,"throw",e)}s(void 0)}))});return function(e,t){return n.apply(this,arguments)}}();return s.useEffect((function(){return a&&l&&(console.log("query.addr",t.addr),I(a,l)),null}),[a,l,m,A]),(0,i.jsxs)(d.Z,{home:!0,children:[(0,i.jsx)(o.default,{children:(0,i.jsx)("title",{children:"Applications"})}),(0,i.jsx)("section",{className:f().headingMd,children:t.addr?(0,i.jsx)(V,{address:t.addr}):(0,i.jsx)("div",{children:w&&(0,i.jsxs)(i.Fragment,{children:["new"===A&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Button,{onClick:function(){return k("list")},children:"Back"}),(0,i.jsx)(M,{contract:v})]}),"list"===A&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Button,{onClick:function(){return k("new")},children:"Create new Application"}),(0,i.jsx)(R,{contract:v,count:w})]})]})})})]})}},18721:function(e){e.exports={container:"layout_container__fbLkO",header:"layout_header__kY0Lt",backToHome:"layout_backToHome__9sjx_"}},15794:function(e){e.exports={heading2Xl:"utils_heading2Xl___9fFP",headingXl:"utils_headingXl__u25Y2",headingLg:"utils_headingLg__5535D",headingMd:"utils_headingMd__gD1Ok",borderCircle:"utils_borderCircle__s2nTm",colorInherit:"utils_colorInherit__mSH_x",padding1px:"utils_padding1px__PWQKR",list:"utils_list__4Mu4l",listItem:"utils_listItem__s2m6i",lightText:"utils_lightText__eUzGY"}},89214:function(){},71922:function(){},2363:function(){},96419:function(){},56353:function(){},27790:function(){},69386:function(){},31616:function(){},42611:function(){},88795:function(){},29120:function(){},46586:function(){},6567:function(){},16017:function(e){"use strict";e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"_creator","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_timeStart","type":"uint256"},{"internalType":"uint256","name":"_timeEnd","type":"uint256"},{"internalType":"address","name":"_usdtAddress","type":"address"},{"internalType":"address","name":"_elements","type":"address"},{"internalType":"string","name":"_baseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"amount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"creator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"elements","outputs":[{"internalType":"contract Elements","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"invest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"investors","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"invests","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"timeEnd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"timeStart","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalInvestors","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"usdt","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"}]')},78098:function(e){"use strict";e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"_usdtAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"applications","outputs":[{"internalType":"contract Application","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"applications_count","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"compoundFreq","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"compoundRewardsTimer","outputs":[{"internalType":"uint256","name":"_timer","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"string","name":"baseURI","type":"string"}],"name":"createApplication","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getDepositInfo","outputs":[{"internalType":"uint256","name":"_stake","type":"uint256"},{"internalType":"uint256","name":"_rewards","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"minStake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardsPerHour","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakeRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdt","outputs":[{"internalType":"contract ERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},66816:function(e){"use strict";e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')}},function(e){e.O(0,[482,714,100,589,400,774,888,179],(function(){return t=15190,e(e.s=t);var t}));var t=e.O();_N_E=t}]);