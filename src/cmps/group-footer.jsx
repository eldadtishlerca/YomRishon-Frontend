export const GroupFooter = ({ tasks }) => {
  const sumHours = () => {
    const hoursArr = tasks.map((task) => task.workHours)
    const sum = hoursArr.reduce((acc, hours) => acc + hours, 0)
    return sum
  }

  const sortStatus = () => {
    const statusArr = tasks.map((task) => task.status)
    statusArr.sort((a, b) => {
      if (a < b) {
        return -1
      }
      if (b > a) {
        return -1
      }
      return 0
    })

    const sumColors = statusArr.map((status) => {
      switch (status) {
        case 'Waiting for Dev':
          return 'orange'
        case 'Working on it':
          return 'red'
        case 'Waiting for QA':
          return 'blue'
        case 'No Assignee':
          return 'grey'
        case 'Done':
          return 'green'
        default:
          return 'black'
      }
    })

    return sumColors
  }

  return (
    <div className="group-footer flex">
      <div className="group-footer-fake"></div>
      <div className="group-footer-fake2"></div>
      <div className="group-footer-status flex">
        {sortStatus().map((color, idx) => (
          <div
            key={idx}
            className="group-status-col"
            style={{
              background: color,
              width: 130 / tasks.length,
              height: '24px',
            }}
          ></div>
        ))}
      </div>
      <div className="group-footer-status flex">
        {sortStatus().map((color, idx) => (
          <div
            key={idx}
            className="group-status-col"
            style={{
              background: color,
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
