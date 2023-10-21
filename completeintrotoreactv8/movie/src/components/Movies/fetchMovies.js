const fetchMovies = async () => {
  //eslint-disable-next-line
  const apiKey = import.meta.env.VITE_API_KEY
  const apiRes = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
  );

  return apiRes.json()
};

export default fetchMovies;
