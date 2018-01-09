import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Post from './Post'


export default function PostView ({ posts, postId, toggleShowAllComments}) {
  let selectedPost = []

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
      <span onClick={(event => toggleShowAllComments(postId))} >Show Comments</span>

    </div>
  )
}
