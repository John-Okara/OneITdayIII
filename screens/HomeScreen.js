import React from "react";
import { View, Text, Button } from "react-native";
import { StyleSheet, Image } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.wellcome}>Wellcome to One-IT Day</Text>
      <Image style={styles.cali} source={require("../assets/Cali.png")} />
      <View style={styles.buttons}>
        <Button title="Info" onPress={() => navigation.navigate("Info")} />
        <Button title="Game" onPress={() => navigation.navigate("Game")} />
        <Button title="Agenda" onPress={() => navigation.navigate("Agenda")} />
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
    marginTop: 50,
    width: "50%",
    rowGap: 10,
  },
  cali: {
    width: 120,
    height: 120,
    marginTop: 110,
    marginBottom: 50,
    marginLeft: 200,
  },
  wellcome: {
    marginTop: 50,
    fontSize: 25,
    color: "white",
  },
});
