webpackJsonp([0],{216:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(75),a=n.n(o);e.default={props:{backText:{type:String,default:"返回"},curText:{type:String,default:"详情"},curText2:{type:String,default:"返回"}},data:function(){return{menu_active:{text:"列表"},dictId:"utilItems",selectShow:{isShow:!1}}},components:{selectBox2:a.a},methods:{back:function(){this.$router.go(-1)},getSelectSex:function(t){this.selectShow=!1},getSexs:function(){this.dictId="utilItems",console.log(this.selectShow),this.selectShow={isShow:!0}}}}},217:function(t,e,n){e=t.exports=n(203)(!0),e.push([t.i,".select-type{position:absolute}","",{version:3,sources:["G:/work/my-project-novel/src/components/index-header2.vue"],names:[],mappings:"AACA,aAEC,iBAAmB,CACnB",file:"index-header2.vue",sourcesContent:["\n.select-type{\n\n\tposition: absolute;\n}\n"],sourceRoot:""}])},218:function(t,e,n){var o=n(217);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(204)("431edeb5",o,!0)},219:function(t,e,n){n(218);var o=n(8)(n(216),n(220),null,null);t.exports=o.exports},220:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"_cover-top"},[n("div",{staticClass:"top-back",on:{click:t.back}},[n("div",{staticClass:"_ellipsis iconfont icon-return-arrow v-link-active"},[t._v(t._s(t.backText))])]),t._v(" "),n("div",{staticClass:"header-other"},[n("span",{staticClass:"iconfont icon-tips-jia",on:{click:t.getSexs}}),t._v(" "),n("div",{staticClass:"select-type"},[n("selectBox2",{attrs:{radioShOW:!1,"dict-id":t.dictId},on:{selectIndex:t.getSelectSex},model:{value:t.selectShow,callback:function(e){t.selectShow=e},expression:"selectShow"}})],1)]),t._v(" "),n("div",{staticClass:"center"},[t._v("\n\t\t\t "+t._s(t.curText)+"\n\t\t")])])},staticRenderFns:[]}},221:function(t,e,n){"use strict";function o(t){var e=t||"novel",n=new PouchDB(e);return console.log("init pounchdb"),n}function a(t,e){return t.post(e)}function r(t,e){return t.get(e)}function c(t,e,n){return n._id=e,t.put(n)}function s(t,e,n,o){var a=!1;"[object Array]"===Object.prototype.toString.call(e)&&(a=!0);var r=n.map(function(t){var n="";return a?e.forEach(function(e,a){n+=(o?o[a]:"")+t[e]}):n=(o||"")+t[e],t._id=n,t});return console.log(r),t.bulkDocs(r)}var i={initDB:o,addData:a,putData:c,getById:r,mulPutDatas:s};e.a=i},233:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){var o=n(33),a=n.n(o),r=n(21),c=n.n(r),s=n(20),i=n(219),u=n.n(i),l=n(76),d=n(221);e.default={name:"infodetail",data:function(){return{dbname:"novel",novelConetnt:"",currtChater:1,myDb:{},keyPath:"novel_chapter_id",osnovel:"novels"}},computed:a()({showprebtn:function(){return!(1==this.currtChater)},osnames:function(){return["novels","novel_content"+this.$route.query.novelId]},osname:function(){return"novel_content"+this.$route.query.novelId}},n.i(s.b)({getVersion:"getVersion"})),components:{indexHeader:u.a},mounted:function(){},created:function(){var t=this;t.myDb=d.a.initDB("novelContent"),t.initPounchDbData()},methods:a()({initPounchDbData:function(){var e=this;d.a.getById(e.myDb,"novel_id"+e.$route.query.novelId+"novel_chapter_id"+e.currtChater).then(function(t){console.log("indodetail",t),e.novelConetnt=t.content}).catch(function(n){console.log("indodetail",n),"not_found"===n.name&&c.a.get(t.URL_PREFIX+"/novelContentById?novelId="+e.$route.query.novelId+"&novelChapterId="+e.currtChater).then(function(t){e.novelConetnt=t.data.results.content}).catch(function(t){console.log(t)})})},initDbdata:function(){var e=this;e.updateWathced(),l.a.getDataByIndex(e.myDb.db,e.osname,e.currtChater,e.keyPath,function(n){e.myDb.db.close(),n&&n.content?e.novelConetnt=n.content:c.a.get(t.URL_PREFIX+"/novelContentById?novelId="+e.$route.query.novelId+"&novelChapterId="+e.currtChater).then(function(t){e.novelConetnt=t.data.results.content}).catch(function(t){console.log(t)})})},updateWathced:function(){var t=this;l.a.updateDataByKey(t.myDb.db,t.osnovel,parseInt(t.$route.query.novelId),"currentChapter",t.currtChater)},nextChapter:function(){var t=this;t.currtChater=parseInt(t.currtChater)+1,l.a.initDb(t.dbname,t.getVersion,function(e){t.setDbVersion(e);l.a.openDb(t.dbname,t.osname,t.getVersion+1,t.keyPath,t.myDb,function(){t.nextChapterSetp()})},function(){t.nextChapterSetp()},t.osname,t.keyPath,t.myDb)},nextChapterSetp:function(){var e=this;e.updateWathced(),l.a.getDataByIndex(e.myDb.db,e.osname,e.currtChater,e.keyPath,function(n){e.myDb.db.close(),n&&n.content?e.novelConetnt=n.content:c.a.get(t.URL_PREFIX+"/novelContentById?novelId="+e.$route.query.novelId+"&novelChapterId="+e.currtChater).then(function(t){e.novelConetnt=t.data.results.content}).catch(function(t){console.log(t)})})},preChapter:function(){var t=this;t.currtChater=parseInt(t.currtChater)-1,l.a.initDb(t.dbname,t.getVersion,function(e){t.setDbVersion(e);l.a.openDb(t.dbname,t.osname,t.getVersion+1,t.keyPath,t.myDb,function(){t.preChapterStep()})},function(){t.preChapterStep()},t.osname,t.keyPath,t.myDb)},preChapterStep:function(){var e=this;e.updateWathced(),l.a.getDataByIndex(e.myDb.db,e.osname,e.currtChater,e.keyPath,function(n){e.myDb.db.close(),n&&n.content?e.novelConetnt=n.content:c.a.get(t.URL_PREFIX+"/novelContentById?novelId="+e.$route.query.novelId+"&novelChapterId="+e.currtChater).then(function(t){e.novelConetnt=t.data.results.content}).catch(function(t){console.log(t)})})},getMenu:function(){var t=this;this.$router.push("/novelMenu?novelId="+this.$route.query.novelId+"&chapterId="+t.currtChater)}},n.i(s.c)({setDbVersion:"setDbVersion"}))}}.call(e,n(5))},247:function(t,e,n){e=t.exports=n(203)(!0),e.push([t.i,".app-content[data-v-255f158c]{overflow-y:auto}.group-buttons[data-v-255f158c]{text-align:center}.novel-content[data-v-255f158c]{padding:12px}","",{version:3,sources:["G:/work/my-project-novel/src/views/info/infoDetail.vue"],names:[],mappings:"AACA,8BACC,eAAiB,CACjB,AACD,gCACC,iBAAmB,CACnB,AACD,gCACC,YAAc,CACd",file:"infoDetail.vue",sourcesContent:["\n.app-content[data-v-255f158c]{\n\toverflow-y: auto;\n}\n.group-buttons[data-v-255f158c]{\n\ttext-align: center;\n}\n.novel-content[data-v-255f158c]{\n\tpadding: 12px;\n}\n"],sourceRoot:""}])},252:function(t,e,n){var o=n(247);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(204)("e478455a",o,!0)},257:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"_full_router component-chat-detail "},[n("div",{staticClass:"_full_inner"},[n("header",{staticClass:"app-header"},[n("indexHeader")],1),t._v(" "),n("div",{staticClass:"app-content"},[n("div",{staticClass:"group-buttons"},[t.showprebtn?n("mt-button",{attrs:{type:"primary",size:"small"},on:{click:t.preChapter}},[t._v("上一章")]):t._e(),t._v(" "),n("mt-button",{attrs:{type:"primary",size:"small"},on:{click:t.getMenu}},[t._v("目录")]),t._v(" "),n("mt-button",{attrs:{type:"primary",size:"small"},on:{click:t.nextChapter}},[t._v("下一章")])],1),t._v(" "),n("p",{staticClass:"novel-content",domProps:{innerHTML:t._s(t.novelConetnt)}},[t._v("\n\t\t\t\t\t"+t._s(t.novelConetnt)+"\n\t\t\t\t")]),t._v(" "),n("div",{staticClass:"group-buttons"},[n("mt-button",{directives:[{name:"show",rawName:"v-show",value:t.showprebtn,expression:"showprebtn"}],attrs:{type:"primary",size:"small"},on:{click:t.preChapter}},[t._v("上一章")]),t._v(" "),n("mt-button",{attrs:{type:"primary",size:"small"},on:{click:t.getMenu}},[t._v("目录")]),t._v(" "),n("mt-button",{attrs:{type:"primary",size:"small"},on:{click:t.nextChapter}},[t._v("下一章")])],1)])]),t._v(" "),n("router-view")],1)},staticRenderFns:[]}},77:function(t,e,n){n(252);var o=n(8)(n(233),n(257),"data-v-255f158c",null);t.exports=o.exports}});
//# sourceMappingURL=0.7ac4217d8077a69b0e73.js.map