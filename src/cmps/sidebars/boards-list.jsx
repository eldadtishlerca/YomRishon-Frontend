import { BiDockLeft } from 'react-icons/bi'
import { BiTrash } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateBoard } from '../../store/actions/board.actions'

export const BoardsList = ({ boards, onRemoveBoard }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSetBoard = (board) => {
    navigate(`/${board._id}`)
    dispatch(updateBoard(board))
  }

  return (
    <div className="boards-list">
      {boards.map((board) => (
        <div
          className="flex board-active"
          key={board._id}
          onClick={() => onSetBoard(board)}
        >
          <BiDockLeft />
          <span>{board.title}</span>
          <span className="delete-btn">
            <div
              className="icon-container"
              onClick={() => onRemoveBoard(board._id)}
            >
              <BiTrash />
            </div>
          </span>
        </div>
      ))}
    </div>
  )
}
