
const addButton = document.getElementById("addButton");
const getInput = document.getElementById("inputform");
const main = document.getElementById("main");

window.onload = () => {
	getInput.value = "";
}	



//if delete sign is clicked, this function runs and find the parent element of the target
//after confirming the delete it deletes it obviously 
const targetDelete = (e) => {	

	const delme = e.target;
	const badcontent = delme.parentNode.parentNode.textContent;
	const content = badcontent.slice(0,-2);


	var result = confirm("Do you want to delete this task:  " + content);

	if (result === true){delme.parentNode.parentNode.remove()};
};

// The same as above, except it toggles the class of the element so it checks-out
const targetCheck = (e) => {	

	const check = e.target;
	const checkme = check.parentNode.parentNode;
	checkme.classList.toggle("done");

};

// Create function: creates the list item along with the check sign and delete sign. adds event listeners on the signs..
const create = () => {

	const value = getInput.value;
	const newLi = document.createElement("li");
	newLi.innerHTML = value;
	const createEl = () => document.createElement("span");

	const spanbox = createEl();
	spanbox.setAttribute("id", "box");
	const spancheck = createEl();
	spancheck.setAttribute("class", "checkSign");
	spancheck.innerHTML = "o";
	const spandel = createEl();
	spandel.setAttribute("class", "deleteSign");
	spandel.innerHTML = "x";


	spanbox.appendChild(spancheck);
	spanbox.appendChild(spandel);
	newLi.appendChild(spanbox);

	main.appendChild(newLi)

	spandel.addEventListener("click",targetDelete);
	spancheck.addEventListener("click",targetCheck);
	getInput.value = "";

}

addButton.addEventListener("click", create);