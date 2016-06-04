var source = new EventSource("/event");
	source.onmessage = function(event) {
	document.getElementById("data").innerHTML += event.data + "<br>";
};

