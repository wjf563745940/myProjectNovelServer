webpackJsonp([24],{233:function(e,t,s){s(492);var a=s(13)(s(339),s(562),"data-v-2ccc5a54",null);e.exports=a.exports},293:function(e,t,s){"use strict";(function(e){t.a={methods:{styleColor:function(e,t){return console.log(e,"--------",t),console.log(e<t),e<t?"sub-color":e==t?"":"add-color"},styleColorByBiz:function(t){return t==e.STKBIZ.BUY_IN||t==e.STKBIZ.SUBSCRIBE_PURCHASE?"add-color":t==e.STKBIZ.SELL_OUT?"sub-color":""},goBack:function(){this.$router.go(-1)}}}}).call(t,s(0))},294:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(293),n=s(50);s.n(n);Vue.component(n.Header.name,n.Header),t.default={data:function(){return{}},props:{title:{type:String,default:"头"}},mixins:[a.a]}},295:function(e,t,s){var a=s(13)(s(294),s(296),null,null);e.exports=a.exports},296:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("mt-header",{staticClass:"cust-header",staticStyle:{background:"#ef4f4f"},attrs:{title:e.title}},[s("mt-button",{attrs:{icon:"back"},on:{click:e.goBack},slot:"left"},[e._v("返回")])],1)},staticRenderFns:[]}},297:function(e,t,s){e.exports=s.p+"static/img/2276.9e23719.png"},339:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){var a=s(50),n=(s.n(a),s(295)),o=s.n(n),i=s(297),c=s.n(i),r=s(51),d=s.n(r);Vue.component(a.Actionsheet.name,a.Actionsheet),Vue.component(a.Field.name,a.Field),Vue.component(a.Popup.name,a.Popup),Vue.component(a.Picker.name,a.Picker),t.default={data:function(){var e=this;return{picMsg:"",dicts:{idType:{name:"ID_TYPE",dataKey:"selectTypeSlots"},securityQues1:{name:"SECURITY_QUES",dataKey:"qustion1"},securityQues2:{name:"SECURITY_QUES",dataKey:"qustion2"},securityQues3:{name:"SECURITY_QUES",dataKey:"qustion3"}},actions:[{name:"拍照",method:function(){e.selectPic()}},{name:"从相册选择",method:function(){e.selectPic()}}],sheetVisible:!1,zjzshow:!1,zjz:c.a,flowId:"1",title:"重置交易密码",capMessage:"发送短信",idType:{name:"",value:""},idCode:"",custName:"",certValidDate:"",idIssAgcy:"",nationality:{name:"",value:""},province:{name:"",value:""},city:{name:"",value:""},area:{name:"",value:""},postcode:"",address:"",linkNaem1:"",linkNaem2:"",relation1:"",relation2:"",mobileTel1:"",mobileTel2:"",bankCode:"",bankbranch:"",bankNet:"",bankAcct:"",fundPassword:"",fundPasswordCom:"",selectTypeVisible:!1,selectTypeSlots:[{flex:1,values:[{value:"0",name:"人民币2"},{value:"1",name:"美元2"},{value:"2",name:"港币2"}],className:"slots"}],rules:{password:{str:"required",state:"",message:""},password2:{str:"required,equals[fundPassword]",state:"",message:""}}}},created:function(){this.qryCustBaseInfo(),this.qrySafeQuestion()},components:{custHeader:o.a},computed:{valiSuccess:function(){return""==this.fundPassword||""==this.fundPasswordCom}},methods:{setPassword:function(){var t=this;if("error"==this.rules.password2.state)return void s.i(a.Toast)({message:this.rules.password2.message,position:"bottom",duration:e.TOASTTIME});e.isOpenMd5&&(this.fundPassword=e.md5(this.fundPassword));var n={password:this.fundPassword,useScope:e.USE_SCOPE.FUNDPASSWORD,authType:e.AUTH_TYPE,bcustCode:d.a.get("userCode")};axiosUtil.upCltPasswordBack(n).then(function(e){var e=e.data;0==e.errorcode?a.MessageBox.alert("重设成功").then(function(e){t.$router.push("/personal")}):s.i(a.MessageBox)("提示",e.errormsg)})},checkSafeInfo:function(){var e=this,t={custName:this.custName,idType:this.idType.value,idCode:this.idCode,smsAuthCode:this.captcha,answer1:this.answer1,answer2:this.answer2,answer3:this.answer3};axiosUtil.checkSafeInfo(t).then(function(t){var t=t.data;0==t.errorcode?e.flowId=3:s.i(a.MessageBox)("提示",t.errormsg)})},qrySafeQuestion:function(){var e=this,t={};axiosUtil.qrySafeQuestion(t).then(function(t){var t=t.data;0==t.errorcode?(e.qustion1=t.data.qustion1,e.qustion2=t.data.qustion2,e.qustion3=t.data.qustion3):s.i(a.MessageBox)("提示",t.errormsg),console.log(t,"--------------安全问题查询")})},qryCustBaseInfo:function(){var e=this;axiosUtil.qryCustBaseInfo().then(function(t){var t=t.data;e.idType.value=t.data.idType,0==t.errorcode?e.mb=t.data.mb:s.i(a.MessageBox)("提示",t.errormsg)})},upload:function(e){var t=e.target.files||e.dataTransfer.files;if(t.length){var s=new FormData;s.append("file",t[0],t[0].name),s.append("uploadUser","279947"),s.append("docBizId","4001"),s.append("docBizSubid","1"),axiosUtil.realNamePicUpload(s).then(function(e){})}},showSheet:function(){this.sheetVisible=!0},selectPic:function(){this.zjzshow=!0},selectTypeChange:function(e,t){console.log(t),t[0]&&(this.idType.name=t[0].name,this.idType.value=t[0].value)},dissSelectType:function(){this.currency="",this.selectTypeVisible=!1},sureSelectType:function(){this.currency||(this.currency=this.selectTypeSlots[0].values[0].name),this.selectTypeVisible=!1},showFlow:function(e){this.flowId=e},selectTypeVisibleShow:function(){this.selectTypeVisible=!0},send:function(){var e=this;this.mb=d.a.get("mb"),axiosUtil.sendSms({askBizCode:100220,mb:this.mb}).then(function(t){if(1==t.errorcode)s.i(a.MessageBox)("提示",t.errormsg);else{var n=60;e.capMessage=n+"s后重新发送",e.idDisabled=!0;var o=setInterval(function(){n-=1,e.capMessage=n+"s后重新发送",n||(e.capMessage="发送短信",e.idDisabled=!1,clearInterval(o))},1e3)}})}}}}.call(t,s(0))},425:function(e,t,s){t=e.exports=s(228)(!0),t.push([e.i,".fund-manage-contain[data-v-2ccc5a54]{padding:12px;overflow-y:auto;height:100%;padding-bottom:48px}.select-dict[data-v-2ccc5a54]{font-size:14px}.select-dict button[data-v-2ccc5a54]{width:50%;float:left;height:28px;border:none;background:#fff;border-top:1px solid #ccc}.select-dict button[data-v-2ccc5a54]:last-child{border-left:1px solid #ccc}.select-dict-btns[data-v-2ccc5a54]{position:absolute;bottom:0;bottom:-28px;width:100%}.zjz[data-v-2ccc5a54]{width:100%}","",{version:3,sources:["E:/work/workspace/trade-mobile/project-trade/src/views/admin/findTrdPasswordSure.vue"],names:[],mappings:"AAGA,sCACC,aAAc,AACd,gBAAgB,AACZ,YAAa,AACd,mBAAqB,CACxB,AACD,8BACC,cAAgB,CAChB,AACD,qCACM,UAAW,AACb,WAAY,AACZ,YAAa,AACb,YAAa,AACb,gBAAiB,AACjB,yBAA2B,CAC9B,AACD,gDACE,0BAA4B,CAC7B,AACD,mCACE,kBAAmB,AACnB,SAAU,AACV,aAAc,AACZ,UAAY,CACf,AACD,sBACE,UAAY,CACb",file:"findTrdPasswordSure.vue",sourcesContent:["\n.fund-manage-con[data-v-2ccc5a54]{\n}\n.fund-manage-contain[data-v-2ccc5a54]{\r\n\tpadding: 12px;\r\n\toverflow-y:auto;\r\n\t    height: 100%;\r\n    padding-bottom: 48px;\n}\n.select-dict[data-v-2ccc5a54]{\r\n\tfont-size: 14px;\n}\n.select-dict button[data-v-2ccc5a54]{\r\n\t\t    width: 50%;\r\n    float: left;\r\n    height: 28px;\r\n    border: none;\r\n    background: #fff;\r\n    border-top: 1px solid #ccc;\n}\n.select-dict button[data-v-2ccc5a54]:last-child{\r\n\t\tborder-left: 1px solid #ccc;\n}\n.select-dict-btns[data-v-2ccc5a54]{\r\n\t\tposition: absolute;\r\n\t\tbottom: 0;\r\n\t\tbottom: -28px;\r\n    width: 100%;\n}\n.zjz[data-v-2ccc5a54]{\r\n\t\twidth: 100%;\n}\r\n"],sourceRoot:""}])},492:function(e,t,s){var a=s(425);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);s(229)("e13ee168",a,!0)},562:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"_full_router fund-manage-con"},[s("custHeader",{attrs:{title:e.title}}),e._v(" "),s("div",{staticClass:"fund-manage-contain form-submit"},[s("div",{directives:[{name:"show",rawName:"v-show",value:1==e.flowId,expression:"flowId==1"}]},[s("mt-field",{directives:[{name:"validtype",rawName:"v-validtype",value:e.rules.password,expression:"rules.password"}],attrs:{label:"新交易密码",placeholder:"请输入新的交易密码",type:"password",state:e.rules.password.state},model:{value:e.fundPassword,callback:function(t){e.fundPassword=t},expression:"fundPassword"}}),e._v(" "),s("mt-field",{directives:[{name:"validtype",rawName:"v-validtype",value:e.rules.password2,expression:"rules.password2"}],attrs:{label:"确认交易密码",placeholder:"请再次输入交易密码",type:"password",state:e.rules.password2.state},model:{value:e.fundPasswordCom,callback:function(t){e.fundPasswordCom=t},expression:"fundPasswordCom"}}),e._v(" "),s("mt-button",{attrs:{type:"primary",size:"large",disabled:e.valiSuccess},on:{click:e.setPassword}},[e._v("提交")])],1),e._v(" "),s("mt-popup",{staticClass:"select-dict",staticStyle:{width:"80%"},attrs:{"pop-transtion":"popop-fade"},model:{value:e.selectTypeVisible,callback:function(t){e.selectTypeVisible=t},expression:"selectTypeVisible"}},[s("mt-picker",{attrs:{slots:e.selectTypeSlots,valueKey:"name","visible-item-count":5},on:{change:e.selectTypeChange}}),e._v(" "),s("div",{staticClass:"select-dict-btns"},[s("button",{staticClass:"btn",on:{click:e.dissSelectType}},[e._v("取消")]),e._v(" "),s("button",{staticClass:"btn",on:{click:e.sureSelectType}},[e._v("确认")])])],1),e._v(" "),s("mt-actionsheet",{attrs:{actions:e.actions},model:{value:e.sheetVisible,callback:function(t){e.sheetVisible=t},expression:"sheetVisible"}})],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=24.694fcc2ca8e9fac8aa6d.js.map