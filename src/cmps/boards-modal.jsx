import { AiFillCaretLeft } from 'react-icons/ai'
import { BoardsList } from './boards-list'
import { BoardsModalHeader } from './boards-modal-header'

export const BoardsModal = ({ onClick }) => {
  return (
    <div className="boards-modal">
      <div className="boards-modal-arrow">
        <AiFillCaretLeft />
      </div>
      <BoardsModalHeader onClick={onClick} />
      <BoardsList />
    </div>
  )
}
