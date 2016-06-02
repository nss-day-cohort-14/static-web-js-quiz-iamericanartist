//Original input method (just to get the tree working)
// var myTree = {
//   height: 9,      //should eventually reflect the user input
//   character: "#"    //should eventually reflect the user input 
// };

// Had trouble getting the "OBJECT" to play nicely with the rest of the code (add- "myTree." to the beginning of all height and character if want it back)
// var myTree = {
//   height: 4,
//   character: "*"
// };
// var newCharacter = "";


var height;
var character;
var newCharacter = "";


function proceedTreeGrowth(event) {
  // if (height === "" || character === "") {
  //   alert("Both fields must have a value"); 
  // } else
   if ("click") {  //above commented out to allow tree to "grow"
    myTreeSeed(); 
  } else if (event.keyCode === 13) { 
    myTreeSeed();
  }
}

function myTreeSeed() {
  height = document.getElementById("high").value;  //"high" is the input id for height eventual value
    console.log("Tree height is to be ", height);  //Doesn't really work like "it should"
  character = document.getElementById("char").value;  //"char" is the input id for character eventual value
    console.log("Our character to use is", character);  //Doesn't really work like "it should"

  for (var i = 0; i <= height; i++) {
    for (var j = i; j < height; j++){  
      newCharacter += " ";  
    }
    for (var k = 0; k < i*2-1; k++) { //makes an ODD number of Characters
      newCharacter += character;
    }
    newCharacter += "\n";
  }
  console.log(newCharacter);
}


button.addEventListener("click", proceedTreeGrowth);
window.addEventListener("keypress", proceedTreeGrowth); 