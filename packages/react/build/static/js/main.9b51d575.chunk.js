(this["webpackJsonp@auction-dapp/react"]=this["webpackJsonp@auction-dapp/react"]||[]).push([[0],{204:function(e){e.exports=JSON.parse('{"a":{"3":{"events":{},"links":{},"address":"0xeFec9532356B8B143a00B463E3fD81203be01990","transactionHash":"0x9bb819f5e7ffa22b37d66ebabd4a9ab5de5d41b14804d903246cd953332ed203"},"1337":{"events":{},"links":{},"address":"0x6b7416a1E76B486911e09fddD6C9be1e16DEfcE5","transactionHash":"0x7739d23edf17759fbc95e896ca1a1714c7ce0ba315fb035c4aac517765ed1713"},"5777":{"events":{},"links":{},"address":"0x73F60641F2182Af3038B9DAfc433F85B69E208F1","transactionHash":"0x61e7ff8f8cdc3587932fd751b172c51c6cecbb164914c46f15fa236779174084"}}}')},276:function(e,f){},438:function(e,f){},441:function(e,f){},455:function(e,f,t){},456:function(e,f,t){"use strict";t.r(f);var n=t(13),a=t.n(n),c=t(196),r=t.n(c),i=t(11);var b=function(){return Object(i.jsxs)("header",{className:"container-fluid",children:[Object(i.jsxs)("hgroup",{children:[Object(i.jsx)("h1",{children:"Ad Auction.eth"}),Object(i.jsx)("h2",{children:"React with ethers.js"})]}),Object(i.jsx)("p",{children:"You can overwrite these ads. Try it !"}),Object(i.jsx)("p",{children:Object(i.jsxs)("mark",{children:["Please make sure that your metamask wallet is"," ",Object(i.jsx)("a",{href:"https://medium.com/compound-finance/the-beginners-guide-to-using-an-ethereum-test-network-95bbbc85fc1d",target:"_blank",rel:"noreferrer",children:"connected Ropsten Network."})]})})]})},s=t(49),o=t(34),u=t(52),d=t(57),l=t(1),p=t.n(l),j=t(98),h=t(70),m=t(4),O=t(5),g=t(120),y=t(26),v=t(23),x=t(6),w=t(7),k=t(68),C=t(75),T=[{inputs:[{internalType:"uint256",name:"length",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"ads",outputs:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"string",name:"title",type:"string"},{internalType:"string",name:"imageCID",type:"string"},{internalType:"string",name:"description",type:"string"},{internalType:"string",name:"siteUrl",type:"string"},{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"price",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"ids",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"lastId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"getAd",outputs:[{components:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"string",name:"title",type:"string"},{internalType:"string",name:"imageCID",type:"string"},{internalType:"string",name:"description",type:"string"},{internalType:"string",name:"siteUrl",type:"string"},{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"price",type:"uint256"}],internalType:"struct Ads.Ad",name:"",type:"tuple"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"getAds",outputs:[{components:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"string",name:"title",type:"string"},{internalType:"string",name:"imageCID",type:"string"},{internalType:"string",name:"description",type:"string"},{internalType:"string",name:"siteUrl",type:"string"},{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"price",type:"uint256"}],internalType:"struct Ads.Ad[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"string",name:"title",type:"string"},{internalType:"string",name:"imageCID",type:"string"},{internalType:"string",name:"description",type:"string"},{internalType:"string",name:"siteUrl",type:"string"}],name:"buy",outputs:[],stateMutability:"payable",type:"function",payable:!0},{inputs:[{internalType:"uint256",name:"length",type:"uint256"}],name:"expand",outputs:[],stateMutability:"nonpayable",type:"function"}],S="0x60806040523480156200001157600080fd5b50604051620018cc380380620018cc83398181016040528101906200003791906200013e565b62000048816200004f60201b60201c565b506200024a565b600060016002546200006291906200019f565b9050600082826200007491906200019f565b905060008290505b81811015620000f8576001819080600181540180825580915050600190039060005260206000200160009091909190915055806000808381526020019081526020016000206000018190555060026000815480929190620000dd90620001fc565b91905055508080620000ef90620001fc565b9150506200007c565b50505050565b600080fd5b6000819050919050565b620001188162000103565b81146200012457600080fd5b50565b60008151905062000138816200010d565b92915050565b600060208284031215620001575762000156620000fe565b5b6000620001678482850162000127565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620001ac8262000103565b9150620001b98362000103565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620001f157620001f062000170565b5b828201905092915050565b6000620002098262000103565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156200023f576200023e62000170565b5b600182019050919050565b611672806200025a6000396000f3fe6080604052600436106100705760003560e01c80637ede1c071161004e5780637ede1c071461010c578063c1292cc314610149578063fab11b8214610174578063fac333ac1461019057610070565b80630955ae991461007557806311a7a4c0146100a0578063682904a5146100e3575b600080fd5b34801561008157600080fd5b5061008a6101cd565b604051610097919061104e565b60405180910390f35b3480156100ac57600080fd5b506100c760048036038101906100c291906110b0565b610568565b6040516100da9796959493929190611145565b60405180910390f35b3480156100ef57600080fd5b5061010a600480360381019061010591906110b0565b6107ea565b005b34801561011857600080fd5b50610133600480360381019061012e91906110b0565b61088f565b6040516101409190611281565b60405180910390f35b34801561015557600080fd5b5061015e610b6d565b60405161016b91906112a3565b60405180910390f35b61018e600480360381019061018991906113f3565b610b73565b005b34801561019c57600080fd5b506101b760048036038101906101b291906110b0565b610cce565b6040516101c491906112a3565b60405180910390f35b6060600060025467ffffffffffffffff8111156101ed576101ec6112c8565b5b60405190808252806020026020018201604052801561022657816020015b610213610cf2565b81526020019060019003908161020b5790505b50905060005b6002548110156105605760006001828154811061024c5761024b6114de565b5b9060005260206000200154905060008060008381526020019081526020016000206040518060e0016040529081600082015481526020016001820180546102929061153c565b80601f01602080910402602001604051908101604052809291908181526020018280546102be9061153c565b801561030b5780601f106102e05761010080835404028352916020019161030b565b820191906000526020600020905b8154815290600101906020018083116102ee57829003601f168201915b505050505081526020016002820180546103249061153c565b80601f01602080910402602001604051908101604052809291908181526020018280546103509061153c565b801561039d5780601f106103725761010080835404028352916020019161039d565b820191906000526020600020905b81548152906001019060200180831161038057829003601f168201915b505050505081526020016003820180546103b69061153c565b80601f01602080910402602001604051908101604052809291908181526020018280546103e29061153c565b801561042f5780601f106104045761010080835404028352916020019161042f565b820191906000526020600020905b81548152906001019060200180831161041257829003601f168201915b505050505081526020016004820180546104489061153c565b80601f01602080910402602001604051908101604052809291908181526020018280546104749061153c565b80156104c15780601f10610496576101008083540402835291602001916104c1565b820191906000526020600020905b8154815290600101906020018083116104a457829003601f168201915b505050505081526020016005820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016006820154815250509050808484815181106105405761053f6114de565b5b6020026020010181905250505080806105589061159d565b91505061022c565b508091505090565b60006020528060005260406000206000915090508060000154908060010180546105919061153c565b80601f01602080910402602001604051908101604052809291908181526020018280546105bd9061153c565b801561060a5780601f106105df5761010080835404028352916020019161060a565b820191906000526020600020905b8154815290600101906020018083116105ed57829003601f168201915b50505050509080600201805461061f9061153c565b80601f016020809104026020016040519081016040528092919081815260200182805461064b9061153c565b80156106985780601f1061066d57610100808354040283529160200191610698565b820191906000526020600020905b81548152906001019060200180831161067b57829003601f168201915b5050505050908060030180546106ad9061153c565b80601f01602080910402602001604051908101604052809291908181526020018280546106d99061153c565b80156107265780601f106106fb57610100808354040283529160200191610726565b820191906000526020600020905b81548152906001019060200180831161070957829003601f168201915b50505050509080600401805461073b9061153c565b80601f01602080910402602001604051908101604052809291908181526020018280546107679061153c565b80156107b45780601f10610789576101008083540402835291602001916107b4565b820191906000526020600020905b81548152906001019060200180831161079757829003601f168201915b5050505050908060050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060060154905087565b600060016002546107fb91906115e6565b90506000828261080b91906115e6565b905060008290505b818110156108895760018190806001815401808255809150506001900390600052602060002001600090919091909150558060008083815260200190815260200160002060000181905550600260008154809291906108719061159d565b919050555080806108819061159d565b915050610813565b50505050565b610897610cf2565b6000808381526020019081526020016000206040518060e0016040529081600082015481526020016001820180546108ce9061153c565b80601f01602080910402602001604051908101604052809291908181526020018280546108fa9061153c565b80156109475780601f1061091c57610100808354040283529160200191610947565b820191906000526020600020905b81548152906001019060200180831161092a57829003601f168201915b505050505081526020016002820180546109609061153c565b80601f016020809104026020016040519081016040528092919081815260200182805461098c9061153c565b80156109d95780601f106109ae576101008083540402835291602001916109d9565b820191906000526020600020905b8154815290600101906020018083116109bc57829003601f168201915b505050505081526020016003820180546109f29061153c565b80601f0160208091040260200160405190810160405280929190818152602001828054610a1e9061153c565b8015610a6b5780601f10610a4057610100808354040283529160200191610a6b565b820191906000526020600020905b815481529060010190602001808311610a4e57829003601f168201915b50505050508152602001600482018054610a849061153c565b80601f0160208091040260200160405190810160405280929190818152602001828054610ab09061153c565b8015610afd5780601f10610ad257610100808354040283529160200191610afd565b820191906000526020600020905b815481529060010190602001808311610ae057829003601f168201915b505050505081526020016005820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016006820154815250509050919050565b60025481565b600080868152602001908152602001600020600601543411610b9457600080fd5b60006040518060e001604052808781526020018681526020018581526020018481526020018381526020013373ffffffffffffffffffffffffffffffffffffffff16815260200134815250905080600080888152602001908152602001600020600082015181600001556020820151816001019080519060200190610c1a929190610d45565b506040820151816002019080519060200190610c37929190610d45565b506060820151816003019080519060200190610c54929190610d45565b506080820151816004019080519060200190610c71929190610d45565b5060a08201518160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060c08201518160060155905050505050505050565b60018181548110610cde57600080fd5b906000526020600020016000915090505481565b6040518060e001604052806000815260200160608152602001606081526020016060815260200160608152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b828054610d519061153c565b90600052602060002090601f016020900481019282610d735760008555610dba565b82601f10610d8c57805160ff1916838001178555610dba565b82800160010185558215610dba579182015b82811115610db9578251825591602001919060010190610d9e565b5b509050610dc79190610dcb565b5090565b5b80821115610de4576000816000905550600101610dcc565b5090565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000819050919050565b610e2781610e14565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610e67578082015181840152602081019050610e4c565b83811115610e76576000848401525b50505050565b6000601f19601f8301169050919050565b6000610e9882610e2d565b610ea28185610e38565b9350610eb2818560208601610e49565b610ebb81610e7c565b840191505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610ef182610ec6565b9050919050565b610f0181610ee6565b82525050565b600060e083016000830151610f1f6000860182610e1e565b5060208301518482036020860152610f378282610e8d565b91505060408301518482036040860152610f518282610e8d565b91505060608301518482036060860152610f6b8282610e8d565b91505060808301518482036080860152610f858282610e8d565b91505060a0830151610f9a60a0860182610ef8565b5060c0830151610fad60c0860182610e1e565b508091505092915050565b6000610fc48383610f07565b905092915050565b6000602082019050919050565b6000610fe482610de8565b610fee8185610df3565b93508360208202850161100085610e04565b8060005b8581101561103c578484038952815161101d8582610fb8565b945061102883610fcc565b925060208a01995050600181019050611004565b50829750879550505050505092915050565b600060208201905081810360008301526110688184610fd9565b905092915050565b6000604051905090565b600080fd5b600080fd5b61108d81610e14565b811461109857600080fd5b50565b6000813590506110aa81611084565b92915050565b6000602082840312156110c6576110c561107a565b5b60006110d48482850161109b565b91505092915050565b6110e681610e14565b82525050565b600082825260208201905092915050565b600061110882610e2d565b61111281856110ec565b9350611122818560208601610e49565b61112b81610e7c565b840191505092915050565b61113f81610ee6565b82525050565b600060e08201905061115a600083018a6110dd565b818103602083015261116c81896110fd565b9050818103604083015261118081886110fd565b9050818103606083015261119481876110fd565b905081810360808301526111a881866110fd565b90506111b760a0830185611136565b6111c460c08301846110dd565b98975050505050505050565b600060e0830160008301516111e86000860182610e1e565b50602083015184820360208601526112008282610e8d565b9150506040830151848203604086015261121a8282610e8d565b915050606083015184820360608601526112348282610e8d565b9150506080830151848203608086015261124e8282610e8d565b91505060a083015161126360a0860182610ef8565b5060c083015161127660c0860182610e1e565b508091505092915050565b6000602082019050818103600083015261129b81846111d0565b905092915050565b60006020820190506112b860008301846110dd565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61130082610e7c565b810181811067ffffffffffffffff8211171561131f5761131e6112c8565b5b80604052505050565b6000611332611070565b905061133e82826112f7565b919050565b600067ffffffffffffffff82111561135e5761135d6112c8565b5b61136782610e7c565b9050602081019050919050565b82818337600083830152505050565b600061139661139184611343565b611328565b9050828152602081018484840111156113b2576113b16112c3565b5b6113bd848285611374565b509392505050565b600082601f8301126113da576113d96112be565b5b81356113ea848260208601611383565b91505092915050565b600080600080600060a0868803121561140f5761140e61107a565b5b600061141d8882890161109b565b955050602086013567ffffffffffffffff81111561143e5761143d61107f565b5b61144a888289016113c5565b945050604086013567ffffffffffffffff81111561146b5761146a61107f565b5b611477888289016113c5565b935050606086013567ffffffffffffffff8111156114985761149761107f565b5b6114a4888289016113c5565b925050608086013567ffffffffffffffff8111156114c5576114c461107f565b5b6114d1888289016113c5565b9150509295509295909350565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061155457607f821691505b602082108114156115685761156761150d565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006115a882610e14565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156115db576115da61156e565b5b600182019050919050565b60006115f182610e14565b91506115fc83610e14565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156116315761163061156e565b5b82820190509291505056fea2646970667358221220e4144960afb0992250cdb569c84e16a80aee52998b56aed44cc56b571ed3d35664736f6c634300080b0033",I=function(e){return e.length>1},A=function(e){Object(x.a)(t,e);var f=Object(w.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return I(a)?(e=f.call.apply(f,[this].concat(a))).contractName=void 0:(e=f.call(this,T,S,a[0])).contractName=void 0,e.contractName="Ads",Object(g.a)(e)}return Object(O.a)(t,[{key:"deploy",value:function(e,f){return Object(y.a)(Object(v.a)(t.prototype),"deploy",this).call(this,e,f||{})}},{key:"getDeployTransaction",value:function(e,f){return Object(y.a)(Object(v.a)(t.prototype),"getDeployTransaction",this).call(this,e,f||{})}},{key:"attach",value:function(e){return Object(y.a)(Object(v.a)(t.prototype),"attach",this).call(this,e)}},{key:"connect",value:function(e){return Object(y.a)(Object(v.a)(t.prototype),"connect",this).call(this,e)}}],[{key:"createInterface",value:function(){return new k.utils.Interface(T)}},{key:"connect",value:function(e,f){return new C.b(e,T,f)}}]),t}(C.c);A.contractName=void 0,A.bytecode=S,A.abi=T;var D,E,B,P,N=t(461),U={ropsten:"3",localhost:"1337"},q={ropsten:"3",localhost:"1337"},F=t(50),L=Object(n.createContext)({isInstalled:!!window.ethereum,provider:window.ethereum,signer:void 0,currentAccount:"",isConnecting:!1,isConnected:!1,chainId:"3",networkId:"3"}),M=function(e){var f=e.children,t=function(){var e=Object(n.useState)(!1),f=Object(o.a)(e,2),t=f[0],a=f[1],c=Object(n.useState)(void 0),r=Object(o.a)(c,2),i=r[0],b=r[1],s=Object(n.useState)(void 0),u=Object(o.a)(s,2),l=u[0],j=u[1],h=Object(n.useState)(null===l||void 0===l?void 0:l.getSigner()),m=Object(o.a)(h,2),O=m[0],g=m[1],y=Object(n.useState)(""),v=Object(o.a)(y,2),x=v[0],w=v[1],C=Object(n.useState)(!1),T=Object(o.a)(C,2),S=T[0],I=T[1],A=Object(n.useState)(!1),D=Object(o.a)(A,2),E=D[0],B=D[1],P=Object(n.useState)("3"),N=Object(o.a)(P,2),q=N[0],F=N[1],L=Object(n.useState)("3"),M=Object(o.a)(L,2),R=M[0],H=M[1],_={isInstalled:t,provider:i,signer:O,currentAccount:x,isConnecting:S,isConnected:E,chainId:q,networkId:R},J=function(){var e=Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I(!0),e.next=3,i.request({method:"eth_requestAccounts",params:[]});case 3:I(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(!!window.ethereum),b((function(){return window.ethereum})),j(new k.providers.Web3Provider(i,"any"));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(d.a)(p.a.mark((function e(){var f,t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(null===l||void 0===l?void 0:l.getSigner()),e.next=3,null===i||void 0===i?void 0:i.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x"+Number(q).toString(16)}]});case 3:return null===i||void 0===i||i.on("accountsChanged",z),null===i||void 0===i||i.on("chainChanged",G),e.next=7,null===l||void 0===l?void 0:l.listAccounts();case 7:if(e.t1=f=e.sent,e.t0=null!==e.t1,!e.t0){e.next=11;break}e.t0=void 0!==f;case 11:if(!e.t0){e.next=15;break}e.t2=f,e.next=16;break;case 15:e.t2=[];case 16:return 0===(t=e.t2).length?console.info("Please Connect to Metamask"):x!==t[0]&&(b(i),B(!0),w(t[0]),F(q),H(R)),e.abrupt("return",(function(){E&&(i.removeListener("accountsChanged",z),i.removeListener("chainChanged",G))}));case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(e){0===e.length?(console.warn("No Accounts were found"),B(!1),w("")):x!==e[0]&&(w(e[0]),g(null===l||void 0===l?void 0:l.getSigner(e[0]))),console.info("accounts changed",e[0])},G=function(e){var f=Number(e).toString();Object.values(U).some((function(e){return e===f}))||console.error("This network is not available in this app"),console.info("chain changed",f),F(f),i.request({method:"net_version",params:[]}).then((function(e){H(e)}))};return{metamaskState:_,web3:l,connectRequest:J,setupProvider:Y,setupChain:W,onUnmount:function(){E&&(i.removeListener("accountsChanged",z),i.removeListener("chainChanged",G))}}}(),a=t.metamaskState,c=t.connectRequest,r=t.setupProvider,b=t.setupChain,s=t.onUnmount,u=Object(N.a)(r,[a.isInstalled]),l=Object(N.a)(b,[u]);Object(n.useEffect)((function(){return s}));var j=function(){return Object(i.jsx)(L.Provider,{value:a,children:a.isConnected?f:l.loading?null:l.error?Object(i.jsx)("dialog",{children:Object(i.jsxs)("article",{children:["Error: ",l.error.message]})}):Object(i.jsx)(R,{children:Object(i.jsx)(H,{"area-busy":"".concat(a.isConnecting),onClick:c,children:"Connect Your Wallet"})})})},h=function(){return Object(i.jsx)(R,{children:Object(i.jsx)(_,{role:"button",href:"https://metamask.app.link/dapp/maguroid.github.io/ad-auction-dapp/",children:"Please install Metamask"})})};return a.isInstalled?Object(i.jsx)(j,{}):Object(i.jsx)(h,{})},R=F.a.div(D||(D=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 80vh;\n"]))),H=F.a.button(E||(E=Object(s.a)(["\n  display: inline-block;\n  width: auto;\n"]))),_=F.a.a(B||(B=Object(s.a)(["\n  display: inline-block;\n  width: auto;\n"]))),J=t(204),Y=function(){var e=Object(n.useContext)(L),f=e.currentAccount,t=e.networkId,a=e.signer,c=Object(n.useState)(void 0),r=Object(o.a)(c,2),i=r[0],b=r[1],s=function(){var e=Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===i||void 0===i?void 0:i.getAds();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(d.a)(p.a.mark((function e(f){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===i||void 0===i?void 0:i.getAd(f);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(f){return e.apply(this,arguments)}}(),l=function(){var e=Object(d.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,null===i||void 0===i?void 0:i.buy(t.id,t.title,t.imageCID,t.description,t.siteUrl,{from:f,value:h.a.utils.parseEther(t.ether)});case 3:return n=e.sent,e.abrupt("return",n);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(f){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){!function(){var e=Object.values(q).find((function(e){return t===e}));if(a&&e){var f=J.a[e].address;b(A.connect(f,a))}else b(void 0)}()}),[t,a]),{adsContract:i,getAds:s,getAd:u,buy:l}},W=t(24),z=t(205);function G(e){var f=e.ad,t=e.callBack,a=function(e,f){var t=Object(n.useState)(),a=Object(o.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(""),b=Object(o.a)(i,2),s=b[0],l=b[1],h=Object(n.useState)({id:e,title:"",image:void 0,description:"",siteUrl:"",ether:""}),m=Object(o.a)(h,2),O=m[0],g=m[1],y=Y(),v=y.buy,x=y.getAd,w=function(){var e=Object(d.a)(p.a.mark((function e(t){var n,a,r,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),void 0!==c){e.next=4;break}return console.error("Error: image was not selected"),e.abrupt("return");case 4:return e.next=6,x(O.id);case 6:return n=e.sent,e.prev=7,e.next=10,j.b.add(c);case 10:return a=e.sent,r=a.cid,e.next=14,v(Object(u.a)(Object(u.a)({},O),{},{imageCID:r.toString()}));case 14:i=e.sent,console.info("Buying Success!: ",i),e.next=22;break;case 18:return e.prev=18,e.t0=e.catch(7),console.error("Buying failed: ",e.t0),e.abrupt("return");case 22:if(f(),null===n||void 0===n||!n.imageCID){e.next=32;break}return e.prev=24,e.next=27,j.b.pin.rm(n.imageCID);case 27:e.next=32;break;case 29:e.prev=29,e.t1=e.catch(24),console.error("unpin failed: ",e.t1);case 32:case"end":return e.stop()}}),e,null,[[7,18],[24,29]])})));return function(f){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){void 0!==c&&l(URL.createObjectURL(c))}),[c]),{image:c,setImage:r,imageSrc:s,setImageSrc:l,request:O,setRequest:g,onSubmit:w}}(f.id,t),c=a.image,r=a.imageSrc,b=a.request,s=a.setImage,l=a.setRequest,m=a.onSubmit,O=null===c||void 0===c?void 0:c.name,g=Object(n.useCallback)((function(){return W.a.from(f.price).add(Object(z.parseUnits)("0.0001","ether"))}),[f]);return Object(i.jsxs)("form",{onSubmit:m,children:[Object(i.jsxs)("section",{children:[Object(i.jsx)("h3",{children:"Proceed with the transaction"}),Object(i.jsx)("p",{children:"It should take few minutes to reflect your buying. Please wait..."})]}),Object(i.jsxs)("section",{children:[Object(i.jsx)("h4",{children:"Current Price:"}),Object(i.jsxs)("b",{children:[h.a.utils.formatEther(f.price),"ETH"]})]}),Object(i.jsxs)("section",{children:[Object(i.jsxs)("label",{htmlFor:"ether",children:[Object(i.jsx)("b",{children:"Enter amount (ETH)"}),Object(i.jsx)("input",{type:"number",min:h.a.utils.formatEther(g()),placeholder:h.a.utils.formatEther(g()),step:"0.0001",required:!0,onChange:function(e){return l((function(f){return Object(u.a)(Object(u.a)({},f),{},{ether:e.target.value})}))}})]}),Object(i.jsx)("section",{}),Object(i.jsx)("section",{children:Object(i.jsxs)("label",{htmlFor:"image",children:[Object(i.jsx)("b",{children:"Select your AD's image"}),Object(i.jsx)("input",{className:"hidden",type:"file",onChange:function(e){var f;return s(null===(f=e.currentTarget.files)||void 0===f?void 0:f[0])},id:"image",name:"image",accept:"image/*",required:!0})]})})]}),Object(i.jsxs)("section",{children:[Object(i.jsx)("p",{children:Object(i.jsx)("b",{children:"filename"})}),Object(i.jsx)("p",{children:null===c||void 0===c?void 0:c.name})]}),Object(i.jsxs)("section",{children:[Object(i.jsx)("b",{children:"Preview"}),Object(i.jsx)($,{src:r,alt:O})]}),Object(i.jsx)("section",{children:Object(i.jsxs)("label",{htmlFor:"title",children:[Object(i.jsx)("b",{children:"Title"}),Object(i.jsx)("input",{type:"text",id:"title",name:"title",value:b.title,placeholder:"ex. New Products are released !",maxLength:60,required:!0,onChange:function(e){return l((function(f){return Object(u.a)(Object(u.a)({},f),{},{title:e.target.value})}))}})]})}),Object(i.jsxs)("section",{children:[Object(i.jsx)("label",{htmlFor:"site-url",children:Object(i.jsx)("b",{children:"Your Site URL"})}),Object(i.jsx)("input",{type:"text",id:"site-url",name:"site-url",value:b.siteUrl,placeholder:"ex. https://github.com/maguroid",required:!0,onChange:function(e){return l((function(f){return Object(u.a)(Object(u.a)({},f),{},{siteUrl:e.target.value})}))}})]}),Object(i.jsx)("section",{children:Object(i.jsxs)("label",{htmlFor:"description",children:[Object(i.jsx)("b",{children:"AD's description"}),Object(i.jsx)("textarea",{id:"description",name:"description",value:b.description,placeholder:"ex. Awesome Project has been launched! Check it out!",maxLength:300,required:!0,onChange:function(e){return l((function(f){return Object(u.a)(Object(u.a)({},f),{},{description:e.target.value})}))}})]})}),Object(i.jsxs)("footer",{children:[Object(i.jsx)("input",{type:"submit",value:"Confirm"}),Object(i.jsx)("button",{type:"button",className:"secondary",onClick:t,children:"Cancel"})]})]})}var Q,V,K,X,Z,$=F.a.img(P||(P=Object(s.a)(["\n  display: block;\n  margin: 0 auto;\n"]))),ee=t.p+"static/media/no-image.606b3da9.png";var fe=F.a.div(Q||(Q=Object(s.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n\n  @media screen and (max-width: 768px) {\n    justify-content: center;\n  }\n"]))),te=F.a.img(V||(V=Object(s.a)(["\n  height: 300px;\n  transition: 0.5s ease;\n  object-fit: contain;\n  margin-bottom: 30px;\n"]))),ne=F.a.div(K||(K=Object(s.a)(["\n  width: 30%;\n  &:hover "," {\n    opacity: 0.3;\n  }\n\n  @media screen and (max-width: 768px) {\n    width: 90%;\n  }\n"])),te),ae=F.a.article(X||(X=Object(s.a)(["\n  margin-top: 0;\n  word-break: break-all;\n  text-overflow: ellipsis;\n"]))),ce=F.a.a(Z||(Z=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-decoration: none;\n"]))),re=function(){var e=function(){var e=Object(n.useState)(!1),f=Object(o.a)(e,2),t=f[0],a=f[1];return{Dialog:function(e){var f=e.children;return Object(i.jsx)("dialog",{open:t,children:Object(i.jsx)("article",{children:f})})},toggleDialog:function(){a(!t)}}}(),f=e.Dialog,t=e.toggleDialog,a=Object(n.useState)([]),c=Object(o.a)(a,2),r=c[0],b=c[1],s=Y().adsContract,u=Object(n.useState)({id:-1,title:"",imageCID:"",description:"",siteUrl:"",owner:"",price:-1}),d=Object(o.a)(u,2),l=d[0],p=d[1],h=Object(n.useCallback)((function(e){return""===e.imageCID?ee:Object(j.a)(e.imageCID)}),[]);return Object(n.useEffect)((function(){return null===s||void 0===s||s.getAds().then((function(e){return b(e)})).catch((function(e){console.error("failed to fetch ads",s.address,e),b([])})),function(){b([])}}),[s]),Object(i.jsxs)(fe,{className:"container-fluid",children:[Object(i.jsx)(f,{children:Object(i.jsx)(G,{ad:l,callBack:t})}),r.map((function(e){return Object(i.jsx)(ne,{children:Object(i.jsx)("section",{children:Object(i.jsxs)(ae,{children:[Object(i.jsxs)(ce,{href:e.siteUrl,target:"_blank",rel:"noreferrer","data-tooltip":"visit this site",children:[Object(i.jsx)("h3",{children:e.title?e.title:"No Sponsor here !"}),Object(i.jsx)(te,{src:h(e),alt:e.title})]}),Object(i.jsx)("p",{children:e.description?e.description:"This space is available for you ! Be a sponsor !"}),Object(i.jsx)("button",{onClick:function(){return function(e){p(e),t()}(e)},children:"Buy this Space"})]})})},e.id.toString())}))]})};var ie=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(b,{}),Object(i.jsx)(M,{children:Object(i.jsx)("main",{children:Object(i.jsx)(re,{})})})]})},be=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,462)).then((function(f){var t=f.getCLS,n=f.getFID,a=f.getFCP,c=f.getLCP,r=f.getTTFB;t(e),n(e),a(e),c(e),r(e)}))};t(454),t(455);r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(ie,{})}),document.getElementById("root")),be()},98:function(e,f,t){"use strict";(function(e){t.d(f,"b",(function(){return r})),t.d(f,"a",(function(){return i}));var n=t(197),a="ipfs.infura.io",c="Basic "+e.from("".concat("25ENoooVuh4QSki89BaPPeIpogG",":").concat("fb5a0eb521a2f7a7c04553a9ee8b80bc")).toString("base64"),r=Object(n.create)({host:a,port:"5001",protocol:"https",headers:{authorization:c}}),i=function(e){return"https://".concat(a,"/ipfs/").concat(e)}}).call(this,t(213).Buffer)}},[[456,1,2]]]);
//# sourceMappingURL=main.9b51d575.chunk.js.map