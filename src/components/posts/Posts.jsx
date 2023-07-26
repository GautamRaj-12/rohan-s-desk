import React from 'react';
import Post from '../post/Post';
import './posts.css';

function posts({ posts }) {
  return (
    <div className='posts'>
      <h2 className='text-center'>Blogs</h2>
      <div className='container postContainer'>
        {posts.map((p) => (
          <Post post={p} />
        ))}
      </div>
    </div>
  );
}

export default posts;
