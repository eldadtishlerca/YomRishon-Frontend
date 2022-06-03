import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { updateGroup } from '../../store/actions/board.actions'
import { GroupModal } from './group-modal'

export const GroupHeader = ({ id, color, title, boardId, group }) => {
  const { currBoard } = useSelector((storeState) => storeState.boardModule)
  const [titleValue, setTitleValue] = useState(title)
  const [isEditing, setIsEditing] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {}, [currBoard])

  const onSubmitTitle = (ev) => {
    if (ev.key === 'Enter' || ev.type === 'blur') {
      const groupToUpdate = { ...group, title: titleValue }
      dispatch(updateGroup(currBoard, group.id, groupToUpdate))
      setIsEditing(false)
    }
  }
  const onHandleChangeTitle = (ev) => {
    const { value } = ev.target
    setTitleValue(value)
  }

  return (
    <div className="group-header flex">
      <div className="group-modal-wrapper">
        <GroupModal id={id} color={color} boardId={boardId} setIsEditing={setIsEditing}/>
      </div>
      <div className="group-title" onClick={() => setIsEditing(true)}>
        {isEditing ? (
          <input
            type="text"
            value={titleValue}
            onBlur={(ev) => {
              onSubmitTitle(ev)
            }}
            onKeyUp={(ev) => {
              onSubmitTitle(ev)
            }}
            onChange={(ev) => {
              onHandleChangeTitle(ev)
            }}
          />) : (<span style={{ color: color }}>{title}</span>
        )}
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
      <div className="group-header-hours">
        <span>Working Hours</span>
      </div>
      <div className="group-header-deadline">
        <span>Deadline</span>
      </div>
      <div className="group-header-updated">
        <span>Last Updated</span>
      </div>
    </div>
  )
}
