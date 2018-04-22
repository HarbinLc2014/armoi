import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Dimensions, Image} from 'react-native';
import Swiper from 'react-native-swiper';

const SCREEN_WIDTH= Dimensions.get('window').width;
const SCREEN_HEIGHT= Dimensions.get('window').height;

class MyBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banners: [{id:1},{id:2},{id:3},{id:4}],
      quicks: [{id:'cao'},{id:'ni'},{id:'da'},{id:'ye'}],
      status: false,
    }
  }
  componentDidMount() {

  }
  async refresh() {
    this.setState({
      list: [],
      quick: []
    })
  }
  render() {
    return(
      <View>
      {this.state.banners.length===1 && <TouchableOpacity
      onPress={()=> this.onPressRow(this.state.banners[0])}>
      <Image style={{
        width: SCREEN_WIDTH, height: 100
      }} source={require('../../assets/armoilogo.png')} resizeMode="contain" resizeMethod="scale"
      />
      </TouchableOpacity>
      }
      {this.state.banners.length>1 && <View
        style={{ height: 100 }}>
        <Swiper autoplay={true} >
          {this.state.banners.map((item, index) => <View key={index}>
            <Image resizeMode="cover" resizeMethod="scale"
              source={require('../../assets/armoilogo.png')}
              style={{ width: SCREEN_WIDTH, height: 100 }}
            />
          </View>)
          }
        </Swiper>
        </View>}
        {this.state.quicks.length > 0 &&
          <View style={{ flexDirection: 'row', backgroundColor: '#fff', marginLeft: 12, marginRight: 12, marginTop: -15, marginBottom: 15, borderRadius: 10, borderWidth: 0.5, borderColor: '#d1d1d1', height: 100, width: SCREEN_WIDTH-24 }} >
            {this.state.quicks.map((item, index) => <TouchableOpacity key={index} style={{ flexDirection: 'column', width: (SCREEN_WIDTH-24)/4, height: 100, justifyContent: 'center', alignItems: 'center' }}>
            <Image resizeMode="cover" resizeMethod="scale"
              source={require('../../assets/armoilogo2.png')}
              style={{ width: 60, height: 60 }}
            />
            <Text>{item.id}</Text>
          </TouchableOpacity>)
        }
          </View>
        }
      </View>
      );
    }
}

export default MyBanner;
