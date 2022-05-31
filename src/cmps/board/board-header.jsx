import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateBoard } from '../../store/actions/board.actions'
import { ToolBar } from './toolbar'
import { MdOutlineTableChart } from 'react-icons/md'
import { AiOutlineStar, AiOutlineStock, AiFillInfoCircle } from 'react-icons/ai'
import { BsPlus } from 'react-icons/bs'

export const BoardHeader = ({ currBoard }) => {
  const { members, title } = currBoard
  const [isEditing, setIsEditing] = useState(true)
  const [titleValue, setTitleValue] = useState(title)
  const [descriptionValue, setDescriptionValue] = useState(currBoard.description || '')
  const dispatch = useDispatch()
  
  const onSubmitTitle = (ev) => {
    if (ev.key === 'Enter' || ev.type === 'blur') {
      setIsEditing(false)
      console.log('Title updated to: *' + titleValue + '*');
      dispatch(updateBoard( {...currBoard, title: titleValue}))
    }
    setTimeout(() => {
        setIsEditing(true)
    }, 500)
  }
  const onHandleChangeTitle = (ev) => {
    const { value } =  ev.target
    console.log(value);
    setTitleValue(value)
  }

  const onSubmitDescripsion = (ev) => {
    if (ev.key === 'Enter' || ev.type === 'blur') {
      setIsEditing(false)
      console.log('Descripsion updated to: *' + descriptionValue + '*');
      dispatch(updateBoard( {...currBoard, description: descriptionValue}))
    }
    setTimeout(() => {
        setIsEditing(true)
    }, 500)
  }
  const onHandleChangeDescripsion = (ev) => {
    const { value } =  ev.target
    console.log(value);
    setDescriptionValue(value)
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
              onSubmitTitle(ev)
            }}
            onKeyUp={(ev) => {
              onSubmitTitle(ev)
            }}
            onChange={(ev) => {
              onHandleChangeTitle(ev)
            }}
            contentEditable={isEditing}
            name="titleValue"
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
        name="descriptionValue"
        value={descriptionValue}
        onBlur={(ev) => {
          onSubmitDescripsion(ev)
        }}
        onKeyUp={(ev) => {
          onSubmitDescripsion(ev)
        }}
        onChange={(ev) => {
          onHandleChangeDescripsion(ev)
        }}
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
