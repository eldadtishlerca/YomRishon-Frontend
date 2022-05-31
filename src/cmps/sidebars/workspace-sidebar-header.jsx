import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadBoards } from '../../store/actions/board.actions'

import {
  AiFillHome,
  AiOutlineLeft,
  AiOutlinePlus,
  AiOutlineSearch,
} from 'react-icons/ai'

export const WorkspaceSidebarHeader = ({ onClick, onAddBoard }) => {
  const { boards } = useSelector((storeState) => storeState.boardModule)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadBoards(boards))
  }, [])

  if (boards.length === 0 || !boards) return <div>Loading...</div>

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
        <div className="flex" onClick={(ev) => onAddBoard(ev)}>
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
