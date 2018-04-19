import React, {Component} from 'react';
import Toast from 'react-native-root-toast';

class MyToast extends Component{
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }

    componentDidMount() {
        setTimeout(() => this.setState({
            visible: true
        }), 2000); // show toast after 2s

    };

    render() {
        return <Toast
            visible={this.state.visible}
            shadow={true}
            animation={true}
            hideOnPress={true}
            position={Toast.positions.CENTER}
        >This is a message</Toast>;
    }
}

export default MyToast;
