import logo from './logo.svg';
import './App.css';
import Profile from './pages/Profile'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Admin from './pages/Admin'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
function App() {
  const [notLogin,Login] = useState(0)
  return (
    <div className='App'>
      
        
        <Routes>
          <Route exact path="/profile/:id" element={<Profile/>}/>
          <Route path='/home' element={<Home Login={Login}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/admin' element={notLogin === 1 && <Admin Login={Login} />}/>
        </Routes>
        <nav>
          <NavLink to={"/home"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
          <NavLink to={'/profile/123'}>Profile</NavLink>
          <NavLink  to={'/admin'}>For Admin</NavLink>
        </nav> 
      
    </div>
    
      
  );
}

export default App;