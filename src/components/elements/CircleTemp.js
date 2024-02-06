import React from 'react';
import { View, StyleSheet } from 'react-native';


export const CircleTemp = ({
    main,
    bigStyle,
    midStyle,
    smallStyle,
    extraStyles
}) => {
    if (main) {
        return (
            <View style={[styles.container, extraStyles]}>
                <View style={[styles.bigOne, bigStyle]}>

                    <View style={[styles.midOne, midStyle]} />

                    <View style={[styles.smallOne, smallStyle]} />
                </View>
            </View>
        );
    } else {
        return (
            <View>

            </View>
        );
    };
};

const styles = StyleSheet.create({
    smallOne: {
        width: 25,
        height: 25,
        borderRadius: 50,
        backgroundColor: '#ff92a4',
        position: 'absolute',
        bottom: -30,
        right: 0,
    },
    midOne: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#4e51bf',
        position: 'absolute',
        left: -55,
    },
    bigOne: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 18,
        borderColor: '#fff',
        backgroundColor: '#ffdd83',
        alignSelf: 'flex-end',
    },
    container: {
        // width: '50%',
        padding: 10,
        alignSelf: 'flex-end',
        // backgroundColor: '#ffe9ce',
        backgroundColor: 'transparent',
        zIndex: 1,
        borderTopRightRadius: 50,
        marginTop: -20,
        marginRight: -20,
    }
});