import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DefaultNavigator from '../../../router/navigator';

const Drawer = createDrawerNavigator();

function MenuDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={DefaultNavigator} />
        </Drawer.Navigator>
    );
}

export default MenuDrawer;
