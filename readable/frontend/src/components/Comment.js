import React, { Component } from "react";
import { Link } from 'react-router-dom'
import VoteControls from './VoteControls'


function formatDate (timestamp) {
  var date = new Date(timestamp*1000)
  return date.toString()
}

export default function Comment ({ comment }) {
  return (
      <div key={comment.id} className="comment">
        <div className="comment-title">Comment Title:{comment.title}</div>
        <div className="comment-author">Comment Author:{comment.author}</div>
        <div className="comment-body">{comment.body}</div>
        <div className="comment-score">Comment Score: {comment.voteScore}</div>
        <VoteControls/>
      </div>
  )
}
