import { BoardsList } from './boards-list'
import { BoardsModalHeader } from './boards-modal-header'

export const BoardsModal = () => {
  return (
    <div className="boards-modal">
      <BoardsModalHeader />
      <BoardsList />
    </div>
  )
}
