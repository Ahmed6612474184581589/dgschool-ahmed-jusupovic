import {navigationContainer} from '@react-navigation/native';
import {StatusBar} from "expo-status-bar";
import Home from "./src/screens/Home";
import About from "./src/screens/About";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();

const screenOptionStyle ={
  headerStyle:{
    backgroundColor:"#ff6347",
  },
  headerTintColor:"white",
};

const MainStackNavigator =({navigation}) => {
  return(
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

export default App;