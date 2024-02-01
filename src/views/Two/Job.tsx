import { ReactNode } from "react";

interface JobProps {
  title: string;
  icon?: ReactNode;
  bgClass: string;
}

export const Job: React.FC<JobProps> = ({ title, icon, bgClass }) => {
  return (
    <div className={`${bgClass} p-4`}>
      {icon}
      <span>{title}</span>
    </div>
  )
}