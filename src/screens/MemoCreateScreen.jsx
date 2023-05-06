import React from "react";
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, } from 'react-native';
import CircleButton from "../components/CircleButton";
import AppBar from "../components/AppBar";

export default function MemoCreateScreen(){
    return (
        <KeyboardAvoidingView style={styles.container} behavior="height">
            <AppBar />
            <View style={styles.inputContainer}>
                <TextInput value="" multiline style={styles.input}/>
            </View>
            <CircleButton style={{ bottom: 40 }} name="check"></CircleButton>
        </KeyboardAvoidingView>
    ) 
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    inputContainer: {
        paddingHorizontal: 24,
        paddingVertical: 32,
        flex: 1,
    },
    input: {
        flex: 1,
        textAlignVertical:'top',
        fontSize: 16,
        lineHeight: 24,
    }
})