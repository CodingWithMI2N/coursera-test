(function () {
  var names = ["Isaac", "Jennifer", "John", "Jason", "Joe", "Martin", "Fred", "James", "Wesley", "Jane"];
  for (var name in names) {
    var firstLetter = names[name].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[name]);
    } else {
      helloSpeaker.speak(names[name]);
    }
  }

})();
