const mainWord = document.querySelector('.main-word');

const words = ['October', 'Week', 'Boom', 'Dead', 'Precede', 'Limit', 'Plagiarize', 'Despair', 'Persist', 'Loud', 'Solo', 'Excavation','Force','Threaten','Part','Goal','Nest','Tongue','Accompany','Oral','Horoscope','Cancer','Contemporary','Mathematics','Scheme','Skin','Ethics','Cave','Clock','Lead'];

// Preset functions
function randomNum(b) {
  return Math.floor(Math.random() * b) + 1;
}

let currentWord = `${words[randomNum(words.length - 1)]}`;
let currentWordSplit = currentWord.split('')

let correct = 0;

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

const timer = document.querySelector('.timer')
let secsRemaining = 30;

// Timer 
let interval = setInterval(() => {
  secsRemaining -= 1;
  if (secsRemaining >= 10) {
    // console.log(`0:${secsRemaining}`)
    timer.textContent = `0:${secsRemaining}`;
  } else if (secsRemaining < 10) {
    // console.log(`0:0${secsRemaining}`)
    timer.textContent = `0:0${secsRemaining}`;
  }
  if (secsRemaining == 0) {
    clearInterval(interval);
  }
}, 1000)

const numberCorrect = document.querySelector('.number-correct');

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
      secsRemaining -= 3;
    }
    
    // If word is correct
    if (typedWords.join('') == currentWord) {
      correct += 1;
      numberCorrect.textContent = `${correct}`;
    }
    // If finished word
    if (typedWords.length == currentWord.length) {
      console.log(mainWord.children.length)
      for (let i = 0; i < mainWord.children.length; i++) {
        //mainWord.children[i].style.color = "yellow";
        // mainWord.children[mainWord.children.length-1].remove()
        console.log(mainWord.children.length-1)
      }
      // console.log("Removed??", mainWord)

      // // Resets
      // let currentWordAfter1 = `${words[randomNum(words.length - 1)]}`;
      // let currentWordA1Split = currentWord.split('');
      
      // // display new word on screen
      // for (let i = 0; i < currentWordAfter1.length; i++) {
      //   let span = document.createElement('span')
      //   span.textContent = `${currentWordA1Split[i]}`;
      //   span.style.color = 'lightgrey';
      //   mainWord.appendChild(span)
      //   console.log(span)
      // }
    }

    console.log(typedWords.join('') , currentWord)
  }
})

/*
-new word when finished 
  completely remove all children span
  have new word
  add new word in spans
    make it visible, styling of lightgrey
-minus 3 seconds when letter wrong
  don't move forward
  don't turn red
  only remove 3 seconds
-all words turn red when time runs out
-add point '# correct' everytime I get word right
Later:
-when press start, make first word appear

functionality:
*possibly don't stop when wrong, just keep going
-you get your one word in the middle of the screen
-user needs to type out word letter by letter
-if letter is correct,
    it turns green
-if letter is wrong,
    3 seconds tooken away from time
-in 30 seconds, enter as many correct words as possible

ideas:
-possibly create functions for all pieces of code
*/