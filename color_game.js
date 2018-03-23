var colors = getColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = random();
var colorDisplay = document.querySelector("#color_display");
var messageDisplay = document.querySelector("#message");
var mode = "hard";
colorDisplay.textContent = pickedColor;
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy-btn");
var hard = document.querySelector("#hard-btn");

style();
for(var i=0;i<squares.length;++i){
	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor == pickedColor){
			messageDisplay.textContent = "Right!";
			reset.textContent = "Play Again?"
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!!"
		}
	});
}

easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	mode = "easy";
	easyMode();
});

hard.addEventListener("click",function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	mode = "hard";
	hardMode();
});

reset.addEventListener("click",function(){
	reset.textContent = "New Colors";
	if(mode === "easy"){
		easyMode();
	}else{
		hardMode();
	}
});

function easyMode(){
	colors = getColors(3);
	pickedColor = random();
	style();
	for(var i=3;i<squares.length;++i){
		squares[i].style.display = "none";
	}
}

function hardMode(){
	colors = getColors(6);
	pickedColor = random();
	style();
	for(var i=0;i<squares.length;++i){
		squares[i].style.display = "block";
	}
}

function style(){
	messageDisplay.textContent = "";
	pickedColor = random();
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<squares.length;++i){
		h1.style.backgroundColor = "steelblue";
		squares[i].style.backgroundColor = colors[i];
	}
}

function changeColors(color){
	for(var i=0;i<squares.length;++i){
		squares[i].style.backgroundColor = color;
	}
}

function random(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function getColors(size){
	var ans = [];
	for(var i=0;i<size;++i){
		var r = Math.floor(Math.random()*256);
		var g = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);
		var color = "rgb(" + r + ", " + g + ", " + b + ")";
		ans.push(color);
	}
	return ans;
}