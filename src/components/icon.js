import React from "react";
import {Text, View} from "react-native";

const icon = (props) => (
    <View style={styles.iconContainer}>
        <View style={styles.iconWrapper}>
            <MaterialCommunityIcons name={props.name} size={27} color="#22D4FF" />
        </View>
        <Text>{props.iconText}</Text>
    </View>
);


const styles = StyleSheet.create({
    iconWrapper:{
        backgroundColor:"#384053",
        width:"100%",
        height:"100%",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:50,
    },
    iconContainer:{
        alignItems:"center",
        width:60,
        height:60,
    },
    iconText:{
        height:20,
        fontWeight:"600",
    },
});

export default icon;


