import { Job } from "./Job";
import { JobSearch } from "./JobSearch";
import { react, icon, search } from "../../assets";
export const JobList: React.FC = () => {
  const jobsData = [
    { title: "Furniture", bgClass: "bg-[#FFECEC]", icon: react },
    { title: "Magic", bgClass: "bg-[#F2FECa]", icon: icon },
    { title: "Developer", bgClass: "bg-[#F234ba]", icon: react },
    { title: "Furniture", bgClass: "bg-[#c798df]", icon: react },
    { title: "Magic", bgClass: "bg-[#F234ba]", icon: icon },
    { title: "Developer", bgClass: "bg-[#c798df]", icon: react },
    { title: "Furniture", bgClass: "bg-[#FFECEC]", icon: react },
    { title: "Magic", bgClass: "bg-[#F2FECa]", icon: icon },
  ];
  const handleSearch = (data: string) => {
    console.log(data);
  }

  const handleClick = (): void => {
    console.log('click');

  }
  return (
    <div className="w-[36rem] p-12 bg-white gap-5">
      <JobSearch onSearch={handleSearch} click={handleClick} icon={<img src={search} alt="" className="absolute h-5 w-5 left-3 top-3" />} />
      <div className="mt-8 grid grid-cols-4 gap-4">
        {
          jobsData.map((item, index) => (
            <Job key={index} title={item.title} bgClass={item.bgClass} icon={<img src={item.icon} alt="" className="w-8 h-8" />} />
          ))
        }
      </div>

    </div>
  )
}