import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import ImageTextInput from '../components/imageTextInput'
import { Zocial, Ionicons } from '@expo/vector-icons';
import PasswordEyeBox from './passwordEyeBox';
import { styles } from '../styles/styles';
import { useState } from 'react';

export default LoginForm = () => {
  const navigation = useNavigation();
  const initialValues = {
    mailid: '',
    password: ''
  }
  const SignUpSchema = Yup.object().shape({
    mailid: Yup
      .string()
      .email('Please enter a valid email id')
      .required('Please enter a email id'),
    password: Yup
      .string()
      .required('Password is required'),
  });

  return (
    <Formik initialValues={initialValues} validationSchema={SignUpSchema} >
      {({ errors, touched, validateOnChange, setFieldError, setFieldTouched, handleSubmit, values, isValid, handleChange }) => (
        <ScrollView contentContainerStyle={styles.topContainer}>
          <Image source={require('../assets/websitelogo-header.png')} style={styles.logoImage} />
          <StatusBar barStyle={'light-content'} />
          <Text style={{ fontSize: 24 }}>Welcome Back!</Text>
          <Text>Please enter your account here</Text>
          <View style={styles.formContainer}>
            <View style={styles.inputWrapper}>
              <ImageTextInput image='email' text={'Email'} inputValue={values.mailid} handleChange={handleChange('mailid')} onBlurFunction={() => setFieldTouched('mailid')} />
            </View>
            <Text style={styles.errorTxt}>{touched.mailid && errors.mailid ? errors.mailid : ''}</Text>
            <View style={styles.inputWrapper}>
              <PasswordEyeBox image='lock' text={'Password'} inputValue={values.password} handleChange={handleChange('password')} onBlurFunction={() => setFieldTouched('password')} />
            </View>
            <Text style={styles.errorTxt}>{touched.password && errors.password ? errors.password : ''}</Text>
            <Text style={{ color: '#1babdf', paddingBottom: '40%', textAlign: 'right' }} onPress={() => { navigation.navigate('Forgot Password') }} >Forgot password ?</Text>
            <View style={styles.container}>
              <TouchableOpacity onPress={handleSubmit} title="Submit" style={[styles.submitBtn, { backgroundColor: isValid ? '#1babdf' : '#0004' }]} disabled={!isValid}>
                <Text style={styles.submitBtnTxt}>Log-in</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text>Don't have an account? <Text style={{ color: '#1babdf' }} onPress={() => { navigation.navigate('Sign Up') }}>Sign Up</Text></Text>

        </ScrollView>
      )}

    </Formik>

  );
}