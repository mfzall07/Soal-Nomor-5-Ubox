import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';
import { Detail, Home } from '../pages';

const Stack = createNativeStackNavigator();


const Router = () => {

    return(
        <Stack.Navigator
            screenOptions={Platform.OS === 'android' ? {
                headerShown: false, 
                animation: 'slide_from_right',
            }:{
                headerShown: false,
                animation: 'slide_from_right',
                gestureEnabled: false
            }}
            initialRouteName='Home'
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
    );
}

export default Router;