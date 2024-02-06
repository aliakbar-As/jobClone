import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const { width, height } = Dimensions.get('window');

const Home = () => {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Image
                        resizeMode="contain"
                        style={{ width: 20, height: 20 }}
                        source={require('../../../../assets/images/coffeeCup.png')} />

                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', color: '#000' }}>Qahwa</Text>
                        <Text style={{ fontWeight: 'bold', color: '#ccc' }}>Space</Text>
                    </View>
                </View>

                <View>
                    <View style={styles.badge} />
                    <Image
                        resizeMode="contain"
                        style={{ width: 25, height: 25 }}
                        source={require('../../../../assets/images/basket.png')} />
                </View>
            </View>

            <View style={{ width: '80%', padding: 32, marginTop: -16 }}>
                <Text numberOfLines={2} style={{ fontSize: 35, color: '#000', fontWeight: 'bold', }}>Smooth Out Your Everyday</Text>
            </View>


            <View style={styles.greenBox}>

                <View></View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    greenBox: {
        height: '100%',
        backgroundColor: '#3f9469',
        borderTopLeftRadius: 170,
        borderTopRightRadius: 170,
    },
    badge: {
        width: 8, height: 8,
        borderRadius: 10,
        position: 'absolute', top: 4,
        zIndex: 1,
        right: 2,
        backgroundColor: '#48a878'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 32,
    },
    container: {
        flex: 1,
    }
});

export default Home;