import {useHeaderHeight} from '@react-navigation/elements';
import React, {ReactElement} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {heightPixel} from './pxToDpConvert';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    backgroundColor: 'transparent',
  },
});

type ICustomKeyboardAvoidingView = {
  children: ReactElement | ReactElement[];
};
export const CustomKeyboardAvoidingView: React.FC<
  ICustomKeyboardAvoidingView
> = ({children}) => {
  const height = useHeaderHeight();
  const flex = {flex: 1};
  return (
    <KeyboardAvoidingView
      style={styles.container}
      contentContainerStyle={flex}
      behavior={Platform.select({ios: 'padding', android: undefined})}
      keyboardVerticalOffset={Platform.select({
        ios: 0,
        android: height + heightPixel(100),
      })}
      enabled={true}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CustomKeyboardAvoidingView;
