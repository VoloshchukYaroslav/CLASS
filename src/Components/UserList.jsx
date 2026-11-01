import { Component } from "react";
import UserItem from "./UserItem";

class UserList extends Component {
    render(){
        const {info,onDelite} = this.props
        console.log(info);
        
        return(
            <ul>{info.map((user)=>{
                return <UserItem onDelite={onDelite} key={user.id} user={user}/>
            })}</ul>
        )
    }
}

export default UserList