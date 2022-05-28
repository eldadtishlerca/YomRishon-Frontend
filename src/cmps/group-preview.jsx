import { GroupHeader } from './group-header'
import { TaskList } from './task-list'
import { GroupFooter } from './group-footer'

export const GroupPreview = ({ group }) => {
  const { id, color, title, tasks } = group

  return (
    <div className="group-preview">
      <GroupHeader _id={id} color={color} title={title} />
      <TaskList tasks={tasks} color={color} groupId={id} />
      <GroupFooter tasks={tasks} />
    </div>
  )
}
