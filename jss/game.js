// Start Game links to game.html
function startGame() {
    console.log("Game has started");
    window.open("game.html",'_blank');
   
}
// Rules links to gamerules.html
function getInstructions() {
    console.log("Show instructions");
    window.open("gamerules.html",'_blank');  
}
// *** GAMEPLAY ***
// shuffle arrays method
function shuffle(arr) {
    //Fisher-Yates shuffle
    let currentIndex = arr.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {
 
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
 
      // And swap it with the current element.
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex], arr[currentIndex]];
    }
    return arr;
}
// declaring pics for matching
var pics = ["computer.jpg","alexa.jpg","jbl.jpg","phone.jpg","ps4.jpg","jbl.jpg","xbox.jpg","tv.jpg","alexa.jpg","wii.jpg","computer.jpg","phone.jpg","ps4.jpg","xbox.jpg","tv.jpg","wii.jpg"];
// shuffling pic array
shuffle(pics);
// output pics into table
for (var pic in pics) {
    document.getElementById(pic).setAttribute("src","img/"+pics[pic]);
}
// make each button the question mark to hide pics
$("img").each(function(){
    var question = "questionmark.jpg";
    $(this).attr("src","img/"+question);
});


// method to figure if images are a match
let matches = 0;
function isMatch() {
    if (pics[arr[0]]==pics[arr[1]]) {
        setTimeout(removeImgs,200);
        function removeImgs() {
            try {
                matches++;
                document.getElementById(arr[0]).remove();
                document.getElementById(arr[1]).remove();
                arr = []              
            } catch (error) {
                console.log(error);
            }
        }  
    }
    else { // resets pics to question mark
        // set timeout for portion of time so player can see 2nd image pop up (IF NOT A MATCH)
        setTimeout(changeImgs,200);
        function changeImgs() {
            try {
                document.getElementById(arr[0]).setAttribute("src","img/questionmark.jpg");
                document.getElementById(arr[1]).setAttribute("src","img/questionmark.jpg");
                arr = []    
            } catch (error) {
                console.log(error);
            }
        }    
    }
}
// when a question box is clicked, the image appears
// array will hold the two images clicked; if a match they will stay face up
// if not a match, they will return to question
let arr = [];
$("img").click(function() {
    var id = $(this).attr('id');
    $(this).attr("src","img/"+pics[id]);
    arr.push(id);
    if (arr.length==2) {
        isMatch();
    }    
});