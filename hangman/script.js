let letters = "abcdefghijklmnopqrstuvwxyz";
let lettersArray = Array.from(letters);

let lettersContainer = document.querySelector(".letters");
let drawingArray =["stand","hang","rope","head", "body","hands","legs"];
let drawingCalsses = [];
drawingCalsses.push(...drawingArray.map(item => document.querySelector(`.${item}`)));
lettersArray.forEach(letter => {
  let span = document.createElement("span");
  span.innerHTML = letter;
  lettersContainer.appendChild(span);
});

let words = {
  programming: ["js", "php", "go"],
  movies: ["avatar", "matrix", "up"],
  people: ["ahmed", "amr", "ali"]
};

let allKeys = Object.keys(words);
let randomProp = allKeys[Math.floor(Math.random() * allKeys.length)];
let randomValue = words[randomProp];
let randomWord = randomValue[Math.floor(Math.random() * randomValue.length)];

document.querySelector(".category").innerHTML = randomProp;

let lettersGuessContainer = document.querySelector(".letters-guess");

let lettersAndSpace = Array.from(randomWord);

lettersAndSpace.forEach(letter => {
  let span = document.createElement("span");
  lettersGuessContainer.appendChild(span);
});

let wrongAttempts = 0;
let theDraw = document.querySelector(".the-draw");

document.addEventListener("click", function(e) {
  if (e.target.parentNode.className === "letters") {

    e.target.classList.add("clicked");

    let clickedLetter = e.target.innerHTML;
    let chosenWord = Array.from(randomWord);

    let status = false;

    chosenWord.forEach((letter, index) => {
      if (clickedLetter === letter) {
        status = true;
        lettersGuessContainer.children[index].innerHTML = letter;
      }
    });

    if (!status) {
      drawingCalsses[wrongAttempts].style.display = "block";
      wrongAttempts++;
      if (wrongAttempts == 7) {
        endGame(false);
      }
    }

    if ([...lettersGuessContainer.children].every(span => span.innerHTML !== "")) {
      endGame(true);
    }
  }
});

function endGame(win) {
  let div = document.createElement("div");
  div.className = "popup";
  lettersContainer.style.pointerEvents = "none";
  if (win) {
    div.innerHTML = "🎉 You Win";
  } else {
    div.innerHTML = `💀 You Lose, Word is: ${randomWord}`;
  }

  document.body.appendChild(div);
}