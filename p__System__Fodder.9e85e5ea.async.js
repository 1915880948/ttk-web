(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{dUZk:function(e,t,a){"use strict";var l=a("fbTi"),n=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("OHYs");var d=n(a("+cGX"));a("neM1");var r=n(a("xyFX"));a("GXKo");var i=n(a("J4k6"));a("od8J");var o=n(a("ieJ+"));a("bki4");var c=n(a("a64t"));a("5Toi");var s=n(a("S49w")),u=n(a("mK77")),f=n(a("43Yg")),m=n(a("/tCh")),g=n(a("scpF")),p=n(a("O/V9")),v=n(a("Tfcp")),h=n(a("8aBX"));a("9XEU");var y=n(a("lK/G"));a("O7+F");var E=n(a("QGS2"));a("EeUs");var b=n(a("MmNm"));a("HeWP");var k=n(a("aQmy"));a("qcmJ");var O=n(a("WR96")),w=l(a("i9FB")),C=a("LneV"),D=a("KEjf"),U=function(e,t,a,l){var n,d=arguments.length,r=d<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,a):l;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,a,l);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(r=(d<3?n(r):d>3?n(t,a,r):n(t,a))||r);return d>3&&r&&Object.defineProperty(t,a,r),r},x=O.default.Meta,F=k.default.TextArea,j=b.default.Option,L=E.default.confirm,M=y.default.Item,T={labelCol:{span:5},wrapperCol:{span:14}},S=function(e){function t(e){var a;return(0,f.default)(this,t),a=(0,g.default)(this,(0,p.default)(t).call(this,e)),a.getData=function(){a.props.dispatch({type:"fodder/list"})},a.addFodder=function(){a.setState({imgModal:!0})},a.getBase64=function(e,t){var a=new FileReader;a.addEventListener("load",function(){return t(a.result)}),a.readAsDataURL(e)},a.imgChange=function(e){"uploading"!==e.file.status?"done"===e.file.status&&a.getBase64(e.file.originFileObj,function(t){return a.setState({imgUrl:t,imgLoading:!1},function(){a.props.dispatch({type:"fodder/addImg",payload:{baseData:t,type:e.file.type.split("/")[1]},callback:function(e){200===e.code&&a.setState({imgUrl:e.data.url})}})})}):a.setState({imgLoading:!0})},a.onOk=function(e){var t=(0,v.default)(a);e.preventDefault(),a.props.form.validateFields(function(e,a){e||(a.img=t.state.imgUrl,a.desc?a.desc:a.desc="",t.props.dispatch({type:"fodder/add",payload:(0,u.default)({},a),callback:function(e){200===e.code?(s.default.success({message:"\u6dfb\u52a0\u6210\u529f!",duration:1.5}),t.getData(),t.imgCancel()):s.default.error({message:"\u6dfb\u52a0\u5931\u8d25!",duration:1.5})}}))})},a.upDown=function(e){var t=a.props.dispatch,l=(0,v.default)(a),n="",d="";1===parseInt(e.isOff)?(n=2,d="\u4e0b\u67b6\u6210\u529f!"):(n=1,d="\u4e0a\u67b6\u6210\u529f!"),L({title:"\u63d0\u793a",content:w.default.createElement("span",null,2===n?"\u786e\u8ba4\u4e0b\u67b6\u8be5\u7d20\u6750\uff1f":"\u786e\u8ba4\u4e0a\u67b6\u8be5\u7d20\u6750\uff1f"),okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){t({type:"fodder/upDown",payload:{id:e.id,is_off:n},callback:function(e){200===e.code?(s.default.success({message:d,duration:1.5}),l.getData()):e.message&&s.default.error({message:"".concat(e.message),duration:1.5})}})}})},a.deleteImg=function(e){var t=(0,v.default)(a);L({title:"\u63d0\u793a",content:"\u786e\u8ba4\u5220\u9664\u5417\uff1f",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){t.props.dispatch({type:"fodder/delete",payload:{id:e.id},callback:function(e){200===e.code?(s.default.success({message:"\u5220\u9664\u6210\u529f!",duration:1.5}),t.getData()):e.message&&s.default.error({message:"".concat(e.message),duration:1.5})}})}})},a.imgCancel=function(){a.setState({imgModal:!1,imgUrl:"",imgLoading:!1})},a.state={imgModal:!1,imgUrl:"",imgLoading:!1},a}return(0,h.default)(t,e),(0,m.default)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this,t=this.props.form.getFieldDecorator,a=this.state,l=a.imgUrl,n=a.imgLoading,s=this.props,u=s.fodder,f=s.loading,m=w.default.createElement(c.default,{type:"primary",onClick:this.addFodder},"\u4e0a\u4f20\u7d20\u6750"),g=w.default.createElement("div",null,w.default.createElement(o.default,{type:n?"loading":"plus"}),w.default.createElement("div",{className:"ant-upload-text"},"Upload"));return w.default.createElement(D.PageHeaderWrapper,{extra:m},w.default.createElement(O.default,null,w.default.createElement(i.default,{gutter:16},u.list.map(function(t,a){return w.default.createElement(r.default,{xxl:4,xl:6,lg:8,md:8,sm:12,xs:24,key:a},w.default.createElement(O.default,{cover:t.img&&w.default.createElement("img",{alt:"",src:t.img,style:{height:150}}),actions:[w.default.createElement("a",{onClick:function(){return e.upDown(t)}},1===parseInt(t.isOff)?"\u4e0b\u67b6":"\u4e0a\u67b6"),w.default.createElement("a",{onClick:function(){return e.deleteImg(t)}},"\u5220\u9664")],loading:f},w.default.createElement(x,{description:t.desc?"\u63cf\u8ff0 : "+t.desc:"\u63cf\u8ff0 : \u65e0"})))}))),w.default.createElement(E.default,{title:"\u6dfb\u52a0\u7d20\u6750\u56fe",visible:this.state.imgModal,destroyOnClose:!0,onOk:this.onOk,onCancel:this.imgCancel},w.default.createElement("div",null,w.default.createElement(M,Object.assign({},T,{label:"\u7d20\u6750\u56fe\u7247"}),t("img",{rules:[{required:!0,message:"\u8bf7\u4e0a\u4f20\u7d20\u6750\u56fe!"}]})(w.default.createElement(d.default,{listType:"picture-card",showUploadList:!1,onChange:this.imgChange},l?w.default.createElement("img",{src:l,alt:"avatar",style:{width:"100%"}}):g))),w.default.createElement(M,Object.assign({},T,{label:"\u72b6\u6001"}),t("is_off",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u7d20\u6750\u72b6\u6001!"}]})(w.default.createElement(b.default,{placeholder:"\u8bf7\u9009\u62e9",style:{width:"100%"}},w.default.createElement(j,{value:1},"\u4e0a\u67b6"),w.default.createElement(j,{value:2},"\u4e0b\u67b6")))),w.default.createElement(M,Object.assign({},T,{label:"\u56fe\u7247\u63cf\u8ff0"}),t("desc")(w.default.createElement(F,{rows:3}))))))}}]),t}(w.Component);S=U([y.default.create(),(0,C.connect)(function(e){var t=e.fodder,a=e.loading;return{fodder:t,loading:a.effects["fodder/list"]}})],S);var I=S;t.default=I}}]);