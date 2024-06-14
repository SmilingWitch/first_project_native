import {View, Text} from "react-native"
import Constants from "expo-constants"


const Main = () => {
    return(
        <View style = {{marginTop: Constants.statusBarHeight} }>
            <Text>
                Rate Repository Application
            </Text>
        </View>
    )
}

export default Main;