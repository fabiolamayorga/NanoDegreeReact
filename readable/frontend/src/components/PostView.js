/*import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Post from './Post'


export default function PostView ({ posts, postId, toggleShowAllComments}) {
  let selectedPost = []

  if(posts.length > 0){
    selectedPost = posts.filter(p => p.id == postId)
  }

  console.log(this)

  return (
    <div className='post-container'>

      {selectedPost.length > 0 && (
        selectedPost.map(post => (
          <Post post={post} key={post.id}/>
        ))
      )}
      <span onClick={(event => toggleShowAllComments(postId))} >Show Comments</span>

    </div>
  )
}*/


import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Post from './Post'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  getAllPostComments,
} from '../actions'


class PostView extends Component {

  render() {
    const {posts, postId, postComments, toggleShowAllComments} = this.props
    let selectedPost = []

    //console.log('post view',this.props)

    if(posts.length > 0){
      selectedPost = posts.filter(p => p.id == postId)
    }

    return (
      <div className='post-container'>

        {selectedPost.length > 0 && (
          selectedPost.map(post => (
            <Post post={post} key={post.id}/>
          ))
        )}
        <span onClick={() => toggleShowAllComments(postId)}>Show Comments</span>

      </div>
    )
  }
}

function mapStateToProps (state) {
  let postComments = state.comments
  console.log("mapStateToProps POST",state)
  return {
    postComments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //getCategories: (data) => dispatch(getAllCategories()),
    //getPosts: (data) => dispatch(getAllPosts()),
    //getAllComments: (postId) => dispatch(getAllPostComments(postId)),
  }
}


export default PostView
