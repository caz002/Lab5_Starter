// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const jsConfetti = new JSConfetti();
  //selecting horn
  const picture = document.querySelector("img");
  const sound = document.querySelector("audio");
  document.getElementById("horn-select").addEventListener('change', (event) => {
      picture.src = `assets/images/${event.target.value}.svg`;
      sound.src = `assets/audio/${event.target.value}.mp3`;
  })

  //changing volume
  const volume_pic = document.getElementById
  ("volume-controls").querySelector("img");
  const volume_element = document.getElementById('volume');
  volume_element.addEventListener('input', function(){
    sound.volume = volume_element.value/100.0;
    if(volume_element.value == 0){
      volume_pic.src = `assets/icons/volume-level-0.svg`;   
    }
    if(volume_element.value < 33 && volume_element.value >=1){
      volume_pic.src = `assets/icons/volume-level-1.svg`;
    }
    if(volume_element.value < 67 && volume_element.value >=33){
      volume_pic.src = `assets/icons/volume-level-2.svg`;
    }
    if(volume_element.value >=67){
      volume_pic.src = `assets/icons/volume-level-3.svg`;
    }
  });

  //sound button
  document.querySelector("button").addEventListener("click", (event)=>{
    document.querySelector("audio").play();
    if(document.getElementById("horn-select").value == 'party-horn'){
      jsConfetti.addConfetti();
    }
  });
}