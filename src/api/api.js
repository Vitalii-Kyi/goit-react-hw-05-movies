import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] =
  'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjE5MjMzNTAxZGIzMzJkYzJmMzkyZTgzOGNkNGZmOSIsInN1YiI6IjY1NGEwMmFlNDM0OTRmMDEzYjdkODc0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._3qliPvEcKUAHnkE-rnoynj0SIG5oxbGc4FKfNPE-VU';

export const fetchTrendingMovies = async () => {
  const response = await axios.get('/trending/movie/day');
  return response.data;
};

export const fetchMoviesById = async id => {
  const response = await axios.get(`/movie/${id}`);
  return response.data;
};

export const fetchSearchMovies = async (page, query) => {
  const response = await axios.get(`/search/movie`, {
    params: {
      include_adult: false,
      query: query,
      page: page,
    },
  });
  return response.data;
};

export const fetchCastMovie = async id => {
  const response = await axios.get(`/movie/${id}/credits`);
  return response.data;
};

export const fetchReviewsMovie = async id => {
  const response = await axios.get(`/movie/${id}/reviews`);
  return response.data;
};
