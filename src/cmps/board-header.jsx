import { ToolBar } from '../cmps/toolbar'

import { MdOutlineTableChart } from 'react-icons/md'
import { AiOutlineStar, AiOutlineStock } from 'react-icons/ai'
import { BsPlus } from 'react-icons/bs'

export const BoardHeader = ({ members, title, activities }) => {
  return (
    <section className='board-header-main-container flex'>
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
          <div className='header-button-container flex'>
            <AiOutlineStock />
            <span>Activity</span>
          </div>
          <div className='header-button-container add-to-board flex'>
            <BsPlus />
            <span>Add to Board</span>
            </div>
        </div>
      </div>
      <span>Add board description</span>
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
