import { ChangeEvent, useEffect, useState } from 'react'
import { InterfaceInput } from './Interface'

export const Input = ({ title, placeholder, type, onChange, value }: InterfaceInput) => {
  const [valueInput, setValue] = useState(value)
  const handleChangeInput = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const valueInput = event.target.value
    onChange && onChange(valueInput)
    setValue(valueInput)
  }

  useEffect(() => {
    setValue(value)
  }, [value])

  return (
    <div>
      <label htmlFor='title' className='block font-semibold text-sm'>
        {title}
      </label>
      {type == 'text' && (
        <input
          id={title}
          placeholder={placeholder}
          value={valueInput}
          onChange={handleChangeInput}
          className='rounded-md focus-visible:outline-none border-2 p-4 py-3 mt-1 w-full'
        />
      )}
      {type == 'textarea' && (
        <textarea
          id={title}
          placeholder={placeholder}
          value={valueInput}
          onChange={handleChangeInput}
          className='rounded-md focus-visible:outline-none border-2 p-4 py-3 mt-1 w-full'
        />
      )}
    </div>
  )
}
