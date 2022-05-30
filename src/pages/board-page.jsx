import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { BoardHeader } from '../cmps/board/board-header'
import { BoardContent } from '../cmps/board/board-content'
import { MainSidebar } from '../cmps/sidebars/main-sidebar'
import { loadBoard } from '../store/actions/board.actions'
import { WorkspaceSidebarClosed } from '../cmps/sidebars/workspace-sidebar-closed'
import { BoardNotifications } from '../cmps/sidebars/board-nortifications'
import { WorkspaceSidebar } from '../cmps/sidebars/workspace-sidebar'

export const BoardPage = () => {
  const { currBoard } = useSelector((storeState) => storeState.boardModule)
  const params = useParams()
  const dispatch = useDispatch()

  const [showModal, SetShowModal] = useState(false)
  const [showNotifications, SetShowNotifications] = useState(false)

  useEffect(() => {
    dispatch(loadBoard(params.id))
  }, [])

<<<<<<< HEAD
  if (Object.keys(currBoard).length === 0 || !currBoard)
    return <div>Loading...</div>
=======
  if (Object.keys(currBoard).length === 0 || !currBoard) return <div>Loading...</div>
>>>>>>> b4fce0ab75bc656851646218da49730abf5b105f

  const onOpenModal = () => {
    SetShowModal(!showModal)
  }
  const onOpenNortification = () => {
    SetShowNotifications(!showNotifications)
  }

  const { title, members, activities, groups, cmpsOrder } = currBoard

  console.log(currBoard.groups)

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
        <WorkspaceSidebar onClick={onOpenModal} />
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
        <BoardContent groups={groups} />
      </div>
    </div>
  )
}
