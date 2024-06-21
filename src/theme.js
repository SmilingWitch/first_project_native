import { Platform } from "react-native";


const theme = {
    appBar: {
        primary: '#24292e',
        textPrimary: '#fff',
        textSencundary: '#999'
    },
    colors: {
        textPrimary: '#24292e',
        textSecundary: '#586069',
        primary: '#0366d6',
        white: "#fefefe"
    },
    fontSize: {
        body: 14,
        subheading: 16
    },
    fonts: {
        main: Platform.select({
            android: 'Roboto',
            ios: 'System',
            default: "System"
        })
    },
    fontWeight: {
        normal: '400',
        bold: '700'
    }
}

export default theme;