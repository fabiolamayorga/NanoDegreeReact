import React from 'react'
import Post from './Post'
import CategorieDropdown from './CategorieDropdown'
import { Link } from 'react-router-dom'
import AddPostView from './AddPostView'


export default function Root ({ categories, posts, clickUpVote, clickDownVote }) {
  if ( posts === null) {
    return <p>There aren't posts</p>
  }

  return (
    <div>
      <div className='posts-container'>
        {posts.length > 0 && (
          posts.map(post => (
            <Post post={post} key={post.id} clickUpVote={clickUpVote} clickDownVote={clickDownVote}/>

          ))
        )}
      </div>
      <AddPostView categories={categories}/>

    </div>

  )
}
