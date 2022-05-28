import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom'
import { TaskModal } from './task-modal'
import { TaskTitle } from './task-title'
import { TaskActivites } from './task-activites'

export const TaskPreview = ({ task, color, groupId }) => {
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
    nevigate(`${groupId}/${id}`)
  }

  return (
    <div className="task-preview flex" onClick={() => onOpenTask()}>
      <TaskModal id={id} />
      <TaskTitle color={color} title={title} counter={updates.length} />
      <TaskActivites
        membersIds={membersIds}
        status={status}
        priority={priority}
        deadline={deadline}
        workHours={workHours}
        lastUpdated={lastUpdated}
      />
    </div>
  )
}
