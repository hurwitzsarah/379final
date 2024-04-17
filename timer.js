const timeDisplay = document.querySelector('#time-display'); // Displays the time
const startButton = document.querySelector('#start-button'); // Starts the timer
const pauseButton = document.querySelector('#pause-button'); // Pauses the timer
const resetButton = document.querySelector('#reset-button'); // Resets the timer


/**
* Update the content in the #time-display element to reflect the current time
* @param {*} value Time in milliseconds
*/
function updateDisplay(value) {
   timeDisplay.innerText = (value/1000).toFixed(0);
};
let intervalID;
let startTime = Date.now();
let elapsed = 0;


startButton.addEventListener("click", ()=>{
   startTime = Date.now(); //when animation started
   intervalID = setInterval(animate, 10);
});


pauseButton.addEventListener("click", ()=>{
   const currentTime = Date.now();
   clearInterval(intervalID);
   elapsed = elapsed + currentTime-startTime;
});


resetButton.addEventListener("click", ()=>{
   clearInterval(intervalID);
   updateDisplay(0);
});




function animate(){


   const step = () => {
       let now = Date.now();
       let diff = elapsed + (now-startTime);
       updateDisplay(diff);
   };


   step();


};


updateDisplay(elapsed);
