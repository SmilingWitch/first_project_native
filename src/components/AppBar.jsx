import {ViewPropTypes, StyleSheet, View, Text} from "react-native"
import StyledText from "./StyledText"
import theme from '../theme'
import Constants from 'expo-constants'
import { Link, useLocation } from "react-router-native"
import { ScrollView, TouchableWithoutFeedback } from "react-native"

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        flexDirection: 'row'
    },
    text: {
        color: theme.appBar.textSencundary,
        paddingHorizontal: 10
    },
    scroll: {
        paddingBottom: 15
    },
    active: {
        color: theme.appBar.textPrimary
    }
})


const AppBarTab = ({children, to}) => {

    const {pathname} = useLocation()

    const active = pathname === to


    const textStyles =[
        styles.text,
        active && styles.active
    ]

    return(
        <Link to = {to} component = {TouchableWithoutFeedback}>
            <StyledText style = {textStyles} fontWeight='bold'>
                {children}
            </StyledText>
        </Link>
    )
}

const AppBar = () => {
        

    return(
        <View style = {styles.container}>
            <ScrollView horizontal style = {styles.scroll}>
                <AppBarTab  to ='/'>Respositories</AppBarTab>
                <AppBarTab  to ='/signin'>Sing In</AppBarTab>

            </ScrollView>
            
        </View>
    )
}

export default AppBar