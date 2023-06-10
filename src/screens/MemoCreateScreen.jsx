import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Alert,} from 'react-native';
import CircleButton from "../components/CircleButton";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { app } from "../../firebaseconfig";
import { getAuth } from "firebase/auth";
import { translateErrors } from "../utils";





export default function MemoCreateScreen(props){
    const {navigation } = props;
    const [ bodyText, setBodyText ] = useState('');
    const db = getFirestore(app);
    const auth = getAuth();
    const currentUser = auth.currentUser;
    function handlePress() {
        try {
            const docRef = addDoc(collection(db, `users/${currentUser.uid}/memos`), {
                bodyText,
                updateAt: new Date(),
            });
            console.log("Document written with ID: ", docRef);
            navigation.goBack();
            } 
        catch (e) {
            const errorMsg = translateErrors(error.code)
            Alert.alert(errorMsg.title,errorMsg.description)
            }
       
    }
    return (
        <KeyboardAvoidingView style={styles.container} behavior="height">
            <View style={styles.inputContainer}>
                <TextInput 
                    value={bodyText}
                    multiline
                    style={styles.input}
                    onChangeText={(text) => { setBodyText(text); }}
                    autoFocus
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