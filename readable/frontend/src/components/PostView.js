import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Post from './Post'
import Comment from './Comment'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import FlatButton from 'material-ui/FlatButton'

class PostView extends Component {

  render() {
    const {posts,
      postId,
      postComments,
      toggleShowAllComments,
      clickUpVote} = this.props
    let selectedPost = []

    if(posts.length > 0){
      selectedPost = posts.filter(p => p.id == postId)
    }

    return (
      <div className='post-container'>

        {selectedPost.length > 0 && (
          selectedPost.map(post => (
            <Post post={post} key={post.id} clickUpVote={clickUpVote} />
          ))
        )}
        <FlatButton onClick={() => toggleShowAllComments(postId)}>Show Comments</FlatButton>
        <div className="comments-container">
            {postComments.length > 0 && (
              postComments.map(comment => (
                <Comment comment={comment} key={comment.id} />
              ))
            )}
        </div>

      </div>
    )
  }
}
export default PostView
