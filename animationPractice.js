var canvas = document.getElementById("slate");
var ctx=canvas.getContext("2d");
ctx.fillStyle = "#ff80ff";

var b = document.getElementById('b');
b.addEventListener("click", stop);

var rid;
var x=0;
var dot=function(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	console.log(rid);
	ctx.beginPath();
	ctx.arc(x,50,20,0,2*Math.PI);
	x++;	
	ctx.fill();
	rid=window.requestAnimationFrame(dot);
}

//rid=window.requestAnimationFrame(dot);
//dot();

var stop=function(){
	window.cancelAnimationFrame(rid);
};
