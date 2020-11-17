import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';

import AddItems from '../screens/AddItems';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerShown: false,
};

export default function HomeStackNavigator(){
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name='Home' component={Home} />
            
            <Stack.Screen name='AddItems' component={AddItems} />
            
        </Stack.Navigator>
    );
}