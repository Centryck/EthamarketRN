import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/screens/home';
import Menu from '../components/screens/menu';

const Stack = createStackNavigator();

const DefaultNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Ethamarket" component={Home} />
        </Stack.Navigator>
    );
};
export default DefaultNavigator;
