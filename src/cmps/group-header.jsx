import { GroupModal } from './group-modal'

export const GroupHeader = ({ _id, color, title }) => {
  return (
    <div className="flex">
      <div>
        <GroupModal _id={_id} color={color} />
      </div>
      <div>
        <div>{title}</div>
      </div>
      <div>
        <h5>Assignee</h5>
      </div>
      <div>
        <h5>Status</h5>
      </div>
      <div>
        <h5>Priority</h5>
      </div>
      <div>
        <h5>Deadline</h5>
      </div>
      <div>
        <h5>Working Hours</h5>
      </div>
      <div>
        <h5>Last Updated</h5>
      </div>
    </div>
  )
}
