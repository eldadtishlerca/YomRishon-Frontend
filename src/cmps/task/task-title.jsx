import { BiCheckboxChecked, BiCheckbox } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { RiChat3Line } from 'react-icons/ri'
import { AiOutlinePlus } from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { updateBoard } from '../../store/actions/board.actions'

export const TaskTitle = ({
  groupColor,
  title,
  counter,
  background,
  innerColor,
  onClick,
  taskId,
  groupId,
}) => {
  const { currBoard } = useSelector((storeState) => storeState.boardModule)
  const [iconColor, setIconColor] = useState('#C6C8D1')
  const [editHover, setEditHover] = useState(false)
  const [titleValue, setTitleValue] = useState(title || '')
  const dispatch = useDispatch()
  if (!currBoard) return

  const onSubmitTitle = (ev) => {
    if (ev.key === 'Enter' || ev.type === 'blur') {
      console.log('Title updated to: *' + titleValue + '*')
      const { groups } = currBoard
      let currGroup = groups.find((group) => {
        return group.id === groupId
      })
      let currTask = currGroup.tasks.find((task) => {
        return task.id === taskId
      })
      currTask = { ...currTask, title: titleValue }
      let currTasks = currGroup.tasks.map((task) => {
        if (task.id === currTask.id) task = currTask
        return task
      })
      currGroup = { ...currGroup, tasks: currTasks }
      let newGroups = currBoard.groups.map((group) => {
        if (group.id === currGroup.id) group = currGroup
        return group
      })
      let newBoard = { ...currBoard, groups: newGroups }
      console.log(newBoard)
      // dispatch(updateTask(boardId, groupId, taskId, taskToUpdate))

      // board.groups[groupIdx].tasks.splice(1, taskIdx, taskToUpdate)
      dispatch(updateBoard(newBoard))
    }
  }
  const onHandleChangeTitle = (ev) => {
    const { value } = ev.target
    console.log(value)
    setTitleValue(value)
  }

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
          <span style={{ color: innerColor }}>
            <input
              value={titleValue}
              type="text"
              className="task-title-input"
              onBlur={(ev) => {
                onSubmitTitle(ev)
              }}
              onKeyUp={(ev) => {
                onSubmitTitle(ev)
              }}
              onChange={(ev) => {
                onHandleChangeTitle(ev)
              }}
              name="titleValue"
            ></input>
          </span>
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
