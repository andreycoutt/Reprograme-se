var str = '            instituto federal do espirito santo                  ';

console.log(str.trimEnd());
console.log(str.trimStart());


str = (str.trim());
console.log(str);

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

console.log(str.split(' '));


if(str.includes('federal')){
  console.log('Possui a palavra federal');
}else{
  console.log('Não possiu a palavra federal');
}