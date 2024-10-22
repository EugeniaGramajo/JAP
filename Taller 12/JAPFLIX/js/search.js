import fetchData from "./data.js";

export const searchFunction = async ({ value }) => {
  const films = await fetchData();
  value = value.toLowerCase();
  let listOfFilms = [];
  films?.forEach((film) => {
    if (
      (film.title.length > 0 && film?.title?.toLowerCase().includes(value)) ||
      film?.tagline?.toLowerCase().includes(value) ||
      film?.overview?.toLowerCase().includes(value)
    ) {
      return listOfFilms.push(film);
    } else if (film?.genres) {
      film.genres.forEach((genre) => {
        if (genre?.name?.toLowerCase().includes(value)) {
          return listOfFilms.push(film);
        }
        return;
      });
    }
    return;
  });

  return listOfFilms;
};
