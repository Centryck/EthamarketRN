import React from 'react';
import { View } from 'react-native';
import Text from '../components/base/text';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/screens/home';
import Menu from '../components/screens/menu';

const Stack = createStackNavigator();

const DefaultNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Menu" component={Menu} />
        </Stack.Navigator>
    );
};
export default DefaultNavigator;
