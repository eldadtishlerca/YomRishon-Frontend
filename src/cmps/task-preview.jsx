import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom'
import { TaskModal } from './task-modal'
import { TaskTitle } from './task-title'
import { TaskActivites } from './task-activites'
import { TaskDetails } from './task-details'
import { useState } from 'react'

export const TaskPreview = ({ task, groupColor }) => {
  const [background, setBackground] = useState('#f5f6f8')
  const [innerColor, setInnerColor] = useState('#666666')

  console.log(background, innerColor)

  const {
    id,
    title,
    membersIds,
    status,
    priority,
    deadline,
    workHours,
    lastUpdated,
    updates,
  } = task

  let nevigate = useNavigate()

  const onOpenTask = () => {
    nevigate('/:groupId/:taskId')
  }

  return (
    <div
      className="task-preview flex"
      onClick={() => onOpenTask()}
      onMouseEnter={() => {
        setBackground('#E6E9EF')
        setInnerColor('#1f76c2')
      }}
      onMouseLeave={() => {
        setBackground('#f5f6f8')
        setInnerColor('#666666')
      }}
    >
      <TaskModal id={id} />
      <TaskTitle
        groupColor={groupColor}
        title={title}
        counter={updates.length}
        background={background}
        innerColor={innerColor}
      />
      <TaskActivites
        membersIds={membersIds}
        status={status}
        priority={priority}
        deadline={deadline}
        workHours={workHours}
        lastUpdated={lastUpdated}
        background={background}
        innerColor={innerColor}
      />
      <Routes>
        <Route path="/:groupId/:taskId" component={<TaskDetails />} />
      </Routes>
    </div>
  )
}
