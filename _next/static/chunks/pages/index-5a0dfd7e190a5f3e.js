(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{27948:function(t,e,n){"use strict";n.d(e,{Z:function(){return x}});var r=n(63366),a=n(87462),i=n(67294),o=n(86010),s=n(70005),u=n(27623),c=n(11496),d=n(36594);function l(t){return(0,d.Z)("MuiContainer",t)}(0,n(38959).Z)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var f=n(98216),h=n(85893);const p=["className","component","disableGutters","fixed","maxWidth"],m=(0,c.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[`maxWidth${(0,f.Z)(String(n.maxWidth))}`],n.fixed&&e.fixed,n.disableGutters&&e.disableGutters]}})((({theme:t,ownerState:e})=>(0,a.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!e.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}})),(({theme:t,ownerState:e})=>e.fixed&&Object.keys(t.breakpoints.values).reduce(((e,n)=>{const r=t.breakpoints.values[n];return 0!==r&&(e[t.breakpoints.up(n)]={maxWidth:`${r}${t.breakpoints.unit}`}),e}),{})),(({theme:t,ownerState:e})=>(0,a.Z)({},"xs"===e.maxWidth&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},e.maxWidth&&"xs"!==e.maxWidth&&{[t.breakpoints.up(e.maxWidth)]:{maxWidth:`${t.breakpoints.values[e.maxWidth]}${t.breakpoints.unit}`}})));var x=i.forwardRef((function(t,e){const n=(0,u.Z)({props:t,name:"MuiContainer"}),{className:i,component:c="div",disableGutters:d=!1,fixed:x=!1,maxWidth:v="lg"}=n,b=(0,r.Z)(n,p),g=(0,a.Z)({},n,{component:c,disableGutters:d,fixed:x,maxWidth:v}),y=(t=>{const{classes:e,fixed:n,disableGutters:r,maxWidth:a}=t,i={root:["root",a&&`maxWidth${(0,f.Z)(String(a))}`,n&&"fixed",r&&"disableGutters"]};return(0,s.Z)(i,l,e)})(g);return(0,h.jsx)(m,(0,a.Z)({as:c,ownerState:g,className:(0,o.Z)(y.root,i),ref:e},b))}))},48312:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(14186)}])},14186:function(t,e,n){"use strict";n.r(e);var r=n(34051),a=n.n(r),i=n(85893),o=n(67294),s=n(9008),u=n.n(s),c=n(3283),d=n.n(c),l=n(77044),f=n(27948),h=n(15861),p=n(22729),m=n(5806);function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function v(t,e,n,r,a,i,o){try{var s=t[i](o),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(r,a)}function b(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,i=[],o=!0,s=!1;try{for(n=n.call(t);!(o=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);o=!0);}catch(u){s=!0,a=u}finally{try{o||null==n.return||n.return()}finally{if(s)throw a}}return i}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return x(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var g=n(18111);e.default=function(){var t=(0,l.Ge)(),e=t.account,n=t.library,r=t.chainId,s=b(o.useState(void 0),2),c=s[0],x=s[1],y=b(o.useState(void 0),2),w=y[0],W=y[1],Z=function(){var t,e=(t=a().mark((function t(e,n){var r,i,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new(d())(n.provider),i=new r.eth.Contract(g,p.Z.contracts.elements),t.prev=3,t.next=6,i.methods.applications_count().call();case 6:return o=t.sent,W(o),t.next=10,i.methods.totalSupply().call();case 10:o=t.sent,x(o),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(3),console.log("error",t.t0);case 17:case"end":return t.stop()}}),t,null,[[3,14]])})),function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function o(t){v(i,r,a,o,s,"next",t)}function s(t){v(i,r,a,o,s,"throw",t)}o(void 0)}))});return function(t,n){return e.apply(this,arguments)}}();return o.useEffect((function(){return e&&n&&Z(e,n),null}),[e,n,r]),(0,i.jsxs)(m.Z,{children:[(0,i.jsx)(u(),{children:(0,i.jsx)("title",{children:"Home"})}),(0,i.jsxs)(f.Z,{maxWidth:"sm",children:[(0,i.jsx)(h.Z,{color:"text.secondary",children:"[Alpha Version]"}),(0,i.jsx)(h.Z,{variant:"h2",fontWeight:"bold",children:"Elements"}),(0,i.jsxs)(h.Z,{color:"text.secondary",children:["Platform to fund and invest in the future - renewable energy. We already have ",(0,i.jsxs)("strong",{children:[w," projects"]})," and a current token supply of ",(0,i.jsxs)("strong",{children:[c," ELE"]}),"."]})]})]})}}},function(t){t.O(0,[364,806,774,888,179],(function(){return e=48312,t(t.s=e);var e}));var e=t.O();_N_E=e}]);