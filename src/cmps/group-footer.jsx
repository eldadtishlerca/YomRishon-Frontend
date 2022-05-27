import { useState } from 'react'

export const GroupFooter = ({ tasks }) => {
  const sumHours = () => {
    const hoursArr = tasks.map((task) => task.workHours)
    const sum = hoursArr.reduce((acc, hours) => acc + hours, 0)
    return sum
  }

  const [total, setTotal] = useState(sumHours())

  return <div className="group-footer">{total}</div>
}
