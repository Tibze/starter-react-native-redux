import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { Router } from 'react-native-router-flux';
import configureStore from '../store/configStore';
import scenes from '../routes/routes';

const RouterWithRedux = connect()(Router);

class Root extends Component {
  render() {
    const store = configureStore();

    return (
      <Provider store={store}>
        <RouterWithRedux scenes={scenes} />
      </Provider>
      );
  }
}

export default Root;
