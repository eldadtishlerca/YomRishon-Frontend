import { BoardsList } from './boards-list'
import { BoardsModalHeader } from './boards-modal-header'

export const BoardsModal = ({ onClick }) => {
  return (
    <div className="boards-modal">
      <BoardsModalHeader onClick={onClick} />
      <BoardsList />
    </div>
  )
}
