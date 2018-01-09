import { combineReducers } from 'redux'

import {
	GET_CATEGORIES,
	GET_ALL_POSTS,
	GET_POST_COMMENT,
	SET_FILTER,
	GET_CATEGORY_POST
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
	//console.log('action',action);
	switch (action.type) {
      case GET_ALL_POSTS:
        return [ ...state, ...action.posts ]
      default:
        return state
    }
}

function postComments (state = {}, action) {
	console.log('action', action)
	switch (action.type) {
      case GET_POST_COMMENT:
        return [ ...action.comments ]
      default:
        return state
    }
}

function filter (state = {}, action) {
	switch (action.type) {
			case SET_FILTER:
				return action.filter
			default:
				return state
		}
}

function postByCategory(state = {}, action) {
	//console.log('action', action)
	switch (action.type) {
			case GET_CATEGORY_POST:
			return [ ...action.postsByCategory ]
			default:
				return state
		}
}

export default combineReducers({
  categories,
	posts,
	postComments,
	filter,
	postByCategory
})
