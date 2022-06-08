import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { utilService } from '../../services/util.service'
import { updateTask } from '../../store/actions/board.actions'
import { BsPlusCircleFill } from 'react-icons/bs'
import { AiFillCaretUp } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
// import { socketService } from '../../services/socket.service'

export const TaskActivites = ({
  onOpenModal,
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
  groupId,
  setHover,
  setBackground,
  setInnerColor,
  task,
}) => {
  const { currBoard } = useSelector((storeState) => storeState.boardModule)
  const [assigneeHover, setAssigneeHover] = useState(false)
  const [workHoursValue, setWorkHours] = useState(workHours || '')
  const [isAssigneeModal, setIsAssigneeModal] = useState(false)
  const [isStatusModal, setIsStatusModal] = useState(false)
  const [isPrioritysModal, setIsPrioritysModal] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [assingeeIds, setAssingeeIds] = useState(null)
  const [onSetDeadline, setOnSetDeadline] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {}, [assingeeIds, currBoard])

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

  const bgHoverStatusFolding = () => {
    const setStatusColor = isHover ? status.color : status.hover
    return setStatusColor
  }

  const bgHoverPriority = () => {
    const setPriorityColor = isHover ? priority.hover : priority.color
    return setPriorityColor
  }

  const bgHoverPriorityFolding = () => {
    const setPriorityColor = isHover ? priority.color : priority.hover
    return setPriorityColor
  }

  const setStatus = (currStatus) => {
    const taskToUpdate = { ...task, status: currStatus }
    console.log(currBoard)
    dispatch(updateTask(currBoard, groupId, taskId, taskToUpdate))
  }

  const setPriority = (priority) => {
    const taskToUpdate = { ...task, priority: priority }
    dispatch(updateTask(currBoard, groupId, taskId, taskToUpdate))
  }

  const onSubmitWorkHours = (ev) => {
    if (ev.key === 'Enter' || ev.type === 'blur') {
      setIsEditing(false)
      console.log('WorkHoursValue updated to: *' + workHoursValue + '*')
      const taskToUpdate = { ...task, workHours: +workHoursValue }
      dispatch(updateTask(currBoard, groupId, taskId, taskToUpdate))
    }
  }
  const onHandleChange = (ev) => {
    const { value } = ev.target
    console.log(value)
    setWorkHours(value)
  }

  const getMembersIds = () => {
    const ids = membersIds.map((member) => member.id)
    setAssingeeIds(ids)
  }

  const onRemoveMember = (id) => {
    const currMembers = task.membersIds.filter((member) => member.id !== id)
    const taskToUpdate = { ...task, membersIds: currMembers }
    dispatch(updateTask(currBoard, groupId, taskId, taskToUpdate))
  }

  const onAddMember = (member) => {
    const currMembers = [...task.membersIds]
    console.log(currMembers)
    currMembers.push(member)
    const taskToUpdate = { ...task, membersIds: currMembers }
    dispatch(updateTask(currBoard, groupId, taskId, taskToUpdate))
  }

  return (
    <div className="task-activities flex">
      {membersIds.length === 0 && (
        <div
          onClick={() => {
            setIsAssigneeModal(!isAssigneeModal)
            getMembersIds()
          }}
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
          <div className="fake-img-assignee">
            <CgProfile />
          </div>
        </div>
      )}
      {membersIds.length > 0 && membersIds.length <= 2 && (
        <div
          onClick={() => {
            setIsAssigneeModal(!isAssigneeModal)
            getMembersIds()
          }}
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
            <img key={member.id} src={member.imgUrl} alt="" />
          ))}
        </div>
      )}
      {membersIds.length > 2 && (
        <div
          onClick={() => setIsAssigneeModal(!isAssigneeModal)}
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
          <img key={membersIds[0].id} src={membersIds[0].imgUrl} alt="" />
          <div className="task-activities-assignee-counter">
            <span>+{membersIds.length - 1}</span>
          </div>
        </div>
      )}
      {isAssigneeModal && (
        <div
          className="assignee-modal"
          onMouseEnter={() => {
            setHover(false)
            setBackground('#f5f6f8')
            setInnerColor('#666666')
          }}
        >
          <div className="are-assignee">
            {membersIds !== 0 &&
              membersIds.map((member) => (
                <div key={member.id}>
                  <img key={member.id} src={member.imgUrl} alt="" />
                  <span>{member.fullname}</span>
                  <span
                    onClick={() => {
                      onRemoveMember(member.id)
                      setIsAssigneeModal(false)
                    }}
                  >
                    X
                  </span>
                </div>
              ))}
          </div>
          <div className="not-assignee">
            <div>Enter another name</div>
            <div className="people-line">
              <div className="people-overline">
                <span>People</span>
              </div>
            </div>
            <div className="not-assignee-members">
              {currBoard.members.map((member) => {
                if (assingeeIds.includes(member.id)) {
                  return null
                } else {
                  return (
                    <div
                      className="not-assignee-member"
                      key={member.id}
                      onClick={() => {
                        onAddMember(member)
                        setIsAssigneeModal(false)
                      }}
                    >
                      <img key={member.id} src={member.imgUrl} alt="" />
                      <span>{member.fullname}</span>
                    </div>
                  )
                }
              })}
            </div>
          </div>
        </div>
      )}
      <div
        onClick={() => {
          setIsStatusModal(!isStatusModal)
        }}
        className="task-activities-status"
        style={{
          background: bgHoverStatus(),
          borderBottomColor: bgHoverStatusFolding(),
        }}
      >
        <span>{status.name}</span>
        {isStatusModal && (
          <div
            className="task-activities-status-modal"
            onMouseEnter={() => {
              setHover(false)
              setBackground('#f5f6f8')
              setInnerColor('#666666')
            }}
          >
            <div>
              <AiFillCaretUp />
            </div>
            <div>
              {(
                currBoard.statuses.map((status) => (
                  <div
                    key={status.color}
                    onClick={(ev) => setStatus(status)}
                    style={{ background: status.color }}
                  >
                    {status.name}
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
      <div
        onClick={() => setIsPrioritysModal(!isPrioritysModal)}
        className="task-activities-priority"
        style={{
          background: bgHoverPriority(),
          borderBottomColor: bgHoverPriorityFolding(),
        }}
      >
        <span>{priority.name}</span>
        {isPrioritysModal && (
          <div
            className="task-activities-priority-modal"
            onMouseEnter={() => {
              setHover(false)
              setBackground('#f5f6f8')
              setInnerColor('#666666')
            }}
          >
            <div>
              <AiFillCaretUp />
            </div>
            <div>
              {currBoard.priorities.map((priority) => (
                <div
                  key={priority.color}
                  onClick={() => setPriority(priority)}
                  style={{ background: priority.color }}
                >
                  {priority.name}
                </div>
              ))}
            </div>
          </div>
        )}
        {/* <div className="task-activities-priority-before"></div> */}
      </div>
      <div
        className="task-activities-hours"
        style={{ background: background, color: innerColor }}
      >
        {isEditing ? (
          <input
            style={{ background: background, color: innerColor }}
            value={workHoursValue}
            onBlur={(ev) => {
              onSubmitWorkHours(ev)
            }}
            onKeyUp={(ev) => {
              onSubmitWorkHours(ev)
            }}
            onChange={(ev) => {
              onHandleChange(ev)
            }}
          />
        ) : (
          <span onClick={() => setIsEditing(!isEditing)}>
            {workHours} Hours
          </span>
        )}
      </div>
      <div
        className="task-activities-deadline"
        style={{ background: background, color: innerColor }}
        onClick={() => setOnSetDeadline(!onSetDeadline)}
      >
        <span>{setDeadlineTime()}</span>
        {onSetDeadline && <input type="date" />}
      </div>
      <div
        className="task-activities-updated"
        style={{ background: background, color: innerColor }}
        onClick={onOpenModal}
      >
        <img src={lastUpdated.imgUrl} alt="" />
        <span>{setLastUpdateTime()}</span>
      </div>
    </div>
  )
}
