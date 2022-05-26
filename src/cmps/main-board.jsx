import { ToolBar } from './toolbar'
import { GroupList } from './group-list'

export function MainBoard({ board }) {
  return (
    <div>
      <ToolBar />
      <GroupList />
    </div>
  )
}
