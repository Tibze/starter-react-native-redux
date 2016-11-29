import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, TouchableOpacity } from 'react-native';

import { Actions } from 'react-native-router-flux';

//  Components
import MenuItem from './MenuItem';

class MenuItems extends Component {

  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => { r1 !== r2 }
    });

  }

  componentWillMount() {

    this.state = {

      'dataSource': this.ds.cloneWithRows([{label: 'Welcome', action: Actions.welcome},{label : 'Settings', action: Actions.settings}])

    }

  }

  componentWillReceiveProps(nextProps, nextState) {

  }

  _renderRow(data, sectionId, rowId, highlightRow) {

    return (
        <MenuItem
          id={rowId}
          label={data.label}
          action={data.action}
        />
    );
  }

  render() {

    return (
        <ListView
          enableEmptySections={true}
          automaticallyAdjustContentInsets={false}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
          style={{ marginTop: 50}}
        />
    );
  }

}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuItems);
