var str = 'instituto federal do espirito santo';

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.replace('espirito santo','rio de janeiro'));

if(str.endsWith('santo')){
  console.log('True');
}

if(str.startsWith('i')){
  console.log("True");
}