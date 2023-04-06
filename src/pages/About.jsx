import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function About(){
  const navigate=useNavigate();
  return(
    <div>
      <h1>This is About Page</h1>
      <button onClick={()=> navigate('/home')}>Redirect</button>
    </div>
  )
}