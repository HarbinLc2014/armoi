import React, { Component } from 'react';
import { Text, View, FlatList, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import blackmores from '../Blackmores.js';
import swisse from '../Info.js';

const SCREEN_WIDTH= Dimensions.get('window').width;
const SCREEN_HEIGHT= Dimensions.get('window').height;

class ListItem extends Component {
  render() {
    var arr = [];
    var arr2 = [];
    var products1 = swisse.products;
    var products2 = blackmores.products;
    arr2 = this.props.content;
    arr2.forEach((y)=>{
    products1.forEach((x)=>{
      if(x.character.indexOf(y) > -1){
        arr.push(x);
      }
    });
  });
    return (
      <ScrollView style={{ height: SCREEN_HEIGHT }}>
      <FlatList ref="flatlist"
        style={{ backgroundColor: '#ffffff', width: 2*SCREEN_WIDTH/3, borderRightWidth:0.75, borderRightColor: '#d1d1d1'  }}
        renderItem={({ item, index })=>
             <TouchableOpacity onPress={()=>this.props.navigation.navigate("product",{name: item.name, src: item.src, pricelist: item.pricelist, description: item.description})}>
             <View style={{ height: 150, width: SCREEN_WIDTH*2/3, justifyContent: 'center', alignItems: 'center', borderBottomWidth: 0.4, borderBottomColor: '#ffffff' }}>
              <Text>{item.name}</Text>
             </View>
             </TouchableOpacity>
         }
      data={arr}
      />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(ListItem);
