import {useState, useEffect} from 'react';
import {PokemonDetails} from '../interfaces/Interfaces';
import {pokemonApi} from '../api/pokemonAPI';

export const usePokemon = (id: string) => {

  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState<PokemonDetails>({} as PokemonDetails);

  const loadPokemon = async () => {
    const resp = await pokemonApi.get<PokemonDetails>(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );
    setPokemon(resp.data);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPokemon();
  }, []);

  return {
    isLoading,
    pokemon,
  };
};
