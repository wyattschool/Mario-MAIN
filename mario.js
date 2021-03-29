// TODO #2
// Take in user input for the height
// let height = 0;
/*height = prompt("How high should the pyramid be?",5);
while (height<=1){
	height = prompt("How high should the pyramid be?",5);
}
height = parseInt(height);

/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *         ##
 *        ###
 *       ####
 *      #####
 *     ######
 */

var height = 2;
var block = "";
console.log("First" + height);
function determineHeightAndThenDrawPyramid() {
	document.getElementById("pyramid").innerText = "";
	height = document.getElementById("height").value;
	document.getElementById("height1").innerHTML=height;
	height = parseInt(height) + 1;
	console.log("Second" + height);
	pogpog = height;
	displayHeight();
	printPyramid();
}

function displayHeight() {
	document.getElementById("height").innerHTML;
}

var pyramid = []
function printPyramid() {
	console.log("THE FREAKING HEIGHT IS " + height);
	block = document.getElementById("block").value;
	let space = "&nbsp;";
	let spaces = 0;
	let layer = "";
	console.log("Third" + height);
	hh = height;
	for(r=height;r>0;r--){

		heightHeight=height +1;
		for(h=0;h<heightHeight;h++){
			layer=layer+block;
			}
		for(i=hh;i>height+1; i--){
			layer=space+layer;
			}
	
		let y = r -1 ;
		pyramid[y]=(layer);
		layer = "";
		console.log("Forth" + height);
		height = height-1;
		console.log("Fifth" + height);
	}

// printPyramid(height);
console.log("Sixth" + height);
// document.getElementById("pyramid1").innerHTML = "<p>";
console.log("pogpog=" + pogpog);
let rowStr = "";
for(pog=0;pog<pogpog;pog++){
	// rowStr = "";
	
	// document.write("<br>")
	rowStr = pyramid[pog];
	// rowStr = rowStr + "<br>"
	//rowStr = rowStr + "<br>"
	
	pyramidID = pogpog;
	//document.getElementById("pyramid").innerHTML = "<h4><div id=" +pyramidID +"></div></h4>"
	//document.getElementById(pyramidID).innerHTML = rowStr;
	console.log(rowStr);
	rowStr = rowStr + "";
	pyramid[pogpog-1] = ""; // takes out last line
	document.getElementById("pyramid").innerHTML += "<p>" + rowStr +"<p>";
	
}
//document.getElementById("pyramid2").innerHTML = "</p>";
//console.log(rowStr);


}