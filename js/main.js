$(document).ready(function(){
//Break value controls
$("#addBreak").click(function(){
	var break_value=$("#break").html();
	$("#break").html(parseInt(break_value)+1);
});
$("#subtractBreak").click(function(){
	var break_value=$("#break").html();
	if (parseInt(break_value)>1){
	$("#break").html(parseInt(break_value)-1);
	}
});
//Session value controls
$("#addSession").click(function(){
	var session_value=$("#session").html();
	$("#session").html(parseInt(session_value)+1);
	$("#timer").html($("#session").html());
});
$("#subtractSession").click(function(){
	var session_value=$("#session").html();
	if (parseInt(session_value)>1){
	$("#session").html(parseInt(session_value)-1);
	$("#timer").html($("#session").html());
	}
});

//Timer controls
var counter=0;
$("#timer").click(function(){
	var minutes=$("#minutes").html();
	var seconds=$("#seconds").html();
	
	minutes=parseInt(minutes);
	seconds=parseInt(seconds);
	if (counter==0){
		countdownInitiation();
		countdown();
	}
	else if (counter>0){
		countdown();
	}
	function countdownInitiation(){
	//var currentSeconds=$("#seconds").html();
	$("#seconds").html(59);
	$("#minutes").html(minutes-=1);
	counter++;
	/*if (currentSeconds>0){	
	$("#minutes").html(minutes-=1);
	$("#seconds").html(seconds-=1);
	}*/
	}
	function countdown(){
	$("#seconds").html(seconds-=1);
	$("#minutes").html(minutes-=1);
	}
	//setInterval(,1000);
});

});