import { ChangeEvent, useState } from 'react'
import { ListReview } from './SampleData'
import { DetailReview } from './DetailReview'
import { Input } from './InputForm'
import { Radio } from './InputRadio'
import { Review } from './Review'
import { InterfaceReview, defaultReview } from './Interface'

export const ReviewForm = () => {
  const [review, setReview] = useState<InterfaceReview>(defaultReview)
  const handleReview = (data: number) => {
    console.log(data)
  }
  const handleSubmit = () => {
    console.log('abc')
  }
  const handleClick = (data: InterfaceReview) => {
    setReview(data)
  }
  const handleChangeInput = (data: string) => {
    console.log(data)
  }
  const handleChecked = (data: string) => {
    console.log(data)
  }
  const handleChangeCheckbox = (event: ChangeEvent<HTMLInputElement>) => {
    setReview((prevReview) => ({
      ...prevReview,
      publicEmail: event.target.checked
    }))
  }

  return (
    <div className='flex flex-col space-y-10 w-4/5 mt-5 items-center'>
      <div className='w-[42rem] rounded-3xl space-y-7 bg-white p-16'>
        <h1 className='text-2xl font-black'>Overall rating</h1>
        <div>
          <Review rate={review.rate} click={handleReview} />
          <p className='text-sm font-normal '>Click to rate</p>
        </div>
        <Input
          value={review.reviewTitle}
          onChange={handleChangeInput}
          placeholder='Example: Easy to use'
          title='Review title'
          type='text'
        />
        <p>Would you recommend this product to a friend?</p>
        <Radio
          check={review?.recommend}
          onChange={handleChecked}
          titleOne='Yes'
          titleTwo='No'
          extendClass='accent-gray-500 scale-150'
        />
        <Input
          value={review.productReview}
          onChange={handleChangeInput}
          placeholder='Example: Easy to use Example: Easy to useExample: Easy to useExample: Easy to use'
          title='Product review'
          type='textarea'
        />
        <div className='flex gap-x-2 '>
          <div className='grow'>
            <Input
              value={review.nickName}
              onChange={handleChangeInput}
              placeholder='Example: Chi bao'
              title='Nickname'
              type='text'
            />
          </div>
          <div>
            <Input
              value={review.email}
              onChange={handleChangeInput}
              placeholder='Example: your@gmail.com'
              title='Email address'
              type='text'
            />
          </div>
        </div>
        <div className='space-x-3'>
          <input
            id='checkbox-accept'
            type='checkbox'
            className='accent-gray-500 scale-150'
            checked={review.publicEmail}
            onChange={(event) => handleChangeCheckbox(event)}
          />
          <label htmlFor='checkbox-accept'>
            <span>I accept public email</span>
          </label>
        </div>
        <button
          className='w-fit py-2 px-3 flex mx-auto mt-5 hover:opacity-70 bg-blue-500 text-white'
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <div className='bg-white w-full p-16 grid grid-cols-1 lg:grid-cols-3 gap-4'>
        {ListReview.map((item) => (
          <DetailReview
            key={item.id}
            publicEmail={item.publicEmail}
            email={item.email}
            nickName={item.nickName}
            productReview={item.productReview}
            rate={item.rate}
            recommend={item.recommend}
            reviewTitle={item.reviewTitle}
            click={() => handleClick(item)}
          />
        ))}
      </div>
    </div>
  )
}
