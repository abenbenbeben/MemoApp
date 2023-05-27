import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { FAB } from 'react-native-paper';
import MemoList from "../components/MemoList";
import CircleButton from "../components/CircleButton";
import Button from "../components/Button";
import { getAuth, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";


export default function LoginScreen(props){
    const { navigation } = props;
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') 
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                //navigation.reset({
                //   index: 0,
                //    routes: [{ name: 'MemoList' }],
                //})
            } else {
                // User is signed out
                // ...
            }
        });
        return unsubscribe;
    }, []);

    function handlePress(){
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user.uid);
            navigation.reset({
                index: 0,
                routes: [{ name: 'MemoList_list' }],
            })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Alert.alert(errorCode)
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <Text style={styles.title}>Log In</Text>
                <TextInput 
                    value={email} 
                    style={styles.input} 
                    onChangeText={(text) => { setEmail(text);}}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    placeholder="Email Address"
                    textContentType="emailAddress"
                ></TextInput>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={(text) => { setPassword(text);}}
                    autoCapitalize="none"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                ></TextInput>
                <Button 
                    label="Submit" 
                    onPress={handlePress}
                />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Not registered?</Text>
                    <TouchableOpacity
                        onPress={() => { navigation.reset({
                            index: 0,
                            routes: [{ name: 'SignUp'}]
                        }); }}
                    >
                        <Text style={styles.footerLink}>Sign up here!</Text>    
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0F4F8',
    },
    inner: {
        paddingHorizontal: 27,
        paddingVertical: 24,
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    input: {
        fontSize: 16,
        height: 48,
        borderColor: '#DDDDDD',
        borderWidth: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 8,
        marginBottom: 16,
    },
    footer: {
        //テキストが縦に並んでいる時（初期は縦）
        flexDirection: 'row',
    },
    footerText: {
        fontSize: 14,
        lineHeight: 24,
        marginRight: 8,
    },
    footerLink: {
        fontSize: 14,
        lineHeight: 24,
        color: '#467FD3',
    },
})