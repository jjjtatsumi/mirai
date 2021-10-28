const audio = document.getElementsByTagName("audio")[0]
const playButton = document.getElementById("play")
const stopButton = document.getElementById("stop")

playButton.addEventListener('click', () => {
  audio.play()
})

stopButton.addEventListener('click', () => {
  audio.pause()
})

/*audio slidber */
const slider_volume = document.getElementById("volume");
const audioElement = document.querySelector("audio");

var volume = document.getElementById('volume');

slider_volume.addEventListener("input", e => {
  audioElement.volume = slider_volume.value;
});
