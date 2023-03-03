import './home.css';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Footer from '../../components/footer/Footer';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [posts, setPosts] = useState([]);

  //for fetching posts
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('/posts');
      console.log(res);
    };
    fetchPosts();
  }, []); //empty array to fire this useEffect just at the beginning
  return (
    <div className='home'>
      <Header />
      <Posts />
      <Footer />
    </div>
  );
}

export default Home;
