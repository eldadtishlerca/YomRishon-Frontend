import { Draggable } from 'react-beautiful-dnd'
import { TrelloTaskPreview } from './trello-task-preview'
import { TrelloGroupHeader } from './trello-group-header'
import { TrelloNewTask } from './trello-new-task'

export const TrelloGroupPreview = ({ group, provided, snapchat, boardId }) => {
  const { id, color, title, tasks } = group

  return (
    <div
      className="trello-group-preview"
      {...provided.droppableProps}
      ref={provided.innerRef}
      style={{ borderColor: color }}
    >
      <TrelloGroupHeader color={color} title={title} group={group} />
      {tasks.map((task, idx) => {
        return (
          <Draggable key={task.id} draggableId={task.id} index={idx}>
            {(provided, snapchat) => {
              return (
                <TrelloTaskPreview
                  snapchat={snapchat}
                  provided={provided}
                  key={task.id}
                  task={task}
                  taskId={task.id}
                  groupId={id}
                />
              )
            }}
          </Draggable>
        )
      })}
      {provided.placeholder}
      <TrelloNewTask />
    </div>
  )
}
