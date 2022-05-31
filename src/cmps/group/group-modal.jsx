import { useState } from 'react'
import {
  AiOutlineCaretDown,
  AiOutlineCopy,
  AiOutlinePlus,
} from 'react-icons/ai'
import { BiPencil, BiTrash } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { updateBoard } from '../../store/actions/board.actions'

export const GroupModal = ({ id, color, boardId }) => {
  const { currBoard } = useSelector((storeState) => storeState.boardModule)

  const dispatch = useDispatch()

  const [background, setBackground] = useState(color)
  const [innerColor, setInnerColor] = useState('#fff')
  const [toggleModal, setToggleModal] = useState(false)

  const onGroupModalToggle = () => {
    setToggleModal(!toggleModal)
  }

  const onDeleteGroup = () => {
    const deletedGroup = currBoard.groups.findIdx((group) => group.id === id)
    currBoard.groups.splice(deletedGroup, 1)
    dispatch(updateBoard(currBoard))
  }

  return (
    <div className="group-modal">
      <div
        className="group-modal-btn"
        onMouseEnter={() => {
          setBackground('#fff')
          setInnerColor(color)
        }}
        onMouseLeave={() => {
          setBackground(color)
          setInnerColor('#fff')
        }}
        style={{
          backgroundColor: background,
          color: innerColor,
          borderColor: innerColor,
        }}
      >
        <AiOutlineCaretDown onClick={onGroupModalToggle} />
      </div>
      {toggleModal && (
        <div className="group-modal-toggle flex">
          <div>
            <div>
              <AiOutlinePlus />
            </div>
            <span>Add group</span>
          </div>
          <div>
            <div>
              <AiOutlineCopy className="group-modal-border-no" />
            </div>
            <span>Duplicate this group</span>
          </div>
          <div>
            <div>
              <BiPencil className="group-modal-border-no" />
            </div>
            <span>Rename group</span>
          </div>
          <div>
            <div>
              <div
                className="group-modal-svg-no"
                style={{ background: color }}
              ></div>
            </div>
            <span>Change group color</span>
          </div>
          <div onClick={() => onDeleteGroup()}>
            <div>
              <BiTrash
                className="group-modal-border-no"
                style={{ paddingLeft: '1px' }}
              />
            </div>
            <span>Delete</span>
          </div>
        </div>
      )}
    </div>
  )
}
