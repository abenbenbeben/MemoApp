import React from "react";
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Alert, } from 'react-native';
import { FAB } from 'react-native-paper';
import CircleButton from "../components/CircleButton";
import { Feather } from '@expo/vector-icons'; 

export default function MemoEditScreen(props){
    const { navigation } = props;
    return (
        <KeyboardAvoidingView style={styles.container} behavior="height">
            <View style={styles.inputContainer}>
                <TextInput value="買い物リスト" multiline style={styles.input}/>
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
      backgroundColor: '#f0f4f8',
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