import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { register } from "../web-services"

export default function Register(){

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [firstName,setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')

    const navigate = useNavigate(); 

debugger

    function submit(){
        register(username,password, firstName, lastName, address, phone)
            .then(r=> {
                // alert("User Registered"); 
                alert(`User ${username} has been successfully Registered`)
                navigate("/login")
            })
            .catch(e => alert(e.message)); 
    }

    return (
        <div>
            <h2>Register Today</h2>
            <div>
                <label>Username</label>
                <input type="email" value={username} onChange={e=>setUsername(e.target.value)} />
                <label>Must be a valid email address</label>
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
            </div>
            <div>
                <label>First Name</label>
                <input type="text" value={firstName} onChange={e=>setFirstName(e.target.value)} />
            </div>

            <div>
                <label>Last Name</label>
                <input type="text" value={lastName} onChange={e=>setLastName(e.target.value)} />
            </div>

            <div>
                <label>Address</label>
                <input type="text" value={address} onChange={e=>setAddress(e.target.value)} />
            </div>

            <div>
                <label>Phone</label>
                <input type="number" value={phone} onChange={e=>setPhone(e.target.value)} />
            </div>

            <button onClick={submit}>Register</button>
        </div>
    )

}