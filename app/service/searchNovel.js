module.exports = app => {
  return class SearchNovel extends app.Service {
    * getNovelByName(par) {
    	//这里不转 中文egg会报错 resonponseerror
      console.log(par.name)
       const results2 = yield this.app.mysql.get('novel', { "name":par.name});
       if(results2){
        //  results2.status=1;//
        // results2.statusname="已收录"
         return {
          results:{data:{errorCode:0,message:results2}},
          
        };
       }

            const results = yield this.ctx.curl('http://localhost:3000/addNovel?name='+encodeURI(par.name), {
            // 必须指定 method
            method: 'GET',
            // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
            contentType: 'json',
            data: {

            },
            // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
            dataType: 'json',
          });
          return {
          results
        };
      }

      * addNovel(par){
      	var novelname=par.name;
		var data=yield this.ctx.service.searchNovel.getNovleByNamedb({name:novelname});
		console.log(data.results)
		if(data.results){
				let result={
      		errorCode:1,
      		message:"数据已存在，请到清单列表查看进度"
      		}
      		return result
		}
      	var novelurl=par.novelurl;
      	var url_space=novelurl.match(/.com\/(.*)/)[1]
      	var data={
      		'name': par.name,
    'rule':1,
     'url':par.novelurl,
     'statusType':1,
     'statusName':'已申报',
     'url_space':url_space,
     'charset':'utf-8',
     createdAt:new Date().Format("yyyy-MM-dd HH:mm:ss"),
     updatedAt:new Date().Format("yyyy-MM-dd HH:mm:ss"),
      	}
      const results=	yield this.app.mysql.insert("novel",data);
      let result;
      if(results.fieldCount==0){
      	result={
      		errorCode:0,	
      		message:"添加成功"
      	}
      }else{
      	result={
      		errorCode:1,
      		message:"添加失败"
      	}
      }
      return {result}
      		 
      }
      * getNovleByNamedb(par){
      	var results= yield this.app.mysql.get('novel', { "name":par.name});
      	return {results};
      }

  }
};
