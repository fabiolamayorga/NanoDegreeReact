import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NewDeckView from './components/NewDeckView';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <NewDeckView />
      </View>
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
