import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  pokebolaBG: {
    opacity: 0.7,
    position: 'absolute',
    left: -30,
    top: -43,
    height: 230,
    width: 230,
  },
  titleHome: {
    color: '#D60909',
    fontSize: 42,
    fontWeight: 'bold',
    textShadowColor: 'gray',
    textShadowRadius: 2,
    textShadowOffset: {
      height: 4,
      width: 4,
    },
    marginHorizontal: windowWidth - 190,
    opacity: 0.7,
    webkitTextStroke: '5px black',
    width: 175,
  },
});
