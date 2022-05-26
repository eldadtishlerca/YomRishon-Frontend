import { ToolBar } from './toolbar'
import { GroupList } from './group-list'

export const MainBoard = ({ board }) => {
  return (
    <div>
      <ToolBar />
      <GroupList />
      Hi from MainBoard!!!!
      <div>{board.title}</div>
      {/* <img src={board.createdBy.imgUrl} alt="" /> */}
      <img src='../../public/imgs/mini-user-imgs/u101.png' alt="" />
    </div>
  )
}
