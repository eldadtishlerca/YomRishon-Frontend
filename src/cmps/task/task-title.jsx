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
  onClick,
}) => {
  const [iconColor, setIconColor] = useState('#C6C8D1')
  const [editHover, setEditHover] = useState(false)

  return (
    <div
      className="task-title flex"
      style={{ background: background }}
      onClick={onClick}
      onMouseEnter={() => {
        setEditHover(true)
      }}
      onMouseLeave={() => {
        setEditHover(false)
      }}
    >
      <div className="task-checkbox" style={{ background: groupColor }}>
        {/* <BiCheckboxChecked /> */}
        {/* <BiCheckbox /> */}
      </div>
      <div className="task-header">
        <div className="task-header-title">
          <span style={{ color: innerColor }}>{title}</span>
        </div>
        {editHover && <div className="title-header-edit">Edit</div>}
      </div>
      {counter === 0 ? (
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
      ) : (
        <div className="task-title-btn">
          <RiChat3Line />
          <span>{counter}</span>
        </div>
      )}
    </div>
  )
}
