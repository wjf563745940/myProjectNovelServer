module.exports = app => {
  return class Topics extends app.Service {
    * findNovelCotentById() {
      // 假如 我们拿到用户 id 从数据库获取用户详细信息
   //    const client1 = yield app.mysql.get('db1');
   //    console.log("clinet1========",client1)
   // const user=   yield client1.get('users', {id:11});
     // const user = yield app.mysql.get('novel');

      const results = yield this.app.mysql.select('novel', { // 搜索 post 表
      //  where: { status: 'draft', author: ['author1', 'author2'] }, // WHERE 条件
        //columns: [], // 要查询的表字段
        orders: [['createdAt','desc'], ['id','desc']], // 排序方式
        limit: 10, // 返回数据量
        offset: 0, // 数据偏移量
        });
      //const user={a:'1'}
        return {
          results,
        };
      }
    * find(query) {
      // 假如 我们拿到用户 id 从数据库获取用户详细信息
   //    const client1 = yield app.mysql.get('db1');
   //    console.log("clinet1========",client1)
   // const user=   yield client1.get('users', {id:11});
     // const user = yield app.mysql.get('novel');

      const results = yield this.app.mysql.select('novel', { // 搜索 post 表
      //  where: { status: 'draft', author: ['author1', 'author2'] }, // WHERE 条件
        //columns: [], // 要查询的表字段
        orders: [['createdAt','desc'], ['id','desc']], // 排序方式
        limit: 10, // 返回数据量
        offset: 0, // 数据偏移量
        where:query
        });
  		//const user={a:'1'}
//      const a=yield new Promise(function(resolve, reject) {

//  setTimeout(function(){
//   resolve(1);
// },1000)

// });
          return {
          results,
        };
    
      }
      * startCrawler(par){
        const result = yield this.ctx.curl('http://localhost:3000/pcasync?id='+par.id, {
            // 必须指定 method
            method: 'GET',
            // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
            contentType: 'json',
            data: {

            },
            // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
            dataType: 'json',
          });
        console.info("startCrawler"+result)
          return {
          results,
        };
      }
      * getNovelContentById(query){
        console.log(query ,"query======")
            const results = yield this.app.mysql.get('novel_content', { "novel_id":query.novelId,"novel_chapter_id":query.novelChapterId});
        return {
          results,
        };
      }
       * downloadNovelContentById(query){
        console.log(query ,"query======")
        var datain=[];
        query.in.split(",").forEach(function(item,index){
          datain.push(item);
        })
            const results = yield this.app.mysql.select('novel_content', { // 搜索 post 表
        where: { novel_id: query.novelId ,novel_chapter_id:datain}, // WHERE 条件
        //columns: [], // 要查询的表字段
        orders: [['novel_id','asc']], // 排序方式
        limit: 10000, // 返回数据量
        offset: 0, // 数据偏移量
        });
        return {
          results,
        };
      }
       * getChapters(query){

           const results = yield this.app.mysql.select('novel_chapter', { // 搜索 post 表
        where: { novel_id: query.novelId }, // WHERE 条件
        //columns: [], // 要查询的表字段
        orders: [['chapter_id','asc']], // 排序方式
        limit: 10000, // 返回数据量
        offset: query.offset, // 数据偏移量
        });
        return {
          results,
        };
      }
  }
};
