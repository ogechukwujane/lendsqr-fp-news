import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    height: 46,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    gap: 8,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#eeeee4',
    backgroundColor: 'white',
  },
  search: {
    width: 18,
    height: 18,
    objectFit: 'contain',
    backgroundColor: 'white',
  },
  inputField: {
    width: '100%',
    height: '100%',
    fontSize: 14,
    fontWeight: 400,
  },
});
