import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BoardHeader } from '../cmps/board-header'
import { BoardContent } from '../cmps/board-content'
import { MainSidebar } from '../cmps/main-sidebar'
import { loadBoard } from '../store/actions/board.actions'
import { WorkspaceSidebarClosed } from '../cmps/workspace-sidebar-closed'
import { BoardNotifications } from '../cmps/board-nortifications'
import { WorkspaceSidebar } from '../cmps/workspace-sidebar'

export const BoardPage = () => {
  const { board } = useSelector((storeState) => storeState.boardModule)
  const dispatch = useDispatch()

  const [showModal, SetShowModal] = useState(false)
  const [showNotifications, SetShowNotifications] = useState(false)

  const onOpenModal = () => {
    SetShowModal(!showModal)
  }
  const onOpenNortification = () => {
    SetShowNotifications(!showNotifications)
  }

  useEffect(() => {
    dispatch(loadBoard())
  }, [dispatch])

  if (board.length === 0) return <div>Loading..</div>

  const { title, members, activities, groups, cmpsOrder } = board[0]

  return (
    <div className="board-page flex">
      <MainSidebar
        onClick={onOpenModal}
        showModal={showModal}
        onOpenNortification={onOpenNortification}
      />
      {showNotifications && (
        <BoardNotifications
          board={board}
          onOpenNortification={onOpenNortification}
        />
      )}

      {showModal ? (
        <WorkspaceSidebar onClick={onOpenModal} />
      ) : (
        <WorkspaceSidebarClosed onClick={onOpenModal} />
      )}
      <div className="boardSection">
        <BoardHeader members={members} title={title} activities={activities} />
        <BoardContent groups={groups} />
      </div>
    </div>
  )
}
