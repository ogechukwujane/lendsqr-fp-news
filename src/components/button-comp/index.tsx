import React, {FC} from 'react';
import {Pressable, Text} from 'react-native';
import {styles} from './styles';

interface IButtonComp {
  text?: string;
  onPress?: () => void;
}

export const ButtonComp: FC<IButtonComp> = ({onPress, text}) => {
  return (
    <Pressable style={styles.inputContainer} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};
