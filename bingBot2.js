// ==UserScript==
// @name         BingBot
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       Koltsova Mila
// @match        https://www.bing.com/*
// @match        https://napli.ru/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let keywords = ["Как использовать devtools браузера", "10 популярных шрифтов от Google", "Редакции и ревизии в вордпресс"];
let keyword = keywords[getRandom(0, keywords.length)];
//let keyword = "Работа с инструментом разработчика chrome";
let links = document.links;
let search = document.getElementsByName("search")[0];
//let search = document.getElementById("sb_form_go");
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
  }, 350);
} else if (location.hostname == "napli.ru") {
    //работа на целевом сайте
  console.log("Нахожусь на целевом сайте");
  setInterval(() => {
    let index = getRandom(0, links.length);
    if (getRandom(0, 101) >= 70) {
      location.href = "https://www.bing.com/";
    }
      //перебор ссылок и их кликабельность
    if(links[index].href.indexOf("napli.ru") != -1) links[index].click();
  }, getRandom(2000, 5000))
} else {
  let nextBingPage = true;
  for(let i = 0; i < links.length; i++) {
    if(links[i].href.indexOf("napli.ru") != -1) {
      let link = links[i];
      nextBingPage = false;
      console.log("Нашел строку " + link);
      setTimeout(() => {
        link.click();
      }, getRandom(2500, 5000))
      break;
    }
  }
    //поиск на следующих страницах
      let elementExist = setInterval(() => {
    let element = document.querySelector(".sb_pagS.sb_pagS_bp.b_widePag.sb_bp");
    if (element != null) {
      if (element.innerText == "5") {
        nextBingPage = false;
        location.href = "https://www.bing.com/";
      }
      clearInterval(elementExist);
    }
  }, 100)
  if (nextBingPage) {
    setTimeout(() => {
      let nextPage = document.querySelector(".sw_next");
       nextPage.click();
    }, getRandom(3000, 8000))
  }
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}
