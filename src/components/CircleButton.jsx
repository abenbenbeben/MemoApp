import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FAB } from 'react-native-paper';

export default function CircleButton(){
    return (
        <FAB
        style={{
            position:'absolute',
            right:40,
            bottom:40,
            backgroundColor:'#467FD3',
            borderRadius: 32,
        }}
        icon='plus'
        color="#ffffff"
      ></FAB>
    ) 
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f4f8',
    },
    circleButton: {
        backgroundColor: '#467FD3',
        width: 64,
        height: 64,
        borderRadius: 32,
        alignItems: 'center',
        position: 'absolute',
        right: 40,
        bottom: 40,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 40,
      },
      circleButtonLabel: {
        color: '#ffffff',
        fontSize: 40,
        lineHeight: 55,
      },
})