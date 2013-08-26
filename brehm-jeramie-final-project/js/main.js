function quoteMaster() {
	var r = Math.floor(Math.random()*quotes.length);
	document.getElementById("quote").innerHTML='"' +quotes[r].quote + '"  ' + '-' + quotes[r].name;
};

function ticToc() {
	var time = new Date();
	var dayNight = "AM";
	var h = time.getHours();
	var m = time.getMinutes();
    var s = time.getSeconds();
	setTimeout('ticToc()',1000);
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
ticToc();