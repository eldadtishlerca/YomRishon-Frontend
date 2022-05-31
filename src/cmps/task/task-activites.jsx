import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { updateBoard } from '../../store/actions/board.actions'
import { utilService } from '../../services/util.service'
import { BsPlusCircleFill } from 'react-icons/bs'
import { AiFillCaretUp } from 'react-icons/ai'

export const TaskActivites = ({
  membersIds,
  status,
  priority,
  deadline,
  workHours,
  lastUpdated,
  background,
  innerColor,
  isHover,
  taskId,
  groupId
}) => {
  const { currBoard } = useSelector((storeState) => storeState.boardModule)
  const [assigneeHover, setAssigneeHover] = useState(false)
  const [workHoursValue, setWorkHours] = useState(workHours || '')
  const [isStatusModal, setIsStatusModal] = useState(false)
  const dispatch = useDispatch()

  const setDeadlineTime = () => {
    const deadlineTime = new Date(deadline)
    const year = deadlineTime.getFullYear()
    const month = utilService.monthIdxToName(deadlineTime.getMonth())
    const day = deadlineTime.getDate()

    const currTime = new Date()
    if (currTime.getFullYear() === year) return `${month} ${day}`
    return `${month} ${day}, ${year}`
  }

  const setLastUpdateTime = () => {
    const currTime = new Date()
    const updatedTime = currTime - lastUpdated.updatedAt
    const getTime = utilService.msToUpdate(updatedTime)
    return getTime
  }

  const bgHoverStatus = () => {
    const setStatusColor = isHover ? status.hover : status.color
    return setStatusColor
  }
  const bgHoverPriority = () => {
    const setPriorityColor = isHover ? priority.hover : priority.color
    return setPriorityColor
  }

  const onSubmitWorkHours = (ev) => {
    if (ev.key === 'Enter' || ev.type === 'blur') {
      console.log('WorkHoursValue updated to: *' + workHoursValue + '*');
      const { groups } = currBoard
      let currGroup = groups.find(group => {return group.id === groupId})
      let currTask = currGroup.tasks.find(task => {return task.id === taskId})
      currTask = {...currTask, workHours: workHoursValue}
      let currTasks = currGroup.tasks.map(task => {
        if (task.id === currTask.id) task = currTask
        return task
      })
      currGroup = {...currGroup, tasks:currTasks }
      let newGroups = currBoard.groups.map(group => {
          if (group.id === currGroup.id) group = currGroup
          return group
      })
      let newBoard = {...currBoard, groups:newGroups}
      console.log(newBoard);
      dispatch(updateBoard(newBoard))
    }
  }
  const onHandleChange = (ev) => {
    const { value } =  ev.target
    console.log(value);
    setWorkHours(value)
  }

  return (
    <div className="task-activities flex">
      {membersIds.length <= 2 ? (
        <div
          className="task-activities-assignee"
          style={{ background: background }}
          onMouseEnter={() => {
            setAssigneeHover(true)
          }}
          onMouseLeave={() => {
            setAssigneeHover(false)
          }}
        >
          {assigneeHover && (
            <div>
              <BsPlusCircleFill />
            </div>
          )}
          {membersIds.map((member) => (
            <img key={member._id} src={member.imgUrl} alt="" />
          ))}
        </div>
      ) : (
        <div
          className="task-activities-assignee"
          style={{ background: background }}
          onMouseEnter={() => {
            setAssigneeHover(true)
          }}
          onMouseLeave={() => {
            setAssigneeHover(false)
          }}
        >
          {assigneeHover && (
            <div>
              <BsPlusCircleFill />
            </div>
          )}
          <img key={membersIds[0]._id} src={membersIds[0].imgUrl} alt="" />
          <div className="task-activities-assignee-counter">
            <span>+{membersIds.length - 1}</span>
          </div>
        </div>
      )}
      <div
        onClick={() => setIsStatusModal(!isStatusModal)}
        className="task-activities-status"
        style={{ background: bgHoverStatus() }}
      >
        <span>{status.name}</span>
      </div>
      <div
        className="task-activities-priority"
        style={{ background: bgHoverPriority() }}
      >
        <span>{priority.name}</span>
        <div className="task-activities-priority-before"></div>
      </div>
      <div
        className="task-activities-hours"
        style={{ background: background, color: innerColor }}
      >
        {/* <span>{workHours} Hours</span> */}
        <span><input type="text" value={workHoursValue} className="work-hours-input"
          onBlur={(ev) => {
              onSubmitWorkHours(ev)
            }}
          onKeyUp={(ev) => {
            onSubmitWorkHours(ev)
            }}
          onChange={(ev) => {
              onHandleChange(ev)
            }} /> Hours</span>
      </div>
      <div
        className="task-activities-deadline"
        style={{ background: background, color: innerColor }}
      >
        <span>{setDeadlineTime()}</span>
      </div>
      <div
        className="task-activities-updated"
        style={{ background: background, color: innerColor }}
      >
        <img src={lastUpdated.imgUrl} alt="" />
        <span>{setLastUpdateTime()}</span>
      </div>
    </div>
  )
}
