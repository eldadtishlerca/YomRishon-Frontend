import { GroupList } from './group-list'

export const BoardContent = ({ groups }) => {
  return (
    <div className="board-content">
      <GroupList groups={groups} />
    </div>
  )
}
