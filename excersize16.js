var num = parseInt(prompt("Gimme your favorite number"));

function abboveOrBelow( number){
    if(number > 100){
        alert("your number is abover")
    }else if(number < 100){
        alert("your number is belower")
    }else{
        alert("its 100")
    }
}

abboveOrBelow(num);