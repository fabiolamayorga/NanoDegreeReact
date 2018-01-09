import React, { Component } from "react"
import { Route } from 'react-router-dom'
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ThumbDown from 'material-ui/svg-icons/action/thumb-down';


export default function VoteControls () {
  return (
      <div className="voteControls">
        <div className>
          <ThumbUp/>
        </div>
        <div className>
          <ThumbDown/>
        </div>
      </div>

  )
}