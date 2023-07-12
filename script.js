// console.log("Hi Everyone");

// audioElement.play();
// Array of objects containing particular KK's Music
let array = [
  {
    songName: "Beete Lamhe - KK",
    filePhoto: "accessories/covers/kk1.jpg",
    filePath: "accessories/music/BeeteLamhe.mp3",
  },

  {
    songName: "Kya Mujhe Pyar Hai - KK",
    filePhoto: "accessories/covers/kk2.jpg",
    filePath: "accessories/music/Kya Mujhe Pyar Hai - KK.mp3",
  },

  {
    songName: "Sach Keh Raha Hai Deewana - KK",
    filePhoto: "accessories/covers/kk3.jpg",
    filePath: "accessories/music/Sach Keh Raha Hai Deewana - KK.mp3",
  },

  {
    songName: "Tu Jo Mila - KK",
    filePhoto: "accessories/covers/kk4.jpg",
    filePath: "accessories/music/Tu Jo Mila - KK.mp3",
  },

  {
    songName: "Zindagi Do Pal Ki - KK",
    filePhoto: "accessories/covers/as1.jpg",
    filePath: "accessories/music/Zindagi Do Pal Ki - KK.mp3",
  },

  {
    songName: "Labon Ko - KK",
    filePhoto: "accessories/covers/as2.jpg",
    filePath: "accessories/music/Labon Ko - KK.mp3",
  },

  {
    songName: "Milne Hai Mujhse Aayi - Arjit",
    filePhoto: "accessories/covers/as2.jpg",
    filePath: "accessories/music/Milne Hai Mujhse Aayi.mp3",
  },

  {
    songName: "Tu Jo Mila - KK",
    filePhoto: "accessories/covers/as3.jpg",
    filePath: "accessories/music/Tu Jo Mila - KK.mp3",
  },

  {
    songName: "Zindagi Do Pal Ki - KK",
    filePhoto: "accessories/covers/am1.jpg",
    filePath: "accessories/music/Zindagi Do Pal Ki - KK.mp3",
  },

  {
    songName: "Labon Ko - KK",
    filePhoto: "accessories/covers/am1.jpg",
    filePath: "accessories/music/Labon Ko - KK.mp3",
  },
];
//Initialize the variables
let songIndex = 0;
let audioElement = new Audio(array[songIndex].filePath);
let play_Pause_Main_Button = document.getElementById("play_pause_button");
let progressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let forward = document.getElementById("forward");
let backward = document.getElementById("backward");
let songItems = Array.from(document.getElementsByClassName("song-Item"));

let mini_Plays = Array.from(document.getElementsByClassName("mini-play"));
// audioElement.play();

// console.log(audioElement);

// Handle the play- pause Button
play_Pause_Main_Button.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    play_Pause_Main_Button.classList.remove("fa-play-circle");
    play_Pause_Main_Button.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    play_Pause_Main_Button.classList.remove("fa-pause-circle");
    play_Pause_Main_Button.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

//Update the Seekbar
audioElement.addEventListener("timeupdate", () => {
  let currentTime = audioElement.currentTime;
  let duration = audioElement.duration;

  let percent_Progress = parseInt((currentTime / duration) * 100);
  // console.log(percent_Progress);
  progressBar.value = percent_Progress;
});

progressBar.addEventListener("change", () => {
  let duration = audioElement.duration;
  let percentValue = progressBar.value;
  let audioTime = (percentValue * duration) / 100;

  audioElement.currentTime = audioTime;
});

forward.addEventListener("click", () => {
  if (songIndex != array.length - 1) {
    audioElement.pause();
    progressBar.value = "0";
    songIndex += 1;
    audioElement = new Audio(array[songIndex].filePath);
    audioElement.play();
  }
});

backward.addEventListener("click", () => {
  if (songIndex > 0) {
    audioElement.pause();
    progressBar.value = "0";
    songIndex -= 1;
    audioElement = new Audio(array[songIndex].filePath);
    audioElement.play();
  }
});

// console.log(mini_Plays);
songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = array[i].filePhoto;
  element.getElementsByClassName("songName")[0].innerHTML = array[i].songName;
  
});

const makeAllPause = ()=>{
    mini_Plays.forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
}

mini_Plays.forEach((element) => {
    element.addEventListener('click', (e)=>{
        // console.log(e);
        makeAllPause();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
    });
});