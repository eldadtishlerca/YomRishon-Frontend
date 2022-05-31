const initialState = {
  boards: [],
  currBoard: {},
  filterBy: {
    txt: '',
    membersId: [],
    priority: [],
    status: [],
    tag: [],
  },
}
export function boardReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_BOARDS':
      console.log(action)
      return {
        ...state,
        boards: [...action.boards],
      }
    case 'SET_BOARD':
      return {
        ...state,
        currBoard: { ...action.board },
      }

    case 'UPDATE_BOARD':
      return {
        ...state,
        currBoard: action.board,
        boards: state.boards.map((board) =>
          board._id === action.board._id ? action.board : board
        ),
      }

    case 'REMOVE_BOARD':
      return {
        ...state,
        boards: state.boards.filter((board) => board._id !== action.boardId),
      }
    // case 'UPDATE_BOARD':
    //     boards = state.boards.map(board => (board._id === action.board._id)? action.board : board)
    //     newState = { ...state, boards}
    //     break
    // case 'ADD_TO_CART':
    //     newState = { ...state, boardt:[...state.boardt, action.board]}
    //     break
    // case 'REMOVE_FROM_CART':
    //     boardt = state.boardt.filter(board => board._id !== action.boardId)
    //     newState = { ...state, boardt}
    //     break
    // case 'CLEAR_CART':
    //     newState = { ...state, boardt: []}
    //     break
    // case 'UNDO_REMOVE_CAR':
    //     if (state.lastRemovedBoard) {
    //         newState = { ...state, boards: [...state.boards, state.lastRemovedBoard], lastRemovedBoard: null}
    //     }
    //     break
    default:
      return state
  }

  // console.log('Prev State:', state)
  // console.log('Action:', action)
  // console.log('New State:', newState)
}
