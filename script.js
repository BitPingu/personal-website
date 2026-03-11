const USERNAME = "BitPingu";
const API_KEY = "9c0f6110c17ab49492000b66a4111be3";
const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&limit=1&format=json`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        const song = data["recenttracks"].track[0]
        // console.log(song)
        document.getElementById('song').innerHTML = song.name
        document.getElementById('song').setAttribute("href", song.url)
        document.getElementById('artist').innerHTML = song.artist["#text"]
        document.getElementById('listen').style.visibility = "visible"
    })
    .catch(error => console.error(error));

