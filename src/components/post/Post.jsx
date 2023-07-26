import React from 'react';
import './post.css';
import postImage from '../../assets/post-test.jpg';

function Post({ post }) {
  return (
    <div className='post'>
      {post.photo && <img src={post.photo} alt='' className='postImg' />}
      <div className='postInfo'>
        <div className='postCats'>
          {post.categories.map((c) => (
            <span className='postCat'>{c.name}</span>
          ))}
        </div>
        <span className='postTitle'>{post.title}</span>
        <span className='postDate'>
          {new Date(post.createdAt).toDateString()}
        </span>
        <p className='postDesc'>{post.desc}</p>
      </div>
    </div>
  );
}

export default Post;
