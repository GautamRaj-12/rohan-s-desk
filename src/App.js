import NavBar from './components/navbar/NavBar';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Settings from './pages/settings/Settings';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contact from './pages/contact/Contact';

function App() {
  const user = false;
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route
          path='/register'
          element={user ? <Home /> : <Register />}
        ></Route>
        <Route path='/login' element={user ? <Home /> : <Login />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/write' element={user ? <Write /> : <Login />}></Route>
        <Route path='/post/:postID' element={<Single />}></Route>
        <Route path='/settings' element={<Settings />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
