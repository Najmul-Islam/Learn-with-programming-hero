
const form = document.getElementById('form');
const inputSong = document.getElementById('input-song');
const artistName = document.getElementById('artist-name');
const title = document.getElementById('song-title');
const lyrics = document.getElementById('lyrics');
const searchResult = document.getElementById('search-result');

// lyrics API
const baseURL = 'https://api.lyrics.ovh';

searchSongs = () => {
    fetch(`${baseURL}/suggest/${inputSong.value}`)
        .then(response => response.json())
        .then(data => {
            singleSong(data);
        })
        .catch(error => console.log(error))
};

function singleSong(data) {
    let song = data.data;
    searchResult.innerHTML = song.slice(0, 10).map(res => {
        return `<div class="single-result row align-items-center my-3 p-3">
        <div class="col-md-9">
            <h3 class="lyrics-name">${res.title}</h3>
            <p class="author lead">Album by <span>${res.artist.name}</span></p>
        </div>
        <div class="col-md-3 text-md-right text-center">
            <button class="btn btn-success" data-artist="${res.artist.name}" data-songtitle="${res.title}">Get Lyrics</button>
        </div>
    </div>`
    }).join('')
}

// get lyrics

getLyrics = (artist, songTitle) => {
    fetch('' + baseURL + '/v1/' + artist + '/' + songTitle + '/')
        .then(res => res.json())
        .then(data => {
            lyrics.innerHTML = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');
            artistName.innerHTML = artist + " - ";
            title.innerHTML = songTitle;
        })
        .catch(error => console.log(error));
}

form.addEventListener('submit', e => {
    e.preventDefault();
    searchSongs();
    lyrics.innerHTML = "";
    artistName.innerHTML = "";
    title.innerHTML = "";
});

searchResult.addEventListener('click', event => {
    const clickedElement = event.target;
    if (clickedElement.tagName === "BUTTON") {
        const artist = clickedElement.getAttribute('data-artist');
        const title = clickedElement.getAttribute('data-songtitle');

        getLyrics(artist, title);
    }
})