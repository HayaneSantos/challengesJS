names = ["Angela", "Ben", "Jenny", "Michael", "Chloe", "Hayane"];

function whoIsPaying(names) {   
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    return (names[randomPersonPosition] + " is going to buy lunch today!");
}

whoIsPaying(names);