// section-1
console.log("section - 1");

console.log(1 + 2);
console.log("apple" + "orange");
console.log(1 + 2 + "apple");
console.log("apple" + 1 + 2);
console.log(1 + true);
console.log(0 == false);
console.log(1 === true);
console.log(2 == "2");


//section-2
console.log("section - 2");

// 1.create list of 11 players
console.log("1.create list of 11 players");

const cricketTeam = [
    'Sharma',
    'Dhawan',
    'Kohli',
    'Rahul',
    'Samson',
    'Dhoni',
    'Jadeja',
    'Kumar',
    'Yadhav',
    'Chahar',
    'Yadhav',
]

console.log(cricketTeam);

// 2.first player had injury. Remove him
console.log("2.first player had injury. Remove him");

console.log("removed player - ", cricketTeam.shift());
console.log(cricketTeam);

// 3.No.of players
console.log("3.No.of players");


console.log("no.of palyers - ", cricketTeam.length);

// 4.Add new player
console.log("4.Add new player");

console.log('Current no.of players - ', cricketTeam.unshift('Gill'));

// 5.sort players
console.log("5.sort players");

console.log('sorted palyers - ', cricketTeam.sort())

// 6.Assign random jerseys
console.log("6.Assign random jerseys");


console.time();
cricketTeam.map((playerName, i) => {
    let jerseyNumber = Math.floor(Math.random()*100);
    cricketTeam[i] = {
        playerName,
        jerseyNumber,
    }
});
console.timeEnd();

console.log(cricketTeam);

// 7.uppercase
console.log("7.uppercase");

let playerNameUpperCase = [];

cricketTeam.map((playerDetails) => {
    playerNameUpperCase.push({
        ...playerDetails,
        playerName: playerDetails.playerName.toUpperCase(),
    });
});

console.log(playerNameUpperCase);

//section-3
console.log("section-3");

// 1.display 1 to 100
console.log("1.display 1 to 100");

const displayOneToHundered = () => {
    for(i = 1; i<=100; i++) {
        console.log(i);
    }
}

displayOneToHundered();

// 2. display today's date
console.log("2.display today's date");

const displayDate = () => {
    let dateDetails = new Date().toISOString();
    dateDetails = dateDetails.split('T');
    console.log(dateDetails);
    let dateArr = dateDetails[0];
    dateArr = dateArr.split('-')
    let date = dateArr[2] + '/' + dateArr[1] + '/' + dateArr[0];
    console.log("today's date - ", date);
}

displayDate();


// 3. celsius to farenheit
console.log("3.celsius to farenheit");

const celsiusToFarenheit = (celsiusValue) => {
    let farenheitValue = (celsiusValue * 1.8) + 32;
    return farenheitValue;
}

console.log('farenheit Value', celsiusToFarenheit(45));

// 4. average of numbers
console.log("4.average of numbers");

const average = (scores) => {
    let sum = 0;
    for(score in scores) {
        sum += scores[score];
    }
    return sum/scores.length;
}

let scores = [100, 100, 99, 98];

console.log(average(scores));

// 5. reverse a string
console.log("5.reverse a string");

const reverseString = (string) => {
    reverseStr = string.split('');

    console.log("splitted", reverseStr);
    
    reverseStr.reverse();
    
    console.log("reverse", reverseStr);
    
    reverseStr = reverseStr.join('');
    
    return reverseStr;
}

givenString = 'sirius';
console.log(reverseString(givenString));






