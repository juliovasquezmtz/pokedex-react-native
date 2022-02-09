import {useRef, useEffect, useState} from 'react';
import {pokemonApi} from '../api/pokemonAPI';
import {PagesPokemon, SinglePokemon} from '../interfaces/interfaces';

export const pokemonPages = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [singlePokemonList, setSinglePokemonList] = useState<SinglePokemon>([]);
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

  const loadPokemons = async () => {
    // Loading activated
    setIsLoading(true);
    const resp = await pokemonApi.get<PagesPokemon>(nextPageUrl.current);
    nextPageUrl.current = resp.data.next;
    mapPokemonList(resp.data.results);
    // console.log(resp.data);
  };

  const mapPokemonList = ( pokemonList: Result[] ) => {

    const newPokemonList: SinglePokemon[]  = pokemonList.map(({name, url}) => {

      const splitURL = url.split('/');
      const idPokemon = splitURL[splitURL.length - 2];
      const picturePokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idPokemon}.png`;
      // console.log({picturePokemon});
      return {
        name,
        id: idPokemon,
        picture: picturePokemon,
      };
    });

    setSinglePokemonList([...singlePokemonList, ...newPokemonList]);
    // Loading desactivated
    setIsLoading(false);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return {
    isLoading,
    singlePokemonList,
    loadPokemons,
  };
};
