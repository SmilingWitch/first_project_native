import {Text, StyleSheet} from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
    text : {
        fontSize: theme.fontSize.body,
        color: theme.colors.textPrimary,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeight.normal
    },
    colorPrimary: {
        color: theme.colors.textPrimary
    },
    colorSecundary: {
        color: theme.colors.textSecundary
    },
    bold: {
        fontWeight: theme.fontWeight.bold
    },

    subheading: {
        fontSize: theme.fontSize.subheading
    },
    small: {
        fontSize: 10
    },
    alignCenter: {
        textAlign: "center"
    }
})


const StyledText = ({align,children, color, fontSize, fontWeight, style, ...restOfProps}) => {

    const textStyles = [
        styles.text,
        align === 'center' && styles.alignCenter,
        color === 'primary' && styles.colorPrimary,
        color === 'secundary' && styles.colorSecundary,
        fontWeight === 'bold' && styles.bold,
        fontSize === 'subheading' && styles.subheading,
        style
    ]

    return (
        <Text style = {textStyles} {...restOfProps}>
            {children}
        </Text>
    );
}

export default StyledText ;