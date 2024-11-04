import React from 'react';
import {StyleSheet, View} from 'react-native';

export const Navbar = () => {
  return (
    <View style={styles.container}></View>
  );
};


export const styles = StyleSheet.create({
  container: {
    height: 96,
    width: 100,
    justifyContent: 'flex-end',
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
  },
  logo: {
    width: 131,
    height: 56,
    objectFit: 'contain',
  },
});
