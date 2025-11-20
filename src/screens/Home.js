import react from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Home = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Text>Welcome to Home Screen</Text>
             <Swiper autoplay={true} activeDotColor="#22D4FF" autoplayTimeout={5}>
                <View style={styles.item}>
                    <Image style={styles.imgItem} source={require("../..assets/banner_1.jpg")}
                    resitemode="cover"></Image>
                </View>
                 <View style={styles.item}>
                    <Image style={styles.imgItem} source={require("../..assets/banner_1.jpg")}
                    resitemode="cover"></Image>
                </View>
                 <View style={styles.item}>
                    <Image style={styles.imgItem} source={require("../..assets/banner_1.jpg")}
                    resitemode="cover"></Image>
                </View>
                 <View style={styles.item}>
                    <Image style={styles.imgItem} source={require("../..assets/banner_1.jpg")}
                    resitemode="cover"></Image>
                </View>
            </Swiper>
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
    item:{
        flex:1,
        justifyContent:"center",
    },
});

export default Home;