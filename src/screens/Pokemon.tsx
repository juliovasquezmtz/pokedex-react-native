import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/Navigator';
import {FadeInImage} from '../components/FadeInImage';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {usePokemon} from '../hooks/usePokemon';
import {PokemonInfo} from '../components/PokemonInfo';

interface Props extends StackScreenProps<RootStackParams, 'Pokemon'> {}

export const Pokemon = ({navigation, route}: Props) => {
  const windowWidth = Dimensions.get('window').width;
  const {singlePokemon, color, picture} = route.params;
  const {id, name} = singlePokemon;
  const Capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const {top} = useSafeAreaInsets();

  const {isLoading, pokemon} = usePokemon(id);
  const pokemonDetails = pokemon;
  console.log('Pokemon--->', isLoading, pokemonDetails);

  return (
    <View style={{flex:1}}>
      {/*Header */}
      <View style={{
        alignItems: 'center',
        backgroundColor: color,
        borderBottomLeftRadius: 180,
        borderBottomRightRadius: 180,
        // borderTopRightRadius: 100,
        top: top - 50,
        height: 250,
        width: windowWidth,
        zIndex: 99,
      }}>
        <TouchableOpacity onPress={() => navigation.pop()} activeOpacity={0.7}>
          <Image
            source={require('../assets/arrow_poke.png')}
            style={{
              height: 35,
              width: 35,
              position: 'absolute',
              left: -185,
              opacity: 0.7,
              top: 50,
            }}
        />
        </TouchableOpacity>
        <Text style={{
          color: 'white',
          fontSize: 22,
          textAlign: 'right',
          textShadowColor: 'black',
          textShadowRadius: 3,
          textShadowOffset: {
            height: 3,
            width: 3,
          },
          left: 50,
          marginTop: 50,
          position: 'absolute',
          width: 70,
          paddingRight: 4,
        }}>
          {'# ' + id}
        </Text>
        <FadeInImage
          uri={picture}
          style={{
            ...stylesCardView.fadeImage,
          }}
        />
        <Text style={{
          color: 'white',
          fontSize: 22,
          marginTop: 70,
          textShadowColor: 'black',
          textShadowRadius: 4,
          textShadowOffset: {
            height: 4,
            width: 4,
          },
        }}>
          {Capitalize(name)}
        </Text>
      <Image
          source={require('../assets/open-pokeball.png')}
          style={{
            height: 200,
            width: 200,
            position: 'absolute',
            //right: -1,
            top: 45,
            opacity: 0.5,
            zIndex: -999,
          }}
        />
      </View>
      {/* Loading and Details*/}
      {isLoading ? (
        <View style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <ActivityIndicator
            style={{height: 300}}
            size={50}
            color={color}></ActivityIndicator>
        </View>
      ) : (
        <PokemonInfo pokemon={pokemonDetails}/>
      )}
    </View>
  );
};

const stylesCardView = StyleSheet.create({
  fadeImage: {
    top: 30,
    height: 107,
    width: 107,
  },
});
