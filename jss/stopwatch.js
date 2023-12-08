let second = 0;
let count = -1;
let temp = 0;
let time = 0;

window.onload = stopwatch;

function stopwatch() {
    count++;

    if (count == 1) {
        second++;
        count = 0;
    }

    let secondStr = second;

    if (second < 1) {
        secondStr = "0" + secondStr;
    }
    document.getElementById("sec").innerHTML = secondStr;
    const timeout = setTimeout(stopwatch, 1000);
   
    if (matches==(pics.length/2)) {
        clearTimeout(timeout);
        time = secondStr;
        db.collection("playerScores").doc("2lxLK0bSMiVMf1M6nHdJ").set({
            name: "jsharp",
            time: time+"sec"
        });
    }
   
}