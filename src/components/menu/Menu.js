import React, { Component } from 'react';
import { View, StyleSheet, ListView, Animated, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';

import MenuItems from './items/MenuItems';

import styles from './styles';

const { width, height } = Dimensions.get('window');

class Menu extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
        <View style={{height}}>
          <View style={styles.container}>
              <View style={{ flex: 1 }}>
                <MenuItems />
              </View>
          </View>
        </View>
    );
  }
}
export default Menu;
