webpackJsonp([46],{245:function(t,e,n){n(485);var o=n(13)(n(352),n(554),null,null);t.exports=o.exports},293:function(t,e,n){"use strict";(function(t){e.a={methods:{styleColor:function(t,e){return console.log(t,"--------",e),console.log(t<e),t<e?"sub-color":t==e?"":"add-color"},styleColorByBiz:function(e){return e==t.STKBIZ.BUY_IN||e==t.STKBIZ.SUBSCRIBE_PURCHASE?"add-color":e==t.STKBIZ.SELL_OUT?"sub-color":""},goBack:function(){this.$router.go(-1)}}}}).call(e,n(0))},294:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(293),r=n(50);n.n(r);Vue.component(r.Header.name,r.Header),e.default={data:function(){return{}},props:{title:{type:String,default:"头"}},mixins:[o.a]}},295:function(t,e,n){var o=n(13)(n(294),n(296),null,null);t.exports=o.exports},296:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mt-header",{staticClass:"cust-header",staticStyle:{background:"#ef4f4f"},attrs:{title:t.title}},[n("mt-button",{attrs:{icon:"back"},on:{click:t.goBack},slot:"left"},[t._v("返回")])],1)},staticRenderFns:[]}},352:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(295),r=n.n(o);e.default={name:"index",data:function(){return{title:"资讯",content:""}},created:function(){var t=this;axiosUtil.getInfo({pageNo:this.$route.params.pageNo,itemNo:this.$route.params.itemNo}).then(function(e){t.content=e.data[0].content})},components:{custHeader:r.a}}},418:function(t,e,n){e=t.exports=n(228)(!0),e.push([t.i,".indexInfo{position:fixed;top:0;z-index:5}.contentDiv{overflow:scroll;margin-top:10px}","",{version:3,sources:["E:/work/workspace/trade-mobile/project-trade/src/views/index/indexInfo.vue"],names:[],mappings:"AACA,WACE,eAAgB,AAChB,MAAO,AACP,SAAW,CACZ,AACD,YACE,gBAAiB,AACjB,eAAiB,CAClB",file:"indexInfo.vue",sourcesContent:["\n.indexInfo{\r\n  position: fixed;\r\n  top: 0;\r\n  z-index: 5;\n}\n.contentDiv{\r\n  overflow: scroll;\r\n  margin-top: 10px;\n}\r\n"],sourceRoot:""}])},485:function(t,e,n){var o=n(418);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(229)("7ebef89a",o,!0)},554:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"indexInfo"},[n("custHeader",{attrs:{title:t.title}}),t._v(" "),n("div",{staticClass:"contentDiv",attrs:{width:"",height:"165vmin"},domProps:{innerHTML:t._s(t.content)}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=46.03716e36bede4a553c13.js.map