// console.log("Hi Everyone");

// audioElement.play();
// Array of objects containing particular KK's Music
let array = [
    {songName: "Beete Lamhe - KK", filePath: "accessories/music/BeeteLamhe.mp3"},
    {songName: "Kya Mujhe Pyar Hai - KK", filePath: "accessories/music/Kya Mujhe Pyar Hai - KK.mp3"},
    {songName: "Sach Keh Raha Hai Deewana - KK", filePath: "accessories/music/Sach Keh Raha Hai Deewana - KK.mp3"},
    {songName: "Tu Jo Mila - KK", filePath: "accessories/music/Tu Jo Mila - KK.mp3"},
    {songName: "Zindagi Do Pal Ki - KK", filePath: "accessories/music/Zindagi Do Pal Ki - KK.mp3"},
    {songName: "Labon Ko - KK", filePath: "accessories/music/Labon Ko - KK.mp3"},
];
//Initialize the variables
let songIndex = 0;
let audioElement = new Audio(array[5].filePath);
let play_Pause_Main_Button = document.getElementById("play_pause_button");
let progressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
// audioElement.play();

console.log(audioElement);

// Handle the play- pause Button
play_Pause_Main_Button.addEventListener('click', () =>{
    if(audioElement.paused || audioElement.currentTime <=0 ){
        audioElement.play();
        play_Pause_Main_Button.classList.remove("fa-play-circle");
        play_Pause_Main_Button.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        play_Pause_Main_Button.classList.remove("fa-pause-circle");
        play_Pause_Main_Button.classList.add("fa-play-circle");
        gif.style.opacity = 0;
    }
});

//Update the Seekbar
audioElement.addEventListener('timeupdate', ()=>{
    let currentTime = audioElement.currentTime;
    let duration = audioElement.duration;

    let percent_Progress = parseInt((currentTime/duration)*100);
    console.log(percent_Progress);
    progressBar.setAttribute('value', percent_Progress);
    


});


progressBar.addEventListener('change', ()=>{
    
    let duration = audioElement.duration;
    let percentValue = progressBar.value;
    let audioTime = percentValue* duration/100;

    audioElement.currentTime = audioTime;

});