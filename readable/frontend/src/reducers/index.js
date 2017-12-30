import { combineReducers } from 'redux'

import {
	GET_CATEGORIES,
	GET_ALL_POSTS
}from '../actions'

function categories (state = {}, action){
	//console.log('action',action);
	switch (action.type) {
      case GET_CATEGORIES:
        return [ ...state, ...action.categories ]
      default:
        return state
    }
}

function posts (state = {}, action){
	console.log('action',action);
	switch (action.type) {
      case GET_ALL_POSTS:
        return [ ...state, ...action.posts ]
      default:
        return state
    }
}

export default combineReducers({
  categories,
	posts
})
