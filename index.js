console.log("JavaScript - Async Programming");

document.addEventListener("click", onClick);


let counter = 0;
function onClick(){
    console.log("just a click in the app");
    counter++;
    console.log("counter: ", counter);
}

console.log("counter: ", counter);


// the function is a anonymous function
setTimeout(function(){
    console.log("1");
}, 2000);

//this is similar to

setTimeout(setTimeoutFunction, 2000);

function setTimeoutFunction(){
    console.log("3");
}


console.log("First");

setTimeout(function(){
    console.log("Second");
}, 0);

setTimeout(function(){
    console.log("Third");
}, 0);

    console.log("Fourth");

    setTimeout(function(){
        console.log("Fifth");
    }, 1);


    setInterval(function() {
        console.log("ping");
    },1000);