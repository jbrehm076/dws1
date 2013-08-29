function quoteMaster() {
	var r = Math.floor(Math.random()*quotes.length);
	document.getElementById("quote").innerHTML='"' +quotes[r].quote.italics() + '"  ' + '-' + quotes[r].name;
};
