import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class ListItem extends Component {
  render() {
    return (
      <View>
      <Text>{this.props.content}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(ListItem);
