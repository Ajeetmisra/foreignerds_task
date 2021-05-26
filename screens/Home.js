import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Home = ({navigation}) => {
  return (
    <View style={{size: 50}}>
      <Icon.Button
        name="ios-menu"
        size={25}
        backgroundColor="#009387"
        onPress={() => navigation.openDrawer()}></Icon.Button>
    </View>
  );
};

export default Home;
