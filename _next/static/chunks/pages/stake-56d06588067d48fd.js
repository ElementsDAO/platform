(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[797],{54997:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stake",function(){return n(28748)}])},28748:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return X}});var a=n(34051),i=n.n(a),r=n(85893),s=n(67294),u=n(9008),o=n.n(u),p=n(41664),y=n.n(p),l=n(11163),d=n(3283),m=n.n(d),c=n(77044),f=n(63366),b=n(87462),T=n(86010),v=n(70005),w=n(27623),k=n(11496),x=n(36594);function h(e){return(0,x.Z)("MuiCardMedia",e)}(0,n(38959).Z)("MuiCardMedia",["root","media","img"]);const M=["children","className","component","image","src","style"],g=(0,k.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e,{isMediaComponent:a,isImageComponent:i}=n;return[t.root,a&&t.media,i&&t.img]}})((({ownerState:e})=>(0,b.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"}))),I=["video","audio","picture","iframe","img"],S=["picture","img"];var _=s.forwardRef((function(e,t){const n=(0,w.Z)({props:e,name:"MuiCardMedia"}),{children:a,className:i,component:s="div",image:u,src:o,style:p}=n,y=(0,f.Z)(n,M),l=-1!==I.indexOf(s),d=!l&&u?(0,b.Z)({backgroundImage:`url("${u}")`},p):p,m=(0,b.Z)({},n,{component:s,isMediaComponent:l,isImageComponent:-1!==S.indexOf(s)}),c=(e=>{const{classes:t,isMediaComponent:n,isImageComponent:a}=e,i={root:["root",n&&"media",a&&"img"]};return(0,v.Z)(i,h,t)})(m);return(0,r.jsx)(g,(0,b.Z)({className:(0,T.Z)(c.root,i),as:s,role:!l&&u?"img":void 0,ref:t,style:d,ownerState:m,src:l?u||o:void 0},y,{children:a}))})),Z=n(15861),C=n(83321),E=n(86886),j=n(66242),N=n(44267),O=n(22729),A=n(5806);function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function R(e,t,n,a,i,r,s){try{var u=e[r](s),o=u.value}catch(p){return void n(p)}u.done?t(o):Promise.resolve(o).then(a,i)}function F(e){return function(){var t=this,n=arguments;return new Promise((function(a,i){var r=e.apply(t,n);function s(e){R(r,a,i,s,u,"next",e)}function u(e){R(r,a,i,s,u,"throw",e)}s(void 0)}))}}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,i,r=[],s=!0,u=!1;try{for(n=n.call(e);!(s=(a=n.next()).done)&&(r.push(a.value),!t||r.length!==t);s=!0);}catch(o){u=!0,i=o}finally{try{s||null==n.return||n.return()}finally{if(u)throw i}}return r}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return B(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return B(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var U=n(18111),L=n(51123),J=n(65149),W={stake:0,rewards:0},X=function(){var e=(0,l.useRouter)(),t=(0,c.Ge)(),n=t.account,a=t.library,u=t.chainId,p=P(s.useState(void 0),2),d=p[0],f=p[1],b=P(s.useState(void 0),2),T=b[0],v=b[1],w=P(s.useState(void 0),2),k=w[0],x=w[1],h=P(s.useState(void 0),2),M=h[0],g=h[1],I=P(s.useState(void 0),2),S=I[0],B=I[1],R=P(s.useState(void 0),2),X=R[0],$=R[1],z=P(s.useState(W),2),D=z[0],G=z[1],H=function(){var e=F(i().mark((function e(t,n){var a,r,s,u,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new(m())(n.provider),r=new a.eth.Contract(U,O.Z.contracts.elements),s=new a.eth.Contract(L,O.Z.contracts.nftStake),u=new a.eth.Contract(J,O.Z.contracts.nft),e.next=6,r.methods.balanceOf(t).call();case 6:return o=e.sent,f(r),x(s),g(u),B(o),e.next=13,u.methods.walletOfOwner(t).call();case 13:return o=e.sent,v(o),e.next=17,s.methods.getStakeContractBalance().call();case 17:return o=e.sent,$(o),e.next=21,s.methods.receipt(1).call();case 21:return o=e.sent,e.next=24,s.methods.getCurrentStakeEarned(1).call();case 24:return o=e.sent,e.next=27,r.methods.getDepositInfo(t).call();case 27:o=e.sent,G({stake:o[0],rewards:o[1]});case 29:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Y=function(){var t=F(i().mark((function t(){var a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=S,t.next=4,d.methods.approve(O.Z.contracts.elements,a).send({from:n});case 4:return t.next=6,d.methods.deposit(a).send({from:n});case 6:e.reload(),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log("error",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}(),q=function(){var t=F(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,M.methods.approve(O.Z.contracts.nftStake,1).send({from:n});case 3:return t.sent,t.next=6,k.methods.stakeNFT([1]).send({from:n});case 6:t.sent,e.reload(),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log("error",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}(),K=function(){var t=F(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.methods.unStakeNFT(1).send({from:n});case 3:e.reload(),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log("error",t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}();return s.useEffect((function(){return n&&a&&H(n,a),null}),[n,a,u]),(0,r.jsxs)(A.Z,{children:[(0,r.jsx)(o(),{children:(0,r.jsx)("title",{children:"Stake"})}),(0,r.jsxs)("section",{children:[(0,r.jsx)(Z.Z,{variant:"h2",color:"text.primary",children:"Stake ELE Tokens."}),(0,r.jsx)(Z.Z,{variant:"body2",color:"text.primary",children:"Here you can get stake your ELE tokens to earn some rewards."}),(0,r.jsxs)(Z.Z,{variant:"body2",color:"text.primary",children:["Balance: ",S," ELE"]}),(0,r.jsxs)(Z.Z,{variant:"body2",color:"text.primary",children:["Staked ELE: ",D.stake]}),(0,r.jsxs)(Z.Z,{variant:"body2",color:"text.primary",children:["Rewards: ",D.rewards]}),(0,r.jsx)(C.Z,{onClick:function(){return Y()},children:"Stake"})]}),(0,r.jsxs)("section",{children:[(0,r.jsx)(Z.Z,{variant:"h2",color:"text.primary",children:"Stake Elementary Energy NFTs."}),(0,r.jsxs)(Z.Z,{gutterBottom:!0,variant:"h6",children:["poolBalance:",X]}),0===(null===T||void 0===T?void 0:T.length)?(0,r.jsx)(Z.Z,{gutterBottom:!0,variant:"h6",children:"You don't own any Elementary Energy NFTs yet :("}):(0,r.jsx)(E.ZP,{container:!0,spacing:6,children:null===T||void 0===T?void 0:T.flatMap((function(e){return(0,r.jsx)(E.ZP,{item:!0,xs:2,sm:3,md:4,children:(0,r.jsx)(y(),{href:"https://elementary.energy/nfts/".concat(e),children:(0,r.jsxs)(j.Z,{sx:{minWidth:"100%",cursor:"pointer",bgcolor:"rgba(0,0,0,0.5)"},children:[(0,r.jsx)(_,{image:"https://elementary.energy/nfts/".concat(e)}),(0,r.jsx)(N.Z,{sx:{p:4,pb:"12px !important"},children:(0,r.jsx)(Z.Z,{variant:"h6",mb:0,children:"Elementary Energy NFT #".concat(e)})})]})})},e)}))}),(0,r.jsx)(C.Z,{onClick:function(){return q()},children:"Stake NFT"}),(0,r.jsx)(C.Z,{onClick:function(){return K()},children:"UnStake NFT"})]})]})}},65149:function(e){"use strict";e.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"},{"internalType":"address[]","name":"_recipient","type":"address[]"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address[]","name":"_recipient","type":"address[]"}],"name":"airdrop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"removeWhitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setmaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"whitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]')},51123:function(e){"use strict";e.exports=JSON.parse('[{"inputs":[{"internalType":"contract IERC721","name":"_nftToken","type":"address"},{"internalType":"contract IERC20","name":"_erc20Token","type":"address"},{"internalType":"address","name":"_daoAdmin","type":"address"},{"internalType":"uint256","name":"_tokensPerBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"staker","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"NftStaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"staker","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"NftUnStaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"staker","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"stakeAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fromBlock","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"toBlock","type":"uint256"}],"name":"StakePayout","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"rewardPerBlock","type":"uint256"}],"name":"StakeRewardUpdated","type":"event"},{"inputs":[{"internalType":"uint256","name":"_tokensPerBlock","type":"uint256"}],"name":"changeTokensPerblock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"daoAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"erc20Token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getCurrentStakeEarned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStakeContractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"nftToken","outputs":[{"internalType":"contract IERC721","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"receipt","outputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"stakedFromBlock","type":"uint256"},{"internalType":"address","name":"owner","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reclaimTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenId","type":"uint256[]"}],"name":"stakeNFT","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"tokensPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"unStakeNFT","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokensPerBlock","type":"uint256"}],"name":"updateStakingReward","outputs":[],"stateMutability":"nonpayable","type":"function"}]')}},function(e){e.O(0,[364,851,806,774,888,179],(function(){return t=54997,e(e.s=t);var t}));var t=e.O();_N_E=t}]);