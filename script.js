let cardImg = document.querySelector('img');
const container = document.querySelector('#grid-container');
let category = document.querySelector('#user_inpt').value;
let easyMode = false;
let mediumMode = false;
let hardMode = false;
let numOfImages = 0;
const easyButton = document.querySelector('#easy');
const mediumButton = document.querySelector('#medium');
const hardButton = document.querySelector('#hard');
const startButton = document.querySelector('#start-button'); // starts timer and displays cards
const timeDisplay = document.querySelector('#time-display'); // Displays the time
const pauseButton = document.querySelector('#pause-button'); // Pauses the timer
const resetButton = document.querySelector('#reset-button'); // Resets the timer
let cardShow = false;
let cardTag;
let intervalID;
let startTime = Date.now();
let elapsed = 0;

function getPhotos(images) {
    images = shuffleArray(images);
    console.log('shuffled list: ' + images);
    images.map((image,idx) => {
        const imageURL = image.src.tiny;
        const gridItem = document.createElement("div");
        const imageElement = document.createElement("img");
        imageElement.id = `img-${image.id}`;
        imageElement.src = imageURL;
        gridItem.append(imageElement);
        container.append(gridItem);
        console.log(imageElement);
    })
 }

function chooseNumOfImages(){
    if (easyMode) { numOfImages = 4;}
    else if (mediumMode) {numOfImages = 6;
    } else if (hardMode) {numOfImages = 8;}
    console.log(numOfImages + " images");
};

let listOfImages = [];
// let category = document.querySelector('#user_inpt').value;
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
    category = document.querySelector('#user_inpt').value;
    getRandomImageURL(category);
    console.log('start button clicked');
    chooseNumOfImages();
    console.log('card list made with ' + listOfImages.length + ' images');
    startTime = Date.now(); //when animation started
    intervalID = setInterval(animate, 10);
});

// select difficulty level which then determines number of images to display
easyButton.addEventListener('click', ()=>{
    console.log('easy mode chosen');
    easyMode = true;
    mediumMode = false;
    hardMode = false;
    chooseNumOfImages();
    easyButton.style.backgroundColor = 'green';
    mediumButton.style.backgroundColor = 'white';
    hardButton.style.backgroundColor = 'white';
});

mediumButton.addEventListener('click', ()=>{
    console.log('medium mode chosen');
    easyMode = false;
    mediumMode = true;
    hardMode = false;
    chooseNumOfImages();
    easyButton.style.backgroundColor = 'white';
    mediumButton.style.backgroundColor = 'green';
    hardButton.style.backgroundColor = 'white';
});

hardButton.addEventListener('click', ()=>{
    console.log('hard mode chosen');
    easyMode = false;
    mediumMode = false;
    hardMode = true;
    chooseNumOfImages();
    easyButton.style.backgroundColor = 'white';
    mediumButton.style.backgroundColor = 'white';
    hardButton.style.backgroundColor = 'green';
});

function updateDisplay(value) {
    timeDisplay.innerText = (value/1000).toFixed(0);
 };

 
resetButton.addEventListener("click", ()=>{
    resetGame();

 });
 
 
 
 function animate(){

    const step = () => {
        let now = Date.now();
        let diff = elapsed + (now-startTime);
        let from30 = 30000-diff;
        if (from30 >= 0) {
            updateDisplay(from30);
        }

    };

    step();
 
 };
 
 updateDisplay(elapsed);
 
 function resetGame(){
    easyMode = false;
    mediumMode = false;
    hardMode = false;
    numOfImages = 0;
    easyButton.style.backgroundColor = 'hotpink';
    mediumButton.style.backgroundColor = 'hotpink';
    hardButton.style.backgroundColor = 'hotpink';
    clearInterval(intervalID);
    updateDisplay(30000);
    elapsed = 0;
    console.log('game reset');
    listOfImages = [];
    category ='';
    container.innerHTML = '';
 }