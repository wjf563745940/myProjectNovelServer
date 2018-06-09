'use strict';

module.exports = app => {
  class User extends app.Controller {
    * register() {
    	console.log("register",this.ctx.request.body)
     var  topics=yield this.ctx.service.user.register(this.ctx.request.body);
    // console.log("topics",topics)
     if(topics.results.affectedRows ===1){
     	var results={errorCode:0,message:"注册成功"}
     }else{
     	var results={errorCode:1,message:"注册失败"}
     }
       this.ctx.body=results;
    }
    * login(){
         var  topics=yield this.ctx.service.user.login(this.ctx.request.body);
         this.ctx.body=topics
    }
     * loginout(){
         var  topics=yield this.ctx.service.user.loginout();
         this.ctx.body=topics
    }
  
  }

  return User;
};
