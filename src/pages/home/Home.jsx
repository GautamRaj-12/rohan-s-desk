import './home.css';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Footer from '../../components/footer/Footer';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation(); //directly accessing search property

  //for fetching posts
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('/posts' + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <div className='home'>
      <Header />
      <Posts posts={posts} />
      <Footer />
    </div>
  );
}

export default Home;
