import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity, Dimensions, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImageTextInput from './imageTextInput';
import { useState } from 'react';
import { styles } from '../styles/styles';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default SignUp = () => {

  const initialValues = {
    fullname: '',
    mailid: '',
    password: '',
    confirmpassword: '',
    mobileno: ''
  }
  const SignUpSchema = Yup.object().shape({
    fullname: Yup
      .string()
      .min(1)
      .required('Please enter the name'),
    mailid: Yup
      .string()
      .email('Please enter a valid email id')
      .required('Please enter a email id'),
    password: Yup
      .string()
      .min(8)
      .required('Please enter your password')
      .matches(
        "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    confirmpassword: Yup
      .string()
      .min(8)
      .oneOf([Yup.ref('password')], 'Your password do not match')
      .required('Please re-enter your password'),
    mobileno: Yup
      .string()
      .required('Mobile number required')
  });

  return (
    <Formik initialValues={initialValues} validationSchema={SignUpSchema} >
      {({ errors, touched, validateOnChange, setFieldError, setFieldTouched, handleSubmit, isValid, values, handleChange }) => (
        <ScrollView contentContainerStyle={styles.topContainer}>
          <Image source={require('../assets/websitelogo-header.png')} style={styles.logoImage} />
          <StatusBar barStyle={'light-content'} />
          <Text style={{ fontSize: 24 }}>Hi There!</Text>
          <Text>Please enter your details</Text>
          <View style={styles.formContainer}>
            <Text style={styles.title}>Sign up</Text>

            <View style={styles.inputWrapper}>
              <ImageTextInput image='account' text={'Full Name'} inputValue={values.fullname} handleChange={handleChange('fullname')} onBlurFunction={() => setFieldTouched('fullname')} />
            </View>
            <Text style={styles.errorTxt}>{touched.fullname && errors.fullname ? errors.fullname : ''}</Text>
            <View style={styles.inputWrapper}>
              <ImageTextInput image='email' text={'Email'} inputValue={values.mailid} handleChange={handleChange('mailid')} onBlurFunction={() => setFieldTouched('mailid')} />
            </View>
            <Text style={styles.errorTxt}>{touched.mailid && errors.mailid ? errors.mailid : ''}</Text>
            <View style={styles.inputWrapper}>
              <PasswordEyeBox image='lock' text={'Password'} inputValue={values.password} handleChange={handleChange('password')} onBlurFunction={() => setFieldTouched('password')} />
            </View>
            <Text style={styles.errorTxt}>{touched.password && errors.password ? errors.password : ''}</Text>
            <View style={styles.inputWrapper}>
              <PasswordEyeBox image='lock' text={'Confirm Password'} inputValue={values.confirmpassword} handleChange={handleChange('confirmpassword')} onBlurFunction={() => setFieldTouched('confirmpassword')} />
            </View>
            <Text style={styles.errorTxt}>{touched.confirmpassword && errors.confirmpassword ? errors.confirmpassword : ''}</Text>

            <View style={styles.inputWrapper}>
              <ImageTextInput image='cellphone' text={'Mobile No.'} inputValue={values.mobileno} handleChange={handleChange('mobileno')} onBlurFunction={() => setFieldTouched('mobileno')} />
            </View>
            <Text style={styles.errorTxt}>{touched.mobileno && errors.mobileno ? errors.mobileno : ''}</Text>

            <View style={styles.container}>
              <TouchableOpacity onPress={handleSubmit} title="Submit" style={[styles.submitBtn, { backgroundColor: isValid ? '#1babdf' : '#0004' }]} disabled={!isValid}>
                <Text style={styles.submitBtnTxt}>Submit</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      )}

    </Formik>

  );
}
