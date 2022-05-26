import { GroupPreview } from './group-preview'

export const GroupList = ({ groups }) => {
  return (
    <div>
      {groups.map((group) => (
        <GroupPreview key={group.id} group={group} />
      ))}
    </div>
  )
}
