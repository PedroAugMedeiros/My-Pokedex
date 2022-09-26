export const api = (start: number, end: number) => {

  const paginationInfo = `https://pokeapi.co/api/v2/pokemon/?offset=${start}&limit=${end}`

  return paginationInfo
}
