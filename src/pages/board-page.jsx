import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { BoardHeader } from '../cmps/board/board-header'
import { BoardContent } from '../cmps/board/board-content'
import { MainSidebar } from '../cmps/sidebars/main-sidebar'
import {
  loadBoard,
  removeBoard,
  updateBoard,
} from '../store/actions/board.actions'
import { WorkspaceSidebarClosed } from '../cmps/sidebars/workspace-sidebar-closed'
import { BoardNotifications } from '../cmps/sidebars/board-nortifications'
import { WorkspaceSidebar } from '../cmps/sidebars/workspace-sidebar'

export const BoardPage = () => {
  const { currBoard } = useSelector((storeState) => storeState.boardModule)
  const { boards } = useSelector((storeState) => storeState.boardModule)
  const params = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadBoard(params.id))
  }, [])

  const [showModal, SetShowModal] = useState(false)
  const [showNotifications, SetShowNotifications] = useState(false)

  if (
    (Object.keys(currBoard).length === 0 || !currBoard) &&
    boards.length === 0
  )
    return <div>Loading...</div>

  const onOpenModal = () => {
    SetShowModal(!showModal)
  }
  const onOpenNortification = () => {
    SetShowNotifications(!showNotifications)
  }

  const onRemoveBoard = (boardId) => {
    dispatch(removeBoard(boardId))
  }

  const saveBoardToStore = (groups) => {
    currBoard.groups = groups
    dispatch(updateBoard(currBoard))
  }

  const { title, members, activities, groups, cmpsOrder, _id } = currBoard

  return (
    <div className="board-page flex">
      <MainSidebar
        onClick={onOpenModal}
        showModal={showModal}
        onOpenNortification={onOpenNortification}
      />
      {showNotifications && (
        <BoardNotifications
          board={currBoard}
          onOpenNortification={onOpenNortification}
        />
      )}

      {showModal ? (
        <WorkspaceSidebar
          onClick={onOpenModal}
          boards={boards}
          onRemoveBoard={onRemoveBoard}
        />
      ) : (
        <WorkspaceSidebarClosed onClick={onOpenModal} />
      )}
      <div className="boardSection">
        <BoardHeader
          members={members}
          title={title}
          activities={activities}
          groups={groups}
        />
        <BoardContent
          groups={groups}
          saveBoardToStore={saveBoardToStore}
          _id={_id}
        />
      </div>
    </div>
  )
}
