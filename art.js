"use strict";

window.addEventListener(`DOMContentLoaded`, start);

const art1 = document.getElementById("artwork1");
const art2 = document.getElementById("artwork2");
const art3 = document.getElementById("artwork3");
const art4 = document.getElementById("artwork4");
const art5 = document.getElementById("artwork5");
const art6 = document.getElementById("artwork6");
const art7 = document.getElementById("artwork7");
const art8 = document.getElementById("artwork8");
const art9 = document.getElementById("artwork9");
const art10 = document.getElementById("artwork10");

function start() {
  // artwork1
  for (let i = 100; i <= 300; i += 20) {
    console.log(i);
    let div;
    div = document.createElement("div");
    div.classList.add("box");
    div.style.width = i + "px";
    div.style.height = i + "px";
    art1.appendChild(div);
  }

  //   artwork 2

  for (let i = 0; i <= 90; i += 10) {
    let div;
    div = document.createElement("div");
    div.classList.add("box");
    div.style.transform = `rotate(${i}deg)`;
    art2.appendChild(div);
  }

  //   artwork3

  for (let i = 0; i <= 200; i += 10) {
    let div;
    div = document.createElement("div");
    div.classList.add("circle");
    div.style.width = i + "px";
    div.style.height = i + "px";
    art3.appendChild(div);
  }
}
