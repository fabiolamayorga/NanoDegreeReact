import React, { Component } from 'react';
import './../App.css';
import { connect } from 'react-redux'
import {
  setFilter,
  getCategoryPosts,
  getAllPosts,
  getAllCategories} from '../actions'
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

  getInitialState = () => {

  }


  onSelectCategory = (selectedCategory) => {
    this.props.setFilter(selectedCategory)
  }

  filterCategoryPost = (selectedCategory) => {
    this.props.getPostByCategory(selectedCategory)
  }

  componentDidMount() {
    //this.props.getCategories();
    //this.props.getPosts();
  }

  render() {
    const {categories, posts, filter, comments} = this.props

    console.log(this.props)
    return (
      <div className="container">
        <Route exact path='/' render={() => (
            <div>
              <Root
                filter=""
                categories={categories}
                posts={posts}
                onSelectCategory={this.onSelectCategory}
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
                  />
              </div>
            )
        }} />


      </div>

    )
  }
}


function mapStateToProps (state) {
  console.log('mapStateToProps APP', state)
  let categories = state.categories
  let posts = state.posts
  let comments = state.comments
  let filter = state.filter
  //console.log(comments);
  //console.log(posts)
  return {
    /*categories,
    posts,
    filter,
    comments*/

    //...state
    categories,
    filter,
    posts,
    comments

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: (data) => dispatch(getAllCategories()),
    getPosts: (data) => dispatch(getAllPosts()),
    //getAllComments: (postId) => dispatch(getAllPostComments(postId)),
    //setFilter: (filter) => dispatch(setFilter(filter)),
    getPostByCategory: (category) => dispatch(getCategoryPosts(category))
  }

}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))
