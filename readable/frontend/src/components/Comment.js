import React, { Component } from "react";
import { Link } from 'react-router-dom'
import VoteControls from './VoteControls'


function formatDate (timestamp) {
  var date = new Date(timestamp*1000)
  return date.toString()
}

export default function Comment ({ comment }) {
  return (
      <Link to={`/${comment.category}/${comment.id}`}>
        <div key={comment.id} className="comment">
          <div className="comment-author">{comment.author}</div>
          <div className="comment-body">{comment.body}</div>
          <div className="comment-score">{comment.voteScore}</div>
          <VoteControls/>
        </div>
      </Link>
  )
}
