import { useDispatch } from 'react-redux'
import { RiChat3Line } from 'react-icons/ri'
import { AiOutlinePlus } from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

// Actions
import { updateTask } from '../../store/actions/board.actions'

export const TaskTitle = ({
  groupColor,
  title,
  counter,
  background,
  innerColor,
  onClick,
  taskId,
  groupId,
  task,
}) => {
  const { currBoard } = useSelector((storeState) => storeState.boardModule)
  const [iconColor, setIconColor] = useState('#C6C8D1')
  const [editHover, setEditHover] = useState(false)
  const [titleValue, setTitleValue] = useState(title || '')
  const [isEditTitle, setIsEditTitle] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {}, [currBoard])
  if (!currBoard) return

  const onClickTitle = (ev) => {
    ev.stopPropagation()
  }

  const onSubmitTitle = (ev) => {
    if (ev.type === 'blur' || ev.key === 'Enter') {
      const taskToUpdate = { ...task, title: titleValue }
      setIsEditTitle(false)
      ev.target.blur()
      dispatch(updateTask(currBoard, groupId, taskId, taskToUpdate))
    }
  }
  const onHandleChangeTitle = (ev) => {
    const { value } = ev.target
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
      <div className="task-checkbox" style={{ background: groupColor }}></div>
      <div className="task-header">
        <div className="task-header-title">
          <span>
            {isEditTitle ? (
              <input
                value={titleValue}
                type="text"
                className="task-title-input"
                style={{ color: innerColor }}
                onClick={(ev) => {
                  onClickTitle(ev)
                }}
                onBlur={(ev) => {
                  onSubmitTitle(ev)
                }}
                onKeyUp={(ev) => {
                  onSubmitTitle(ev)
                }}
                onChange={(ev) => {
                  onHandleChangeTitle(ev)
                }}
              ></input>
            ) : (
              <span style={{ color: innerColor }}>{title}</span>
            )}
          </span>
        </div>
        {editHover && (
          <div
            className="title-header-edit"
            onClick={(ev) => {
              ev.stopPropagation()
              setIsEditTitle(true)
            }}
          >
            Edit
          </div>
        )}
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
