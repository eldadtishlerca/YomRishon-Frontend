import { ToolBar } from '../cmps/toolbar'

import { MdOutlineTableChart } from 'react-icons/md'
import { AiOutlineStar } from 'react-icons/ai'

export const BoardHeader = ({ members, title, activities }) => {
  return (
    <div className='board-header-main-container flex'>
      <div className="board-header-top flex">
        <div className="flex">
          <h1>{title}</h1>
          <span className="board-header-top-icon"><AiOutlineStar /></span>
        </div>
        <div className="board-header-top-main flex">
          <div className="board-header-top-main-members flex">
          <span>Last seen</span>
          <div className="flex">
          {members.map((member) => (
            <img key={member._id} src={member.imgUrl} alt={member.fullname} />
          ))}
        </div>
          </div>
        <div>
          <button>Activity</button>
        </div>
        <div>
          <button>Add to Board</button>
        </div>
        </div>
      </div>
      <div className="board-header-bottom flex">
        <div className="board-header-bottom-upper flex">
          <MdOutlineTableChart />
          <span>Main Table</span>
        </div>
      </div>
      <ToolBar />
    </div>
  )
}
