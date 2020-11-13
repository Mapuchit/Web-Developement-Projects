// the user's access token
let accessToken = '';
// my app's client id at Spotify
const clientID = '******************';
// my app's redirect URI
const redirectURI = 'http://lekvaros.surge.sh/';

// the Spotify module
const Spotify = {

    getAccessToken() {
        // regular expressions to find the token and expiry in the URL
        const regexToken = /access_token=([^&]*)/;
        const regexExpiry = /expires_in=([^&]*)/;

        // check if the user's access token is already set
        if (accessToken) {
            return;
        }
        // if it is not set yet, check the URL to see if it has just been obtained
        // window.location.href is the URL of the current page
        else if (window.location.href.match(regexToken) && window.location.href.match(regexExpiry)) {
            // set the access token value
            accessToken = window.location.href.match(regexToken)[1];
            // set a variable for expiration time
            const expiresIn = window.location.href.match(regexExpiry)[1];
            // set the access token to expire at the value for expiration time
            // it will be reset to an empty string
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            // clear the parameters from the URL, so the app doesn’t try grabbing the access token after it has expired
            window.history.pushState('Access Token', null, '/');
        }
        // if the access token variable is empty and is not in the URL
        else if (!accessToken && !window.location.href.match(regexToken)) {
            // redirect users to the Spotify authorization page to give my app access
            window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
        }
    },

    search(term) {
        // check if we have updated access token
        this.getAccessToken();
        // returns a promise that will eventually resolve to the list of tracks from the search
        // we need to add an Authorization header to the fetch request
        return fetch(
            `https://api.spotify.com/v1/search?type=track&q=${term}`,
            {headers: {Authorization: `Bearer ${accessToken}`}}
        )
        // convert the returned response to JSON
        .then(response => {
            return response.json();
        })
        // map the converted JSON to an array of tracks
        .then(jsonResponse => {
            // if the JSON does not contain any tracks, return an empty array
            if (!jsonResponse.tracks) {
                return [];
            }
            // the mapped array should contain a list of track objects
            return jsonResponse.tracks.items.map(track => {
                return {
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    uri: track.uri
                };  
            });
        });
    },

    savePlaylist(playlistName, trackURIs) {
        // check if the parameters are not empty
        if (!playlistName || !trackURIs) {
            return;
        }
        let token = accessToken;
        let userID = '';
        let playlistID = '';
        // a request that returns the user’s Spotify username
        return fetch('https://api.spotify.com/v1/me', 
            {headers: {Authorization: `Bearer ${token}`}})
        // convert the response to JSON
        .then(response => {
            return response.json();
        })
        // save the response id parameter to the user’s ID variable
        .then(jsonResponse => {
            userID = jsonResponse.id;
            // use the returned user ID to make a POST request that creates a new playlist in the user’s account and returns a playlist ID
            // set the playlist name to the value passed into the method
            return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`,
                {
                headers: 
                    {Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'},
                method: 'POST',
                body: JSON.stringify({name: playlistName})
                }
            // convert the response to JSON
            )
            .then(response => {
                return response.json();
            })
            // save the response id parameter to a variable
            .then(jsonResponse => {
                playlistID = jsonResponse.id;
            // add tracks to the newly created playlist
            return fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`,
                {
                headers: 
                    {Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'},
                method: 'POST',
                body: JSON.stringify({uris: trackURIs})
                }
            )
            // convert the response to JSON
            .then(response => {
                return response.json();
            });
        });
    });}
};

export default Spotify;