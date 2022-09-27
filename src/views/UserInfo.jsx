
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { parseJwt } from "../web-services";

export default function UserInfo(){
    const [token, setToken] = useState();

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