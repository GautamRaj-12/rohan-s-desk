import React, { useEffect, useState } from 'react';
import './singlepost.css';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

function SinglePost() {
  let location = useLocation();
  const idPath = location.pathname.split('/')[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get('/posts/' + idPath);
      console.log(res);
      setPost(res.data);
    };
    getPost();
  }, [idPath]);
  return (
    <div className='container'>
      <div className='singlePost'>
        <div className='singlePostWrapper'>
          {post.photo && (
            <img
              src={post.photo}
              alt='post cover image'
              className='singlePostImg'
            />
          )}
          <h1 className='singlePostTitle'>{post.title}</h1>
          <div className='singlePostEdit'>
            <i className='singlePostIcon fa-solid fa-file-pen'></i>
            <i className='singlePostIcon fa-solid fa-trash'></i>
          </div>
          <div className='singlePostInfo'>
            <span className='singlePostAuthor'>
              <small>
                Author:{' '}
                <Link to={`/?user=${post.username}`} className='link'>
                  <strong>{post.username}</strong>
                </Link>
              </small>
            </span>
            <span className='singlePostDate'>
              <small>{new Date(post.createdAt).toDateString()}</small>
            </span>
          </div>
          <div className='singlePostDesc'>{post.desc}</div>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
