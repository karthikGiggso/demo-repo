import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from './components/loginForm';
import SignUp from './components/signUp';
import ForgotPassword from './components/forgotPassword';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginForm} />
      <Stack.Screen name="Sign Up" component={SignUp} />
      <Stack.Screen name="Forgot Password" component={ForgotPassword} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
