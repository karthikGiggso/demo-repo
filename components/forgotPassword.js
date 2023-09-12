import { Text, View, StatusBar, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImageTextInput from '../components/imageTextInput'
import PasswordEyeBox from './passwordEyeBox';
import { styles } from '../styles/styles';
import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default ForgotPassword = () => {

  const initialValues = {
    mailid: ''
  }
  const SignUpSchema = Yup.object().shape({
    mailid: Yup
      .string()
      .email('Please enter a valid email id')
      .required('Please enter a email id'),
  });
  return (
    <Formik initialValues={initialValues} validationSchema={SignUpSchema} >
      {({ errors, touched, validateOnChange, setFieldError, setFieldTouched, handleSubmit, values, isValid, handleChange }) => (
        <ScrollView contentContainerStyle={styles.topContainer}>
          <Image source={require('../assets/websitelogo-header.png')} style={styles.logoImage} />
          <StatusBar barStyle={'light-content'} />
          <Text style={{ fontSize: 24 }}>No worries stay calm!</Text>
          <Text>Please enter your mailid to get OTP</Text>
          <View style={[styles.formContainer, { paddingBottom: '70%' }]}>
            <View style={styles.inputWrapper}>
              <ImageTextInput image='email' text={'Email'} inputValue={values.mailid} handleChange={handleChange('mailid')} onBlurFunction={() => setFieldTouched('mailid')} />
            </View>
            <Text style={styles.errorTxt}>{touched.mailid && errors.mailid ? errors.mailid : ''}</Text>
          </View>
          <View>
            <TouchableOpacity onPress={handleSubmit} title="Submit" style={[styles.submitBtn, { backgroundColor: isValid ? '#1babdf' : '#0004' }]} disabled={!isValid}>
              <Text style={styles.submitBtnTxt}>Get OTP</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}

    </Formik>

  );
}

