const audioContext = new AudioContext();
const countdownAudio = new Audio('audio/mixkit-simple-game-countdown-921.wav');
const ranOutAudio = new Audio('audio/mixkit-funny-fail-low-tone-2876.wav');
const turnCardAudio = new Audio('audio/mixkit-short-wind-swoosh-1461.wav');
const winningAudio = new Audio('audio/mixkit-winning-chimes-2015.wav');
const correctAudio = new Audio('audio/mixkit-correct-answer-tone-2870.wav');
const incorrectAudio = new Audio('audio/mixkit-wrong-electricity-buzz-955.wav');


const countdownSource = audioContext.createMediaElementSource(countdownAudio);
const ranOutSource = audioContext.createMediaElementSource(ranOutAudio);
const turnCardSource = audioContext.createMediaElementSource(turnCardAudio);
const winningSource = audioContext.createMediaElementSource(winningAudio);
const correctSource = audioContext.createMediaElementSource(correctAudio);
const incorrectSource = audioContext.createMediaElementSource(incorrectAudio);


countdownSource.connect(audioContext.destination);
ranOutSource.connect(audioContext.destination);
turnCardSource.connect(audioContext.destination);
winningSource.connect(audioContext.destination);
correctSource.connect(audioContext.destination);
incorrectSource.connect(audioContext.destination);

