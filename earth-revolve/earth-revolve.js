var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(100, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
