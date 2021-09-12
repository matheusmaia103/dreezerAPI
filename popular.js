let music = [];
const buscar = "khalid";

fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${buscar}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "1c6295e4f7msh302e5d924c95024p1ddbdbjsn561387dbd7d1",
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
	}
})
.then(response => {
    response = response.json()
    .then(response => {
        console.log('response: ', response.data);
        
        return response
    })
    return response

})
.then(response => {
    music = response.data;
    console.log('music: ', response.data);


    return music
})
.then(music => {
    searchInput.value = '';
    result.classList.remove("aligned");
    console.log(music + ' music');

    
    music.forEach(music => {

        
        result.innerHTML += `
        
        <div class="music" id="msc${music.id}">
            <div class="album">
                <img src="${music.album.cover_medium}">
                    <div class="title">
                       ${music.title}  <div class="artist"> by ${music.artist.name}</div>
                    </div>
            </div>
                <div class="audio">
                    <audio id="${music.id}" preload src="${music.preview}">
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
