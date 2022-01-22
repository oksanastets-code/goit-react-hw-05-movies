const API_KEY = 'bffba07cef2d165abd193feceb46d279';
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function FetchTrendingFilms() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
  );
  // https://api.themoviedb.org/3/trending/movie/day?api_key=bffba07cef2d165abd193feceb46d279
}

export function FetchFilmsDetails(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  );
  // https://api.themoviedb.org/3/movie/{movie_id}?api_key=bffba07cef2d165abd193feceb46d279&language=en-US
}
export function FetchSearchingFilms() {
  return fetchWithErrorHandling(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&include_adult=false`,
  );
  // https://api.themoviedb.org/3/search/movie?api_key=bffba07cef2d165abd193feceb46d279&language=en-US&page=1&include_adult=false
}

export function FetchFilmsCredits() {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/{movie_id}/credits?api_key=${API_KEY}`,
  );
  // https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=bffba07cef2d165abd193feceb46d279&language=en-US
}

export function FetchFilmsReviews() {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/{movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  );
  // https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=bffba07cef2d165abd193feceb46d279&language=en-US&page=1
}
