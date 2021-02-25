console.log("Javascript - Digital Clock");

let seconds = 0;
const secondsParagraphs = document.querySelectorAll(".seconds p");

let minutes = 0;
const minutesParagraphs = document.querySelectorAll(".minutes p");

let hours = 0;
console.log(secondsParagraphs);
const hoursParagraphs = document.querySelectorAll(".hours p");

setInterval(function(){

    renderDigits(seconds, secondsParagraphs);
    renderDigits(minutes, minutesParagraphs);
    renderDigits(hours, hoursParagraphs);
    // const minutesString = minutes + "";
    // const minutesStringArray = minutesString.split("");

    // const secondsString = seconds + "";
    // const secondsStringArray = secondsString.split("");
    // console.log(secondsStringArray);

    // const hoursString = hours + "";
    // const hoursStringArray = hoursString.split("");



    // if(secondsStringArray.length === 2){
    //     secondParagraphs[0].innerText = secondsStringArray[0];
    //     secondParagraphs[1].innerText = secondsStringArray[1];
    // } else {
    //     secondParagraphs[0].innerText = 0;
    //     secondParagraphs[1].innerText = secondsStringArray[0];
    // }

    // if(minutesStringArray.length === 2){
    //     minuteParagraphs[0].innerText = minutesStringArray[0];
    //     minuteParagraphs[1].innerText = minutesStringArray[1];
    // } else {
    //     minuteParagraphs[0].innerText = 0;
    //     minuteParagraphs[1].innerText = minutesStringArray[0];
    // }

    // if(hoursStringArray.length === 2){
    //     hourParagraphs[0].innerText = hoursStringArray[0];
    //     hourParagraphs[1].innerText = hoursStringArray[1];
    // } else {
    //     hourParagraphs[0].innerText = 0;
    //     hourParagraphs[1].innerText = hoursStringArray[0];
    // }



  

seconds++;

if (seconds === 60) {
    seconds = 0;
    
    minutes++;
}

if(minutes === 60){
    minutes = 0;
    hours++;
}

if(hours === 24) {
    hours = 0;
}

    

    
},1);

function renderDigits(nr, pList) {
    const stringDigits = nr + "";
    const digitList = stringDigits.split("");

    if(digitList.length === 2){
        pList[0].innerText = digitList[0];
        pList[1].innerText = digitList[1];
    } else {
        pList[0].innerText = 0;
        pList[1].innerText = digitList[0];
    }

}







