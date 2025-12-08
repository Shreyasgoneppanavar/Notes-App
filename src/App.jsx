import React, { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task];

    copyTask.push({ title, details })
    
    setTask(copyTask)
    
    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    
    setTask(copyTask)
    
  }


  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form
        onSubmit={(e) => {
          submitHandler(e)
        }}
        className='flex flex-col lg:w-1/2 gap-5 items-start p-10'>

        <h1 className='text-3xl font-bold'>Add Notes</h1>

        {/* //First input for heading */}
        <input
          className='px-5 py-2 font-medium w-full outline-none border-2 rounded'
          type="text"
          placeholder='Enter Notes Heading'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        {/* //Details  */}
        <textarea
          className='px-5 h-30 font-medium w-full outline-none py-2 border-2 rounded'
          type='text'
          placeholder='Enter Details'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        />

        <button
          className='w-full active:bg-gray-300 font-medium bg-white outline-none text-black px-5 py-2 rounded'
        >
          Add Notes
        </button>

      </form>
      <div className='gap-5 lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='flex h-[90%] items-start justify-start overflow-auto gap-5 mt-5 flex-wrap'>
          {task.map(function (elem, idx) {
            return <div key={idx} className="relative h-52 w-40 bg-cover text-black py-4.5 px-3 rounded-2xl bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <h2 
                onClick={() => {
                  deleteNote(idx)
                }}
                className='absolute cursor-pointer active:scale-95 top-5 right-5 p-1 rounded-full'
              >
                <X size={16} strokeWidth={3} />
              </h2>
              <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
              <p className='mt-2 leading-tight font-medium text-gray-600'>{elem.details}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App

// 6.54