import {
  AiFillHome,
  AiOutlineLeft,
  AiOutlinePlus,
  AiOutlineSearch,
} from 'react-icons/ai'

export const WorkspaceSidebarHeader = ({ onClick }) => {
  return (
    <div className="workspace-sidebar-header">
      <div className="workspace-sidebar-closed-btn" onClick={() => onClick()}>
        <AiOutlineLeft />
      </div>
      <p>Workspace</p>
      <div className="workspace-btn">
        <span>M</span>
        Main workspace
        <span>
          <AiFillHome />
        </span>
      </div>
      <div className="workspace-sidebar-btns">
        <div className="flex">
          <AiOutlinePlus />
          <span>Add</span>
        </div>
        <div className="flex">
          <AiOutlineSearch />
          <span>Search</span>
        </div>
      </div>
    </div>
  )
}
