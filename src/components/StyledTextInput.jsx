import { TextInput , StyleSheet} from "react-native";


const styles = StyleSheet.create({
    textInput: {
        borderRadius: 5,
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 2,

     },
     error: {
        borderColor: 'red'
     }
})


const StyledTextInput = ({style = {}, error, ...props}) => {
    const inputStyles = [
        styles.textInput,
        style,
        error && styles.error
    ]

    return(
        <TextInput style = {inputStyles} {...props}>

        </TextInput>
    )
}

export default StyledTextInput; 
