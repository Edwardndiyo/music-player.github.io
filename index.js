let songs = [
    {
        title: "Olorun",
        artist: "Asake",
        file: "/01 Asake - Olorun (NetNaija.com).mp3",
        image: "XV5KvEkPN9m.jpg"
    },
    {
        title: "Awodi",
        artist: "Asake",
        file: "/02 Asake - Awodi (NetNaija.com).mp3",
        image: "XV5KvEkPN9m.jpg"
    },
    {
        title: "Sunshine",
        artist: "Asake",
        file: "/04 Asake - Sunshine (NetNaija.com).mp3",
        image: "XV5KvEkPN9m.jpg"
    },
    {
        title: "Mogbe",
        artist: "Asake",
        file: "/05 Asake - Mogbe (NetNaija.com).mp3",
        image: "XV5KvEkPN9m.jpg"
    },
    {
        title: "Basquiat",
        artist: "Asake",
        file: "/06 Asake - Basquiat (NetNaija.com).mp3",
        image: "XV5KvEkPN9m.jpg"
    },
    {
        title: "Remember",
        artist: "Asake",
        file: "/11 Asake - Remember (NetNaija.com).mp3",
        image: "XV5KvEkPN9m.jpg"
    },
    {
        title: "Great Guy",
        artist: "Asake",
        file: "/13 Asake - Great Guy (NetNaija.com).mp3",
        image: "XV5KvEkPN9m.jpg"
    },
    {
        title: "Yoga",
        artist: "Asake",
        file: "/Asake - Yoga (NetNaija.com).mp3",
        image: "XV5KvEkPN9m.jpg"
    },
    // Add more song objects as needed
];

let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let currentSongIndex = 0;

function loadSong(index) {
    let currentSong = songs[index];
    document.getElementById("song-title").textContent = currentSong.title;
    document.getElementById("song-artist").textContent = currentSong.artist;
    document.getElementById("audio-source").src = currentSong.file;
    document.getElementsByClassName("song-img")[0].src = currentSong.image;
    song.load();
}

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
};

song.addEventListener("ended", function () {
    playNextSong();
});

function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else{
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}



function playNextSong() {
  currentSongIndex++;
  if (currentSongIndex >= songs.length) {
    currentSongIndex = 0;
  }
  loadSong(currentSongIndex);
  song.play();
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
}

function playPreviousSong() {
  currentSongIndex--;
  if (currentSongIndex < 0) {
    currentSongIndex = songs.length - 1;
  }
  loadSong(currentSongIndex);
  song.play();
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
}




setInterval(()=>{
    progress.value = song.currentTime;
}, 500);

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}

loadSong(currentSongIndex);

// Event listeners for previous and next buttons
document.getElementById("previous-button").addEventListener("click", playPreviousSong);
document.getElementById("next-button").addEventListener("click", playNextSong);









// ...
// will update js and html to make a list of the songs 
// whwen the harmburger menu button is clicked, will also 
// include some music player functionalities like the repeat song and shuffle button.
// ...
