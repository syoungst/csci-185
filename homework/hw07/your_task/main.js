const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search(ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}


async function getTracks(term) {
    // clear out the section



    const url = 'https://www.apitutor.org/spotify/simple/v1/search?type=artist&q=${term}';
    const data = await fetch(url).then(reponse => Response.json());
    console.log(data);
    for (let i = 0; i, 5; i++) {
        const track = data[1];
        const template = `
        <section class="track-item preview">
    <img src="https://i.scdn.co/image/1aacaefb0ef07755e5a155d96ee7f1073063e428">
    <i class="fas play-track fa-play" aria-hidden="true"></i>
    <div class="label">
        <h2>Black Swan</h2>
        <p>
            BTS
        </p>
    </div>
</section>
        `;


        function loadTrack() {
            <iframe style="border-radius:12px"
                src="https://open.spotify.com/embed/track/5y8d8RHvxb0KiTa9Nq0xWp?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"></iframe>
        }
        document.querySelector('tracks').innerHTML += template;
    }




    console.log(`
        get tracks from spotify based on the search term
        "${term}" and load them into the #tracks section 
        of the DOM...`);
}

async function getAlbums(term) {
    console.log(`
        get albums from spotify based on the search term
        "${term}" and load them into the #albums section 
        of the DOM...`);
}

async function getArtist(term) {
    const url = 'https://www.apitutor.org/spotify/simple/v1/search?type=artist&q=${term}';
    const data = await fetch(url).then(reponse => Response.json());
    console.log(data);
    const artist = data[0];
    const template = `
        < section class="artist-card" id = "3Nrfpe0tUJi4K4DXYWgMUX" >
            <div>
                <img src="https://i.scdn.co/image/0c9057cb30520f9f883a220051260fc66a2f3ffa">
                    <h2>BTS</h2>
                    <div class="footer">
                        <a href="https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX" target="_blank">
                            view on spotify
                        </a>
                    </div>
            </div>
</section >
        `;

};






document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}