import React from "react";
import { ScrollView, StyleSheet, Text, View, TextInput, Alert, TouchableOpacity} from 'react-native';
import Button from "../components/Button";

export default function SignUpScreen(props){
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <Text style={styles.title}>Log In</Text>
                <TextInput value="Email Address" style={styles.input}></TextInput>
                <TextInput style={styles.input} value="password"></TextInput>
                <Button 
                    label="Regist" 
                    onPress={() => { navigation.reset({
                        index: 0,
                        routes: [{ name: 'MemoList'}]
                    });}} 
                />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already?</Text>
                    <TouchableOpacity
                        onPress={() => { navigation.reset({
                            index: 0,
                            routes: [{ name: 'Login' }]
                        })}}
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