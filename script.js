const testingButton = document.querySelector('#testingButton');
const startButton = document.querySelector('button');
let cardImg = document.querySelector('img');
const imgContainer = document.querySelector('#grid-container');

startButton.addEventListener('click', ()=>{ 
    for (let i = 0; i < 6; i++) {
        getRandomImageURL();
        console.log('clicked');
        listOfImages = shuffleArray(listOfImages);
        }
   
        console.log(listOfImages);
   
    for(let idx=0; idx<listOfImages.length; idx++){
        const imageURL = listOfImages[idx];
        // console.log(imageURL);
        const gridItem = document.createElement("div");
        const imageElement = document.createElement("img");
        gridItem.className = `grid-item${idx}`;
            
            imageElement.src = imageURL;
            imageElement.id = `img-${idx}`;
            // console.log(imageElement);
            gridItem.append(imageElement);
            imgContainer.append(gridItem);
        }
    });
