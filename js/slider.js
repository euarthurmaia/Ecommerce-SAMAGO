let buttonRight = document.getElementById('slideRight');
let buttonLeft = document.getElementById('slideLeft');

buttonLeft.addEventListener('click', function(){
	document.getElementById('slider').scrollLeft -= 200
});

buttonRight.addEventListener('click', function(){
	document.getElementById('slider').scrollLeft += 200
});

let buttonRight2 = document.getElementById('slideRight2');
let buttonLeft2 = document.getElementById('slideLeft2');

buttonLeft2.addEventListener('click', function(){
	document.getElementById('slider2').scrollLeft -= 200
});

buttonRight2.addEventListener('click', function(){
	document.getElementById('slider2').scrollLeft += 200
});

let buttonRight3 = document.getElementById('slideRight3');
let buttonLeft3 = document.getElementById('slideLeft3');

buttonLeft3.addEventListener('click', function(){
	document.getElementById('slider3').scrollLeft -= 200
});

buttonRight3.addEventListener('click', function(){
	document.getElementById('slider3').scrollLeft += 200
});

let buttonRight4 = document.getElementById('slideRight4');
let buttonLeft4 = document.getElementById('slideLeft4');

buttonLeft4.addEventListener('click', function(){
	document.getElementById('slider4').scrollLeft -= 200
});

buttonRight4.addEventListener('click', function(){
	document.getElementById('slider4').scrollLeft += 200
});