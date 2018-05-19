import React, { Component } from 'react';
import { AppLoading, Asset, Font, Expo } from 'expo';
import { ScrollView, View, Text, Image, ActivityIndicator, PickerIOS } from 'react-native';

const product = [
{
  name: "swisse women's ultivite tablets",
  pricelist: {"30粒装":19.99, "60粒装":36.95, "120粒装":69.95},
  description: "Swisse Women’s Ultivite is a premium quality formula containing 50 vitamins, minerals, antioxidants and herbs tailored for women to help provide support during stress and assist with energy production, stamina and vitality. Swisse Women’s Ultivite has been formulated based on scientific evidence to provide nutritional support for a busy, stressful lifestyle.",
  src: require('../assets/Product/swissewomentablets.png')
},

];
const images = [
    require('../assets/Product/swissewomentablets.png')
    ];
    function cacheImages(images) {
      return images.map(image => {
        if (typeof image === 'string') {
          return Image.prefetch(image);
        } else {
          return Asset.fromModule(image).downloadAsync();
        }
      });
    }
class Collection extends Component {
  state = { appIsReady: false, size: "30粒装", amount: "1" };
  async _loadAssetsAsync() {
    const imageAssets = cacheImages(images);
    await Promise.all([...imageAssets]);
    this.setState({appIsReady: true});
  }
  componentWillMount(){
   this._loadAssetsAsync();
    console.log(product);
  }
  render() {
    const { size, appIsReady, amount } = this.state;
    if (!this.state.appIsReady) {
      return (
        <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color='rgba(0,0,0,0.6)' />
        </View>
      );
    }
    return (
      <ScrollView contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
      <Image source={product[0].src} style={{ width: 300, height: 400 }} />
      <Text style={{ fontSize: 20, color: '#000', textAlign: 'center', fontWeight: 'bold', margin: 15 }}>{product[0].name}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 100 }}>
        <PickerIOS
        selectedValue={this.state.size}
        style={{ height: 60, width: 100 }}
        itemStyle={{ fontSize: 20, color: '#000', textAlign: 'center', fontWeight: 'bold', width: 100, height: 60 }}
        onValueChange={(itemValue, itemIndex) => this.setState({size: itemValue})}>
          <PickerIOS.Item label="30粒装" value="30粒装" />
          <PickerIOS.Item label="60粒装" value="60粒装" />
          <PickerIOS.Item label="120粒装" value="120粒装" />
        </PickerIOS>
        <PickerIOS
        selectedValue={this.state.amount}
        style={{ height: 60, width: 100 }}
        itemStyle={{ fontSize: 20, color: '#000', textAlign: 'center', fontWeight: 'bold', width: 100, height: 60 }}
        onValueChange={(itemValue, itemIndex) => this.setState({amount: itemValue})}>
          <PickerIOS.Item label="1件" value="1" />
          <PickerIOS.Item label="2件" value="2" />
          <PickerIOS.Item label="3件" value="3" />
          <PickerIOS.Item label="4件" value="4" />
          <PickerIOS.Item label="5件" value="5" />
        </PickerIOS>

      </View>
      <Text style={{ fontSize: 20, color: '#000', textAlign: 'center', fontWeight: 'bold', marginBottom: 30 }}>${product[0].pricelist[this.state.size]} * {this.state.amount}  =  ${product[0].pricelist[this.state.size]*this.state.amount}</Text>
      <Text style={{ fontSize: 15, color: '#000', textAlign: 'center', marginBottom: 30 }}>{product[0].description}</Text>
    </ScrollView>
    );
  }
}

export default Collection;
