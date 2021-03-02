console.log("JavaScript - Digital Clock");
// Using the new knowledge leaned in index.js file we can implement a digital clock
// The digital clock will use existing html objects in index.html file
// Using "setInterval" we will calculate the value for seconds, minutes and hours an update the page every second to reflect the time spend on the page

let seconds = 0;
const secondsParagraphs = document.querySelectorAll(".seconds p");

let minutes = 0;
const minutesParagraphs = document.querySelectorAll(".minutes p");

let hours = 0;
const hoursParagraphs = document.querySelectorAll(".hours p");

// document.getElementById("print-time").addEventListener("click", function(){
//     console.log("The time is:", `${hours}:${minutes}:${seconds}`);
// })


document.getElementById("start-time").addEventListener("click", startTheTime);


document.getElementById("stop-time").addEventListener("click", function(){
  clearInterval(myTimer);
  startCheck = 0;
} );


let myTimer;
let startCheck = 0;
let saveAvailable = false;

function startTheTime(){
  if (startCheck === 0) {
    myTimer = setInterval(displayTime, 100);
    startCheck++;
  }
}

document.getElementById("reset-time").addEventListener("click", resetTheTime);

document.getElementById("save-time").addEventListener("click", saveTheTime);



              function displayTime() {
                        saveAvailable = true;
                        renderDigits(seconds, secondsParagraphs);
                        renderDigits(minutes, minutesParagraphs);
                        renderDigits(hours, hoursParagraphs);

                        seconds++;

                        if (seconds === 60) {
                          seconds = 0;
                          minutes++;
                        }

                        if (minutes === 60) {
                          minutes = 0;
                          hours++;
                        }

                        if (hours === 24) {
                          hours = 0;
                        }
                      }

function renderDigits(nr, pList) {
  const stringDigits = nr + "";
  const digitList = stringDigits.split("");

  if (digitList.length === 2) {
    pList[0].innerText = digitList[0];
    pList[1].innerText = digitList[1];
  } else {
    pList[0].innerText = 0;
    pList[1].innerText = digitList[0];
  }
}

function resetTheTime() {
  startCheck = 0;
  clearInterval(myTimer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  displayTime();

}


function saveTheTime(){
  const newTime = document.createElement("div");
  const newHoursHolder = document.createElement("div");
  const newMinutesHolder = document.createElement("div");
  const newSecondsHolder = document.createElement("div");
  const newHoursLeftDigit = document.createElement("p");
  const newHoursRightDigit = document.createElement("p");
  const newMinutesLeftDigit = document.createElement("p");
  const newMinutesRightDigit = document.createElement("p");
  const newSecondsLeftDigit = document.createElement("p");
  const newSecondsRightDigit = document.createElement("p");
  const doubleDots = document.createElement("p");
  const doubleDotsTwo = document.createElement("p");
  doubleDots.innerText =":";
  doubleDotsTwo.innerText = ":";

  newHoursLeftDigit.innerText = 0;
  newHoursRightDigit.innerText = 0;
  newMinutesLeftDigit.innerText = 0;
  newMinutesRightDigit.innerText = 0;
  newSecondsLeftDigit.innerText = 0;
  newSecondsRightDigit.innerText = 0;

  newTime.classList.add("digital-clock");
  newHoursHolder.classList.add("hours");
  newMinutesHolder.classList.add("minutes");
  newSecondsHolder.classList.add("seconds");

  newTime.classList.add("digital-clock-save");
  newHoursHolder.classList.add("hours-save");
  newMinutesHolder.classList.add("minutes-save");
  newSecondsHolder.classList.add("seconds-save");

  newHoursHolder.appendChild(newHoursLeftDigit);
  newHoursHolder.appendChild(newHoursRightDigit);


  newMinutesHolder.appendChild(newMinutesLeftDigit);
  newMinutesHolder.appendChild(newMinutesRightDigit);

  newSecondsHolder.appendChild(newSecondsLeftDigit);
  newSecondsHolder.appendChild(newSecondsRightDigit);


  newTime.appendChild(newHoursHolder);
  newTime.appendChild(doubleDots);
  newTime.appendChild(newMinutesHolder);
  newTime.appendChild(doubleDotsTwo);
  newTime.appendChild(newSecondsHolder);


  document.body.appendChild(newTime);

  let savedHours = document.querySelectorAll(".hours-save p");
  let savedMinutes = document.querySelectorAll(".minutes-save p");
  let savedSeconds = document.querySelectorAll(".seconds-save p");

  if (saveAvailable) {renderDigits(seconds-1, savedSeconds);} else {renderDigits(seconds, savedSeconds);}
                        
                        renderDigits(minutes, savedMinutes);
                        renderDigits(hours, savedHours);


                      
  
                        newTime.classList.remove("digital-clock-save");
                        newHoursHolder.classList.remove("hours-save");
                        newMinutesHolder.classList.remove("minutes-save");
                        newSecondsHolder.classList.remove("seconds-save");



  


}