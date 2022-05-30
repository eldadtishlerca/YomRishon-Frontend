import { useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { GroupPreview } from '../group/group-preview'

export const BoardContent = ({ groups }) => {
  const [columns, setColumns] = useState(groups)

  console.log(groups)

  const onDragEnd = (result, columns) => {
    if (!result.destination) return
    const { source, destination } = result
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId]
      const destColumn = columns[destination.droppableId]
      const sourceItems = [...sourceColumn.tasks]
      const destTasks = [...destColumn.tasks]
      const [removed] = sourceItems.splice(source.index, 1)
      destTasks.splice(destination.index, 0, removed)
      const newColumns = {
        ...columns,
        [source.droppableId]: { ...sourceColumn, tasks: sourceItems },
        [destination.droppableId]: { ...destColumn, tasks: destTasks },
      }
      setColumns(newColumns)
    } else {
      const column = columns[source.droppableId]
      const copiedItems = [...column.tasks]
      const [removed] = copiedItems.splice(source.index, 1)
      copiedItems.splice(destination.index, 0, removed)
      const newColumns = {
        ...columns,
        [source.droppableId]: {
          ...column,
          tasks: copiedItems,
        },
      }
      setColumns(newColumns)
    }
  }

  return (
    <div className="board-content">
      <DragDropContext onDragEnd={(result) => onDragEnd(result, columns)}>
        {Object.entries(columns).map(([id, column]) => {
          return (
            <Droppable droppableId={id} key={id}>
              {(provided, snapchat) => {
                return (
                  <GroupPreview
                    provided={provided}
                    snapchat={snapchat}
                    group={column}
                    key={id}
                  />
                )
              }}
            </Droppable>
          )
        })}
      </DragDropContext>
    </div>
  )
}
