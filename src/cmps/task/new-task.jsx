import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {utilService} from '../../services/util.service'
import { updateBoard } from '../../store/actions/board.actions'

export const NewTask = ({ color, hoverColor }) => {
  const { currBoard } = useSelector((storeState) => storeState.boardModule)
  const dispatch = useDispatch()

  useEffect(() => {
    setLeftColor(hoverColor)
  }, [hoverColor])


  const [borderColor, setBorderColor] = useState('transparent')
  const [borderStyle, setBorderStyle] = useState('solid')
  const [borderWidth, setBorderWidth] = useState('1px')
  const [leftColor, setLeftColor] = useState(hoverColor)

  const onAddTask = () => {
    const newTask = {
      id: utilService.makeId(),
      title: 'New Task',
      membersIds: [],
      status: {
        color: '#7F5347',
        hover: '#9E807A',
        name: 'Not Assignee',
      },
      priority: {
        color: '#2B76E5',
        hover: '#6399E8',
        name: 'Low',
      },
      deadline: Date.now(),
      workHours: 0,
      isChecked: false,
      lastUpdated: {
        _id: 'u103',
        fullname: 'Elon Barzani',
        imgUrl: 'imgs/mini-user-imgs/u103.png',
        updatedAt: Date.now(),
      },
      createdAt: Date.now(),
      byMember: {
        _id: 'u102',
        username: 'Yarden',
        fullname: 'Yarden Shaul',
        imgUrl: 'imgs/mini-user-imgs/u102.png',
      },
      updates: [],
    }
    currBoard.groups[0].tasks.push(newTask)
    dispatch(updateBoard(currBoard))
}

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
        <span onClick={() => onAddTask()}>+ Add Task</span>
      </div>
    </div>
  )
}
