import { ToolBar } from './toolbar'
import { GroupList } from './group-list'

export const MainBoard = ({ board }) => {
  return (
    <div>
      <ToolBar />
      <GroupList />
    </div>
  )
}
