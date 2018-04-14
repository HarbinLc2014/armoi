import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons, Foundation, Entypo, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

class SideMenu extends Component {
  static navigationOptions = {
    headerMode: 'screen',
    headerTitle: 'asdasd'
  }
  navigateToScreen = (route, name) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.setState({ selected: name });
    this.props.navigation.dispatch(navigateAction);
  }
  state= {selected:'home'};
  componentWillMount() {
    this.setState({selected: 'home'});
  }
  render () {
   return (
     <View style={styles.container}>
       <ScrollView>
       <View style={{ justifyContent: 'center', alignItems: 'center', height: 150 }}>
       <TouchableOpacity style={{ alignItems: 'center' }}>
<Image source={require('../../assets/armoilogo2.png')} resizeMode='stretch' style={{ width: 75, height: 70}}/>
<Text style={{ marginTop: 20, textAlign: 'center', marginBottom: 20 }}>Armoi</Text>
       </TouchableOpacity>
       </View>
           <TouchableOpacity style={{ flexDirection: 'row', marginTop: 15, backgroundColor: this.state.selected==='home'? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0)', height: 70, alignItems: 'center' }} onPress={this.navigateToScreen('hpage','home')}>
              <FontAwesome name="home" size={20} color='#000000' style={{ marginLeft: 15, marginRight: 30 }}/>
             <Text style={styles.navItemStyle}>
               Home
             </Text>
           </TouchableOpacity>
           <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: this.state.selected==='shopcart'? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0)', height: 70, alignItems: 'center' }} onPress={this.navigateToScreen('shopcart', 'shopcart')}>
               <Foundation name="shopping-cart" size={20} color='#000000' style={{ marginLeft: 15, marginRight: 30 }}/>
              <Text>
                ShopCart
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: this.state.selected==='setting'? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0)', height: 70, alignItems: 'center' }} onPress={this.navigateToScreen('shopcart', 'setting')}>
                <FontAwesome name="cog" size={20} color='#000000' style={{ marginLeft: 15, marginRight: 30 }}/>
               <Text>
                 Settings
               </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', backgroundColor:  this.state.selected==='preference'? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0)', height: 70, alignItems: 'center' }} onPress={this.navigateToScreen('shopcart', 'preference')}>
                 <Foundation name="social-myspace" size={20} color='#000000' style={{ marginLeft: 15, marginRight: 30 }}/>
                <Text>
                  Preference
                </Text>
            </TouchableOpacity>
        </ScrollView>
      </View>
   );
 }
}

const styles = {
  container: {
    paddingTop: 20,
    flex: 1
  },
  navItemStyle: {
    fontSize: 15,
    color: '#000000'
  },
  navSectionStyle: {
    backgroundColor: 'lightgrey'
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  footerContainer: {
    padding: 20,
    backgroundColor: 'lightgrey'
  }
}
SideMenu.propTypes = {
  navigation: PropTypes.object
};


export default SideMenu;
