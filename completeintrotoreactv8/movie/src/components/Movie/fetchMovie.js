const fetchMovie = async ({queryKey}) => {

  const id = queryKey[1];

  //eslint-disable-next-line
  const apiKey = import.meta.env.VITE_API_KEY
  const apiRes = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
  );

  return apiRes.json()
};

export default fetchMovie;
