import React from "react";
import { View, Text, Button } from "react-native";
import { StyleSheet, Image } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.wellcome}>Wellcome to One-IT Day</Text>
      <Image style={styles.cali} source={require("../assets/Cali2.png")} />
      <View style={styles.buttons}>
        <Button title="Info" onPress={() => navigation.navigate("Info")} />
        <Button title="Agenda" onPress={() => navigation.navigate("Agenda")} />
        <Button title="Game" onPress={() => navigation.navigate("Game")} />
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000066",
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    flex: 1,
    backgroundColor: "#000066",
    marginTop: 0,
    width: "50%",
    rowGap: 10,
  },
  cali: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginTop: 70,
    marginBottom: 1,
  },
  wellcome: {
    marginTop: 50,
    fontSize: 25,
    color: "white",
  },
});
