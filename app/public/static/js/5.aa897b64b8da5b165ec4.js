webpackJsonp([5],{213:function(t,e,n){var o=n(8)(n(242),n(264),null,null);t.exports=o.exports},216:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(75),s=n.n(o);e.default={props:{backText:{type:String,default:"返回"},curText:{type:String,default:"详情"},curText2:{type:String,default:"返回"}},data:function(){return{menu_active:{text:"列表"},dictId:"utilItems",selectShow:{isShow:!1}}},components:{selectBox2:s.a},methods:{back:function(){this.$router.go(-1)},getSelectSex:function(t){this.selectShow=!1},getSexs:function(){this.dictId="utilItems",console.log(this.selectShow),this.selectShow={isShow:!0}}}}},217:function(t,e,n){e=t.exports=n(203)(!0),e.push([t.i,".select-type{position:absolute}","",{version:3,sources:["G:/work/my-project-novel/src/components/index-header2.vue"],names:[],mappings:"AACA,aAEC,iBAAmB,CACnB",file:"index-header2.vue",sourcesContent:["\n.select-type{\n\n\tposition: absolute;\n}\n"],sourceRoot:""}])},218:function(t,e,n){var o=n(217);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(204)("431edeb5",o,!0)},219:function(t,e,n){n(218);var o=n(8)(n(216),n(220),null,null);t.exports=o.exports},220:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"_cover-top"},[n("div",{staticClass:"top-back",on:{click:t.back}},[n("div",{staticClass:"_ellipsis iconfont icon-return-arrow v-link-active"},[t._v(t._s(t.backText))])]),t._v(" "),n("div",{staticClass:"header-other"},[n("span",{staticClass:"iconfont icon-tips-jia",on:{click:t.getSexs}}),t._v(" "),n("div",{staticClass:"select-type"},[n("selectBox2",{attrs:{radioShOW:!1,"dict-id":t.dictId},on:{selectIndex:t.getSelectSex},model:{value:t.selectShow,callback:function(e){t.selectShow=e},expression:"selectShow"}})],1)]),t._v(" "),n("div",{staticClass:"center"},[t._v("\n\t\t\t "+t._s(t.curText)+"\n\t\t")])])},staticRenderFns:[]}},222:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{dialogShow:{type:Boolean,default:!1},message:{type:String,default:"消息"}},methods:{cancel:function(){console.log("sumbitCancel"),this.$emit("submitCancel")},ok:function(){this.$emit("submitOk")}}}},225:function(t,e,n){e=t.exports=n(203)(!0),e.push([t.i,".my-dialog{background-color:#fff;width:90%;position:fixed;top:50%;z-index:99;padding:4px 10px;font-size:12px;transition:opacity .3s ease;margin-left:5%;text-align:left;background:#fff;border:1px solid #111}","",{version:3,sources:["G:/work/my-project-novel/src/components/myDialog.vue"],names:[],mappings:"AACA,WACE,sBAAuB,AAEvB,UAAW,AACX,eAAgB,AAChB,QAAS,AAET,WAAY,AACZ,iBAAkB,AACf,eAAgB,AAChB,4BAA6B,AAC7B,eAAgB,AAChB,gBAAiB,AACjB,gBAAiB,AAClB,qBAAuB,CAC1B",file:"myDialog.vue",sourcesContent:["\n.my-dialog{\n\t\tbackground-color: #fff;\n\t\n\t\twidth: 90%;\n\t\tposition: fixed;\n\t\ttop: 50%;\n\t\t/*left: 50%;*/\n\t\tz-index: 99;\n\t\tpadding: 4px 10px;\n    \tfont-size: 12px;\n    \ttransition: .3s opacity ease;\n    \tmargin-left: 5%;\n    \ttext-align: left;\n    \tbackground: #fff;\n    border: 1px solid #111;\n}\n.dialog-btns{\n}\n.dialog-btns button{\n\t\t/*width: */\n}\n\t"],sourceRoot:""}])},227:function(t,e,n){var o=n(225);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(204)("2d1660fe",o,!0)},228:function(t,e,n){n(227);var o=n(8)(n(222),n(231),null,null);t.exports=o.exports},231:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"jb"}},[t.dialogShow?n("div",{staticClass:"my-dialog"},[n("h3",[t._v("提示")]),t._v(" "),n("span",[t._v(t._s(t.message))]),t._v(" "),n("div",{staticClass:"dialog-btns"},[n("button",{attrs:{type:"button"},on:{click:t.cancel}},[t._v("取消")]),t._v(" "),n("button",{attrs:{type:"button"},on:{click:t.ok}},[t._v("确认")])])]):t._e()])},staticRenderFns:[]}},242:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(33),s=n.n(o),i=n(228),a=n.n(i),c=n(20),l=n(219),r=n.n(l),u=n(21),d=n.n(u);e.default={name:"adduser",components:{indexHeader:r.a,myDialog:a.a},data:function(){return{userName:"",userNameNow:"",infoLists:[{title:"用户名",value:"",path:"/settingList/addUser"}],topModel:{curText:"添加奖惩类型",backText:"设置"}}},created:function(){},computed:s()({isEquals:function(){return this.userName==this.userNameNow}},n.i(c.b)({dialogShow:"dialogShow"})),methods:s()({submitOk:function(){var t=this;d.a.get("http://addjctype.cn").then(function(e){console.log(e.data.jcname),t.alert_dialog_hide(),t.add_user(t.userName,function(){console.log("回调")})}).catch(function(t){console.log(t)})},submitCancel2:function(){this.alert_dialog_hide()},saveUserName:function(){console.log("save1"),this.alert_dialog("que ren")}},n.i(c.c)({add_user:"add_user",alert_dialog:"alert_dialog",alert_dialog_hide:"alert_dialog_hide"})),mounted:function(){this.$on("sumbitCancel",function(t){console.log(t)})}}},264:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"_full_router component-chat-detail component-chat "},[n("div",{staticClass:"_full_inner"},[n("header",{staticClass:"app-header"},[n("indexHeader",{attrs:{"back-text":t.topModel.backText,"cur-text":t.topModel.curText}})],1),t._v(" "),n("div",{staticClass:"app-content"},[n("div",{staticClass:"content-container update-content"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],attrs:{type:"text",placeholder:"请输入奖罚名称"},domProps:{value:t.userName},on:{input:function(e){e.target.composing||(t.userName=e.target.value)}}}),t._v(" "),n("p",{staticClass:"lit-title"},[t._v("注意:奖罚名称至少是2个英文字符或者是一个中文字符")]),t._v(" "),n("button",{staticClass:"app-btn",attrs:{type:"button",disabled:t.isEquals},on:{click:t.saveUserName}},[t._v("保存")])])])]),t._v(" "),n("myDialog",{attrs:{dialogShow:t.dialogShow},on:{submitCancel:t.submitCancel2,submitOk:t.submitOk}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=5.aa897b64b8da5b165ec4.js.map