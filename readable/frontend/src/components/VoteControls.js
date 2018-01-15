import React, { Component } from "react"
import { Route } from 'react-router-dom'
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ThumbDown from 'material-ui/svg-icons/action/thumb-down';
import {CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


export default function VoteControls ({ postId , clickUpVote,clickDownVote }) {
  return (
      <CardActions className="voteControls">
        <span>Vote:</span>
        <FlatButton>
          <ThumbUp onClick = {() => clickUpVote(true, postId)}/>
        </FlatButton>
        <FlatButton>
          <ThumbDown onClick = {() => clickDownVote(true, postId)}/>
        </FlatButton>
      </CardActions>

  )
}
