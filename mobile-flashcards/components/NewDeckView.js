import React, { Component } from 'react'
import { StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity} from 'react-native'
import TextButton from './TextButton';
import Input from './Input';
import { saveDeckTitle } from '../utils/api'


class NewDeckView extends Component {

  addNewDeck = () => {
    console.log('adding deck');
  }

  getDeckTitle = (e) => {
    const title = e.target.value;
    console.log('title',title);
    this.setState({
      title,
    })
  }

  render(){
        console.log(this.state);

    return (
      <View style={styles.container}>
        <Text style={{fontSize: 40}}>
          What is the title of your new deck?
        </Text>
        <Input placeholder={"Deck Title"} onChangeText={(value) => this.setState({title: value})}/>
        <TextButton onPress={this.addNewDeck}>
          Submit
        </TextButton>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
  }
})

export default NewDeckView;
