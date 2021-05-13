import React from 'react';
import MenuDrawer from '../components/screens/menu';
import { NavigationContainer } from '@react-navigation/native';
const Router = () => {
    return (
        <NavigationContainer>
            <MenuDrawer />
        </NavigationContainer>
    );
};
export default Router;
