import { useEffect, useState } from 'react'
import {
  AiOutlineCaretDown,
  AiOutlineCopy,
  AiOutlinePlus,
} from 'react-icons/ai'
import { BiPencil, BiTrash } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { loadBoard, updateBoard } from '../../store/actions/board.actions'

export const GroupModal = ({ id, color }) => {
  const { currBoard } = useSelector((storeState) => storeState.boardModule)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadBoard())
  }, [])

  const [background, setBackground] = useState(color)
  const [innerColor, setInnerColor] = useState('#fff')
  const [toggleModal, setToggleModal] = useState(false)

  const onGroupModalToggle = () => {
    setToggleModal(!toggleModal)
  }

  const onDeleteGroup = () => {
    currBoard.groups = currBoard.groups.filter((group) => group.id !== id)
    updateBoard(currBoard)
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
