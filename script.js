let heading = document.getElementById("title");
let executeButton = document.getElementById("executeButton");
let outputParagraph = document.getElementById("outputText");
let inputElement = document.getElementById("myInput");

let reply = ["Did you just say ", "So, you are saying that ", "Do you mean ", "I'm not sure if you really mean that ", "I think you mean "];


function generate(incUserInput){
	var randomIndex = Math.floor(Math.random() * reply.length);
	var selectedRandomReply=reply[randomIndex];
	outputParagraph.innerText=selectedRandomReply + " " + incUserInput + "?";


}


function restyle(){
	let R= Math.random()*255;
	let G= Math.random()*255;
	let B= Math.random()*255;
	let R2= Math.random()*255;
	let G2= Math.random()*255;
	let B2= Math.random()*255;
	let colorString = "rgb(" + R + "," + G +","+ B +")"	
	let colorString2 = "rgb(" + R2 + "," + G2 +","+ B2 +")"	

	let randtr = -20 + (Math.random()*40);
	let randsize= 20 + (Math.random()*40);
	let randper= 20 +(Math.random()*300);

	intro.style.color=colorString;
	outputText.style.color=colorString2
	title.style.transform = "rotate("+ randtr + ")"
	title.style.fontSize= randsize +"pt"
	outputContainer.style.height=randper+"pt"



}

executeButton.addEventListener("click", function(){
	var currentInputText = inputElement.value
	generate(currentInputText);
	restyle();

})


