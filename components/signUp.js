import { StyleSheet, Text, View,StatusBar, TextInput, TouchableOpacity,Dimensions, Image, ScrollView } from 'react-native';
import {useNavigation } from '@react-navigation/native';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;

export default SignUp = ({route})=> {
  return (
    <ScrollView contentContainerStyle={styles.topContainer}>
      <Image source={require('../assets/websitelogo-header.png')} style={styles.logoImage}/>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Sign up</Text>
        <View style={styles.inputWrapper}>
          <TextInput style={styles.inputStyle} placeholder='Full Name '/>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput style={styles.inputStyle} placeholder='Email Address'/>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput style={styles.inputStyle} placeholder='Password'/>
        </View>        
        <View style={styles.inputWrapper}>
          <TextInput style={styles.inputStyle} placeholder='Confirm Password'/>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput style={styles.inputStyle} placeholder='Mobile No'/>
        </View>
        <View style={{ flexDirection:"row" }}>
          <TouchableOpacity style={styles.submitBtn}>
            <Text style={styles.submitBtnTxt}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
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
