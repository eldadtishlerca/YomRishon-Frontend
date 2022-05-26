import { GroupList } from './group-list'

export const BoardContent = ({ groups }) => {
  return (
    <div>
      <GroupList groups={groups} />
    </div>
  )
}
