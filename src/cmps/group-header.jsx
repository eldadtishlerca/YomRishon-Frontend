import { GroupModal } from './group-modal'

export const GroupHeader = ({ _id, color, title }) => {
  return (
    <div className="flex">
      <GroupModal _id={_id} color={color} />
      <div>{title}</div>
    </div>
  )
}
