import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import About from "../screens/About";

const Stack = createStackNavigator();

const screenOptionStyle ={
    headerStyle:{
        backgroundColor:"#ff6347",
    }
}
const MainStackNavigator =({navigation}) => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
    );
};

export default MainStackNavigator;