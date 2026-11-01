import { Component } from "react";

class UserItem extends Component{
    render(){
        const {user,onDelite} = this.props
        return(
            <li>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.age}</p>
                <span>{user.active}</span>
                <button type="button" onClick={()=>onDelite(user.id)}>Видалиди</button>
            </li>
        )
    }
}

export default UserItem