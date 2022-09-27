import { useState } from "react";
import { submitTicket } from "../../web-services";

export default function Create(){

    const [category,setCategory] = useState('')

    function submit(){

        submitTicket({category}) 
            .then(r => r.json())
            .then(j => {
                alert("Ticket: " + j._id + " has been submitted"); 
            })
            .catch(e => alert(e.message)); 
    }

    return (
        <div>
            <h1>Submit Ticket</h1>
            <div>
                <label>Category</label>
                <select value={category} onChange={e=>setCategory(e.target.value)}>
                    <option value="">-- Please Select Category</option>
                    <option value="Drivers License">Drivers License</option>
                    <option value="Registration">Registration</option>
                </select>
            </div>
            <button onClick={submit}>Submit</button>
        </div>
    ); 


}