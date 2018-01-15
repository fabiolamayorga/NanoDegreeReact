import React, { Component } from "react";
import { Link } from 'react-router-dom'
import VoteControls from './VoteControls'
import {Card, CardTitle, CardText, CardActions} from 'material-ui/Card';


function formatDate (timestamp) {
  var date = new Date(timestamp*1000)
  return date.toString()
}

export default function Post ({ post , clickUpVote, clickDownVote }) {
  return (
        <Card key={post.id} className="post">
          <Link to={`/${post.category}/${post.id}`}>
            <CardTitle className="post-title">Post Title: {post.title}</CardTitle>
          </Link>
          <CardText>
            <div className="post-author">Author: {post.author}</div>
            <div className="post-category">Category: {post.category}</div>
            <div className="post-time">Date: {formatDate(post.timestamp)}</div>
            <div className="post-body">{post.body}</div>
            <div className="post-score">Score: {post.voteScore}</div>
          </CardText>
          <VoteControls postId={post.id} clickUpVote={clickUpVote} clickDownVote={clickDownVote}/>
        </Card>
  )
}
