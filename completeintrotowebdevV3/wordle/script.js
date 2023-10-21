const WORD_URL = "https://words.dev-apis.com/word-of-the-day";
const WORDS_VALIDATION_URL = "https://words.dev-apis.com/validate-word";

async function init() {
  let buffer = "";
  let currentLine = 0;
  let wordisGuessed = false;
  let wordOfTheDay = await fetch(WORD_URL);
  wordOfTheDay = await wordOfTheDay.json();

  wordOfTheDay = wordOfTheDay.word;

  document.querySelector(".scoreboard").addEventListener("keydown", (event) => {
    if (wordisGuessed === false) {
      switch (event.key) {
        case "Backspace":
          buffer = buffer.substring(0, buffer.length - 1);
          id = "#letter-".concat(
            (buffer.length + 1 + currentLine * 5).toString()
          );
          document.querySelector(id).innerHTML = null;
          break;
        case "Enter":
          if (buffer.length === 5) {
            handleSubmitWord(buffer, wordOfTheDay, currentLine).then(function (
              result
            ) {
              if (result === true) {
                currentLine++;
                buffer = "";
              }
            });
          }
          break;
      }
      if (!isLetter(event.key)) {
        event.preventDefault();
      } else {
        if (buffer.length < 5) {
          buffer += event.key;
          refreshView(buffer, event.key, currentLine);
        } else {
          alert("Press enter or change the word");
        }
      }
    } else {
      alert("Ta deja gagner calme toi");
    }
  });
}

async function handleSubmitWord(buffer, result, currentLine) {
  validation = await fetch(WORDS_VALIDATION_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      word: buffer,
    }),
  });
  validation = await validation.json();
  validation = validation.validWord;

  if (validation) {
    if (buffer === result) {
      wordisGuessed = true;
      return true;
    }
    let alreadyLetter = new Array();
    for (let index = 0; index < buffer.length; index++) {
      if (buffer[index] === result[index]) {
        alreadyLetter.push(buffer[index]);
        fillColorLetter(currentLine, index, "green");
      }
    }
    for (let i = 0; i < buffer.length; i++) {
      for (let j = 0; j < result.length; j++) {
        if (buffer[i] === result[j] && !alreadyLetter.includes(buffer[i])) {
          fillColorLetter(currentLine, i, "yellow");
        }
      }
    }
  } else {
    alert("The word doesnt exist");
    return false;
  }
}

function fillColorLetter(currentLine, index, color) {
  id = "#letter-" + (index + 1 + currentLine * 5);
  document.querySelector(id).style.backgroundColor = color;
}

function refreshView(buffer, letter, currentLine) {
  id = "#letter-" + (buffer.length + currentLine * 5);
  document.querySelector(id).innerHTML = letter;
}

function isLetter(letter) {
  return /^[a-zA-Z]$/.test(letter);
}

init();
