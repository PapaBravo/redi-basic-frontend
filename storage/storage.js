console.log('Testing storage');

// var myObject = {
//     name: 'Paul',
//     age: 30
// };
// 
// console.log(myObject);
// console.log(JSON.stringify(myObject));
//localStorage.setItem('storageKey', JSON.stringify(myObject));

var str = localStorage.getItem('storageKey');
console.log(str);
var myObject = JSON.parse(str);
console.log(myObject);