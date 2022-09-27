export const pokeApi = (start: number, end: number) => {

  const paginationInfo = `https://pokeapi.co/api/v2/pokemon/?offset=${start}&limit=${end}`

  return paginationInfo
}

export const imageApi = (id: number) => {
  const imagesApi = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;

  return imagesApi;

}
