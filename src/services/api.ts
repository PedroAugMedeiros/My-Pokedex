export const pokeApi = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10000`;



export const imageApi = (id: number) => {
  const imagesApi = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;

  return imagesApi;

}
