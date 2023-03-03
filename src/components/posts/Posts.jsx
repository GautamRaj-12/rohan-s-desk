import React from 'react'
import Post from "../post/Post"
import './posts.css'

function posts() {
  return (
    <div className="posts">
      <h2 className="text-center">Blogs</h2> 
      <div className="container postContainer">    
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default posts
