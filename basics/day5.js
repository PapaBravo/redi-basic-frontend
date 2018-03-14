/*
* ReDi Basic Frontend Spring 2018
* Session 5, 2018-02-27
*
*/

console.log('Back to JavaScript!');

// homework
// for (var i = 0; i < 5000; i += 3) {
//     if (i % 12 === 0) {
//         console.log(i);
//     }
// }

// continue
for (var i = 0; i < 5; i++) {
    if (i === 2) {
        continue;
    }
    console.log(i);
}


// break
for (var i = 0; i < 5; i++) {
    if (i === 2) {
        break;
    }
    console.log(i);
}

/**
 * ARRAYS
 */

var shoppingList = ['Cheese', 'Potatoes', 'Gravy'];
console.log(shoppingList);
console.log(shoppingList[0]);
console.log(shoppingList[1]);

var newLength = shoppingList.push('Salt', 'Pepper');
console.log(shoppingList);
console.log('My new length is ' + newLength);

for (var i = 0; i < shoppingList.length; i++) {
    console.log(shoppingList[i]);
}

var teachers = ['Chad', 'Remi', 'Abdilillah'];
console.log(teachers);
teachers.push('Paul');
console.log(teachers);
teachers.pop();
// teachers.splice(2, 2);
console.log(teachers);

for (var teacherIndex = 0; teacherIndex < teachers.length; teacherIndex++) {
    if (teachers[teacherIndex] === 'Remi') {
        continue;
    }
    console.log('Hello ' + teachers[teacherIndex]);
}
console.log(teachers);
console.log(teachers[5]);

var numbers = [5, 12, 3, 0, 167];

var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}
console.log(sum);

console.log(numbers);
numbers.sort(); 
console.log(numbers);
// just sorted by alphabet :(

numbers.reverse();
console.log(numbers);

console.log('End of file');