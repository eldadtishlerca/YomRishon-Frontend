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

export const TaskPreview = ({ task, color }) => {
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
    <div className="flex" onClick={() => onOpenTask()}>
      <TaskModal id={id} />
      <TaskTitle color={color} title={title} />
      <TaskActivites />
      <Routes>
        <Route path="/:groupId/:taskId" component={<TaskDetails />} />
      </Routes>
    </div>
  )
}
