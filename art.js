"use strict";

window.addEventListener(`DOMContentLoaded`, start);

const artworks = document.querySelectorAll(".artwork");

function start() {
  // artwork1

  for (let i = 100; i <= 300; i += 20) {
    artworks[0].innerHTML += `<div class="box" style="width:${i}px; height:${i}px"/><div>`;
  }
  //   artwork 2

  for (let i = 0; i <= 90; i += 10) {
    artworks[1].innerHTML += `<div class="box" style="transform:rotate(${i}deg)"></div>`;
  }

  //   artwork3

  for (let i = 0; i <= 200; i += 10) {
    artworks[2].innerHTML += `<div class="circle" style="width:${i}px; height:${i}px"/><div>`;
  }

  //   artwork4

  for (let i = -90; i <= 90; i += 20) {
    artworks[3].innerHTML += `<div class="box" style="transform:translate(${i}px,${i}px)"/></div>`;
  }

  //   artwork5
  for (let i = 1; i <= 512; i *= 2) {
    artworks[4].innerHTML += `<div class="circle" style="width:${i}px;height:${i}px"></div>`;
  }

  //   artwork6

  for (let i = -20; i < 45; i += 5) {
    artworks[5].innerHTML += `<div class="circle" style="transform:translateX(${i - 50}px) rotate(${i * 4}deg)"></div>`;
  }

  // artwork7

  for (let i = 0; i <= 200; i += 10) {
    artworks[6].innerHTML += `<div class="circle" style="width:${i}px;height:${i}px;transform:translate(${i}px,${-i / 2}px)"></div>`;
  }

  // artworks8 box	width, height, translate x/2 and rotat

  for (let i = 50; i <= 200; i += 10) {
    artworks[7].innerHTML += `<div class="box" style="width:${i}px; height:${i}px; transform: translateX(${i / 2}px) rotate(${i}deg)"></div>`;
  }

  // artwork9 50	200	30	box and circle	width and height

  for (let i = 50; i <= 200; i += 30) {
    artworks[8].innerHTML += `<div class="box" style="width:${i}px;height:${i}px"></div>`;
    artworks[8].innerHTML += `<div class="circle" style="width:${i}px;height:${i}px"></div>`;
  }
   //   artwork10

    for (let i = 1; i <= 512; i *= 2) {
      artworks[9].innerHTML += `<div class="circle" style="width:${i}px"></div>`;
    }

}