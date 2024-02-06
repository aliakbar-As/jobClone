import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { CircleTemp } from '../../../elements';

import Icon from 'react-native-vector-icons/Feather';

import { SwipeListView } from 'react-native-swipe-list-view';

const widthScreen = Dimensions.get('window').width;

const google = require('../../../../assets/images/search.png');
const skype = require('../../../../assets/images/skype.png');
const instagram = require('../../../../assets/images/instagram.png');
const pinterest = require('../../../../assets/images/pinterest.png');


const items = [
    {
        id: 0,
        title: 'Implement UI on App',
        cost: '$16k - $10k',
        icon: instagram,
    },
    {
        id: 1,
        title: 'Senior App Developer',
        cost: '$10k - $8k',
        icon: skype,
    },
    {
        id: 2,
        title: 'Android & IOS Developer',
        cost: '$100k - $50k',
        icon: google,
    },
    {
        id: 3,
        title: 'UI/UX Designer',
        cost: '$8k - $6k',
        icon: pinterest,
    },
];

const Info = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <Icon
                    size={25}
                    color={'#000'}
                    name={'chevron-left'}
                    style={styles.hdrIcon} />

                <CircleTemp main
                    bigStyle={styles.bigone}
                    midStyle={styles.midone}
                    smallStyle={styles.smallone}
                />

                <View style={styles.hdrTitlesView}>
                    <Text numberOfLines={2} style={{ color: '#000', fontSize: 25, fontWeight: 'bold' }}>
                        Android & IOS Developer
                    </Text>
                    <Text style={{ color: '#000', marginTop: 10, }}>150 Job Opportunity</Text>
                </View>

                <View style={styles.barIcon}>
                    <Icon
                        name={'bar-chart-2'}
                        color={'#fff'}
                        size={30}
                    />
                </View>
                <View style={styles.borderView} />
            </View>


            <View style={{ marginTop: '20%' }}>
                <SwipeListView
                    data={items}
                    renderItem={(data, rowMap) => {
                        const item = data.item;
                        console.log('data', data)
                        return (
                            <View style={styles.card}>
                                <View style={styles.iconCover}>
                                    <Image
                                        resizeMode='contain'
                                        style={{ width: 30, height: 30 }}
                                        source={item.icon} />
                                </View>

                                <View style={{ marginLeft: 16 }}>
                                    <Text style={{ fontWeight: 'bold', color: '#000', fontSize: 16, }}>{item.title}</Text>
                                    <Text style={{ fontSize: 14, color: '#000', marginTop: 10 }}>{item.cost}</Text>
                                </View>
                            </View>
                        )
                    }}
                    renderHiddenItem={(data, rowMap) => (
                        <View style={styles.rowBack}>
                            <Text></Text>
                            <Text></Text>
                        </View>
                    )}
                    leftOpenValue={75}
                    rightOpenValue={-75}
                />
                {/* {items.map((item, index) => {
                    return (
                        
                    )
                })} */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    iconCover: {
        width: 60, height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',

    },
    card: {
        width: '85%',
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#f4f5fe',
        marginBottom: 16,
        borderRadius: 30,
        padding: 20,
    },
    hdrTitlesView: {
        position: 'absolute',
        left: 32,
        bottom: 30,
        width: '50%',
    },
    barIcon: {
        padding: 15, borderRadius: 20, backgroundColor: '#000',
        alignItems: 'center', justifyContent: 'center',
        position: 'absolute', bottom: -20, right: '15%',
        transform: [{ rotate: '90deg' }]
    },
    hdrIcon: {
        marginTop: '-5%',
        marginLeft: 32
    },
    smallone: {
        width: 35,
        height: 35,
        borderRadius: 35,
        right: 16,
        bottom: -40
    },
    midone: {
        width: 70,
        height: 70,
        borderRadius: 85,
        top: 32,
        left: -75,
    },
    bigone: {
        width: 150, height: 150,
        borderRadius: 150 / 2,
        borderWidth: 25,
        marginTop: -30,
        marginRight: -30
    },
    borderView: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderRightWidth: 50,
        borderTopWidth: 50,
        borderRightColor: "transparent",
        borderTopColor: "#ffe9ce",
        position: 'absolute',
        left: 0,
        bottom: -50,
    },
    topView: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffe9ce',
        alignSelf: 'flex-start',
        justifyContent: 'space-between',
        paddingBottom: '25%',
        width: widthScreen,
        borderBottomRightRadius: widthScreen / 4,
    },
    container: {
        flex: 1,
        // backgroundColor: '#4e51bf',
        backgroundColor: '#fff',
    }
});
export default Info;