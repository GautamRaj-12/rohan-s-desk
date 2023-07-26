import React from 'react';
import './post.css';
import postImage from '../../assets/post-test.jpg';
import { Link } from 'react-router-dom';

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
        <Link to={`/post/${post._id}`}>
          <span className='postTitle'>{post.title}</span>
        </Link>
        <span className='postDate'>
          {new Date(post.createdAt).toDateString()}
        </span>
        <p className='postDesc'>{post.desc}</p>
      </div>
    </div>
  );
}

export default Post;
