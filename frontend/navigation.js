import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Survey from './screens/Survey';
import DataInput from './screens/DataInput';
import Home from './screens/Home';
import Community from './screens/Community';

export default function RootNavigation() {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Survey" screenOptions={screenOptions} >
                <Stack.Screen name='Survey' component={Survey} />
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='DataInput' component={DataInput} />
                <Stack.Screen name='Community' component={Community} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}