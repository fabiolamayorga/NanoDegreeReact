import { combineReducers } from 'redux'

import {
	GET_CATEGORIES
}from '../actions'

function categories (state = {}, action){
	console.log('action',action);
	switch (action.type) {
      case GET_CATEGORIES:
        return [ ...state, ...action.categories ]
      default:
        return state
    }
}

export default combineReducers({
  categories
})
