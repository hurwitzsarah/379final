
// let category = document.querySelector('#inpt').value;
let listOfImages = [];
function getRandomImageURL() {
    fetch(`https://picsum.photos/200`)
        .then(response => response.blob())
        .then((blob) => {
            const imgURL = URL.createObjectURL(blob);
            const duplicateimgURL = URL.createObjectURL(blob);
            listOfImages.push(imgURL);
            listOfImages.push(duplicateimgURL);
        })
        .catch(error => console.error('Error fetching data: ', error));
  }