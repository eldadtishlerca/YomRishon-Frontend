import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { updateGroup } from '../../store/actions/board.actions'
import { GroupModal } from './group-modal'

export const GroupHeader = ({ id, color, title, boardId, group }) => {
  const { currBoard } = useSelector((storeState) => storeState.boardModule)
  const [titleValue, setTitleValue] = useState(title)
  const dispatch = useDispatch()
  useEffect(() => {
    setTitleValue(title)
  }, [currBoard])

  const onSubmitTitle = (ev) => {
    if (ev.key === 'Enter' || ev.type === 'blur') {
      console.log('Title updated to: *' + titleValue + '*');
      const groupToUpdate = {...group, title: titleValue}
      dispatch(updateGroup(currBoard, group.id, groupToUpdate ))
    }
  }
  const onHandleChangeTitle = (ev) => {
    const { value } = ev.target
    console.log(value)
    setTitleValue(value)
  }

  return (
    <div className="group-header flex">
      <div className="group-modal-wrapper">
        <GroupModal id={id} color={color} boardId={boardId} />
      </div>
      <div className="group-title">
        <span style={{ color: color }}>{title}</span>
        {/* <input type="text" value={titleValue}
          onBlur={(ev) => {
            onSubmitTitle(ev)
          }}
          onKeyUp={(ev) => {
            onSubmitTitle(ev)
          }}
          onChange={(ev) => {
            onHandleChangeTitle(ev)
          }}
        /> */}
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
