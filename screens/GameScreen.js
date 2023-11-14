import React from "react";
import { View, Text, Button } from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Realm from "realm";

//get the Atlas App ID (found in Atlas Browser)
//https://realm.mongodb.com/groups/6549f6428728c1322adb3bfe/apps/6549fbf2e47b2153494e8558/deployment/environment
const app = new Realm.App({ id: "oneitatlasapp-dlthx" });

const AdventureScreen = () => {
  const [currentSceneId, setCurrentSceneId] = useState("scene1");
  const [currentScene, setCurrentScene] = useState(null);

  const getSceneData = async (sceneId) => {
    // Fetch scene data from the database based on the sceneId
    const user = await app.logIn(Realm.Credentials.anonymous());
    const mongodb = user.mongoClient("mongodb-atlas");
    const database = mongodb.db("OneITDay");
    const collection = database.collection("Adventure");

    const sceneData = await collection.findOne({ _id: sceneId });
    return sceneData;
  };

  const handleOptionSelect = async (leadsTo) => {
    const nextScene = await getSceneData(leadsTo);
    setCurrentScene(nextScene);
    setCurrentSceneId(leadsTo);
  };

  useEffect(() => {
    const initialSceneId = "scene0";
    getSceneData(initialSceneId).then((initialScene) => {
      setCurrentScene(initialScene);
    });
  }, []);

  return (
    <View>
      {currentScene && (
        <>
          <Text>{currentScene.text}</Text>
          {currentScene.options.map((option) => (
            <Button
              key={option.text}
              title={option.text}
              onPress={() => handleOptionSelect(option.leadsTo)}
            />
          ))}
        </>
      )}
    </View>
  );
};

export default AdventureScreen;
