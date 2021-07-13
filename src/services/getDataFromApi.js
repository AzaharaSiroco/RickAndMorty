const getDataFromApi = () => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          species: character.species,
          status: character.status,
          image: character.image,
          origin: character.origin.name,
          episode: character.episode.length,
          location: character.location.name,
        };
      });
    });
};
export default getDataFromApi;
