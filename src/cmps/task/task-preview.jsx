import { TaskModal } from './task-modal'
import { TaskTitle } from './task-title'
import { TaskActivites } from './task-activites'
import { TaskDetails } from './task-details'
import { useState } from 'react'

export const TaskPreview = ({
  task,
  groupColor,
  groupId,
  provided,
  snapchat,
}) => {
  const [background, setBackground] = useState('#f5f6f8')
  const [innerColor, setInnerColor] = useState('#666666')
  const [hover, setHover] = useState(false)
  const [showModal, SetShowModal] = useState(false)

  const {
    id,
    title,
    membersIds,
    status,
    priority,
    deadline,
    workHours,
    lastUpdated,
    updates,
  } = task

  const onOpenModal = () => {
    SetShowModal(!showModal)
  }

  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className="task-preview flex"
      onMouseEnter={() => {
        setBackground('#E6E9EF')
        setInnerColor('#1f76c2')
        setHover(true)
      }}
      onMouseLeave={() => {
        setBackground('#f5f6f8')
        setInnerColor('#666666')
        setHover(false)
      }}
    >
      {showModal && <TaskDetails task={task} SetShowModal={SetShowModal} />}
      <TaskModal id={id} groupId={groupId} isHover={hover} />
      <TaskTitle
        onClick={onOpenModal}
        groupColor={groupColor}
        title={title}
        counter={updates.length}
        background={background}
        innerColor={innerColor}
        taskId={id}
        groupId={groupId}
        task={task}
      />
      <TaskActivites
        onOpenModal={onOpenModal}
        membersIds={membersIds}
        status={status}
        priority={priority}
        deadline={deadline}
        workHours={workHours}
        lastUpdated={lastUpdated}
        background={background}
        innerColor={innerColor}
        isHover={hover}
        taskId={id}
        groupId={groupId}
        setHover={setHover}
        setBackground={setBackground}
        setInnerColor={setInnerColor}
        task={task}
      />
    </div>
  )
}
