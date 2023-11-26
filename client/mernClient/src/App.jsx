/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import Axios from 'axios'
import './App.css'

function App() {
  const [usersList, setUsersList] = useState([{}])
  const [newUserName, setNewUserName] = useState('')
  const [newUserEmail, setNewUserEmail] = useState('')
  const [newUserAge, setNewUserAge] = useState(0)

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setUsersList(response.data)
    })
  }, [])

  const createUser = () => {
    console.log("createUser function called")
    Axios.post("http://localhost:3001/createUser",{
      name:newUserName,
      age:newUserAge,
      email:newUserEmail,
    }).then((response) => {
      setUsersList([...usersList,{
        name:newUserName,
        age:newUserAge,
        email:newUserEmail,
      }])
      console.log('user created')
    })
  }
                     
  return (
    <>
      <h1>Register User</h1>
      <div className="UserRegistration">
        <input type="text" 
        name="userName" 
        id="userName" 
        className="UserName" 
        placeholder='Name' 
        onChange={
          (event)=>{
            setNewUserName(event.target.value)
            console.log(event.target.value)
          }
          }/>
        <input 
        type="email" 
        name="userEmail" 
        id="userEmail" 
        className="UserEmail"
        placeholder='Email' 
        onChange={
          (event)=>{
            setNewUserEmail(event.target.value)
            console.log(event.target.value)
          }
          }/>
        <input 
        type="number" 
        name="userAge" 
        id="userAge" 
        className="UserAge" 
        placeholder='Age' 
        onChange={
          (event)=>{
            setNewUserAge(event.target.value)
            console.log(event.target.value)
          }
          }/>
        <button 
        className="UserSubmit" 
        onClick={createUser}
        >
          Submit
          </button>
      </div>

        <h2>Registered Users List</h2>
      <div className="userList">
        {usersList.map((user) => {
          return (
            <div className="userCard" key={user._id}>
              <h3>{user.name}</h3>
              <p>{user._id}</p>
              <p>{user.email}</p>
              <p>{user.age}</p>
            </div>
          );
        })}
      </div>
      
    </>
  )
}

export default App
