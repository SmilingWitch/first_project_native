import { View } from "react-native"
import StyledText from "./StyledText"



const parseThousand = (value) => {
    return (
        value >= 1000 
        ? `${Math.round(value / 100) / 10}k` :
        String(value)
    )
}

const RepositoryStats = (props) => {
    return(
        <View style = {{flexDirection: "row", justifyContent: "space-around"}}>
            <View>
                <StyledText small align='center' fontWeight='bold'> {parseThousand(props.stargazersCount)}</StyledText>
                <StyledText small align='center' >Stars</StyledText>
            </View>
            <View>
                <StyledText small align='center' fontWeight='bold'>{parseThousand(props.ratingAverage)} </StyledText>
                <StyledText small  align='center'>Rating</StyledText>
            </View>
            <View>
                <StyledText small align='center' fontWeight='bold'> {props.reviewCount}</StyledText>
                <StyledText small  align='center'>Review</StyledText>
            </View>
            <View>
                <StyledText small align='center' fontWeight='bold'>{props.forksCount}</StyledText>
                <StyledText small  align='center'>Fork</StyledText>
            </View>
            
        </View>
    )
}


export default RepositoryStats