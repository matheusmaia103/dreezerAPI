
let musics = [];
let data= [];
let resposta = [];
result = document.querySelector('#result');
let audios = [];

const searchInput = document.querySelector('#inputSong');
const buttonInput = document.querySelector('#btnSong');

document.addEventListener('click', function(e){
    if(e.target == buttonInput) search()
})



function search(){
    document.querySelector('form').classList.remove("formDown");
    searchInput.blur();
    setTimeout( function(){
        result.classList.add("aligned");
        result.innerHTML = '<div class="load"></div>'
    }
    ,100);
    let data = searchInput.value;
    
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${data}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "1c6295e4f7msh302e5d924c95024p1ddbdbjsn561387dbd7d1",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
    })
    .then(response => {
        response.json()
        .then(response => {
            resposta = response;
            musics = resposta.data;
            
            
            return musics
        })
        .then(musics => {
            result.innerHTML = '';
            searchInput.value = '';
            result.classList.remove("aligned");

            
            musics.forEach(music => {

                
                result.innerHTML += `
                
                <div class="music" id="msc${music.id}">
                    <div class="album">
                        <img src="${music.album.cover_medium}">
                            <div class="title">
                               ${music.title}  <div class="artist">${music.artist.name}</div>
                            </div>
                    </div>
                        <div class="audio">
                            <audio id="${music.id}" src="${music.preview}">
                                Your browser does not support the audio element.
                            </audio>
                            <button id="btn${music.id}" onClick="play(${music.id})">
                                <i class=" fas fa-solid fa-play"></i>
                            </button>
                        </div>
                    </div>
        
                </div>
        
                `
                
            });


            
        })
    })


}
function play(musica){

    
    audios = document.querySelectorAll('audio');
    const msc = document.getElementById(`msc${musica}`)
    const btn = document.getElementById(`btn${musica}`)
    const findAudio = `${musica}`
    const audio = document.getElementById(findAudio);
    if (audio.classList != 'playing' ) {
        audio.classList.add("playing")
        btn.innerHTML = `
        <i class="fas fa-pause"></i>
        `
        audio.play()
        msc.classList.add("musicPlaying")
        audio.addEventListener('ended', function(){
            btn.innerHTML = `
        <i class="fas fa-play"></i>
        `

        audio.classList.remove("playing")
        msc.classList.remove("musicPlaying")
        audio.pause()
        })
    } else {
        btn.innerHTML = `
        <i class="fas fa-play"></i>
        `
        audio.classList.remove("playing")
        msc.classList.remove("musicPlaying")
        audio.pause()
    }
}