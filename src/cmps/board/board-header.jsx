import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateBoard } from '../../store/actions/board.actions'
import { ToolBar } from './toolbar'
import { MdOutlineTableChart } from 'react-icons/md'
import { AiOutlineStar, AiOutlineStock, AiFillInfoCircle } from 'react-icons/ai'
import { BsPlus } from 'react-icons/bs'

export const BoardHeader = () => {
  const { currBoard } = useSelector((storeState) => storeState.boardModule)
  const { members } = currBoard
  const [titleValue, setTitleValue] = useState(currBoard.title)
  const [descriptionValue, setDescriptionValue] = useState(currBoard.description || '')
  const [isEditing, setIsEditing] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    setTitleValue(currBoard.title)
  }, [currBoard])

  const onSubmitTitle = (ev) => {
    if (ev.type === 'blur' || ev.key === 'Enter') {
      console.log('Title updated to: *' + titleValue + '*')
      dispatch(updateBoard({ ...currBoard, title: titleValue }))
      ev.target.blur()
      setIsEditing(false)
    }
  }
  const onHandleChangeTitle = (ev) => {
    const { value } = ev.target
    setTitleValue(value)
  }

  const onSubmitDescripsion = (ev) => {
    if (ev.type === 'blur' || ev.key === 'Enter') {
      console.log('Descripsion updated to: *' + descriptionValue + '*')
      dispatch(updateBoard({ ...currBoard, description: descriptionValue }))
      ev.target.blur()
    }
  }
  const onHandleChangeDescripsion = (ev) => {
    const { value } = ev.target
    setDescriptionValue(value)
  }
  
  return (
    <section className="board-header-main-container flex">
      <div className="board-header-top flex">
        <div className="board-header-top-main flex center flex">
          {isEditing ? (
            <input
              type="text"
              value={titleValue}
              className="title-input"
              onBlur={(ev) => {
                onSubmitTitle(ev)
              }}
              onKeyUp={(ev) => {
                onSubmitTitle(ev)
              }}
              onChange={(ev) => {
                onHandleChangeTitle(ev)
              }}/>) : (<h1 className="title-fixed" onClick={() => setIsEditing(!isEditing)}>{titleValue}</h1>
          )}
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
