function shuffleArray(array) {
    const shuffledArray = array.slice(); // Copy the array

    // Shuffle the copy of the array using https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
    for (let i = shuffledArray.length - 1; i > 0; i--) { // For each index,
        const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements i and j
    }
    return shuffledArray; // Return the shuffled copy
}
// function shuffleCards() {
//     let currentIndex = cards.length,
//       randomIndex,
//       temporaryValue;
//     while (currentIndex !== 0) {
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex -= 1;
//       temporaryValue = cards[currentIndex];
//       cards[currentIndex] = cards[randomIndex];
//       cards[randomIndex] = temporaryValue;
//     }