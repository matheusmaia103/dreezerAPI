
let musics = [];
let data= [];
let resposta = [];
result = document.querySelector('#result')

const searchInput = document.querySelector('#inputSong');
const buttonInput = document.querySelector('#btnSong');

document.addEventListener('click', function(e){
    if(e.target == buttonInput) search()
})



function search(){
    console.warn('iniciando busca');
    let data = searchInput.value;
    result.innerHTML = 'Buscando'

    
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

            musics.forEach(music => {
                result.innerHTML += `
                
                <div class="music">
                    <div class="album"><img src="${music.album.cover_small}"></div>
                        <div class="title">
                        ${music.title}
                        </div>
                        <div class="audio">
                        <audio src="${music.preview}" type="audio/mp3">
                        </div>
                    </div>
        
                </div>
        
                `
            });
        })
    })


}
