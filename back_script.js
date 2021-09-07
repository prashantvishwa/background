var css = document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var m=document.getElementById("gradient");



color1.addEventListener("input", function(){
	back_gradient();
})
color2.addEventListener("input", function(){
	back_gradient();
})

function back_gradient(){

	m.style.background="linear-gradient(to right bottom,"
	+color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent=m.style.background + ";";

}

