import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

function GameScreen() {
  return (
    <View style={styles.backround}>
      <Text style={styles.infotext}>Game Screen</Text>
      <Image style={styles.cali} source={require("../assets/Cali.png")} />
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  backround: {
    flex: 1,
    backgroundColor: "#000066",
  },
  infotext: {
    color: "white",
  },
  cali: {
    width: 120,
    height: 120,
    marginTop: 10,
    marginBottom: 50,
    marginLeft: 280,
  },
});
