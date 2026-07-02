import React from 'react'

type InputProps = {
  setInput: (value: string) => void;
};
const Input = ({setInput}: InputProps) => {
  return (
    <div>
        <input type="text" placeholder='Enter Subject' className='border-2 border-gray-300 rounded-md p-2 w-full mb-4' onChange={(e) => setInput(e.target.value)} />
      
    </div>
  )
}

export default Input
