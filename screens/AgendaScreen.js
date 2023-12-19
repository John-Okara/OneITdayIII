import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Realm from "realm";

//get the Atlas App ID (found in Atlas Browser)
//https://realm.mongodb.com/groups/6549f6428728c1322adb3bfe/apps/6549fbf2e47b2153494e8558/deployment/environment
const app = new Realm.App({ id: "application-0-fqyig" });

const AdventureScreen = () => {
  const [currentSceneId, setCurrentSceneId] = useState("scene1");
  const [currentScene, setCurrentScene] = useState(null);

  // Fetch scene data from the database based on the sceneId
  const getSceneData = async (sceneId) => {
    const user = await app.logIn(Realm.Credentials.anonymous());
    const mongodb = user.mongoClient("mongodb-atlas");
    const database = mongodb.db("One-ITDay");
    const collection = database.collection("Agenda");

    const sceneData = await collection.findOne({ _id: sceneId });
    return sceneData;
  };

  const handleOptionSelect = async (leadsTo) => {
    const nextScene = await getSceneData(leadsTo);
    setCurrentScene(nextScene);
    setCurrentSceneId(leadsTo);

    // Store the current scene ID in AsyncStorage
    await AsyncStorage.setItem("currentSceneId", leadsTo);
  };

  useEffect(() => {
    const initialSceneId = "scene0";
    getSceneData(initialSceneId).then((initialScene) => {
      setCurrentScene(initialScene);
    });
  }, []);

  // head = headline
  // descr = description
  // where = Room
  return (
    <View style={styles.container}>
      {currentScene && (
        <React.Fragment>
          <Text style={styles.text}>{currentScene.head}</Text>
          <Text style={styles.text}>{currentScene.descr}</Text>
          <Text style={styles.text}>{currentScene.where}</Text>
          {currentScene.options.map((option) => (
            <View key={option.text} style={styles.buttons}>
              <Button
                title={option.text}
                onPress={() => handleOptionSelect(option.leadsTo)}
              />
            </View>
          ))}
        </React.Fragment>
      )}
    </View>
  );
};

export default AdventureScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000066",
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    flex: 0,
    backgroundColor: "#000066",
    marginTop: 10,
    width: "50%",
    rowGap: 10,
  },
  cali: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginTop: -200,
    marginBottom: 1,
  },
  text: {
    marginTop: 0,
    marginBottom: 20,
    fontSize: 15,
    color: "white",
  },
  caliContatainer: {
    position: "absolute",
  },
});
