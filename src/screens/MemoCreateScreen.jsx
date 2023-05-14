import React from "react";
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, } from 'react-native';
import CircleButton from "../components/CircleButton";

export default function MemoCreateScreen(props){
    const {navigation } = props;
    return (
        <KeyboardAvoidingView style={styles.container} behavior="height">
            <View style={styles.inputContainer}>
                <TextInput value="" multiline style={styles.input}/>
            </View>
            <CircleButton 
                style={{ bottom: 40 }} 
                name="check"
                onPress={() => { navigation.goBack(); }}
            ></CircleButton>
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