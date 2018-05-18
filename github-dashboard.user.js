// ==UserScript==
// @name     				Github dashboard sidebar right
// @author          a-wing
// @version  				1
// @grant    				none
// @include         https://github.com/
// ==/UserScript==

(function () {
  document.getElementsByClassName("dashboard-sidebar")[0].style.cssFloat= "right"
})()

