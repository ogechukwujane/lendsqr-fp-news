import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 60,
    gap: 20,
    paddingHorizontal: 15,
  },
  flex: {
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 500,
    color: '#000000',
  },
  iconWrap: {
    width: 30,
    height: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#ebecf0',
  },
  imgae: {
    width: 15,
    height: 15,
    objectFit: 'contain',
  },
  content: {
    flex: 1,
    gap: 20,
    backgroundColor: '#ffffff',
  },
  tagButton: {
    height: 24,
    color: 'black',
    textAlign: 'center',
    paddingHorizontal: 10,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00da62',
  },
  tagText: {
    fontSize: 12,
    fontWeight: 500,
    color: 'white',
  },
  imageContainer: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eeeee4',
  },
  col: {
    gap: 10,
    flexDirection: 'column',
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
    color: '#000000',
  },
  paragraph: {
    fontSize: 14,
    fontWeight: 400,
    color: '#000000',
  },
  label: {
    fontSize: 14,
    fontWeight: 400,
    color: 'gray',
  },
  boldLabel: {
    fontWeight: 700,
  },
});
