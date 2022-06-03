import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { BiDownload, BiFilterAlt, BiSortAlt2, BiTable } from 'react-icons/bi'
import { RiArrowDownSLine } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { updateBoard } from '../../store/actions/board.actions'
import { utilService } from '../../services/util.service'
import { useState } from 'react'

export const ToolBar = () => {
  const { currBoard } = useSelector((storeState) => storeState.boardModule)
  const [toggleModal, setToggleModal] = useState(false)

  const dispatch = useDispatch()

  const onAddTask = () => {
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
    currBoard.groups[0].tasks.unshift(newTask)
    dispatch(updateBoard(currBoard))
  }

  const onAddGroup = () => {
    const newColor = utilService.getRandomColor()
    const newGroup = {
      color: newColor.color,
      hoverColor: newColor.hover,
      id: utilService.makeId(),
      tasks: [
        {
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
        },
      ],
      title: 'New Group',
    }
    currBoard.groups.unshift(newGroup)
    dispatch(updateBoard(currBoard))
  }

  return (
    <div className="toolbar-main-contianer flex">
      <div className="toolbar-button-container new-task flex">
        <span onClick={() => onAddTask()} className="new-task-spn">
          New Task
        </span>
        <div
          onClick={() => setToggleModal(!toggleModal)}
          className="new-task-spn-icon"
        >
          <RiArrowDownSLine />
          {toggleModal && (
            <div className="toolbar-task-modal">
              <div onClick={() => onAddGroup()}>
                <div>
                  <BiTable />
                </div>
                <span>New group of Tasks</span>
              </div>
              <div>
                <div>
                  <BiDownload />
                </div>
                <span>Import not work</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="toolbar-button-container flex">
        <AiOutlineSearch />
        <span>Search</span>
      </div>
      <div className="toolbar-button-container flex">
        <CgProfile />
        <span>Person</span>
      </div>
      <div className="toolbar-button-container flex">
        <BiFilterAlt />
        <span>Filter</span>
      </div>
      <div className="toolbar-button-container flex">
        <BiSortAlt2 />
        <span>Sort</span>
      </div>
      {/* <div>
        <CgColorBucket />
      </div> */}
    </div>
  )
}
