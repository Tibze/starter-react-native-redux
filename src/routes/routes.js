import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';
import { StyleSheet, Modal } from 'react-native';

import Welcome from '../sections/welcome/Welcome';
import Settings from '../sections/settings/Settings';
import Drawer from '../containers/Drawer';

import hamburger from '../assets/hamburger.png';

import AppStyles from '../styles/appStyles';

let style = StyleSheet.create({
        tabBarStyle: {
            borderBottomWidth : 0,
            borderColor    : 'transparent',
            backgroundColor: 'rgba(255,255,255,0.75)',
            opacity        : 1
        },
        backButtonStyle: {
          tintColor: 'black'
        }
    });

const scenes = Actions.create(
<Scene key='main'>
	<Scene key="drawer" component={Drawer} open={false} >
  	<Scene key='root' navigationBarStyle={style.tabBarStyle} leftButtonIconStyle = { style.backButtonStyle } drawerImage={hamburger}>
      <Scene key='welcome' component={Welcome} type='replace' initial={true} title={'Welcome'}/>
      <Scene key='settings' component={Settings} type='replace' title={'Settings'} />
    </Scene>
  </Scene>
</Scene>
);

export default scenes;
