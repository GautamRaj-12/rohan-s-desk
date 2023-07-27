import React, { useEffect, useState } from 'react';
import Post from '../post/Post';
import './posts.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Posts({ posts }) {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get('/categories');
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className='posts'>
      <h2 className='text-center'>Blogs</h2>
      <div className='browse-category'>
        <span class='browse-category-text'>Browse by Category:</span>
        {cats.map((c) => (
          <span class='category-link'>
            <Link to={`/cats?=${c.name}`} className='link'>
              {c.name}
            </Link>
          </span>
        ))}
      </div>
      <div className='container postContainer'>
        {posts.map((p) => (
          <Post post={p} />
        ))}
      </div>
    </div>
  );
}

export default Posts;
