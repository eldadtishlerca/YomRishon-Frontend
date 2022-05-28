export const GroupFooter = ({ tasks }) => {
  const sumHours = () => {
    const hoursArr = tasks.map((task) => task.workHours)
    const sum = hoursArr.reduce((acc, hours) => acc + hours, 0)
    return sum
  }

  const sortStatus = () => {
    const sortStatus = tasks.map((task) => task.status)
    sortStatus.sort((a, b) => {
      if (a.name < b.name) {
        return -1
      }
      if (b.name > a.name) {
        return -1
      }
      return 0
    })

    return sortStatus
  }

  const sortPriority = () => {
    const priorityArr = tasks.map((task) => task.priority)
    priorityArr.sort((a, b) => {
      if (a.name < b.name) {
        return -1
      }
      if (b.name > a.name) {
        return -1
      }
      return 0
    })
    return priorityArr
  }

  return (
    <div className="group-footer flex">
      <div className="group-footer-fake"></div>
      <div className="group-footer-fake2"></div>
      <div className="group-footer-status flex">
        {sortStatus().map((status, idx) => (
          <div
            key={idx}
            className="group-status-col"
            style={{
              background: status.color,
              width: 130 / tasks.length,
              height: '24px',
            }}
          ></div>
        ))}
      </div>
      <div className="group-footer-status flex">
        {sortPriority().map((priority, idx) => (
          <div
            key={idx}
            className="group-status-col"
            style={{
              background: priority.color,
              width: 130 / tasks.length,
              height: '24px',
            }}
          ></div>
        ))}
      </div>
      <div className="group-footer-hours">
        <p>{sumHours()} Hours</p>
        <span>Sum</span>
      </div>
      <div className="group-footer-fake3"></div>
    </div>
  )
}
