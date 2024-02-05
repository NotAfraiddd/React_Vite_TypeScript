interface RadioProps {
  titleOne: string;
  titleTwo: string;
  extendClass: string;
}
export const Radio = ({ titleOne, titleTwo, extendClass }: RadioProps) => {
  return (
    <div className="flex gap-10">
      <div className="space-x-3">
        <input type="radio" className={extendClass} id="radio-yes" name="group-radio" />
        <label htmlFor="radio-yes">{titleOne}</label>
      </div>
      <div className="space-x-3">
        <input type="radio" className={extendClass} id="radio-no" name="group-radio" />
        <label htmlFor="radio-no">{titleTwo}</label>
      </div>

    </div>
  )
}