import React, { Component } from 'react';
import { View, Text, FlatList, Image, Dimensions, ActivityIndicator, TouchableOpacity, Button } from 'react-native';
import { AppLoading, Asset, Font, Expo } from 'expo';
import FastImage from 'react-native-fast-image';
import blackmores from './Blackmores.js';
import swisse from './Info.js';

const SCREEN_WIDTH= Dimensions.get('window').width;
const SCREEN_HEIGHT= Dimensions.get('window').height;
const images = [
  require('../assets/Blackmores/Acidophilus-Bifidus.png'),
  require('../assets/Blackmores/B12Rapi-melt.png'),
  require('../assets/Blackmores/BilberryEyeSupport.png'),
  require('../assets/Blackmores/BioACEExcell.png'),
  require('../assets/Blackmores/BioC1000mg.png'),
  require('../assets/Blackmores/BioCChewable500mg.png'),
  require('../assets/Blackmores/BioCPowder.png'),
  require('../assets/Blackmores/BioMagnesium.png'),
  require('../assets/Blackmores/BioZinc.png'),
  require('../assets/Blackmores/BrainActive.png'),
  require('../assets/Blackmores/Celery3000.png'),
  require('../assets/Blackmores/CholesterolHealth.png'),
  require('../assets/Blackmores/CodLIverOil.png'),
  require('../assets/Blackmores/Cold-Combat_(60).png'),
  require('../assets/Blackmores/ColonCare.png'),
  require('../assets/Blackmores/ConceiveWellMen(28).jpg'),
  require('../assets/Blackmores/CoQ10150mg.png'),
  require('../assets/Blackmores/CoQ1075mg.png'),
  require('../assets/Blackmores/Cranberry15000.png'),
  require('../assets/Blackmores/CurcuminActiveplusBoswelliathumb.png'),
  require('../assets/Blackmores/DigestiveBitters.png'),
  require('../assets/Blackmores/EchinaceaZinc30.png'),
  require('../assets/Blackmores/Echinacea-Forte-(40).png'),
  require('../assets/Blackmores/EPO-(190).png'),
  require('../assets/Blackmores/Exec-B-(62).png'),
  require('../assets/Blackmores/Fish-Oil-1000-(200).png'),
  require('../assets/Blackmores/Flaxeed-Oil-(100).png'),
  require('../assets/Blackmores/Folate-(60).png'),
  require('../assets/Blackmores/GinkgoBrahmi_40.png'),
  require('../assets/Blackmores/GinkgoForte-(40).png'),
  require('../assets/Blackmores/Glucosamine-1000-Vege-(200).png'),
  require('../assets/Blackmores/GrapeSeedForte-(30).png'),
  require('../assets/Blackmores/iFOlic.png'),
  require('../assets/Blackmores/Insolar-(60).png'),
  require('../assets/Blackmores/Joint-Formula-Advanced-(60).png'),
  require('../assets/Blackmores/Lecithin1200thumb.png'),
  require('../assets/Blackmores/Lutein-Defence-(60).png'),
  require('../assets/Blackmores/Lyp-Sine-(30).png'),
  require('../assets/Blackmores/Macu-Vision-(90).png'),
  require('../assets/Blackmores/Macu-Vision-Plus-(60).png'),
  require('../assets/Blackmores/Magmin-(100).png'),
  require('../assets/Blackmores/Milk-Thistle-(42).png'),
  require('../assets/Blackmores/Natural-E-1000-(100).png'),
  require('../assets/Blackmores/Natural-E-250-(50).png'),
  require('../assets/Blackmores/Natural-E-500IU-(150).png'),
  require('../assets/Blackmores/Odourless-Fish-Oil-(200).png'),
  require('../assets/Blackmores/Odourless-Fish-Oil-Mini-(200).png'),
  require('../assets/Blackmores/Odourless-Garlic-(200).png'),
  require('../assets/Blackmores/Omega-Brain-(60).png'),
  require('../assets/Blackmores/Omega-Daily-(90).png'),
  require('../assets/Blackmores/Omega-Triple-(150).png'),
  require('../assets/Product/swissewomentablets.png'),
  require('../assets/Product/swissewomenpowertablets.png'),
  require('../assets/Product/swissewomenultivite.png'),
  require('../assets/Product/swissewomenultivite2.png'),
  require('../assets/Product/swissepregnancyultivite.png'),
  require('../assets/Product/swissewomenteenageultivite.png'),
  require('../assets/Product/organicvitex.png'),
  require('../assets/Product/iron.png'),
  require('../assets/Product/eveningpromise.png'),
  require('../assets/Product/menopausebalance.png'),
  require('../assets/Product/menultivite.png'),
  require('../assets/Product/menpowerultivite.png'),
  require('../assets/Product/menultivite2.png'),
  require('../assets/Product/menultivite3.png'),
  require('../assets/Product/menteenage.png'),
  require('../assets/Product/prostate.png'),
  require('../assets/Product/bladder.png'),
  require('../assets/Product/grapeseed.png'),
  require('../assets/Product/hairskinnail.png'),
  require('../assets/Product/hairskinnailtab.png'),
  require('../assets/Product/hairwomen.png'),
  require('../assets/Product/hairmen.png'),
  require('../assets/Product/radiantskin.png'),
  require('../assets/Product/ageprotect.png'),
  require('../assets/Product/kidmulti.png'),
  require('../assets/Product/kidprobiotic.png'),
  require('../assets/Product/kidfishoil.png'),
  require('../assets/Product/kidcalcium.png'),
  require('../assets/Product/kidvitaminc.png'),
  require('../assets/Product/kidbraindha.png'),
  require('../assets/Product/kidultivite.png'),
  require('../assets/Product/childfishoil.png'),
  require('../assets/Product/krilloil.png'),
  require('../assets/Product/highkrilloil.png'),
  require('../assets/Product/superkrilloil.png'),
  require('../assets/Product/wildfishoil.png'),
  require('../assets/Product/odwildfishoil.png'),
  require('../assets/Product/highfishoil.png'),
  require('../assets/Product/immune.png'),
  require('../assets/Product/vitaminc.png'),
  require('../assets/Product/ultivitaminc.png'),
  require('../assets/Product/zinc.png'),
  require('../assets/Product/immunehighstrength.png'),
  require('../assets/Product/immunevitaminc.png'),
  require('../assets/Product/energyvitaminb12.png'),
  require('../assets/Product/megab+.png'),
  require('../assets/Product/probiotic.png'),
  require('../assets/Product/ultiprobiotic.png'),
  require('../assets/Product/stableprobiotic.png'),
  require('../assets/Product/milkdigestiondetox.png'),
  require('../assets/Product/digestdetox.png'),
  require('../assets/Product/artichokedigestdetox.png'),
  require('../assets/Product/hungercontrol.png'),
  require('../assets/Product/lecithin.png'),
  require('../assets/Product/relaxsleep.png'),
  require('../assets/Product/highrelaxsleep.png'),
  require('../assets/Product/sleep.png'),
  require('../assets/Product/mood.png'),
  require('../assets/Product/calciumvitamind.png'),
  require('../assets/Product/milkcalcium.png')
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
class ProductList extends Component {
  state = {list:[], appIsReady: false};
  async _loadAssetsAsync() {
    const imageAssets = cacheImages(images);

        await Promise.all([...imageAssets]);
    this.setState({appIsReady: true});
  }
  componentWillMount() {
    this._loadAssetsAsync();
    this.setState({list:blackmores.products});
  }
  render() {
    if (!this.state.appIsReady) {
      return (
        <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color='rgba(0,0,0,0.6)' />
        </View>
      );
    }
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Swisse" onPress={()=>this.setState({list:swisse.products})} />
      <FlatList ref="flatlist"
      style={{ backgroundColor: '#fff' }}
       numColumns={2}
       ListHeaderComponent={
         <View style={{ height: 30 }}>
         </View>
       }
       renderItem={({ item, index })=>
            <TouchableOpacity style={{ marginTop: 35, marginBottom: 35 }}>
            <View style={{ marginTop: index>1?20:0, marginLeft:  index%2===1 ? 10:0 , marginRight:  index % 2 === 0 ? 10:0, justifyContent: 'center', alignItems: 'center', width: SCREEN_WIDTH/2-10, borderRadius: 10, height: SCREEN_WIDTH/2+40, backgroundColor: 'rgba(0,0,0,0)' }}>
            <FastImage source={item.src} resizeMode='contain' style={{ width: SCREEN_WIDTH/2-40, height: SCREEN_WIDTH/2+40, marginTop: 40 }}/>
            <Text style={{ marginTop: 10, fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>{item.name}</Text>
            </View>
            </TouchableOpacity>
        }
       data={this.state.list}
      />
      </View>
    );
  }
}

export default ProductList;
