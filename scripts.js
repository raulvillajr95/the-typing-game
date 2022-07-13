const mainWord = document.querySelector('.main-word');
const inputText = document.querySelector('.input-text');

const words = ['brimstone', 'grid', 'sleep', 'biter', 'decent', 'rights', 'discussion', 'foul', 'nomad', 'bedtime', 'hive', 'concussion', 'fight', 'blend', 'fiasco', 'abduction', 'heretic', 'bellybutton', 'warrior', 'bleeding', 'high', 'cry', 'bloodstream', 'hormonal', 'station', 'burden', 'surgical', 'comet', 'elevator', 'robber', 'column', 'propellant', 'phenomena', 'captive', 'plant', 'dent', 'absurdity', 'deathtrap', 'alliance', 'chill', 'colors', 'screamer', 'candle', 'fraud', 'reckless', 'entity', 'code', 'hellfire', 'racoon', 'eel', 'norm', 'plush', 'extremist', 'ghoulish', 'disgusting', 'auction', 'collarbone', 'kangaroo', 'flatness', 'historic', 'heelbone', 'apocalypse', 'became', 'generation', 'guard', 'loyal', 'snail', 'feature', 'flirtation', 'observer', 'countryside', 'hope', 'aquarium', 'contrast', 'belly', 'martini', 'messenger', 'blip', 'subsonic', 'nerve', 'shotgun', 'hat', 'sideshow', 'galactic', 'bludgeon', 'servant', 'dread', 'hungry', 'airship', 'eastern', 'bug', 'feel', 'teen', 'firearm', 'pill', 'mustache', 'duel', 'composite', 'fluid', 'blowgun', 'big', 'freakish', 'desire', 'official', 'allergenic', 'balcony', 'cyanide', 'lucky', 'bionic', 'glittery', 'hoodwink', 'grieving', 'haywire', 'heating', 'original', 'elongation', 'autonomous', 'flaw', 'waveform', 'guillotine', 'settler', 'starfish', 'miserable', 'bully', 'gift', 'bucket', 'juice', 'collider', 'skin', 'beak', 'aggressive', 'kind', 'mutant', 'connectedness', 'orangutang', 'dancer', 'dexterity', 'erotic', 'broken', 'hunk', 'afterworld', 'decadent', 'ransom', 'hairy', 'dropping', 'selfish', 'wolves', 'molecular', 'green', 'element', 'smart', 'fort', 'locus', 'astronaut', 'gun', 'gimmick', 'hose', 'meat', 'volume', 'prophesy', 'sound', 'glutton', 'blessing', 'switch', 'lurker', 'smile', 'hurdle', 'islamism', 'humble', 'daydream', 'groaner', 'excuse', 'domination', 'adoption', 'attic', 'glandular', 'hostility', 'humming', 'juvenile', 'blob', 'pillbox', 'corrosive', 'drifter', 'agonizing', 'absence', 'gasmask', 'bomber', 'arrival', 'hotly', 'ebony', 'coyotes', 'paradox', 'lavender', 'truth', 'monarchy', 'energy', 'moaning', 'bottle', 'egg', 'skull']

let saus = words[0].split(', ')
console.log(saus)

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