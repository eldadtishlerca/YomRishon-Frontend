import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BoardHeader } from '../cmps/board-header'
import { BoardsModal } from '../cmps/boards-modal'
import { MainBoard } from '../cmps/main-board'
import { SideBar } from '../cmps/side-bar'
import { loadBoard } from '../store/actions/board.actions'

export const BoardPage = () => {
  const { board } = useSelector((storeState) => storeState.boardModule)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadBoard())
  }, [dispatch])

  if (!board) return <div>Loading..</div>
  return (
    <div className="board-page flex">
      <SideBar />
      <BoardsModal />
      <div className="boardSection">
        <BoardHeader board={board} />
        <MainBoard board={board} />
      </div>
    </div>
  )
}
