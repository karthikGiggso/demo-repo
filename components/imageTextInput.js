import { View, TextInput, Image } from 'react-native';
import { styles } from '../styles/styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default ImageTextInput = ({ image, text, inputValue, handleChange, onBlurFunction }) => {

  return (
    <View style={styles.textInputcontainer}>
      <MaterialCommunityIcons name={image} size={22} color="#232323" style={styles.textInputimage} />
      <TextInput
        style={styles.textInputWithImage}
        placeholder={text}
        value={inputValue}
        onChangeText={handleChange}
        onBlur={onBlurFunction}
      />
    </View>
  );
};