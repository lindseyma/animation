var canvas = document.getElementById("slate");
var ctx=canvas.getContext("2d");
ctx.fillStyle = "#990a2b";

//dvd img
var image=new Image();
image.src="dvd.png";

var stop = document.getElementById('stop');
stop.addEventListener("click", function(){
	window.cancelAnimationFrame(rid);
});

var rid;

var dvd = document.getElementById('dvd');
dvd.addEventListener('click', function(){
	window.cancelAnimationFrame(rid);
	var velX=1;
	var velY=1;
	var maxX=canvas.width-128;
	var maxY=canvas.height-128+26;
	var x = Math.random()*maxX;
	var y = Math.random() * maxY;
	//var maxX = canvas.width-128;
	//var maxY = canvas.height-128+26;
	
	var d = function(){
	    ctx.clearRect(0,0,canvas.width,canvas.height);
	    ctx.beginPath();
	    ctx.drawImage(image,x,y);
	    console.log("drew img?");
	    if(x>=maxX||x<=0){
		velX*=-1;
	    }
	    if(y>=maxY||y<=-26){
		velY*=-1;
	    }
	    x+=velX;
	    y+=velY;
	    rid=window.requestAnimationFrame(d);
	};
	d();
    });

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

