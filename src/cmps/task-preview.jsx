import { TaskModal } from './task-modal'
import { TaskTitle } from './task-title'
import { TaskActivites } from './task-activites'

export function TaskPreview() {
  return (
    <div className="flex">
      <TaskModal />
      <TaskTitle />
      <TaskActivites />
    </div>
  )
}
