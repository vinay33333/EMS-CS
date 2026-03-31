import React from 'react'

const NewTask = ({ data, empId, updateStatus }) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl shadow-lg'>
        <div className='flex justify-between items-center'><h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3><h4>{data.taskDate}</h4></div>
        <h2 className='mt-5 text-2xl font-bold text-black'>{data.taskTitle}</h2>
        <p className='text-sm mt-2 text-gray-800'>{data.taskDescription}</p>
        <button onClick={() => updateStatus(empId, data.taskTitle, 'active')} className='w-full bg-blue-600 py-2 rounded mt-4 font-bold'>ACCEPT TASK</button>
    </div>
  )
}

export default NewTask