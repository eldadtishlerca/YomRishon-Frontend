import { ToolBar } from '../cmps/toolbar'

import { MdOutlineTableChart } from 'react-icons/md'

export const BoardHeader = ({ members, title, activities }) => {
  return (
    <div>
      <div className="board-header-top flex">
        <h1>{title}</h1>
        <div className="flex">
          {members.map((member) => (
            <img key={member._id} src={member.imgUrl} alt={member.fullname} />
          ))}
        </div>
        <div>
          <button>Activity</button>
        </div>
        <div>
          <button>Add to Board</button>
        </div>
      </div>
      <div className="board-header-bottom flex">
        <div>
          <MdOutlineTableChart />
          <span>Main Table</span>
        </div>
      </div>
      <ToolBar />
    </div>
  )
}
