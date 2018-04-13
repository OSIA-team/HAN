function say(msgToHear){
  var text = msgToHear;
  var msg = new SpeechSynthesisUtterance();
  var voices = window.speechSynthesis.getVoices();
  msg.voice = voices[3];
  msg.text = text;

  msg.onend = function(e) {
    console.log('Finished in ' + event.elapsedTime + ' seconds.');
  };

  speechSynthesis.speak(msg);

}

function shutUp(){
  window.speechSynthesis.cancel();
}
