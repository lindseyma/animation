var canvas = document.getElementById("slate");
var ctx=canvas.getContext("2d");
ctx.fillStyle = "#ff80ff";

var b = document.getElementById('b');
b.addEventListener("click", stop);

var rid;
var x=0;
var dot=function(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	//console.log(rid);
	ctx.beginPath();
	ctx.arc(300,300,x,0,2*Math.PI);
	x+=growOrShrink;
	ctx.fill();
	rid=window.requestAnimationFrame(dot);
	//rid=window.requestAnimationFrame(dot);
}

rid=window.requestAnimationFrame(dot);
//dot();

var stop=function(){
	window.cancelAnimationFrame(rid);
};

var growOrShrink=1;
var growOrShrink = function(x){
	console.log(growOrShrink);
	if(x>150){
		return -1;
	}
	if(x=1){
		return 1;
	}
}
