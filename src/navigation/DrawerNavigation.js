import {createDrawerNavigator} from '@react-navigation/drawer'; 
import {AboutStackNavigator} from './StackNavigator';
import BottomTabNavigator from "./TabNavigator";
import { DrawerLayoutAndroid } from 'react-native-gesture-handler';

const drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator screenOptions={{
            drawerActiveTintColor:"white",
            drawerActiveBackgroundColor:"#FF6347",
            drawerInactiveTintColor:"black",
            drawerLabelStyle:{fontSize:16},
            drawerStyle:{
                width:250,
            },
        }}>
            <Drawer.Screen name="Home" component={BottomTabNavigator}
                options={{
                    drawerIcon: ({focused,color,size}) => (
                        <MaterialCommunityIcons name={focused ? "home" : "home-outline"} size={22} color={color} />
                    ),
                }} />
            <Drawer.Screen name="About" component={AboutStackNavigator}
                options={{
                    drawerIcon: ({focused,color,size}) => (
                        <MaterialCommunityIcons name={focused ? "home" : "information-outline"} size={22} color={color} />
                    ),
                }} />
            <Drawer.Screen name="Profile" component={AboutStackNavigator}
                options={{
                    drawerIcon: ({focused,color,size}) => (
                        <MaterialCommunityIcons name={focused ? "home" : "information-outline"} size={22} color={color} />
                    ),
                }} />
            <Drawer.Screen name="Contact" component={AboutStackNavigator}
                options={{
                    drawerIcon: ({focused,color,size}) => (
                        <MaterialCommunityIcons name={focused ? "home" : "information-outline"} size={22} color={color} />
                    ),
                }} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;