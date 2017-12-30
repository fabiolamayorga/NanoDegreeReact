import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk';

const logger = store => next => action => {
  //console.group(action.type)
  //console.info('dispatching', action)
  let result = next(action)
  //console.log('next state', store.getState())
  //console.groupEnd(action.type)
  return result
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(ReduxThunk)
  )
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

console.log('store',store)

ReactDOM.render(
  console.log('store',store)

  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
