
console.log('loaded!');
var img = document.getElementById('kartik');
var marginLeft=0;
function moveRight () {
	marginLeft=marginLeft+10;
	img.style.marginLeft= marginLeft+'px';
};
  img.onclick = function() 
  {
	var interval= setInterval(moveRight,100);
	
};
