import { StyleSheet } from 'react-native';
import { textStylesEM } from '../../../styles';

export const commonTextStyles = StyleSheet.create({
    text: {
        ...textStylesEM.font.regular,
        ...textStylesEM.size.default,
    }
})