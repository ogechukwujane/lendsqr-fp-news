import React, {FC} from 'react';
import {Image, TextInput, View} from 'react-native';
import {styles} from './styles';

interface ITextParam {
  value: string;
  onChangeText?: (text: string) => void;
}

export const SearchInputComp: FC<ITextParam> = ({value, onChangeText}) => {
  return (
    <View style={styles.inputContainer}>
      <Image
        source={require('../../../assets/icons/search.png')}
        alt=""
        style={styles.search}
      />
      <TextInput
        placeholder={'Search...'}
        placeholderTextColor={'gray'}
        value={value}
        onChangeText={onChangeText}
        style={styles.inputField}
      />
    </View>
  );
};
