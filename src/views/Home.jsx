import { useState } from "react";
import { Link, Outlet } from "react-router-dom"
import UserInfo from "./UserInfo"

export default function Home(){


    const [token,setToken]  = useState(localStorage.getItem("token")); 

    return (
        <div>
            <div style={{border:"1px solid green",padding:5,margin:5}}>
                <Link to={"/"}>Home</Link> 
                <Link to={"/tickets"}>Tickets</Link> 
                <Link to={"/tickets/create"}>Submit Ticket</Link> 
             
                <UserInfo token={token}/>
            </div>
            
            <Outlet context={[token,setToken]}/>
        </div>
  )
}