import { useEffect, useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { useDispatch, useSelector } from 'react-redux'
import {
  getActionUpdateBoard,
  loadBoard,
} from '../../store/actions/board.actions'
import { GroupPreview } from '../group/group-preview'

export const BoardContent = () => {
  const { currBoard } = useSelector((storeState) => storeState.boardModule)

  const [groups, setGroups] = useState(currBoard.groups)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadBoard())
  }, [])

  // useEffect(() => {
  //   console.log(groups)
  // }, [groups])

  const onDragEnd = (result, groups) => {
    if (!result.destination) return
    const { source, destination } = result
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = groups[source.droppableId]
      const destColumn = groups[destination.droppableId]
      const sourceItems = [...sourceColumn.tasks]
      const destTasks = [...destColumn.tasks]
      const [removed] = sourceItems.splice(source.index, 1)
      destTasks.splice(destination.index, 0, removed)
      const newGroups = {
        ...groups,
        [source.droppableId]: { ...sourceColumn, tasks: sourceItems },
        [destination.droppableId]: { ...destColumn, tasks: destTasks },
      }
      setGroups(newGroups)
      currBoard.groups = newGroups
      getActionUpdateBoard(currBoard)
    } else {
      const column = groups[source.droppableId]
      const copiedItems = [...column.tasks]
      const [removed] = copiedItems.splice(source.index, 1)
      copiedItems.splice(destination.index, 0, removed)
      const newGroups = {
        ...groups,
        [source.droppableId]: {
          ...column,
          tasks: copiedItems,
        },
      }
      setGroups(newGroups)
      currBoard.groups = newGroups
      getActionUpdateBoard(currBoard)
    }
  }

  if (!currBoard.groups) return <div>Loading..</div>

  return (
    <div className="board-content">
      <DragDropContext onDragEnd={(result) => onDragEnd(result, groups)}>
        {Object.entries(groups).map(([id, group]) => {
          return (
            <Droppable droppableId={id} key={id}>
              {(provided, snapchat) => {
                return (
                  <GroupPreview
                    provided={provided}
                    snapchat={snapchat}
                    group={group}
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
