import { TaskPreview } from './task-preview'

export const TaskList = ({ tasks, color, groupId }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskPreview key={task.id} task={task} color={color} groupId={groupId}/>
      ))}
    </div>
  )
}
