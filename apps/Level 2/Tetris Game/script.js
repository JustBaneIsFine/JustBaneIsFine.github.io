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
				
				generateShape();
				spawnShape();	
				this.renderInterval = setInterval(updateGameArea,1000/120);
				// this.moveInterval = function timeout()
				// 	{setTimeout(function()
				// 			{
				// 				moveShapeDown();
								
				// 			},
				// 	520-(level*20))
				// 	};
				// this.moveInterval();
				//setInterval(moveShapeDown,500-(level*20));
				this.canvas.width = 800;
				this.canvas.height = 500;
				this.context = this.canvas.getContext("2d");
				this.canvas.style = "background-color: white";
				document.body.childNodes[3].insertBefore(this.canvas, document.body.childNodes[3].childNodes[0]);
				
				this.keys = 
					{
						 37: {pressed: false, func: function(){moveShapeLeft()}},
						 65: {pressed: false, func: function(){moveShapeLeft()}},  
						 39: {pressed: false, func: function(){moveShapeRight()}},  
						 68: {pressed: false, func: function(){moveShapeRight()}},
						 87: {pressed: false, func: function(){rotateShape()}},
						 38: {pressed: false, func: function(){rotateShape()}},
						 83: {pressed: false, func: function(){moveShapeDown()}},
						 40: {pressed: false, func: function(){moveShapeDown()}},
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
							}
							})
				//start game
				
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
var canvasArray = createCanvasArray();
//Create CanvasArray

	function createCanvasArray()
		{
			var w = 40;
			var h = 25;
			var array = []; //reference to location
			//var zeros = []; //reference to location
			//adds 40 0's to zeros array;
			// for (x = 0; x<w; x++)
			// 			{
			// 				zeros.push(0);
			// 			}


			//for each 25 rows
			//add 40 zeros
			for (i = 0;i<h;i++)
				{
					// for each row, add 40 zeros	
					array.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
				}

			return array;
		}

//Shapes and rotations
	
	var shapes = [
				{"num":1,"shapeColor":"red","rotation":[
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
				{"num":2,"shapeColor":"grey","rotation":[
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
				{"num":3,"shapeColor":"green","rotation":[
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
				{"num":4,"shapeColor":"blue","rotation":[
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
				{"num":5,"shapeColor":"purple","rotation":[
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
				{"num":6,"shapeColor":"yellow","rotation":[
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
				{"num":7,"shapeColor":"pink","rotation":[
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

			var random = randomInteger(0,6);
			currentShapeObj = shapes[random];
			rotationNum = 0;
			currentRotation = currentShapeObj.rotation[rotationNum];
			
			
		}

//Shape Placment
	
	//places the new shape at the start point
	function spawnShape()
		{
			var rowCount = 0;
			var middle = 20;
			currentTopLeft = {"x":20,"y":0};
												//currentRotation =   [[1,1,1],
												//					   [1,0,0]]

			currentRotation.forEach(row =>{

				row.forEach(num =>{ 
					canvasArray[rowCount][middle] = num; //this position = the shape number
					middle++;
				})
			rowCount++;
			middle = 20;
			})


		}

	//clears the previous rotation/movement from canvasArray
	function clearPrevious()
		{
			//var startPosition = canvasArray[currentTopLeft.x][currentTopLeft.y];
			var rowStart = currentTopLeft.y;
			var numStart = currentTopLeft.x;
			var rowCount = 0;
			var numCount = 0;
			currentRotation.forEach(row =>{
				row.forEach(num =>{ 

						if (num != 0)
							{

								if (isItZero(canvasArray,rowStart+rowCount,numStart+numCount))
									{canvasArray[rowStart+rowCount][numStart+numCount] = 0;};
							};

						numCount++;
				})
				rowCount++;
				
				numCount = 0;
			})
		}

	//check if 1 or 0
	function isItZero(object,x,y)
		{
			//console.log(y);
			if (object[y][x] === 0){return true}else{return false};

			
		}

//Shape Rotation

	//rotates current shape clockwise
	function rotateShape()
		{
			var shapeNum = currentShapeObj.num;
			var potR = rotationNum + 1; //potential rotation
			if (potR === 4){potR = 0} 	
			potentialShape = currentShapeObj.rotation[potR]; 

			var collision = checkCollision(potentialShape,currentTopLeft.x, currentTopLeft.y);
			var bounds = checkBounds(potentialShape);
			var floor = checkBoundsFloor(potentialShape,currentTopLeft.x,currentTopLeft.y);

			//if no collisions detected, rotate shape
			if(!collision || !bounds || !floor)
				{
					clearPrevious();
					rotationNum = potR;
					currentRotation = currentShapeObj.rotation[rotationNum];
					updateShape();
					
				}
			

		}

//Shape Movement

	// Movement handler
	function moveHandler(move)
		{
			switch (move) {
				case "left":
					moveShapeLeft();
					break;
				case "right":
					moveShapeRight();
					break;
				case "down":
					moveShapeDown();
					break;
				case "up":
					rotateShape();
					break;
			}
		}

	// 1. we need to have the automatic movment
	// which is moving downwards based on x speed..
	function moveShapeDown()
		{
			clearPrevious();
			// if (canItMove(0))
			// 	{
					currentTopLeft.y += 1;
					updateShape();
				// }
				//  else if(
				// 	!checkCollision(currentRotation,currentTopLeft.x,currentTopLeft.y+1) ||
				// 	!checkBoundsFloor(currentRotation,currentTopLeft.x,currentTopLeft.y+1))
				// {
				// 	//if it's collision, that shape stays and we generate a new one..
				// 	generateShape();
				// 	spawnShape();
				// 	rowDeletionHandler();
				// }
		}

	function moveShapeLeft()
		{
			//if shape is not set, and there is no collision, move shape to the left.
			
			// if (canItMove(1))					
			// 	{
					clearPrevious();
					currentTopLeft.x -= 1;
					if(currentTopLeft.x < 0){currentTopLeft.x = 0}
					updateShape();
				//}
		}

	function moveShapeRight()
		{
			// if (canItMove(-1))
			// 	{
					clearPrevious();
					currentTopLeft.x += 1;
					if(currentTopLeft.x > 25){currentTopLeft.x = 25}
					updateShape();
			//	}
		}

	function canItMove(n)
		{
			// if there is no collision, shape is movable
			var movable = false;
			
					var potentialTopLeft = currentTopLeft.x-n;
					var shape = currentRotation;

					//checkCollision on future position..
					if(
						!checkCollision(shape,potentialTopLeft,currentTopLeft.y) &&
						!checkBounds(shape) &&
						!checkBoundsFloor(shape,potentialTopLeft,currentTopLeft.y)
					  )
						{movable = true;}
			
			return movable;	
		}

//Shape Collision

	//1. will shape hit some other shape.
	// returns true or false

		function checkCollision(futureShape, topLeftX, topLeftY)
			{	
				var rowStart = topLeftY;
				var numStart = topLeftX;
				var rowCount = 0;
				var numCount = 0;
				var collision = false;

				futureShape.forEach(row =>{
					if (collision === true){return};

					row.forEach(num =>{ 
						if (num != 0)
							{
								if (collision === true){return};
								if (!isItZero(canvasArray,rowStart+rowCount,numStart+numCount)) //if canvas position block is not zero
									{

										collision = true;
										console.log("collision")
										console.log(canvasArray[rowStart+rowCount][numStart+numCount]);
									};

							}
						numCount++;
					})
					rowCount++;
					numCount = 0;
				})
				return collision;
			}
			//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
			// so the problem with this function is that we are detecting collision without any shapes around
			// because where we are checking, there already is a shape, which is the current one that we are moving..
			// so it "collides" with itself..

			//How do we avoid this?
			// 1. is to label our current shape differently, to make it unique in the canvas, until it lands..
			// ex [0,0,c1]
			//	  [c1,c1,c1]
			// 1 being the actual shape number.. C meaning current..

			// 2. create a seperate canvasArray that contains only the landed objects..
			// that way we have no current shape in that array that will cause self-collision detection


 		//2. if shape will go outside the wall
 		// returns true or false
 		function checkBounds(futureShape)
 			{
 				var rowStart =  currentTopLeft.x;
				var numStart =  currentTopLeft.y;
				var rowCount = 0;
				var numCount = 0;
				var isOutside = false;

				// what i want  to do here..
				// check if the futureTopLeft is less than 0 (outside the left wall)
				// check if the last num position is outside the array (bigger than 9..)
				var rowLength = rowStart+futureShape[0].length;


				if (rowStart<0)
					{
						isOutside = true;
						console.log("bounds left")
					}
				else if (rowLength>canvasArray[0].length)
					{
						isOutside = true;
						console.log("bounds right")
					}
				return isOutside;
 			}

		//3. if shape will go outside the floor
		function checkBoundsFloor(futureShape, topLeftX, topLeftY)
			{
				// if future shape position or rotation is outside the last array..

				//get future shape, and it's position..
				var rowStart = topLeftY;
				var numStart = topLeftX;
				var rowCount = 0;
				var numCount = 0;
				var isOutside = false;

				// for each futureShape row, if it's bigger than the canvasArray, then it's outside the floor
				var numberOfRows = rowStart + futureShape.length;

				if(numberOfRows > canvasArray.length)
					{
						console.log("bounds floor")
						isOutside = true;

					}

				return isOutside;
			}

//Check/delete row

	//if a row is filled, delete it and move the above shapes down.
	//runs only when shape has settled so we don't have to check all the time
	function rowDeletionHandler()
		{
			var row = checkRows();
			if(row != false)
				{
					deleteRow(row);
					setTimeout(function(){lowerShapes(row)}, 500);
				}
		}

	//check if row is filled
	// returns number of the row, or false if not found
	function checkRows()
		{
			var counter = 0;
			var rowNum = 0;
			var rowFound = false;
			var row = false;

			canvasArray.forEach(row => {
				if(rowFound){return;}

					row.forEach(num => {
						if (num != 0)
							{counter++}
					})

				if(counter === 10)
				{
					//found rowrow = rowNum;
					rowFound = true;
					row = rowNum;

				} else {rowNum++}

			})

			return row;
		}

	//delete row
	//replaces nums with zeros
	function deleteRow(row)
		{
			var count = 0;
			canvasArray[row].forEach(num => {
				canvasArray[row][count] = 0;
				count++;
			})
			
		}

	//lower the shapes above
	function lowerShapes(row)
		{
			//pulls the shapes above down by one row.
			count = row-1; //12 

			for (i = count;i>0;i--)
				{
					canvasArray[i+1] = canvasArray[i];
				}
		}

//Shape Rendering

	function render()
		{
			rowCount = 0;
			numCount = 0;


			canvasArray.forEach(row => {
				
				row.forEach(num => {
					if(num != 0)
						{
							x = numCount * 20;
							y = rowCount * 20;

							ctx.fillStyle = shapes[num-1].shapeColor;
							ctx.fillRect(x,y,20,20);
						}
					numCount++;
				})

				rowCount++;
				if(numCount>9)
					{
						numCount = 0;
					}
			})
		}

//Update Shape
	
	function updateShape()
		{
			var rowCount = 0;
			var numCount = 0;
			


			// so here what we need to do is take in all the current shape input, 
			// clear the previous shape position
			// and update it on canvasArray..
			
			//takes current shape and places it on canvasArray
			//position is based on currentTopLeft
			
					currentRotation.forEach(row => {
						row.forEach(num => {
							if(num != 0)
								{
									canvasArray[currentTopLeft.y+rowCount][currentTopLeft.x+numCount] = num;
								}
							numCount++;
						})
						if(numCount===currentRotation[0].length){numCount = 0}
						rowCount++;
					})
		}



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
		gameArea.clear();

		Object.keys(gameArea.keys).forEach(x => 
			{
				if(gameArea.keys[x].pressed)
					{gameArea.keys[x].func()}
			})

		updateScore();

		render();
	}
	
function randomInteger(min, max) 
					{
						  return Math.floor(Math.random() * (max - min + 1)) + min;
					}