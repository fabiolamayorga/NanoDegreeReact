import React, { Component } from "react";
import { Link } from 'react-router-dom'
import VoteControls from './VoteControls'


function formatDate (timestamp) {
  var date = new Date(timestamp*1000)
  return date.toString()
}

export default function Post ({ post }) {
  return (
      <Link to={`/post/${post.id}`}>
        <div key={post.id} className="post">
          <div className="post-author">{post.author}</div>
          <div className="post-category">{post.category}</div>
          <div className="post-body">{post.body}</div>
          <div className="post-score">{post.voteScore}</div>
          <VoteControls/>
        </div>
      </Link>
  )
}
