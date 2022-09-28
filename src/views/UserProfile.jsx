import {useParams,useOutletContext,Link} from 'react-router-dom'

export default function UserProfile(){

    //outlet context
    const [users,setUsers] = useOutletContext(); 
    //params
    const params = useParams(); 
    // let user = users.find(t=>t._id == params.id); 
    let user = users.find(u=>u.username == params.username);
    //JSX
    if(user == undefined){      
        return (<div>Not Found</div>);      
    }
    else{
        
        return(
            <div className="Div-border">
                <h1>User Details : {user?._id}</h1>
                    <div>
                    <label>Assignee Name: {user?.username}</label>
                    </div>                    
                    <div>
                    <label>Department: {user?.firstName}</label>
                    </div>
                    <div>
                    <label>Priority: {user?.lastName}</label>
                    </div>
                    <div>
                    <label>Due Date: {user?.address}</label>
                    </div>
                    <div>
                    <label>Description: {user?.phone}</label>
                    </div>                
                    <Link to={"/"}>Go Back</Link>
                </div>
        );

    }

}