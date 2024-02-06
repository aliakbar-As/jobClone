import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { CircleTemp } from '../../../elements';

import Icon from 'react-native-vector-icons/FontAwesome6';

const widthScreen = Dimensions.get('window').width;


const users = [
    {
        id: 0,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb3Ghorto2A4X8WIVql4QWhKglZ-aILaz1yhll8Z0heuRnyKf2dunZEoBM47nl640wJJc&usqp=CAU',
    },
    {
        id: 0,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSDPTH45IMOu72NyhIy9lJQFCeuGcn0eOad1EWKrHYlUiXvDNpfrv6jSmsOXHiQrzN854&usqp=CAU',
    },
    {
        id: 0,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ctpM6CfTdVevdxTieibvSSVJy-J9gHY3SIgn4kihTWtviTtMVmy1UqwryGCmh5fzWz8&usqp=CAU',
    },
];

const Detail = () => {
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

                <View style={styles.borderView} />
            </View>


            <View style={styles.topContainer}>
                <View style={styles.googleIcon}>
                    <Image
                        style={{ width: 25, height: 25 }}
                        source={require('../../../../assets/images/search.png')} />
                </View>

                <View style={{ margin: 32, }}>
                    <Text style={styles.hdrTitle}>Android & IOS Developer</Text>

                    <Text style={{ color: '#fff', marginTop: 10 }}>$0k - $15k</Text>
                </View>

                <View style={styles.users}>
                    {users.map((item, i) => (
                        <View key={i} style={styles.userView}>
                            <Image
                                style={{ width: 35, height: 35, borderRadius: 10, }}
                                source={{ uri: item.image }}
                            />
                        </View>
                    ))}
                    <View style={[styles.userView, { backgroundColor: '#fff', width: 45, height: 45,padding: 0 }]}>
                        <Icon
                            size={20}
                            color={'#000'}
                            name={'ellipsis'} />
                    </View>
                </View>
            </View>


            <View style={{ marginTop: '10%', padding: 32 }}>
                <Text style={styles.mainDesTitle}>Description</Text>

                <Text style={{ color: '#000', marginTop: 16 }}>
                    As a career changer, the application process was intimidating. Many companies use third-party solutions to process applications. A process that is often cumbersome and unnecessary. WeAreDevelopers offers a simple and easy way to create a comprehensive profile and an even easier way to submit an application. We recommend
                </Text>
            </View>


            <View style={styles.contentView}>
                <View style={styles.borderView2} />

                <View style={styles.footerItems}>
                    <View style={styles.iconsView}>
                        <Icon
                            size={20}
                            color={'#000'}
                            name={'users-rectangle'} />
                    </View>
                    <Text style={styles.footerTitle}>Apply for Onsite Interview</Text>
                </View>

                <View style={styles.footerItems}>
                    <View style={styles.iconsView}>
                        <Icon
                            size={20}
                            color={'#000'}
                            name={'chalkboard-user'} />
                    </View>
                    <Text style={styles.footerTitle}>Apply for Online Interview</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    users: {
        position: 'absolute',
        right: 16,
        bottom: -20,
        flexDirection: 'row', alignItems: 'center',
    },
    userView: {
        backgroundColor: '#f4f5fe',
        borderRadius: 10,
        padding: 5,
        marginLeft: -16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentView: {
        marginTop: '10%',
        backgroundColor: '#4e51bf',
        height: '100%',
        borderTopLeftRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    footerTitle: {
        textAlign: 'center',
        flex: 1,
        color: '#000',
        fontSize: 15
    },
    iconsView: {
        backgroundColor: '#ffe9ce',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        padding: 16,
    },
    footerItems: {
        backgroundColor: '#fff',
        width: '80%',
        alignSelf: 'center',
        borderRadius: 20,
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 20,
        height: 60,
        justifyContent: 'space-between'
    },
    mainDesTitle: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18
    },
    hdrTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    topContainer: {
        backgroundColor: '#4e51bf',
        width: '85%',
        alignSelf: 'center',
        borderRadius: 20,
        paddingVertical: 20,
        marginTop: '-20%',
    },
    googleIcon: {
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 20,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 20,
        top: -20,
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
    borderView2: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderRightWidth: 50,
        borderTopWidth: 50,
        borderRightColor: "transparent",
        borderTopColor: "#4e51bf",
        position: 'absolute',
        right: 0,
        top: -50,
        transform: [{ rotate: '180deg' }]
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
export default Detail;