import React from 'react'
import Post from './Post'
import CategorieDropdown from './CategorieDropdown'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

export default function Root ({ categories, posts, onSelectCategory }) {
  if (posts.length === 0) {
    return <p>There aren't posts</p>
  }

  return (
    <div>
      {categories.length > 0 && (
        <CategorieDropdown categories={categories} onSelectCategory={onSelectCategory}/>
      )}
      <div className='posts-container'>
        {posts.length > 0 && (
          posts.map(post => (
            <Post post={post} key={post.id}/>

          ))
        )}
      </div>
    </div>
  )
}
