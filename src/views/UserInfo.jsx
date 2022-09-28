
import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { parseJwt } from "../web-services";

export default function UserInfo(){
    const [token, setToken] = useState();

    // useNavigate
    const navigate = useNavigate()

    // Function for logout

    function logout(){
        localStorage.removeItem("token");
        navigate("/")
    }

    useEffect(()=>{
        let t = localStorage.getItem("token");
        setToken(t);

    },[localStorage.getItem("token")])

    if(!token){
        return (
            <div>
                <Link to="/login">Login</Link> |  
                <Link to="register"> Register</Link>
            </div>
        ); 
    }
    let payload = parseJwt(token); 
    return (
        <div>
            <p>Logged in as {payload.username}</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

/*

export default function UserInfo(props){
    if(!props.token){
        return (
            <div>
                <Link to="/login">Login</Link> |  
                <Link to="register"> Register</Link>
            </div>
        ); 
    }
    let payload = parseJwt(props.token); 
    return (
        <div>
            <p>Logged in as {payload.username}</p>
        </div>
    );
}

*/