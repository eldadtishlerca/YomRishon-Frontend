import { useState } from 'react'
import { AiOutlineRight } from 'react-icons/ai'

export const BoardsModalClosed = ({ onClick }) => {
  const [width, setWidth] = useState('26px')
  const [posRight, setPosRight] = useState('-14px')
  const [background, setBackground] = useState('#fff')
  const [color, setColor] = useState('#323338')

  return (
    <div className="boards-modal-closed">
      <div
        className="boards-modal-closed-btn"
        onClick={() => onClick()}
        style={{
          width: width,
          right: posRight,
          background: background,
          color: color,
        }}
        onMouseEnter={() => {
          setWidth('34px')
          setPosRight('-22px')
          setBackground('#0073ea')
          setColor('#fff')
        }}
        onMouseLeave={() => {
          setWidth('26px')
          setPosRight('-14px')
          setBackground('#fff')
          setColor('#322388')
        }}
      >
        <AiOutlineRight />
      </div>
    </div>
  )
}
