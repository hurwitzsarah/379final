let category = document.querySelector('#inpt').value;
let listOfImages = [];
function getRandomImageURL() {
    fetch(`https://api.api-ninjas.com/v1/randomimage?category=${category}`, {
        method: 'GET',
        headers: { 'X-Api-Key': 'ljwwURkxQ/KTUVd/LvHxIQ==v9J9xiW3iD6KcPYx', 'Accept': 'image/jpg'}})
        .then(response => response.blob())
        .then((blob) => {
            const imgURL = URL.createObjectURL(blob);
            console.log(imgURL);
            const duplicateimgURL = URL.createObjectURL(blob);
            listOfImages.push(imgURL);
            listOfImages.push(duplicateimgURL);
        })
        .catch(error => console.error('Error fetching data: ', error));
  }