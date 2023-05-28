import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Alert, } from 'react-native';
import { FAB } from 'react-native-paper';
import CircleButton from "../components/CircleButton";
import { Feather } from '@expo/vector-icons'; 
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { app } from "../../firebaseconfig";
import { getAuth } from "firebase/auth";


export default function MemoEditScreen(props){
    const { navigation, route } = props;
    const { id, bodyText } = route.params;
    const [ body, setbody ] = useState(bodyText);
    const db = getFirestore(app);
    const auth = getAuth();
    const currentUser = auth.currentUser;

    function handlePress() {
        if(currentUser){
            try {
                const docRef = setDoc(doc(db, `users/${currentUser.uid}/memos`, `${id}`), {
                    bodyText: body,
                    updateAt: new Date(),
                });
                console.log("Document written with ID: ", docRef);
                navigation.goBack({id: id});
                } 
            catch (e) {
                console.error("Error adding document: ", e);
                }
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="height">
            <View style={styles.inputContainer}>
                <TextInput 
                    value={body} 
                    multiline 
                    style={styles.input}
                    onChangeText={(text) => { setbody(text) }}
                />
            </View>
            <CircleButton 
                style={{ bottom: 40 }} 
                name="check" 
                onPress={handlePress}
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