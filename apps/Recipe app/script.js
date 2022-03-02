const getIt = (x) => {return document.getElementById(x)};
const storage = window.localStorage;
const storageList = JSON.parse(storage.getItem("recipeApp"));


const searchInput = getIt("searchInput");
const displayRecipes = getIt("recipeList");
const addButton = getIt("addRecipe");

window.onload = () => {
	clearInputs();
	loadItems();
}


const clearInputs = () => {
	searchInput.value = "";
}

const loadItems = (items) => {

	clearItemList // so that you don't duplicate
	if (items === null){
		// storage.forEach // createElement...
	} else {
		// items will be an array of id's that search function will send
		// so we load storage.forEach if item.id === storage.id
		// and we createElement
	}

	}


const createElement = (id,name,text, ingredients, check) => {

}

const addHandler = () => {
	window.location = "Add/index.html";

}

const searchHandler = (e) => {
	const search = searchInput.value;
	const idList = [];

	storageList.forEach(x => {
	if (x.recipeName.includes(search)){
		console.log(x);

		//.......
		//.......
		//.......
		//This is where you left off
		//Check to see if this works.....
		//.......
		//.......
		//.......

	} 







	})





	loadItems(idList);



}
	
addButton.addEventListener("click", addHandler);
searchInput.addEventListener("input", searchHandler);




// const createStorage = () => storage.setItem("recipeApp", []);
// const loadStorage = () =>  {
// 	if (storage.getItem("recipeApp") != null){
// 	return storage.getItem("recipeApp")}
// }

