import { useState } from 'react'
import { AiFillCaretUp } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { updateBoard } from '../../store/actions/board.actions'

export const TrelloTaskPreview = ({ provided, task, taskId, groupId }) => {
  const { currBoard } = useSelector((storeState) => storeState.boardModule)
  const dispatch = useDispatch()

  const [isStatusModal, setIsStatusModal] = useState(false)
  const [isStatusHover, setIsStatusHover] = useState(task.status.color)

  const setStatus = (status) => {
    const { groups } = currBoard
    const currGroup = groups.find((group) => group.id === groupId)
    const currTask = currGroup.tasks.find((task) => task.id === taskId)
    currTask.status = status
    dispatch(updateBoard(currBoard))
  }

  return (
    <div
      className="trello-task-preview"
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <div className="trello-task-title">
        <span>{task.title}</span>
      </div>
      <div className="trello-task-data">
        <div
          onClick={() => {
            setIsStatusModal(!isStatusModal)
          }}
          className="task-activities-status"
          style={{ background: isStatusHover }}
        >
          <span>{task.status.name}</span>
          {isStatusModal && (
            <div
              className="task-activities-status-modal"
              onMouseEnter={() => {
                setIsStatusHover(task.status.hover)
              }}
            >
              <div>
                <AiFillCaretUp />
              </div>
              <div>
                {currBoard.statuses.map((status) => (
                  <div
                    key={status.color}
                    onClick={(ev) => setStatus(status)}
                    style={{ background: status.color }}
                  >
                    {status.name}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
