import React from "react";
import { StyleSheet, Text, View, } from 'react-native';

export default function Button(props){
    const { label } = props;
    return (
        <View style={styles.buttonContainer}>
            <Text style={styles.buttonLabel}>{ label }</Text>
        </View>
    ) 
}


const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#467FD3',
        borderRadius: 4,
        //ボタンが横長の時に以下を記載する。
        alignSelf: 'flex-start',
        marginBottom: 24,
    },
    buttonLabel: {
        fontSize: 16,
        lineHeight: 32,
        paddingVertical: 8,
        paddingHorizontal: 32,
        color: 'white',
    },
})