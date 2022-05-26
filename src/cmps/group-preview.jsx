import { GroupHeader } from './group-header'
import { TaskList } from './task-list'
import { GroupFooter } from './group-footer'

export const GroupPreview = ({ group }) => {
  const { _id, color, title, tasks } = group

  return (
    <div>
      <GroupHeader _id={_id} color={color} title={title} />
      <TaskList tasks={tasks} color={color} />
      <GroupFooter tasks={tasks} />
    </div>
  )
}
