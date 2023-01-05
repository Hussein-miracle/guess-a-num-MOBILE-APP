import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import BodyText from "../components/BodyText";
import colors from "../constants/colors";

const StartGameScreen = ({onStartGame}) => {
  const [number, setNumber] = useState();
  const [selectedNumber, setSelectedNumber] = useState();
  const [confirm, setConfirm] = useState(false);

  const handleNumInput = (value) => {
    setNumber(value.replace(/[^0-9]/g, ""));
  };

  const handleReset = () => {
    console.log("reseting");
    setNumber("");
    setConfirm(!true);
  };
  const handleConfirm = () => {
    const chosen = parseInt(number);
    if (isNaN(chosen) || chosen <= 0 || chosen > 99) {
      Alert.alert(
        "Invalid Number Input",
        "Please input a valid number btw 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: handleReset }]
      );
      return;
    }

    console.log("confirming");

    setConfirm(true);
    setSelectedNumber(chosen);
    setNumber("");
  };

  const handleStart = () => {
    onStartGame(selectedNumber);
  }

  let confirmedOutput;

  if (confirm) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text style={styles.summaryText}>You Selected</Text>
        <NumberContainer>
          {selectedNumber}
        </NumberContainer>

        <Button title="START GAME" onPress={handleStart} />
      </Card>
    );
  }

  const handleDismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
      <View style={styles.screen}>
        <Text style={styles.title}>The Game Start Screen !</Text>

        <Card style={styles.inputContainer}>
          <BodyText>Select A Number</BodyText>
          <Input
            onChangeText={handleNumInput}
            value={number}
            style={styles.input}
            keyboardType="number-pad"
            autoCorrect={false}
            autoCapitalize={"none"}
            maxLength={2}
          />

          <View style={styles.btnContainer}>
            <View style={styles.button}>
              <Button
                title="RESET"
                onPress={handleReset}
                color={colors.accent}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={handleConfirm}
                color={colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily:'open-sans-bold',
    // ? NOTE: YOU CAN'T SET WEIGHTS FOR CUSTOM FONT WHEN USING EXPO BUT USING PURE-RN SUPPORTS IT.


  },
  button: {
    width: 100,
    borderRadius: 9,
    overflow: "hidden",
  },
  input: {
    width: 100,
    borderRadius: 6,
    textAlign: "center",
  },
  summaryContainer: {
    marginTop: 20,
    borderRadius: 6,
    backgroundColor: colors.dimblack,
    width: "60%",
  },
  summaryText: {
    color: colors.white,
    textAlign: "center",
  },
});

export default StartGameScreen;
