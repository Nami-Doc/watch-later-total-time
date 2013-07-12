// ==UserScript==
// @name Watch Later Total Time
// @description UserScript for YouTube
// @match https://www.youtube.com/feed/watch_later
// @author Nami-D0C
// @version 1
// ==/UserScript==

var totalTime = 0,
	attr = 'data-context-item-time',
	els = document.querySelectorAll('[' + attr + ']');
[].forEach.call(els, function (el) {
	var val = el.getAttribute(attr).split(':');
	totalTime += 60 * val[0]; totalTime += +val[1];
});
var seconds = totalTime % 60;
totalTime = Math.floor(totalTime / 60);
var minutes = totalTime % 60;
totalTime = Math.floor(totalTime / 60)
var hours = totalTime % 60;

var id = 'watch-later-total-time',
	span = document.getElementById(id);
if (!span) {
	var span = document.createElement('span');
	span.id = id;
	var nav = document.querySelector('.epic-nav-item-heading');
	nav.appendChild(span);
}
span.innerHTML = ". Total time is " + hours + "h" + minutes
	+ "m" + seconds + "s";