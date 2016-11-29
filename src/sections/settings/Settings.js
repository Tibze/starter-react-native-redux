import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { Actions } from 'react-native-router-flux';

import { View, Animated, Dimensions, StyleSheet, Text } from 'react-native';

import Button from '../../components/common/Button';

import { setConnected } from '../../components/users/usersActions';

import styles from './styles'

const { width, height } = Dimensions.get('window');

class Settings extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);

    this.state = {
    };

  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {

    console.log('New Props');
    console.log(nextProps);

  }

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>Settings</Text>
        </View>
    );
  }
}

Settings.propTypes = {

};

const mapStateToProps = (state) => {
  return {
    user: state.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setConnected: (message) => {
      dispatch(setConnected(message));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
