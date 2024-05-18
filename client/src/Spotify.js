const spotifyAuthConfig = {
  authEndpoint: "https://accounts.spotify.com/authorize",
  redirectUri: "http://localhost:3000/",
  clientId: "de45e40083c44d2181796cf48f0f11ac",
  scopes: [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "user-read-private",
  ],
};

export const EndPointPlaylist = ` https://api.spotify.com/v1/users/`

export function getTokenFromUrl() {
  const hash = window.location.hash.substring(1).split("&");
  const token = {};

  hash.forEach((item) => {
    const [key, value] = item.split("=");
    token[key] = decodeURIComponent(value);
  });

  return token;
}


export const loginUrl = `${spotifyAuthConfig.authEndpoint}?client_id=${spotifyAuthConfig.clientId}&redirect_uri=${spotifyAuthConfig.redirectUri}&scope=${spotifyAuthConfig.scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;


export const userID = async (token) => {
  const response = await fetch('https://api.spotify.com/v1/me', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  const data = await response.json();
  return data.id;
};
