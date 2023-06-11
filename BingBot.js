// ==UserScript==
// @name         BingBot2
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       Koltsova Mila
// @match        https://www.bing.com/*
// @match        https://travelest.ru/*
// @match        https://openarium.ru/*
// @match        https://adventure-guide.ru/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let sites = {
"travelest.ru": ["Пеший путеводитель по Афинам - 2023", "Куда поехать отдохнуть в июле в России", "Как спланировать отдых на Байкале летом", "Кэшбэк по картам Мир"],
"openarium.ru": ["Гора Южная Демерджи", "Пляж Виктория", "Озеро Карымское (Karymskoe Lake)"],
"adventure-guide.ru" : ["Где посмотреть на китов вживую. Подборка локаций", "Отдых на Сахалине", "Достопримечательности Камчатки"]
}
let site = Object.keys(sites)[getRandom(0, Object.keys(sites).length)];
let keywords = sites[site];
let keyword = keywords[getRandom(0, keywords.length)];
let links = document.links;
let search = document.getElementsByName("search")[0];
let bingInput = document.getElementById("sb_form_q");

//let bingInput = document.getElementsByName("q")[0];

//cookie
if (search !== undefined) {
  document.cookie = `site=${site}`;
} else if (location.hostname == "www.bing.com") {
  site = getCookie("site");
} else {
  site = location.hostname;
}

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
} else if (location.hostname == site) {
    //работа на целевом сайте
  console.log("Мы на целевом сайте");
  setInterval(() => {
    let index = getRandom(0, links.length);
    if (getRandom(0, 101) >= 70) {
      location.href = "https://www.bing.com/";
    }
      //перебор ссылок и их кликабельность
    if(links[index].href.indexOf(site) != -1) links[index].click();
  }, getRandom(2000, 5000))
} else {
  let nextBingPage = true;
  for(let i = 0; i < links.length; i++) {
    if(links[i].href.indexOf(site) != -1) {
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

function getCookie(name) {
 let matches = document.cookie.match(new RegExp(
     "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
