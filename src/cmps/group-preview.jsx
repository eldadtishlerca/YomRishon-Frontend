import { GroupHeader } from './group-header'
import { TaskList } from './task-list'
import { GroupFooter } from './group-footer'

export const GroupPreview = ({ group }) => {
  return (
    <div>
      <GroupHeader />
      <TaskList />
      <GroupFooter />
    </div>
  )
}
