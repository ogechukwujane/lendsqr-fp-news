import React, {FC} from 'react';
import {
  InputModeOptions,
  KeyboardTypeOptions,
  Text,
  TextInput,
  View,
} from 'react-native';
import {styles} from './styles';

interface ITextParam {
  value: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  errorMessage?: string;
  label?: string;
  editable?: boolean;
  keyboardType?: KeyboardTypeOptions;
  onPress?: () => void;
  inputMode?: InputModeOptions;
}

export const TextInputComp: FC<ITextParam> = ({
  placeholder,
  value,
  onChangeText,
  errorMessage,
  editable,
  keyboardType,
  label,
  onPress,
  inputMode = 'text',
  ...rest
}) => {
  return (
    <View {...rest} style={styles.inputContainer}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'gray'}
        value={value}
        onChangeText={onChangeText}
        editable={editable}
        keyboardType={keyboardType}
        inputMode={inputMode}
        style={styles.inputField}
      />
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
};
