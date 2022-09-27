import { useEffect,useState } from "react";
import { Outlet } from "react-router-dom";
import { fetchAllTickets } from "../../web-services";


export default function Layout(){

    const [tickets,setTickets] = useState([]); 
// Peter added this useEffect but I commented them out
// and moved it to List.jsx

    // useEffect(()=>{

    //     fetchAllTickets()
    //         .then(r=>r.json())
    //         .then(j=>setTickets(j))
    //         .catch(e=>alert(e.message)); 

    // },[])

// Peter added this useEffect but I commented them out
// and moved it to List.jsx
    
    return(
        <div>
            <h1>Tickets</h1>
            <Outlet context={[tickets,setTickets]}/>
        </div>       
    ); 
}