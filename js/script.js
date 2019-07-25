let music = document.getElementById("music");
let audio = document.getElementsByTagName("audio")[0];

audio.addEventListener(
  "ended",
  function(event) {
    music.setAttribute("class", "");
  },
  false
);

music.addEventListener(
  "touchstart",
  function(event) {
    if (audio.paused) {
      audio.play();
      this.setAttribute("class", "play");
    } else {
      audio.pause();
      this.setAttribute("class", "");
    }
  },
  false
);
