import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {RootStackParamList} from '../../navigation';
import {createStyle} from './style';

const Login = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Home'>>();
  const style = createStyle();
  return (
    <View style={style.mainContainer}>
      <TouchableOpacity
        style={style.buttonContainer}
        onPress={() => {
          navigation?.goBack();
        }}>
        <Text>{'home'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
