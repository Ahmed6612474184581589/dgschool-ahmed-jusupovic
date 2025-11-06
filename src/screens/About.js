import react from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Home = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Text>Welcome to About Screen</Text>
            <Button title="Go to Home Screen" onPress={() => navigation.goBack()}/>
        </View>
    );
};
//addjadj
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center",
    },
});

export default Home;