// Reproductor de música sencillo
const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const songTitle = document.getElementById('song-title');
const cover = document.getElementById('cover');

// Lista de canciones (puedes agregar más)
const songs = [
    {
        title: 'Dynamite',
        coverSrc: 'assets/images/dynamite.jpg',
        audioSrc: 'assets/music/dynamite.mp3'
    },
    {
        title: 'Butter',
        coverSrc: 'assets/images/butter.jpg',
        audioSrc: 'assets/music/butter.mp3'
    }
];

let currentSongIndex = 0;

// Cargar canción
function loadSong(song) {
    songTitle.textContent = song.title;
    cover.src = song.coverSrc;
    audio.src = song.audioSrc;
}

// Reproducir canción
function playSong() {
    audio.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
}

// Pausar canción
function pauseSong() {
    audio.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
}

// Cambiar canción
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
}

document.getElementById('play').addEventListener('click', function() {
    audio.play();
});

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
}

// Event listeners
playBtn.addEventListener('click', () => {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
});

nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);

// Cargar primera canción
loadSong(songs[currentSongIndex]);