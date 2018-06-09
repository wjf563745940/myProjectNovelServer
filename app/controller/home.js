'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index(ctx) {
    	console.log("controlle index");
     var  topics=yield this.ctx.service.topics.find(ctx.query?ctx.query:null);
       this.ctx.body=topics;
    }

     * startCrawler(ctx){
     // ctx.body = `search: ${ctx.query.id}`
    //  console.log(ctx.body )
  console.log("ctx.request",ctx.query)	;
  var  topics=yield this.ctx.service.topics.startCrawler({id:ctx.query.id});
       this.ctx.body=topics;

  }
  * getNovelContentById(ctx){
   // console.log(ctx.request.body) ;
     var  topics=yield this.ctx.service.topics.getNovelContentById(ctx.query);
       this.ctx.body=topics;
  }
 * getChapters(ctx){
   // console.log(ctx.request.body) ;
     var  topics=yield this.ctx.service.topics.getChapters(ctx.query);
       this.ctx.body=topics;
  }
  * downloadNovelContentById(ctx){
    console.log("ctx.query",ctx.query)
    var  topics=yield this.ctx.service.topics.downloadNovelContentById(ctx.query);
       this.ctx.body=topics;
  }
  
  }

  return HomeController;
};
