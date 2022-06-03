import { BsThreeDots } from 'react-icons/bs'
import { BiDockLeft } from 'react-icons/bi'
import { BiTrash } from 'react-icons/bi'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateBoard } from '../../store/actions/board.actions'
import { AiOutlineCopy } from 'react-icons/ai'

export const BoardPreview = ({ board, onRemoveBoard, onAddBoard }) => {
  const { title, _id } = board

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSetBoard = (board) => {
    navigate(`/${_id}`)
    dispatch(updateBoard(board))
  }
  const [isToggleModal, setIsToggleModal] = useState(false)
  const [isHover, setIsHover] = useState(false)

  return (
    <div
      className="flex"
      key={_id}
      onClick={() => onSetBoard(board)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div>
        <BiDockLeft />
      </div>
      <span>{title}</span>
      {(isHover || isToggleModal) && (
        <div
          className="boards-list-modal-btn"
          onClick={(ev) => {
            ev.stopPropagation()
            setIsToggleModal(!isToggleModal)
          }}
        >
          <BsThreeDots />
          {isToggleModal && (
            <div
              className="boards-list-modal"
              onClick={(ev) => ev.stopPropagation()}
              onMouseLeave={() => {
                setIsHover(false)
                setIsToggleModal(false)
              }}
            >
              <div
                onClick={(ev) => {
                  ev.preventDefault()
                  onRemoveBoard(ev, board._id)
                }}
              >
                <BiTrash />
                <span>Delete Board</span>
              </div>
              <div onClick={(ev) => onAddBoard(ev, board)}>
                <AiOutlineCopy />
                <span>Duplicate Board</span>
              </div>
            </div>
          )}
        </div>
      )}
      {/* <span
            className="delete-btn"
            onClick={(ev) => {
              ev.preventDefault()
              onRemoveBoard(ev, board._id)
            }}
          >
            <div className="icon-container">
              <BiTrash />
            </div>
          </span>
          <span className="delete-btn">
            <div
              className="icon-container"
              onClick={(ev) => onAddBoard(ev, board)}
            >
              <div>Duplicate</div>
            </div>
          </span> */}
    </div>
  )
}
