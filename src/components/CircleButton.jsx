import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FAB } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


export default function CircleButton(props){
  const { children, style }= props
  return (
      <FAB
      style={[styles.circleButton, style]}
      icon={children}
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
        position:'absolute',
        right: 40,
        //bottom: 40,
        backgroundColor:'#467FD3',
        borderRadius: 32,
      },
      circleButtonLabel: {
        color: '#ffffff',
        fontSize: 40,
        lineHeight: 55,
      },
})