webpackJsonp([61],{258:function(a,t,i){i(494);var n=i(13)(i(365),i(565),"data-v-424801ca",null);a.exports=n.exports},365:function(a,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(a){var n=i(51),e=(i.n(n),i(50));i.n(e);Vue.component(e.Cell.name,e.Cell),Vue.component(e.Progress.name,e.Progress),Vue.use(e.InfiniteScroll),t.default={data:function(){return{cacheList:{},quoteQueueBuy:[],quoteQueueSell:[],financial:{hqzjcj:"",hqjrkp:"",hqzgcj:"",hqzdcj:"",hqzjcl:"",hqcjjj:"",hqcjsl:"",hqcjje:""},prdType:"",salesTarget:""}},computed:{jindu:function(){return(this.financial.issAmt-this.ktje)/this.financial.issAmt*100==0?1:(this.financial.issAmt-this.ktje)/this.financial.issAmt*100},sssj:function(){return dateFormatter(this.financial.listDate)+" "+timeFormatter(this.financial.listTime)},zzsj:function(){return dateFormatter(this.financial.endDate)+" "+timeFormatter(this.financial.endTime)},qsrq:function(){return dateFormatter(this.financial.issBgnDate)+" "+timeFormatter(this.financial.issBgnTime)},jzrq:function(){return dateFormatter(this.financial.issEndDate)+" "+timeFormatter(this.financial.issEndTime)}},created:function(){var t=this,i=this.$route.query.hqzqdm,n={hqzqdm:i,hqscdm:a.scdm};axiosUtil.quoteSummary(n).then(function(a){var a=a.data;t.financial=a.rows[0]});var e={xyscdm:a.scdm,xyywlb:a.STKBIZTYPE.PRICE_SELL_APPL,xyzqdm:i};axiosUtil.quoteQueue(e).then(function(a){var a=a.data;t.quoteQueueSell=a.rows});var r={xyscdm:a.scdm,xyywlb:a.STKBIZTYPE.PRICE_BUY_APPL,xyzqdm:i};axiosUtil.quoteQueue(r).then(function(a){var a=a.data;t.quoteQueueBuy=a.rows})},filters:{},methods:{goBack:function(){this.$router.go(-1)},goPayBuy:function(){this.$router.push("/trade?hqzqdm="+this.$route.query.hqzqdm+"&type=5B&orderPrice="+this.financial.hqzjcj)},goPaySell:function(){this.$router.push("/trade?hqzqdm="+this.$route.query.hqzqdm+"&type=5S&orderPrice="+this.financial.hqzjcj)}}}}.call(t,i(0))},427:function(a,t,i){t=a.exports=i(228)(!0),t.push([a.i,".financial-box[data-v-424801ca]{display:-webkit-box;display:-ms-flexbox;display:flex}.financial-box>div[data-v-424801ca]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;width:33.33%}.financial-detail-box[data-v-424801ca]{display:-webkit-box;display:-ms-flexbox;display:flex;font-size:12px;color:#abb6ba}.financial-detail-box>div[data-v-424801ca]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;width:33.33%}.market-detail-box>div[data-v-424801ca]{width:25%}.nhsyl[data-v-424801ca]{font-size:26px;color:#ef4f4f}.nhsyl-text[data-v-424801ca]{font-size:14px;color:#bbb}.qx[data-v-424801ca]{margin-top:12px}.qx-text[data-v-424801ca]{font-size:14px;color:#7089ff;border-right:1px solid #ddd;padding:0 4px;margin-right:4px}.app-content[data-v-424801ca]{height:100%;background:#111}.financial-content[data-v-424801ca]{height:100%;background:#efeee9}[data-v-424801ca]::-webkit-scrollbar{width:0;height:1px}[data-v-424801ca]::-webkit-scrollbar-thumb{border-radius:5px;-webkit-box-shadow:inset 0 0 5px rgba(0,0,0,.2);background:rgba(0,0,0,.2)}.app-header[data-v-424801ca]{position:relative}.financial-detail-content[data-v-424801ca]{background:#efeee9}.financial-detail-message[data-v-424801ca]{background:#fff;padding:12px}.fqx[data-v-424801ca],.nhsy[data-v-424801ca]{font-size:18px}.financial-detail-list[data-v-424801ca]{margin-top:6px}.list-infinite li[data-v-424801ca]{margin-top:6px;margin-bottom:12px;padding:4px 6px}","",{version:3,sources:["E:/work/workspace/trade-mobile/project-trade/src/views/market/detailJj.vue"],names:[],mappings:"AACA,gCAEE,oBAAqB,AACrB,oBAAqB,AACrB,YAAc,CACf,AACD,oCACE,mBAAoB,AAChB,oBAAqB,AACjB,YAAa,AACrB,YAAc,CACf,AACD,uCAEE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,eAAgB,AAChB,aAAe,CAChB,AACD,2CACE,mBAAoB,AAChB,oBAAqB,AACjB,YAAa,AACrB,YAAc,CACf,AACD,wCACE,SAAW,CACZ,AACD,wBACE,eAAgB,AAChB,aAAe,CAChB,AACD,6BACE,eAAgB,AAChB,UAAY,CACb,AACD,qBACE,eAAiB,CAClB,AACD,0BACE,eAAgB,AAChB,cAAe,AACf,4BAA6B,AAC7B,cAAe,AACf,gBAAkB,CACnB,AACD,8BACE,YAAa,AACb,eAAiB,CAClB,AACD,oCACE,YAAa,AACb,kBAAoB,CACrB,AACD,qCACE,QAAW,AACX,UAAY,CACb,AACD,2CACE,kBAAmB,AACnB,gDAAqD,AACrD,yBAA+B,CAChC,AACD,6BACE,iBAAmB,CACpB,AACD,2CACE,kBAAoB,CACrB,AACD,2CACE,gBAAiB,AACjB,YAAc,CACf,AACD,6CAEE,cAAgB,CACjB,AACD,wCACE,cAAgB,CACjB,AACD,mCACE,eAAgB,AAChB,mBAAoB,AACpB,eAAiB,CAClB",file:"detailJj.vue",sourcesContent:["\n.financial-box[data-v-424801ca] {\r\n  /* Safari */\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\n}\n.financial-box>div[data-v-424801ca] {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n  width: 33.33%;\n}\n.financial-detail-box[data-v-424801ca] {\r\n  /* Safari */\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  font-size: 12px;\r\n  color: #abb6ba;\n}\n.financial-detail-box>div[data-v-424801ca] {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n  width: 33.33%;\n}\n.market-detail-box>div[data-v-424801ca] {\r\n  width: 25%;\n}\n.nhsyl[data-v-424801ca] {\r\n  font-size: 26px;\r\n  color: #ef4f4f;\n}\n.nhsyl-text[data-v-424801ca] {\r\n  font-size: 14px;\r\n  color: #bbb;\n}\n.qx[data-v-424801ca] {\r\n  margin-top: 12px;\n}\n.qx-text[data-v-424801ca] {\r\n  font-size: 14px;\r\n  color: #7089ff;\r\n  border-right: 1px solid #ddd;\r\n  padding: 0 4px;\r\n  margin-right: 4px;\n}\n.app-content[data-v-424801ca] {\r\n  height: 100%;\r\n  background: #111;\n}\n.financial-content[data-v-424801ca] {\r\n  height: 100%;\r\n  background: #efeee9;\n}\n[data-v-424801ca]::-webkit-scrollbar {\r\n  width: 0px;\r\n  height: 1px;\n}\n[data-v-424801ca]::-webkit-scrollbar-thumb {\r\n  border-radius: 5px;\r\n  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\r\n  background: rgba(0, 0, 0, 0.2);\n}\n.app-header[data-v-424801ca] {\r\n  position: relative;\n}\n.financial-detail-content[data-v-424801ca] {\r\n  background: #efeee9;\n}\n.financial-detail-message[data-v-424801ca] {\r\n  background: #fff;\r\n  padding: 12px;\n}\n.nhsy[data-v-424801ca],\r\n.fqx[data-v-424801ca] {\r\n  font-size: 18px;\n}\n.financial-detail-list[data-v-424801ca] {\r\n  margin-top: 6px;\n}\n.list-infinite li[data-v-424801ca] {\r\n  margin-top: 6px;\r\n  margin-bottom: 12px;\r\n  padding: 4px 6px;\n}\r\n"],sourceRoot:""}])},494:function(a,t,i){var n=i(427);"string"==typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);i(229)("290dc03f",n,!0)},565:function(a,t){a.exports={render:function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{staticClass:"_full_router financial-detail-content"},[i("div",{staticClass:"app-header"},[i("div",{staticClass:"top-back",on:{click:a.goBack}},[i("span",{staticClass:"iconfont icon-return-arrow"})]),a._v(" "),i("div",{staticClass:"center"},[a._v("\r\n      详情\r\n    ")])]),a._v(" "),i("div",{staticClass:"financial-detail-message"},[i("h1",{staticStyle:{margin:"6px 0"}},[a._v(a._s(a.financial.stkName))]),a._v(" "),i("div",{staticClass:"financial-detail-box market-detail-box"},[i("div",{},[i("div",{staticClass:"red",staticStyle:{"font-size":"24px"}},[a._v(a._s(a._f("toMoney")(a.financial.hqzjcj)))])]),a._v(" "),i("div",[i("div",[a._v("高"),i("span",{staticClass:"red"},[a._v(a._s(a._f("toMoney")(a.financial.hqzgcj)))])]),a._v(" "),i("div",[a._v("低"),i("span",{staticClass:"red"},[a._v(a._s(a._f("toMoney")(a.financial.hqzdcj)))])])]),a._v(" "),i("div",[i("div",[a._v("开"),i("span",{staticClass:"red"},[a._v(a._s(a._f("toMoney")(a.financial.hqjrkp)))])]),a._v(" "),i("div",[a._v("开"),i("span",{staticClass:"red"},[a._v(a._s(a._f("toMoney")(a.financial.hqjrkp)))])])]),a._v(" "),i("div",[i("div",[a._v("量"),i("span",{},[a._v(a._s(a.financial.hqcjsl))])]),a._v(" "),i("div",[a._v("额"),i("span",{},[a._v(a._s(a._f("toMoney")(a.financial.hqcjje)))])])])])]),a._v(" "),i("div",{staticClass:"financial-detail-list"},[i("label",{staticStyle:{"font-size":"12px",color:"#999"},attrs:{for:""}},[a._v("买入队列")]),a._v(" "),0==a.quoteQueueBuy.length?i("div",{staticStyle:{height:"100px","line-height":"100px","text-align":"center","font-size":"24px",color:"#777"}},[a._v("\r\n      暂无买入队列\r\n    ")]):a._e(),a._v(" "),i("ul",{staticClass:"list-infinite "},a._l(a.quoteQueueBuy,function(t,n){return i("li",[i("div",{staticClass:"financial-box"},[i("div",[i("div",{},[a._v(a._s(t.xyydh))])]),a._v(" "),i("div",[i("div",{staticClass:"red"},[a._v(a._s(a._f("toMoney")(t.xywtjg)))])]),a._v(" "),i("div",[i("div",[a._v(a._s(t.xywtsl))])]),a._v(" "),i("div",{on:{click:function(t){a.bargainToSell(n)}}},[a._v("卖出")])])])})),a._v(" "),i("label",{staticStyle:{"font-size":"12px",color:"#999"},attrs:{for:""}},[a._v("卖出队列")]),a._v(" "),0==a.quoteQueueSell.length?i("div",{staticStyle:{height:"100px","line-height":"100px","text-align":"center","font-size":"24px",color:"#777"}},[a._v("\r\n      暂无卖出队列\r\n    ")]):a._e(),a._v(" "),i("ul",{staticClass:"list-infinite "},a._l(a.quoteQueueSell,function(t,n){return i("li",[i("div",{staticClass:"financial-box"},[i("div",[i("div",{},[a._v(a._s(t.xyydh))])]),a._v(" "),i("div",[i("div",{staticClass:"red"},[a._v(a._s(a._f("toMoney")(t.xywtjg)))])]),a._v(" "),i("div",[i("div",[a._v(a._s(t.xywtsl))])])])])}))]),a._v(" "),i("div",{staticClass:"app-footer normal-box"},[i("div",{staticClass:"center",on:{click:a.goPayBuy}},[a._v("\r\n      买入\r\n    ")]),a._v(" "),i("div",{staticClass:"center",staticStyle:{background:"#999"},on:{click:a.goPaySell}},[a._v("\r\n      卖出\r\n    ")])])])},staticRenderFns:[]}}});
//# sourceMappingURL=61.cc99f85521fceef188c8.js.map