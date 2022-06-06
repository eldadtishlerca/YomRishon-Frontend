export const onDragEnd = (result, groups) => {
  if (!result.destination) return
  const { source, destination } = result
  if (
    source.index === destination.index &&
    source.droppableId === destination.droppableId
  )
    return
  if (source.droppableId !== destination.droppableId) {
    const currGroup = groups[source.droppableId]
    const destGroup = groups[destination.droppableId]
    const sourceItems = [...currGroup.tasks]
    const destTasks = [...destGroup.tasks]
    const [removed] = sourceItems.splice(source.index, 1)
    destTasks.splice(destination.index, 0, removed)
    groups[source.droppableId] = {
      ...groups[source.droppableId],
      tasks: sourceItems,
    }
    groups[destination.droppableId] = {
      ...groups[destination.droppableId],
      tasks: destTasks,
    }
  } else {
    const column = groups[source.droppableId]
    const copiedItems = [...column.tasks]
    const [removed] = copiedItems.splice(source.index, 1)
    copiedItems.splice(destination.index, 0, removed)
    groups[source.droppableId] = {
      ...groups[source.droppableId],
      tasks: copiedItems,
    }
  }
  return groups
}
