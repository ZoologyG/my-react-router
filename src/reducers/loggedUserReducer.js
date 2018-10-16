const initialState = {
  logged: false,
  pending: true,
}

const loggedUserReducer = (state = initialState, action) => {
  const {type, logged} = action;
  if (type === 'GET_LOGGED_USER') {
    return Object.assign({}, state, {
      pending: false
    })
  }
  if (type === 'SET_LOGGED_USER') {
    return Object.assign({}, state, {
      pending: false,
      logged: logged
    })
  }
  return state
}

export default loggedUserReducer