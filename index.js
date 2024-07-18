document.addEventListener("DOMContentLoaded", () => {});
const cardArray = [
  {
    name: "fries",
    img: "src/images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "src/images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "src/images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "src/images/pizza.png",
  },
  {
    name: "milkshake",
    img: "src/images/milkshake.png",
  },

  {
    name: "hotdog",
    img: "src/images/hotdog.png",
  },
  {
    name: "fries",
    img: "src/images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "src/images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "src/images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "src/images/pizza.png",
  },
  {
    name: "milkshake",
    img: "src/images/milkshake.png",
  },

  {
    name: "hotdog",
    img: "src/images/hotdog.png",
  },
];
// pomieszanie kart
cardArray.sort(() => 0.5 - Math.random());
console.log(cardArray);

// stworzenie funkcji ktora umiesci obrazek blank 12 razy na planszy
const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "src/images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
  }
}

//funkcja ktora odkrywa karty z obrazkami
function flipCard() {
  let cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
  console.log(cardsChosenIds);
}

//jezeli dwa razy klikienimy na ten sam obrazek mamy komunikat i
// obrazek wraca do blank
function checkForMatch() {
  const cards = document.querySelectorAll("img");
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];
  if (optionOneId == optionTwoId) {
    alert("you have clicked the same image");
    cards[optionOneId].setAttribute("src", "src/images/blank.png");
    cards[optionTwoId].setAttribute("src", "src/images/blank.png");
  } // jezeli znajdziemy te same obrazki
  else if (cardsChosen[0] === cardsChosen[1]) {
    alert("you have found a match!");
    cards[optionOneId].setAttribute("src", "src/images/white.png");
    cards[optionTwoId].setAttribute("src", "src/images/white.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    //jak nie znajdziemy obrazkow pasujacych
    cards[optionOneId].setAttribute("src", "src/images/blank.png");
    cards[optionTwoId].setAttribute("src", "src/images/blank.png");
    alert("sorry try again !");
  }
  cardsChosen = [];
  cardsChosenIds = [];
  resultDisplay.textContent = cardsWon.length;
  if (cardsWon.length === cardArray.length / 2) {
    // jezeli wszystkie pary sie zgadzaja
    resultDisplay.textContent = "congratulations ! you have won !";
  }
  console.log(cardsChosen);
  console.log(cardsWon);
}
createBoard();
