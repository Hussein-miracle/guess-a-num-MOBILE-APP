import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

import MainButton from '../components/MainButton';
import Colors from '../constants/colors';

const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      {/* ? we load local images with require */}
      <View style={styles.imageContainer}>
      <Image
          source={require('../assets/images/success.png')}
          // source={{
          //   uri:
          //     'https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg'
          // }}
          style={styles.image}
          resizeMode="cover"
        />

      </View>

      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed{' '}
          <Text style={styles.highlight}>{roundsNumber}</Text> rounds to
          guess the number{' '}
          <Text style={styles.highlight}>{userNumber}</Text>.
        </BodyText>
      </View>
      <MainButton onPress={onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height:'100%',
    borderRadius:50,
  },
  imageContainer:{
    borderRadius:160,
    borderColor:'black',
    width:320,
    height:320,
    overflow:'hidden',
    borderWidth:3,
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold'
  }
});

export default GameOverScreen;
