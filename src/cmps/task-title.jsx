import { BiCheckboxChecked } from 'react-icons/bi'
import { RiChat3Line } from 'react-icons/ri'
import { AiOutlinePlus } from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'

export const TaskTitle = ({ color, title, counter }) => {
  return (
    <div className="task-title flex">
      <div className="task-checkbox" style={{ background: color }}>
        {/* <BiCheckboxChecked /> */}
        {/* <BiCheckbox /> */}
      </div>
      <div className="task-header">
        <span>{title}</span>
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
