import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BoardHeader } from '../cmps/board-header'
import { BoardsModal } from '../cmps/boards-modal'
import { BoardContent } from '../cmps/board-content'
import { SideBar } from '../cmps/side-bar'
import { loadBoard } from '../store/actions/board.actions'

export const BoardPage = () => {
  const { board } = useSelector((storeState) => storeState.boardModule)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadBoard())
  }, [dispatch])

  if (board.length === 0) return <div>Loading..</div>

  const { title, members, activities, groups, cmpsOrder } = board

  return (
    <div className="board-page flex">
      <SideBar />
      <BoardsModal />
      <div className="boardSection">
        <BoardHeader members={members} title={title} activities={activities} />
        <BoardContent groups={groups} />
      </div>
    </div>
  )
}
