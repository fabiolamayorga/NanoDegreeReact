import * as api from '../utils/api-server/categories';
// const url = `${process.env.REACT_APP_BACKEND}/categories`

const headers = {'Authorization': 'whatever-you-want'}

/*Const for Categories*/
export const GET_CATEGORIES = 'GET_CATEGORIES'

/*Consts for Post Actions*/
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const GET_POST = 'GET_POST'

/*Consts for comments*/
export const ADD_POST_COMMENT = 'ADD_POST_COMMENT'
export const EDIT_POST_COMMENT = 'EDIT_POST_COMMENT'
export const DELETE_POST_COMMENT = 'DELETE_POST_COMMENT'
export const GET_POST_COMMENT = 'GET_POST_COMMENT'

function getCategories({categories}){
console.log({categories})
 return {
    type: GET_CATEGORIES,
    categories,
  }
}

export const getAllCategories = () => (
  fetch(
    `${api}/categories`,
    { headers })
    .then(res => res.json())
    .then(data => data.categories)
);



export function addPost ({post}) {
  return {
    type: ADD_POST,
    post,
  }
}

export function editPost ({post}) {
  return {
    type: EDIT_POST,
    post,
  }
}

export function deletePost ({post}) {
  return {
    type: DELETE_POST,
    post,
  }
}
