const spotifyAuthConfig = {
  authEndpoint: "https://accounts.spotify.com/authorize",
  redirectURI: import.meta.env.VITE_APP_SPOTIFY_REDIRECT_URI,
  clientID: import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID,
  scopes: [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ],
};

export function getTokenFromUrl() {
  
  const hash = window.location.hash.substring(1).split("&");
  const token = {};

  hash.forEach((item) => {
    const [key, value] = item.split("=");
    token[key] = decodeURIComponent(value);
  });

  return token;
}

export const loginUrl = `${spotifyAuthConfig.authEndpoint}?client_id=${spotifyAuthConfig.clientID}&redirect_uri=${spotifyAuthConfig.redirectURI}&scope=${spotifyAuthConfig.scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
