import React,{ Component } from 'react';
import { View, Text } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { Button } from 'react-native-elements';
import { Ionicons, Foundation, Entypo } from '@expo/vector-icons';
import Main from './Main';

class MyHomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({tintColor}) => (
      <Foundation name="social-myspace" size={30} color={tintColor} />
    ),
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="DrawerOpen" onPress={()=> this.props.navigation.navigate('DrawerOpen')} />
      </View>
    );
  }
}

class AnotherScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Notification',
    drawerIcon: ({tintColor}) => (
      <Foundation name="social-myspace" size={30} color={tintColor} />
    ),
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="NotificationDrawerOpen" onPress={()=> this.props.navigation.navigate('DrawerOpen')} />
      </View>
    );
  }
}

const Drawer = DrawerNavigator(
    {
        Home:{
            screen:MyHomeScreen,
        },
        Left:{
            screen:AnotherScreen
        }
    },
    {
        drawerWidth:250,
        drawerPosition:'left',
    }
);
export default class DrawerPage extends Component {
    render() {
        return(
            <Drawer />
        );
    }
}
