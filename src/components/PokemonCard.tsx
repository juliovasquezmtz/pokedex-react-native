import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SinglePokemon} from '../interfaces/Interfaces';
import {FadeInImage} from '../components/FadeInImage';
import ImageColors from 'react-native-image-colors';
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

interface PropsPokemon {
  pokemon: SinglePokemon;
}

export const PokemonCard = ({pokemon}: PropsPokemon) => {

  const [bgColorCard, setBgColorCard] = useState('gray');

  const isMounted = useRef(true);

  const navigation = useNavigation();

  const Capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  useEffect(() => {
    ImageColors.getColors(pokemon.picture, {fallback: 'gray'}).then(colors => {
      if (!isMounted.current) return;
      colors.platform === 'android'
        ? setBgColorCard(colors.dominant || 'gray')
        : setBgColorCard(colors.background || 'gray');
    });
    return () => {
      isMounted.current = false;
    };
  }, []);
  const {top} = useSafeAreaInsets();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={
        () => navigation.navigate('Pokemon', {
          singlePokemon: pokemon,
          color: bgColorCard,
          picture: pokemon.picture,
        })}
      >
      <View style={{
          ...stylesCardView.cardContainer,
          backgroundColor: bgColorCard,
      }}>
        <FadeInImage
          uri={pokemon.picture}
          style={{
            ...stylesCardView.fadeImage,
          }}
        />
        <View style={{
            ...stylesCardView.viewID,
          }}>
          <Text style={{
              ...stylesCardView.cardId,
            }}>
            {'# ' + pokemon.id}
          </Text>
        </View>
        <View style={{
            ...stylesCardView.viewText,
          }}>
          <Text style={{
              ...stylesCardView.cardText,
            }}>
            {Capitalize(pokemon.name)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const stylesCardView = StyleSheet.create({
  fadeImage: {
    right: -5,
    top: -5,
    position: 'absolute',
    height: 107,
    width: 107,
  },
  cardContainer: {
    marginHorizontal: 10,
    backgroundColor: 'gray',
    height: 120,
    width: windowWidth * 0.44,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  viewID: {
    // backgroundColor: 'red',
    width: 80,
    top: 28,
    left: 13,
    overflow: 'hidden',
    position: 'absolute',
  },
  cardId: {
    color: 'white',
    fontSize: 21,
    textShadowColor: 'black',
    textShadowRadius: 3,
    textShadowOffset: {
      height: 3,
      width: 3,
    },
    fontWeight: 'bold',
  },
  viewText: {
    // backgroundColor: 'red',
    width: 160,
    bottom: 19,
    left: 10,
    overflow: 'hidden',
    position: 'absolute',
  },
  cardText: {
    color: 'white',
    fontSize: 18,
    textShadowColor: 'black',
    textShadowRadius: 2,
    textShadowOffset: {
      height: 2,
      width: 2,
    },
    fontWeight: 'bold',
  },
});
