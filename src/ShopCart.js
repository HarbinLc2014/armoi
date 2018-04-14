import React, { Component } from 'react';
import { View, Text, Platform, Image, LayoutAnimation, TouchableOpacity, Dimensions, ScrollView, Keyboard } from 'react-native';
import { Button } from 'react-native-elements';
import { Ionicons, Foundation, Entypo } from '@expo/vector-icons';
import { Header, Item, Icon, Input} from 'native-base';

const SCREEN_WIDTH= Dimensions.get('window').width;
const SCREEN_HEIGHT= Dimensions.get('window').height;

class ShopCart extends Component {
  static navigationOptions = (props) => {

   const { navigation } = props;
   const { params } = navigation.state;
   const { navigate } = navigation;
   return {
     title: 'Home',
     tabBarIcon: ({ tintColor }) => {
         return <Foundation name="social-myspace" size={30} color={tintColor} />;
       },
       headerTitle: 'My Shopping Cart',
     headerStyle: {
       marginTop: Platform.OS === 'android' ? 24 : 0,
       height: 45
     },

    headerLeft:
      <TouchableOpacity onPress={()=>navigation.state.params.onMenu()}>
      <Image source={require('../assets/armoilogo2.png')} resizeMode='stretch' style={{ width: 35, height: 35, marginTop: 2, marginBottom: 5, marginLeft: 5, marginRight: 9 }}/>
      </TouchableOpacity>

   };
 }
 componentWillMount() {
   this.props.navigation.setParams({
        onMenu: this.onMenu.bind(this)
    });
 }
 onMenu() {
   this.props.navigation.navigate("DrawerOpen");
 }
  render() {
    return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Text style={{ fontSize: 40 }}>This is Shop Cart</Text>
    </View>
  );
  }
}

export default ShopCart;
