/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const symbols = ["&hearts;", "&clubs;", "&spades;", "&diamond;"];
  const values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  const cardVal = document.getElementById("card-value");
  const topSymEl = document.querySelector(".top-sym");
  const bottomSymEl = document.querySelector(".bottom-sym");

  let cardSymbol = symbols[Math.floor(Math.random() * symbols.length)];

  cardVal.innerHTML = values[Math.floor(Math.random() * values.length)];

  if (cardSymbol == "&hearts;") {
    topSymEl.style.color = "red";
    bottomSymEl.style.color = "red";
  }

  topSymEl.innerHTML = cardSymbol;
  bottomSymEl.innerHTML = cardSymbol;
};
