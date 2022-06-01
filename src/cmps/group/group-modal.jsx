import { useEffect, useState } from 'react'
import {
  AiOutlineCaretDown,
  AiOutlineCopy,
  AiOutlinePlus,
} from 'react-icons/ai'
import { BiPencil, BiTrash } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { utilService } from '../../services/util.service'
import { updateBoard } from '../../store/actions/board.actions'

export const GroupModal = ({ id, color }) => {
  const { currBoard } = useSelector((storeState) => storeState.boardModule)

  useEffect(() => {
    setBackground(color)
  }, [color])

  const dispatch = useDispatch()

  const [background, setBackground] = useState(color)
  const [innerColor, setInnerColor] = useState('#fff')
  const [toggleModal, setToggleModal] = useState(false)
  const [toggleColorModal, setToggleColorModal] = useState(false)
  const [allColors, setAllColors] = useState(null)

  const onGroupModalToggle = () => {
    setToggleModal(!toggleModal)
  }

  const onAddGroup = () => {
    setToggleModal(false)
    const randomColor = utilService.getRandomColor()
    const newGroup = {
      color: randomColor.color,
      hoverColor: randomColor.hover,
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
          deadline: new Date(),
          workHours: 0,
          isChecked: false,
          lastUpdated: {
            _id: 'u103',
            fullname: 'Elon Barzani',
            imgUrl: 'imgs/mini-user-imgs/u103.png',
            updatedAt: new Date(),
          },
          createdAt: new Date(),
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

  const onDeleteGroup = () => {
    setToggleModal(false)
    currBoard.groups = currBoard.groups.filter((group) => group.id !== id)
    dispatch(updateBoard(currBoard))
  }

  const onChangeGroupColor = (insideColor) => {
    const idx = currBoard.groups.findIndex((group) => group.id === id)
    currBoard.groups[idx].color = insideColor.color
    currBoard.groups[idx].hoverColor = insideColor.hover
    dispatch(updateBoard(currBoard))
  }

  const onDuplicateGroup = () => {
    setToggleModal(false)
    const currIdx = currBoard.groups.findIndex((group) => group.id === id)
    const newGroup = currBoard.groups.filter((group) => group.id === id)
    const dupliGroup = Object.assign({}, newGroup[0])
    dupliGroup.id = utilService.makeId()
    dupliGroup.color = utilService.getRandomColor()
    currBoard.groups.splice(currIdx, 0, dupliGroup)
    dispatch(updateBoard(currBoard))
  }

  const getColors = () => {
    setAllColors(utilService.getAllColors())
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
          <div onClick={() => onAddGroup()}>
            <div>
              <AiOutlinePlus />
            </div>
            <span>Add group</span>
          </div>
          <div onClick={() => onDuplicateGroup()}>
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
          <div
            onClick={() => {
              setToggleColorModal(true)
              setToggleModal(false)
              getColors()
            }}
          >
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
      {toggleColorModal && (
        <div className="group-modal-color">
          <div className="picked-color">
            <div style={{ background: color }}></div>
          </div>
          <div className="colors-table">
            {allColors.map((insideColor) => (
              <div
                className="colors-col"
                key={insideColor.name}
                style={{ background: insideColor.color }}
                onClick={() => {
                  setToggleColorModal(false)
                  onChangeGroupColor(insideColor)
                }}
              ></div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
