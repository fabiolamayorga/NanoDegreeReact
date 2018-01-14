import { combineReducers } from 'redux'

import {
	GET_CATEGORIES,
	GET_ALL_POSTS,
	GET_POST_COMMENT,
	SET_FILTER,
	GET_CATEGORY_POST,
	UP_VOTE
}from '../actions'

function categories (state = {}, action){
	switch (action.type) {
      case GET_CATEGORIES:
        return [ ...action.categories ]
      default:
        return state
    }
}

function posts (state = {}, action){
	switch (action.type) {
      case GET_ALL_POSTS:
        return [ ...action.posts ]
			case UP_VOTE:
				action.post.voteScore += 1
				return state.map(post => {
					return post.id === action.post.id ? action.post : post
				})
      default:
        return state
    }
}

function postComments (state = {}, action) {
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
				return [...state, action.filter]
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

function upVotePost(state = {}, action) {
	switch (action.type) {

			default:
				return state
		}
}

export default combineReducers({
  categories,
	posts,
	postComments
})
