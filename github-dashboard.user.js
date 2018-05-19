// ==UserScript==
// @name     				Github dashboard sidebar right
// @author          a-wing
// @version  				1
// @grant    				none
// @include         https://github.com/*
// ==/UserScript==

document.querySelector('.dashboard-sidebar')?document.querySelector('.dashboard-sidebar').style.cssFloat = 'right':null;
