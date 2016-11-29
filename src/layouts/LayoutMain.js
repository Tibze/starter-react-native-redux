import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { Actions } from 'react-native-router-flux';

import { View, Animated, Dimensions, StyleSheet, Text } from 'react-native';
import Drawer from 'react-native-drawer'

import Settings from '../sections/settings/Settings';

import styles from './styles';

const { width, height } = Dimensions.get('window');

class LayoutMain extends Component {
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
      <Drawer ref={(ref) => this._drawer = ref} type="overlay" content={<Settings />} tapToClose={true} openDrawerOffset={100} closedDrawerOffset={0} panThreshold={.5} tweenHandler={(ratio) => ({main: { opacity:(2-ratio)/2 } })}>
      <View style={ styles.headerBar }></View>
      {this.props.children}
      </Drawer>
    );
  }
}

LayoutMain.propTypes = {

};

const mapStateToProps = (state) => {
  return {
    user: state.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {   
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LayoutMain);
