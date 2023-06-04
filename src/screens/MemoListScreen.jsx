import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { FAB } from 'react-native-paper';
import MemoList from "../components/MemoList";
import CircleButton from "../components/CircleButton";
import LogOutButton from "../components/LogOutButton";
import Button from "../components/Button";
import { getAuth } from "firebase/auth";
import { app } from "../../firebaseconfig";
import { collection, getDocs, getFirestore, doc, onSnapshot } from "firebase/firestore";
import { query, orderBy, limit } from "firebase/firestore";
import Loading from "../components/Loading";


export default function MemoListScreen(props){
    const { navigation } = props;
    const db = getFirestore(app);
    const auth = getAuth();
    const currentUser = auth.currentUser;
    const [memos, setMemos] = useState([]);
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => <LogOutButton />,
        });
    }, []);

    
    useEffect(() => {
        asyncCall();
    }, []);


    function asyncCall(){
        setLoading(true);
        const q = query(collection(db, `users/${currentUser.uid}/memos`), orderBy("updateAt", "desc"));
        //降順、昇順、desc asc
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let userMemos = [];
            querySnapshot.forEach((doc) => {
                console.log("doc:"+ doc)
                const data = doc.data();
                userMemos.push({
                    id: doc.id,
                    bodyText: data.bodyText,
                    updateAt: data.updateAt.toDate(),
                });
            });
            console.log("============================")
            console.log("userMemos:" + userMemos);
            setMemos(userMemos);
            setLoading(false)
        });
        return unsubscribe;
    }

    if(memos.length === 0){
        return (
            <View style={emptyStyles.container}>
                <Loading isLoading={isLoading} />
                <View style={emptyStyles.inner}>
                    <Text style={emptyStyles.title}>最初のメモを作成しよう！</Text>
                    <Button 
                        style={emptyStyles.button} 
                        label="作成する" 
                        onPress={() => { navigation.navigate('MemoCreate');}}
                    />
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <MemoList memos={memos}/>
            <CircleButton 
                style={{ bottom: 40 }} 
                name="plus"
                onPress={() => { navigation.navigate('MemoCreate')}}
            />
        </View>
    ) 
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f4f8',
    },
  });

const emptyStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    inner: {
        justifyContent:"center",
        alignItems: "center",
    },
    title: {
        fontSize: 18,
        marginBottom: 24,
    },
    button: {
        alignSelf: "center",
    },
})

