/*
* ReDi Basic Frontend Spring 2018
* Session 3, 2018-02-20
*
*/

console.log('Back to JavaScript!');

var hour = 7;
if (hour < 18) {
    console.log('Good day!');
}

if (true) {
    console.log('Always');
}

var name = 'Chad';

if (name === 'Paul') {
    console.log('Hello ' + name);
}

var isAllowed = true;
var speaksGerman = true;

if (isAllowed) {
    if (!speaksGerman) {
        console.log('Welcome!');
    }
    console.log('Done with kindergarten');
}

var day = 'Monday';
// multiple conditions
if (day === 'Saturday' || day === 'Sunday') {
    console.log('Do all the shopping.');
} else {
    console.log('Wake up and go to work!');
}

// silly game
var name1 = 'John';
var name2 = 'Jack';

var height1 = 185;
var height2 = 185;

var age1 = 23;
var age2 = 23;

var score1 = height1 + 5 * age1;
var score2 = height2 + 5 * age2;

if (score1 > score2) {
    console.log(name1 + ' won. His score was ' + score1);
} else if (score2 > score1) {
    console.log(name2 + ' won. His score was ' + score2);
} else {
    console.log("It's a draw! Score was " + score1);
}

// LOOPS

for (var i = 0; i < 10; i++) {
    console.log('Hello number ' + i);
}

var name = 'Paul';

for (var i = 0; i < 5; i++) {
    console.log(name);
}

for (var i = 1; i <= 10; i++) {
    console.log(i * i);
}

var n = 1000;
var sum = 0;

for (var i = 1; i <= n; i++) {
    sum += i;
}
console.log(sum);

// infinite loop

// for (var i = 1; true; i++) {
//     console.log('beep' + i);
// }

var stars = '';
for (var i = 0; i < 10; i++) {
    stars += '*';
    console.log(stars);
}

for (var i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    } else {
        console.log('odd :(');
    }
}

var isEnough = false;

while (!isEnough) {
    var r = Math.random();
    isEnough = r > 0.9;
    console.log(r);
} 

console.log('End of file');