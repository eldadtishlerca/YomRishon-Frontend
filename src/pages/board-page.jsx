import { BoardHeader } from '../cmps/board-header'
import { BoardsModal } from '../cmps/boards-modal'
import { MainBoard } from '../cmps/main-board'
import { SideBar } from '../cmps/side-bar'

export function BoardPage() {
  return (
    <div className="board-page flex">
      <SideBar />
      <BoardsModal />
      <div className="boardSection">
        <BoardHeader />
        <MainBoard />
      </div>
    </div>
  )
}
