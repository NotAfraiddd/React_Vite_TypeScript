import { ChangeEvent, useState } from "react"
import { Job } from "./Job";
import { react } from "../../assets";
export const JobList: React.FC = () => {
  const [search, setSearch] = useState('');
  const handleInputSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  return (
    <div className="w-[36rem] p-12 bg-white gap-5">
      <div className="flex">
        <div className="flex items-center relative w-full">
          <svg className="absolute h-5 w-5 left-3 top-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </g>
          </svg>
          <input value={search} onChange={handleInputSearch} spellCheck="false" type="text" placeholder="Search for a part-time job" className="w-full mr-2 pl-10 py-2 focus-visible:outline-none border-gray-400 border" />
        </div>
        <button className="bg-blue-500 text-white p-1 rounded-md px-4 py-2 ">Search</button>

      </div>


      <div className="mt-8 grid grid-cols-4 gap-4">
        <Job title="Furniture" bgClass="bg-[#FFECEC] flex flex-col items-center justify-center" icon={<img src={react} alt="" className="w-8 h-8" />} />
      </div>

    </div>
  )
}