import react from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Home = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Contact Screen</Text>
            <Text style={styles.info}>Phone: +387 61 123 6741</Text>
            <Text style={styles.info}>Email: avdoavdic@gmail.com</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center",
    },
    title:{
        fontSize:24,
        fontWeight:"bold",
        marginBottom:16,
    },
    info:{
        fontSize:18,
        marginBottom:8,
    },
});

export default Contact;