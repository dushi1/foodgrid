import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from '../Auth';
import Registration from '../Registration'
import Home from '../Home.js';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Auth' component={Auth} options={{ headerShown: false }} />
            <Stack.Screen name='Registration' component={Registration} options={{ headerShown: false }} />
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default AppNavigator;