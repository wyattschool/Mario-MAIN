// TODO #2
// Take in user input for the height
let height = 0;
height = prompt("How high should the pyramid be?",5);
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
var pyramid = []
function printPyramid(height) {
	let space = " ";
	let spaces = 0;
	let layer = "";
	hh = height;
	for(r=height;r>0;r--){

		heightHeight=height + 1;
		for(h=0;h<heightHeight;h++){
			layer=layer+"#";
			}
		for(i=hh;i>height; i--){
			layer=space+layer;
			}
	
		let y = r -1
		pyramid[y]=(layer);
		layer = "";
		height = height-1;
		
	}
}
printPyramid(height);
pogpog= height;

for(pog=0;pog<pogpog;pog++){
	console.log(pyramid[pog]);
}

