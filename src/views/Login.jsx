import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { loginAsync } from "../web-services";

export default function Login(){

    const [userName,setUserName] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate(); 
    const [token,setToken] = useOutletContext();

    function login(){
     
        loginAsync(userName,password)
            .then(j => {
                setToken(j); 
                navigate("/")
            })
            .catch(e => alert(e.message))
    }

    return(
        <div>
            <h2>Sign In</h2>
            <div>
                <label>Username: </label>
                <input type="text" value={userName} onChange={e=>setUserName(e.target.value)}/>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
            </div>
            <button onClick={login}>Sign in</button>
        </div>
    ); 
}