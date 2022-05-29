import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BoardHeader } from '../cmps/board-header'
import { BoardsModal } from '../cmps/boards-modal'
import { BoardContent } from '../cmps/board-content'
import { SideBar } from '../cmps/side-bar'
import { loadBoard } from '../store/actions/board.actions'
import { BoardsModalClosed } from '../cmps/boards-modal-closed'
import { BoardNotifications } from '../cmps/board-nortifications'

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

  const { title, members, activities, groups, cmpsOrder } = board

  return (
    <div className="board-page flex">
<<<<<<< HEAD
      <SideBar onClick={onOpenModal} onOpenNortification={onOpenNortification} />
      {showNotifications && <BoardNotifications board={board} onOpenNortification={onOpenNortification}/>}
      
=======
      <SideBar
        onClick={onOpenModal}
        showModal={showModal}
        onOpenNortification={onOpenNortification}
      />
      {/* <BoardNotifications board={board}/> */}
      {showNotifications && <BoardNotifications />}

>>>>>>> 7c40bf3c449274abef687566109ede4bcd83d330
      {showModal ? (
        <BoardsModal onClick={onOpenModal} />
      ) : (
        <BoardsModalClosed onClick={onOpenModal} />
      )}
      <div className="boardSection">
        <BoardHeader members={members} title={title} activities={activities} />
        <BoardContent groups={groups} />
      </div>
    </div>
  )
}
