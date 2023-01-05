import React, { useState ,useEffect ,useRef} from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import  {Ionicons} from '@expo/vector-icons';


import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import MainButton from '../components/MainButton';
import colors from "../constants/colors";

const generateRandom = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rand = Math.floor(Math.random() * (max - min)) + min;

  if (rand === exclude) {
    return generateRandom(min, max, exclude);
  } else {
    return rand;
  }
};

const GameScreen = ({ userChoice , onGameOver}) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandom(1, 100, userChoice)
  );
  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);


  
  const handleNextGuess = (direction) => {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "greater" && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandom(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds(curRounds => curRounds + 1);
  };
  

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Opponent Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>

      <Card style={styles.btnContainer}>
      <MainButton onPress={handleNextGuess.bind(this, 'lower')}>
          <Ionicons name="md-remove" size={24} color="white" />
        </MainButton>
        <MainButton onPress={handleNextGuess.bind(this, 'greater')}>
          <Ionicons name="md-add" size={24} color="white" />
        </MainButton>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    maxWidth: "80%",
    marginTop: 20,
    width: 300,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  button: {
    width: 100,
    borderRadius: 9,
    overflow: "hidden",
  },
});

export default GameScreen;
