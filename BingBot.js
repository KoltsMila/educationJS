// ==UserScript==
// @name         BingBot
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       Koltsova Mila
// @match        https://www.bing.com/*
// @match        https://travelest.ru/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let keywords = ["Пеший путеводитель по Афинам - город в Греции - 2023", "Куда поехать отдохнуть в июле в России", "Как спланировать отдых на Байкале летом"];
let keyword = keywords[getRandom(0, keywords.length)];
let links = document.links;
let search = document.getElementsByName("search")[0];
let bingInput = document.getElementById("sb_form_q");
//let bingInput = document.getElementsByName("q")[0];


if (search !== undefined) {
  let i = 0;
  let timerId = setInterval(() => {
    bingInput.value += keyword[i];
    i++;
    if (i == keyword.length) {
      clearInterval(timerId);
      search.click();
    }
  }, 300);
} else if (location.hostname == "travelest.ru") {
  console.log("Мы на целевом сайте");
  setInterval(() => {
    let index = getRandom(0, links.length);
    if (getRandom(0, 101) >= 70) {
      location.href = "https://www.bing.com/";
    }
    if(links[index].href.indexOf("travelest.ru") != -1) links[index].click();
  }, getRandom(2000, 5000))
} else {
  let nextBingPage = true;
  for(let i = 0; i < links.length; i++) {
    if(links[i].href.indexOf("travelest.ru") != -1) {
      let link = links[i];
      nextBingPage = false;
      console.log("Нашел строку " + link);
      setTimeout(() => {
        link.click();
      }, getRandom(2500, 5000))
      break;
    }
  }
  let elementExist = setInterval(() => {
    let element = document.querySelector(".sb_pagS sb_pagS_bp b_widePag sb_bp");
    if (element != null) {
      if (element.innerText == "5") {
        nextBingPage = false;
        location.href = "https://www.bing.com/";
      }
      clearInterval(elementExist)
    }
  }, 100)
  }

//if (nextBingPage) {
//setTimeout(() => {
//__.click();
//}, getRandom(3000, 8000));
//}
//}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}
