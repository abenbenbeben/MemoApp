import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FAB } from 'react-native-paper';
import CircleButton from "./CircleButton";
import { Feather } from '@expo/vector-icons'; 


export default function MemoList(){
    return (
        <View>

            <View>
                <View style={styles.memoListItem}>
                    <View>
                    <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                    <Text style={styles.memoListItemDate}>2020年12月24日 12:00</Text>
                    </View>
                    <TouchableOpacity>
                        <Feather name="x" size={16} color="#B0B0B0" />
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <View style={styles.memoListItem}>
                    <View>
                    <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                    <Text style={styles.memoListItemDate}>2020年12月24日 12:00</Text>
                    </View>
                    <TouchableOpacity>
                        <Feather name="x" size={16} color="#B0B0B0" />
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <View style={styles.memoListItem}>
                    <View>
                    <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                    <Text style={styles.memoListItemDate}>2020年12月24日 12:00</Text>
                    </View>
                    <TouchableOpacity>
                        <Feather name="x" size={16} color="#B0B0B0" />
                    </TouchableOpacity>
                </View>
            </View>
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
})