import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#ffffff',
  },
  bg: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    objectFit: 'cover',
  },
  contentContainer: {
    width: '100%',
    gap: 30,
    padding: 15,
    paddingTop: 100,
  },
  title: {
    fontSize: 32,
    fontWeight: 700,
    color: 'black',
    textAlign: 'center',
  },
  form: {
    width: '100%',
    gap: 24,
    paddingHorizontal: 15,
    paddingVertical: 40,
    borderRadius: 10,
    backgroundColor: '#00000010',
  },
  grid: {
    gap: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  button: {
    flex: 1,
    height: 46,
    gap: 8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  iconWrap: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 20,
    height: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 600,
    color: 'white',
  },
  paragraph: {
    fontSize: 14,
    fontWeight: 400,
    color: 'black',
    textAlign: 'center',
  },
  span: {
    fontWeight: 700,
    color: '#00da62',
  },
});
