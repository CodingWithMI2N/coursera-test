(function (window) {
	var byeSpeaker = {};
	var saygoodbye = "Good Bye";
	byeSpeaker.speak = function (name) {
		console.log(saygoodbye + " " + name);
	}
	window.byeSpeaker = byeSpeaker;
})(window);
