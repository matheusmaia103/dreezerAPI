
let musics = [];
let data= [];
let resposta = [];
result = document.querySelector('#result')

const searchInput = document.querySelector('#inputSong');
const buttonInput = document.querySelector('#btnSong');

document.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == buttonInput || e.target.parentElement == buttonInput || e.target.parentElement.parentElement == buttonInput) search()
})



function search(){
    console.warn('iniciando busca');
    let data = searchInput.value;
    result.classList.add("aligned");
    result.innerHTML = '<div class="load"></div>'

    
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
            console.log(resposta);
            console.log(musics);
            
            return musics
        })
        .then(musics => {
            result.innerHTML = '';
            result.classList.remove("aligned");


            musics.forEach(music => {

                
                result.innerHTML += `
                
                <div class="music">
                    <div class="album">
                        <img src="${music.album.cover_medium}">
                            <div class="title">
                               ${music.title}  <div class="artist"> by ${music.artist.name}</div>
                            </div>
                    </div>
                        <div class="audio">
                            <audio id="${music.id}" src="${music.preview}">
                                Your browser does not support the audio element.
                            </audio>
                            <button onClick="play(${music.id})">
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
    const findAudio = `${musica}`
    const audio = document.getElementById(findAudio);
    if (audio.classList != 'playing' ) {
        audio.classList.add("playing")
        audio.play()
    } else {
        audio.pause()
    }
    console.log(audio);
}