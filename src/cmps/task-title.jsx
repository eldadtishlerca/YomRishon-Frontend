import { BiCheckboxChecked, BiCheckbox } from 'react-icons/bi'
import { RiChat3Line } from 'react-icons/ri'
import { AiOutlinePlus } from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'

export const TaskTitle = ({
  groupColor,
  title,
  counter,
  background,
  innerColor,
}) => {
  return (
    <div className="task-title flex" style={{ background: background }}>
      <div className="task-checkbox" style={{ background: groupColor }}>
        {/* <BiCheckboxChecked /> */}
        {/* <BiCheckbox /> */}
      </div>
      <div className="task-header">
        <span style={{ color: innerColor }}>{title}</span>
      </div>
      <IconContext.Provider value={{ color: '#C6C8D1' }}>
        <RiChat3Line />
      </IconContext.Provider>
      <IconContext.Provider value={{ color: '#C6C8D9' }}>
        <AiOutlinePlus />
      </IconContext.Provider>
    </div>
  )
}
