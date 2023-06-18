import React, {useContext} from 'react'
import { UserContext } from '../../context/userContext'
import { Outlet, Navigate, useLocation } from 'react-router-dom'

function Private() {

    const {currentUser} = useContext(UserContext);
    console.log('Private', currentUser);

    if(!currentUser) {
        return <Navigate to="/"/>
    }
  return (
    <div className='container'>
        <Outlet/>
    </div>
  )
}

export default Private