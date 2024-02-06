import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { CircleTemp } from './CircleTemp';



const widthScreen = Dimensions.get('window').width;

export const SearchSection = ({
    title,
    jobCount,
    extraStyles
}) => {
    return (
        <View style={[styles.container, extraStyles]}>
            <CircleTemp
                main
                bigStyle={{ borderColor: '#4e51bf' }}
                midStyle={{ backgroundColor: '#fff' }}
            />

            <View style={{ marginLeft: 16 }}>
                <Text numberOfLines={2} style={styles.hdrTitle}>
                    {title}
                </Text>

                <Text style={{ color: '#000' }}>{jobCount} Job Opportunity</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    hdrTitle: {
        width: '70%',
        fontWeight: 'bold',
        fontSize: 23,
        color: '#000',
    },
    container: {
        borderRadius: 32,
        width: widthScreen / 2,
        height: widthScreen / 2,
        backgroundColor: '#ffe9ce',
        marginRight: 16,
        marginTop: 16,
    }
});