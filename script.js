<<<<<<< HEAD
=======
// import _ from 'lodash';

>>>>>>> f6b1693b7ff7a2f20b0ec2b2db6a4657af67cfb0
const testingButton = document.querySelector('#testingButton');
const startButton = document.querySelector('button');
let cardImg = document.querySelector('img');
const imgContainer = document.querySelector('#grid-container');

<<<<<<< HEAD
startButton.addEventListener('click', ()=>{ 
    for (let i = 0; i < 6; i++) {
        getRandomImageURL();
        console.log('clicked');
        listOfImages = shuffleArray(listOfImages);
        }
   
        console.log(listOfImages);
   
=======
function getRandomImage() {
    getRandomImageURL(()=>{
        // cardImg.setAttribute('src', url);
        // document.body.append(cardImg);
        console.log(listOfImages);
    })
}

function makeCardList(){
    for (let i = 0; i < 6; i++) {
        getRandomImage();
          //     // let card = document.createElement('img');
    //     // card.src = cardImgs[i].src;
    //     // card.className = 'card';
    //     // card.style.display = 'none';
    //     // document.body.append(card);
    }
}

function createCardImages(){
>>>>>>> f6b1693b7ff7a2f20b0ec2b2db6a4657af67cfb0
    for(let idx=0; idx<listOfImages.length; idx++){
        const imageURL = listOfImages[idx];
        // console.log(imageURL);
        const gridItem = document.createElement("div");
        const imageElement = document.createElement("img");
<<<<<<< HEAD
        gridItem.className = `grid-item${idx}`;
            
            imageElement.src = imageURL;
            imageElement.id = `img-${idx}`;
            // console.log(imageElement);
            gridItem.append(imageElement);
            imgContainer.append(gridItem);
        }
    });
=======
        imageElement.src = imageURL;
        imageElement.id = `img-${idx}`;
        console.log(imageElement);
        gridItem.append(imageElement);
        imgContainer.append(gridItem);
    }
}
// for some reason need to click button twice to get images to show up?
testingButton.addEventListener('click', ()=>{
    console.log('clicked');
    console.log(listOfImages);
    makeCardList();
    listOfImages = shuffleArray(listOfImages);
    createCardImages();
});
>>>>>>> f6b1693b7ff7a2f20b0ec2b2db6a4657af67cfb0
