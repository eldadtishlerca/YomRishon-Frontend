import { useState } from 'react'
import { utilService } from '../../services/util.service'
import { BsPlusCircleFill } from 'react-icons/bs'

export const TaskActivites = ({
  membersIds,
  status,
  priority,
  deadline,
  workHours,
  lastUpdated,
  background,
  innerColor,
  isHover,
}) => {
  const [assigneeHover, setAssigneeHover] = useState(false)

  const setDeadlineTime = () => {
    const deadlineTime = new Date(deadline)
    const year = deadlineTime.getFullYear()
    const month = utilService.monthIdxToName(deadlineTime.getMonth())
    const day = deadlineTime.getDate()

    const currTime = new Date()
    if (currTime.getFullYear() === year) return `${month} ${day}`
    return `${month} ${day}, ${year}`
  }

  const setLastUpdateTime = () => {
    const currTime = new Date()
    const updatedTime = currTime - lastUpdated.updatedAt
    const getTime = utilService.msToUpdate(updatedTime)
    return getTime
  }

  const bgHoverStatus = () => {
    const setStatusColor = isHover ? status.hover : status.color
    return setStatusColor
  }
  const bgHoverPriority = () => {
    const setPriorityColor = isHover ? priority.hover : priority.color
    return setPriorityColor
  }

  return (
    <div className="task-activities flex">
      {membersIds.length <= 2 ? (
        <div
          className="task-activities-assignee"
          style={{ background: background }}
          onMouseEnter={() => {
            setAssigneeHover(true)
          }}
          onMouseLeave={() => {
            setAssigneeHover(false)
          }}
        >
          {assigneeHover && (
            <div>
              <BsPlusCircleFill />
            </div>
          )}
          {membersIds.map((member) => (
            <img key={member._id} src={member.imgUrl} alt="" />
          ))}
        </div>
      ) : (
        <div
          className="task-activities-assignee"
          style={{ background: background }}
          onMouseEnter={() => {
            setAssigneeHover(true)
          }}
          onMouseLeave={() => {
            setAssigneeHover(false)
          }}
        >
          {assigneeHover && (
            <div>
              <BsPlusCircleFill />
            </div>
          )}
          <img key={membersIds[0]._id} src={membersIds[0].imgUrl} alt="" />
          <div className="task-activities-assignee-counter">
            <span>+{membersIds.length - 1}</span>
          </div>
        </div>
      )}
      <div
        className="task-activities-status"
        style={{ background: bgHoverStatus() }}
      >
        <span>{status.name}</span>
      </div>
      <div
        className="task-activities-priority"
        style={{ background: bgHoverPriority() }}
      >
        <span>{priority.name}</span>
        <div className="task-activities-priority-before"></div>
      </div>
      <div
        className="task-activities-hours"
        style={{ background: background, color: innerColor }}
      >
        <span>{workHours} Hours</span>
      </div>
      <div
        className="task-activities-deadline"
        style={{ background: background, color: innerColor }}
      >
        <span>{setDeadlineTime()}</span>
      </div>
      <div
        className="task-activities-updated"
        style={{ background: background, color: innerColor }}
      >
        <img src={lastUpdated.imgUrl} alt="" />
        <span>{setLastUpdateTime()}</span>
      </div>
    </div>
  )
}
