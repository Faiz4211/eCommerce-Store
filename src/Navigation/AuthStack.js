import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import TabStack from './TabStack';
import MyAdress from '../screens/MyAdress';
import AddAdress from '../screens/AddAdress';


const Stack = createNativeStackNavigator();

function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Main" component={TabStack} />
            <Stack.Screen name="Adress" component={MyAdress} />
            <Stack.Screen name="AddAdress" component={AddAdress} />
        </Stack.Navigator>
    );
}

export default AuthStack;