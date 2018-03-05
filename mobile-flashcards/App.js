import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NewDeckView from './components/NewDeckView';
import DeckListView from './components/DeckListView';
import IndividualDeckView from './components/IndividualDeckView';
import { black, white } from './utils/colors'
import NewQuestionView from './components/NewQuestionView';
import QuizView from './components/QuizView';
import { setLocalNotification } from './utils/helpers'


import { TabNavigator, StackNavigator } from 'react-navigation'

const Tabs = TabNavigator({
  Decks: {
    screen: DeckListView,
    navigationOptions: {
      tabBarLabel: 'Decks'
    },
  },
  NewDeck: {
    screen: NewDeckView,
    navigationOptions: {
      tabBarLabel: 'New Deck'
    },
  }
});

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  IndividualDeckView: {
    screen: IndividualDeckView,
    navigationOptions: {
      title: 'UdaciCards',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: black,
      }
    }
  },
  NewQuestionView: {
    screen: NewQuestionView,
  },
  QuizView: {
    screen: QuizView,
  }

})


export default class App extends React.Component {

  componentDidMount() {
    setLocalNotification();

  }

  render() {
    return (
      <View style={{flex: 1}}>
        <MainNavigator style={{backgroundColor:'#fff'}}/>
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
