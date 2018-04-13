"use strict";

// first we make sure annyang started succesfully
if (annyang) {

  // define the functions our commands will run.
  var hello = function() {
    alert("Ahoj");
  };

  var wiki = function(tag){
    var output= "output";
    $.getJSON("https://cs.wikipedia.org/w/api.php?format=json&action=query&indexpageids=&prop=extracts&exintro=&explaintext=&origin=*&titles="+tag, function(data) {
      var pageId = data.query.pageids;
        output = "<h2>"+data.query.pages[pageId].title+"</h2>";
        output += "<p>"+data.query.pages[pageId].extract+"</p>";
        document.getElementById('textResult').innerHTML = output;
    });
  };


  // define our commands.
  // * The key is the phrase you want your users to say.
  // * The value is the action to do.
  //   You can pass a function, a function name (as a string), or write your function as part of the commands object.
  var commands = {
    'Ahoj':        hello,
    'definuj *tag':      wiki//,
    //'show :type report':    showTPS,
    //'let\'s get started':   getStarted,
  };

  // OPTIONAL: activate debug mode for detailed logging in the console
  annyang.debug();

  // Add voice commands to respond to
  annyang.addCommands(commands);

  // OPTIONAL: Set a language for speech recognition (defaults to English)
  // For a full list of language codes, see the documentation:
  // https://github.com/TalAter/annyang/blob/master/docs/FAQ.md#what-languages-are-supported
  annyang.setLanguage('cs');


  annyang.addCallback('result',function(whatWasHeard) {
    document.getElementById("youSaid").innerHTML = whatWasHeard[0];
  });
  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();

} else {
  alert('this browser doesnt support SpeechRecogantion! use Chrome or Firefox')
}
