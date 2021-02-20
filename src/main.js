/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  balloonHandler();
};

let colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "pink",
  "grey",
  "purple",
  "black",
  "green",
  "brown",
  "red",
  "blue",
  "green",
  "yellow",
  "pink",
  "grey",
  "purple",
  "black",
  "green",
  "brown"
];

let balloonContainer = document.querySelector("#ballooon-map");

const popBalloon = balloonPosition => {
  colors[balloonPosition] = null;
  balloonHandler();
  gameOver();
};

const balloonHandler = () => {
  let content = "";
  colors.forEach((elem, index) => {
    content += `<div class="balloon ${
      elem === null ? "popped" : "active"
    } ${elem}"></div>`;
  });

  balloonContainer.innerHTML = content;

  if (content !== "") {
    let balloons = document.querySelectorAll(".balloon");
    balloons.forEach((balloon, index) =>
      balloon.addEventListener("click", () => popBalloon(index))
    );
  }
};

const gameOver = () => {
  const allNull = colors.every(elem => elem === null);
  if (allNull) {
    balloonContainer.innerHTML = "<h1>Game Over</h1>";
  }
};
