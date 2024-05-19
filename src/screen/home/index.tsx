import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity, View} from 'react-native';
import {RootStackParamList} from '../../navigation';
import {StackNavigationProp} from '@react-navigation/stack';
import {createStyle} from './style';
const Home = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Home'>>();
  const style = createStyle();
  return (
    <View style={style.mainContainer}>
      <TouchableOpacity
        style={style.buttonContainer}
        onPress={() => {
          console.log('test');
          navigation?.navigate('Login');
        }}>
        <Text>{'home'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
