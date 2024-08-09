import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

const Privateroute = () => {
    const data = useSelector((state)=>state.dataInfo.data)
    const navigate = useNavigate();

    if(!data){
      return <Navigate to='/'/>
    }
    return <Outlet />
}

export default Privateroute
