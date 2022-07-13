const mainWord = document.querySelector('.main-word');
const inputText = document.querySelector('.input-text');

const words = ['october', 'foot', 'virus', 'overcharge', 'memory', 'government', 'cycle', 'surgeon', 'dead', 'technique', 'late', 'multimedia', 'path', 'stomach', 'federation', 'speaker', 'trait', 'in', 'act', 'trouble', 'fling', 'trainer', 'honor', 'convert', 'deal', 'chocolate', 'retreat', 'ideology', 'exercise', 'tasty', 'mourning', 'twitch', 'pass', 'banana', 'trivial', 'launch', 'hunter', 'calculation', 'racism', 'still', 'rhetoric', 'body', 'illusion', 'quest', 'analyst', 'research', 'panic', 'powder', 'privacy', 'flock', 'machinery'];

// Preset functions
function randomNum(b) {
  return Math.floor(Math.random() * b) + 1;
};

let currentWord = `${words[randomNum(words.length - 1)]}`;
let currentWordSplit = currentWord.split('');

let correct = 0;

for (let i = 0; i < currentWord.length; i++) {
  let span = document.createElement('span');
  span.textContent = `${currentWordSplit[i]}`
  mainWord.appendChild(span);
};

let typedWords = [];

const timer = document.querySelector('.timer');
const timerSection = document.querySelector('.timer-section');
const correctSection = document.querySelector('.correct-section');
let secsRemaining = 30;

// Timer 
let interval = setInterval(() => {
  secsRemaining -= 1;
  if (secsRemaining >= 10) {
    timer.textContent = `0:${secsRemaining}`;
  } else if (secsRemaining < 10) {
    timer.textContent = `0:0${secsRemaining}`;
  };
  if (secsRemaining <= 0) {
    clearInterval(interval);
    mainWord.style.display = 'none';
    timerSection.style.display = 'none';
    correctSection.style.fontSize = '2rem';
    secsRemaining = 30;
    timer.textContent = `0:${secsRemaining}`;
    inputText.style.display = 'none';
  };
}, 1000);

const numberCorrect = document.querySelector('.number-correct');

window.addEventListener('keydown',() => {
  let letter = window.event.key;

  // Reset input
  inputText.value = '';

  let comparingPositionStyling = typedWords.length;

  if (letter.match(/^[a-z]{1}$/i)) {
    typedWords.push(letter);
    let comparingPosition = typedWords.length-1;

    if (typedWords[comparingPosition] === currentWord[comparingPosition]) {
      mainWord.children[comparingPositionStyling].style.color = 'green';
    } else if (typedWords[comparingPosition] !== currentWord[comparingPosition]) {
      mainWord.children[comparingPositionStyling].style.color = 'red';
      secsRemaining -= 3;
    }
    
    if (typedWords.join('') == currentWord) {
      correct += 1;
      numberCorrect.textContent = `${correct}`;
    }

    if (typedWords.length == currentWord.length) {
      let mainWordLen = mainWord.children.length;
      for (let i = 0; i < mainWordLen; i++) {
        mainWord.children[mainWord.children.length-1].remove();
      }

      secsRemaining += 1;

      // Resets
      let currentWordAfter1 = `${words[randomNum(words.length - 1)]}`;
      let currentWordA1Split = currentWordAfter1.split('');
      currentWord = currentWordAfter1;
      currentWordSplit = currentWordA1Split;
      typedWords = [];

      
      // display new word on screen
      for (let i = 0; i < currentWordAfter1.length; i++) {
        let span = document.createElement('span')
        span.textContent = `${currentWordA1Split[i]}`;
        span.style.color = 'lightgrey';
        mainWord.appendChild(span)
      }
    }
  }
})