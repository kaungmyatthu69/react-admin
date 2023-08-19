import {Box, Button, TextField} from '@mui/material'
import {Formik} from 'formik';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from "../../components/Header.jsx";

const initailValues = {
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    address1: '',
    address2: ''
}
const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    email: yup.string().email('invalid email').required('Email is required'),
    contact: yup.string().matches(phoneRegExp, "Phone number is not valid").required('Contact is required'),
    address1: yup.string().required('Address is required'),
    address2: yup.string().required('Address is required')
})
const Form = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const handleFormSubmit = (values) => {
        console.log(values)
    }
    return (
        <Box m={"20px"}>
            <Header subtitle={'Create a New User Profile'} title={'CREATE USER'}/>
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initailValues}
                validationSchema={userSchema}
            >
                {({
                      values,
                      errors,
                      handleBlur,
                      touched,
                      handleChange,
                      handleSubmit
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Box>
                            <TextField
                                error={Boolean(touched.firstName && errors.firstName)}
                                fullWidth
                                helperText={touched.firstName && errors.firstName}
                                label="<NAME>"
                                margin="normal"
                                name="firstName"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.firstName}
                                variant="outlined"
                            />
                        </Box>

                    </form>
                )}
            </Formik>
        </Box>
    );
};

export default Form;
