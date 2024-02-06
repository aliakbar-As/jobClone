import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Header } from '../../../commons';
import { Category, CircleTemp, SearchSection } from '../../../elements';

import Icon from 'react-native-vector-icons/Entypo';


const categoryItems = [
    {
        id: 0,
        title: 'IT',
        icon: 'computer',
    },

    {
        id: 1,
        title: 'Medical',
        icon: 'suitcase-medical',
    },

    {
        id: 2,
        title: 'Capture',
        icon: 'photo-film',
    },

    {
        id: 3,
        title: 'Sport',
        icon: 'baseball',
    },
];


const searchItems = [
    {
        id: 0,
        title: 'IOS Developer',
        jobCount: 15,
    },
    {
        id: 1,
        title: 'UI/UX Designer',
        jobCount: 4,
    },
];

const Home = () => {
    const [catSelectedId, setCatSelectedId] = useState(0);

    return (
        <View style={styles.container}>
            <Header main />

            <View style={styles.hdr}>
                <CircleTemp main />

                <View style={styles.cInnerView}>
                    <Text style={{ fontSize: 17, color: '#000' }}>Welcome,</Text>

                    <Text style={styles.hdrTitle}>Find your</Text>
                    <Text style={styles.hdrTitle}>dream Job!</Text>
                </View>
                <View style={styles.borderView} />
            </View>


            {/* categories */}
            <View style={{ marginTop: 16, padding: 32 }}>
                <View style={styles.pView}>
                    <Text style={styles.titles}>Explore Categories</Text>

                    <Icon
                        size={20}
                        color={'#000'}
                        name={'dots-three-horizontal'} />
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{
                    marginTop: 16,
                    marginRight: -32
                }}>

                    {categoryItems.map((item, index) => {
                        return (
                            <Category
                                onPress={() => setCatSelectedId(item.id)}
                                selected={item.id === catSelectedId}
                                key={index}
                                title={item.title}
                                iconName={item.icon}
                            />
                        )
                    })}

                </ScrollView>
            </View>


            {/* search */}
            <View style={{ padding: 32, marginBottom: '50%', marginTop: -32 }}>
                <View style={styles.pView}>
                    <Text style={styles.titles}>Popular search</Text>

                    <Icon
                        size={20}
                        color={'#000'}
                        name={'dots-three-horizontal'} />
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{
                    marginRight: -32
                }}>
                    {searchItems.map((item, index) => {
                        return (
                            <SearchSection
                                extraStyles={{ backgroundColor: item.id === 1 ? '#f4f5fe' : '#ffe9ce' }}
                                key={index}
                                title={item.title}
                                jobCount={item.jobCount}
                            />
                        )
                    })}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    titles: {
        fontSize: 16,
        color: '#000',
        textAlign: 'left',
    },
    pView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    hdrTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000',
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

    cInnerView: {
        paddingLeft: 32,
        marginTop: '-20%'
    },
    hdr: {
        width: '70%',
        height: '22%',
        backgroundColor: '#ffe9ce',
        marginTop: '-20%',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
    },
    container: {
        flex: 1,
    }
});

export default Home;