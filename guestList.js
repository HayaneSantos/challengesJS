var guestList = ["Neemias", "Nicolas", "Laura", "Max", "Babi", "Thiago", "Will"];

var guestName = prompt("What is your name?");

if (guestList.includes(guestName)) {
    alert("Welcome!");
} else {
    alert("Sorry, you aren't invited");
}