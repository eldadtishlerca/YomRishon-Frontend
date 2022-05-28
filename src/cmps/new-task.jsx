import { useState } from 'react'

export const NewTask = ({ color }) => {
  const [borderColor, setBorderColor] = useState('transparent')
  const [borderStyle, setBorderStyle] = useState('solid')
  const [borderWidth, setBorderWidth] = useState('1px')
  const [leftColor, setLeftColor] = useState('#ccc')

  return (
    <div className="add-task flex">
      <div className="add-task-color" style={{ background: leftColor }}></div>
      <div
        onMouseEnter={() => {
          setBorderColor('#000')
          setBorderStyle('solid')
          setBorderWidth('1px')
          setLeftColor(color)
        }}
        onMouseLeave={() => {
          setBorderColor('transparent')
          setBorderStyle('solid')
          setBorderWidth('1px')
          setLeftColor('#ccc')
        }}
        className="add-task-wrapper"
        style={{
          borderColor: borderColor,
          borderStyle: borderStyle,
          borderWidth: borderWidth,
        }}
      >
        <span>+ Add Task</span>
      </div>
    </div>
  )
}
