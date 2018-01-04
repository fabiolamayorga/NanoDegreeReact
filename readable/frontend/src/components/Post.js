import React, { Component } from "react";
import { Route } from 'react-router-dom'


function formatDate (timestamp) {
  var date = new Date(timestamp*1000)
  return date.toString()
}

export default function Post ({ post }) {
  return (
      <div key={post.id} className="post">
        <div className="post-author">{post.author}</div>
        <div className="post-category">{post.category}</div>
        <div className="post-date">{formatDate(post.timestamp)}</div>
        <div className="post-body">{post.body}</div>
      </div>

  )
}
