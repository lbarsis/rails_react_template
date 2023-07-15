import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate()
  const { user, setUser } = useContext(UserContext)

  function handleLogout() {
    fetch('/logout', {
      method: 'DELETE'
    })

    setUser(null)
    navigate('/')
  }


  return (
    <div>
      {
        user ?
          <nav>
            <NavLink to='/'>Home</NavLink>
            <button onClick={handleLogout} className='logout-button'>Logout</button>
          </nav>
          :
          <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/signup'>Signup</NavLink>
          </nav>
      }
    </div>
  );
}

export default Navbar;
