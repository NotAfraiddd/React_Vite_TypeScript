import { ChangeEvent, useEffect, useState } from 'react'
import { InterfaceRadio } from './Interface'

export const Radio = ({ titleOne, titleTwo, extendClass, check, onChange }: InterfaceRadio) => {
  const [checkValue, setCheckValue] = useState(check)
  const handleInputRadio = (event: ChangeEvent<HTMLInputElement>) => {
    const valueCheck = event.target.value
    setCheckValue(valueCheck)
    onChange && onChange(valueCheck)
  }

  useEffect(() => {
    setCheckValue(check)
  }, [check])

  return (
    <div className='flex gap-10'>
      <div>
        <input
          type='radio'
          value='true'
          checked={checkValue == 'true'}
          onChange={handleInputRadio}
          className={extendClass}
          id='radio-yes'
          name='group-radio'
        />
        <label className='pl-3' htmlFor='radio-yes'>
          {titleOne}
        </label>
      </div>
      <div>
        <input
          type='radio'
          value='false'
          checked={checkValue == 'false'}
          onChange={handleInputRadio}
          className={extendClass}
          id='radio-no'
          name='group-radio'
        />
        <label className='pl-3' htmlFor='radio-no'>
          {titleTwo}
        </label>
      </div>
    </div>
  )
}
