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

  const setTime = () => {
    const currTime = new Date()
    const updatedTime = currTime - deadline
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
        <span>{deadline}</span>
      </div>
      <div className="task-activities-hours">
        <span>{workHours} Hours</span>
      </div>
      <div className="task-activities-updated">
        <span>{setTime()}</span>
      </div>
    </div>
  )
}
