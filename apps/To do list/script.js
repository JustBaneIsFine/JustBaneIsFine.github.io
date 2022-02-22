const storage = window.localStorage;
const addButton = document.getElementById("addButton");
const getInput = document.getElementById("inputform");
const main = document.getElementById("main");
var storedList = JSON.parse(storage.getItem("list"));

//code looks like cabbage curently.. But i will refactor it as soon as everything is working as desired..
//left to do: delete function and code refactoring..

window.onload = () => {
	getInput.value = "";
	loadItems();

}	

const loadItems = () => {
	if (storedList != null){
	storedList.forEach(x => {

		const newLi = document.createElement("li");
		var id = x.id;
		newLi.setAttribute("id", id);
		newLi.innerHTML = x.text;
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

		if (x.checked === "yes"){
			console.log("its a yES");
			newLi.classList.add("done");
		}


	})}



}

const saveItems = (value,id) => {
	if (storedList === null){
		storage.setItem("list", JSON.stringify([{"text": value, "checked":"no", "id":id}]));
	} else {
		const newobject = {"text": value, "checked": "no", "id":id};
		newList = storedList.concat(newobject);
		storage.setItem("list", JSON.stringify(newList));
	}

	storedList =  JSON.parse(storage.getItem("list"));

}



//if delete sign is clicked, this function runs and finds the parent element of the target
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
	var id = checkme.id;

		if (checkme.classList[0] === "done"){

			storedList.forEach(x => { if (x.id === id){
				console.log(x.checked,"checked");
				x.checked = "yes";
			}});
		

		} else {
			
			//do this
			storedList.forEach(x => { if (x.id === id){
				// do something..
				x.checked = "no";
				console.log("it ran NO");

			}})
		}

	storage.setItem("list", JSON.stringify(storedList));
	console.log(JSON.parse(storage.getItem("list")));
};


const createElement = (value) => {

	const newLi = document.createElement("li");
	var id = Math.random().toString(16).slice(2);
	newLi.setAttribute("id", id);
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
 	saveItems(value,id);
	
}


// Create function: creates the list item along with the check sign and delete sign. adds event listeners on the signs..
const createNew = () => {
	createElement(getInput.value);
	getInput.value = "";
}

addButton.addEventListener("click", createNew);