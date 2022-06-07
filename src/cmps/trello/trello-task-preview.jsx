import { useState } from 'react'
import { AiFillCaretUp } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { updateTask } from '../../store/actions/board.actions'
import { GiHamburgerMenu } from 'react-icons/gi'

export const TrelloTaskPreview = ({ provided, task, taskId, groupId }) => {
  const { currBoard } = useSelector((storeState) => storeState.boardModule)
  const dispatch = useDispatch()

  const [isStatusModal, setIsStatusModal] = useState(false)
  const [isStatusHover, setIsStatusHover] = useState(false)
  const [isPriorityHover, setIsPriorityHover] = useState(false)
  const [isPrioritysModal, setIsPrioritysModal] = useState(false)

  const setStatus = (status) => {
    const taskToUpdate = { ...task, status: status }
    dispatch(updateTask(currBoard, groupId, taskId, taskToUpdate))
  }

  const setPriority = (priority) => {
    const taskToUpdate = { ...task, priority: priority }
    dispatch(updateTask(currBoard, groupId, taskId, taskToUpdate))
  }

  const bgHoverStatus = () => {
    const setStatusColor = isStatusHover ? task.status.hover : task.status.color
    return setStatusColor
  }

  const bgHoverPriority = () => {
    const setPriorityColor = isPriorityHover
      ? task.priority.hover
      : task.priority.color
    return setPriorityColor
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
        <div className="trello-task-status">
          <div className="trello-task-status-title">
            <GiHamburgerMenu />
            <span>Status</span>
          </div>
          <div
            onClick={() => {
              setIsStatusModal(!isStatusModal)
            }}
            className="trello-status-label"
            style={{ background: bgHoverStatus() }}
            onMouseEnter={() => setIsStatusHover(true)}
            onMouseLeave={() => setIsStatusHover(false)}
          >
            <span>{task.status.name}</span>
            {isStatusModal && (
              <div className="trello-status-modal">
                <div>
                  <AiFillCaretUp />
                </div>
                <div>
                  {currBoard.statuses.map((status) => (
                    <div
                      key={status.color}
                      onClick={(ev) => setStatus(status)}
                      style={{ background: status.color }}
                      onMouseEnter={() => setIsStatusHover(false)}
                    >
                      {status.name}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="trello-task-priority">
          <div className="trello-task-priority-title">
            <GiHamburgerMenu />
            <span>Priority</span>
          </div>
          <div
            onClick={() => setIsPrioritysModal(!isPrioritysModal)}
            className="trello-priority-label"
            style={{ background: bgHoverPriority() }}
            onMouseEnter={() => setIsPriorityHover(true)}
            onMouseLeave={() => setIsPriorityHover(false)}
          >
            <span>{task.priority.name}</span>
            {isPrioritysModal && (
              <div className="trello-priority-modal">
                <div>
                  <AiFillCaretUp />
                </div>
                <div>
                  {currBoard.priorities.map((priority) => (
                    <div
                      key={priority.color}
                      onClick={() => setPriority(priority)}
                      style={{ background: priority.color }}
                      onMouseEnter={() => setIsPriorityHover(false)}
                    >
                      {priority.name}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
