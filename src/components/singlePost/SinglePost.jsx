import React, { useContext, useEffect, useState } from 'react';
import './singlepost.css';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Context } from '../../context/Context';

function SinglePost() {
  let location = useLocation();
  const idPath = location.pathname.split('/')[2];
  const [post, setPost] = useState({});
  const PF = 'http://localhost:5000/images/';
  const { user } = useContext(Context);

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get('/posts/' + idPath);
      console.log(res);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [idPath]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace('/');
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title: title,
        desc: desc,
      });
      // window.location.reload();
      setUpdateMode(false);
    } catch (err) {}
  };
  return (
    <div className='container'>
      <div className='singlePost'>
        <div className='singlePostWrapper'>
          {post.photo && (
            <img
              src={PF + post.photo}
              alt='post cover image'
              className='singlePostImg'
            />
          )}
          {updateMode ? (
            <input
              type='text'
              value={title}
              className='singlePostTitleInput'
              onChange={(e) => setTitle(e.target.value)}
            />
          ) : (
            <h1 className='singlePostTitle'>{title}</h1>
          )}
          {post.username === user?.username && (
            <div className='singlePostEdit'>
              <i
                className='singlePostIcon fa-solid fa-file-pen'
                onClick={() => setUpdateMode(true)}
              ></i>
              <i
                className='singlePostIcon fa-solid fa-trash'
                onClick={handleDelete}
              ></i>
            </div>
          )}
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
          {updateMode ? (
            <textarea
              className='singlePostDescInput'
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          ) : (
            <div className='singlePostDesc'>{desc}</div>
          )}
          {updateMode && (
            <button className='singlePostButton' onClick={handleUpdate}>
              Update
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
