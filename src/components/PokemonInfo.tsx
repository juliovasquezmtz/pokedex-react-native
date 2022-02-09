import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {PokemonDetails} from '../interfaces/interfaces';
import {FadeInImage} from './FadeInImage';

interface Props {
  pokemon: PokemonDetails;
}

export const PokemonInfo = ({pokemon}: Props) => {
  const Capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <ScrollView
      style={{
        ...StyleSheet.absoluteFillObject,
        // backgroundColor: 'gray',
      }}>
      <View
        style={{
          marginHorizontal: 20,
          marginTop: 245,
        }}>
        {/* Stats */}
        <View style={styles.container}>
          <Text
            style={{
              ...styles.title,
              marginHorizontal: -20,
            }}>
            Stats:
          </Text>
          <View>
            {pokemon.stats.map((stat, i) => (
              <View key={stat.stat.name + i} style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    ...styles.regularText,
                    marginRight: 10,
                    width: 150,
                  }}
                  key={stat.stat.name}>
                  {Capitalize(stat.stat.name)}
                </Text>

                <Text
                  style={{
                    ...styles.regularText,
                    fontWeight: 'bold',
                  }}>
                  {stat.base_stat}
                </Text>
              </View>
            ))}
          </View>
        </View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 15,
          }}>
          Types:
        </Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.types.map(({type}) => (
            <Text
              style={{
                marginRight: 10,
                marginTop: 5,
                fontSize: 18,
              }}
              key={type.name}>
              {'- ' + type.name.toUpperCase()}
            </Text>
          ))}
          {/* Peso */}
          <Text
            style={{
              marginRight: 10,
              marginTop: 5,
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Weight
          </Text>
          <Text
            style={{
              marginRight: 10,
              marginTop: 5,
              fontSize: 18,
              fontWeight: 'normal',
            }}>
            {pokemon.weight} kg
          </Text>
        </View>
        {/* Habilidades */}
        <View style={styles.container}>
          <Text
            style={{
              ...styles.title,
              marginHorizontal: -20,
            }}>
            Abilities:
          </Text>
          <View style={{flexDirection: 'row'}}>
            {pokemon.abilities.map(({ability}) => (
              <Text
                style={{
                  ...styles.regularText,
                  marginRight: 10,
                }}
                key={ability.name}>
                {Capitalize(ability.name)}
              </Text>
            ))}
          </View>
        </View>
        {/* Habilidades */}
        <View style={styles.container}>
          <Text
            style={{
              ...styles.title,
              marginHorizontal: -20,
            }}>
            Moves:
          </Text>
          <View
            style={{
              flexDirection: 'column',
              flexWrap: 'wrap',
            }}>
            {pokemon.moves.map(({move}) => (
              <Text
                style={{
                  ...styles.regularText,
                  marginRight: 10,
                }}
                key={move.name}>
                {Capitalize(move.name)}
              </Text>
            ))}
          </View>
        </View>
        {/* Types */}
        <View style={styles.container}>
          <Text
            style={{
            ...styles.title,
            marginHorizontal: -20,
          }}>
            Sprites:
          </Text>
        </View>
        <ScrollView
          // style
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <FadeInImage
            uri={pokemon.sprites.front_default}
            style={styles.basicSprite}
          />

          <FadeInImage
            uri={pokemon.sprites.back_default}
            style={styles.basicSprite}
          />

          <FadeInImage
            uri={pokemon.sprites.front_shiny}
            style={styles.basicSprite}
          />

          <FadeInImage
            uri={pokemon.sprites.back_shiny}
            style={styles.basicSprite}
          />
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
  regularText: {
    fontSize: 19,
  },
  basicSprite: {
    width: 100,
    height: 100,
  },
});
