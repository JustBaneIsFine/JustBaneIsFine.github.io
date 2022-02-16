const inputName = document.getElementById("inputName");
const inputAmount = document.getElementById("inputAmount");
const income = document.getElementById("income");
const expense = document.getElementById("expense");
const history = document.getElementById("history")
const currentBalance = document.getElementById("currentBalance");
const button = document.getElementById("submitButton");


const submitHandler = () => {

	var theValue = inputAmount.value; 
	var theSign = theValue[0]; 
	var storeBalance = Number(currentBalance.innerHTML); 
	var storeExpense = Number(expense.innerHTML);	
	var storeIncome = Number(income.innerHTML); 
	var storeValue = Number(theValue); 


	if (theSign === "-"){

		currentBalance.innerHTML = storeBalance - Math.abs(theValue);
		console.log(Number(currentBalance.innerHTML), "hello");
		expense.innerHTML = Math.abs(theValue) + Math.abs(storeExpense);
		historyExpense();
		// And add this to history as expense
	}
	else if(theSign === "+"){
		currentBalance.innerHTML = storeBalance + Math.abs(theValue);
		console.log( parseInt(currentBalance.innerHTML), "hello");
		income.innerHTML = Math.abs(theValue) + Math.abs(storeIncome);
		historyIncome();
		// And add this to history as income 
	};

inputAmount.value = "";
};
		


const createHistory = (type) => {

	const li = document.createElement("li");
	li.classList= "listItem";
	li.style = "background-color: white;"

	const createLabel = (id) => {
	 const label = document.createElement("label");
	 label.id = id;
	 return label;
	}


	const labelname = createLabel("nameSpace");
	const labeltype = createLabel("typeSpace");
	const labelamount = createLabel("amountSpace");

	li.appendChild(labelname);
	li.appendChild(labeltype);
	li.appendChild(labelamount);

	labelname.innerHTML = inputName.value;
	labeltype.innerHTML = type;
	labelamount.innerHTML = inputAmount.value;




	history.appendChild(li);
};


const historyIncome = () => {

	createHistory("income")
};



const historyExpense = () => {

	createHistory("expense")
};



submitButton.addEventListener("click", submitHandler);


window.onload = () => {
	inputName.value = "";
	inputAmount.value = "";
	income.innerHTML="";
	expense.innerHTML=="";
	currentBalance.innerHTML=="";
};