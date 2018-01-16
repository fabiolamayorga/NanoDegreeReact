import React, { Component } from 'react';
import Post from './Post'
import CategorieDropdown from './CategorieDropdown'
import { Link } from 'react-router-dom'
import AddPostView from './AddPostView'
import sortBy from 'sort-by'


class Root extends Component {
  state = {
      order: 'timestamp'
  }
  selectOrder = (e) => {
      this.setState({
          order: e.target.value
      })
  }

 render (){
   const {categories, posts, clickUpVote, clickDownVote, addPost, editThePost,deleteThePost} = this.props

   return (
     <div className="view-container">
       <label>Sort Posts By: </label>
       <select value={this.state.order} onChange={this.selectOrder}>
            <option value="timestamp">Most Recent</option>
            <option value="voteScore">Popular</option>
        </select>
       <div className='posts-container'>
         {posts.length > 0 && (
           posts.sort(sortBy(this.state.order)).map(post => (
             <Post post={post}
               key={post.id}
               clickUpVote={clickUpVote}
               clickDownVote={clickDownVote}
               addPost={addPost}
               editThePost={editThePost}
               deleteThePost={deleteThePost}/>
           ))
         )}
       </div>
       <AddPostView categories={categories} addPost={addPost}/>

     </div>

   )
 }
}

export default Root
