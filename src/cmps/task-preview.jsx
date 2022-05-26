import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom'
import { TaskModal } from './task-modal'
import { TaskTitle } from './task-title'
import { TaskActivites } from './task-activites'

export const TaskPreview = () => {
  let nevigate = useNavigate()

  const onOpenTask = () => {
    nevigate('/:groupId/:taskId')
  }

  return (
    <div className="flex" onClick={() => onOpenTask}>
      <TaskModal />
      <TaskTitle />
      <TaskActivites />
    </div>
  )
}
