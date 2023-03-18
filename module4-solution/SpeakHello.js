(function (window) {
	var helloSpeaker = {};
	var saygoodbye = "Hello";
	helloSpeaker.speak = function (name) {
		console.log(saygoodbye + " " + name);
	}
	window.helloSpeaker = helloSpeaker;
})(window);
