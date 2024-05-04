// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let voices = [];
  const voiceSelect = document.querySelector("#voice-select");
  const synth = window.speechSynthesis;
  // TODO
  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  //button
  document.querySelector("button").addEventListener("click", (event) => {
    event.preventDefault();
    let utterance = new SpeechSynthesisUtterance(document.getElementById("text-to-speak").value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterance.voice = voices[i];
      }
    }
    synth.speak(utterance); 
    utterance.addEventListener("start", (event) =>{
      document.querySelector("img").src = `assets/images/smiling-open.png`;
    })
    utterance.addEventListener("end", (event) =>{
      console.log("this ended");
      document.querySelector("img").src = `assets/images/smiling.png`;
    })
  });
}