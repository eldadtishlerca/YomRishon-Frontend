import { useEffect, useState } from 'react'
import { BiDockLeft } from 'react-icons/bi'
import { BiTrash } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateBoard } from '../../store/actions/board.actions'

export const BoardsList = ({ onRemoveBoard, onAddBoard }) => {
  const { boards } = useSelector((storeState) => storeState.boardModule)
  const { currBoard } = useSelector((storeState) => storeState.boardModule)
  const [boardsList, setBoardsList] = useState(boards)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSetBoard = (board) => {
    navigate(`/${board._id}`)
    dispatch(updateBoard(board))
  }

  useEffect(() => {
    setBoardsList(boards)
  }, [boards,currBoard])


  return (
    <div className="boards-list">
      {boards.map((board) => (
        <div
          className="flex"
          key={board._id}
          onClick={() => onSetBoard(board)}
        >
          <BiDockLeft />
          <span>{board.title}</span>
          <span className="delete-btn"  onClick={(ev) =>{
                ev.preventDefault()
                onRemoveBoard(ev,board._id)}
              } >
            <div
              className="icon-container"
             
                >
              <BiTrash />
            </div>
          </span>
          <span className="delete-btn">
            <div
              className="icon-container"
              onClick={(ev) => onAddBoard(ev,board)}
            >
              <div>Duplicate</div>
            </div>
          </span>
        </div>
      ))}
    </div>
  )
}
