    // var n = Math.random();
    // n = n * 6;
    // n = Math.floor(n) + 1; 
    // console.log(n);

prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
if (loveScore > 70) {
    alert("Your love score is " + loveScore + "%" + " You're meant for each other");
}
if (loveScore > 30 && loveScore <=70) {
    alert("Your love score is " + loveScore + "%");
}

if (loveScore <= 30) {
    alert("Your love score is " + loveScore + "%" + " You go together like oil and water");
}

else {
    alert("Your love score is " + loveScore + "%");
}

