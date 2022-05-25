import { BoardHeader } from '../cmps/board-header'
import { MainBoard } from '../cmps/main-board'
import { SideBar } from '../cmps/side-bar'

export function BoardPage() {
  return (
    <div>
      <div>
        <SideBar />
      </div>
      <BoardHeader />
      <MainBoard />
    </div>
  )
}
