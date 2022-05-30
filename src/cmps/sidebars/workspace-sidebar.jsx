import { useEffect } from 'react'
import { AiFillCaretLeft } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { loadBoards } from '../../store/actions/board.actions'
import { BoardsList } from './boards-list'
import { WorkspaceSidebarHeader } from './workspace-sidebar-header'

export const WorkspaceSidebar = ({ onClick }) => {
  const { boards } = useSelector((storeState) => storeState.boardModule)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadBoards())
  }, [])

  if (boards.length === 0) return <div>Loading..</div>

  return (
    <div className="workspace-sidebar">
      <div className="workspace-sidebar-arrow">
        <AiFillCaretLeft />
      </div>
      <WorkspaceSidebarHeader onClick={onClick} />
      <BoardsList boards={boards} />
    </div>
  )
}
