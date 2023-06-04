import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View, TextInput, Alert, TouchableOpacity} from 'react-native';
import Button from "../components/Button";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { translateErrors } from "../utils";
import Loading from "../components/Loading";

export default function SignUpScreen(props){
    const { navigation } = props;
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') 
    const auth = getAuth();
    const [isLoading, setLoading] = useState(false)

    function handlePress() {
        console.log("handlepress_start")
        setLoading(true)
        createUserWithEmailAndPassword(auth,email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            // ...
            navigation.reset({
                index: 0,
                routes: [{ name: 'MemoList'}]
            });
            setLoading(false)
        })
        .catch((error) => {
            const errorMsg = translateErrors(error.code)
            Alert.alert(errorMsg.title, errorMsg.description);
            // ..
            setLoading(false)
        });
        
    };

    return (
        <View style={styles.container}>
            <Loading isLoading={isLoading} />
            <View style={styles.inner}>
                <Text style={styles.title}>Sign Up</Text>
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
                    label="Regist" 
                    onPress={handlePress} 
                />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already?</Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.reset({
                                index: 0,
                                routes: [{ name: 'Login' }]
                            });
                        }}
                    >
                        <Text style={styles.footerLink}>Log In.</Text>
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