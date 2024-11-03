import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, View} from 'react-native';
import {INavSetting} from '../../../navigation/type';

export const SplashScreen = () => {
  const naviagtion = useNavigation<INavSetting>();

  useEffect(() => {
    const timeout = setTimeout(() => {
      naviagtion.navigate('AuthStack', {screen: 'Signup'});
    }, 3000);
    return () => clearTimeout(timeout);
  });

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../../../assets/icons/white-logo.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#04c768',
  },
  logo: {
    width: 70,
    height: 70,
    objectFit: 'contain',
  },
});
