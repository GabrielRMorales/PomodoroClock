$(document).ready(function(){

var timerOff=true, interval, counter=0, isBreak=false;
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
	if (isBreak==false){
	var session_value=$("#session").html();	
	$("#session").html(parseInt(session_value)+1);
	if (timerOff==true){
	$("#minutes").html($("#session").html());
}
}
});
$("#subtractSession").click(function(){
	if (isBreak==false){
	var session_value=$("#session").html();
	if (parseInt(session_value)>1){
	$("#session").html(parseInt(session_value)-1);
	if (timerOff==true){
	$("#minutes").html($("#session").html());
	}
}
}
});

//Timer controls


$("#timer").click(function(){
	var minutes=$("#minutes").html(), seconds=$("#seconds").html();
	minutes=parseInt(minutes);
	seconds=parseInt(seconds);
	counter++;
function countdown(){
	var seconds=$("#seconds").html(), minutes=$("#minutes").html();
	seconds=parseInt(seconds);
	minutes=parseInt(minutes);
	/*console.log("Seconds: "+seconds);
	console.log("Minutes: "+minutes);
	console.log("break: "+isBreak);*/
	$("#seconds").html(seconds-=1);
	//Set Break value
	if (seconds==0&&minutes==0){
		if (isBreak==false){
		alert("Your break has started!");
		var break_value=$("#break").html();
		$("#session_title").html("Break");
		$("#minutes").html(break_value-1);
		$("#seconds").html(59);
		isBreak=true;
			}
		else {
		alert("break over");
		window.location.reload();
		/*$("#session_title").html("Session");
		countdownOff();
		alert("Your break is up. Back to work!");
		isBreak=false;*/
		}	
	}
	//
	else if (seconds==0){
	 	$("#minutes").html(minutes-=1);
	 	$("#seconds").html(59);
	 }
	 //fixing seconds display
	 if (parseInt($("#seconds").html())<10){
	$("#colon").html(":0");
	}
	else {
		$("#colon").html(":");
	}
}
function countdownOn(){
	timerOff=false;
	countdown();
	interval=setInterval(countdown,1000);
	return false;
}
function countdownOff(){
	timerOff=true;
	clearInterval(interval);
	return false;
}
//function ends here
//for initial click
	if (counter==1){
		$("#seconds").html(60);
		$("#minutes").html(minutes-=1);
		countdownOn();
		}
	//start/restart timer
	else if (counter%2==1){
		countdownOn();
	}
	//pause timer
	else if (counter%2==0){
		countdownOff();
	}
});


});
