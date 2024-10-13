import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'; 
const Form = ({setInfo, info}) => {
  const navigate = useNavigate(); 
  const [petName, setPetName] = useState("")
  const [petType, setPetType] = useState("")
  const [petBreed, setPetBreed] = useState("")
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  function submitInfo(event){
    event.preventDefault(); 
    setInfo([...info, {
      petName,
    petType,
    petBreed,
    userName,
    email,
    phone
    }])
    console.log(info)
    
    navigate('/table');
  }
  return (
    <div>
      <form className='form'>
        <div className="inp">
            <span>Pet's Name</span>
            <input type="text" onChange={(e)=>setPetName(e.target.value)}></input>
        </div>
        <div className="inp">
            <span>Pet's Type</span>
            <input type="text" onChange={(e)=>setPetType(e.target.value)}></input>
        </div>
        <div className="inp">
            <span>Breed</span>
            <input type="text" onChange={(e)=>setPetBreed(e.target.value)}></input>
        </div>
        <div className="inp">
            <span>Your Name</span>
            <input type="text" onChange={(e)=>setUserName(e.target.value)}></input>
        </div>
        <div className="inp">
            <span>Email</span>
            <input type="text" onChange={(e)=>setEmail(e.target.value)}></input>
        </div>
        <div className="inp">
            <span>Phone</span>
            <input type="text" onChange={(e)=>setPhone(e.target.value)}></input>
        </div>
        <button className='submit' onClick={submitInfo}>Submit</button>
      </form>
    </div>
  )
}

export default Form
