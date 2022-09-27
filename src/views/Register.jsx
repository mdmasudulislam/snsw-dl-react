import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { register } from "../web-services"

export default function Register(){

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const navigate = useNavigate(); 

    function submit(){
        register(username,password)
            .then(r=> {
                alert("User Registered"); 
                navigate("/login")
            })
            .catch(e => alert(e.message)); 
    }

    return (
        <div>
            <h2>Register Today</h2>
            <div>
                <label>Username</label>
                <input type="text" value={username} onChange={e=>setUsername(e.target.value)} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
            </div>
            <button onClick={submit}>Register</button>
        </div>
    )

}