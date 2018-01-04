//import * as api from '../utils/api-server/categories';
const api = process.env.REACT_APP_BACKEND || 'http://localhost:3001'

const headers = {
  'Authorization': 'whatever-you-want'
}

/*Const for Categories*/
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_CATEGORY_POST = 'GET_CATEGORY_POST'


/*Consts for Post Actions*/
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const GET_POST = 'GET_POST'
export const GET_ALL_POSTS = 'GET_ALL_POSTS'

/*Consts for comments*/
export const ADD_POST_COMMENT = 'ADD_POST_COMMENT'
export const EDIT_POST_COMMENT = 'EDIT_POST_COMMENT'
export const DELETE_POST_COMMENT = 'DELETE_POST_COMMENT'
export const GET_POST_COMMENT = 'GET_POST_COMMENT'

export const SET_FILTER = 'SET_FILTER'


export const getAllCategories = () => dispatch =>(
  fetch(
    `${api}/categories`,
     {headers}
   )
    .then(res => res.json())
    .then(data => dispatch(getCategories(data.categories)),
        	error => console.error('error',error))
);

export const getAllPosts = () => dispatch =>(
  fetch(
    `${api}/posts`,
     {headers}
   )
    .then(res => res.json())
    .then(data => dispatch(getPosts(data)),
        	error => console.error('error',error))
);

export const getAllPostComments = (postId) => dispatch =>(
  fetch(
    `${api}/posts/${postId}/comments`,
    {headers}
  )
  .then(res => res.json())
  .then(data => dispatch(getPostsComments(data)),
        error => console.error('error',error))
);

export const getCategoryPosts = (category) => dispatch => (
  fetch(
    `${api}/${category}/posts`,
    {headers}
  )
  .then(res => res.json())
  .then(data => dispatch(getPostByCategory(data)),
        error => console.error('error',error))
)

export function setFilter (filter){
  return{
    type: SET_FILTER,
    filter
  }
}

function getCategories(categories){
 return {
    type: GET_CATEGORIES,
    categories,
  }
}

function getPosts(posts){
 return {
    type: GET_ALL_POSTS,
    posts,
  }
}


function getPostsComments(comments){
 return {
    type: GET_POST_COMMENT,
    comments,
  }
}

function getPostByCategory(postsByCategory){
  return {
     type: GET_CATEGORY_POST,
     postsByCategory,
   }
}




/*export function addPost ({post}) {
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
}*/
