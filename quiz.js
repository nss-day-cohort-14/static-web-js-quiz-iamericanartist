
var heightInput = document.getElementById("high");
var charInput = document.getElementById("char");

function proceedTreeGrowth(event) {
  var myTree = {
    height: parseInt(heightInput.value),  //This should be a number (parseInt)"high" is the input id (initiated ABOVE) for height eventual value and "myTree is the object"
    character: charInput.value  //"char" is the input id (initiated ABOVE) for character eventual value and "myTree is the object"
  };
  // console.log(" >>", typeof myTree.height); //PARSEINT WORKED!!! WOOT!
  // console.log(" >>", typeof myTree.character); // No parseInt === STRING!

  if (event.keyCode === 13) {  //keyCode 13 is the key location for the ENTER button
    if ( !myTree.height || !myTree.character) { // "!asdf" is basically looking for 
      alert("Both fields must have a value!"); 
    } else {
      myTreeSeed(myTree);
    }
  } else if (event.type === "click") {
    if ( !myTree.height || !myTree.character) { //The NOT operator (!) returns true for false statements and false for true statements - so here it is valuing empty as false but making it true to run the alert
      alert("Both fields must have a value!"); 
    } else {
      myTreeSeed(myTree);
    }
  }
}

function myTreeSeed(myTree) {
  var newCharacter = "";
  // console.log(" >>>>>>", myTree.height);
  // console.log(" >>>>>>", myTree.character);
  for (var i = 0; i <= myTree.height; i++) {
    for (var j = i; j < myTree.height; j++){  
      newCharacter += " ";  
    }
    for (var k = 0; k < i*2-1; k++) { //makes an ODD number of Characters - "1"*2-1 = 2-1 = 1 // "2"*2-1 = 4-1 = 3
      newCharacter += myTree.character; 
    }
    newCharacter += "\n"; //I am building this all in "one" output line, so I need a "break" introduced
  }
  console.log(newCharacter); //THIS IS THE TREE
  console.log("Our tree height is ", myTree.height); //logs our height input below the tree
  console.log("Our character to use is ", myTree.character); //logs our character used input below the tree
}

button.addEventListener("click", proceedTreeGrowth);
heightInput.addEventListener("keypress", proceedTreeGrowth); 
charInput.addEventListener("keypress", proceedTreeGrowth); 

