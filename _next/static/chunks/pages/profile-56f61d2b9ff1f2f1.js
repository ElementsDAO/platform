(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{56896:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return t(86835)}])},86835:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return le}});var i=t(85893),a=t(67294),r=t(27948),s=t(99226),o=t(15861),u=t(41532),l=t(34051),d=t.n(l),c=t(3283),p=t.n(c),y=t(11163),m=t(86886),f=t(18377),v=t(22729),h=t(37543),x=t(38945),b=t(17659);function g(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function T(e,n,t,i,a,r,s){try{var o=e[r](s),u=o.value}catch(l){return void t(l)}o.done?n(u):Promise.resolve(u).then(i,a)}function j(e){return function(){var n=this,t=arguments;return new Promise((function(i,a){var r=e.apply(n,t);function s(e){T(r,i,a,s,o,"next",e)}function o(e){T(r,i,a,s,o,"throw",e)}s(void 0)}))}}function w(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var i,a,r=[],s=!0,o=!1;try{for(t=t.call(e);!(s=(i=t.next()).done)&&(r.push(i.value),!n||r.length!==n);s=!0);}catch(u){o=!0,a=u}finally{try{s||null==t.return||t.return()}finally{if(o)throw a}}return r}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return g(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var P=t(4613),A=t(21001),I=b.P.useAccounts,S=(b.P.useError,b.P.useIsActivating,b.P.useIsActive),k=(b.P.useENSNames,x.P.useProvider),C=x.P.useChainId,N=["https://cdn.discordapp.com/attachments/420674357652750367/975211600824905778/water.gif","https://cdn.discordapp.com/attachments/420674357652750367/975211114164015144/fire.gif","https://cdn.discordapp.com/attachments/420674357652750367/975209078324338708/ezgif-1-2280f4ac9c.gif","https://cdn.discordapp.com/attachments/420674357652750367/975211377771814973/air.gif"],E=function(){var e=C(),n=S(),t=x.P.useIsActive(),r=k(),s=I(),u=w(a.useState([]),2),l=u[0],c=u[1],g=w(a.useState(void 0),2),T=g[0],E=g[1],M=w(a.useState(void 0),2),O=M[0],Z=M[1],B=(0,y.useRouter)(),F=function(){var e=j(d().mark((function e(){var n,t,i,a,o,u,l,y;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("provider",r),console.log("account:",s[0]),Z(s[0]),n=new(p())(r.connection.url),console.log("web3",n),t=new n.eth.Contract(P,v.Z.contracts.elementary),i=new n.eth.Contract(A,v.Z.contracts.vele),E(i),e.prev=8,e.next=11,i.methods.walletOfOwner(O).call();case 11:return a=e.sent,c(a),console.log("data",a),e.next=16,t.methods.balanceOf(O,0).call();case 16:return o=e.sent,e.next=19,t.methods.balanceOf(O,1).call();case 19:return u=e.sent,e.next=22,t.methods.balanceOf(O,2).call();case 22:return l=e.sent,e.next=25,t.methods.balanceOf(O,3).call();case 25:y=e.sent,console.log("Counts: ",o,u,l,y),e.next=32;break;case 29:e.prev=29,e.t0=e.catch(8),console.log("err",e.t0);case 32:case"end":return e.stop()}}),e,null,[[8,29]])})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=j(d().mark((function e(){var n;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("buy"),e.next=3,T.methods.mint(O).send({from:O});case 3:n=e.sent,console.log("data",n),B.reload();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.useEffect((function(){n&&t&&e&&F()}),[n,e,N]),a.useEffect((function(){b.O.connectEagerly()}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{variant:"h5",gutterBottom:!0,fontWeight:"bold",children:"NFTs"}),(0,i.jsx)("hr",{}),(0,i.jsx)(o.Z,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"Void Element NFT"}),(0,i.jsx)(h.Z,{onClick:W,children:"Buy Void Element NFT"}),l.length>0?(0,i.jsx)(m.ZP,{container:!0,spacing:3,children:l.map((function(e){return(0,i.jsx)(m.ZP,{item:!0,xs:3,children:(0,i.jsx)(f.Z,{sx:{width:"100%",height:200,backgroundImage:"url(https://images.pexels.com/photos/7130548/pexels-photo-7130548.jpeg?cs=srgb&dl=pexels-gradienta-7130548.jpg&fm=jpg)",backgroundPosition:"center",backgroundSize:"cover",borderRadius:"8px",boxShadow:1},children:(0,i.jsx)(o.Z,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:e})})})}))}):(0,i.jsx)(o.Z,{variant:"body1",gutterBottom:!0,fontWeight:"bold",children:"You dont any Void Element NFT"}),(0,i.jsx)(o.Z,{variant:"h6",gutterBottom:!0,fontWeight:"bold",children:"Elements"}),(0,i.jsx)(m.ZP,{container:!0,spacing:3,children:N.map((function(e){return(0,i.jsx)(m.ZP,{item:!0,xs:3,children:(0,i.jsx)(f.Z,{sx:{width:"100%",height:200,backgroundImage:"url(".concat(e,")"),backgroundPosition:"center",backgroundSize:"cover",borderRadius:"8px",boxShadow:1}})})}))})]})},M=t(61744);var O,Z=function(e){var n,t=e.accounts,r=e.provider,s=e.ENSNames,o=function(e,n){var t=(0,a.useState)(),i=t[0],r=t[1];return(0,a.useEffect)((function(){if(e&&(null===n||void 0===n?void 0:n.length)){var t=!1;return Promise.all(n.map((function(n){return e.getBalance(n)}))).then((function(e){t||r(e)})),function(){t=!0,r(void 0)}}}),[e,n]),i}(r,t);return void 0===t?null:(0,i.jsxs)("div",{children:["Accounts:"," ",(0,i.jsx)("b",{children:0===t.length?"None":null===t||void 0===t?void 0:t.map((function(e,t){return(0,i.jsxs)("ul",{style:{margin:0,overflow:"hidden",textOverflow:"ellipsis"},children:[null!==(n=null===s||void 0===s?void 0:s[t])&&void 0!==n?n:e,(null===o||void 0===o?void 0:o[t])?" (\u039e".concat((0,M.dF)(o[t]),")"):null]},e)}))})]})},B=function(e){var n=e.children;return(0,i.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"20rem",padding:"1rem",margin:"1rem",overflow:"auto",border:"1px solid",borderRadius:"1rem"},children:n})},F=t(40171),W=function(e){var n,t=e.chainId;if(void 0===t)return null;var a=t?null===(n=F.zG[t])||void 0===n?void 0:n.name:void 0;return a?(0,i.jsxs)("div",{children:["Chain:"," ",(0,i.jsxs)("b",{children:[a," (",t,")"]})]}):(0,i.jsxs)("div",{children:["Chain Id: ",(0,i.jsx)("b",{children:t})]})},R=t(93382),_=t(28043),D=t(97309);function G(e,n,t,i,a,r,s){try{var o=e[r](s),u=o.value}catch(l){return void t(l)}o.done?n(u):Promise.resolve(u).then(i,a)}function z(e,n){return null!=n&&"undefined"!==typeof Symbol&&n[Symbol.hasInstance]?!!n[Symbol.hasInstance](e):e instanceof n}var U,V=function(e){var n=e.chainId,t=e.switchChain,a=e.displayDefault,r=e.chainIds;return(0,i.jsxs)("select",{value:n,onChange:function(e){null===t||void 0===t||t(Number(e.target.value))},disabled:void 0===t,children:[a?(0,i.jsx)("option",{value:-1,children:"Default Chain"}):null,r.map((function(e){var n;return(0,i.jsx)("option",{value:e,children:null!==(O=null===(n=F.zG[e])||void 0===n?void 0:n.name)&&void 0!==O?O:e},e)}))]})},X=function(e){var n=e.connector,t=e.chainId,r=e.isActivating,s=e.error,o=e.isActive,u=z(n,_.Network),l=!u,c=(u?Object.keys(F.ns):Object.keys(F.zG)).map((function(e){return Number(e)})),p=(0,a.useState)(u?1:-1),y=p[0],m=p[1],f=(0,a.useCallback)(function(){var e,i=(e=d().mark((function e(i){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m(y),i!==t){e.next=3;break}return e.abrupt("return");case 3:if(-1!==i||void 0===t){e.next=5;break}return e.abrupt("return");case 5:if(!z(n,D.WalletConnect)&&!z(n,_.Network)){e.next=10;break}return e.next=8,n.activate(-1===i?void 0:i);case 8:e.next=12;break;case 10:return e.next=12,n.activate(-1===i?void 0:(0,F.RP)(i));case 12:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(i,a){var r=e.apply(n,t);function s(e){G(r,i,a,s,o,"next",e)}function o(e){G(r,i,a,s,o,"throw",e)}s(void 0)}))});return function(e){return i.apply(this,arguments)}}(),[n,t]);return s?(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[!z(n,R.GnosisSafe)&&(0,i.jsx)(V,{chainId:y,switchChain:f,displayDefault:l,chainIds:c}),(0,i.jsx)("div",{style:{marginBottom:"1rem"}}),(0,i.jsx)("button",{onClick:function(){return z(n,R.GnosisSafe)?void n.activate():z(n,D.WalletConnect)||z(n,_.Network)?void n.activate(-1===y?void 0:y):void n.activate(-1===y?void 0:(0,F.RP)(y))},children:"Try Again?"})]}):o?(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[!z(n,R.GnosisSafe)&&(0,i.jsx)(V,{chainId:-1===y?-1:t,switchChain:f,displayDefault:l,chainIds:c}),(0,i.jsx)("div",{style:{marginBottom:"1rem"}}),(0,i.jsx)("button",{onClick:function(){n.deactivate()},children:"Disconnect"})]}):(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[!z(n,R.GnosisSafe)&&(0,i.jsx)(V,{chainId:y,switchChain:r?void 0:f,displayDefault:l,chainIds:c}),(0,i.jsx)("div",{style:{marginBottom:"1rem"}}),(0,i.jsx)("button",{onClick:r?void 0:function(){return z(n,R.GnosisSafe)?void n.activate():z(n,D.WalletConnect)||z(n,_.Network)?n.activate(-1===y?void 0:y):n.activate(-1===y?void 0:(0,F.RP)(y))},disabled:r,children:"Connect"})]})},H=function(e){var n=e.isActivating,t=e.error,a=e.isActive;return(0,i.jsx)("div",{children:t?(0,i.jsxs)(i.Fragment,{children:["\ud83d\udd34 ",null!==(U=t.name)&&void 0!==U?U:"Error",t.message?": ".concat(t.message):null]}):n?(0,i.jsx)(i.Fragment,{children:"\ud83d\udfe1 Connecting"}):a?(0,i.jsx)(i.Fragment,{children:"\ud83d\udfe2 Connected"}):(0,i.jsx)(i.Fragment,{children:"\u26aa\ufe0f Disconnected"})})},J=x.P.useChainId,L=x.P.useAccounts,Y=x.P.useError,$=x.P.useIsActivating,q=x.P.useIsActive,K=x.P.useProvider,Q=x.P.useENSNames,ee=function(){var e=J(),n=L(),t=Y(),a=$(),r=q(),s=K(),o=Q(s);return(0,i.jsxs)(B,{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("b",{children:"Network"}),(0,i.jsx)(H,{isActivating:a,error:t,isActive:r}),(0,i.jsx)("div",{style:{marginBottom:"1rem"}}),(0,i.jsx)(W,{chainId:e}),(0,i.jsx)(Z,{accounts:n,provider:s,ENSNames:o})]}),(0,i.jsx)("div",{style:{marginBottom:"1rem"}}),(0,i.jsx)(X,{connector:x.L,chainId:e,isActivating:a,error:t,isActive:r})]})},ne=b.P.useChainId,te=b.P.useAccounts,ie=b.P.useError,ae=b.P.useIsActivating,re=b.P.useIsActive,se=b.P.useProvider,oe=b.P.useENSNames,ue=function(){var e=ne(),n=te(),t=ie(),r=ae(),s=re(),o=se(),u=oe(o);return(0,a.useEffect)((function(){b.O.connectEagerly()}),[]),(0,i.jsxs)(B,{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("b",{children:"MetaMask"}),(0,i.jsx)(H,{isActivating:r,error:t,isActive:s}),(0,i.jsx)("div",{style:{marginBottom:"1rem"}}),(0,i.jsx)(W,{chainId:e}),(0,i.jsx)(Z,{accounts:n,provider:o,ENSNames:u})]}),(0,i.jsx)("div",{style:{marginBottom:"1rem"}}),(0,i.jsx)(X,{connector:b.O,chainId:e,isActivating:r,error:t,isActive:s})]})},le=function(){return(0,i.jsx)(u.Z,{children:(0,i.jsxs)(r.Z,{maxWidth:"md",children:[(0,i.jsx)(s.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",mb:2},children:(0,i.jsx)(o.Z,{fontWeight:"bold",variant:"h2",children:"Profile"})}),(0,i.jsx)(o.Z,{fontWeight:"bold",variant:"body1",children:"Welcome in your personal area!"}),(0,i.jsx)(E,{}),(0,i.jsx)(o.Z,{fontWeight:"bold",variant:"h4",children:"Multichain Settings"}),(0,i.jsx)(ee,{}),(0,i.jsx)(ue,{})]})})}},4613:function(e){"use strict";e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"TransferBatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"TransferSingle","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"value","type":"string"},{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"URI","type":"event"},{"inputs":[],"name":"AIR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EARTH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FIRE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WATER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"}],"name":"balanceOfBatch","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"burnBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"exists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"mintBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeBatchTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newuri","type":"string"}],"name":"setURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"uri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]')}},function(e){e.O(0,[838,533,698,532,774,888,179],(function(){return n=56896,e(e.s=n);var n}));var n=e.O();_N_E=n}]);