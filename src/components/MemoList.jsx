import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Alert, FlatList, } from 'react-native';
import { FAB } from 'react-native-paper';
import CircleButton from "./CircleButton";
import { Feather } from '@expo/vector-icons';
//Conponentには以下記載をしないとnavigatioが使えない。
import { useNavigation } from '@react-navigation/native';
import { dateToString } from "../utils";


export default function MemoList(props){
    const navigation = useNavigation();
    const { memos } = props;
    console.log("memos:" + memos)

    function renderItem({ item }) {
        return (
            <TouchableOpacity
                onPress={() => { navigation.navigate('MemoDetail', { id: item.id});}}
                key={item.id}
            >
                <View style={styles.memoListItem}>
                    <View>
                    <Text 
                        style={styles.memoListItemTitle}
                        numberOfLines={1}
                    >
                        {item.bodyText}
                    </Text>
                    <Text style={styles.memoListItemDate}>{dateToString(item.updateAt)}</Text>
                    </View>
                    <TouchableOpacity style={styles.memoDelete} onPress={() => {Alert.alert('Are you sure ?')}}>
                        <Feather name="x" size={16} color="#B0B0B0" />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View>
            <FlatList
                data= {memos}
                renderItem = {renderItem}
                keyExtractor={(item) => item.id }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f4f8',
    },
    memoListItem: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 19,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.15)'
        },
    memoListItemTitle: {
        fontSize: 16,
        lineHeight: 32,
    },
    memoListItemDate: {
        fontSize: 12,
        lineHeight: 16,
        color: '#848484',
    },
    memoDelete: {
        padding: 8,
    }
})