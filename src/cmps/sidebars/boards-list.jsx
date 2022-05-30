import { BiDockLeft } from 'react-icons/bi'
import { BiTrash } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getActionBoard } from '../../store/actions/board.actions'

export const BoardsList = ({ boards }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSetBoard = (board) => {
    navigate(`/${board._id}`)
    dispatch(getActionBoard(board))
  }

  const onRemoveBoard = (boardId) => {
    console.log(`Board ${boardId} removed`)
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
            <div className="icon-container" onClick={() => onRemoveBoard(board._id)}>
              <BiTrash />
            </div>
          </span>
        </div>
      ))}
      {/* <div className="flex board-active">
        <BiDockLeft />
        <span>YomRishon</span>
      </div> */}
      {/* <div className="flex">
        <BiDockLeft />
        <span>YomRishon Demo Data</span>
      </div> */}
    </div>
  )
}
