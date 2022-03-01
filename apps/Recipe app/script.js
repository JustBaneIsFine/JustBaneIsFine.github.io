const getIt = (x) => {return document.getElementById(x)};
const storage = window.localStorage;

// Storage needs to have app specific object since every app is on 
// the same domain...

//We will have object like this in storage

// [
// {"appName": "recipeApp",
//  "storage": [{"recipeName": "Lemon Pie" etc....},{"recipeName": "recipe2"}

//  ]
 	
 
// },


// {}
// {}
// ]


