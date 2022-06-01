import { useEffect, useState } from 'react'

export const NewTask = ({ color, hoverColor }) => {
  useEffect(() => {
    setLeftColor(hoverColor)
  }, [hoverColor])

  const [borderColor, setBorderColor] = useState('transparent')
  const [borderStyle, setBorderStyle] = useState('solid')
  const [borderWidth, setBorderWidth] = useState('1px')
  const [leftColor, setLeftColor] = useState(hoverColor)

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
          setLeftColor(hoverColor)
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
