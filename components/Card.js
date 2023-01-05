import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Card = ({children,style}) => {
  return (
    <View style={{...styles.card,...style}}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card:{
    backgroundColor:'white',
    padding:20,
    borderRadius:20,
    // ? NOTE: WORKS ON IOS only.
    shadowColor:'black',
    shadowOffset:{
      width:0,
      height: 2,
    },
    shadowRadius:6,
    shadowOpacity:0.26,
    // * NOTE : WORKS ON ANDROID 5.0+ ONLY.
    elevation:5,
  }
});

export default Card;
