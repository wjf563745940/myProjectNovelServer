'use strict';

module.exports = app => {
  class SearchNovel extends app.Controller {
    * getNovelByName() {

     var  topics=yield this.ctx.service.searchNovel.getNovelByName({name:this.ctx.query.name});
       this.ctx.body=topics;
    }
    * addNovel(){
       var  topics=yield this.ctx.service.searchNovel.addNovel({name:this.ctx.query.name,novelurl:this.ctx.query.novelurl});
       this.ctx.body=topics;
    }
  
  }

  return SearchNovel;
};
