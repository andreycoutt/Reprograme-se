a = 0;
b = 2;
c = 1;

if (a > 0){
  if (b > 0){
    console.log("Tudo ok para decolagem!");
  } else {
    console.log("Tanque principal vazio; voando com combustível reserva!");
  }
} else {
  if (c > 0){
    console.log("Foguete não tem piloto, mas há outros foguetes disponíveis!");
  }
}
