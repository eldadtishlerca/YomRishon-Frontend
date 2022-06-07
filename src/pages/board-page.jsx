import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { BoardHeader } from '../cmps/board/board-header'
import { BoardContent } from '../cmps/board/board-content'
import { MainSidebar } from '../cmps/sidebars/main-sidebar'
import { Loader } from '../cmps/board/loader'
import {
  loadBoard,
  removeBoard,
  addBoard,
  updateBoard,
} from '../store/actions/board.actions'
import { WorkspaceSidebarClosed } from '../cmps/sidebars/workspace-sidebar-closed'
import { BoardNotifications } from '../cmps/sidebars/board-nortifications'
import { WorkspaceSidebar } from '../cmps/sidebars/workspace-sidebar'
import { TrelloContent } from '../cmps/trello/trello-content'

export const BoardPage = () => {
  const { currBoard, boards } = useSelector(
    (storeState) => storeState.boardModule
  )
  const params = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  

  useEffect(() => {
    dispatch(loadBoard(params.boardId))
  }, [params.boardId])

  const [showModal, setShowModal] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const [isTrelloActive, setIsTrelloActive] = useState(false)

  if (
    (Object.keys(currBoard).length === 0 || !currBoard) &&
    boards.length === 0
  )
    return <Loader />

  const onOpenModal = () => {
    setShowModal(!showModal)
  }
  const onOpenNortification = () => {
    setShowNotifications(!showNotifications)
  }

  const onRemoveBoard = (event, boardId) => {
    event.stopPropagation()
    navigate(`/${boards[0]._id}`)
    if (currBoard._id === boardId) {
      if (currBoard._id !== boards[0]._id) {
      } else {
        navigate(`/${boards[1]._id}`)
      }
    }
    dispatch(removeBoard(boardId))
  }

  const onAddBoard = (event) => {
    event.stopPropagation()
    // if (board) delete board._id
    dispatch(addBoard())
    navigate(`/${currBoard._id}`)
  }

  const saveBoardToStore = (groups) => {
    currBoard.groups = groups
    dispatch(updateBoard(currBoard))
  }

  const { groups, _id } = currBoard
  if (!currBoard) return
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
          onAddBoard={onAddBoard}
        />
      ) : (
        <WorkspaceSidebarClosed onClick={onOpenModal} />
      )}
      <div className="board-section">
        <BoardHeader
          currBoard={currBoard}
          setIsTrelloActive={setIsTrelloActive}
        />
        {isTrelloActive ? (
          <TrelloContent
            groups={groups}
            saveBoardToStore={saveBoardToStore}
            _id={_id}
          />
        ) : (
          <BoardContent
            groups={groups}
            saveBoardToStore={saveBoardToStore}
            _id={_id}
          />
        )}
      </div>
    </div>
  )
}
