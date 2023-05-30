// ==UserScript==
// @name         BingBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Koltsova Mila
// @match        https://www.bing.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let keywords = ["Пеший путеводитель по Афинам - город в Греции - 2023", "Куда поехать отдохнуть в июле в России", "Как спланировать отдых на Байкале летом"];
let keyword = keywords[getRandom(0, keywords.length)];
let links = document.links;
let search = document.getElementsByName("search")[0];

if (search !== undefined) {
  document.getElementById("sb_form_q").value = keyword;
  search.click();
} else {

  for(let i = 0; i < links.length; i++) {
    if(links[i].href.indexOf("travelest.ru") != -1) {
      let link = links[i];
      console.log("Нашел строку " + link);
      link.click();
      break;
    }
  }
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}
