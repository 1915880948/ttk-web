(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[38],{J55r:function(e,t,a){e.exports={tag:"antd-pro-pages-transaction-trade-components-member-tag-index-tag",tagTitle:"antd-pro-pages-transaction-trade-components-member-tag-index-tagTitle",tagContent:"antd-pro-pages-transaction-trade-components-member-tag-index-tagContent",clear:"antd-pro-pages-transaction-trade-components-member-tag-index-clear"}},MmIM:function(e,t,a){"use strict";var l=a("fbTi"),n=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("yS+l");var r=n(a("GZKk"));a("bbjC");var u=n(a("kjHK"));a("sgyy");var d=n(a("wY5t"));a("bki4");var c=n(a("a64t"));a("HeWP");var o=n(a("aQmy"));a("neM1");var s=n(a("xyFX"));a("GXKo");var f=n(a("J4k6"));a("qcmJ");var i=n(a("WR96")),m=n(a("mK77")),p=n(a("43Yg")),g=n(a("/tCh")),E=n(a("scpF")),v=n(a("O/V9")),y=n(a("8aBX"));a("hKJ8");var h=n(a("Eau0"));a("EeUs");var C=n(a("MmNm")),k=l(a("i9FB")),w=a("LneV"),D=a("KEjf"),b=n(a("tsWn")),x=n(a("8OS6")),T=n(a("vuqv")),I=function(e,t,a,l){var n,r=arguments.length,u=r<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,a):l;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)u=Reflect.decorate(e,t,a,l);else for(var d=e.length-1;d>=0;d--)(n=e[d])&&(u=(r<3?n(u):r>3?n(t,a,u):n(t,a))||u);return r>3&&u&&Object.defineProperty(t,a,u),u},_=C.default.Option,S=(h.default.RangePicker,function(e){function t(e){var a;return(0,p.default)(this,t),a=(0,E.default)(this,(0,v.default)(t).call(this,e)),a.getData=function(){var e=a.state.search;a.props.dispatch({type:"trade/list",payload:(0,m.default)({},e)})},a.onChange=function(e){a.setState({search:(0,m.default)({},a.state.search,e)},function(){a.getData()})},a.onReset=function(){a.setState({search:{transID:"",orderID:"",from_mobile:"",to_mobile:"",payType:0,type:0,status:"",current_page:1,per_page:10}},function(){a.getData()})},a.editorFromUser=function(e){a.setState({memberTagModal:{modal:!0,userID:e.fromUserID}})},a.editorToUser=function(e){a.setState({memberTagModal:{modal:!0,userID:e.toUserID}})},a.toPreview=function(e){a.setState({previewModal:{modal:!0,imgSrc:e.payImg}})},a.handleCancel=function(){a.setState({memberTagModal:{modal:!1,userID:""},previewModal:{modal:!1,imgSrc:""}})},a.state={search:{transID:"",orderID:"",from_mobile:"",to_mobile:"",payType:0,type:0,status:"",current_page:1,per_page:10},memberTagModal:{modal:!1,userID:""},previewModal:{modal:!1,imgSrc:""}},a}return(0,y.default)(t,e),(0,g.default)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this,t=this.props,a=t.loading,l=t.trade,n=this.state,m=n.search,p=n.memberTagModal,g=n.previewModal,E=[{title:"\u4ea4\u6613\u7f16\u53f7",dataIndex:"transID",key:"transID",width:100,fixed:"left"},{title:"\u6240\u5c5e\u8ba2\u5355\u53f7",dataIndex:"orderID",key:"orderID",width:150},{title:"\u8d2d\u4e70\u65b9",key:"toMobile",width:150,render:function(t){return k.default.createElement("a",{onClick:function(){return e.editorToUser(t)}},t.toMobile)}},{title:"\u51fa\u552e\u65b9",key:"fromMobile",width:100,render:function(t){return k.default.createElement("a",{onClick:function(){return e.editorFromUser(t)}},t.fromMobile)}},{title:"\u6210\u4ea4\u91cf",dataIndex:"transferAmount",key:"transferAmount",width:100},{title:"\u5355\u4ef7",dataIndex:"price",key:"price",width:100},{title:"\u652f\u4ed8\u7c7b\u578b",key:"payType",width:110,render:function(e){return k.default.createElement("div",null,k.default.createElement("span",null,1===e.payType?"\u5fae\u4fe1":""),k.default.createElement("span",null,2===e.payType?"\u652f\u4ed8\u5b9d":""),k.default.createElement("span",null,3===e.payType?"\u94f6\u884c\u5361":""))}},{title:"\u4ea4\u6613\u7c7b\u578b",key:"type",width:100,render:function(e){return k.default.createElement("div",null,k.default.createElement("span",null,1===e.type?"C2C":""),k.default.createElement("span",null,2===e.type?"C2C":""),k.default.createElement("span",null,3===e.type?"\u70b9\u5bf9\u70b9":""))}},{title:"\u6253\u6b3e\u51ed\u8bc1",key:"payImg",width:150,render:function(t){return k.default.createElement("div",null,t.payImg&&k.default.createElement("img",{className:T.default.photo,src:t.payImg,onClick:function(){return e.toPreview(t)}}))}},{title:"\u4ed8\u6b3e\u53c2\u8003\u53f7",dataIndex:"payCode",key:"payCode",width:150},{title:"\u4ea4\u6613\u65f6\u95f4",key:"createTime",render:function(e){return k.default.createElement("span",null,e.createTime?new Date(1e3*parseInt(e.createTime)).toLocaleString().replace(/:\d{1,2}$/,""):"--")},width:170},{title:"\u66f4\u65b0\u65f6\u95f4",key:"updateTime",render:function(e){return k.default.createElement("span",null,e.updateTime?new Date(1e3*parseInt(e.updateTime)).toLocaleString().replace(/:\d{1,2}$/,""):"--")},width:170},{title:"\u8fc7\u671f\u65f6\u95f4",key:"expireTime",render:function(e){return k.default.createElement("span",null,e.expireTime?new Date(1e3*parseInt(e.expireTime)).toLocaleString().replace(/:\d{1,2}$/,""):"--")}},{title:"\u72b6\u6001",key:"status",width:100,fixed:"right",render:function(e){return k.default.createElement("div",null,k.default.createElement("span",null,0===e.status?"\u672a\u4ed8\u6b3e":""),k.default.createElement("span",null,1===e.status?"\u5df2\u6253\u6b3e":""),k.default.createElement("span",null,2===e.status?"\u5df2\u6536\u6b3e":""),k.default.createElement("span",null,4===e.status?"\u7533\u8bc9\u4e2d":""),k.default.createElement("span",null,5===e.status?"\u9a73\u56de":""))}}];return k.default.createElement(D.PageHeaderWrapper,null,k.default.createElement(i.default,null,k.default.createElement(f.default,null,k.default.createElement(s.default,{xxl:6,xl:6,lg:6,md:6,sm:6},k.default.createElement("span",null,"\u4ea4\u6613\u7f16\u53f7"),k.default.createElement(o.default,{className:T.default.keyword,allowClear:!0,value:m.transID,onChange:function(t){return e.onChange({transID:t.target.value.replace(/(^\s*)|(\s*$)/g,""),current_page:1})},onPressEnter:this.getData})),k.default.createElement(s.default,{xxl:6,xl:6,lg:6,md:6,sm:6},k.default.createElement("span",null,"\u8ba2\u5355\u7f16\u53f7"),k.default.createElement(o.default,{className:T.default.keyword,allowClear:!0,value:m.orderID,onChange:function(t){return e.onChange({orderID:t.target.value.replace(/(^\s*)|(\s*$)/g,""),current_page:1})},onPressEnter:this.getData})),k.default.createElement(s.default,{xxl:6,xl:6,lg:6,md:6,sm:6},k.default.createElement("span",null,"\u51fa\u552e\u8d26\u53f7"),k.default.createElement(o.default,{className:T.default.keyword,allowClear:!0,value:m.from_mobile,onChange:function(t){return e.onChange({from_mobile:t.target.value.replace(/(^\s*)|(\s*$)/g,""),current_page:1})},onPressEnter:this.getData})),k.default.createElement(s.default,{xxl:6,xl:6,lg:6,md:6,sm:6},k.default.createElement("span",null,"\u8d2d\u4e70\u8d26\u53f7"),k.default.createElement(o.default,{className:T.default.keyword,allowClear:!0,value:m.to_mobile,onChange:function(t){return e.onChange({to_mobile:t.target.value.replace(/(^\s*)|(\s*$)/g,""),current_page:1})},onPressEnter:this.getData}))),k.default.createElement(f.default,{style:{marginTop:20}},k.default.createElement(s.default,{xxl:6,xl:6,lg:6,md:6,sm:6},k.default.createElement("span",null,"\u8ba2\u5355\u7c7b\u578b"),k.default.createElement(C.default,{defaultValue:"",className:T.default.type,dropdownClassName:T.default.type,value:m.type,onChange:function(t){return e.onChange({type:t,current_page:1})}},k.default.createElement(_,{value:0},"\u5168\u90e8"),k.default.createElement(_,{value:2},"c2c"),k.default.createElement(_,{value:3},"\u70b9\u5bf9\u70b9"))),k.default.createElement(s.default,{xxl:6,xl:6,lg:6,md:6,sm:6},k.default.createElement("span",null,"\u4ed8\u6b3e\u65b9\u5f0f"),k.default.createElement(C.default,{defaultValue:"",className:T.default.type,dropdownClassName:T.default.type,value:m.payType,onChange:function(t){return e.onChange({payType:t,current_page:1})}},k.default.createElement(_,{value:0},"\u5168\u90e8"),k.default.createElement(_,{value:1},"\u5fae\u4fe1"),k.default.createElement(_,{value:2},"\u652f\u4ed8\u5b9d"),k.default.createElement(_,{value:3},"\u94f6\u884c\u5361"))),k.default.createElement(s.default,{xxl:6,xl:6,lg:6,md:6,sm:6},k.default.createElement("span",null,"\u652f\u4ed8\u72b6\u6001"),k.default.createElement(C.default,{defaultValue:"",className:T.default.type,dropdownClassName:T.default.type,value:m.status,onChange:function(t){return e.onChange({status:t,current_page:1})}},k.default.createElement(_,{value:""},"\u5168\u90e8"),k.default.createElement(_,{value:0},"\u672a\u4ed8\u6b3e"),k.default.createElement(_,{value:1},"\u5df2\u6253\u6b3e"),k.default.createElement(_,{value:2},"\u5df2\u6536\u6b3e"),k.default.createElement(_,{value:4},"\u7533\u8bc9\u4e2d"),k.default.createElement(_,{value:5},"\u9a73\u56de"))),k.default.createElement(s.default,{xxl:6,xl:6,lg:6,md:6,sm:6},k.default.createElement(c.default,{type:"primary",className:T.default.query,onClick:this.getData},"\u67e5\u8be2"),k.default.createElement(c.default,{onClick:this.onReset},"\u91cd\u7f6e"))),k.default.createElement(d.default,{dashed:!0}),k.default.createElement(f.default,null,k.default.createElement(u.default,{columns:E,dataSource:l.list,pagination:!1,rowKey:function(e){return e.transID},loading:a,scroll:{x:1950}}),k.default.createElement(r.default,{className:T.default.pagination,total:l.total,current:m.current_page,showSizeChanger:!0,showQuickJumper:!0,onChange:function(t){return e.onChange({current_page:t})},onShowSizeChange:function(t,a){return e.onChange({current_page:1,per_page:a})}}))),p.modal&&k.default.createElement(b.default,{memberTagModal:p,handleCancel:this.handleCancel}),g.modal&&k.default.createElement(x.default,{previewModal:g.modal,imgSrc:g.imgSrc,handleCancel:this.handleCancel}))}}]),t}(k.Component));S=I([(0,w.connect)(function(e){var t=e.trade,a=e.loading;return{trade:t,loading:a.effects["trade/list"]}})],S);var M=S;t.default=M},tsWn:function(e,t,a){"use strict";var l=a("fbTi"),n=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("od8J");var r=n(a("ieJ+"));a("bU+6");var u=n(a("4WEN"));a("HX4T");var d=n(a("5nzH"));a("5Toi");var c=n(a("S49w")),o=n(a("43Yg")),s=n(a("/tCh")),f=n(a("scpF")),i=n(a("O/V9")),m=n(a("Tfcp")),p=n(a("8aBX"));a("O7+F");var g=n(a("QGS2"));a("qcmJ");var E=n(a("WR96")),v=l(a("i9FB")),y=a("LneV"),h=n(a("J55r")),C=function(e,t,a,l){var n,r=arguments.length,u=r<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,a):l;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)u=Reflect.decorate(e,t,a,l);else for(var d=e.length-1;d>=0;d--)(n=e[d])&&(u=(r<3?n(u):r>3?n(t,a,u):n(t,a))||u);return r>3&&u&&Object.defineProperty(t,a,u),u},k=E.default.Meta,w=g.default.confirm,D=function(e){function t(e){var a;return(0,o.default)(this,t),a=(0,f.default)(this,(0,i.default)(t).call(this,e)),a.getData=function(){a.props.dispatch({type:"trade/toDetail",payload:{user_id:a.props.memberTagModal.userID},callback:function(){a.setState({userDetail:a.props.trade.userDetail})}})},a.editStatus=function(e){var t=a.props.dispatch,l=a.state.userDetail,n=(0,m.default)(a);w({title:"\u63d0\u793a",content:v.default.createElement("span",null,1===e?"\u786e\u8ba4\u8981\u51bb\u7ed37\u5929\u5417\uff1f":2===e?"\u786e\u8ba4\u8981\u51bb\u7ed330\u5929\u5417\uff1f":"\u786e\u8ba4\u8981\u51bb\u7ed390\u5929\u5417\uff1f"),okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){t({type:"trade/editStatus",payload:{status_id:e,status:0,user_id:l.userID},callback:function(e){200===e.code?(c.default.success({message:"\u51bb\u7ed3\u6210\u529f!",duration:1.5}),n.getData()):e.message&&c.default.error({message:"".concat(e.message),duration:1.5})}})}})},a.freeze=function(e){var t=a.props.dispatch,l=a.state.userDetail,n=(0,m.default)(a),r="";r=1===e?"\u89e3\u9664\u51bb\u7ed3\u6210\u529f!":"\u6c38\u4e45\u51bb\u7ed3\u6210\u529f!",w({title:"\u63d0\u793a",content:v.default.createElement("span",null,1===e?"\u786e\u8ba4\u8981\u89e3\u9664\u51bb\u7ed3\u5417\uff1f":"\u786e\u8ba4\u8981\u6c38\u4e45\u51bb\u7ed3\u5417\uff1f"),okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){t({type:"trade/editStatus",payload:{status:e,user_id:l.userID},callback:function(e){200===e.code?(c.default.success({message:r,duration:1.5}),n.getData()):e.message&&c.default.error({message:"".concat(e.message),duration:1.5})}})}})},a.clearCode=function(){var e=a.props.dispatch,t=a.state.userDetail,l=(0,m.default)(a);w({title:"\u63d0\u793a",content:v.default.createElement("span",null,"\u786e\u8ba4\u8981\u6e05\u9664\u8be5\u7528\u6237\u7684deviceCode\u5417"),okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){e({type:"trade/clearCode",payload:{user_id:t.userID},callback:function(e){200===e.code?(c.default.success({message:"\u6e05\u9664\u6210\u529f",duration:1.5}),l.getData()):e.message&&c.default.error({message:"".concat(e.message),duration:1.5})}})}})},a.state={userDetail:{}},a}return(0,p.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this,t=this.props.memberTagModal,a=this.state.userDetail,l=v.default.createElement(d.default,null,v.default.createElement(d.default.Item,null,v.default.createElement("a",{onClick:function(t){return e.editStatus(1)}},"7\u5929")),v.default.createElement(d.default.Item,null,v.default.createElement("a",{onClick:function(t){return e.editStatus(2)}},"30\u5929")),v.default.createElement(d.default.Item,null,v.default.createElement("a",{onClick:function(t){return e.editStatus(3)}},"90\u5929")),v.default.createElement(d.default.Item,null,v.default.createElement("a",{onClick:function(t){return e.freeze(2)}},"\u6c38\u4e45\u51bb\u7ed3"))),n=v.default.createElement(u.default,{overlay:l},v.default.createElement("span",null,"\u51bb\u7ed3 ",v.default.createElement(r.default,{type:"down"})));return v.default.createElement("div",null,a.mobile&&v.default.createElement(g.default,{visible:t.modal,destroyOnClose:!0,maskClosable:!1,width:460,onCancel:this.props.handleCancel,footer:null},v.default.createElement("div",{className:h.default.tag},v.default.createElement("div",{className:h.default.tagTitle},v.default.createElement("h2",null,"\u4f1a\u5458\u4fe1\u606f\u6807\u7b7e")),v.default.createElement("div",{className:h.default.clear}),v.default.createElement(E.default,{actions:[v.default.createElement("a",{onClick:this.clearCode},"\u6e05\u9664\u8bbe\u5907\u9650\u5236"),v.default.createElement("a",{onClick:function(t){return e.freeze(1)}},"\u89e3\u9664\u51bb\u7ed3"),n]},v.default.createElement(k,{description:v.default.createElement("div",{className:h.default.tagContent},v.default.createElement("div",null,"\u4f1a\u5458\u8d26\u53f7",v.default.createElement("span",null,a.mobile)),v.default.createElement("div",null,"\u6635\u79f0",v.default.createElement("span",null,a.username)),v.default.createElement("div",null,"\u9080\u8bf7\u4eba\u8d26\u53f7",v.default.createElement("span",null,a.parentUser)),v.default.createElement("div",null,"\u6ce8\u518c\u65f6\u95f4",v.default.createElement("span",null,new Date(1e3*parseInt(a.createTime)).toLocaleString().replace(/:\d{1,2}$/,""))),v.default.createElement("div",null,"\u7528\u6237\u72b6\u6001",v.default.createElement("span",{className:"Y"},0===a.status?"\u51bb\u7ed3":1===a.status?"\u6b63\u5e38":"\u6c38\u4e45\u51bb\u7ed3")),v.default.createElement("div",null,"\u94b1\u5305\u72b6\u6001",v.default.createElement("span",null,0===a.tokenStatus?"\u4e0d\u53ef\u5356\u5e01":"\u53ef\u5356\u5e01")),v.default.createElement("div",null,"\u6301\u5e01\u6570\u91cf",v.default.createElement("span",null,a.balance)),v.default.createElement("div",null,"\u51bb\u7ed3\u6570\u91cf",v.default.createElement("span",null,a.freeze)),v.default.createElement("div",null,"\u7b97\u529b\u503c",v.default.createElement("span",null,a.calculatePower)),v.default.createElement("div",null,"\u4e00\u7ea7\u4f1a\u5458\u63a8\u5e7f\u4eba\u6570",v.default.createElement("span",null,a.memberCount)),v.default.createElement("div",null,"\u56e2\u961f\u603b\u4eba\u6570",v.default.createElement("span",null,a.totalCount)),v.default.createElement("div",null,"\u8d21\u732e\u503c",v.default.createElement("span",null,a.devoteCount)))})))))}}]),t}(v.Component);D=C([(0,y.connect)(function(e){var t=e.trade;return{trade:t}})],D);var b=D;t.default=b},vuqv:function(e,t,a){e.exports={keyword:"antd-pro-pages-transaction-trade-style-keyword",type:"antd-pro-pages-transaction-trade-style-type",photo:"antd-pro-pages-transaction-trade-style-photo",query:"antd-pro-pages-transaction-trade-style-query",pagination:"antd-pro-pages-transaction-trade-style-pagination"}}}]);