import fetchData from "./data.js";

const button = document.getElementById("btnBuscar");
const input = document.getElementById("inputBuscar");

const searchFunction = async ({ value }) => {
  const films = await fetchData();
  value = value.toLowerCase()
  let listOfFilms = [];
   films?.forEach((film) => {
    if (
      film.title.length > 0 && film?.title?.toLowerCase().includes(value) ||
      film?.tagline?.toLowerCase().includes(value) ||
      film?.overview?.toLowerCase().includes(value)
    ) {

      return listOfFilms.push(film);
    } else if (film?.genres) {
      console.log("fewffdsdsaf");
      film.genres.forEach((genre) => {
        if (genre?.name?.toLowerCase().includes(value)) {
          console.log("genres", film);
          return listOfFilms.push(film);
        }
        return;
      });
    }
    return;
  });

  return listOfFilms;
};

console.log(await searchFunction({value:"Rings"}))
