// ==UserScript==
// @name Watch Later Total Time
// @description UserScript for YouTube
// @match https://www.youtube.com/feed/watch_later
// @author Nami-D0C
// @version 1
// ==/UserScript==


var id = 'watch-later-total-time',
	span = document.getElementById(id);
if (!span) {
	var span = document.createElement('span');
	span.id = id;
	var nav = document.querySelector('.epic-nav-item-heading');
	nav.appendChild(span);
}

document.getElementById('feed-item-remove-videos')
	.addEventListener('click', function () {
		setTimeout(updateTime, 1000);
	});

updateTime();

function updateTime() {
	var totalTime = 0,
		attr = 'data-context-item-time',
		els = document.querySelectorAll('span.video-time');
	[].forEach.call(els, function (el) {
		var val = el.innerHTML.split(':');
		totalTime += 60 * val[0];
		totalTime += +val[1];
	});
	var seconds = totalTime % 60;
	totalTime = Math.floor(totalTime / 60);
	var minutes = totalTime % 60;
	totalTime = Math.floor(totalTime / 60)
	var hours = totalTime % 60;
	span.innerHTML = ". Total time is " + pad(hours) + "h" + pad(minutes)
		+ "m" + pad(seconds) + "s";
}

function pad(n) {
	if (n > 9)
		return n;
	else
		return '0' + n;
}
