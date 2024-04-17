const container = document.querySelector("#grid-container");
let cardTag;


function getPhotos(images) {
    images.map(image => {
      cardTag = `<div class="card">
               <img src=${image.src.tiny} />
          </div>`;
      container.innerHTML += cardTag;
    })
 }


let listOfImages = [];
// let category = document.querySelector('#user_inpt').value;
function getRandomImageURL() {
    fetch(`https://api.pexels.com/v1/search?query=${category}&per_page=${numOfImages}`,{
    headers: { Authorization: 'lOf0IZEqVcSssBAijGjOY9hapFwmRgzrfqm7BPYxsnQlnuFeipKXQ8nH'}})
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            getPhotos(data.photos);
            getPhotos(data.photos);
        })
  }
