

function renderTime() {
	var currentTime = new Date();
	var dayNight = "AM";
	var h = currentTime.getHours();
	var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
	setTimeout('renderTime()',1000);
    if (h == 0) {
		h = 12;
	} else if (h > 12) { 
		h = h - 12;
		dayNight="PM";
	}
	if (h < 10) {
		h = "0" + h;
	}
	if (m < 10) {
		m = "0" + m;
	}
	if (s < 10) {
		s = "0" + s;
	}
    var myClock = document.getElementById('clock');
	myClock.textContent = h + ":" + m + ":" + s + " " + dayNight;
	myClock.innerText = h + ":" + m + ":" + s + " " + dayNight;
}
renderTime();

