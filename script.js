var num = 20;

var str = "У меня есть 16 яблок";

/* num = num-2; */

/* if(num > 16){
    alert("Да , у меня много яблок!");
    }
else{
    console.log(str);
} */

switch(num){
    case 18: alert("Здесь 18");
    break;
    case 20: alert("Здесь 20");
    default: alert("Стандартное значение");
    break;
}

var add;

function sum(a,b,c){
    add = (a + b) * c;
    return add;
}

document.write(sum(12,5,25));



