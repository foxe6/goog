// ==UserScript==
// @name         google colab keep alive
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://colab.research.google.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        GM_registerMenuCommand
// ==/UserScript==


function ClickConnect(repeat){
    document.querySelector("#top-toolbar > colab-connect-button").shadowRoot.querySelector("#connect").click();
    if(!repeat){
        setTimeout(function(){
            ClickConnect(1);
        }, 2000);
    }
};
let ti;
GM_registerMenuCommand('Go AFK', function() {
    if(ti) return;
    ClickConnect(0);
    ti = setInterval(function(){ClickConnect(0)}, 60*1000);
}, 'a');
GM_registerMenuCommand('I am back', function() {
    if(!ti) return;
    clearInterval(ti);
    ti = null;
}, 'b');
