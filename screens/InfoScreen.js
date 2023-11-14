// InfoScreen.js
import React from "react";
import { View, Text, Button } from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Realm from "realm";

//get the Atlas App ID (found in Atlas Browser)
//https://realm.mongodb.com/groups/6549f6428728c1322adb3bfe/apps/6549fbf2e47b2153494e8558/deployment/environment
const app = new Realm.App({ id: "oneitatlasapp-dlthx" });

//get the Data from the Database
const getMongoData = async () => {
  const user = await app.logIn(Realm.Credentials.anonymous());
  const mongodb = user.mongoClient("mongodb-atlas");
  const database = mongodb.db("OneITDay");
  const collection = database.collection("Info");

  const data = await collection.find({});
  return data;
};

//Put the Data on Screen
const InfoScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  useEffect(() => {
    getMongoData()
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //Wrap the Items from Database in React.Fragment and put the KeyID there
  //Otherwise you need a unique Key for every item
  return (
    <View>
      {data.map((item) => (
        <React.Fragment key={item._id}>
          <Text>{item.Info}</Text>
          <Button title={item.Button} onPress={alert} />
        </React.Fragment>
      ))}
    </View>
  );
};
export default InfoScreen;
