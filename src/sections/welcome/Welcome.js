import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { Actions } from 'react-native-router-flux';

import { View, Animated, Dimensions, StyleSheet, Text, TextInput, Image, StatusBar } from 'react-native';
import Drawer from 'react-native-drawer'

import Button from '../../components/common/Button';

import { setNickname } from '../../components/users/usersActions';

import Settings from '../settings/Settings';

import styles from './styles'

const { width, height } = Dimensions.get('window');

class Welcome extends Component {
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
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text>Welcome</Text>
        </View>
        </View>
    );
  }
}

Welcome.propTypes = {

};

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setNickname: (nickname) => {
      dispatch(setNickname(nickname));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
