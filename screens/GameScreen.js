import React from "react";
import { View, Text, StyleSheet } from "react-native";

function GameScreen() {
  return (
    <View style={styles.backround}>
      <Text style={styles.infotext}>Game Screen</Text>
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
});
