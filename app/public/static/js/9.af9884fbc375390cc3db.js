webpackJsonp([9],{206:function(t,n,e){e(253);var o=e(8)(e(235),e(261),null,null);t.exports=o.exports},221:function(t,n,e){"use strict";function o(t){var n=t||"novel",e=new PouchDB(n);return console.log("init pounchdb"),e}function i(t,n){return t.post(n)}function s(t,n){return t.get(n)}function a(t,n,e){return e._id=n,t.put(e)}function r(t,n,e,o){var i=!1;"[object Array]"===Object.prototype.toString.call(n)&&(i=!0);var s=e.map(function(t){var e="";return i?n.forEach(function(n,i){e+=(o?o[i]:"")+t[n]}):e=(o||"")+t[n],t._id=e,t});return console.log(s),t.bulkDocs(s)}var c={initDB:o,addData:i,putData:a,getById:s,mulPutDatas:r};n.a=c},235:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(33),i=e.n(o),s=e(21),a=(e.n(s),e(20)),r=e(76),c=e(221);n.default={name:"ruleList",data:function(){return{infoLists:[],keyPath:"id",myDb:{},osname:"novels"}},computed:i()({},e.i(a.b)({getVersion:"getVersion"})),created:function(){var t=this;t.myDb=c.a.initDB("novel"),t.getPounchDbNovel()},methods:i()({getPounchDbNovel:function(){var t=this;t.myDb.allDocs({include_docs:!0,attachments:!0}).then(function(n){if(console.log(n),0!==n.rows.length){var e=n.rows.map(function(t,n){if(t.doc.downstatue)return t.doc});t.infoLists=e}})},getAllNovel:function(){var t=this;console.log("data",t.infoLists),r.a.fetchStoreByCursor(t.myDb.db,t.osname,function(n){if(t.myDb.db.close(),console.log("data",n),0===n.length);else{var e=n.filter(function(t,n){return t.downstatue});t.infoLists=e}})},downloadnovel:function(t){this.$router.push("/novelMenuDownload?novelId="+this.infoLists[t].id)},getNovel:function(t){var n=this,e=n.infoLists[t],o=e.id;r.a.getDataByIndex(n.myDb.db,n.osname,o,n.keyPath,function(t){t?(n.myDb.db.close(),n.$router.push("/novelList/detail?novelId="+o+"&novelChapterId="+t.currentChapter)):(e.currentChapter=1,r.a.addData(n.myDb.db,n.osname,[e]),n.myDb.db.close(),n.$router.push("/novelList/detail?novelId="+o+"&novelChapterId=1"))})},infoDetail:function(t){var n=this;this.infoLists[t].id;r.a.initDb("novel",n.getVersion+1,function(e){n.setDbVersion(e);r.a.openDb("novel",n.osname,n.getVersion+1,n.keyPath,n.myDb,function(){n.getNovel(t),n.setDbVersion(n.getVersion+1)})},function(){n.getNovel(t),n.setDbVersion(n.getVersion+1)},n.osname,n.keyPath,n.myDb)}},e.i(a.c)({setNovel:"setNovel",setDbVersion:"setDbVersion"}))}},248:function(t,n,e){n=t.exports=e(203)(!0),n.push([t.i,".desc button{float:right;border:1px;background:#26a2ff;color:#fff;padding:6 12px}","",{version:3,sources:["G:/work/my-project-novel/src/views/info/novelListLocal.vue"],names:[],mappings:"AACA,aACC,YAAa,AACb,WAAY,AACZ,mBAAoB,AACpB,WAAY,AACZ,cAAgB,CAChB",file:"novelListLocal.vue",sourcesContent:["\n.desc  button{\n\tfloat: right;\n\tborder: 1px;\n\tbackground: #26a2ff;\n\tcolor: #fff;\n\tpadding: 6 12px;\n}\n"],sourceRoot:""}])},253:function(t,n,e){var o=e(248);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e(204)("78c70301",o,!0)},261:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"_full_inner _scroll _effect component-chat"},[e("ul",{staticClass:"wechat-list"},t._l(t.infoLists,function(n,o){return e("li",{staticClass:"item _line-fine chat-item-transition"},[e("div",{staticClass:"info",attrs:{index:o},on:{click:function(n){t.infoDetail(o)}}},[e("div",{staticClass:"desc"},[e("span",[t._v(t._s(n.name))]),t._v(" "),e("button",{attrs:{type:"button",index:o},on:{click:function(n){n.stopPropagation(),n.preventDefault(),t.downloadnovel(o)}}},[t._v("下载")])])])])}))]),t._v(" "),e("transition",{attrs:{name:"slide-right"}},[e("router-view",{staticClass:"cover-transition"})],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=9.af9884fbc375390cc3db.js.map