
let song = 'bad luck'

fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${song}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "1c6295e4f7msh302e5d924c95024p1ddbdbjsn561387dbd7d1",
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
	}
})
.then(response => {
    response = response.json()
})
.then(response =>{
    console.log(response);
})
.catch(err => {
	console.error(err);
});