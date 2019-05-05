// API/TMDBApi.js

const API_TOKEN = "6f632d7561137d144aaaba0d9e66d836";

export function getFilmsFromApiWithSearchedText (text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getImageFromAPI(name) {
    return 'https://image.tmdb.org/t/p/w200' + name
}

