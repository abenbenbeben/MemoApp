import React from "react";
import { ScrollView, StyleSheet, Text, View, } from 'react-native';
import { FAB } from 'react-native-paper';
import AppBar from "../components/AppBar";
import MemoList from "../components/MemoList";
import CircleButton from "../components/CircleButton";


export default function MemoDetailScreen(){
    return (
        <View style={styles.container}>
            <AppBar />
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>2020年12月24日 10:00</Text>
            </View>
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoText}>
                    買い物リスト
                    書体やレイアウトなど確認するために用います。
                    本文用などで使い方を間違えると見えることもありますので要注意
                </Text>
            </ScrollView>
            <CircleButton style={{ top: 160 }} name="pencil"></CircleButton>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f4f8',
    },
    memoHeader: {
        backgroundColor: '#467FD3',
        height: 96,
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 19,
    },
    memoTitle: {
        color: 'white',
        fontSize:20,
        lineHeight: 32,
        fontWeight: 'bold',
    },
    memoDate: {
        color: 'white',
        fontSize: 12,
        lineHeight: 16,
    },
    memoBody: {
        paddingVertical: 32,
        paddingHorizontal: 27,
    },
    memoText: {
        fontSize: 16,
        lineHeight: 24,
    }
})

