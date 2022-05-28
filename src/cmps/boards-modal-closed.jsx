import { AiOutlineRight } from 'react-icons/ai'

export const BoardsModalClosed = ({ onClick }) => {
  return (
    <div className="boards-modal-closed">
      <div className="boards-modal-closed-btn" onClick={() => onClick()}>
        <AiOutlineRight />
      </div>
    </div>
  )
}
