import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor:"white",
                tabBarInactiveTintColor:"gray",
                tabBarStyle:{
                    backgroundColor:"#FF6347"
                },
                tabBarLabelStyle:{
                    fontSize:12,
                },
            }}
        ></Tab.Navigator>
        <Tab.Screen>
            name="Home"
            component={MainStackNavigator}
            options={{
                tabBarLabel:"Home",
                tabBarIcon:({color})=>(
                    
                )
            }}
        </Tab.Screen>
        
        
    )
}