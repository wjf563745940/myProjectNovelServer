//程序启用时 worker应用代码

module.exports = app => {
  // 在中间件最前面统计请求时间
  //app.config.coreMiddleware.unshift('report');

	 // app.messenger.on('xxx_action', data => {

  //   // ...
  // });
  app.beforeStart(function* () {
  	console.log("app before",app);
utilFixPro();
  });

 // app.Controller = CustomController;
};
function utilFixPro(){
	Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "H+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
}