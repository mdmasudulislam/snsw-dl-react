import { useOutletContext } from "react-router-dom"
import { useEffect } from "react";
import { fetchAllTickets } from "../../web-services";

export default function List(){
        
    const [tickets,setTickets] = useOutletContext(); 
    // This useEffect is added by me not by Peter
    useEffect(()=>{
        fetchAllTickets()
        .then(r=>r.json())
        .then(j=>setTickets(j))
        .catch(e=>alert(e.message)); 
        },[])
    // This useEffect is added by me not by Peter

    return (
        <div>
            <h2>Ticket List: {tickets.length}</h2>
            <div>
                {tickets.map(t=>
                    <div key={t._id} style={{border:"1px solid black",padding:5,margin:5}}>
                        <div>ID: {t._id}</div>
                        <div>CUSTOMER: {t.username}</div>
                        <div>CATEGORY: {t.category}</div>
                        <div>STATUS: {t.status}</div>
                        <div>TIME: {new Date(t.timestamp).toLocaleDateString()}</div>
                    </div>
                )}
            </div>
        </div>
    )


}