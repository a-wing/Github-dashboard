// ==UserScript==
// @name     				Github dashboard sidebar right
// @author  				a-wing
// @version  				1.1
// @grant    				none
// @include  				https://github.com/
// @include  				https://github.com/*dashboard*
// ==/UserScript==

document.querySelector('.dashboard-sidebar')?document.querySelector('.dashboard-sidebar').style.cssFloat = 'right':null;
