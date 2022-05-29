import { utilService } from '../services/util.service'

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
  const membersImgs =
    membersIds.length <= 2 ? membersIds.map((member) => member.imgUrl) : null

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
      {membersImgs ? (
        <div
          className="task-activities-assignee"
          style={{ background: background }}
        >
          {membersImgs.map((url) => (
            <img key={url} src={url} alt="" />
          ))}
        </div>
      ) : (
        <div
          className="task-activities-assignee"
          style={{ background: background }}
        >
          Check
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
