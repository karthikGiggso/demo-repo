import { View, TextInput, Image, Pressable} from 'react-native';
import { styles } from '../styles/styles';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default PasswordEyeBox = ({image,text,inputValue,handleChange,onBlurFunction}) => {

    const [visibility, setVisibility] = useState(true);
    const [rightIcon,setRightIcon] = useState('eye-off');

    const handleVisibility = () =>{
      if(rightIcon === 'eye-off'){
        setRightIcon('eye')
        setVisibility(false)
      }else{
        setRightIcon('eye-off')
        setVisibility(true)
      }
      return {
        visibility,
        rightIcon,
        handleVisibility
      };
    }
    
    return (
      <View style={styles.textInputcontainer}>
        <MaterialCommunityIcons name={image} size={22} color="#232323" style={styles.textInputimage}/>
        <TextInput
          style={styles.textInputWithImage}
          placeholder={text}
          value={inputValue}
          onChangeText={handleChange}
          secureTextEntry={visibility}
          onBlur= {onBlurFunction}
        />
        <Pressable onPress={handleVisibility}>
          <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
        </Pressable>
      </View>
    );
  };