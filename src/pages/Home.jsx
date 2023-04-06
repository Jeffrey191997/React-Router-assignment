import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function Home({Login}){
  const navigate=useNavigate();
  return(
    <div>
      <h1>This is Home Page</h1>
      <button onClick={()=>
        {{
          Login(1);
          navigate('/admin')}}}>Login</button>
    </div>
  )
}