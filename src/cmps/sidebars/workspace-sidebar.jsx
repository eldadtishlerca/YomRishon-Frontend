import { AiFillCaretLeft } from 'react-icons/ai'
import { BoardsList } from './boards-list'
import { WorkspaceSidebarHeader } from './workspace-sidebar-header'

export const WorkspaceSidebar = ({ onClick }) => {
  return (
    <div className="workspace-sidebar">
      <div className="workspace-sidebar-arrow">
        <AiFillCaretLeft />
      </div>
      <WorkspaceSidebarHeader onClick={onClick} />
      <BoardsList />
    </div>
  )
}
