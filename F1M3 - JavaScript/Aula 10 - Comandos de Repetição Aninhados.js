for(var i = 1; i <= 10; i++){
    console.log("Divisorees do número ", i);
    for(var j = 1; j <= i; j++){
        if(i % j == 0){
            console.log(j);
        }
    }
}



