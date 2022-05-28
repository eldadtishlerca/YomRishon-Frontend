import { utilService } from '../services/util.service'

export const TaskActivites = ({
  membersIds,
  status,
  priority,
  deadline,
  workHours,
  lastUpdated,
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

  return (
    <div className="task-activities flex">
      {membersImgs ? (
        <div className="task-activities-assignee">
          {membersImgs.map((url) => (
            <img key={url} src={url} alt="" />
          ))}
        </div>
      ) : (
        <div className="task-activities-assignee">Check</div>
      )}
      <div className="task-activities-status">
        <span>{status}</span>
      </div>
      <div className="task-activities-priority">
        <span>{priority}</span>
      </div>
      <div className="task-activities-deadline">
        <span>{setDeadlineTime()}</span>
      </div>
      <div className="task-activities-hours">
        <span>{workHours} Hours</span>
      </div>
      <div className="task-activities-updated">
        <img src={lastUpdated.imgUrl} alt="" />
        <span>{setLastUpdateTime()}</span>
      </div>
    </div>
  )
}
