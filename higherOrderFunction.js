const whichGreeting = (timeOfDay) => {
    console.log(`Good ${timeOfDay}`);
}
const greet = (time, fn) => {
    if(time < 1200){
        fn("Morning");
    }else if (time >= 1200 && time < 1800){
        fn("Afternoon");
    }else{
        fn("Evening");
    }
}
greet(1400, whichGreeting);

const add = (num1) => {
    return (num2) => {
        return num1 + num2;
    }
}
console.log(add(1)(2));

// Activity 1

const hi = "Hello Code Nation"
console.log (hi)

function hi5(){
    for (let i = 0; i <= 5; i++){
        if(i < 5){
            console.log(hi);
        }
    }
}
hi5();
