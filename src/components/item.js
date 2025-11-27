import React from "react";
import {text, View} from "react-native";

const item = ({ item }) => (
    <View>
        <View>
            <Image source={{uri: `${item.image}`}} resizeMode="cover" />
        </View>
        <View>
            <Text>{item.name}</Text>
            <Text>{item.category}</Text>
            <Text>{item.description}</Text>
            <Text>{item.price}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    cardContainer:{
        width:"100%",
        height:130,
        flexDirection:"row",
        backgroundColor:"white",
        borderRadius:8,
        marginBottom:16,
    },
    img:{
        width:100,
        height:"90%",
        resizeMode:"cover",
        borderRadius:8,
        marginTop:5,
    },
    textContainer:{
        paddingHorizontal:10,
        marginVertical:10,
        width:"70%",
    },

    name:{
        fontSize:16,
        fontWeight:"bold",
    },
    category:{
        fontSize:12,
        color:"#22D4FF",

    },
    desc:{
        fontStyle:"italic",
    },
    price:{
        fontWeight:"bold",
        marginTop:5,
        backgroundColor:"#384053",
        borderRadius:100,
        paddingHorizontal:5,
        width:45,
    },
});

export default item;