import { CgProfile } from 'react-icons/cg'
import { MdOutlineTableChart } from 'react-icons/md'

export const BoardHeader = ({ board }) => {
  return (
    <div>
      <div className="board-header-top flex">
        <h1>{board.title}</h1>
        {/* <div>
          {board.members.map((member) => (
            <img key={member._id} src={member.imgUrl} alt={member.fullname} />
          ))}
        </div> */}
        <div className="flex">
          <CgProfile />
          <CgProfile />
          <CgProfile />
          <CgProfile />
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
    </div>
  )
}
