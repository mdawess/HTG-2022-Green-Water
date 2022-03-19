import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import CropInfo from './screens/CropInfo';
import FarmerStats from './screens/FarmerStats';
import Home from './screens/Home';

export default function RootNavigation() {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="CropInfo" screenOptions={screenOptions} >
                {/* <Stack.Screen name='CropInfo' component={CropInfo} />
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='FarmerStats' component={FarmerStats} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}