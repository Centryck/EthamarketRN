import React from 'react';
import DefaultNavigator from './navigator';
import { NavigationContainer } from '@react-navigation/native';
const Router = () => {
    return (
        <NavigationContainer>
            <DefaultNavigator />
        </NavigationContainer>
    );
};
export default Router;
