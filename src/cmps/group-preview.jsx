import { GroupHeader } from './group-header'
import { GroupModal } from './group-modal'
import { TaskList } from './task-list'

export function GroupPreview() {
  return (
    <div>
      <GroupHeader />
      <TaskList />
      <GroupModal />
    </div>
  )
}
