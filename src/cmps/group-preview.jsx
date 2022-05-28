import { GroupHeader } from './group-header'
import { TaskList } from './task-list'
import { GroupFooter } from './group-footer'
import { NewTask } from './new-task'

export const GroupPreview = ({ group }) => {
  const { _id, color, title, tasks } = group

  return (
    <div className="group-preview">
      <GroupHeader _id={_id} color={color} title={title} />
      <TaskList tasks={tasks} color={color} />
      <NewTask color={color} />
      <GroupFooter tasks={tasks} />
    </div>
  )
}
