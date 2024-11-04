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
  },
  flex: {
    gap: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    flexDirection: 'column',
  },
  header: {
    fontSize: 24,
    fontWeight: 500,
    color: '#000000',
  },
  tagWrap: {
    flexDirection: 'row',
    gap: 10,
    paddingVertical: 5,
  },
  tagContainer: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 15,
  },
  tagButton: {
    height: 30,
    color: 'black',
    textAlign: 'center',
    paddingHorizontal: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00da62',
  },
  inactive: {
    backgroundColor: '#ebecf0',
  },
  tagText: {
    fontSize: 14,
    fontWeight: 500,
    color: 'black',
  },
  content: {
    flex: 1,
    gap: 20,
    paddingHorizontal: 15,
    backgroundColor: '#ffffff',
  },
  grid: {
    backgroundColor: '#ffffff',
  },
  newsCard: {
    width: '100%',
    gap: 10,
    flexDirection: 'row',
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eeeee4',
  },
  col: {
    flex: 1,
    gap: 4,
    paddingVertical: 8,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: '#000000',
  },
  paragraph: {
    fontSize: 14,
    fontWeight: 400,
    color: 'gray',
  },
});
