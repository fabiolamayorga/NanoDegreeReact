import React, { Component } from 'react';
import './../App.css';
import { connect } from 'react-redux'
import {
  setFilter,
  getCategoryPosts,
  getAllPosts,
  getAllCategories,
  getAllPostComments,
  upVotePost} from '../actions'
import Root from './Root'
import Category from './Category'
import PostView from './PostView'

import { Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'



class App extends Component {

  state = {
    categories: null,
    posts: null,
    comments: null,
    filter: 'All',
    showComments : false
  }



  onSelectCategory = (selectedCategory) => {
    this.props.setFilter(selectedCategory)
  }

  filterCategoryPost = (selectedCategory) => {
    this.props.getPostByCategory(selectedCategory)
  }

  toggleShowAllComments = (postId) => {
    this.props.getAllComments(postId)
  }


  clickUpVote = (isPost, id) => {
    console.log('clicking')
    //if (isPost){
      this.props.upVotePost(id)
    //}else {
      //this.props.upVoteComment(id)
    //}
  }

  render() {
    const {categories, posts, filter, postComments} = this.props

    return (
      <div className="container">
        <Route exact path='/' render={() => (
            <div>
              <Root
                filter=""
                categories={categories}
                posts={posts}
                onSelectCategory={this.onSelectCategory}
                clickUpVote = {this.clickUpVote}
                />
            </div>

        )}/>

      <Route exact path="/:category" render={ ({ match }) => {
          return (
            <div>
              <Category
                filter={match.params.category}
                posts={posts}
              />

            </div>
          )
        }} />


      <Route exact path="/:category/:postId" render= { ({ match }) => { //Renders Post View
        //console.log(this.props)

            return(
              <div>
                <PostView
                  posts={posts}
                  postId={match.params.postId}
                  toggleShowAllComments={this.toggleShowAllComments}
                  postComments={postComments}
                  clickUpVote = {this.clickUpVote}
                  />
              </div>
            )
        }} />


      </div>

    )
  }
}


function mapStateToProps (state) {
  let categories = state.categories
  let posts = state.posts
  let comments = state.comments
  //let filter = state.filter
  //console.log(comments);
  //console.log(posts)
  return {
      ...state

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: (data) => dispatch(getAllCategories()),
    getPosts: (data) => dispatch(getAllPosts()),
    getAllComments: (postId) => dispatch(getAllPostComments(postId)),
    //setFilter: (filter) => dispatch(setFilter(filter)),
    getPostByCategory: (category) => dispatch(getCategoryPosts(category)),
    upVotePost: (id) => dispatch(upVotePost(id))
  }

}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))
