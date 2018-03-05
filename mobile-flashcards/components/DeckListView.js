import React, { Component } from 'react'
import { StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity, FlatList} from 'react-native'
import TextButton from './TextButton';
import Input from './Input';
import { getDecks } from '../utils/api';
import IndividualDeckView from './IndividualDeckView'


class DeckListView extends Component {

  state = {
    decks: '',
  }

  componentDidMount = () => {
    getDecks()
    .then((decks)=> this.setState({decks}));
    //this.updateDataFromApi();
  }

  updateDataFromApi = () => {
    getDecks()
    .then((decks)=> this.setState({decks}));

    this.props.navigation.navigate(
        'IndividualDeckView',
        { deckId: deck.id,
          updateDataFromApi: this.updateDataFromApi()
        }
      )
  }

  renderItem = (item) => {
    //(deck) =>{
      const deck = item.item;
      //console.log(deck);
      return (
        <View style={styles.decksList} id={deck.id}>
          <TouchableOpacity onPress={this.updateDataFromApi}>
            <Text style={{fontSize: 40, textAlign: 'center'}}>{deck.title}</Text>
            <Text style={{textAlign: 'center'}}>{(deck.cards).length} cards</Text>
          </TouchableOpacity>
        </View>
      )
    //}
  }


  render(){
    const decks = this.state.decks;
    console.log(decks);
    return (
      <View style={styles.container}>
        {!!decks &&
          <FlatList
            data={decks}
            renderItem={this.renderItem}
            />
        }
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
  },

  decksList: {
    padding: 30,
    borderBottomColor: '#000',
    borderBottomWidth: 1,

  },


})

export default DeckListView;
