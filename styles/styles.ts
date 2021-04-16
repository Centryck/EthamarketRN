import {Platform} from "react-native";

const fontStyles = {
    FontFamilyEM: 'Lato Sans',
}

const androidFont = {
    regular: {
        fontFamily: `${fontStyles.FontFamilyEM}-Regular`,
    },
};
const iOSFont = {
    regular: {
        fontFamily: `${fontStyles.FontFamilyEM}-Regular`,
    },
};

const size = {
    default: {
        fontSize: 12,
        lineHeight: 'normal',
    },
};

export const textStylesEM = {
    font: androidFont,
    size,
};