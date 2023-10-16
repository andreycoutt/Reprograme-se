var estados = ['ES', 'RJ', 'SP', 'MG'];
estados.unshift('MT');
estados.splice(2,2, 'AC', 'AL', 'AP');

console.log(estados);