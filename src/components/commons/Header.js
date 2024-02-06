import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Header = ({
    main
}) => {
    if (main) {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Icon
                        name={'vector-square'}
                        color={'#fff'}
                        size={25}
                    />


                    <Image 
                    style={styles.imgIcon}
                    source={{uri: 'https://thumbs.dreamstime.com/z/%D0%BF%D0%B5%D1%87%D0%B0%D1%82%D1%8C-woman-avatar-profile-female-face-icon-vector-illustration-190750711.jpg?w=768'}}/>
                </View>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
            </View>
        );
    };
};


const styles = StyleSheet.create({
    imgIcon: {
        width: 30,
        height: 30,
        borderRadius: 8,
    },
    header: {
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 32,
        flexDirection: 'row',
        alignSelf: 'stretch',
    },
    container: {
        backgroundColor: '#4e51bf',
        alignItems: 'center',
        height: '22%',
        borderBottomRightRadius: 85
    }
});