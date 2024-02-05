import { Input } from "./InputForm"
import { Radio } from "./InputRadio"
import { Review } from "./Review"

export const ReviewForm = () => {
  return (
    <div className="w-[42rem] rounded-3xl space-y-7 bg-white p-16">
      <h1 className="text-2xl font-black">Overall rating</h1>
      <div>
        <Review />
        <p className="text-sm font-normal ">Click to rate</p>
      </div>
      <Input placeholder="Example: Easy to use" title="Review title" type="text" />
      <p>Would you recommend this product to a friend?</p>
      <Radio titleOne="Yes" titleTwo="No" extendClass="accent-gray-500 scale-150" />
      <Input placeholder="Example: Easy to use Example: Easy to useExample: Easy to useExample: Easy to use" title="Product review" type="textarea" />
      <div className="flex gap-x-2 ">
        <div className="grow">
          <Input placeholder="Example: Chi bao" title="Nickname" type="text" />
        </div>
        <div>
          <Input placeholder="Example: your@gmail.com" title="Email address( will not be published )" type="text" />
        </div>
      </div>
      <div className="space-x-3">
        <input type="checkbox" name="" id="checkbox-accept" className="accent-gray-500 scale-150" />
        <label htmlFor="checkbox-accept"><span>I accept with somethings</span></label>
      </div>
    </div>
  )
}