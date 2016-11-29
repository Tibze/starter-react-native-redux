import React, { Component, PropTypes } from 'react';
import Drawer from 'react-native-drawer';
import Menu from '../components/menu/Menu';
import {Actions, DefaultRenderer} from 'react-native-router-flux';

export default class extends Component {
    render(){
        const state = this.props.navigationState;
        const children = state.children;
        return (
            <Drawer
                ref="navigation"
                open={state.open}
                onOpen={()=>Actions.refresh({key:state.key, open: true})}
                onClose={()=>Actions.refresh({key:state.key, open: false})}
                type="displace"
                content={<Menu />}
                tapToClose={true}
                openDrawerOffset={100}
                panCloseMask={0.5}
                closedDrawerOffset={0}
                tweenDuration={150}
                >
                <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
            </Drawer>
        );
    }
}