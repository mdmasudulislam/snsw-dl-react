import {useState} from 'react'; 
import {useParams,useOutletContext, useNavigate} from 'react-router-dom'


export default function Edit(){
    //navigation
    const navigate = useNavigate(); 
    //outlet context
    const [tasks,setTasks] = useOutletContext(); 
    //params
    const params = useParams(); 
    let task = tasks.find(t=>t._id == params.id); 
    //state
    const [assignee,setAssignee] = useState(task?.assignee); 
    const [department,setDepartment] = useState(task?.department); 

    //functions
    function updateTask(){
        fetch(`http://localhost:8080/account/${task._id}`,{
            method:"PUT",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify( {_id:task._id,assignee,department,priority,dueDate,description})
        })
        .then(r=>r.json())
        .then(j => {
            setTasks(tasks.map(t=>t._id == params.id ? j : t)); 
            navigate("/tasks")
        })
        .catch(e => alert(e.message)); 
    }
    // function cancel button
    function backButton(){
        navigate("/tasks");
    }
    //JSX
    if(task == undefined){      
        return (<div>Not Found</div>);      
    }
    else{
        
        return(

            <div className="Div-border">
                <h1>Edit Task ID: {task?._id}</h1>
                <div>
                <label>Assignee Name: </label>
                <br/>
                <input value={assignee} onChange={e=>setAssignee(e.target.value)} />
                </div>
                <div>
                <label>Department: </label>
                <br/>
                <input value={department} onChange={e=>setDepartment(e.target.value)} />
                </div>
                <div>
                <label>Priority: </label>
                <br/>
                <input value={priority} onChange={e=>setPriority(e.target.value)} />
                </div>
                <div>
                <label>Due Date: </label>
                <br/>
                <input value={dueDate} onChange={e=>setDuedate(e.target.value)} />
                </div>
                <div>
                <label>Description: </label>
                <br/>
                <input value={description} onChange={e=>setDescription(e.target.value)} />
                </div>
            <button onClick={updateTask}>Save</button>
            <button onClick={backButton}>Cancel</button>
            </div>




        );

    }
}