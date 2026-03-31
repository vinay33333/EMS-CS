import React from 'react'

const Header = (props) => {
  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
  }

  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{props.data?.firstName || "Admin"} 👋</span></h1>
        <button onClick={logOutUser} className='bg-red-600 hover:bg-red-700 text-base font-medium text-white px-5 py-2 rounded-sm transition-all'>Log Out</button>
    </div>
  )
}

export default Header