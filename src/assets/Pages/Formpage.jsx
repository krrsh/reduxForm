import React from 'react'
import {useSelector} from 'react-redux'

const Formpage = () => {

  const users = useSelector((state)=>state.userInfo.users)

  return (
    <div>
      {users?.map((user, index)=>{
        return <ul key={index}>
          <li>{user.name}</li>
          <li>{user.age}</li>
          <li>{user.email}</li>
          <li>{user.contact}</li>
          <li>{user.city}</li>
        </ul>
      })}
    </div>
  )
}

export default Formpage
