import React, { PropTypes } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const styles = StyleSheet.create({
  button: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    color: '#413D3D'
  },
  rounded: {
    backgroundColor: '#EFEFEF',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 12,
    marginRight: 5
  },
  userPicture: {
    height: 30,
    width: 30
  }
});

const Button = ({ action, text, rounded, user = null }) => {
  return (
    <TouchableOpacity style={[styles.button, rounded && styles.rounded]} onPress={() => { action(); }}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  rounded: PropTypes.bool,
  text: PropTypes.string,
  action: PropTypes.func,
  user: PropTypes.object
};

export default Button;
