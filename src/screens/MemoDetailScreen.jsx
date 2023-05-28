import React,  { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View, } from 'react-native';
import { FAB } from 'react-native-paper';
import MemoList from "../components/MemoList";
import CircleButton from "../components/CircleButton";
import { getAuth } from "firebase/auth";
import { app } from "../../firebaseconfig";
import { collection, getDocs, getFirestore, onSnapshot, doc } from "firebase/firestore";
import { query, orderBy, limit } from "firebase/firestore";
import { dateToString } from "../utils";



export default function MemoDetailScreen(props){
    const { navigation, route } = props
    const { id } = route.params
    console.log("id:" + id);
    const db = getFirestore(app);
    const auth = getAuth();
    const currentUser = auth.currentUser;
    const [memo, setMemo] = useState(null);

    useEffect(() => {
        let unsub = () => {};
        if (currentUser) {
            const q = doc(db, `users/${currentUser.uid}/memos`, `${id}`);
            const unsub = onSnapshot(q, (document) => {
                console.log("Current data: ", document.data());
                const data = document.data()
                setMemo({
                    id: document.id,
                    bodyText: data.bodyText,
                    updateAt: data.updateAt.toDate(),
                })
            });
        }
        return unsub;
    }, []);

    console.log("memo::"+memo)
    return (
        <View style={styles.container}>
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>{memo && memo.bodyText }</Text>
                <Text style={styles.memoDate}>{ memo && dateToString(memo.updateAt) }</Text>
            </View>
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoText}>
                    { memo && memo.bodyText }
                </Text>
            </ScrollView>
            <CircleButton
                style={{ top: 60 }}
                name="pencil"
                onPress={() => { navigation.navigate('MemoEdit'); }}
            ></CircleButton>
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

