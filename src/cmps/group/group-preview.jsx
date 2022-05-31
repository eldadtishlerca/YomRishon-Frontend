import { GroupHeader } from './group-header'
import { GroupFooter } from './group-footer'
import { NewTask } from '../task/new-task'
import { Draggable } from 'react-beautiful-dnd'
import { TaskPreview } from '../task/task-preview'

export const GroupPreview = ({ group, provided, snapchat, boardId }) => {
  const { id, color, title, tasks, hoverColor } = group

  return (
    <div
      className="group-preview"
      {...provided.droppableProps}
      ref={provided.innerRef}
    >
      <GroupHeader id={id} color={color} title={title} boardId={boardId} />
      {group.tasks.map((task, idx) => {
        return (
          <Draggable key={task.id} draggableId={task.id} index={idx}>
            {(provided, snapchat) => {
              return (
                <TaskPreview
                  snapchat={snapchat}
                  provided={provided}
                  key={task.id}
                  task={task}
                  groupColor={color}
                />
              )
            }}
          </Draggable>
        )
      })}
      {/* <TaskList tasks={tasks} color={color} /> */}
      <NewTask color={color} hoverColor={hoverColor} />
      <GroupFooter tasks={tasks} />
      {provided.placeholder}
    </div>
  )
}
