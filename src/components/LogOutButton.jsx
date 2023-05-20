import { getAuth, signOut } from "firebase/auth";
import { React } from "react";
import { TouchableOpacity, Text, StyleSheet, Alert} from 'react-native';
import { useNavigation } from "@react-navigation/native";


export default function LogOutButton() {
    const navigation = useNavigation();
    const auth = getAuth();

    function handlePress(){
        signOut(auth).then(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            })
          }).catch((error) => {
            Alert.alert('ログアウトに失敗しました。')
          });
    }

    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={handlePress}
        >
            <Text style={styles.label}>ログアウト</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        paddingVertical: 4,
    },
    label: {
        fontSize: 14,
        color: 'rgba(225, 225, 225, 0.7)',
    },
});