let category = document.querySelector('#inpt').value;
let listOfImages = [];
function getRandomImageURL() {
    fetch(`https://api.api-ninjas.com/v1/randomimage?category=${category}`, {
        method: 'GET',
        headers: { 'X-Api-Key': 'ljwwURkxQ/KTUVd/LvHxIQ==v9J9xiW3iD6KcPYx', 'Accept': 'image/jpg'}})
        .then((response) => {
            if(response.length === 0) {
                getRandomImageURL();
            }else{
                return response.blob();}
        }).then((blob) => {
            const imgURL = URL.createObjectURL(blob);
            const duplicateimgURL = URL.createObjectURL(blob);
            listOfImages.push(imgURL);
            listOfImages.push(duplicateimgURL);
            console.log(listOfImages);
        })
        .catch(error => console.error('Error fetching data: ', error));
  }