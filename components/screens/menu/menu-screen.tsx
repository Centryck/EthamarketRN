import React from 'react';
import { View, Button } from 'react-native';
import Text from '../../base/text';

function HomeScreen({ navigation }) {
    return (
        <View>
            <Button onPress={() => navigation.navigate('Home')} title="Home" />
        </View>
    );
}

const MenuScreen = () => {
    return (
        <View>
            <Text>{'esto es un texto'}</Text>
        </View>
    );
};

export default MenuScreen;
