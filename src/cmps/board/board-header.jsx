import { useState } from 'react'
import { ToolBar } from './toolbar'
import { MdOutlineTableChart } from 'react-icons/md'
import { AiOutlineStar, AiOutlineStock, AiFillInfoCircle } from 'react-icons/ai'
import { BsPlus } from 'react-icons/bs'
import { updateBoard } from '../../store/actions/board.actions'
import { useDispatch } from 'react-redux'

export const BoardHeader = ({ currBoard }) => {
  const { members, title, activities, groups } = currBoard
  const [isEditing, setIsEditing] = useState(true)
  const [titleValue, setTitleValue] = useState(title)
  const dispatch = useDispatch()
  
  const onSubmitChanges = (ev) => {
    if (ev.key === 'Enter' || ev.type === 'blur') {
      setIsEditing(false)
      console.log('SUBMIT!');
      dispatch(updateBoard( {...currBoard, title: titleValue}))
    }
    setTimeout(() => {
        setIsEditing(true)
    }, 500)
  }

  const onHandleChange = (ev) => {
    const { value } =  ev.target
    console.log(value);
    setTitleValue(value)
  }

  return (
    <section className="board-header-main-container flex">
      <div className="board-header-top flex">
        <div className="board-header-top-main flex center flex">
          <input
            type="text"
            value={titleValue}
            className="title"
            onBlur={(ev) => {
              onSubmitChanges(ev)
            }}
            onKeyUp={(ev) => {
              onSubmitChanges(ev)
            }}
            onChange={(ev) => {
              onHandleChange(ev)
            }}
            contentEditable={isEditing}
          />
          <span className="board-header-top-icon-container">
            <AiFillInfoCircle className="board-header-top-icon" />
          </span>
          <span className="board-header-top-icon-container">
            <AiOutlineStar className="board-header-top-icon" />
          </span>
        </div>

        <div className="board-header-top-main flex">
          <div className="board-header-top-main-members flex">
            <span>Last seen</span>
            <div className="members flex">
              {members.map((member) => (
                <img
                  key={member._id}
                  src={member.imgUrl}
                  alt={member.fullname}
                />
              ))}
            </div>
          </div>
          <div className="header-button-container flex">
            <AiOutlineStock />
            <span>Activity</span>
          </div>
          <div className="header-button-container add-to-board flex">
            <BsPlus />
            <span>Add to Board</span>
          </div>
        </div>
      </div>
      <input
        type="text"
        placeholder="Add board description"
        className="subtitle"
      />
      <div className="board-header-bottom flex">
        <div className="board-header-bottom-upper flex">
          <MdOutlineTableChart />
          <span>Main Table</span>
        </div>
      </div>
      <ToolBar />
    </section>
  )
}
