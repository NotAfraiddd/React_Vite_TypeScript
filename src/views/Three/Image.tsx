interface Image {
  icon: string;
  extendClass: string;
}

export const Image = ({ icon, extendClass }: Image) => {
  return (
    <img src={icon} alt="" className={extendClass} />
  )
}