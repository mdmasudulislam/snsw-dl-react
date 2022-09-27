import {useParams,useOutletContext,Link} from 'react-router-dom'

export default function UserProfile(){

    //outlet context
    const [tasks,setTasks] = useOutletContext(); 
    //params
    const params = useParams(); 
    let task = tasks.find(t=>t._id == params.id); 
    //JSX
    if(task == undefined){      
        return (<div>Not Found</div>);      
    }
    else{
        
        return(
            <div className="Div-border">
                <h1>Task Details : {task?._id}</h1>
                    <div>
                    <label>Assignee Name: {task?.assignee}</label>
                    </div>                    
                    <div>
                    <label>Department: {task?.department}</label>
                    </div>
                    <div>
                    <label>Priority: {task?.priority}</label>
                    </div>
                    <div>
                    <label>Due Date: {task?.dueDate}</label>
                    </div>
                    <div>
                    <label>Description: {task?.description}</label>
                    </div>                
                    <Link to={"/tasks"}>Go Back</Link>
                </div>
        );

    }

}