var emp = ['joao', 'maria', 'augusto'];
console.log(emp);

var imp = [];
imp[0] = 13;
imp[1] = 14;
imp[2] = 15;
console.log(imp);

var myArray = ['Vento', 'chuva', 'fogo'];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);



var myArray = ['1', '2'];
var comp = myArray.push('3');

console.log(myArray);
console.log(comp);

var myArray = ['1', '2', '3'];
var ultimo = myArray.pop();

console.log(myArray);
console.log(ultimo);

var myArray = ['1', '2', '3'];
var primeiro = myArray.shift();

console.log(myArray);
console.log(primeiro);

var myArray = ['1', '2', '3'];
var un = myArray.unshift('4', '5');

console.log(myArray);
console.log(un);

var myArray = ['1', '2', '3', '4', '5'];
myArray.splice(1, 2, 'a', 'b', 'c', 'd');

console.log(myArray);

var myArray = ['neve', 'chuva', 'fogo'];
myArray.sort();

console.log(myArray);

var myArray = ['a', 'b', 'a', 'b', 'a'];
console.log(myArray.indexOf('b'));
console.log(myArray.indexOf('b', 2));
console.log(myArray.indexOf('z'));



