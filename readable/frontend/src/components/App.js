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
import CategorieDropdown from './CategorieDropdown'


class App extends Component {

  state = {
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


  clickUpVote = (isPost, id) => {//TODO cambiarlo a upVote and downVote Post
    console.log('clicking')
    if (isPost){
      this.props.upVotePost(id, true)
    }else {
      //this.props.upVoteComment(id)
    }
  }

  clickDownVote = (isPost, id) => {
    if (isPost){
      this.props.upVotePost(id, false)
    }else {
      //this.props.upVoteComment(id)
    }
  }

  addPost = (values) => {

  }


  render() {
    const {categories, posts, filter, postComments} = this.props

    return (
      <div className="container">
        {categories.length > 0 && (
          <CategorieDropdown categories={categories}/>
        )}

        <Route exact path='/' render={() => (
            <div>
              <Root
                filter=""
                categories={categories}
                posts={posts}
                clickUpVote = {this.clickUpVote}
                clickDownVote = {this.clickDownVote}
                />
            </div>

        )}/>

      <Route exact path="/:category" render={ ({ match }) => {
          return (
            <div>
              <Category
                filter={match.params.category}
                categories={categories}
                posts={posts}
              />

            </div>
          )
        }} />


      <Route exact path="/:category/:postId" render= { ({ match }) => { //Renders Post View
            return(
              <div>
                <PostView
                  posts={posts}
                  categories={categories}
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
  console.log(state)
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
    upVotePost: (id, isUpvote) => dispatch(upVotePost(id, isUpvote))
  }

}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))
