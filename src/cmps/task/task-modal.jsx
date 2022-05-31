import { useState } from 'react'
import {
  AiOutlineCaretDown,
  AiOutlineCopy,
  AiOutlinePlus,
} from 'react-icons/ai'
import { BiTrash } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { utilService } from '../../services/util.service'
import { updateBoard } from '../../store/actions/board.actions'

export const TaskModal = ({ id, groupId, isHover }) => {
  const { currBoard } = useSelector((storeState) => storeState.boardModule)
  const dispatch = useDispatch()

  const [toggleModal, setToggleModal] = useState(false)

  const onTaskModalToggle = () => {
    setToggleModal(!toggleModal)
  }

  const onAddTask = () => {
    setToggleModal(!toggleModal)
    const { groups } = currBoard

    const newTask = {
      id: utilService.makeId(),
      title: 'New Task',
      membersIds: [
        {
          _id: 'u101',
          username: 'Eldad',
          fullname: 'Eldad Tishler',
          imgUrl: 'imgs/mini-user-imgs/u101.png',
        },
      ],
      status: {
        color: '#7F5347',
        hover: '#9E807A',
        name: 'Not Assignee',
      },
      priority: {
        color: '#2B76E5',
        hover: '#6399E8',
        name: 'Low',
      },
      deadline: Date.now(),
      workHours: 0,
      isChecked: false,
      lastUpdated: {
        _id: 'u103',
        fullname: 'Elon Barzani',
        imgUrl: 'imgs/mini-user-imgs/u103.png',
        updatedAt: Date.now(),
      },
      createdAt: Date.now(),
      byMember: {
        _id: 'u102',
        username: 'Yarden',
        fullname: 'Yarden Shaul',
        imgUrl: 'imgs/mini-user-imgs/u102.png',
      },
      updates: [],
    }
    const currGroup = groups.find((group) => group.id === groupId)
    currGroup.tasks.unshift(newTask)
    dispatch(updateBoard(currBoard))
  }

  const onRemoveTask = () => {
    setToggleModal(!toggleModal)
    const { groups } = currBoard
    const currGroup = groups.find((group) => group.id === groupId)
    currGroup.tasks = currGroup.tasks.filter((task) => task.id !== id)
    dispatch(updateBoard(currBoard))
  }

  const onDuplicateTask = () => {
    setToggleModal(!toggleModal)
    const { groups } = currBoard
    const currGroup = groups.find((group) => group.id === groupId)
    const duplicateTask = currGroup.tasks.filter((task) => task.id === id)
    const task = Object.assign({}, duplicateTask[0])
    task.id = utilService.makeId()
    currGroup.tasks.unshift(task)
    dispatch(updateBoard(currBoard))
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
          <div onClick={() => onDuplicateTask()}>
            <div>
              <AiOutlineCopy className="task-modal-border-no" />
            </div>
            <span>Duplicate</span>
          </div>
          <div onClick={() => onAddTask()}>
            <div>
              <AiOutlinePlus />
            </div>
            <span>Add Task</span>
          </div>
          <div onClick={() => onRemoveTask()}>
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
