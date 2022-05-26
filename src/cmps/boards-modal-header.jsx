import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai'

export const BoardsModalHeader = () => {
  return (
    <div className="boards-modal-header">
      <p>Workspace</p>
      <div className="workspace-btn">
        <span>M</span>Main workspace
      </div>
      <div className="boards-modal-btns">
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
