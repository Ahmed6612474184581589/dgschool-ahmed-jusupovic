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
            <View style={styles.iconsContainer}>
                <Icon name="tablet" iconText="Iphone" />
                <Icon name="android" iconText="Samsung" />
                <Icon name="laptop" iconText="Laptop" />
            </View>
            <View style={styles.iconsContainer}>
                <Icon name="tablet" iconText="Iphone" />
                <Icon name="mouse" iconText="Mouse" />
                <Icon name="keyboard-outline" iconText="Keyboard" />
            </View>

            <View style={styles.productsContainer}>
                <Text>Most popular products</Text>
                <FlatList 
                    data={this.state.products.popularproducts}
                />
            </View>
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
    iconsContainer:{
        flexDirection:"row",
        justifyContent:"space-around",
        width:"100%",
        paddingHorizontal:20,
        marginTop:20,
    },
    sliderContainer:{
        height:200,
        justifyContent:"center",
    },

    productsContainer:{
        marginhorizontal:20,
    },
    title:{
        marginTop:35,
        fontSize:20,
        fontWeight:"bold",
        marginBottom:16,
    },
    btn:{
        backgroundColor:"#22D4FF",
        height:50,
        borderRadius:8,
        justifyContent:"center",
        marginBottom:20,
    },
    btnText:{
        color:"white",
        fontWeight:"bold",
        textAlign:"center",
        fontSize:18,
    },
});

export default Home;