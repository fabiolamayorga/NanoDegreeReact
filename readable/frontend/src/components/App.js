import React, { Component } from 'react';
import './../App.css';
import { connect } from 'react-redux'
import { getAllCategories,
  getAllPosts,
  getAllPostComments,
  setFilter,
  getCategoryPosts } from '../actions'
import Root from './Root'
import Category from './Category'
import PostView from './PostView'

import { Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'



class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    categories: null,
    posts: null,
    comments: null,
    filter: 'All',
    showComments : false
  }

  getInitialState = () => {
    this.props.getCategories();
    this.props.getPosts();
  }


  getPostsComments = (postId) => { //retrieve all the comments
    const {posts} = this.props
    let comments

    //if (posts.length > 0) {
      //comments = posts.map(post => (
        this.props.getAllComments(postId)
      //))
    //}
  }

  toggleShowAllComments = (postId) => {
    //console.log('postId',postId)
    let isActive = this.state.showComments ? false : true
    this.setState({
      showComments:isActive
    })



    if (this.state.showComments){
      this.getPostsComments(postId)
    }
  }

  onSelectCategory = (selectedCategory) => {
    this.props.setFilter(selectedCategory)
  }

  filterCategoryPost = (selectedCategory) => {
    this.props.getPostByCategory(selectedCategory)
  }

  componentDidMount() {
    this.getInitialState()
    //this.getPostsComments();

    //console.log('posts',this.props);
  }



  render() {
    const {categories, posts, filter, comments} = this.props
    //let comments

    if (posts.length > 0){
      //posts.map(post => (
        //this.getPostsComments(post.id)
      //))
    }

    console.log(this.props)
    //console.log('comments',comments)

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
          this.onSelectCategory(match.params.category)
          return (
            <div>
              <Category
                filter={match.params.category}
                posts={posts}
              />

            </div>
          )
        }} />


      <Route exact path="/post/:postId" render= { ({ match }) => { //Renders Post View
            return(
              <div>
                <PostView
                  posts={posts}
                  postId= {match.params.postId}
                  toggleShowAllComments= {this.toggleShowAllComments}
                  />
              </div>
            )
        }} />


      </div>

    )
  }
}


function mapStateToProps (state) {
  console.log('state', state)
  let categories = state.categories
  let posts = state.posts
  let comments = state.comments
  let filter = state.filter
  let postsByCategory = state.postsByCategory
  return {
    categories,
    posts,
    filter,
    postsByCategory,
    comments

    //...state
    /*categories,
    posts: posts.map((post) => ({
      post,
      comments: this.props.getAllCategories(post.id)
    }))*/
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: (data) => dispatch(getAllCategories()),
    getPosts: (data) => dispatch(getAllPosts()),
    getAllComments: (postId) => dispatch(getAllPostComments(postId)),
    setFilter: (filter) => dispatch(setFilter(filter)),
    getPostByCategory: (category) => dispatch(getCategoryPosts(category))
  }

}


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))
