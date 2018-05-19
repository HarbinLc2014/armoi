import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import { Ionicons, Foundation, Entypo, FontAwesome, MaterialCommunityIcons, MaterialIcons, Feather } from '@expo/vector-icons';
import Login from './src/Login';
import ShopCart from './src/ShopCart';
import Main from './src/Main';
import Size from './src/Size';
import Recommend from './src/Recommend';
import Setting from './src/Setting';
import Collection from './src/Collection';
import Search from './src/SearchPage';
import Menu from './src/Menu';
import ClothDetail from './src/component/ClothDetail';
import SideMenu from './src/component/SideMenu';

export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator(
      {
    //  login: {screen: Login},
      main: {
                  screen: TabNavigator({
                    home: { screen: StackNavigator({
                      homepage: {
                        screen: DrawerNavigator({
                          hpage: {screen: Main, navigationOptions:{
                            drawerIcon: ({tintColor}) => (
                              <FontAwesome name="home" size={20} color={tintColor} />
                            ),
                            drawerLabel: 'Home'
                          }},
                          shopcart: {screen: ShopCart, navigationOptions:{
                            drawerIcon: ({tintColor}) => (
                              <Foundation name="shopping-cart" size={20} color={tintColor} />
                            ),
                            drawerLabel: 'Shopcart'
                          }},
                          settingpage: {screen: Setting, navigationOptions:{
                            drawerIcon: ({tintColor}) => (
                              <FontAwesome name="cog" size={20} color={tintColor} />
                            ),
                            drawerLabel: 'Settings'
                          }},
                          preference: {screen: Main, navigationOptions:{
                            drawerIcon: ({tintColor}) => (
                              <Foundation name="social-myspace" size={20} color={tintColor} />
                            ),
                            drawerLabel: 'Preference'
                          }}
                        },
                        {
                            contentComponent: SideMenu,
                            drawerWidth:225,
                            drawerPosition:'left',
                        }
                      )
                    },
                    Details: { screen: ClothDetail }
                    }),
                    navigationOptions: {
                      tabBarIcon: ({tintColor}) => (
                        <FontAwesome name="home" size={30} color={tintColor} />
                      ),
                      title: 'Home'
                    }
                   },
                    Search: { screen: StackNavigator({
                      fittingMain: { screen: Search }
                    }),
                    navigationOptions: {
                      tabBarIcon: ({tintColor}) => (
                        <Feather name="search" size={30} color={tintColor} />
                      ),
                      title: 'Search'
                    }
                   },
                   Catergorize: { screen: StackNavigator({
                     catergorize: { screen: Collection }
                   }),
                   navigationOptions: {
                     tabBarIcon: ({tintColor}) => (
                       <Feather name="grid" size={30} color={tintColor} />
                     ),
                     title: 'Collection'
                   }
                  },
                    Explore: { screen: StackNavigator({
                      settingMain: { screen: Setting },
                      size: { screen: Size },
                      recommend: { screen: Recommend }
                    }),
                    navigationOptions: {
                      tabBarIcon: ({tintColor}) => (
                        <MaterialIcons name="explore" size={30} color={tintColor} />
                      ),
                      title: 'Explore'
                    }
                   },

                  })
            },

    },
    {
         navigationOptions: {
          tabBarVisible: false
         },
       }
  );
    return (
      <MainNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
