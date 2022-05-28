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
      <div className="group-header-status">
        <span>Status</span>
      </div>
      <div className="group-header-priority">
        <span>Priority</span>
      </div>
      <div className="group-header-deadline">
        <span>Deadline</span>
      </div>
      <div className="group-header-hours">
        <span>Working Hours</span>
      </div>
      <div className="group-header-updated">
        <span>Last Updated</span>
      </div>
    </div>
  )
}
