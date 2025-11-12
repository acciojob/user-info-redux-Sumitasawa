import React, { useState } from 'react'
import { updateEmail,updateName } from '../userSlice'
import { useDispatch,useSelector } from 'react-redux'
const UserInfo = () => {
    const dispatch=useDispatch();
    const {name,email}=useSelector((state)=>state.user);


    const handlenameChange=(e)=>{
        dispatch(updateName(e.target.value));
    }

    const handleemailChange=(e)=>{
        dispatch(updateEmail(e.target.value));
    }
  return (
    <>
    <div>
      <h1>User Information</h1>
      <label htmlFor='name'>Name:</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={handlenameChange}
       />
       </div>

        <div>
       <label htmlFor='email'>Email:</label>
       <input 
        id="email"
        type="email"
        value={email}
        onChange={handleemailChange}
       />
    </div>


    <div className='output'>
        Current values in store:
        Name - {name}
        Email - {email}
    </div>
    </>


  )
}

export default UserInfo
