import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View, Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';



const widthScreen = Dimensions.get('window').width;

export const Category = ({
    title,
    iconName,
    onPress,
    selected,
    extraStyles
}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.container, {
                backgroundColor: selected ? '#4e51bf' : '#f4f5fe',
            }]}>

                <View style={styles.iconView}>
                    <Icon
                        size={20}
                        color={'#000'}
                        name={iconName} />
                </View>


                <Text style={{ marginTop: 16, color: selected ? '#fff' : '#000' }}>{title}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    iconView: {
        width: 50, height: 50,
        borderRadius: 50, alignItems: 'center',
        justifyContent: 'center', backgroundColor: '#fff'
    },
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        width: (widthScreen / 5) + 5,
        paddingVertical: 35,
        marginRight: 20,
        borderRadius: 100
    }
})
