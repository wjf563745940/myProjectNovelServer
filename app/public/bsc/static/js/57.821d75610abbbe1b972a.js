webpackJsonp([57],{236:function(t,e,n){n(508);var a=n(13)(n(342),n(579),"data-v-6ca709a4",null);t.exports=a.exports},342:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(401),i=n.n(a),o=n(53),s=n.n(o),r=n(50),l=(n.n(r),n(51));n.n(l);Vue.component(r.Button.name,r.Button),Vue.component(r.Radio.name,r.Radio),Vue.component(r.Checklist.name,r.Checklist),Vue.component(r.Field.name,r.Field),e.default={name:"slidemenu",data:function(){return{visible:!0,infoVisible:!0,questionVisible:!1,testTime:"",riskName:"",InputValue:"",introduction:"",paperNo:"",testSno:"",suitableNo:"",suitableName:"",option:[],question:[]}},computed:{},created:function(){var t=this;axiosUtil.paperInit().then(function(e){var e=e.data.data;t.testTime=e.testPaper.testMinutes?e.testPaper.testMinutes+"分钟":"无时间限制",t.riskName=e.testPaper.paperName,t.suitableNo=e.suitableNo,t.suitableName=e.suitableName,t.paperNo=e.paperNo,t.testSno=e.testSno})},watch:{value:function(t){this.visible=t.isShow},visible:function(t){this.value.isShow=!0}},methods:{goBack:function(){this.$router.go(-2)},start:function(){var t=this;r.MessageBox.confirm("是否开始答题？").then(function(e){t.infoVisible=!1,t.questionVisible=!0;var n=t;axiosUtil.paperApp({paperNo:t.paperNo,testSno:t.testSno,suitableNo:t.suitableNo,suitableName:t.suitableName}).then(function(t){for(var t=t.data.data.questions,e=0;e<t.length;e++){1==t[e].questionType?t[e].value=[]:t[e].value="";for(var a=0;a<t[e].options.length;a++)t[e].options[a].label=t[e].options[a].optionContext,t[e].options[a].value=t[e].options[a].optionNo}n.question=t})})},handOn:function(){for(var t=this,e=!1,a=[],o=0;o<this.question.length;o++)a.push({questionNo:this.question[o].questionNo,optionNos:"object"==s()(this.question[o].value)?this.question[o].value.toString():this.question[o].value}),this.question[o].value||(e=!0);var l=e?"你还有题没有完成！是否提交？":"是否确认提交？";r.MessageBox.confirm(l).then(function(e){console.log(a);var o=t;axiosUtil.paperEnd({paperNo:t.paperNo,testSno:t.testSno,answers:i()(a)}).then(function(t){var t=t.data;-1==t.errorcode?n.i(r.MessageBox)("提示",t.errormsg):r.MessageBox.alert(t.data).then(function(){o.$router.push("/index")})})})}}}},401:function(t,e,n){t.exports={default:n(402),__esModule:!0}},402:function(t,e,n){var a=n(1),i=a.JSON||(a.JSON={stringify:JSON.stringify});t.exports=function(t){return i.stringify.apply(i,arguments)}},441:function(t,e,n){e=t.exports=n(228)(!0),e.push([t.i,"#app[data-v-6ca709a4]{overflow:scroll!important;height:auto!important}.slidemenu[data-v-6ca709a4]{position:fixed;width:100%;height:100%;z-index:999;left:0;top:0;background-color:rgba(0,0,0,.3);transition:all .5s ease}.slidemenu-conent[data-v-6ca709a4]{width:100%;background:#fff}.login-header[data-v-6ca709a4]{position:fixed;left:0;top:0;width:100%;z-index:3;height:45px;line-height:45px;font-size:19px;background:#ef4f4f;color:#fff;text-align:center}.top-back[data-v-6ca709a4]{max-width:85px;float:left}.contentInfo[data-v-6ca709a4],.contentQuestion[data-v-6ca709a4]{margin-top:45px;overflow:scroll;height:167vmin}.app-footer[data-v-6ca709a4]{position:fixed!important}.inputLabel[data-v-6ca709a4]{font-size:18px;margin:8px;display:block;color:#888}.inputInput textarea[data-v-6ca709a4]{width:97%;margin-left:3%;font-size:18px}","",{version:3,sources:["E:/work/workspace/trade-mobile/project-trade/src/views/admin/riskAnalysis.vue"],names:[],mappings:"AACA,sBACE,0BAA6B,AAC7B,qBAAyB,CAC1B,AACD,4BACE,eAAgB,AAChB,WAAY,AACZ,YAAa,AACb,YAAa,AACb,OAAQ,AACR,MAAO,AACP,gCAAoC,AACpC,uBAAyB,CAC1B,AACD,mCAEE,WAAY,AACZ,eAAiB,CAClB,AACD,+BACE,eAAgB,AAChB,OAAQ,AACR,MAAO,AACP,WAAY,AACZ,UAAW,AACX,YAAa,AACb,iBAAkB,AAClB,eAAgB,AAChB,mBAAoB,AACpB,WAAe,AACf,iBAAmB,CACpB,AACD,2BACE,eAAgB,AAChB,UAAY,CACb,AACD,gEACE,gBAAiB,AACjB,gBAAiB,AACjB,cAAgB,CACjB,AACD,6BACE,wBAA4B,CAC7B,AACD,6BACE,eAAgB,AAChB,WAAY,AACZ,cAAe,AACf,UAAY,CACb,AACD,sCACE,UAAW,AACX,eAAgB,AAChB,cAAgB,CACjB",file:"riskAnalysis.vue",sourcesContent:["\n#app[data-v-6ca709a4]{\r\n  overflow: scroll ! important;\r\n  height: auto ! important;\n}\n.slidemenu[data-v-6ca709a4] {\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 999;\r\n  left: 0;\r\n  top: 0;\r\n  background-color: rgba(0, 0, 0, .3);\r\n  transition: .5s all ease;\n}\n.slidemenu-conent[data-v-6ca709a4] {\r\n  /*height: 100%;*/\r\n  width: 100%;\r\n  background: #fff;\n}\n.login-header[data-v-6ca709a4] {\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  z-index: 3;\r\n  height: 45px;\r\n  line-height: 45px;\r\n  font-size: 19px;\r\n  background: #ef4f4f;\r\n  color: #ffffff;\r\n  text-align: center;\n}\n.top-back[data-v-6ca709a4] {\r\n  max-width: 85px;\r\n  float: left;\n}\n.contentQuestion[data-v-6ca709a4],.contentInfo[data-v-6ca709a4]{\r\n  margin-top: 45px;\r\n  overflow: scroll;\r\n  height: 167vmin;\n}\n.app-footer[data-v-6ca709a4]{\r\n  position: fixed ! important;\n}\n.inputLabel[data-v-6ca709a4]{\r\n  font-size: 18px;\r\n  margin: 8px;\r\n  display: block;\r\n  color: #888;\n}\n.inputInput textarea[data-v-6ca709a4]{\r\n  width: 97%;\r\n  margin-left: 3%;\r\n  font-size: 18px;\n}\r\n\r\n"],sourceRoot:""}])},508:function(t,e,n){var a=n(441);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(229)("84152e3a",a,!0)},579:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide-top-menu"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"slidemenu"},[n("div",{staticClass:"slidemenu-conent"},[n("div",{staticClass:"login-header"},[n("div",{staticClass:"top-back",on:{click:t.goBack}},[n("span",{staticClass:"iconfont icon-return-arrow"})]),t._v(" "),n("div",{staticClass:"center"},[t._v("\r\n          风险评估\r\n        ")])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.infoVisible,expression:"infoVisible"}],staticClass:"contentInfo"},[n("mt-cell",{attrs:{title:"考试时间",value:t.testTime}}),t._v(" "),n("mt-cell",{attrs:{title:"考试名称",value:t.riskName}}),t._v(" "),n("mt-button",{attrs:{type:"danger",size:"large"},on:{click:t.start}},[t._v("开始答题")])],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.questionVisible,expression:"questionVisible"}],staticClass:"contentQuestion"},[n("ul",t._l(t.question,function(e,a){return n("li",[0==e.questionType?[n("mt-radio",{attrs:{title:e.questionContext,index:a,options:e.options},model:{value:e.value,callback:function(t){e.value=t},expression:"item.value"}})]:"1"==e.questionType?[n("mt-checklist",{attrs:{title:e.questionContext,index:a,options:e.options},model:{value:e.value,callback:function(t){e.value=t},expression:"item.value"}})]:"2"==e.questionType?[n("mt-radio",{attrs:{title:e.questionContext,index:a,options:e.options},model:{value:e.value,callback:function(t){e.value=t},expression:"item.value"}})]:[n("div",{staticClass:"inputTest"},[n("div",{staticClass:"inputLabel"},[t._v("\r\n                  "+t._s(e.questionContext)+"\r\n                ")]),t._v(" "),n("div",{staticClass:"inputInput"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.InputValue,expression:"InputValue"}],attrs:{name:"name"},domProps:{value:t.InputValue},on:{input:function(e){e.target.composing||(t.InputValue=e.target.value)}}})])])]],2)})),t._v(" "),n("mt-button",{attrs:{type:"danger",size:"large"},on:{click:t.handOn}},[t._v("交卷")])],1)])])])},staticRenderFns:[]}}});
//# sourceMappingURL=57.821d75610abbbe1b972a.js.map