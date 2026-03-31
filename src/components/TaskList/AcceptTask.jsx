import React from 'react'

const AcceptTask = ({ data, empId, updateStatus }) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl shadow-lg'>
        <div className='flex justify-between items-center'><h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3><h4>{data.taskDate}</h4></div>
        <h2 className='mt-5 text-2xl font-bold text-black'>{data.taskTitle}</h2>
        <p className='text-sm mt-2 text-gray-800'>{data.taskDescription}</p>
        <div className='flex justify-between mt-4 gap-2'>
            <button onClick={() => updateStatus(empId, data.taskTitle, 'completed')} className='bg-green-600 py-1 px-2 rounded font-bold flex-1'>MARK COMPLETED</button>
            <button onClick={() => updateStatus(empId, data.taskTitle, 'failed')} className='bg-red-600 py-1 px-2 rounded font-bold flex-1'>MARK FAILED</button>
        </div>
    </div>
  )
}

export default AcceptTask