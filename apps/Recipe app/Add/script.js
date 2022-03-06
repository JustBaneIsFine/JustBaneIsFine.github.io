const getIt = (x) => {return document.getElementById(x)};
const storage = window.localStorage;

var storageList = JSON.parse(storage.getItem("recipeApp"));

if (storageList === null){storage.setItem("recipeApp",JSON.stringify([]))};

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

										// IMPORTANT.. WE MUST HAVE RECIPE ID.. If two identical recipes exsist (accident or not), you can't delete one
										// without affecting the other, so recipe ID is a must!

	// <div id="ingredientContent"> 
	// 		<label id="textLabel">text</label>
	// 		<input id="checkBox" type="checkbox"> 
	// 		<label id="deleteLabel">X</label>
	// 	</div>


	}


const createHandler = () => 
	{	
		const id = Math.random().toString(16).slice(2);
		const recipeName =  nameInput.value;
		const how = howToInput.value;
		const ingredients = [];

		//take each ingredient and it's status
		// and push it as object to ingredients array..

		ingredientList.childNodes.forEach(x => 
			{ 	const ingName = x.childNodes[0].innerHTML;
				const check =  x.childNodes[1].checked;

					ingredients.push({ingName,check});

			});


			// create an object from the whole recipe
			// so we can store it easly..
			const newRecipeObject = {
				"name": recipeName,
				"how": how,
				"ingredients": ingredients,
				"id" : id
			}


			var newList = storageList.concat(newRecipeObject); // new list will include all previous recipes + this new one..

			storage.setItem("recipeApp",JSON.stringify(newList)); // save this new list to storage

			storageList = JSON.parse(storage.getItem("recipeApp"));	// and update our list for usage in javascript
			console.log(storageList);


		window.location = "../index.html";
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