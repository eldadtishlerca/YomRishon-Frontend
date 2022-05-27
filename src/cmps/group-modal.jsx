import { useState } from 'react'
import { AiOutlineCaretDown } from 'react-icons/ai'

export const GroupModal = ({ _id, color }) => {
  const [background, setBackground] = useState(color)
  const [innerColor, setInnerColor] = useState('#fff')

  return (
    <div
      className="group-modal"
      onMouseEnter={() => {
        setBackground('#fff')
        setInnerColor(color)
      }}
      onMouseLeave={() => {
        setBackground(color)
        setInnerColor('#fff')
      }}
      style={{
        backgroundColor: background,
        color: innerColor,
        borderColor: innerColor,
      }}
    >
      <AiOutlineCaretDown />
    </div>
  )
}
