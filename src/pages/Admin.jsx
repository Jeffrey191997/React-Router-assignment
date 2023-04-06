import { useNavigate } from "react-router-dom";
import '../App.css'
export default function Admin({Login}){
    const navigate=useNavigate();
    return(
        <div>
            <img src="assets/Jeff.jpg" />
            <h1>This is Admin Page</h1>
            <button onClick={()=>
            {{
            Login(0);
            navigate('/home')}}}>Logout</button>
        </div>
    )
}