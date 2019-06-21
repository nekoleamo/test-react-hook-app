import React, { useReducer } from "react"
interface State {
  count: number
}
interface Action {
  type: string,
  payload: number
}
const initialState: State = {
  count: 0
}
const incrementAction: Action = {
  type: 'increment',
  payload: 5
}
const decrementAction: Action = {
  type: 'decrement',
  payload: 5
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload }
    case 'decrement':
      return { count: state.count - action.payload }
    default:
      throw new Error()
  }
}

function TestUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      Count: { state.count }
      <button onClick={ () => dispatch(incrementAction) }>+</button>
      <button onClick={ () => dispatch(decrementAction) }>-</button>
    </div>
  )
}

export default TestUseReducer