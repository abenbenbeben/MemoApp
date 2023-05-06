import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { FAB } from 'react-native-paper';
import AppBar from "../components/AppBar";
import MemoList from "../components/MemoList";
import CircleButton from "../components/CircleButton";


export default function MemoListScreen(){
    return (
        <View style={styles.container}>
            <AppBar />
            <MemoList />
            <CircleButton style={{ bottom: 40 }} name="plus"/>
        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f4f8',
    },
  });
