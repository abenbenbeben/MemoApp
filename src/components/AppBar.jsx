import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { FAB } from 'react-native-paper';


export default function AppBar(){
    return (
        <View style={styles.appbar}>
            <View style={styles.appbarInner}>
                <Text style={styles.appbarTitle}>Memo App</Text>
                <Text style={styles.appbarRight}>ログアウト</Text>
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f4f8',
    },
    appbar: {
      width: '100%',
      height: 104,
      backgroundColor: '#467FD3',
      justifyContent: 'flex-end',
    },
    appbarInner: {
      alignItems: 'center',
    },
    appbarRight:{
      position: 'absolute',
      right: 19,
      bottom: 16,
      color: 'rgba(255,255,255, 0.8)',
    },
    appbarTitle: {
      marginBottom: 8,
      fontSize: 22,
      lineHeight: 32,
      color: '#ffffff',
      fontWeight: 'bold',
    },
})
