// ==UserScript==
// @name     				Github dashboard sidebar right
// @author          a-wing
// @version  				1
// @grant    				none
// @include         https://github.com/*
// ==/UserScript==

(function () {
  var element = document.getElementsByClassName("dashboard-sidebar");
    if(element[0] !== undefined) {
        element[0].style.cssFloat= "right";
    }
})()
