webpackJsonp([31],{274:function(t,e,n){n(536);var i=n(13)(n(382),n(604),null,null);t.exports=i.exports},293:function(t,e,n){"use strict";(function(t){e.a={methods:{styleColor:function(t,e){return console.log(t,"--------",e),console.log(t<e),t<e?"sub-color":t==e?"":"add-color"},styleColorByBiz:function(e){return e==t.STKBIZ.BUY_IN||e==t.STKBIZ.SUBSCRIBE_PURCHASE?"add-color":e==t.STKBIZ.SELL_OUT?"sub-color":""},goBack:function(){this.$router.go(-1)}}}}).call(e,n(0))},294:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(293),o=n(50);n.n(o);Vue.component(o.Header.name,o.Header),e.default={data:function(){return{}},props:{title:{type:String,default:"头"}},mixins:[i.a]}},295:function(t,e,n){var i=n(13)(n(294),n(296),null,null);t.exports=i.exports},296:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mt-header",{staticClass:"cust-header",staticStyle:{background:"#ef4f4f"},attrs:{title:t.title}},[n("mt-button",{attrs:{icon:"back"},on:{click:t.goBack},slot:"left"},[t._v("返回")])],1)},staticRenderFns:[]}},382:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(295),o=n.n(i),r=n(50);n.n(r);Vue.component(r.Cell.name,r.Cell),Vue.component(r.Actionsheet.name,r.Actionsheet),e.default={data:function(){return{title:"个人基本信息",headPicActions:[{name:"拍照",method:function(){}},{name:"相册",method:function(){}}],headPicActionsVis:!1,urgentLink:"",linkTel:""}},created:{},methods:{headPic:function(){this.headPicActionsVis=!0},urgentLinkClick:function(){var t=this;r.MessageBox.prompt("请输入紧急联系人").then(function(e){var n=e.value;e.action;t.urgentLink=n})},linkTelClick:function(){var t=this;r.MessageBox.prompt("请输入联系电话").then(function(e){var n=e.value;e.action;t.linkTel=n})}},components:{custHeader:o.a}}},469:function(t,e,n){e=t.exports=n(228)(!0),e.push([t.i,".userBaseInfo{z-index:5;position:fixed;width:100%;top:0}.userInfoBody{overflow:scroll;height:165vmin}.userDiv{height:60px;background-color:#fff;margin-bottom:9px;line-height:60px}.userImg{float:left;width:50px;height:50px;margin-left:20px;margin-top:5px;margin-right:40%}","",{version:3,sources:["E:/work/workspace/trade-mobile/project-trade/src/views/personal/userBaseInfo.vue"],names:[],mappings:"AACA,cACI,UAAW,AACX,eAAgB,AAChB,WAAY,AACZ,KAAO,CACV,AACD,cACE,gBAAiB,AACjB,cAAgB,CACjB,AACD,SACE,YAAa,AACb,sBAAuB,AACvB,kBAAmB,AACnB,gBAAkB,CACnB,AACD,SACE,WAAY,AACZ,WAAY,AACZ,YAAa,AACb,iBAAkB,AAClB,eAAgB,AAChB,gBAAkB,CACnB",file:"userBaseInfo.vue",sourcesContent:["\n.userBaseInfo{\r\n    z-index: 5;\r\n    position: fixed;\r\n    width: 100%;\r\n    top: 0;\n}\n.userInfoBody{\r\n  overflow: scroll;\r\n  height: 165vmin;\n}\n.userDiv{\r\n  height: 60px;\r\n  background-color: #fff;\r\n  margin-bottom: 9px;\r\n  line-height: 60px;\n}\n.userImg{\r\n  float: left;\r\n  width: 50px;\r\n  height: 50px;\r\n  margin-left: 20px;\r\n  margin-top: 5px;\r\n  margin-right: 40%;\n}\r\n"],sourceRoot:""}])},536:function(t,e,n){var i=n(469);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(229)("6c2758f2",i,!0)},604:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"userBaseInfo"},[n("custHeader",{attrs:{title:t.title}}),t._v(" "),n("div",{staticClass:"list"},[n("div",{on:{click:t.headPic}},[n("mt-cell",{staticStyle:{height:"70px","margin-bottom":"10px","padding-top":"10px"},attrs:{title:"头像"}},[n("img",{staticStyle:{"margin-top":"10px","margin-right":"10px"},attrs:{src:"",alt:"",width:"40px",height:"40px"}})])],1),t._v(" "),n("div",{on:{click:t.urgentLinkClick}},[n("mt-cell",{attrs:{title:"紧急联系人"}},[t._v("\n            "+t._s(this.urgentLink)+"\n          ")])],1),t._v(" "),n("div",{on:{click:t.linkTelClick}},[n("mt-cell",{attrs:{title:"联系电话"}},[t._v("\n          "+t._s(this.linkTel)+"\n        ")])],1),t._v(" "),n("div",{},[n("mt-cell",{attrs:{title:"身份认证"}})],1),t._v(" "),n("div",{},[n("mt-cell",{staticStyle:{"margin-bottom":"6px"},attrs:{title:"风险测评","is-link":"",to:"/riskAnalysis"}})],1),t._v(" "),n("div",{},[n("mt-cell",{attrs:{title:"修改登录密码","is-link":""}})],1)]),t._v(" "),n("mt-actionsheet",{attrs:{actions:t.headPicActions},model:{value:t.headPicActionsVis,callback:function(e){t.headPicActionsVis=e},expression:"headPicActionsVis"}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=31.62f6c3a891db8abeae7e.js.map