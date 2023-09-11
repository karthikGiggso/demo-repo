import { StyleSheet, Text, View,StatusBar, TextInput, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import {useNavigation } from '@react-navigation/native';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;

const ImageTextInput = ({image,text}) => {
  return (
    <View style={styles.textInputcontainer}>
      <Image
        source={image}
        style={styles.textInputimage}
      />
      <TextInput
        style={styles.textInputWithImage}
        placeholder={text}
      />
    </View>
  );
};

export default LoginForm = (props)=> {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.topContainer}>
      <Image source={require('../assets/websitelogo-header.png')} style={styles.logoImage}/>
      <StatusBar barStyle={'light-content'} />
      <Text style={{fontSize:24}}>Welcome Back!</Text>
      <Text>Please enter your account here</Text>
      <View style={styles.formContainer}>
        <View style={styles.inputWrapper}>
          <ImageTextInput text='Email' image={require('../assets/mail-icon-15.jpg')}/>
        </View>
        <View style={styles.inputWrapper}>
          <ImageTextInput text='Password' image={require('../assets/password-icon-14.jpg')}/>
        </View>
        <Text style={{paddingBottom:'40%',textAlign:'right'}}>Forgot password ?</Text> 
        <View style={styles.container}>
            <TouchableOpacity style={styles.submitBtn}>
              <Text style={styles.submitBtnTxt}>Log-in</Text>
            </TouchableOpacity>
        </View>
      </View>
      <Text>Don't have an account? <Text onPress={() => {navigation.navigate('Sign Up')}}>Sign Up</Text></Text>
           
    </ScrollView>
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
    // alignItems: 'center',
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
    marginBottom: 30,
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
    flexDirection: 'row', // Horizontally align image and text input
    alignItems: 'center', // Vertically center-align the image and text input
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
  },
  textInputimage: {
    width: 20, // Set the desired width for your image
    height: 20, // Set the desired height for your image
    marginRight: 10, // Adjust spacing between image and text input
  },
  textInputWithImage: {
    flex: 1, // Make the TextInput take up the remaining space
    padding: 0, // Remove default padding
  },
});
