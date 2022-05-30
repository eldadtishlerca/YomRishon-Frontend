import { BiDockLeft } from 'react-icons/bi'
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
