// storage, score, level
	const storage = window.localStorage;
	if(storage.getItem("store") === null)
		{
			storage.setItem("store",JSON.stringify(0));
		} 
	var storedHighscore = JSON.parse(storage.getItem("store"));
	const highscoreBox = document.getElementById("highScore");
	var score = 0;
	var level = 1;

const canvas = document.getElementById("canvas");

window.onload = () => 
	{
		gameArea.start();
		highscoreBox.innerHTML =  JSON.parse(storage.getItem("store"));
	}


var gameArea = 
	{
		canvas: document.createElement("canvas"),
		start: function ()
			{
				
				
				
				//this.gameInterval = setInterval(updateGameArea,1000/120);
				//this.moveInterval = setInterval(moveShapeDown,500);
				this.canvas.width = 800;
				this.canvas.height = 500;
				this.context = this.canvas.getContext("2d");
				this.canvas.style = "background-color: white";
				document.body.childNodes[3].insertBefore(this.canvas, document.body.childNodes[3].childNodes[0]);
				
				this.keys = 
					{
						 37: {pressed: false, func: function(){}},
						 65: {pressed: false, func: function(){}},  
						 39: {pressed: false, func: function(){}},  
						 68: {pressed: false, func: function(){}},
						 87: {pressed: false, func: function(){}},
						 38: {pressed: false, func: function(){}},
						 83: {pressed: false, func: function(){}},
						 40: {pressed: false, func: function(){}},
						 32: {pressed: false, func: function(){}},

					};
				window.addEventListener("keydown", function(e)
						{
							
							if(gameArea.keys[e.keyCode]){
								gameArea.keys[e.keyCode].pressed = true;
							}

						});
				window.addEventListener("keyup", function(e){
							if(gameArea.keys[e.keyCode]){
								gameArea.keys[e.keyCode].pressed = false;
								player.speedX = 0;
							}
							})
			},
		
		clear: function()
			{	
				this.context.fillStyle = "white";
				this.context.fillRect(0,0,this.canvas.width,this.canvas.height);
			}
	};
var ctx = gameArea.canvas.getContext("2d");
var currentShapeObj;
var currentRotation;
var rotationNum;
var currentTopLeft;
var potentialTopLeft;
var canvasArray = createCanvasArray();

//Create CanvasArray
	function createCanvasArray()
		{
			var w = 800/20;  //40 
			var h = 500/20;  //25
			var array = [];
			var zeros = [];
			// adds 40 0's to zeros array;
			for (x = 0; x<w; x++)
						{
							zeros.push(0);
						}


			// for each 25 rows
			// add 40 zeros
			for (i = 0;i<h;i++)
				{
					// for each row, add 40 zeros
					array.push(zeros);
				}

			return array;
		}

//Shapes and rotations
	
	var shapes = [
				{"num":1;"shapeColor":"red";"rotation":[
						[
							[1,1],
							[1,1]
						],
						[
							[1,1],
							[1,1]
						],
						[
							[1,1],
							[1,1]
						],
						[
							[1,1],
							[1,1]
						]
					]
				},
				{"num":2;"shapeColor":"grey";"rotation":[
						[
							[0,2],
							[0,2],
							[2,2]
						],
						[
							[2,0,0],
							[2,2,2]
						],
						[
							[2,2],
							[2,0],
							[2,0]
						],
						[
							[2,2,2],
							[0,0,2]
						]
					]
				},
				{"num":3;"shapeColor":"green";"rotation":[
						[
							[3,0],
							[3,0],
							[3,3]
						],
						[
							[3,3,3],
							[3,0,0]
						],
						[
							[3,3],
							[0,3],
							[0,3]
						],
						[
							[0,0,3],
							[3,3,3]
						]
					]
				},
				{"num":4;"shapeColor":"blue";"rotation":[
						[
							[0,4,0],
							[4,4,4]
						],
						[
							[4,0],
							[4,4],
							[4,0]
						],
						[
							[4,4,4],
							[0,4,0]
						],
						[
							[0,4],
							[4,4],
							[0,4]
						]
					]
				},
				{"num":5;"shapeColor":"purple";"rotation":[
						[
							[5,5,0],
							[0,5,5]
						],
						[
							[0,5],
							[5,5],
							[5,0]
						],
						[
							[5,5,0],
							[0,5,5]
						],
						[
							[0,5],
							[5,5],
							[5,0]
						]
					]
				},
				{"num":6;"shapeColor":"yellow";"rotation":[
						[
							[0,6,6],
							[6,6,0]
						],
						[
							[6,0],
							[6,6],
							[0,6]
						],
						[
							[0,6,6],
							[6,6,0]
						],
						[
							[6,0],
							[6,6],
							[0,6]
						]
					]
				},
				{"num":7;"shapeColor":"pink";"rotation":[
						[
							[7],
							[7],
							[7],
							[7]
						],
						[
							[7,7,7,7]
						],
						[
							[7],
							[7],
							[7],
							[7]
						],
						[
							[7,7,7,7]
						]
					]
				
				}

			]



//Shape generation
	
	// Generates random shape and sets initial rotation to 0
	function generateShape()
		{
			var random = randomInteger(1,7);

			currentShapeObj = shapes[random];
			rotationNum = 0;
			currentRotation = currentShapeObj.rotation[rotationNum];
		}



//Shape Placment
	
	//places the new shape at the start point
	function spawnShape()
		{
			var rowCount = 0;
			var columnCount = 0;
			var middle = 20;
			currentTopLeft = {"x":20;"y":0};
												//currentRotation =   [[1,1,1],
												//					   [1,0,0]]

			currentRotation.forEach(row =>{

				row.forEach(column =>{ 
					canvasArray[rowCount][middle] = column; //this position = the shape number
					middle++;
				})
			rowCount++;
			middle = 20;
			})


		}

	//clears the previous rotation/movement
	function clearPrevious()
		{
			//var startPosition = canvasArray[currentTopLeft.x][currentTopLeft.y];
			var rowStart = currentTopLeft.x;
			var numStart = currentTopLeft.y;
			var rowCount = 0;
			var numCount = 0;
			var shapeNum = currentShapeObj.num;

			currentRotation.forEach(row =>{
				row.forEach(num =>{ 
					if (num === shapeNum)
						{
							if (!isItZero(rowStart+rowCount,numStart+numCount))
								{canvasArray[rowStart+rowCount][numStart+numCount] = 0};

						}
					numCount++;
				})
				rowCount++;
				numCount = 0;
			})
		}

	//check if 1 or 0
	function isItZero(x,y)
		{
			(canvasArray[x][y] === 0) ? return true : return false;
		}


//Shape Rotation

	//rotates current shape clockwise
	function rotateShape()
		{
			var potR = currentRotation + 1;
			if (potR === 5){potR = 1}
			potentialShape = currentShapeObj.rotation[potR];

			var collision = checkCollision(potentialShape,currentTopLeft.x, currentTopLeft.y);
			var bounds = checkBounds();
			var floor = checkBoundsFloor(potentialShape,currentTopLeft.x,currentTopLeft.y);


			if(!collision && !bounds && !floor)
				{

					//rotate Shape <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

				}








			//1. i need to see if shape will hit some other shape.
			// returns true or false
			function checkCollision(futureShape, futureTopLeftX, futureTopLeftY)
				{	
					
					//var startPosition = canvasArray[futureTopLeftX][potentialTopLeftY];
					var rowStart = futureTopLeftX;
					var numStart = futureTopLeftX;
					var rowCount = 0;
					var numCount = 0;
					var shapeNum = futureShape.num;
					var collision = false;

					futureShape.forEach(row =>{
						row.forEach(num =>{ 
							if (num === shapeNum)
								{
									if (!isItZero(rowStart+rowCount,numStart+numCount))
										{
											collision = true; 
											return;
										};

								}
							numCount++;
						})
						rowCount++;
						numCount = 0;
					})
					return collision;
				}
 			//2. if shape will go outside the wall
 			function checkBounds()
 				{
 					var rowStart =  currentTopLeft.x;
					var numStart =  currentTopLeft.y;
					var rowCount = 0;
					var numCount = 0;
					var shapeNum = futureShape.num;
					var isOutside = false;

					// what i want  to do here..
					// check if the futureTopLeft is less than 0 (outside the left wall)
					// check if the last num position is outside the array (bigger than 9..)
					var rowLength = rowStart+potentialShape[0].length;


					if (rowStart<0)
						{
							isOutside = true;
						}
					else if (rowLength>canvasArray[0].length)
						{
							isOutside = true;
						}
					return isOutside;
 				}
			//3. if shape will go outside the floor
			function checkBoundsFloor(futureShape, futureTopLeftX, futureTopLeftY)
				{
					// if future shape position or rotation is outside the last array..

					//get future shape, and it's position..
					var rowStart = futureTopLeftX;
					var numStart = futureTopLeftY;
					var rowCount = 0;
					var numCount = 0;
					var shapeNum = futureShape.num;
					var isOutside = false;

					// for each futureShape row, if it's bigger than the canvasArray, then it's outside the floor
					var numberOfRows = rowStart + potentialShape.length;

					if(numberOfRows > canvasArray.length)
						{
							isOutside = true;
						}

					// futureShape.forEach(row =>{
					// 		if ((rowStart+rowCount)>canvasArray.length)
					// 			{
					// 				isOutside = true;
					// 				return;
					// 			};	
					// 		rowCount++;
					// 	})

					return isOutside;
				}
		}
		// This function needs more work to be done <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//Shape Movement


//Shape Collision


//Check/delete row

	//if a row is filled, delete it and move the above shapes down.


//Shape Rendering


//Data collection










function updateScore()
	{
		ctx.font = "20px Arial";
		ctx.fillStyle= "red";
		ctx.fillText(score, 500,20);
		ctx.font = "20px Arial";
		ctx.fillStyle= "red";
		ctx.fillText("current level: "+ level, 800/4,20);
	};

function updateGameArea()
	{
		// gameArea.clear();
		// Object.keys(gameArea.keys).forEach(x => 
		// 	{
		// 		if(gameArea.keys[x].pressed)
		// 			{gameArea.keys[x].func()}
		// 	})
		// updateScore();
	}
	
function randomInteger(min, max) 
					{
						  return Math.floor(Math.random() * (max - min + 1)) + min;
					}