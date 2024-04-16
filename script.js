// import _ from 'lodash';

// const cardImgs = [
//     {'src' : './images/northquad.jpeg'},
//     {'src' : './images/angell.jpg'},
//     {'src' : './images/bell.jpg'},
//     {'src' : './images/cube.jpg'},
//     {'src' : './images/lawlib.jpg'},
//     {'src' : './images/naturalhistorymuse.jpg'},
//     {'src' : './images/union-01.jpg'},
//     {'src' : './images/ross.jpg'},
//   ]


const testingButton = document.querySelector('#testingButton');
const startButton = document.querySelector('button');
let cardImg = document.querySelector('img');
const imgContainer = document.querySelector('#grid-container');

function getRandomImage() {
    getRandomImageURL(()=>{
        // cardImg.setAttribute('src', url);
        // document.body.append(cardImg);
        console.log(listOfImages);
    })
}


startButton.addEventListener('click', ()=>{ 

    for (let i = 0; i < 6; i++) {
    //     // let card = document.createElement('img');
    //     // card.src = cardImgs[i].src;
    //     // card.className = 'card';
    //     // card.style.display = 'none';
    //     // document.body.append(card);
    //     console.log(i);
        getRandomImage();
        // console.log(listOfImages);
    }
});

testingButton.addEventListener('click', ()=>{
    console.log('clicked');
    console.log(listOfImages);
    for(let idx=0; idx<listOfImages.length; idx++){
        const imageURL = listOfImages[idx];
        console.log(imageURL);
        const gridItem = document.createElement("div");
        gridItem.className = `grid-item${idx}`;
        const imageElement = document.createElement("img");
        imageElement.src = imageURL;
        imageElement.id = `img-${idx}`;
        console.log(imageElement);
        gridItem.append(imageElement);
        imgContainer.append(gridItem);
    }
});

      
