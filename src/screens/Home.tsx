import React from 'react';
import {Image, Text, FlatList, ActivityIndicator, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {pokemonPages} from '../hooks/pokemonPages';
import {styles} from '../theme/stylesTheme';
import {PokemonCard} from '../components/PokemonCard';

export const Home = () => {

  const {top} = useSafeAreaInsets();
  const {singlePokemonList, loadPokemons} = pokemonPages();

  console.log(singlePokemonList);
  return (
    <>
      <Image
        source={require('../assets/pokebola_color.png')}
        style={styles.pokebolaBG}
      />
       <Text
        style={{
          ...styles.titleHome,
          top: top,
          right: -6,
          marginBottom: top + 10,
        }}>
        Pokedex
      </Text>
      {/* Center Cards Elements */}
      <View style={{alignItems: 'center'}}>
        {/* How to use FlatList => Data, KeyExtractor */}
        <FlatList
          data={singlePokemonList}
          keyExtractor={pokemon => pokemon.id}
          //Type Columns
          numColumns={2}
          // Show Scrolling
          showsVerticalScrollIndicator={false}
          //Render Item (Pokmon)
          renderItem={({item}) => <PokemonCard pokemon={item} />}
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.2}
          ListFooterComponent={(
            <ActivityIndicator
              style={{height: 100}}
              size={20}
              color='gray'
            />
          )}
        />
      </View>
    </>
  );
};
