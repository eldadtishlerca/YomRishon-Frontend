export const TaskActivites = ({
  membersIds,
  status,
  priority,
  deadline,
  workHours,
  lastUpdated,
}) => {
  return (
    <div className="flex">
      {/* <div>{membersIds}</div> */}
      <div>{status}</div>
      <div>{priority}</div>
      <div>{deadline}</div>
      <div>{workHours}</div>
      {/* <div>{lastUpdated}</div> */}
    </div>
  )
}
