//reducer switch-case处理不同的action 从而修改store状态
import { combineReducers } from 'redux'
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../action/index'
const { SHOW_ALL } = VisibilityFilters

const initialState = {
	count1: 0,
}
function reducer(state = initialState, action){
	switch(action.type){
		case 'INCREMENT':{
			console.log(state,'reducer')
			return {
				...state,
				count1 : state.count1+1
			}
		}
		case 'DECREMENT':{
			return{
				...state,
				count1 : state.count1-1
			}
		}		
		default:
				return state;
	}
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: true
        }),
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
}

const todoApp = combineReducers({
	reducer,
  visibilityFilter,
  todos
})
export default todoApp

// combineReducers({
//   visibilityFilter,
//   todos
// })