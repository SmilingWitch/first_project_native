import { View, Text } from "react-native"
import { Formik, useField } from "formik"
import { Button, StyleSheet } from "react-native"
import StyledTextInput from "../components/StyledTextInput"
import { loginValidationSchema } from "../validationSchemas/login"

const initialValues = {
    email: '',
    password: ''
}

const styles = StyleSheet.create({
    form: {
        margin: 12 ,
        color: 'black',
    },
    error: {
        color: 'red' 
    },
    errorContainer: {
        marginBottom:10,

    }
})





const FormikInputValue = ({name, ...props}) => {
    
    const [field, meta, helpers] = useField(name)


    return(
        <View >
            <StyledTextInput
                error = {meta.touched && meta.error ? meta.error : ''}
                value={field.value} 
                onChangeText={value => helpers.setValue(value)} 
                onBlur={() => helpers.setTouched(true)}
                {...props}/>

            <View style = {styles.errorContainer}>
                {meta.touched && meta.error ? (
                    <Text style={styles.error}>{meta.error}</Text>
                ) : null}

            </View>

        </View>
        
    )
}

export default function Login(){

    return (
        <Formik initialValues={initialValues} 
                onSubmit={values => console.log(values)} 
                validationSchema ={loginValidationSchema}>

            {({handleSubmit}) => (
                <View style = {styles.form}>
                    <FormikInputValue
                        placeholder="Email" 
                        name = "email"
                    />
                    <FormikInputValue
                        placeholder="Password" 
                        name = "password"
                        secureTextEntry
                    />
                    <Button title="Log In" onPress={handleSubmit} />
                    
                </View>
            )}
        </Formik>
    );
}

