
var callbacks=[];
var allfun={
	"t1":function(data,callHandler){

		setTimeout(function(){
			callHandler(data)
		},1000)
	},
	t2:function(data,callHandler){
		setTimeout(function(){
			callHandler(data)
		},2000)
	}
}
function callHandler(name,data,callHandler){
	allfun[name](data,callHandler);

}


function getcallHandler(name,data,callback){
callHandler(name,data,function(data){
	callback(data);
})
}

getcallHandler("t1",{a:1},function(data){
	alert("t1");
	alert(JSON.stringify(data))
})
getcallHandler("t2",{a:2},function(data){
	alert("t2");
alert(JSON.stringify(data))
})