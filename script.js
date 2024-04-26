let cardImg = document.querySelector('img');
const container = document.querySelector('#grid-container');
let category = document.querySelector('#user_inpt').value;
let numOfImages = 0;
let roundNum = 0;
let score  = 0;
let roundElem = document.querySelector('#round');
roundElem.innerText = `Round Number: ${roundNum}`;
let scoreElem = document.querySelector('#score');
scoreElem.innerText = `Score: ${score}`;
// LEVELS
const easyButton = document.querySelector('#easy');
const mediumButton = document.querySelector('#medium');
const hardButton = document.querySelector('#hard');
// let audioButton = document.querySelector('#audioButton');
let easyMode = false;
let mediumMode = false;
let hardMode = false;
// TIMER
const startButton = document.querySelector('#start-button'); // starts timer and displays cards
const timeDisplay = document.querySelector('#time-display'); // Displays the time
const pauseButton = document.querySelector('#pause-button'); // Pauses the timer
const resetButton = document.querySelector('#reset-button'); // Resets the timer
// CARD VALUES
let cardShow = false;
let cardTag;
let intervalID;
let startTime = Date.now();
let elapsed = 0;
// FLIP STUFF
let firstCard = null;
let secondCard = null;
//OVERALL GAME
let gameState = false;
let numCorrect = 0;
let awaitingMove = false;
// let currentCard = null;
let finishedGame = false;
let difficultyLevel = null;
//score
let highScore = 0;
localStorage.setItem('highScore', highScore);
let highScoreElem = document.querySelector('#high-score');




const picEventListener = (a,b) => {
  turnCard(a);
   b.classList.toggle('turned');
  if (!firstCard) {
          firstCard = a;
          return;
  }
  else{
          secondCard = a;
  }
      checkMatch(firstCard, secondCard);
};




function getPhotos(images) {
images = shuffleArray(images);
//    console.log('shuffled list: ' + images);
images.map((image,idx) => {
  const imageURL = image.src.tiny;
  const gridItem = document.createElement("div");
   gridItem.tabIndex = 0;
  const imageElement = document.createElement("img");
  imageElement.id = `img-${image.id}`;
  imageElement.src = imageURL;
  imageElement.setAttribute('colorShowing', 'true');
  // adding for card flip stuff
  gridItem.classList.add('card');
  // imageElement.classList.add('front');
  gridItem.append(imageElement);
  container.append(gridItem);
  if(audioContext.state === 'suspended') {
      audioContext.resume();
  } countdownAudio.play();
  let countdown = setTimeout(() => {
      imageElement.setAttribute('colorShowing', 'false');
      imageElement.classList.add('front');
       // clearInterval(countdown);
       gridItem.addEventListener('keypress', (event)=>{
           if (event.key === 'Enter'){
           picEventListener(imageElement, gridItem);
           }
       });
  
      gridItem.addEventListener('click', (event)=>{
          picEventListener(imageElement, gridItem);
      }
      );
  }, 4000);
})};




function chooseNumOfImages(){
if (easyMode) { numOfImages = 4;}
else if (mediumMode) {numOfImages = 6;
} else if (hardMode) {numOfImages = 8;}
//    console.log(numOfImages + " images");
};




let listOfImages = [];
function getRandomImageURL() {
fetch(`https://api.pexels.com/v1/search?query=${category}&per_page=${numOfImages}`,{
headers: { Authorization: 'lOf0IZEqVcSssBAijGjOY9hapFwmRgzrfqm7BPYxsnQlnuFeipKXQ8nH'}})
  .then(response => response.json())
  .then((data) => {
      console.log(data.photos);
      getPhotos(data.photos);
      getPhotos(data.photos);
  })
}




// when hit start button, calls chooseNumOfImages, shuffles that list, then creates the card images
startButton.addEventListener('click', ()=>{
  roundNum++;
  roundElem.innerText = `Round ${roundNum}`;
  category = document.querySelector('#user_inpt').value;
//    document.querySelector('.user_inpt').style.visibility = 'hidden';
  document.querySelector('#user_inpt').disabled = true;   
  getRandomImageURL(category);
  console.log('start button clicked');
  chooseNumOfImages();
  startButton.setAttribute('disabled', true);
setTimeout(() => {
      startTime = Date.now(); //when animation started
      intervalID = setInterval(animate, 10);}
  , 4000);
});




// pauseButton.addEventListener("click", ()=>{
//     const currentTime = Date.now();
//     clearInterval(intervalID);
//     elapsed = elapsed + currentTime-startTime;
// });




// select difficulty level which then determines number of images to display
easyButton.addEventListener('click', ()=>{
  console.log('easy mode chosen');
  easyMode = true;
  mediumMode = false;
  hardMode = false;
  chooseNumOfImages();
  easyButton.style.backgroundColor = '#ffaf72';
//    mediumButton.style.backgroundColor = '#f2ead3';
//    hardButton.style.backgroundColor = '#f2ead3';
  mediumButton.style.visibility = 'hidden';
  hardButton.style.visibility = 'hidden';
  hardButton.setAttribute('disabled', true);
  mediumButton.setAttribute('disabled', true);
  difficultyLevel = 'easyMode';
});
mediumButton.addEventListener('click', ()=>{
  console.log('medium mode chosen');
  easyMode = false;
  mediumMode = true;
  hardMode = false;
  chooseNumOfImages();
//    easyButton.style.backgroundColor = '#f2ead3';
  easyButton.style.visibility = 'hidden';
  mediumButton.style.backgroundColor =  '#ffaf72';
//    hardButton.style.backgroundColor = '#f2ead3';
   hardButton.style.visibility = 'hidden';
  easyButton.setAttribute('disabled', true);
  hardButton.setAttribute('disabled', true);
  difficultyLevel = 'mediumMode';
});
hardButton.addEventListener('click', ()=>{
  console.log('hard mode chosen');
  easyMode = false;
  mediumMode = false;
  hardMode = true;
  chooseNumOfImages();
//    easyButton.style.backgroundColor = '#f2ead3';
  easyButton.style.visibility = 'hidden';
  easyButton.setAttribute('disabled', true);
  mediumButton.setAttribute('disabled', true);
//    mediumButton.style.backgroundColor = '#f2ead3';
  mediumButton.style.visibility = 'hidden';
  hardButton.style.backgroundColor =  '#ffaf72';
  difficultyLevel = 'hardMode';
});




function updateDisplay(value) {
timeDisplay.innerText = "Time Left:  " + (value/1000).toFixed(0);
};




resetButton.addEventListener("click", ()=>{
  roundNum = 0;
  roundElem.innerText = `Round Number: ${roundNum}`;
   hardResetGame();
});




function animate(){
const step = () => {
  let now = Date.now();
  let diff = elapsed + (now-startTime);
  let from30 = 30000-diff;
  if (from30 >= 0) {
      updateDisplay(from30);
  }
  else{ 
      ranOutAudio.play();
      alert('ran out of time!');
      resetRound();
  }
  }
step();
};




function hardResetGame(){
  easyMode = false;
  mediumMode = false;
  hardMode = false;
  numOfImages = 0;
  finishedGame = false;
  startButton.removeAttribute('disabled');
  easyButton.style.backgroundColor =  '#ffaf72';
  mediumButton.style.backgroundColor =  '#ffaf72';
  hardButton.style.backgroundColor =  '#ffaf72';
  hardButton.style.visibility = 'visible';
  easyButton.style.visibility = 'visible';
   mediumButton.style.visibility = 'visible';
  easyButton.removeAttribute('disabled');
  mediumButton.removeAttribute('disabled');
  hardButton.removeAttribute('disabled');
  console.log(intervalID)
  clearInterval(intervalID);
  intervalID =0;
  timeDisplay.innerText = "Time Left: 30";
   console.log(intervalID);
  firstCard = null;
  secondCard = null;
  gameState = false;
  numCorrect = 0;
  awaitingMove = false;
  finishedGame = false;
  elapsed = 0;
  console.log('game reset');
  listOfImages = [];
  document.querySelector('#user_inpt').value = '';
  document.querySelector('#user_inpt').disabled = false;
  roundNum = 0;
  roundElem.innerText = `Round Number: ${roundNum}`;
  score = 0;
  scoreElem.innerText = `Score: ${score}`;
  container.innerHTML = '';
  }




const resetRound = () => {
  updateDisplay(30000);
  clearInterval(intervalID);
  intervalID = 0;
  firstCard = null;
  secondCard = null;
  gameState = false;
  numCorrect = 0;
  awaitingMove = false;
  finishedGame = false;
  elapsed = 0;
  console.log('game reset');
  listOfImages = [];
  roundNum++;
  roundElem.innerText = `Round Number: ${roundNum}`;
  while (container.firstChild) {
  container.removeChild(container.lastChild);
  };
  category = document.querySelector('#user_inpt').value;
  document.querySelector('#user_inpt').disabled = false;
  getRandomImageURL(category);
console.log('start button clicked');
chooseNumOfImages();
setTimeout(() => {
       clearInterval(intervalID);
       intervalID = 0;
      startTime = Date.now(); //when animation started
      intervalID = setInterval(animate, 10);}
  , 4000);
}




function checkMatch(cardOne, cardTwo) {
  console.log('check match');
  const cardToMatch = cardOne.id;
  const colorShowing = cardOne.getAttribute('colorShowing');
  if (awaitingMove || colorShowing === 'true'|| cardOne === cardTwo) {
      return "not allowed to click";
  }
  if (cardTwo.id === cardToMatch) {
      console.log('match');
      if(audioContext.state === 'suspended') {
          audioContext.resume();
      } correctAudio.play();
      awaitingMove = false;
      firstCard = null;
      numCorrect++;
      cardTwo.addEventListener('click', (event)=>{
          event.stopPropagation();
      });
      cardOne.addEventListener('click', (event)=>{
          event.stopPropagation();
      });




      if(numCorrect === numOfImages){
          finishedGame === true;
          if(audioContext.state === 'suspended') {
              audioContext.resume();
          } winningAudio.play();
          setTimeout(()=> {
              resetRound();
          },
              4000);
          score++;
          updateHighScore();
          scoreElem.innerText = `Score: ${score}`;
          alert('Great job! You matched all the cards and earned 1 point!');
      }
  }     
  else {
      console.log('no match');
      awaitingMove = true;
      setTimeout(() => {
          console.log('show both images before flip');
          // cardOne.classList.toggle('front');
          // cardTwo.classList.toggle('front');
          turnCard(cardOne);
          turnCard(cardTwo);
      // flip the cards back over
  },1000);
  if(audioContext.state === 'suspended') {
      audioContext.resume();
  } incorrectAudio.play();
}
awaitingMove = false;
firstCard = null;
}




function turnCard(card){
  console.log('turn card');
  setTimeout(()=>{
   card.classList.toggle('front')}, 550);
  if(audioContext.state === 'suspended') {
      audioContext.resume();
  } turnCardAudio.play();
}




function checkPair(){
  const match = (firstCard.id === secondCard.id);
  console.log(match);
}




function updateHighScore(){
  if (score > localStorage.highScore){
      localStorage.setItem('highScore', score);
      highScoreElem.innerText = `High Score: ${localStorage.highScore}`;
  }
  else{
      return;
  }
};
