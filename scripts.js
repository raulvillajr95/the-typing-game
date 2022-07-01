const mainWord = document.querySelector('.main-word');

const words = ['October', 'Week', 'Boom', 'Dead', 'Precede', 'Limit', 'Plagiarize', 'Despair', 'Persist', 'Loud', 'Solo', 'Excavation','Force','Threaten','Part','Goal','Nest','Tongue','Accompany','Oral','Horoscope','Cancer','Contemporary','Mathematics','Scheme','Skin','Ethics','Cave','Clock','Lead'];

// Preset functions
function randomNum(b) {
  return Math.floor(Math.random() * b) + 1;
}

let currentWord = `${words[randomNum(words.length - 1)]}`;
let currentWordSplit = currentWord.split('')

// mainWord.textContent = currentWord;

// Just turning each letter green
// Later doing it only when they match
for (let i = 0; i < currentWord.length; i++) {
  let span = document.createElement('span')
  span.textContent = `${currentWordSplit[i]}`
  mainWord.appendChild(span)
}
// console.log('mainWord inner children', mainWord)

let typedWords = []

function timerStart() {
  
}

window.addEventListener('keydown',() => {
  let letter = window.event.key

  let comparingPositionStyling = typedWords.length

  if (letter.match(/^[a-z]{1}$/i)) {
    typedWords.push(letter)
    let comparingPosition = typedWords.length-1

    if (typedWords[comparingPosition] === currentWord[comparingPosition]) {
      // mainWord.textContent[comparingPosition].style.color = 'green';
      mainWord.children[comparingPositionStyling].style.color = 'green';
    } else if (typedWords[comparingPosition] !== currentWord[comparingPosition]) {
      mainWord.children[comparingPositionStyling].style.color = 'red';
    }

    console.log(typedWords)
  }
})

/*
-start timer when first keydown
-minus 3 seconds when letter wrong

functionality:
-you get your one word in the middle of the screen
-user needs to type out word letter by letter
-if letter is correct,
    it turns green
-if letter is wrong,
    3 seconds tooken away from time
-in 30 seconds, enter as many correct words as possible
*/