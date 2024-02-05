import { ChangeEvent, ReactNode, useState } from "react";

interface JobSearch {
  icon?: ReactNode;
  onSearch: (value: string) => void;
  click: () => void;
}

export const JobSearch = ({ icon, onSearch, click }: JobSearch) => {
  const [search, setSearch] = useState('');

  const handleInputSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const valueSearch = event.target.value;
    setSearch(valueSearch);
    onSearch(valueSearch)
  };
  return (
    <div className="flex">
      <div className="flex items-center relative w-full">
        {icon}
        <input value={search} onChange={handleInputSearch} spellCheck="false" type="text" placeholder="Search for a part-time job" className="w-full mr-2 pl-10 py-2 focus-visible:outline-none border-gray-400 border" />
      </div>
      <button onClick={click} className="bg-blue-500 text-white p-1 rounded-md px-4 py-2 ">Search</button>
    </div>
  )
}