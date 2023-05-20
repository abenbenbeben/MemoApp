import React from 'react';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { initializeApp }  from 'firebase/app';
import { firebaseConfig } from './env';

const app = initializeApp(firebaseConfig);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: '#467FD3'},
          headerTitleStyle: { color: '#ffffff' },
          headerTitle: 'Memo App',
          headerTintColor: 'white',
          headerBackTitle: 'Back',
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="MemoList" component={MemoListScreen} />
        <Stack.Screen name="MemoDetail" component={MemoDetailScreen} />
        <Stack.Screen name="MemoEdit" component={MemoEditScreen} />
        <Stack.Screen name="MemoCreate" component={MemoCreateScreen} />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          options={{
            animation: "fade_from_bottom"
          }}
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUpScreen} 
          options={{
            animation: "fade_from_bottom"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

