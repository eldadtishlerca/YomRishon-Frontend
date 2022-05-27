import { GroupModal } from './group-modal'

export const GroupHeader = ({ _id, color, title }) => {
  return (
    <div className="group-header flex">
      <div className="group-modal-wrapper">
        <GroupModal _id={_id} color={color} />
      </div>
      <div className="group-title">
        <span style={{ color: color }}>{title}</span>
      </div>
      <div className="group-header-assignee">
        <span>Assignee</span>
      </div>
      <div>
        <span>Status</span>
      </div>
      <div>
        <span>Priority</span>
      </div>
      <div>
        <span>Deadline</span>
      </div>
      <div>
        <span>Working Hours</span>
      </div>
      <div>
        <span>Last Updated</span>
      </div>
    </div>
  )
}
