const button = document.getElementById("button");
const input = document.getElementById("input");
const latin = document.getElementById("latin");
var performance = window.performance;

window.onload = () => {
	input.value = "";

}


const submitHandler = () => {
	var string = input.value;
	var stringarray = string.split(" ");

	var array = ["a","e","i","o","u"];

	let counter = 0;}



const saveIndex = (word,x) => {
	// takes the word and returns the index of the element needed.
	if (word.indexOf(x) != -1){
		return word.indexOf(x);
	} else { return 1000000;}
}

const adday = (a) => {return a.concat("ay")};
const addyay = (a) => {return a.concat("yay")};



const getFirstIndex = () => {
 	var string = input.value.toLowerCase();
 	var closestToOne = 1000000;
 	//stringarray takes the string and makes each word part of an array
	var stringarray = string.split(" ");

	const array = /["a","e","i","o","u"]/g;



				//for each word in the array
				// char = each character of the word is in this char array
				var result = [];
				var found;
 				stringarray.forEach(word => {

 					if (word.match(array) != null){

	 					var found = word.match(array);
	 					var firstmatch = found[0];

	 					if (word.indexOf(firstmatch) === 0){
	 						result.push(addyay(word));
	 					} else {
	 					let extracted = word.slice(word.indexOf(found[0]));  // hello >> ello;
	 					console.log("extracted: ", extracted);
	 					let remaining =  word.replace(extracted, ""); 			//h should remain
	 					console.log("remaining: ", remaining);
	 					let combined = extracted.concat(remaining);
	 					console.log("concated: ", combined);
	 					var resultingWord = adday(combined);
	 					console.log("End result: ", resultingWord);
	 					result.push(resultingWord);}

 					
 					} else {
 						result.push(adday(word));
 					}

 				}
 				// we found the first vowel of each word
 				// now we need to take everything from that vowels index, till the end and put it in the back..



 )	
 			var endResult = result.join(" ");
 			latin.innerHTML = endResult;
 			input.value = "";
 }

//we have two functions
// one adds AY at the end of the word
// the other looks at the first vowel it finds, if it finds it, and takes everything after it, and places it at the beggining of the word..
// so WHILE would say ILEWH + AY... cannot would say annotc + ay




button.addEventListener("click", getFirstIndex);