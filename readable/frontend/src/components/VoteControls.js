import React, { Component } from "react"
import { Route } from 'react-router-dom'
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ThumbDown from 'material-ui/svg-icons/action/thumb-down';
import {CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


export default function VoteControls ({ id , clickUpVote,clickDownVote, isPost }) {
  return (
      <CardActions className="voteControls">
        <span>Vote:</span>
        <ThumbUp onClick = {() => clickUpVote(isPost, id)}/>
        <ThumbDown onClick = {() => clickDownVote(isPost, id)}/>
      </CardActions>

  )
}
