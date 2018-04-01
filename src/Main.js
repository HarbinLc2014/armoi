import React, { Component } from 'react';
import { View, Text, Platform, Image, LayoutAnimation, TouchableOpacity, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { Ionicons, Foundation, Entypo } from '@expo/vector-icons';
import { Header, Item, Icon, Input} from 'native-base';

const SCREEN_WIDTH= Dimensions.get('window').width;
const SCREEN_HEIGHT= Dimensions.get('window').height;

class Main extends Component {
       state = { onSearch: false, isCross: true, isCancel: false, searchContent:'' };
  static navigationOptions = (props) => {
   const { navigation } = props;
   const { params } = navigation.state;
   const { navigate } = navigation;
  const cross = params? <Entypo name="cross" size={20} color='#fff' style={{ marginTop: 2, marginRight: 5 }} /> : <Text />;
  const cancel =  <TouchableOpacity style={{ marginTop: 17, marginRight: 10, marginLeft: 10 }}><Text style={{ fontSize: 15, color: '#007aff' }}>Cancel</Text></TouchableOpacity>;
   return {
     title: params? params.otherParam : 'Screen',
     tabBarIcon: ({ tintColor }) => {
         return <Foundation name="social-myspace" size={30} color={tintColor} />;
       },
       headerTitle:
<Header
style={{ width: SCREEN_WIDTH-60, height: 64, marginBottom: 18, backgroundColor:'rgba(0,0,0,0)' }}
searchBar
rounded>
        <Item>
            <Icon name="ios-search" onPress={()=> console.log('asdasd')} />
            <Input
            autoCorrect={false}
              placeholder="Search"
              onFocus={()=>    { LayoutAnimation.easeInEaseOut(); navigation.state.params.onFocus(); }}
              onBlur={()=> {LayoutAnimation.easeInEaseOut(); navigation.state.params.onBlur();}}
              value={params? params.searchParam : ''}
              onChangeText={searchParam=>navigation.state.params.changeText(searchParam)}
            />
            {params? params.Enter? <Entypo name="cross" size={20} color='#000' style={{ marginTop: 2, marginRight: 5 }} onPress={()=> {LayoutAnimation.easeInEaseOut(); navigation.state.params.onClear();}}/> : null : null}
          </Item>
          {params? <TouchableOpacity onPress={()=> {LayoutAnimation.easeInEaseOut(); navigation.state.params.onBlur();}}><Text style={{ fontSize: 15, color: '#007aff', marginTop: 17, marginRight: 10, marginLeft: 10 }}>{params.focusParam}</Text></TouchableOpacity> : null}
          </Header>,
          headerRight:
            <TouchableOpacity style={{ marginRight: 10 }} onPress={()=> navigation.state.params.onGo() }><Text style={{ fontSize: 17, color: '#007aff' }}>Go</Text></TouchableOpacity>,
     headerStyle: {
       marginTop: Platform.OS === 'android' ? 24 : 0,
       height: 45
     },

    headerLeft:
<Image source={require('../assets/armoilogo2.png')} resizeMode='stretch' style={{ width: 30, wi:'ss', height: 30, marginTop: 2, marginBottom: 5, marginLeft: 5 }} />

   };
 }
 componentWillMount() {
   this.props.navigation.setParams({
        onFocus: this.onSearch.bind(this),
        onBlur: this.offSearch.bind(this),
        changeText: this.changeText.bind(this),
        onGo: this.search.bind(this),
        onClear: this.clear.bind(this)
    });
 }
 clear() {
      this.props.navigation.setParams({ searchParam: '', Enter: false });
 }
 search() {
   console.log(this.state.searchContent);
 }
 renderCancel() {
   return <TouchableOpacity style={{ marginTop: 17, marginRight: 10, marginLeft: 10 }}><Text style={{ fontSize: 15, color: '#007aff' }}>Cancel</Text></TouchableOpacity>
 }
 changeText =(text)=> {
   this.props.navigation.setParams({ searchParam: text });
   if(text===''){
     this.props.navigation.setParams({ Enter: false });
   }
   else {
     this.props.navigation.setParams({ Enter: true });
   }
   this.setState({searchContent: text});
 }
 onSearch() {
   this.props.navigation.setParams({focusParam: 'Cancel'});
   this.setState({ onSearch: true, isCancel: true });
 }
 offSearch() {
   this.props.navigation.setParams({focusParam: ''});
   this.setState({ onSearch: false });
 }
  render() {
    return (
      <View style={{ flex: 1 }}>
      <Text>{this.state.onSearch? 'Searching' : 'not Searching'}</Text>
      <Button
  title="Update the title"
  onPress={() => this.props.navigation.setParams({focusParam: ''})}
/>
      </View>
    );
  }
}

export default Main;
