var canvas = document.getElementById("slate");
var ctx=canvas.getContext("2d");
ctx.fillStyle = "#ff80ff";

var stop = document.getElementById('stop');
stop.addEventListener("click", function(){
	window.cancelAnimationFrame(rid);
});

var rid;

var circle= document.getElementById('grow');
circle.addEventListener("click", function(){
    console.log("ani");
    window.cancelAnimationFrame(rid);
    var grow;
    var x=0;

    var dot=function(){
	console.log("dot");
	ctx.clearRect(0,0,canvas.width,canvas.height);
	//console.log(rid);
	ctx.beginPath();
	ctx.arc(300,300,x,0,2*Math.PI);
	if (x>=300){
	    grow=false;
	}
	if (x<=0){
	    grow=true;
	}
	if(grow){
	    x++;
	}
	else{
	    x--;
	}
	ctx.fill();
	rid=window.requestAnimationFrame(dot);
	//rid=window.requestAnimationFrame(dot);
    }
    dot();
});

//rid=window.requestAnimationFrame(dot);
//dot();

/*
var stop=function(){
	window.cancelAnimationFrame(rid);
	};*/

