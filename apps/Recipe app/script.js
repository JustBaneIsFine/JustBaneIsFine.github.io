const getIt = (x) => {return document.getElementById(x)};
const storage = window.localStorage;
const storageList = JSON.parse(storage.getItem("recipeApp"));

const searchInput = getIt("searchInput");
const displayRecipes = getIt("recipeList");
const addButton = getIt("addRecipe");

window.onload = () => {
	clearInputs();
	// loadItems();
}


const clearInputs = () => {
	searchInput.value = "";
}

const loadItems = (items) => {
	displayRecipes.innerHTML = "";

	if (items === null)
	{
		//if there are no filtered recipes, load all recipes
			try {storageList.forEach(x => 
			{
				createEl(x.id,x.recipeName,x.ingredients,x.check);
			})
			} catch{}

	} else 
	{
		//if there are filtered recipes, show only those
			try {storageList.forEach(x => {
				for (i=0;i<storageList.length;i++){
					if (x.id===items[i]){
						createEl(x.id,x.recipeName,x.ingredients,x.check)
					}
				}})
			} catch {}

	}

	}


const createEl = (id,name,text, ingredients, check) => {

	const a = document.createElement("a");
	a.setAttribute("href", $(id)); // THIS IS WHERE YOU LEFT OFF<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< need to add href Add/index.html?id
	const h = document.createElement("h4");
	h.setAttribute("class","recipeItem");
	h.setAttribute("id",$(id));


	a.appendChild(h);
	displayRecipes.appendChild(a);


}

const addHandler = () => {
	window.location = "Add/index.html";

}


const searchHandler = (e) => {
	displayRecipes.innerHTML = "";	//clear current displayed items


	const search = searchInput.value;
	const idList = []; // create new empty array
	try {
		storageList.forEach(x => 
			{
				if (x.recipeName.includes(search))
				{
					idList.push(x.id);

				} // for each recipe in storage, compare searched item with that recipe
				  // if matches, push to idList
			})
	} catch {}
	
	loadItems(idList);	// then load that list 

};
	
addButton.addEventListener("click", addHandler);
searchInput.addEventListener("input", searchHandler);




// const createStorage = () => storage.setItem("recipeApp", []);
// const loadStorage = () =>  {
// 	if (storage.getItem("recipeApp") != null){
// 	return storage.getItem("recipeApp")}
// }

