import {View, Image, StyleSheet} from "react-native"
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats"
import theme from "../theme"


const RepositoryItemHeader = (props) => {
    return(
        <View style = {{flexDirection: 'row', paddingBottom: 2}}>
            <View>
                <Image source ={{uri: props.ownerAvatarUrl}} style = {style.image}/>
            </View>
            
            <View style = {{paddingLeft: 10}}>
                <StyledText fontSize = 'subheading' fontWeight='bold'>{props.fullName}</StyledText>
                <StyledText color = 'secundary'>{props.description}</StyledText>
                <StyledText style = {style.language}>{props.language}</StyledText>
                

            </View>
            

        </View>
    )
}

const RepositoryItem = ({props}) => {
    return(
        <View key = {props.id} style = {style.container}>
            <RepositoryItemHeader {...props}/>
            <RepositoryStats {...props}/>
        </View>

    )
}

const style = StyleSheet.create({
    container: {
        padding: 20, 
        paddingBottom: 5, 
        paddingTop: 5
    },
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        borderRadius: 4,
        overflow: 'hidden',
        marginTop: 4,
        marginBottom: 4
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4
    }
})

export default RepositoryItem;