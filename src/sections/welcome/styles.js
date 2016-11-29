import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(145,223,209,1)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInputContainer: {
    marginTop: 10
  },
  textInput: {
      height: 34,
      width: 200,
      backgroundColor: 'white',
      borderRadius: 10,
      paddingLeft: 10
  },
  buttonContainer: {
  	marginTop: 20
  },
  background: {
  	position: 'absolute',
  	zIndex: -1
  }
});

export default styles;
