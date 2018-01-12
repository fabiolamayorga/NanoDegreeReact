import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Post from './Post'


export default function Category ({ filter, posts, onSelectCategory }) {
  let filteredPosts = {}

  if(posts.length > 0){
    filteredPosts = posts.filter(p => p.category === filter)
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



/*import React, { Component } from 'react';
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

export default Category*/
