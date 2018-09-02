import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';

class SearchList extends Component {
  render() {
    return (
      <View>
      <Text> sss </Text>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(SearchList);
