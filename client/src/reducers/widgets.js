import ActionTypes from '../constants/actionTypes'

const initialState = {
  isLoadBegin: false,
  isLoadSuccess: false,
  error: null,
  list: [],
}

export default function widgets(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.WIDGETS_LOAD_BEGIN:
      return Object.assign({}, state, {
        isLoadBegin: true,
      })
    case ActionTypes.WIDGETS_LOAD_SUCCESS:
      return Object.assign({},
        state, {
          isLoadBegin: false,
          isLoadSuccess: true,
          error: null,
          list: state.list.concat(action.payload)
        }
      )
    case ActionTypes.WIDGETS_LOAD_ERROR:
      return Object.assign({}, state, {
        isLoadSuccess: true,
        error: action.payload
      })
    default:
      return state
  }
}