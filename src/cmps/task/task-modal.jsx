import { useState } from 'react'
import {
  AiOutlineCaretDown,
  AiOutlineCopy,
  AiOutlinePlus,
} from 'react-icons/ai'
import { BiPencil, BiTrash } from 'react-icons/bi'

export const TaskModal = ({ _id, isHover }) => {
  const [toggleModal, setToggleModal] = useState(false)

  const onTaskModalToggle = () => {
    setToggleModal(!toggleModal)
  }

  return (
    <div className="task-modal">
      {(isHover || toggleModal) && (
        <div
          className="task-modal-btn"
          onClick={(e) => {
            onTaskModalToggle(e)
          }}
        >
          <AiOutlineCaretDown />
        </div>
      )}
      {toggleModal && (
        <div className="task-modal-toggle flex">
          <div>
            <div>
              <AiOutlineCopy className="task-modal-border-no" />
            </div>
            <span>Duplicate</span>
          </div>
          <div>
            <div>
              <AiOutlinePlus />
            </div>
            <span>Add Task</span>
          </div>
          <div>
            <div>
              <BiTrash
                className="task-modal-border-no"
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
