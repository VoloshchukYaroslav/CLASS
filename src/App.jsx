import users from "./users.json"
import { Component } from "react"
import UserList from "./Components/UserList"
import './App.css'

class App extends Component {
    state = {
      data: users,
    }

    // handleDelite = (id)=>{
    //   console.log(id);
    //   this.setState((prev)=>{
    //     return{
    //       data:prev.data.filter((user)=>user.id !== id)
    //     }
    //   })
    // }

    handleDelite = (id)=>{
      this.setState((prev)=>({data:prev.data.filter((user)=>user.id !== id)}))
    }

    render(){

      
      return(
        <UserList info={this.state.data} onDelite={this.handleDelite}/>
      )
    }
}

export default App
