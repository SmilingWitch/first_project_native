import {View, Text, StyleSheet} from "react-native"
import Constants from "expo-constants"
import RepositoryList from "./RepositoryList";
import {Routes,Route, Navigate} from "react-router-native"
import AppBar from "./AppBar";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        /*paddingTop: Constants.statusBarHeight,*/
    },
});

const Main = () => {
    return(
        <View style = {styles.container}>
            <AppBar/>

            <Routes>
                <Route path='/' element={<RepositoryList />} />
                <Route path='/signin' element={<Text>Sign In</Text>} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>

        </View>
    )
}

export default Main;