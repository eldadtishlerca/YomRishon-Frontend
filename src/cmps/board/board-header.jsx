import { ToolBar } from './toolbar'
import { MdOutlineTableChart } from 'react-icons/md'
import { AiOutlineStar, AiOutlineStock, AiFillInfoCircle } from 'react-icons/ai'
import { BsPlus } from 'react-icons/bs'

export const BoardHeader = ({ members, title, activities }) => {
  const onHandleChange = ({ target }) => {
    const { value } = target
  }

  console.log('members from header', members)
  return (
    <section className="board-header-main-container flex">
      <div className="board-header-top flex">
        <div className="board-header-top-main flex center flex">
          <input
            type="text"
            value={title}
            className="title"
            onChange={(ev) => {
              onHandleChange(ev)
            }}
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
