$(function(){
	mui('.mui-scroll-wrapper').scroll({
		deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
	});
	//获取一级分类数据
	$.ajax({
		type:"get",
		url:"",
		data:,
		success:function(response){
			
		}
	});
	//获取二级分类数据
	$("#links").on("click","a",function(){
		
		
		$.ajax({
			type:"get",
			url:"",
			data,
			success:function(response){
			
			}
		});
	});
})









