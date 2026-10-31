const username = "BitPingu";

const url = `/.netlify/functions/get-tracks?user=${username}`;

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

