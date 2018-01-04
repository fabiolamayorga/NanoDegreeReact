/*import React, { Component } from "react";


export default function Post ({ post }) {
  componentDidMount() {
    console.log('es una pruenba')
  }

  return (
    <p>Category</p>
  )
}
*/


import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Post from './Post'


class Category extends Component {

  render() {
    const {filter, posts} = this.props
    let filteredPosts

    if(posts.length > 0){
      filteredPosts = posts.filter(p => p.category == this.props.filter)
    }

    return (
      <div className='posts-container'>
        {filteredPosts.length > 0 && (
          filteredPosts.map(post => (
            <Post post={post} key={post.id}/>
          ))
        )}
      </div>
    )
  }
}

export default Category
