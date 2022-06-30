const mainWord = document.querySelector('.main-word');

const words = ['October', 'Week', 'Boom', 'Dead', 'Precede', 'Limit', 'Plagiarize', 'Despair', 'Persist', 'Loud', 'Solo', 'Excavation','Force','Threaten','Part','Goal','Nest','Tongue','Accompany','Oral','Horoscope','Cancer','Contemporary','Mathematics','Scheme','Skin','Ethics','Cave','Clock','Lead'];
const alphabet = ['a']

// Preset functions
function randomNum(b) {
  return Math.floor(Math.random() * b) + 1;
}

let currentWord = `${words[randomNum(words.length - 1)]}`;
let currentWordSplit = currentWord.split('')

mainWord.textContent = currentWord;

let typedWords = []

window.addEventListener('keydown',() => {
  let letter = window.event.key

  let comparingPosition = typedWords.length-1

  if (letter.match(/^[a-z]{1}$/i)) {
    typedWords.push(letter)

    if (typedWords[comparingPosition] == currentWord[comparingPosition]) {
      // mainWord.textContent[comparingPosition].style.color = 'green';
      console.log('The WORD', mainWord.textContent[comparingPosition])
    }

    console.log(typedWords)
  }
})

console.log(currentWord)
console.log(currentWordSplit)
console.log(typedWords)

/*
- style a single letter in general ? how?

- style that single word green when match

functionality:
-you get your one word in the middle of the screen
-user needs to type out word letter by letter
-if letter is correct,
    it turns green
-if letter is wrong,
    3 seconds tooken away from time
-in 30 seconds, enter as many correct words as possible
*/