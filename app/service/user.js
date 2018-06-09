module.exports = app => {
  return class SearchNovel extends app.Service {
    * register(par) {
    	//这里不转 中文egg会报错 resonponseerror
		     var data=Object.assign(par,{
		     createdAt:new Date().Format("yyyy-MM-dd HH:mm:ss"),
		     updatedAt:new Date().Format("yyyy-MM-dd HH:mm:ss"),
		      	})
		      const results=	yield this.app.mysql.insert("user",data);
                    yield this.login(par);
         
          return {
          results
        };
      }
      *login(par){
        const results=  yield this.app.mysql.get("user",par);
        console.log("login===",results)
        if(results){
          this.ctx.session.login=results.name+results.password;
         return this.ctx.helper.Message(results);
       }else{
        return this.ctx.helper.ErrrorMessage("账号或密码错误");
       }
         
      }
      *loginout(){
         this.ctx.session.login=null;

         return  this.ctx.helper.Message("success")
         
      }
  }
}