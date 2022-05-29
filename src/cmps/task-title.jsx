import { BiCheckboxChecked, BiCheckbox } from 'react-icons/bi'
import { RiChat3Line } from 'react-icons/ri'
import { AiOutlinePlus } from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'
import { useState } from 'react'

export const TaskTitle = ({
  groupColor,
  title,
  counter,
  background,
  innerColor,
}) => {
  const [iconColor, setIconColor] = useState('#C6C8D1')
  console.log(iconColor)

  return (
    <div className="task-title flex" style={{ background: background }}>
      <div className="task-checkbox" style={{ background: groupColor }}>
        {/* <BiCheckboxChecked /> */}
        {/* <BiCheckbox /> */}
      </div>
      <div className="task-header">
        <span style={{ color: innerColor }}>{title}</span>
      </div>
      <div
        className="task-title-btns"
        onMouseEnter={() => {
          setIconColor('#0073EA')
        }}
        onMouseLeave={() => {
          setIconColor('#C6C8D1')
        }}
      >
        <IconContext.Provider value={{ color: iconColor }}>
          <RiChat3Line />
        </IconContext.Provider>
        <IconContext.Provider value={{ color: iconColor }}>
          <AiOutlinePlus />
        </IconContext.Provider>
      </div>
    </div>
  )
}
