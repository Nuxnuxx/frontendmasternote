const WORD_URL = "https://words.dev-apis.com/word-of-the-day";
const WORDS_VALIDATION_URL = "https://words.dev-apis.com/validate-word";

async function init() {
  // retrieve the word of the day
  let wordOfTheDay = await fetch(WORD_URL);
  wordOfTheDay = await wordOfTheDay.json();

  let Game = {
    word: "",
    currentLine: 0,
    wordIsGuessed: false,
    wordOfTheDay: wordOfTheDay.word,
  };

  document.querySelector(".scoreboard").addEventListener("keydown", (event) => {
    if (isLetter(event.key)) {
      console.log("Letter :" + event.key);
      inputKeyStroke(Game, event.key);
    } else if (!isLetter(event.key) && Game.wordIsGuessed === false) {
      switch (event.key) {
        case "Backspace":
          console.log("Backspace");
          handleBackSpace(Game);
          break;
        case "Enter":
          console.log("Enter");
          handleEnter(Game);
          break;
      }
    }
  });
}

function inputKeyStroke(obj, key) {
  if (obj.word.length === 5) {
    return 0;
  }
  if (obj.word.length + obj.currentLine * 5 > 29) {
    return 0;
  }

  number = obj.word.length + obj.currentLine * 5;
  fillInnerHTML(key, number);
  obj.word += key;
}

function handleBackSpace(obj) {
  obj.word = obj.word.substring(0, obj.word.length - 1);
  number = obj.word.length + obj.currentLine * 5;
  fillInnerHTML(null, number);
}

async function handleEnter(obj) {
  if (obj.word.length < 5) {
    return 0;
  }

  let bool = await wordExist(obj.word)
  if (bool) {
    // alert("Words doesnt exist")
    document.querySelector(".info").innerHTML = "Le mot n'existe pas"
    document.querySelector(".info").style.color = "red"
    return 0;
  }

  if (obj.word === obj.wordOfTheDay) {
    document.querySelector(".info").innerHTML = "Gagné"
    document.querySelector(".info").style.color = "green"
    handleGoodSubmitWord(obj);
  } else {
    document.querySelector(".info").innerHTML = "Bien essayer"
    document.querySelector(".info").style.color = "yellow"
    handleWrongSubmitWord(obj);
  }
}

function handleGoodSubmitWord(obj) {
  for (let index = 0; index < obj.word.length; index++) {
    number = index + obj.currentLine * 5;
    fillColor("green", number);
  }
  obj.wordIsGuessed = true;
}

async function wordExist(word) {
  document.querySelector(".spinner").classList.add("anim")
  validation = await fetch(WORDS_VALIDATION_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      word: word,
    }),
  });
  validation = await validation.json();
  validation = validation.validWord;
  document.querySelector(".spinner").classList.remove("anim")
  if (validation) {
    return false;
  } else {
    return true;
  }
}

function handleWrongSubmitWord(obj) {
  let arrayOfLetter = new Array();
  let color;

  for (let index = 0; index < obj.word.length; index++) {
    // calculate the number of the div which the color has to change
    number = index + obj.currentLine * 5;
    color = "gray";

    for (let j = 0; j < obj.wordOfTheDay.length; j++) {
      if (
        obj.word[index] === obj.wordOfTheDay[j] &&
        !arrayOfLetter.includes(obj.word[index])
      ) {
        arrayOfLetter.push(obj.word[index]);
        color = "yellow";
      }
    }
    if (obj.word[index] === obj.wordOfTheDay[index]) {
      color = "green";
    }
    fillColor(color, number);
  }
  obj.currentLine++;
  obj.word = "";
}

function fillColor(color, number) {
  id = "#letter-" + number;
  document.querySelector(id).style.backgroundColor = color;
}

function fillInnerHTML(value, number) {
  id = "#letter-" + number;
  document.querySelector(id).innerHTML = value;
}

function isLetter(letter) {
  return /^[a-zA-Z]$/.test(letter);
}

init();
