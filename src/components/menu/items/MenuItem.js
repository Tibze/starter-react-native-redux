import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { View, Text, TouchableOpacity } from 'react-native';

import { Actions } from 'react-native-router-flux';

import styles from '../styles';

class MenuItem extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);

  }

  componentWillReceiveProps(nextProps, nextState) {

  }

  _ClickItem(callback) {

    callback();
    setTimeout(() => {
      Actions.refresh({key: 'drawer', open: value => !value });
    },30);

  }

  render(data) {

    return (
      <TouchableOpacity onPress={() => {  this._ClickItem(this.props.action) }}>
        <View style={styles.item}>
          <Text style={styles.text}>{this.props.label}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

MenuItem.propTypes = {
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(null,mapDispatchToProps)(MenuItem);
