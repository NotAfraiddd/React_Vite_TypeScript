export const UserProfile = () => {
  return (
    <div className="w-[36rem] p-12 bg-white flex gap-5">
      <img src="https://i.pinimg.com/564x/90/9d/54/909d541b2a4b7fd728f4ce95f799dc92.jpg" alt="" className="w-32 self-start rounded-full border-[#E6EFFA] border-[11px]" />
      <div className="flex flex-col space-y-7 text-[#1c2b62]">
        <div>
          <h1 className="text-3xl font-bold">David Grant</h1>
          <h2>3D Artist</h2>
        </div>
        <div>
          <p>4.7 Rating</p>
          <p>4,447 Reviews</p>
          <p>478 Students</p>
        </div>
        <p>
          David Grant has been making video games for a living for more than 14
          years as a Designer, Producer, Creative Director, and Executive
          Producer, creating games for console, mobile, PC and Facebook.
        </p>
        <div>
          <button className="border-2 p-1 rounded-md">Show more</button>
        </div>
      </div>
    </div>
  )
}