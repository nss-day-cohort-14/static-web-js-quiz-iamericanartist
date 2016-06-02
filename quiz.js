
var heightInput = document.getElementById("high")
var charInput = document.getElementById("char")



function proceedTreeGrowth(event) {
  var myTree = {
    height: heightInput.value,  //"high" is the input id for height eventual value and "myTree is the object"
    character: charInput.value  //"char" is the input id for character eventual value and "myTree is the object"
  };

  if (event.keyCode === 13) {
    if ( !myTree.height || !myTree.character) {
      alert("Both fields must have a value"); 
    } else {
      myTreeSeed(myTree);
    }
  } else if (event.type === "click") {
    if ( !myTree.height || !myTree.character) {
      alert("Both fields must have a value"); 
    } else {
      myTreeSeed(myTree);
    }
  }
}

function myTreeSeed(myTree) {
  var newCharacter = "";
  for (var i = 0; i <= myTree.height; i++) {
    for (var j = i; j < myTree.height; j++){  
      newCharacter += " ";  
    }
    for (var k = 0; k < i*2-1; k++) { //makes an ODD number of Characters - "1"*2-1 = 2-1 = 1 // "2"*2-1 = 4-1 = 3
      newCharacter += myTree.character; 
    }
    newCharacter += "\n"; //I am building this all in "one" output line, so I need a "break" introduced
  }
  console.log(newCharacter);

  console.log("Our tree height is ", myTree.height);  //Doesn't really work like "it should" keeps popping up multiple times
  console.log("Our character to use is ", myTree.character);  //Doesn't really work like "it should" keeps popping up multiple times
}


button.addEventListener("click", proceedTreeGrowth);
heightInput.addEventListener("keypress", proceedTreeGrowth); 
charInput.addEventListener("keypress", proceedTreeGrowth); 

