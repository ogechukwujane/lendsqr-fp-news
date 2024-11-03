import React from 'react';
import {Image, Text, View} from 'react-native';
import {ButtonComp, TextInputComp} from '../../../components';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {INavSetting} from '../../../navigation/type';

export const Login = ({}) => {
  const navigation = useNavigation<INavSetting>();
  return (
    <View style={styles.container}>
      <Image
        style={styles.bg}
        source={require('../../../../assets/icons/bg.jpg')}
        blurRadius={1}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Log in</Text>
        <View style={styles.form}>
          <View style={styles.grid}>
            <TextInputComp value={''} placeholder="Email" />
            <ButtonComp text="Continue" />
          </View>
          <Text style={styles.paragraph}>or</Text>
          <View style={styles.row}>
            <View style={styles.button}>
              <View style={styles.iconWrap}>
                <Image
                  style={styles.image}
                  source={require('../../../../assets/icons/google.png')}
                />
              </View>
              <Text style={styles.buttonText}>Continue with Google</Text>
            </View>
          </View>
          <Text style={styles.paragraph}>
            Don't have an account?{' '}
            <Text
              style={styles.span}
              onPress={() =>
                navigation.navigate('AuthStack', {screen: 'Signup'})
              }>
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};
