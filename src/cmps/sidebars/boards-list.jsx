import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { BoardPreview } from './board-preview'

export const BoardsList = ({ onRemoveBoard, onAddBoard }) => {
  const { boards } = useSelector((storeState) => storeState.boardModule)
  const { currBoard } = useSelector((storeState) => storeState.boardModule)

  useEffect(() => {}, [boards, currBoard])

  return (
    <div className="boards-list">
      {boards.map((board) => (
        <BoardPreview
          key={board._id}
          board={board}
          onRemoveBoard={onRemoveBoard}
          onAddBoard={onAddBoard}
        />
      ))}
    </div>
  )
}
