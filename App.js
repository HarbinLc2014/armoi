import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import { Ionicons, Foundation, Entypo, FontAwesome, MaterialCommunityIcons, MaterialIcons, Feather } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Login from './src/Login';
import ShopCart from './src/ShopCart';
import Main from './src/Main';
import Size from './src/Size';
import ProductList from './src/ProductList';
import Recommend from './src/Recommend';
import Setting from './src/Setting';
import Product from './src/Product';
import Search from './src/SearchPage';
import Menu from './src/Menu';
import ListItem from './src/component/ListItem';
import ClothDetail from './src/component/ClothDetail';
import SideMenu from './src/component/SideMenu';

export default class App extends React.Component {
  render() {
    const MainNavigator = createBottomTabNavigator(
      {
    //  login: {screen: Login},
      main: {
                  screen: createBottomTabNavigator({
                    home: { screen: createStackNavigator({
                      homepage: {
                        screen: createDrawerNavigator({
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
                    Search: { screen: createStackNavigator({
                      fittingMain: { screen: Search },
                      product: { screen: Product },
                      ListItem: {screen: ListItem}
                    }),
                    navigationOptions: {
                      tabBarIcon: ({tintColor}) => (
                        <Feather name="search" size={30} color={tintColor} />
                      ),
                      title: 'Search'
                    }
                   },
                   Catergorize: { screen: createStackNavigator({
                     catergorize: { screen: ProductList },
                     product: { screen: Product }
                   }),
                   navigationOptions: {
                     tabBarIcon: ({tintColor}) => (
                       <Feather name="grid" size={30} color={tintColor} />
                     ),
                     title: 'Collection'
                   }
                  },
                    Explore: { screen: createStackNavigator({
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
      <Provider store={createStore(reducers)}>
      <MainNavigator />
      </Provider>
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
