import React from "react";
import { View, StyleSheet, Text } from "react-native";

const BodyText = ({children,style}) => {
  return (
    <Text style={{...styles.body,...style}}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  body:{
    fontFamily:'open-sans-bold'
  }
});

export default BodyText;
