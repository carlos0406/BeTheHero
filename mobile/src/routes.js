import React from 'react'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

import Incidents from './pages/incidents/index'
import Detail from "./pages/detail"





export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Incidents" component={Incidents} />
                <Stack.Screen name="Details" component={Detail} />
            </Stack.Navigator>
        </NavigationContainer >
    );

}