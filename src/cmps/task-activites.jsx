import { utilService } from '../services/util.service'

export const TaskActivites = ({
  membersIds,
  status,
  priority,
  deadline,
  workHours,
  lastUpdated,
}) => {
  const setTime = () => {
    const currTime = new Date()
    const updatedTime = currTime - deadline
    const getTime = utilService.msToUpdate(updatedTime)
    return getTime
  }

  return (
    <div className="flex">
      {/* <div>{membersIds}</div> */}
      <div>{status}</div>
      <div>{priority}</div>
      <div>{setTime()}</div>
      <div>{workHours}</div>
      {/* <div>{lastUpdated}</div> */}
    </div>
  )
}
