import React from 'react';
import {
    StyleSheet,
    Text as RNText,
    TextProps as RNTextProps,
    TextStyle,
    ViewStyle,
} from 'react-native';
import { commonTextStyles } from './text.styles';
interface TextProps extends RNTextProps {
    style?: ViewStyle;
    scale?: number;
}

const Text: React.FC<TextProps> = props => {
    const { style = {}, scale = 1, children } = props;
    const combinedStyle = StyleSheet.flatten<TextStyle>(style);
    const scaledStyles = { fontSize: combinedStyle.fontSize };

    return <RNText style={scaledStyles}>{children}</RNText>;
};
export default Text;
