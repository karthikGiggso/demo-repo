import { StyleSheet, Text, View,StatusBar, TextInput, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import {useNavigation } from '@react-navigation/native';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;

const ImageTextInput = ({image,text,inputValue,handleChange}) => {

  return (

    <View style={styles.textInputcontainer}>
      <Image
        source={image}
        style={styles.textInputimage}
      />
      <TextInput
        style={styles.textInputWithImage}
        placeholder={text}
        value={inputValue}
        onChangeText={handleChange}
      />
    </View>
  );
};

export default LoginForm = (props)=> {
  const navigation = useNavigation();
  const initialValues={
    mailid:'',
    password:''
  }

  const SignUpSchema =Yup.object().shape({
    mailid: Yup.string().email().required(),
    password:Yup.string().required(),
  });

  return (    
  <Formik initialValues={initialValues} validationSchema={SignUpSchema}>
  {({errors,touched,validateOnChange,setFieldError,setFieldTouched,handleSubmit,values,handleChange})=>(
    <ScrollView contentContainerStyle={styles.topContainer}>
      <Image source={require('../assets/websitelogo-header.png')} style={styles.logoImage}/>
      <StatusBar barStyle={'light-content'} />
      <Text style={{fontSize:24}}>Welcome Back!</Text>
      <Text>Please enter your account here</Text>
      <View style={styles.formContainer}>
        <View style={styles.inputWrapper}>
          <ImageTextInput image={require('../assets/mail-icon-15.jpg')} text={'Email'} inputValue={values.mailid} handleChange={handleChange('mailid')}/>
        </View>
        <Text style={styles.errorTxt}>{errors.mailid ? errors.mailid:''}</Text>
        <View style={styles.inputWrapper}>
          <ImageTextInput image={require('../assets/password-icon-14.jpg')} text={'Password'} inputValue={values.password} handleChange={handleChange('password')}/>
        </View>
        <Text style={styles.errorTxt}>{errors.password ? errors.password:''}</Text>
        <Text style={{color:'#1babdf',paddingBottom:'40%',textAlign:'right'}} onPress={() => {navigation.navigate('Forgot Password')}}>Forgot password ?</Text> 
        <View style={styles.container}>
            <TouchableOpacity style={styles.submitBtn}>
              <Text style={styles.submitBtnTxt}>Log-in</Text>
            </TouchableOpacity>
        </View>
      </View>
      <Text>Don't have an account? <Text style={{color:'#1babdf'}} onPress={() => {navigation.navigate('Sign Up')}}>Sign Up</Text></Text>
           
    </ScrollView>
  )}

    </Formik>

  );
}

const styles = StyleSheet.create({
  logoImage:{
    flex:1,
    justifyContent: 'center',
    height: 100,
    width: imageWidth,
    margin:50
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 15,
  },
  formContainer:{
    padding:20,
    borderRadius: 20,
    width:'100%',
    justifyContent:'center',
  },
  topContainer:{
    padding:40,
    borderRadius: 20,
    width:'100%',
    alignItems: 'center',
    justifyContent:'center',
  },
  title:{
    color:'#16213E',
    fontSize: 26,
    fontWeight: '400',
    marginBottom:15,
  },
  inputWrapper: {
    marginBottom: 0,
  },
  inputStyle:{
    borderColor: '#16213E',
    borderWidth:1,
    borderRadius:10,
    padding:10,
  },
  errorTxt:{
    fontSize: 12,
    color: '#FF0D10',
    marginBottom:'5%'
  },
  submitBtn:{
    backgroundColor: '#1babdf',
    padding:10,
    borderRadius:15,
    justifyContent: 'center',
    width:'100%'
  },
  submitBtnTxt:{
    color:'#fff',
    textAlign:'center',
    fontSize:18,
    fontWeight:'700',
  },
  textInputcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
  },
  textInputimage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  textInputWithImage: {
    flex: 1,
  },
});
