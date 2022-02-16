const getIt = (x) => {return document.getElementById(x)};


const addButton = getIt("addButton");
const changeButton = getIt("changeButton");
const statusWeight = getIt("statusWeight");
const statusChange = getIt("statusChange");
const statusFromGoal = getIt("statusFromGoal");
const statusWeek = getIt("statusWeek");
const statusMonth = getIt("statusMonth");
const statusTotalChange = getIt("statusTotalChange");
const statusGoal = getIt("statusGoal");
const historyList = getIt("list");
const date = new Date();
const labelHistory = getIt("labelhistory")

const createElement = (input,old) => {
	const li = document.createElement("li");
	li.classList.add("historyComp");

	const labelDate = document.createElement("label");
	const labelChange = document.createElement("label");
	const labelWeight = document.createElement("label");

	labelDate.setAttribute("id","date");
	labelChange.setAttribute("id","changeh");
	labelWeight.setAttribute("id","weight");


	labelDate.innerHTML = date.getDay() + "/" + date.getMonth() + 1 + "/" + date.getFullYear();
	labelWeight.innerHTML = input;
	let oldWeight = statusWeight.innerHTML;
 	let result = input-old;

	if (result <=0){
		labelChange.innerHTML = result;
	} else {
		let newNum = "+" + result;
		labelChange.innerHTML = newNum;
	}

	li.append(labelDate);
	li.append(labelChange);
	li.append(labelWeight);


labelHistory.insertAdjacentElement('afterend', li);
}



const addHandler = () => {
	let oldWeight = statusWeight.innerHTML;
	let inputWeight =  window.prompt("please enter your current weight");


	statusWeight.innerHTML = inputWeight;
	let newChange = inputWeight - oldWeight;
	if (newChange <=0){
		statusChange.innerHTML = newChange;
	} else {
		let newNum = "+" + newChange;
		statusChange.innerHTML = newNum;
	}

	statusFromGoal.innerHTML = statusGoal.innerHTML - inputWeight;
	createElement(inputWeight,oldWeight);
};

const changeHandler = () => {
	let current = statusWeight.innerHTML;


	let inputGoal =  window.prompt("please enter your desired weight");
	statusGoal.innerHTML = inputGoal;
	statusFromGoal.innerHTML = inputGoal-current;

};

addButton.addEventListener("click", addHandler);
changeButton.addEventListener("click", changeHandler);

