const getIt = (x) => {return document.getElementById(x)};
const storage = window.localStorage;
const storageList = JSON.parse(storage.getItem("recipeApp"));

// getting all the elements..
const nameInput = getIt("inputName");
const howToInput = getIt("inputArea");
const ingredientInput = getIt("inputIngredient");
const addIngButton = getIt("addIngredientButton");
const createButton = getIt("createRecipeButton");
const deleteButton = getIt("deleteRecipeButton");
const ingredientList = getIt("ingredientList");
window.onload  = () => {
	clearInputs();
}

const addIngHandler = () => 
	{
		const value = ingredientInput.value;
		if (value != "" ){
			createIngredient(value);
			ingredientInput.value = "";
		}



	}

const createIngredient = (text) => 
	{
		const ce = (x) => {return document.createElement(x)};

		const div = ce("div");
		div.setAttribute("id", "ingredientContent");

		const textLabel = ce("label");
		textLabel.setAttribute("id","textLabel");
		textLabel.innerHTML = text;

		const checkBox = ce("input");
		checkBox.setAttribute("type","checkbox");
		checkBox.setAttribute("id","checkBox");

		const deleteLabel = ce("label");
		deleteLabel.setAttribute("id","deleteLabel");
		deleteLabel.innerHTML = "X";

		div.appendChild(textLabel);
		div.appendChild(checkBox);
		div.appendChild(deleteLabel);

		ingredientList.appendChild(div);

		deleteLabel.addEventListener("click", deleteIngredient);


	// <div id="ingredientContent"> 
	// 		<label id="textLabel">text</label>
	// 		<input id="checkBox" type="checkbox"> 
	// 		<label id="deleteLabel">X</label>
	// 	</div>


	}


const createHandler = () => 
	{
		const name = nameInput.value;
		const how = howToInput.value;

		ingredientList.childNodes.forEach(x => console.log(x));


			// THIS IS WHERE YOU LEFT OFF <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
			// save ingredient name and check status in an object 
			// together with all other data (recipe name, text)
			// and store it..



		//window.location = "../index.html";
	}


const deleteHandler = () => 
	{
		const result = confirm("Are you sure you want to delete all the data?");
		if (result === true){location.reload()};
		
	}

const deleteIngredient = () => 
	{
		const element = event.target.parentElement;
		element.remove();

	}

const clearInputs = () => 
	{
		nameInput.value = "";
		ingredientInput.value = "";
		howToInput.value = "";
		ingredientList.innerHTML = "";
	}

addIngButton.addEventListener("click", addIngHandler);
createButton.addEventListener("click", createHandler);
deleteButton.addEventListener("click", deleteHandler);